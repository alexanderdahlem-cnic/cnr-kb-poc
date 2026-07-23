---
title: "StatusAGPdeletes"
description: "CentralNic Reseller API Command Reference  ➤ Paid Services ➤ StatusAGPdeletes ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 4530
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
command = statusAGPdeletes
zone    = TLD
```

:::

 

:::response[Response]

```text
property[available agp deletes][0]        = 2
property[current agp deletes][0]          = 0
property[current domain registrations][0] = 17
property[total agp deletes][0]            = 2
property[zone][0]                         = TLD
```

:::

:::commandlist[Paid Services commands]

- [QueryAGPDeleteslist](../queryagpdeleteslist/)
- [StatusAGPdeletes](./)

:::
