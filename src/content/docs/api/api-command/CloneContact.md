---
title: "CloneContact"
description: "CentralNic Reseller API Command Reference  ➤ Contact ➤ CloneContact ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../deletecontact/ "DeleteContact")

_(Related EPP Command » [Contact:Create](../../epp-command/contact_create/ "Contact:Create"))_

The CloneContact command is used to create an exact duplicate of a particular contact.

## Possible Gateways

The command _CloneContact_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command=CloneContact
contact= (CONTACT)
```

### Response

```
code = (INT)
description = (TEXT)
property[CONTACT][0] = (CONTACT)
property[ROID][0] = (TEXT)
```

### Attributes

| **CONTACT** | Contact handle |
| --- | --- |
| **ROID** | ROID of the new contact |

## Optional

The following parameters are optional for this command.

### Command

```
command=CloneContact
contact= (CONTACT)
new = 1
```

### Response

```
code = (INT)
description = (TEXT)
property[CONTACT][0] = (CONTACT)
property[ROID][0] = (TEXT)
```

### Attributes

| **NEW** | Required if contact in same account should be cloned |
| --- | --- |
