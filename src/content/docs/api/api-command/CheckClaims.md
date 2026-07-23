---
title: "CheckClaims"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ CheckClaims ➥ Learn more about CentralNic Reseller API Commands"
---

The CheckClaims Command is used to determine whether or not there are any matching trademarks, in the specified launch phase, for each domain name passed in the command. If there is at least one matching trademark that exists for the domain name, a "claim key", "claim url" and "claim validator id" property is returned. You can specify a maximum of 32 domains.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = CheckClaims
DOMAIN# = (DOMAIN)
CLASS = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[CLAIM_EXISTS][n] = (TEXT)
property[CLAIM_KEY][n] = (TEXT)
property[CLAIM_URL][n] = (TEXT)
property[CLAIM_VALIDATOR_ID][n] = (TEXT)
property[RUNTIME][0] = (TEXT)</code></pre></div>

### Attributes

| **DOMAIN#** | Domain name to be checked (optional) |
| --- | --- |
| **CLASS** | Application class (optional) e.g. TLD-GOLIVE |
| **CLAIM\_EXISTS** | Returns the 1 if claim exists or 0 if not exists |
| **CLAIM\_KEY** | The claim key |
| **CLAIM\_URL** | Claimsnotice download URL |
| **CLAIM\_VALIDATOR\_ID** | The claim key |
|  |  |
