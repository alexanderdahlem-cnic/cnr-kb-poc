---
title: "AddServer"
description: "CentralNic Reseller API Command Reference  ➤ Server ➤ AddServer ➥ Learn more about CentralNic Reseller API Commands"
---

Create a server.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND     = AddServer
CLASS       = [VSERVER_512|VSERVER_1024|VSERVER_2048]
AUTOINSTALL = 1
SERVERPTR   = [TEXT]
PERIOD      = [1M|3M|6M]
RENEWALMODE = [AUTORENEW|AUTOEXPIRE]</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code                  = [INT]
description           = [TEXT]
property[SERVER][0]   = [TEXT]
property[SERVERIP][0] = [IP]
property[VNCIP][0]    = [IP]
property[VNCPASS][0]  = [TEXT]
property[VNCPORT][0]  = [INT]</code></pre></div>

### Attributes

| **SERVER** | Unique ID of the new server |
| --- | --- |
| **SERVERIP** | IP of the new server |
| **VNCIP** | IP of the VNC server connected to the new server |
| **VNCPASS** | Password to connect to the VNC server |
| **VNCPORT** | Port of the VNC server connected to the new server |
