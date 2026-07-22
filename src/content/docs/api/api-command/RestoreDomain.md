---
title: "RestoreDomain"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ RestoreDomain ➥ Learn more about CentralNic Reseller API Commands"
---

_(Related EPP Command » [Domain:Restore](../../epp-command/domain_restore/ "Domain:Restore"))_

This command is required to restore a domain after deletion or expiration, if a restore is supported by the TLD.

## Possible Gateways

The command _RestoreDomain_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command = RestoreDomain
domain  = YOURDOMAIN.TLD
```

### Attributes

| **DOMAIN** | Domain name |
| --- | --- |
