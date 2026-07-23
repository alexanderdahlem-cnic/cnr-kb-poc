---
title: "TransferDomain"
description: "CentralNic Reseller API Command Reference  ➤ Transfer ➤ TransferDomain ➥ Learn more about CentralNic Reseller API Commands"
---

_(Related EPP Command » [Transfer:Request](../../epp-command/transfer-request/ "Transfer:Request"))_

Simply enter the command and the respective domain name. Please note that in order to initiate a transfer for most domains you need the respective authorization code (auth).

## Possible Gateways

The command _TransferDomain_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

-   [Default handling](#)
-   [Premium features](#)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = TransferDomain
domain = YOURDOMAIN.TLD
action = REQUEST
auth = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[INFO][0] = (TEXT)
property[JOB_ID][0] = (TEXT)
property[PROMOTIONS][0] = (TEXT)
property[RENEWAL_PERIOD][0] = (TEXT)
property[ROID][0] = (TEXT)
property[TRANSFER_STATUS][0] = (TEXT)
property[TRANSFERSTATUS][0] = (TEXT)</code></pre></div>

### Attributes

| **DOMAIN** | Domain name to be transferred |
| --- | --- |
| **ACTION** | Optional |
| **AUTH** | Not valid for all zones (optional) |
| **OWNERCONTACT0** | Only valid for specific zones (optional) |
| **ADMINCONTACT#** | Only valid for specific zones (optional) |
| **TECHCONTACT#** | Only valid for specific zones (optional)l) |
| **BILLINGCONTACT#** | Only valid for specific zones (optional) |
| **NAMESERVER#** | Only valid for specific zones (optional) |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = TransferDomain
domain = YOURDOMAIN.TLD
action = REQUEST|APPROVE|DENY|CANCEL|USERTRANSFER|PUSH|TRADE
auth = (TEXT)
ownercontact0 = (CONTACT)
admincontact# = (CONTACT)
techcontact# = (CONTACT)
billingcontact# = (CONTACT)
nameserver0 = (NAMESERVER)
nameserver1 = (NAMESERVER)
nameserver1 = (NAMESERVER)
nameserver# = (NAMESERVER)
target = (TEXT)
period = 1|1M|3M
X-PROMOTION-CODE = (TEXT)
X-ACCEPT-QUARANTINE = 0|1
X-(TLD)-ACCEPT-TRUSTEE-TAC = 1
token = (TEXT)
accept-trade = 0|1
domainauth = (TEXT)
emaillanguage = en_US|de_DE|pl_PL|sv_SE|es_ES|it_IT|fr_FR|nl_NL
emailsender = (EMAIL)
emailsubject = (TEXT)
emailtac = (TEXT)
emailurl = (TEXT)
transferlock = 0|1</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[INFO][0] = (TEXT)
property[JOB_ID][0] = (TEXT)
property[PROMOTIONS][0] = (TEXT)
property[RENEWAL_PERIOD][0] = (TEXT)
property[ROID][0] = (TEXT)
property[TRANSFER_STATUS][0] = (TEXT)
property[TRANSFERSTATUS][0] = (TEXT)</code></pre></div>

### Attributes

| **TARGET** | Only valid for specific zones (optional) |
| --- | --- |
| **PERIOD** | Renewal after transfer (yearly/monthly/quarterly; only valid for specific zones, optional) |
| **X-PROMOTION-CODE** | Optional |
| **X-ACCEPT-QUARANTINE** | Transfer the domain from registry quarantine (only valid for specific zones, optional) |
| **X-(TLD)-ACCEPT-TRUSTEE-TAC** | Use trustee where possible for supported TLDs |
| **TOKEN** | The one time authorization token for protected domain names. (optional) |
| **ACCEPT-TRADE** | Only valid for specific zones (optional) |
| **DOMAINAUTH** | Optional |
| **EMAILLANGUAGE** | Optional |
| **EMAILSENDER** | Optional |
| **EMAILSUBJECT** | Optional |
| **EMAILTAC** | Optional |
| **EMAILURL** | Optional |
| **TRANSFERLOCK** | Optional |

## Required Parameters (premium)

The following premium parameters are standard for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = TransferDomain
domain = YOURDOMAIN.TLD
action = REQUEST
auth = (TEXT)
ownercontact0 = (CONTACT)
admincontact# = (CONTACT)
techcontact# = (CONTACT)
billingcontact# = (CONTACT)
nameserver# = (NAMESERVER)
X-FEE-AMOUNT0 = (DECIMAL)
X-FEE-APPLICATION = (DECIMAL)
X-FEE-CURRENCY = (TEXT)
X-ACCEPT-PREMIUMPRICE = 0|1</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[INFO][0] = (TEXT)
property[JOB_ID][0] = (TEXT)
property[PROMOTIONS][0] = (TEXT)</code></pre></div>

 property\[RENEWAL\_PERIOD\]\[0\] = (TEXT) property\[ROID\]\[0\] = (TEXT) property\[TRANSFER\_STATUS\]\[0\] = (TEXT) property\[TRANSFERSTATUS\]\[0\] = (TEXT) property\[X-FEE-AMOUNT\]\[0\] = (DECIMAL) property\[X-FEE-APPLICATION\]\[0\] = (DECIMAL) property\[X-FEE-CURRENCY\]\[0\] = (TEXT)

### Attributes

| **X-FEE-AMOUNT0** | Amount of the fee extension. (optional) |
| --- | --- |
| **X-FEE-APPLICATION** | None refundable amount of the fee extension. (optional) |
| **X-FEE-CURRENCY** | Currency of the fee extension. Default is the own account currency. (optional) |
| **X-ACCEPT-PREMIUMPRICE** | No|Yes (optional) |
