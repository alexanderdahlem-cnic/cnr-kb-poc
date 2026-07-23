---
title: "StatusObjectLog"
description: "CentralNic Reseller API Command Reference  ➤ Query ➤ StatusObjectLog ➥ Learn more about CentralNic Reseller API Commands"
---

Gather information about a particular entry of the object log

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = StatusObjectLog
LOG = (INT) </code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[LOG_DATE][0] = (TEXT)
property[OBJECT_CLASS][0] = (TEXT)
property[ID_CLASS][0] = (TEXT)
property[OPERATION_TYPE][0] = (TEXT)
property[OPERATION_INFO][0] = (TEXT)</code></pre></div>

### Attributes

| **LOG** | ID of the log - entry |
| --- | --- |
