---
title: "StatusEmailaddress"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailbox ➤ StatusEmailaddress ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3970
---

StatusEmailaddress

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
COMMAND = StatusEmailaddress
EMAILADDRESS = (EMAIL)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

### Attributes

| **EMAILADDRESS** | The email address |
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
- [QueryMailboxList](../querymailboxlist/)
- [StatusEmailaddress](./)
- [StatusMailbox](../statusmailbox/)

:::
