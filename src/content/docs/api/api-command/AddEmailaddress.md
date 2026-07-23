---
title: "AddEmailaddress"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Mailbox ➤ AddEmailaddress ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3880
---

AddEmailaddress

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
COMMAND = AddEmailaddress
EMAILADDRESS = (EMAIL)
PASSWORD = (TEXT)
NOPWCHECK = (TEXT)
MAILBOX = (TEXT)
X-PROMOTION-CODE = (TEXT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

### Attributes

| **EMAILADDRESS** | Emailaddress |
| --- | --- |
| **PASSWORD** | Password |
| **NOPWCHECK** | No password check |
| **MAILBOX** | ID of the Mailbox where E-Mail Address is located in |
| **X-PROMOTION-CODE** | Promotion - parameter used to get the promotion - pricing (if available, optional) |

:::commandlist[Hosting - Mailbox commands]

- [AddEmailaddress](./)
- [AddEmailforwarding](../addemailforwarding/)
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
