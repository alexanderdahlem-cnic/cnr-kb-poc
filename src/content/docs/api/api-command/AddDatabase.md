---
title: "AddDatabase"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Database ➤ AddDatabase ➥ Learn more about CentralNic Reseller API Commands"
---

Creates a new Database, returns the Database-ID, user and IP in the properties. The Quota is an integer and the unit is MB.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = AddDatabase
DATABASE = (TEXT)
X-HOSTING-ONECLICK-WEBHOST = (TEXT)
X-HOSTING-ONECLICK = 0|1
QUOTA = (INT)
X-HOSTING-ADVERT = 0|1
X-HOSTING-LOCATION = EU|US|IM
PASSWORD = (TEXT)
NAME = (TEXT)
X-PROMOTION-CODE = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[DATABASE][0] = (TEXT)
property[IP][0] = (IP)</code></pre></div>

### Attributes

| **DATABASE** | Name of the database (optional) |
| --- | --- |
| **X-HOSTING-ONECLICK-WEBHOST** | Name of the associated webhost (optional) |
| **X-HOSTING-ONECLICK** | Enable OneClick for this database (optional) |
| **QUOTA** | Size in megabytes |
| **X-HOSTING-ADVERT** | To use free webhosting set to 1 |
| **X-HOSTING-LOCATION** | Where the webspace should be hosted (Europe, USA, Isle of Man) |
| **PASSWORD** | Password of the database user |
| **NAME** | Set mailspace name max. 255 characters |
| **X-PROMOTION-CODE** | Promotion - parameter used to get the promotion - pricing (if available, optional) |
| **DATABASE** | Unique ID of the new database |
| **IP** | IP address of the new database |
