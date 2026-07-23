---
title: "QueryWebspaceTraffic"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webspace ➤ QueryWebspaceTraffic ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4180
---

Returns the traffic for a single month in bytes. Default time if not given: current year / month.

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
COMMAND = QueryWebspaceTraffic
WEBSPACE = (TEXT)
YEARMONTH = (TEXT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[WEBSPACE][n] = (TEXT)
property[USED_TRAFFIC][n] = (INT)
```

:::

### Attributes

| **WEBSPACE** | Webspace - ID |
| --- | --- |
| **YEARMONTH** | Show traffic for the given month (default: YYYYMM - Current year and month, optional) |
| **WEBSPACE** | ID of the webspace |
| **USED\_TRAFFIC** | Traffic for the given month in bytes |

:::commandlist[Hosting - Webspace commands]

- [AddWebspace](../addwebspace/)
- [DeleteWebspace](../deletewebspace/)
- [ModifyPHPIni](../modifyphpini/)
- [ModifyWebspace](../modifywebspace/)
- [QueryPHPIni](../queryphpini/)
- [QueryWebspaceList](../querywebspacelist/)
- [QueryWebspaceTraffic](./)
- [RenewWebspace](../renewwebspace/)
- [SetWebspaceRenewalMode](../setwebspacerenewalmode/)
- [StatusWebspace](../statuswebspace/)

:::
