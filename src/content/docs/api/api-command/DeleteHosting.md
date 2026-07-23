---
title: "DeleteHosting"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ DeleteHosting ➥ Learn more about CentralNic Reseller API Commands"
---

DeleteHosting

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = DeleteHosting
CLASS required = cpanel (DEFAULT) -
TYPE required = useraccount|addondomain|domainalias|subdomain|email|emailforward|emaildomainforward|ftpuser|mysqldatabase|mysqldatabaseuser|mysqldatabaseuserprivileges
ACCOUNT required = cPanelAccountID
OBJECT optional =
DATABASENAME optional = -
DATABASEUSER optional = -
TARGET optional (emailforward, emaildomainforward, addondomain) =</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code =  (INT)
description =  (TEXT)
property[job id][0] = 305150
property[restoreable until][0] = 2019-03-24 06:59:50
property[status][0] = pendingDelete
property[updated date][0] = 2019-02-22 06:59:5</code></pre></div>


