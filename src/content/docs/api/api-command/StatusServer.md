---
title: "StatusServer"
description: "CentralNic Reseller API Command Reference  ➤ Server ➤ StatusServer ➥ Learn more about CentralNic Reseller API Commands"
---

Used to query the current status of the server.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = StatusServer
SERVER  = [Server-ID]</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code                         = [INT]
description                  = [TEXT]
property[SERVER][0]          = [TEXT]
property[CLASS][0]           = VSERVER_512|VSERVER_1024|VSERVER_2048
property[STATUS][0]          = ACTIVE|DISABLED
property[STATE][0]           = RUNNING|STOPPED
property[PERIOD][0]          = 1M|3M|6M
property[RENEWALMODE][0]     = AUTORENEW|AUTOEXPIRE
property[CPUS][0]            = [INT]
property[MEM][0]             = [INT]
property[DISK][0]            = [INT]
property[SERVERIP][0]        = [IP]
property[SERVERMAC][0]       = [TEXT]
property[SERVERPTR][0]       = [TEXT]
property[BOOTORDER][0]       = cd|dc
property[CDIMAGE][0]         = [INT]
property[CREATED DATE][0]    = [DATE]
property[CREATED BY][0]      = [TEXT]
property[UPDATED DATE][0]    = [DATE]
property[UPDATED BY][0]      = [TEXT]
property[EXPIRATION DATE][0] = [DATE]
property[REGISTRAR][0]       = [TEXT]
property[VNCIP][0]           = [IP]
property[VNCKEYMAP][0]       = [ar|da|de|de-ch|en-gb|en-us|es|...]
property[VNCPORT][0]         = [INT]
property[VNCPASS][0]         = [TEXT]
property[VNCPOINTER][0]      = mouse|tablet</code></pre></div>

### Attributes

| **SERVER** | Unique ID of the server |
| --- | --- |
| **CLASS** | Server Class of this machine |
| **STATUS** | Status of the server |
| **STATE** | Current runtime state |
| **PERIOD** | Billing cycle of the server |
| **RENEWALMODE** | Renewalmode of the server |
| **CPUS** | Number of CPUs |
| **MEM** | Memory of this machine (in Bytes) |
| **DISK** | Disk space of this machine (in Bytes) |
| **SERVERIP** | IP address of this machine |
| **SERVERMAC** | MAC address of this machine |
| **SERVERPTR** | PTR/rDNS entry of the serverip |
| **BOOTORDER** | Boot order of the system |
| **CDIMAGE** | CD image currently used |
| **CREATED DATE** | Server was created on this date |
| **CREATED BY** | Registrar which added this server |
| **UPDATED DATE** | Server last updated on this date |
| **UPDATED BY** | Server last updated by this registrar |
| **EXPIRATION DATE** | Server paid until this date |
| **REGISTRAR** | Registrar this server belongs to |
| **VNCIP** | IP address of VNC server |
| **VNCKEYMAP** | Keyboard mapping of the VNC server |
| **VNCPORT** | Port of VNC server |
| **VNCPASS** | Password of VNC server |
| **VNCPOINTER** | Type of pointer emulation for VNC |
