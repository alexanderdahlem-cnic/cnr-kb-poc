---
title: "ModifyDomain"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ ModifyDomain ➥ Learn more about CentralNic Reseller API Commands"
---

_(Related EPP Command » [Domain:Update](../../epp-command/domain-update/ "Domain:Update"))_

The ModifyDomain command allows you to modify the contact data of the domain or the nameservers as well as to set or remove a transfer lock or special parameters associated with the domain.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = ModifyDomain
domain  = YOURDOMAIN.TLD</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code        = (CODE)
description = (DESCRIPTION)</code></pre></div>

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = ModifyDomain
domain  = (DOMAIN)
addnameserver0            = (NAMESERVER)
addnameserver1            = (NAMESERVER)
addnameserver2            = (NAMESERVER)
addnameserver12           = (NAMESERVER)
delnameserver0            = (NAMESERVER)
delnameserver1            = (NAMESERVER)
delnameserver2            = (NAMESERVER)
delnameserver12           = (NAMESERVER)
nameserver0               = (NAMESERVER)
nameserver1               = (NAMESERVER)
nameserver2               = (NAMESERVER)
nameserver12              = (NAMESERVER)
addownercontact0          = (CONTACT)
delownercontact0          = (CONTACT)
ownercontact0             = (CONTACT)
addadmincontact0          = (CONTACT)
addadmincontact1          = (CONTACT)
addadmincontact2          = (CONTACT)
deladmincontact0          = (CONTACT)
deladmincontact1          = (CONTACT)
deladmincontact2          = (CONTACT)
admincontact0             = (CONTACT)
admincontact1             = (CONTACT)
admincontact2             = (CONTACT)
addtechcontact0           = (CONTACT)
addtechcontact1           = (CONTACT)
addtechcontact2           = (CONTACT)
deltechcontact0           = (CONTACT)
deltechcontact1           = (CONTACT)
deltechcontact2           = (CONTACT)
techcontact0              = (CONTACT)
techcontact1              = (CONTACT)
techcontact2              = (CONTACT)
addbillingcontact0        = (CONTACT)
addbillingcontact1        = (CONTACT)
addbillingcontact2        = (CONTACT)
delbillingcontact0        = (CONTACT)
delbillingcontact1        = (CONTACT)
delbillingcontact2        = (CONTACT)
billingcontact0           = (CONTACT)
billingcontact1           = (CONTACT)
billingcontact2           = (CONTACT)
addstatus0                = registrar-lock|registrar-hold|clientTransferProhibited|clientRenewProhibited|clientDeleteProhibited|clientUpdateProhibited|clientHold
addstatus1                = registrar-lock|registrar-hold|clientTransferProhibited|clientRenewProhibited|clientDeleteProhibited|clientUpdateProhibited|clientHold
addstatus2                = registrar-lock|registrar-hold|clientTransferProhibited|clientRenewProhibited|clientDeleteProhibited|clientUpdateProhibited|clientHold
addstatus3                = registrar-lock|registrar-hold|clientTransferProhibited|clientRenewProhibited|clientDeleteProhibited|clientUpdateProhibited|clientHold
addstatus4                = registrar-lock|registrar-hold|clientTransferProhibited|clientRenewProhibited|clientDeleteProhibited|clientUpdateProhibited|clientHold
delstatus0                = registrar-lock|registrar-hold|clientTransferProhibited|clientRenewProhibited|clientDeleteProhibited|clientUpdateProhibited|clientHold
delstatus1                = registrar-lock|registrar-hold|clientTransferProhibited|clientRenewProhibited|clientDeleteProhibited|clientUpdateProhibited|clientHold
delstatus2                = registrar-lock|registrar-hold|clientTransferProhibited|clientRenewProhibited|clientDeleteProhibited|clientUpdateProhibited|clientHold
delstatus3                = registrar-lock|registrar-hold|clientTransferProhibited|clientRenewProhibited|clientDeleteProhibited|clientUpdateProhibited|clientHold
delstatus4                = registrar-lock|registrar-hold|clientTransferProhibited|clientRenewProhibited|clientDeleteProhibited|clientUpdateProhibited|clientHold
status0                   = registrar-lock|registrar-hold|clientTransferProhibited|clientRenewProhibited|clientDeleteProhibited|clientUpdateProhibited|clientHold
status1                   = registrar-lock|registrar-hold|clientTransferProhibited|clientRenewProhibited|clientDeleteProhibited|clientUpdateProhibited|clientHold
status2                   = registrar-lock|registrar-hold|clientTransferProhibited|clientRenewProhibited|clientDeleteProhibited|clientUpdateProhibited|clientHold
status3                   = registrar-lock|registrar-hold|clientTransferProhibited|clientRenewProhibited|clientDeleteProhibited|clientUpdateProhibited|clientHold
status4                   = registrar-lock|registrar-hold|clientTransferProhibited|clientRenewProhibited|clientDeleteProhibited|clientUpdateProhibited|clientHold
auth                      = (TEXT)
transferlock              = 0 | 1
accept-trade             = 1
x-whois-url               = (TEXT)
x-whois-rsp               = (TEXT)
x-whois-banner0           = (TEXT)
x-whois-banner1           = (TEXT)
x-whois-banner2           = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code        = (CODE)
description = (DESCRIPTION)</code></pre></div>


