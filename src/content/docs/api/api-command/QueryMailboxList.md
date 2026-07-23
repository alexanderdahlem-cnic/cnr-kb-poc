---
title: "QueryMailboxList"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailbox ➤ QueryMailboxList ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3960
---

QueryMailboxList

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
COMMAND = QueryMailboxList
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

| **MAILSPACE** | The mailspace ID |
| --- | --- |

:::commandlist[Hosting - Mailbox commands]

- [AddEmailaddress](../addemailaddress/)
- [AddEmailforwarding](../addemailforwarding/)
- [AddMailbox](../addmailbox/)
- [DeleteEmailaddress](../deleteemailaddress/)
- [DeleteEmailforwarding](../deleteemailforwarding/)
- [DeleteMailbox](../deletemailbox/)
- [QueryEmailaddressList](../queryemailaddresslist/)
- [QueryEmailforwardingList](../queryemailforwardinglist/)
- [QueryMailboxList](./)
- [StatusEmailaddress](../statusemailaddress/)
- [StatusMailbox](../statusmailbox/)

:::
