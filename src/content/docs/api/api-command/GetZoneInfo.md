---
title: "GetZoneInfo"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ GetZoneInfo ➥ Learn more about CentralNic Reseller API Commands"
---

Query information about a zone, this includes (but not limited to): Allowed periods, IDN - capability, length - restrictions. The returned fields may vary across the different zones

## Possible Gateways

The command _GetZoneInfo_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = GetZoneInfo
ZONE = (TEXT)
DOMAIN = YOURDOMAIN.TLD</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[AUTORENEW_GRACE_PERIOD][0] = (TEXT)
property[CHANGE_OF_REGISTRANT][n] = (TEXT)
property[DELETION_PROCESS][n] = (TEXT)
property[DELETION_TIMEFRAME][0] = (TEXT)
property[DISPUTE_POLICY][0] = (TEXT)
property[DOMAIN_REGISTRATION][n] = (TEXT)
property[DOMAIN_RENEWAL][n] = (TEXT)
property[HANDLES_UPDATEABLE][0] = (TEXT)
property[IDN][0] = (TEXT)
property[PERIODS][0] = (TEXT)
property[REGISTRATION_SYSTEM][0] = (TEXT)
property[REGISTRY][0] = (TEXT)
property[RESTRICTIONS][n] = (TEXT)
property[TRANSFER_PROCEDURE][n] = (TEXT)
property[WHOIS_SERVER][0] = (TEXT)
property[WHOIS_UPDATE_REALTIME][0] = (TEXT)
property[WHOIS_UPDATE_TIME][0] = (TEXT)
property[ZONE][0] = (TEXT)
property[TRADE_POSSIBLE][0] = 0|1
property[RENEW_AFTER_TRANSFER][0] = 0|1
property[RESTORE_DAYS_POSSIBLE][0] = (INT)
property[RENEWAL_DEFAULT_TIMEFRAME][0] = (INT)
property[CHARACTERS_ALLOWED][0] = (TEXT)
property[CHARACTERS_MAXIMUM][0] = (INT)
property[CHARACTERS_MINIMUM][0] = (INT)
property[ZONE_INFO][0] = (TEXT)
property[ZONE_USE][0] = (TEXT)
property[REALTIME][0] = 0|1</code></pre></div>

### Attributes

| **ZONE** | Return information about this zone (optional)/The zone this information is valid for |
| --- | --- |
| **DOMAIN** | Get zone of this domain and return information about it (optional) |
| **TRADE\_POSSIBLE** | Indicates if zone allows trades |
| **RENEW\_AFTER\_TRANSFER** | Indicates if this zone renews a domain after a successful transfer |
