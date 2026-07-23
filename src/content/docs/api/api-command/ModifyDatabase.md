---
title: "ModifyDatabase"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Database ➤ ModifyDatabase ➥ Learn more about CentralNic Reseller API Commands"
---

Modify Database, i.E. alter Quota

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = ModifyDatabase
DATABASE = (TEXT)
PASSWORD = (TEXT)
X-HOSTING-ONECLICK-WEBHOST = (TEXT)
X-HOSTING-ONECLICK = 0|1
QUOTA = (INT)
X-HOSTING-ADVERT = 0|1
STATUS = ACTIVE|DISABLED
LOG = (TEXT)
NAME = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)</code></pre></div>

### Attributes

| **DATABASE** | Name of the object to modify |
| --- | --- |
| **PASSWORD** | Changes the database password (optional) |
| **X-HOSTING-ONECLICK-WEBHOST** | Name of the associated webhost (optional) |
| **X-HOSTING-ONECLICK** | Enable OneClick for this database (optional) |
| **QUOTA** | Sets the maximal database size in MB (optional) |
| **X-HOSTING-ADVERT** | To use free webhosting set to 1 |
| **STATUS** | Modifies the database status (optional) |
| **LOG** | Appends \[TEXT\] log text to the database "change log", which can be queried with StatusDatabase (optional) |
| **NAME** | Set mailspace name max. 255 characters |
