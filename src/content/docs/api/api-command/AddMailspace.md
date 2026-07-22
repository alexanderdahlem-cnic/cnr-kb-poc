---
title: "AddMailspace"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailspace ➤ AddMailspace ➥ Learn more about CentralNic Reseller API Commands"
---

AddMailspace

## Possible Gateways

The command _AddMailspace_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = AddMailspace
QUOTA = (INT)
MAXMAILBOXES = (INT)
MAXMAILFORWARDINGS = (INT)
IP = (IPADDRRESS)
MAILSPACE = (TEXT)
NAME = (TEXT)
PERIOD = 1|2|3|4|5|6|7|8|9|10|11|12|(NULL)
X-PROMOTION-CODE = (TEXT)
```

### Response

```
code = (INT)
description = (TEXT)
```

### Attributes

| **QUOTA** | Size in megabytes |
| --- | --- |
| **MAXMAILBOXES** | Number of mailboxes available in this mailspace |
| **MAXMAILFORWARDINGS** | Number of mailboxes available in this mailspace |
| **NAME** | Set mailspace name max. 255 characters |
| **PERIOD** | Default is 12 months if not given with different value |
| **X-PROMOTION-CODE** | Promotion - parameter used to get the promotion - pricing (if available, optional) |
