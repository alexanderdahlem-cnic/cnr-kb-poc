---
title: "QueryOwnerChangeList"
description: "CentralNic Reseller API Command Reference  ➤ Query ➤ QueryOwnerChangeList ➥ Learn more about CentralNic Reseller API Commands"
---

Gives an overview about all pending OwnerChanges. To receive a detailed Status of ACTIVE OwnerChanges ('REQUESTED', 'LOSING\_APPROVED', 'GAINING\_APPROVED', 'SUCCESS'), a StatusOwnerChange API call must be used.

## Possible Gateways

The command _QueryOwnerChangeList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command = QueryOwnerChangeList
```

### Response

```
code = 200
description = Command completed successfully
property[column][0] = domain
property[column][1] = status
property[column][2] = request date
property[column][3] = request expiration date
property[column][4] = losing registrant
property[column][5] = gaining registrant
property[count][0] = 0
property[first][0] = 0
property[last][0] = 0
property[limit][0] = 1000
property[total][0] = 0
```

## Optional

The following parameters are optional for this command.

### Command

```
command = QueryOwnerChangeList
STATUS = ACTIVE|SUCCESS|FAILED|EXPIRED
```

### Response

```
code = 200
description = Command completed successfully
property[column][0] = domain
property[column][1] = status
property[column][2] = request date
property[column][3] = request expiration date
property[column][4] = losing registrant
property[column][5] = gaining registrant
property[count][0] = 0
property[first][0] = 0
property[last][0] = 0
property[limit][0] = 1000
property[total][0] = 0
```
