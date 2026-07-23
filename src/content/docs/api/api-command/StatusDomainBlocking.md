---
title: "StatusDomainBlocking"
description: "CentralNic Reseller API Command Reference  ➤ AdultBlock | AdultBlockPlus ➤ StatusDomainBlocking ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2430
---

This command can be used to retrieve a specific block’s information by supplying the block order ID, there is no need to specify the product.

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
COMMAND		= StatusDomainBlocking
DOMAINBLOCK 	= (Block Order ID)
EOF
```

:::

 

:::response[Response]

```text
code	 		= (INTEGER)
description 		= (TEXT)
runtime 		= (INTEGER)
queuetime 		= (INTEGER)
property[auth][0] 	= (TEXT)
property[type][0] 	= ADULTBLOCK|ADULTBLOCKPLUS|GLOBALBLOCK|GLOBALBLOCKPLUS
property[label][0] 	= (TEXT)
property[registrar][0] 	= (TEXT)
property[domainblock][0] = (TEXT)
property[status][0] 	= (TEXT)
property[created by][0] = (TEXT)
property[created date][0] = YYYY-MM-DD HH:MM:SS
property[updated date][0] = YYYY-MM-DD HH:MM:SS
property[registration expiration date][0] = YYYY-MM-DD HH:MM:SS

The following are specific to AdultBlock:
property[ownercontact][0] = (TEXT)
property[tld blocks][0] = .adult, .porn, .sex, .xxx
property[label variant generator uri][0] = https://adultblock.adult/trademark-variant-search/

The following are specific to GlobalBlock:
property[x-domain-blocking-ipr-id][0] 	= (TEXT)
property[mark][0] 			= (TEXT)
property[labelcount][0] 		= (INTEGER)
property[expectedblockedcount][0] 	= (INTEGER)
property[blockedcount][0] 		= (INTEGER)
property[nonblockedcount][0] 		= (INTEGER)
property[autocaughtcount][0] 		= (INTEGER)
property[domainblock status][0] 	= (TEXT)
property[paid until date][0] 		= YYYY-MM-DD HH:MM:SS
property[registrar transfer date][0] 	= YYYY-MM-DD HH:MM:SS
property[renewal date][0]	 	= YYYY-MM-DD HH:MM:SS
property[renewalmode][0] 		= (TEXT)
property[updated by][0] 		= (TEXT)
property[brand protection calculator uri][0] = https://globalblock.co/brand-protection-calculator
```

:::

:::commandlist[AdultBlock | AdultBlockPlus commands]

- [AddDomainBlocking](../adddomainblocking/)
- [CheckDomainBlockingIPRID](../checkdomainblockingiprid/)
- [DeleteDomainBlocking](../deletedomainblocking/)
- [ModifyDomainBlocking](../modifydomainblocking/)
- [QueryDomainBlockingList](../querydomainblockinglist/)
- [RenewDomainBlocking](../renewdomainblocking/)
- [StatusDomainBlocking](./)
- [TransferDomainBlocking - Approve](https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20Approve)
- [TransferDomainBlocking - Cancel](https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20Cancel)
- [TransferDomainBlocking - Deny](https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20Deny)
- [TransferDomainBlocking - Query](https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20Query)
- [TransferDomainBlocking - Request](https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20Request)
- [TransferDomainBlocking - UserTransfer](https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20UserTransfer)

:::
