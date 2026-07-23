---
title: "TransferDomainBlocking - Deny"
description: "CentralNic Reseller API Command Reference  ➤ AdultBlock | AdultBlockPlus ➤ TransferDomainBlocking - Deny ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2460
---

Deny the outbound transfer of a domain block to another registrar.

:::gateways[Possible Gateways]

- [MREG](../../connecting/centralnic-reseller-metaregistry/)
- [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
- [SOAP](../../connecting/simple-object-access-protocol/)
- [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
- [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

:::

## Required Parameters

The following parameters are standard parameters for this command.

:::command[Command]

```text
command     = TRANSFERDOMAINBLOCKING
DOMAINBLOCK = (Block Order ID)
ACTION      = DENY
AUTH        = For AdultBlock (AUTHENTICATION KEY)
TYPE        = AdultBlock|AdultBlockplus|GlobalBlock|GlobalBlockplus|DPMLBridge|DPMLBridgePlus
EOF  
```

:::

 

:::response[Response]

```text
[RESPONSE]
code                             = (INTEGER)
description                      = (TEXT)
queuetime                        = (INTEGER)
runtime                          = (INTEGER)
property[domainblock][0]         = (Block Order ID)
property[domainblocking type][0] = AdultBlock|AdultBlockplus|GlobalBlock|GlobalBlockplus|DPMLBridge|DPMLBridgePlus
property[label][0]               = (TEXT)
property[transfer date][0]       = YYYY-MM-DD HH:MM:SS
property[transfer status][0]     = clientRejected|transferRejected

For AdultBlock only
property[requested date][0]      = YYYY-MM-DD HH:MM:SS

For GlobalBlock only
property[requested by][0]        = (TEXT)
```

:::

## Optional

The following parameters are optional for this command.

:::command[Command]

```text
AUTH = For GlobalBlock (AUTHENTICATION KEY)
```

:::

:::commandlist[AdultBlock | AdultBlockPlus commands]

- [AddDomainBlocking](../adddomainblocking/)
- [CheckDomainBlockingIPRID](../checkdomainblockingiprid/)
- [DeleteDomainBlocking](../deletedomainblocking/)
- [ModifyDomainBlocking](../modifydomainblocking/)
- [QueryDomainBlockingList](../querydomainblockinglist/)
- [RenewDomainBlocking](../renewdomainblocking/)
- [StatusDomainBlocking](../statusdomainblocking/)
- [TransferDomainBlocking - Approve](https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20Approve)
- [TransferDomainBlocking - Cancel](https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20Cancel)
- [TransferDomainBlocking - Deny](https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20Deny)
- [TransferDomainBlocking - Query](https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20Query)
- [TransferDomainBlocking - Request](https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20Request)
- [TransferDomainBlocking - UserTransfer](https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20UserTransfer)

:::
