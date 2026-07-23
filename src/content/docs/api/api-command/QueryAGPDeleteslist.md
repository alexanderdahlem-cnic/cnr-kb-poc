---
title: "QueryAGPDeleteslist"
description: "CentralNic Reseller API Command Reference  ➤ Paid Services ➤ QueryAGPDeleteslist ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4520
---

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
command = QUERYAGPDELETESLIST
wide    = 1
```

:::

 

:::response[Response]

```text
property[column][0] = zone
property[column][1] = current domain registrations
property[column][2] = current agp deletes
property[column][3] = total agp deletes
property[column][4] = available agp deletes
property[column][5] = agp percentage
property[column][6] = agp days
property[count][0]  = 13
property[first][0]  = 0
property[last][0]   = 12
property[limit][0]  = 1000
property[total][0]  = 13
property[zone][0]   = TLD
property[current domain registrations][0] = 0
property[current agp deletes][0]          = 0
property[total agp deletes][0]            = 0
property[available agp deletes][0]        = 0
property[agp percentage][0]               = 9.0
property[agp days][0]                     = 5
```

:::

:::commandlist[Paid Services commands]

- [QueryAGPDeleteslist](./)
- [StatusAGPdeletes](../statusagpdeletes/)

:::
