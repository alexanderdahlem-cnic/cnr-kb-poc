---
title: "DeleteEmailforwarding"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailbox ➤ DeleteEmailforwarding ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3920
---

DeleteEmailforwarding

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
COMMAND = DeleteEmailforwarding
EMAILADDRESS = (TEXT)
DESTINATION = (TEXT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

### Attributes

| **EMAILADDRESS** | Forwarding FROM |
| --- | --- |
| **DESTINATION** | Forwarding TO |
| **MAILSPACE** | The mailspace ID |

:::commandlist[Hosting - Mailbox commands]

- [AddEmailaddress](../addemailaddress/)
- [AddEmailforwarding](../addemailforwarding/)
- [AddMailbox](../addmailbox/)
- [DeleteEmailaddress](../deleteemailaddress/)
- [DeleteEmailforwarding](./)
- [DeleteMailbox](../deletemailbox/)
- [QueryEmailaddressList](../queryemailaddresslist/)
- [QueryEmailforwardingList](../queryemailforwardinglist/)
- [QueryMailboxList](../querymailboxlist/)
- [StatusEmailaddress](../statusemailaddress/)
- [StatusMailbox](../statusmailbox/)

:::
