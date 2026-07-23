---
title: "ChargeMobileAccount"
description: "CentralNic Reseller API Command Reference  ➤ SMS ➤ ChargeMobileAccount ➥ Learn more about CentralNic Reseller API Commands"
---

Charge your mobile account, the amount on this account is independent from your main account, just the charging will be accounted on the main account, not single SMS.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a><a class="gw-badge gw-sms" href="../../../services/sms/">SMS</a></div></div>

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
