---
title: "ModifyServer"
description: "CentralNic Reseller API Command Reference  ➤ Server ➤ ModifyServer ➥ Learn more about CentralNic Reseller API Commands"
---

Modify an existing server, you may i.e. change the bootorder, attach another cdimage to the system or set a new VNC password.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND     = ModifyServer
SERVER      = [TEXT]
STATUS      = [DISABLED]
BOOTORDER   = [cd|dc]
AUTOINSTALL = 1
VNCKEYMAP   = ar|da|de|de-ch|en-gb|... (please see description)
CDIMAGE     = [0 | 1 | 2 | 3 | 4]
SERVERPTR   = [TEXT]
VNCPOINTER  = [mouse|tablet]
VNCPASS     = [TEXT]
RENEWALMODE = [AUTORENEW|AUTOEXPIRE]
PERIOD      = [1M | 3M | 6M]
ACTION      = [CREATE | SHUTDOWN | DESTROY | REBOOT | RESET]</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code        = [INT]
description = [TEXT]</code></pre></div>


