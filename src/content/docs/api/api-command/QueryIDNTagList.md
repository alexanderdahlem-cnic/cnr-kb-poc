---
title: "QueryIDNTagList"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ QueryIDNTagList ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../queryregisteredpremiumdomainlist/ "QueryRegisteredPremiumDomainList")

The QueryIDNTagList command can be used to determine the possible IDN language tags either for a domain name or a TLD.

## Possible Gateways

The command _QueryIDNTagList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command=QueryIDNTagList
domain=(TEXT)
```

### Response

```
code = (INT)
description = (TEXT)
property[idn language tag][0] = (TEXT)
property[description][0] = (TEXT)
```

## Optional

The following parameters are optional for this command.

### Command

```
command=QueryIDNTagList
zone=(TEXT)
```

### Response

```
code = (INT)
description = (TEXT)
property[idn language tag][0] = (TEXT)
property[description][0] = (TEXT)
```

### Attributes

| **IDN\_LANGUAGE\_TAG** | IDN Language Tag or Script |
| --- | --- |
| **DESCRIPTION** | Detailed description of the language tag |
