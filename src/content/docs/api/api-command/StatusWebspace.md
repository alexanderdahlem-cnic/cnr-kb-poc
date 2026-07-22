---
title: "StatusWebspace"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - Webspace ➤ StatusWebspace ➥ Learn more about CentralNic Reseller API Commands"
---

StatusWebspace

## Possible Gateways

The command _StatusWebspace_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = StatusWebSpace
WIDE = 0|1
LOG = 0|1
WEBSPACE = (TEXT)
```

### Response

```
code = (INT)
description = (TEXT)
property[CREATED DATE][0] = (DATE)
property[IP][0] = (TEXT)
property[RENEWAL DATE][0] = (DATE)
property[RENEWALMODE][0] = (TEXT)
property[STATUS][0] = (TEXT)
property[UPDATED DATE][0] = (DATE)
property[USED QUOTA][0] = (INT)
property[USED TRAFFIC][0] = (INT)
property[SSO_REDIRECT_LOCATION][0] = (TEXT)
```

### Attributes

| **WIDE** | Show more or less details (optional) |
| --- | --- |
| **LOG** | Show more or less logs (optional) |
| **WEBSPACE** | Name of the object to query |
| **CREATED DATE** | Creation date of the web space |
| **IP** | IP address of the webs space |
| **RENEWAL DATE** | Date when the web space will be renewed next time |
| **RENEWALMODE** | Renewal mode of the web space (cannot be changed) |
| **STATUS** | Current status of the web space |
| **UPDATED DATE** | Modification date |
| **USED QUOTA** | Quota usage |
| **USED TRAFFIC** | Traffic usage |
| **SSO\_REDIRECT\_LOCATION** | SSO Redirect Location (web site builder) |
