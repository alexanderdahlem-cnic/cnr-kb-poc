---
title: "ModifyCertificate"
description: "CentralNic Reseller API Command Reference  ➤ Certificate ➤ ModifyCertificate ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2760
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
COMMAND = ModifyCertificate
CERTIFICATE = [PATTERN]
SUB=[PATTERN]
APPROVEREMAIL[0-24] = [EMAIL]
AUTHMETHOD = EMAIL|DNS|FILE
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

### Attributes

| **CERTIFICATE** | Unique ID of the certificate to be changed |
| --- | --- |
| **APPROVEREMAIL** | New email - address where the approval - link should be send to |

:::commandlist[Certificate commands]

- [AddCertificate](../addcertificate/)
- [CheckCertificate](../checkcertificate/)
- [DeleteCertificate](../deletecertificate/)
- [GetCertificateInfo](../getcertificateinfo/)
- [ModifyCertificate](./)
- [QueryCertificateList](../querycertificatelist/)
- [ReissueCertificate](../reissuecertificate/)
- [RenewCertificate](../renewcertificate/)
- [StatusCertificate](../statuscertificate/)

:::
