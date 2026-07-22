---
title: "ActivateRegistrarEmailAddress"
description: "CentralNic Reseller API Command Reference  ➤ Newsletter / Maintenance ➤ ActivateRegistrarEmailAddress ➥ Learn more about CentralNic Reseller API Commands"
---

Activate a given email address for receiving newsletter mailings

## Possible Gateways

The command _ActivateRegistrarEmailAddress_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command = ActiveRegistrarEmailAddress
email = <email address>
token = TOKEN
```

### Response

```
code        = (INT)
description = (TEXT)
property[class][0] = NEWSLETTER
property[email][0] = <email address>
```

### Attributes

| **TOKEN** | Token from the initial email "Confirm your RRPproxy newsletter subscription" |
| --- | --- |
