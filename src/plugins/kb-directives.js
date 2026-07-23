/**
 * KB remark plugin: turn clean Markdown container directives into the presentation
 * markup the CSS in src/styles/custom.css targets. Content stays plain `.md`
 * (CMS-friendly); presentation lives here.
 *
 * Supported directives (all container `:::name … :::`):
 *   :::command[Label]   -> yellow API "Command" box wrapping a fenced code block
 *   :::response[Label]  -> blue "Response" box
 *   :::exception[Label] -> red "Exception" box (TLD pages)
 *   :::gateways         -> "Possible Gateways" coloured pill badges (from a link list)
 *   :::commandlist[Cat] -> a row of neutral command buttons (from a link list),
 *                          used for `nav.related` groups and TLD command anchors
 *   :::tldnav           -> the TLD section button row (neutral buttons)
 *
 * The label in `[...]` is the verbatim flag text from the legacy source
 * (e.g. "Command" / "Standard command" / "Exception").
 */
import { visit } from 'unist-util-visit';
import { toString } from 'mdast-util-to-string';

const API_KINDS = new Set(['command', 'response', 'exception']);
const DEFAULT_LABEL = { command: 'Command', response: 'Response', exception: 'Exception' };

/** Infer a gateway badge colour class from its label text. */
function gatewayClass(label) {
  const t = label.toLowerCase().replace(/[^a-z]/g, '');
  if (t.includes('mreg') || t.includes('metaregistry')) return 'gw-mreg';
  if (t.includes('https')) return 'gw-https';
  if (t.includes('soap')) return 'gw-soap';
  if (t.includes('xmlrpc')) return 'gw-xmlrpc';
  if (t.includes('smtp')) return 'gw-smtp';
  if (t.includes('sms')) return 'gw-sms';
  return 'gw-default';
}

/** Build a mdast node that renders as `<span class="…">text</span>`. */
function labelSpan(text, className) {
  return {
    type: 'paragraph',
    data: { hName: 'span', hProperties: { className } },
    children: [{ type: 'text', value: text }],
  };
}

/** Pull the directive label ([...] after the name) out of the children, if present. */
function takeLabel(node, fallback) {
  const first = node.children && node.children[0];
  if (first && first.data && first.data.directiveLabel) {
    node.children = node.children.slice(1);
    return toString(first).trim() || fallback;
  }
  return fallback;
}

/** Collect the <a> (link) nodes from a Markdown list inside a directive. */
function linksFromList(node) {
  const links = [];
  visit(node, 'link', (link) => links.push(link));
  return links;
}

export default function kbDirectives() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type !== 'containerDirective' && node.type !== 'leafDirective') return;
      const name = node.name;

      if (API_KINDS.has(name)) {
        const label = takeLabel(node, DEFAULT_LABEL[name]);
        const data = node.data || (node.data = {});
        data.hName = 'div';
        data.hProperties = { className: ['api-io', `api-io--${name}`] };
        node.children.unshift(labelSpan(label, ['api-io__label']));
        return;
      }

      if (name === 'gateways') {
        const label = takeLabel(node, 'Possible Gateways');
        const links = linksFromList(node);
        for (const link of links) {
          const text = toString(link).trim();
          link.data = link.data || {};
          link.data.hProperties = { className: ['gw-badge', gatewayClass(text)] };
        }
        const data = node.data || (node.data = {});
        data.hName = 'div';
        data.hProperties = { className: ['gw-list'] };
        node.children = [
          labelSpan(label, ['gw-list__label']),
          {
            type: 'paragraph',
            data: { hName: 'div', hProperties: { className: ['gw-badges'] } },
            children: links,
          },
        ];
        return;
      }

      if (name === 'commandlist' || name === 'tldnav') {
        const isNav = name === 'tldnav';
        const label = takeLabel(node, isNav ? '' : '');
        const links = linksFromList(node);
        for (const link of links) {
          link.data = link.data || {};
          link.data.hProperties = { className: ['cmd-btn'] };
        }
        const data = node.data || (node.data = {});
        data.hName = 'div';
        data.hProperties = { className: isNav ? ['tld-nav'] : ['cmd-list'] };
        const children = [];
        if (label) children.push(labelSpan(label, ['cmd-list__label']));
        children.push({
          type: 'paragraph',
          data: { hName: 'div', hProperties: { className: ['cmd-buttons'] } },
          children: links,
        });
        node.children = children;
        return;
      }
    });
  };
}
