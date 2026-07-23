---
title: "DomainPrice"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ DomainPrice ➥ Learn more about CentralNic Reseller API Commands"
---

The DomainPrice command can be used to get the amount that will be charged for a domain for a specific action. RAM clients will only receive the RAM fees for this operation.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = DomainPrice
PERIOD = &lt;TEXT&gt;
PERIODTYPE = &lt;TEXT&gt;
DOMAIN = &lt;DOMAIN&gt;
TYPE = ADDDOMAIN|RENEWDOMAIN|TRANSFERDOMAIN|RESTOREDOMAIN
X-PROMOTION-CODE = &lt;TEXT&gt;</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[PREMIUM][0] = (TEXT)
property[DOMAIN][0] = (TEXT)
property[ZONE][0] = (TEXT)
property[PERIODTYPE][0] = (TEXT)
property[SETUP][0] = (DECIMAL)
property[APPLICATION][0] = (DECIMAL)
property[ANNUAL][0] = (DECIMAL)
property[TRANSFER][0] = (DECIMAL)
property[TRADE][0] = (DECIMAL)
property[RESTORE][0] = (DECIMAL)
property[CURRENCY][0] = (TEXT)
property[VATPERCENT][0] = (DECIMAL)
property[ZONECURRENCY][0] = (TEXT)
property[EXCHANGERATE][0] = (DECIMAL)
property[TYPE][0] = (TEXT)
property[PERIOD][0] = (INT)
property[PRICE][0] = (DECIMAL)
property[VAT][0] = (DECIMAL)
property[NONREFUNDABLE][0] = (DECIMAL)
property[VATNONREFUNDABLE][0] = (DECIMAL)
property[PROMOTION][n] = (TEXT)</code></pre></div>

### Attributes

| **PERIOD: The period that will be calculated. Default is 1. For monthly prices use period+M as period. (optional)** |
| --- |
| **PERIODTYPE: The periodtype that will be uset to calculate the prices. Default is YEAR. (optional)** |
| **DOMAIN: Domain the price should be calculated for** |
| **TYPE: The price for a specific action. (optional)** |
| **X-PROMOTION-CODE: Promotion code to be used for calculating the price (optional)** |
| **DOMAIN: The domain for the pricing** |
| **ZONE: Zone of the domain** |
| **PERIODTYPE: The periodtype for pricing** |
| **SETUP: Refundabel setup fee to be paid for this domain** |
| **APPLICATION: Non refundable setupfee for this domain** |
| **ANNUAL: period fee to be paid for this domain** |
| **TRANSFER: Transfer fee for this domain** |
| **TRADE: Trade fee for this domain (if available)** |
| **RESTORE: Fee charged for restores if possible** |
| **CURRENCY: Currency of the prices for this domain** |
| **VATPERCENT: VAT % that will be charged** |
| **ZONECURRENCY: Price currency of the zone; Will only be returned if zonecurrency != currency** |
| **EXCHANGERATE: Exchange rate used to calculate the domain price; Will only be returned if zonecurrency != currency** |
| **TYPE: The type which is calculated. Add, renew, transfer, trade or restore.; Will only be returned if type != NULL** |
| **PERIOD: The period amount calculated for the price** |
| **PRICE: The amount that will be charged for this type and this domain from your account.** |
| **VAT: The vat that will be charged for this type and this domain from your account.** |
| **NONREFUNDABLE: The nonrefundable part of the price for this accounting** |
| **VATNONREFUNDABLE: The nonrefundable part of the vat for this accounting** |
| **PROMOTION: Promotion used to calculate the price** |
