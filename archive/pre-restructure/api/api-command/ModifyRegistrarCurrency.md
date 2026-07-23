---
title: "ModifyRegistrarCurrency"
description: "CentralNic Reseller API Command Reference  ➤ Account ➤ ModifyRegistrarCurrency ➥ Learn more about CentralNic Reseller API Commands"
---

The new API command ModifyRegistrarCurrency allows registrars to change their currency or the currency of a subreseller account. This currency must be supported by the European Central Bank. For direct RRPproxy customers, only USD, EUR, GBP, AUD, CAD, NZD, CHF, and PLN are allowed. It also converts the current credit value to the new currency and rounds the new credit up at the last digit. Example: Credit old currency = 5000,00 USD -> Credit new currency = 3421,38 EUR -> Rounded credit new currency = 3430,00 EUR. If there are already accountings in the current month, the currency change will be stored and executed at the beginning of the next invoice period. The command will return STATUS=PENDING in the response with a CHANGEDATE when the change will be effective. On direct currency changes STATUS=SUCCESS will be returned. It is also possible to cancel a pending currency change by using the paramter CANCELCHANGE=1 in the API call. If there is a pending change, the API will return STATUS=DELETED in response.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND=ModifyRegistrarCurrency
CURRENCY=USD|EUR|GBP|CHF|PLN|AUD|NZD|CAD</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
runtime = 0.016
property[status][0] = SUCCESS</code></pre></div>

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND=ModifyRegistrarCurrency
CURRENCY=USD|EUR|GBP|CHF|PLN|AUD|NZD|CAD
CANCELCHANGE=0|1</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
runtime = 0.009
property[status][0] = DELETED</code></pre></div>


