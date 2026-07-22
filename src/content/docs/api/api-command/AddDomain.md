---
title: "AddDomain"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ AddDomain ➥ Learn more about CentralNic Reseller API Commands"
---

-   [Overview](../../api-commands/api-command-reference/)
-   [Next command](../checkclaims/ "CheckClaims")

_(Related EPP Command » [Domain:Create](../../epp-command/domain_create/ "Domain:Create"))_

This commands invokes several processes: It checks if the domainname is available at the registry, creates the contacthandles in the registry and starts the registration at the registry. For a basic AddDomain command only few common parameters are required. For some TLDs special parameters are required in order to register Domains. All special parameters start with X-<TLD>- and can be found in the specific TLD Documentation.

## Possible Gateways

The command _AddDomain_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

-   [Default handling](#)
-   [Premium features](#)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command         = AddDomain
domain          = YOURDOMAIN.TLD
period          = (INT)
ownercontact0   = (CONTACT)
admincontact0   = (CONTACT)
techcontact0    = (CONTACT)
billingcontact0 = (CONTACT)
nameserver0	= (NAMESERVER)
nameserver1 	= (NAMESERVER)
```

### Response

```
code 		= (CODE)
description	= (DESCRIPTION)
```

## Optional

The following parameters are optional for this command.

### Command

```
nameserver0	= (NAMESERVER)
nameserver1 	= (NAMESERVER)
nameserver2 	= (NAMESERVER)
...
nameserver12	= (NAMESERVER)

admincontact1	= (CONTACT)
admincontact2	= (CONTACT)

techcontact1 	= (CONTACT)
techcontact2 	= (CONTACT)

billingcontact1 = (CONTACT)
billingcontact2 = (CONTACT)

auth = (TEXT)

transferlock = 0 | 1

DNSSEC# = <flags> <protocol> <algorithm> <pubkey>
DNSSECDSDATA# = <keytag> <algorithm> <digestType> <digest>
```

### Response

```
property[registrationexpirationdate][0] = (DATE)
property[status][n] 			= (DOMAINSTATUS)
```

### Attributes

| **admincontact1** | (CONTACT) |
| --- | --- |
| **admincontact2** | (CONTACT) |

## Required Parameters (premium)

The following premium parameters are standard for this command.

### Command

```
command         = AddDomain
domain          = premium0098.menu
ownercontact0   = (CONTACT)
techcontact0    = (CONTACT)
billingcontact0 = (CONTACT)
admincontact0   = (CONTACT)
auth            = 2foo"BAR%
nameserver0     = (NAMESERVER)
nameserver1     = (NAMESERVER)
period          = 2
x-fee-amount    = 2000.0000
```

### Response

```
code = 200
description = Command completed successfully
property[x-fee-amount][0] = 2000.0000
property[x-fee-application][0] = 0.0000
property[x-fee-currency][0] = USD
property[created date][0] = 2015-06-24 11:53:27.0
property[registration expiration date][0] = 2017-06-24 11:53:27.0
property[renewal date][0] = 2017-07-29 11:53:27.0
property[roid][0] = 13530236711060_DOMAIN-KEYSYS
property[status][0] = ACTIVE
```

## Optional (premium)

The following premium parameters are optional for this command.

### Command

```
command         = AddDomain
domain          = premium0098.menu
ownercontact0   = (CONTACT)
techcontact0    = (CONTACT)
```

### Response

```
code = 200
description = Command completed successfully
property[x-fee-amount][0] = 2000.0000
property[x-fee-application][0] = 0.0000
```
