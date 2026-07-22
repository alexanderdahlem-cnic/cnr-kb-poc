---
title: "QueryWebspaceTraffic"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webspace ➤ QueryWebspaceTraffic ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../renewwebspace/ "RenewWebspace")

Returns the traffic for a single month in bytes. Default time if not given: current year / month.

## Possible Gateways

The command _QueryWebspaceTraffic_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = QueryWebspaceTraffic
WEBSPACE = (TEXT)
YEARMONTH = (TEXT)
```

### Response

```
code = (INT)
description = (TEXT)
property[WEBSPACE][n] = (TEXT)
property[USED_TRAFFIC][n] = (INT)
```

### Attributes

| **WEBSPACE** | Webspace - ID |
| --- | --- |
| **YEARMONTH** | Show traffic for the given month (default: YYYYMM - Current year and month, optional) |
| **WEBSPACE** | ID of the webspace |
| **USED\_TRAFFIC** | Traffic for the given month in bytes |
