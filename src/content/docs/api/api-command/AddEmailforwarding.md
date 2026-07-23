---
title: "AddEmailforwarding"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailbox ➤ AddEmailforwarding ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3890
---

AddEmailforwarding

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
COMMAND = AddEmailforwarding
EMAILADDRESS = (EMAIL)
DESTINATION = (TEXT)
MAILSPACE = (TEXT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

### Attributes

| **EMAILADDRESS** | Forwarding FROM. Using wildcard \* will forward all mails sent to any address of the domain. |
| --- | --- |
| **DESTINATION** | Forwarding TO |
| **MAILSPACE** | The mailspace ID |

:::commandlist[Hosting - Mailbox commands]

- [AddEmailaddress](../addemailaddress/)
- [AddEmailforwarding](./)
- [AddMailbox](../addmailbox/)
- [DeleteEmailaddress](../deleteemailaddress/)
- [DeleteEmailforwarding](../deleteemailforwarding/)
- [DeleteMailbox](../deletemailbox/)
- [QueryEmailaddressList](../queryemailaddresslist/)
- [QueryEmailforwardingList](../queryemailforwardinglist/)
- [QueryMailboxList](../querymailboxlist/)
- [StatusEmailaddress](../statusemailaddress/)
- [StatusMailbox](../statusmailbox/)

:::
