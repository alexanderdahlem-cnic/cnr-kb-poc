---
title: "QueryForeignTransferList"
description: "CentralNic Reseller API Command Reference  ➤ Transfer ➤ QueryForeignTransferList ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4900
---

With the QueryForeignTransferList API command, a registrar can query all currently running external transfers, that have one of theses status: FOREIGN\_PENDING, USERTRANSFER, PENDING, INITIATED. For each domain also the available actions are returned that are supported. This could be empty, approve, deny or approve and deny.

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
COMMAND = QueryForeignTransferList
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[DOMAIN][n] = (TEXT)
property[REQUESTINGREGISTRAR][n] = (TEXT)
property[TRANSFERDATE][n] = (TEXT)
property[TRANSFERSTATUS][n] = (TEXT)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)
```

:::

### Attributes

| **COUNT** | Total number of foreign transfers shown |
| --- | --- |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of foreign transfers |

## Optional

The following parameters are optional for this command.

:::command[Command]

```text
COMMAND = QueryForeignTransferList
DOMAIN = (PATTERN)
FIRST = (INT)
LIMIT = (INT)
WIDE = 0|1
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[DOMAIN][n] = (TEXT)
property[REQUESTINGREGISTRAR][n] = (TEXT)
property[TRANSFERDATE][n] = (TEXT)
property[TRANSFERSTATUS][n] = (TEXT)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)
```

:::

### Attributes

| **FIRST** | Start the output of results from this item (optional) |
| --- | --- |
| **LIMIT** | Show only this many items in the response (optional) |
| **WIDE** | Optional |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |

:::commandlist[Transfer commands]

- [ActivateTransfer](../activatetransfer/)
- [CheckDomainTransfer](../checkdomaintransfer/)
- [QueryForeignTransferList](./)
- [QueryTransferList](../querytransferlist/)
- [SetAuthcode](../setauthcode/)
- [StatusDomainTransfer](../statusdomaintransfer/)
- [TransferDomain](../transferdomain/)

:::
