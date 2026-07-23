---
title: "StatusNameserver"
description: "CentralNic Reseller API Command Reference  ➤ Nameserver ➤ StatusNameserver ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4450
---

IPv6 name server addresses will be normalized in CentralNic Reseller to match the preferred format defined in RFC-4291. IPv6 addresses can be stated in all valid formats, but will be normalized by our system. Excerpt from RFC-4291 regarding preferred form (https://tools.ietf.org/html/rfc4291): 2.2. Text Representation of Addresses There are three conventional forms for representing IPv6 addresses as text strings: 1. The preferred form is x:x:x:x:x:x:x:x, where the 'x's are one to four hexadecimal digits of the eight 16-bit pieces of the address. Examples: ABCD:EF01:2345:6789:ABCD:EF01:2345:6789 2001:DB8:0:0:8:800:200C:417A

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
COMMAND = StatusNameserver
NAMESERVER = (NAMESERVER)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[REGISTRAR_TRANSFER_DATE][0] = (DATE)
property[REGISTRAR][0] = (TEXT)
property[NAMESERVER][0] = (TEXT)
property[IPADDRESS][n] = (IPADDRESS)
property[CREATED_DATE][0] = (DATE)
property[CREATED_BY][0] = (TEXT)
property[UPDATED_DATE][0] = (DATE)
property[UPDATED_BY][0] = (TEXT)
property[STATUS][n] = (TEXT)
```

:::

### Attributes

| **NAMESERVER** | Nameserver to fetch the details for |
| --- | --- |
| **NAMESERVER** | Hostname of the nameserver |
| **IPADDRESS** | IP - address(es) of the nameserver |
| **CREATED\_DATE** | Date, when the nameserver was created |
| **CREATED\_BY** | Account the nameserver was created in |
| **UPDATED\_DATE** | Date, when the nameserver was last updated |
| **UPDATED\_BY** | Account, who did the last update for the nameserver |

:::commandlist[Nameserver commands]

- [AddNameserver](../addnameserver/)
- [CheckNameserver](../checknameserver/)
- [DeleteNameserver](../deletenameserver/)
- [ModifyNameserver](../modifynameserver/)
- [QueryNameserverList](../querynameserverlist/)
- [StatusNameserver](./)

:::
