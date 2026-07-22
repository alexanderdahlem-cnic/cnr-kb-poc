---
title: "CheckContacts"
description: "CentralNic Reseller API Command Reference  ➤ Contact ➤ CheckContacts ➥ Learn more about CentralNic Reseller API Commands"
---

Check the availability of multiple contact handles

## Possible Gateways

The command _CheckContacts_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command=CheckContacts
contact0=(CONTACT)
contact1=(CONTACT)
....
contactn=(CONTACT)
```

### Response

```
code                      = (INT)
description               = (TEXT)
property(CONTACTCHECK)(n) = (TEXT)
```

### Attributes

| **CONTACTCHECK** | The result of the contact availability check in the format " (CODE) (DESCRIPTION)" |
| --- | --- |
