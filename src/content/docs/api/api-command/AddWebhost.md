---
title: "AddWebhost"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webhost ➤ AddWebhost ➥ Learn more about CentralNic Reseller API Commands"
---

Creates a new Webhost underneath a Webspace. Typically they are named after the domain they are allocated to.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = AddWebhost
WEBSPACE = (TEXT)
WEBHOST = (DOMAIN)
QUOTA = (INT)
SSL = (TEXT)
AUTOCERT = (TEXT)
X-HOSTING-ONECLICK-INSTALLATIONS-MAXIMUM = (INT)
X-HOSTING-ONECLICK-DATABASES-MAXIMUM = (INT)
X-HOSTING-ONECLICK = 0|1
DIR = (TEXT)
GPGLINE# = (TEXT)
LOGIN = (TEXT)
FTPPASSWD = (TEXT)
ERRORLOG = 0|1</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[IP][0] = (IP)
property[PRICE][0] = (DECIMAL)</code></pre></div>

### Attributes

| **WEBSPACE** | Unique webspace - ID where this webhost should be created |
| --- | --- |
| **WEBHOST** | Domainname to be used by this webhost |
| **QUOTA** | Size in megabytes |
| **SSL** | Vhost should have SSL activated |
| **AUTOCERT** | Vhost should have Lets Encrypt Certificate automatically generated |
| **X-HOSTING-ONECLICK-INSTALLATIONS-MAXIMUM** | Number if maximum OneClick Installations. |
| **X-HOSTING-ONECLICK-DATABASES-MAXIMUM** | Number if maximum Database Installations. |
| **X-HOSTING-ONECLICK** | Enable the OneClick Installation. |
| **DIR** | Webhost directory inside the webspace |
| **GPGLINE#** | Linewise SSL certificate encrypt with puplic GPG (optional) |
| **LOGIN** | FTP - username (needs to contain a dot ".", default |
| **FTPPASSWD** | FTP - password |
| **ERRORLOG** | Activate apache error logging:/weblogs/\[WEBHOST\]-YYYYMMDD-.error.log |
| **IP** | IP of the new webhost |
| **PRICE** | Monthly fee in EUR |
