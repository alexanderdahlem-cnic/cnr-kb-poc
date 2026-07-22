---
title: "CheckContact"
description: "CentralNic Reseller API Command Reference  ➤ Contact ➤ CheckContact ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../checkcontacts/ "CheckContacts")

_(Related EPP Command » [Contact:Check](../../epp-command/contact_check/ "Contact:Check"))_

Check the availability of a single contact handle

## Possible Gateways

The command _CheckContact_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command=CheckContact
contact=(CONTACT)
```

### Response

```
code=(INT) 215 contact not available/214 contact available
description=(TEXT) Contact (not) available
```

### Attributes

| **contact** | Contact handle to be checked for availability |
| --- | --- |
