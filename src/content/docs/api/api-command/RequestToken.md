---
title: "RequestToken"
description: "CentralNic Reseller API Command Reference  ➤ Contact ➤ RequestToken ➥ Learn more about CentralNic Reseller API Commands"
---

To request a token to be sent within an email to a given Contact Handle or Domain. If a Domain is stated an email with a token will be sent to all linked contact handles. In case a contact handle is used multiple times (i.e. for Admin and Tech) only one email per contact handle is sent.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=RequestToken
type=ContactDisclosure
contact=(CONTACT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **CONTACT** | P-Handle for which the token should be requested |
| --- | --- |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=RequestToken
type=ContactDisclosure
domain=(DOMAIN)
contacttype0=OWNER(optional)
contacttype1=ADMIN(optional)
contacttype2=TECH(optional)
contacttype3=BILLING(optional)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
property[contact][0] = P-SPZ22
property[description][0] =
property[status][0] = SUCCESS
property[contact][0] = P-PHS26
property[contact][1] = P-PCS25
property[contact][2] = P-PGS24
property[description][0] =
property[description][1] =
property[description][2] =
property[status][0] = SUCCESS
property[status][1] = SUCCESS
property[status][2] = SUCCESS</code></pre></div>


