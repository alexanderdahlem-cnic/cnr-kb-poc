---
title: "PushDomain"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ PushDomain ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../queryactiveservicelist/ "QueryActiveServiceList")

_(Related EPP Command » [Domain:Push](../../epp-command/domain_push/ "Domain:Push"))_

The Push Domain is used to send .DE / .AT domains to transit / billwithdraw status and to change the tag or delete a .UK domain.

## Possible Gateways

The command _PushDomain_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command=PushDomain
domain = YOURDOMAIN.TLD
target = (TEXT)
```

### Response

```
code = (INT)
description = (TEXT)
property[JOB_ID][0] = (TEXT)
property[ROID][0] = (TEXT)
property[TRANSFER_STATUS][0] = (TEXT)
```

### Attributes

| **DOMAIN** | The domain name to be pushed |
| --- | --- |
| **TARGET** | Where to push the domain |
|  | .DE target: TRANSIT (push domain back to registry) |
|  | .AT target: REGISTRY (push domain back to registry) |
|  | .UK target: EXAMPLE-TAG-HOLDER (new IPS TAG) DETAGGED (push domain back to registry) |
|  | .IS target: Registry contact handle of the gaining registrar |
| **TOKEN** | The one time authorization token for protected domain names. (optional) |
