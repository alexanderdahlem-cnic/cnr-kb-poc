---
title: "RenewDomain"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ RenewDomain ➥ Learn more about CentralNic Reseller API Commands"
---

_(Related EPP Command » [Domain:Renew](../../epp-command/domain-renew/ "Domain:Renew"))_

The RenewDomain command is used to renew domains explicitly for a specified time period. When renewing a domain please enter the domain, the period for renewal (e.g. period = 1) and the current expiration year (e.g. 2007). Please notice that you can not explicitly renew domains under all TLDs. For further information please see the corresponding TLD info page.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

-   [Default handling](#)
-   [Premium features](#)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command    = RenewDomain
domain     = YOURDOMAIN.TLD
period     = (INT)
expiration = (INT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[JOB_ID][n] = (TEXT)
property[REGISTRATION_EXPIRATION_DATE][0] = (DATE)</code></pre></div>

### Attributes

| **DOMAIN** | Domain to be renewed |
| --- | --- |
| **PERIOD** | The amount of years, you want to renew the domain (optional) |
| **EXPIRATION** | The current expiration year of the domain (May be checked with StatusDomain). If the domain is in auto renew grace period (a specified number of calendar days following an auto-renewal), please use the previous expiration date because the domain is at this time not renewed on CentralNic Reseller side. This will prevent unintended two year renewals. (optional) |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command    = RenewDomain
domain     = YOURDOMAIN.TLD
period     = (INT)
expiration = (INT)
X-PROMOTION-CODE = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[JOB_ID][n] = (TEXT)
property[PROMOTIONS][0] = (TEXT)
property[REGISTRATION_EXPIRATION_DATE][0] = (DATE)</code></pre></div>

### Attributes

| **X-PROMOTION-CODE** | Optional |
| --- | --- |

## Required Parameters (premium)

The following premium parameters are standard for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command    = RenewDomain
domain     = YOURDOMAIN.TLD
period     = (INT)
expiration = (INT)
X-FEE-AMOUNT = (DECIMAL)
X-FEE-AMOUNT# = (DECIMAL)
X-FEE-APPLICATION = (DECIMAL)
X-FEE-CURRENCY = (TEXT)
X-ACCEPT-PREMIUMPRICE = 0|1</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[JOB_ID][n] = (TEXT)
property[REGISTRATION_EXPIRATION_DATE][0] = (DATE)
property[X-FEE-AMOUNT][0] = (DECIMAL)
property[X-FEE-APPLICATION][0] = (DECIMAL)
property[X-FEE-CURRENCY][0] = (TEXT)</code></pre></div>

### Attributes

| **X-FEE-AMOUNT** | Amount of the fee extension. (optional) |
| --- | --- |
| **X-FEE-AMOUNT#** | Amount of the fee extension. (optional) |
| **X-FEE-APPLICATION** | None refundable amount of the fee extension. (optional) |
| **X-FEE-CURRENCY** | Currency of the fee extension. Default is the own account currency. (optional) |
| **X-ACCEPT-PREMIUMPRICE** | No|Yes (optional) |
