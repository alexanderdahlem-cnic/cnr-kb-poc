---
title: "TransferContact"
description: "CentralNic Reseller API Command Reference  ➤ Contact ➤ TransferContact ➥ Learn more about CentralNic Reseller API Commands"
---

_(Related EPP Command » [Contact:Transfer](../../epp-command/contact-transfer/ "Contact:Transfer"))_

This command allows you to request a contact transfer. Simply enter the command and the respective contact handle with the corresponding authorisation code(auth). The transfer will be processed immediately.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=TransferContact
contact=(CONTACT)
auth= .......</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[ack date][0] = (DATE)
property[current registrar][0] = (TEXT)
property[requesting registrar][0] = (TEXT)
property[request date][0] = (DATE)
property[transfer status][0] = (TEXT)</code></pre></div>


