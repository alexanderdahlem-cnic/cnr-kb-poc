---
title: "ConvertCurrency"
description: "CentralNic Reseller API Command Reference  ➤ Finance ➤ ConvertCurrency ➥ Learn more about CentralNic Reseller API Commands"
---

Converts a decimal amount from one currency to another currency with the current exchange rate.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = ConvertCurrency
AMOUNT = (DECIMAL)
FROM = (TEXT)
TO = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[AMOUNT][0] = (DECIMAL)
property[FROM][0] = (TEXT)
property[TO][0] = (TEXT)
property[CONVERTED_AMOUNT][0] = (DECIMAL)
property[RATE][0] = (DECIMAL)</code></pre></div>

### Attributes

| **AMOUNT** | Amount to convert/The amount given in the request |
| --- | --- |
| **FROM** | Currency to convert from/The original currency of the amount |
| **TO** | Currency to convert to/The currency the command converted the amount into |
| **CONVERTED\_AMOUNT** | The amount after the convertion |
| **RATE** | Convertion rate used to convert the amount |
