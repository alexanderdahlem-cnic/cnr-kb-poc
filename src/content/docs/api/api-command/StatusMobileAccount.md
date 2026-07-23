---
title: "StatusMobileAccount"
description: "CentralNic Reseller API Command Reference  ➤ SMS ➤ StatusMobileAccount ➥ Learn more about CentralNic Reseller API Commands"
---

Get details of your mobile account, useful if you forgot the password or need to ensure that enough money is charged on it.

## Possible Gateways

The command _StatusMobileAccount_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)
-   [SMS](../../../services/sms/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command   = StatusMobileAccount
accountid =(TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code                          =(INT)
description                   =(TEXT)
property[accountid][0]        =(TEXT)
property[password][0]         =(TEXT)
property[current][0]          =(INT)
property[currency][0]         =(TEXT)
property[status][0]           = ACTIVE
property[amount charged][0]   =(INT)
property[currency charged][0] =(TEXT)</code></pre></div>

### Attributes

| **ACCOUNTID** | ID of the account to be queried |
| --- | --- |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command   = StatusMobileAccount
accountid =(TEXT)
wide      =(0|1)
recipient =(TEXT)
mindate   =(DATE)
maxdate   =(DATE)
smsid     =(TEXT)
first     =(INT)
limit     =(INT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code                          =(INT)
description                   =(TEXT)
property[accountid][0]        =(TEXT)
property[password][0]         =(TEXT)
property[current][0]          =(INT)
property[currency][0]         =(TEXT)
property[status][0]           = ACTIVE
property[amount charged][0]   =(INT)
property[currency charged][0] =(TEXT)</code></pre></div>


