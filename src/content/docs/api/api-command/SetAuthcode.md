---
title: "SetAuthcode"
description: "CentralNic Reseller API Command Reference  ➤ Transfer ➤ SetAuthcode ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4920
---

This command let you set an authorisation code for a .DE, .BE, .EU, and .NO. There are two different types of authinfos for .DE. Type 1 can only be set by the current provider. Type 2 can be set by any provider and will be sent per mail to the German owner or admin. Remember that the type 2 authinfo will be charged from your account! Authinfo type2 cannot be deleted! All authinfo expire 30 days after creation and should only be set if the domain is up for a transfer.

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
COMMAND = SetAuthCode
DOMAIN = (TEXT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[AUTH][0] = (TEXT)
property[ERROR][0] = (TEXT)
```

:::

### Attributes

| **DOMAIN** | the domain for which the authinfo will be set |
| --- | --- |

## Optional

The following parameters are optional for this command.

:::command[Command]

```text
COMMAND = SetAuthCode
DOMAIN = (TEXT)
AUTH = (TEXT)
ACTION = SET|DELETE
TYPE = 1|2
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[AUTH][0] = (TEXT)
property[ERROR][0] = (TEXT)
```

:::

### Attributes

| **AUTH** | The authinfo/domain password.(optional) |
| --- | --- |
| **ACTION** | Add a new authcode|Remove an existing authcode (only type 1, optional) |
| **TYPE** | authinfo type 1|authinfo typ 2 (optional) only available for .DE |

_Note for .BE domains:_ For .BE, auth codes are always sent directly to the registrant by the registry and are not accessible to the registrar. Both action=set and action=delete have the same effect: a new auth code is requested at the registry and emailed to the registrant. There is no way to delete a .BE auth code.

:::commandlist[Transfer commands]

- [ActivateTransfer](../activatetransfer/)
- [CheckDomainTransfer](../checkdomaintransfer/)
- [QueryForeignTransferList](../queryforeigntransferlist/)
- [QueryTransferList](../querytransferlist/)
- [SetAuthcode](./)
- [StatusDomainTransfer](../statusdomaintransfer/)
- [TransferDomain](../transferdomain/)

:::
