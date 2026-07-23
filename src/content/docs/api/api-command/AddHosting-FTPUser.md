---
title: "AddHosting - FTPUser"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ AddHosting - FTPUser ➥ Learn more about CentralNic Reseller API Commands"
---

This command is used to create a new cPanel FTP user with a specific "TYPE". There is a separate API command page for each specific "TYPE". Please kindly note the "TYPE" parameter value here. Different parameters are needed for different "TYPE".

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND     = AddHosting
TYPE         = ftpuser
CLASS     = cpanel
ACCOUNT     = (TEXT)
OBJECT     = ftp-user1
PASSWORD    = (TEXT)</code></pre></div>

### Attributes

| **ACCOUNT** | The cPanel account ID of the end customer. |
| --- | --- |
| **DIRECTORY** | The directory path for addon domains. |
| **OBJECT** | Any domain name. |
| **PASSWORD** | This is optional for the user to set their own password, otherwise the system will automatically generate one. |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND     = AddHosting
TYPE         = ftpuser
CLASS     = cpanel
ACCOUNT     = (TEXT)
OBJECT     = ftp-user1
PASSWORD    = (TEXT)
DIRECTORY    = (TEXT)</code></pre></div>


