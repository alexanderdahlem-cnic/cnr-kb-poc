---
title: "ReserveDomain"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ ReserveDomain ➥ Learn more about CentralNic Reseller API Commands"
---

Reserve a domain in the aftermarket. This is a non-binding offer. Use BuyDomain with the token returned from this command to buy the domain later. ReserveDomain now reserves a domain for 96 hours at once and (if provided by provider) returns the time until a lock expires. Afterwards it will be released and is not reserved any more. Please note, the ReserveDomain command is only working for domains that are offered for direct sale, not for biddings. An event will be created once the lock is expired depending on the automated system cycle:  
  
AFTERMARKET\_BID::BID\_FAILED (token:;domain:;reason:timeout)

## Possible Gateways

The command _ReserveDomain_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND               = ReserveDomain
DOMAIN                = <DOMAIN>
BID                   = <DECIMAL>
PROVIDER              = sedo
CONTACT               = <CONTACT>
```

### Response

```
code                  = <INT>
description           = <TEXT>
property[TOKEN][0]    = <TEXT>
property[provider][0] = sedo
property[expires][0]  = YYYY-MM-DD HH:MM:SS GMT
```

| **TOKEN** | Token to identify this process in our system  
 |
| --- | --- |
