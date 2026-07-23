---
title: "QueryWebhostList"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webhost ➤ QueryWebhostList ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4100
---

Returns a list of all webhosts in your account

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
COMMAND = QueryWebhostList
WEBSPACE = (TEXT)
ORDER = ASC|DESC
ONLYSSL = 0|1
ORDERBY = WEBSPACE|CLASS|VERSION|STATUS|IP
FIRST = (INT)
LIMIT = (INT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[SSL][n] = (TEXT)
property[AUTOCERT][n] = (TEXT)
property[WEBSPACE][n] = (TEXT)
property[WEBHOST][n] = (TEXT)
property[STATUS][n] = ACTIVE|DISABLED
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)
```

:::

### Attributes

| **WEBSPACE** | Unique webspace - ID (optional) |
| --- | --- |
| **ORDER** | ASC|DESC (optional) |
| **ONLYSSL** | only SSL webhost shown |
| **ORDERBY** | Sort the result by this column (optional) |
| **FIRST** | Start the output of results from this item (optional) |
| **LIMIT** | Show only this many items in the response (optional) |
| **WEBSPACE** | Parent webspace - ID |
| **WEBHOST** | Domainname |
| **STATUS** | Status of the webhost |
| **COUNT** | Total number of webhosts shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of webhosts |

:::commandlist[Hosting - Webhost commands]

- [AddWebhost](../addwebhost/)
- [DeleteWebhost](../deletewebhost/)
- [ModifyWebhost](../modifywebhost/)
- [QueryWebhostList](./)
- [StatusWebhost](../statuswebhost/)

:::
