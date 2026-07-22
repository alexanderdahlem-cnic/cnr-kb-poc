---
title: "CheckClaims"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ CheckClaims ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../checkdomain/ "CheckDomain")

The CheckClaims Command is used to determine whether or not there are any matching trademarks, in the specified launch phase, for each domain name passed in the command. If there is at least one matching trademark that exists for the domain name, a "claim key", "claim url" and "claim validator id" property is returned. You can specify a maximum of 32 domains.

## Possible Gateways

The command _CheckClaims_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = CheckClaims
DOMAIN# = (DOMAIN)
CLASS = (TEXT)
```

### Response

```
code = (INT)
description = (TEXT)
property[CLAIM_EXISTS][n] = (TEXT)
property[CLAIM_KEY][n] = (TEXT)
property[CLAIM_URL][n] = (TEXT)
property[CLAIM_VALIDATOR_ID][n] = (TEXT)
property[RUNTIME][0] = (TEXT)
```

### Attributes

| **DOMAIN#** | Domain name to be checked (optional) |
| --- | --- |
| **CLASS** | Application class (optional) e.g. TLD-GOLIVE |
| **CLAIM\_EXISTS** | Returns the 1 if claim exists or 0 if not exists |
| **CLAIM\_KEY** | The claim key |
| **CLAIM\_URL** | Claimsnotice download URL |
| **CLAIM\_VALIDATOR\_ID** | The claim key |
|  |  |
