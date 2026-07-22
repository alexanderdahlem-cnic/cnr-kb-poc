---
title: "QueryTrusteeLogList"
description: "CentralNic Reseller API Command Reference  ➤ Query ➤ QueryTrusteeLogList ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../statusobjectlog/ "StatusObjectLog")

Query list of domains that have used a trustee.

## Possible Gateways

The command _QueryTrusteeLogList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = QueryTrusteeLogList
```

### Response

```
code = (INT)
description = (TEXT)
```

## Optional

The following parameters are optional for this command.

### Command

```
COMMAND = QueryTrusteeLogList
DOMAIN = (PATTERN)
FIRST = (INT)
LIMIT = (INT)
MAXDATE = (NULL)|(TEXT)
MINDATE = (NULL)|(TEXT)
STATUS = (PATTERN)
WIDE = 0|1
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)
```

### Response

```
code = (INT)
description = (TEXT)
```

### Attributes

| **FIRST** | Start the output of results from this item (optional) |
| --- | --- |
| **LIMIT** | Show only this many items in the response (optional) |
| **MAXDATE** | Optional |
| **MINDATE** | Optional |
| **STATUS** | Optional |
| **WIDE** | Optional |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
