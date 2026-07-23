---
title: "ChargeMobileAccount"
description: "CentralNic Reseller API Command Reference  ➤ SMS ➤ ChargeMobileAccount ➥ Learn more about CentralNic Reseller API Commands"
---

Charge your mobile account, the amount on this account is independent from your main account, just the charging will be accounted on the main account, not single SMS.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span><span class="gw-badge gw-sms">SMS</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command   = ChargeMobileAccount
accountid =(TEXT)
amount    =(INT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code                          =(INT)
description                   =(TEXT)
property[accountid][0]        =(TEXT)
property[password][0]         =(TEXT)
property[current][0]          =(INT)
property[status][0]           = ACTIVE
property[amount charged][0]   =(INT)
property[currency charged][0] =(TEXT)</code></pre></div>

### Attributes

| **ACCOUNTID** | ID of the account to be queried |
| --- | --- |
| **AMOUNT** | Amount to be charged on the mobile account from your real account, min 10, max 500 |
