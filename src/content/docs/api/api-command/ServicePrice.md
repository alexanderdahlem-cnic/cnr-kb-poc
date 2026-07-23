---
title: "ServicePrice"
description: "CentralNic Reseller API Command Reference  ➤ Finance ➤ ServicePrice ➥ Learn more about CentralNic Reseller API Commands"
---

The ServicePrice command can be used to get the amount that will be charged for a service for a specific action.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = ServicePrice
SERVICE = TRUSTEE |  APPLICATION | SERVER | MOBILE | CERTIFICATE | WEBSPACE</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[SERVICE][0] = (TEXT)
property[TYPE][0] = (TEXT)
property[PRICEPERIOD][0] = (TEXT)
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
property[ACTION][0] = (TEXT)
property[PERIOD][0] = (INT)
property[PRICE][0] = (DECIMAL)
property[VAT][0] = (DECIMAL)
property[NONREFUNDABLE][0] = (DECIMAL)
property[VATNONREFUNDABLE][0] = (DECIMAL)
property[PROMOTION][n] = (TEXT)</code></pre></div>

### Attributes

| **SERVICE** | The service for the pricing |
| --- | --- |
| **TYPE** | Type of the service |
| **PRICEPERIOD** | The period for the periodtype used to get the pricing |
| **PERIODTYPE** | The periodtype of the priceperiod used to get the pricing |
| **SETUP** | Refundabel setup fee to be paid for this servicetype |
| **APPLICATION** | Non refundable setupfee for this servicetype |
| **ANNUAL** | period fee to be paid for this servicetype |
| **TRANSFER** | Transfer fee for this servicetype (if available) |
| **TRADE** | Trade fee for this servicetype (if available) |
| **RESTORE** | Fee charged for restores (if available) |
| **CURRENCY** | Currency of the prices for this servicetype |
| **VATPERCENT** | VAT % that will be charged |
| **ZONECURRENCY** | Price currency of the servicetype; Will only be returned if zonecurrency ! |
| **EXCHANGERATE** | Exchange rate used to calculate the service price; Will only be returned if zonecurrency ! |
| **ACTION** | The type which is calculated. Add, renew, transfer, trade or restore (if available).; Will only be returned if type ! |
| **PERIOD** | The period amount calculated for the price |
| **PRICE** | The amount that will be charged for this servicetype from your account. |
| **VAT** | The vat that will be charged for this servicetype from your account. |
| **NONREFUNDABLE** | The nonrefundable part of the price for this accounting |
| **VATNONREFUNDABLE** | The nonrefundable part of the vat for this accounting |
| **PROMOTION** | Promotion used to calculate the price |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = ServicePrice
PERIOD = (TEXT)
PERIODTYPE = (TEXT)
ACTION = ADD|RENEW|TRANSFER
SERVICE = TRUSTEE |  APPLICATION | SERVER | MOBILE | CERTIFICATE | WEBSPACE
TYPE = (TEXT)
DOMAIN = (TEXT)
X-PROMOTION-CODE = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[SERVICE][0] = (TEXT)
property[TYPE][0] = (TEXT)
property[PRICEPERIOD][0] = (TEXT)
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
property[ACTION][0] = (TEXT)
property[PERIOD][0] = (INT)
property[PRICE][0] = (DECIMAL)</code></pre></div>

 property\[VAT\]\[0\] = (DECIMAL) property\[NONREFUNDABLE\]\[0\] = (DECIMAL) property\[VATNONREFUNDABLE\]\[0\] = (DECIMAL) property\[PROMOTION\]\[n\] = (TEXT)

### Attributes

| **PERIOD** | The period that will be calculated. Default is 1. (optional) |
| --- | --- |
| **PERIODTYPE** | The periodtype that will be used for calculation. Default is YEAR. (optional) |
| **ACTION** | The action that should be calculated (optional) |
| **SERVICE** | The service that should be calculated (optional) |
| **TYPE** | The service class (optional) |
| **DOMAIN** | The domainname for applications with premium domain names. (optional) |
| **X-PROMOTION-CODE** | Promotion code to be used for calculating the price (optional) |
