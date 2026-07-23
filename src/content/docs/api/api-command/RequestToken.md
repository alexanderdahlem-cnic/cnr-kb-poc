---
title: "RequestToken"
description: "CentralNic Reseller API Command Reference  ➤ Contact ➤ RequestToken ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2960
---

To request a token to be sent within an email to a given Contact Handle or Domain. If a Domain is stated an email with a token will be sent to all linked contact handles. In case a contact handle is used multiple times (i.e. for Admin and Tech) only one email per contact handle is sent.

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
command=RequestToken
type=ContactDisclosure
contact=(CONTACT)
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
```

:::

### Attributes

| **CONTACT** | P-Handle for which the token should be requested |
| --- | --- |

## Optional

The following parameters are optional for this command.

:::command[Command]

```text
command=RequestToken
type=ContactDisclosure
domain=(DOMAIN)
contacttype0=OWNER(optional)
contacttype1=ADMIN(optional)
contacttype2=TECH(optional)
contacttype3=BILLING(optional)
```

:::

 

:::response[Response]

```text
code = 200
description = Command completed successfully
property[contact][0] = P-SPZ22
property[description][0] =
property[status][0] = SUCCESS
property[contact][0] = P-PHS26
property[contact][1] = P-PCS25
property[contact][2] = P-PGS24
property[description][0] =
property[description][1] =
property[description][2] =
property[status][0] = SUCCESS
property[status][1] = SUCCESS
property[status][2] = SUCCESS
```

:::

:::commandlist[Contact commands]

- [AddContact](../addcontact/)
- [CheckContact](../checkcontact/)
- [CheckContacts](../checkcontacts/)
- [CloneContact](../clonecontact/)
- [DeleteContact](../deletecontact/)
- [ModifyContact](../modifycontact/)
- [QueryContactList](../querycontactlist/)
- [RequestToken](./)
- [RestoreContact](../restorecontact/)
- [StatusContact](../statuscontact/)
- [StatusOwnerChange](../statusownerchange/)
- [StatusUnsyncRegistryContact](../statusunsyncregistrycontact/)
- [TransferContact](../transfercontact/)

:::
