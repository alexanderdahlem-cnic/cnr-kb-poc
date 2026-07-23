---
title: "StatusDatabase"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Database ➤ StatusDatabase ➥ Learn more about CentralNic Reseller API Commands"
---

Get Database status, returns the Database-ID and its properties.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = StatusDatabase
LOG = 0|1
DATABASE = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[CREATED DATE][0] = (DATETIME)
property[DATABASE][0] = (DATE)
property[IP][0] = (TEXT)
property[QUOTA][0] = (TEXT)
property[STATUS][0] = active|disabled
property[USED QUOTA][0] = (INT)</code></pre></div>

### Attributes

| **LOG** | Optional |
| --- | --- |
| **DATABASE** | Name of the object to query |
| **CREATED DATE** | Creation date of the web space |
| **DATABASE** | Unique ID of the database |
| **IP** | IP address of the webs space |
| **QUOTA** | Maximal size of the database in MB |
| **STATUS** | Current status of the web space |
| **USED QUOTA** | Quota usage |
