---
title: "QueryDomainBlockingList"
description: "CentralNic Reseller API Command Reference  ➤ AdultBlock | AdultBlockPlus ➤ QueryDomainBlockingList ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2410
---

Retrieve all the block and its information managed in the current account. The parameter ServiceTag# is optional. It can be used to look up which blocks are tagged with a specific tag. The # in the parameter needs to be replaced by an integer starting with 0, such as ServiceTag0, ServiceTag1 etc. to look up multiple tags at once.

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
command = QueryDomainBlockingList
SERVICETAG# = test
wide    = 1
history = 0
EOF
```

:::

 

:::response[Response]

```text
[RESPONSE]	
code	 			= (INTEGER)
description 			= (TEXT)
runtime 			= (INTEGER)
queuetime 			= (INTEGER)
property[column][0] 		= domainblock
property[column][1] 		= label
property[column][2] 		= created date
property[column][3] 		= created by
property[column][4] 		= updated date
property[column][5] 		= updated by
property[column][6] 		= ownercontact
property[column][7] 		= registryaccount
property[column][8] 		= type
property[column][9] 		= auth code
property[column][10] 		= registration expiration date
property[column][11] 		= paid until
property[column][12] 		= renewaldate
property[column][13] 		= registrar
property[column][14] 		= renewalmode
property[column][15] 		= status
property[column][16] 		= registrar transfer date
property[count][0]   		= (INTEGER)
property[first][0]   		= (INTEGER)
property[last][0]    		= (INTEGER)
property[limit][0] 		= (INTEGER)
property[total][0] 		= (INTEGER)
property[domainblock][0]	= (TEXT)
property[label][0] 		= (TEXT)
property[created by][0] 	= (TEXT)
property[created date][0] 	= YYYY-MM-DD HH:MM:SS
property[updated by][0] 	= (TEXT)
property[updated date][0] 	= YYYY-MM-DD HH:MM:SS
property[auth][0] 		= (TEXT)
property[type][0] 		= ADULTBLOCK|ADULTBLOCKPLUS|GLOBALBLOCK|GLOBALBLOCKPLUS
property[registrar][0] 		= (TEXT)
property[status][0] 		= (TEXT)
property[ownercontact][0] 	= (TEXT)
property[registryaccount][0] 	= (TEXT)
property[renewalmode][0] 	= (TEXT)
property[renewal date][0]	= YYYY-MM-DD HH:MM:SS
property[paid until date][0] 	= YYYY-MM-DD HH:MM:SS
property[registrar transfer date][0] 	= YYYY-MM-DD HH:MM:SS
property[registration expiration date][0] = YYYY-MM-DD HH:MM:SS
EOF
```

:::

### Attributes

| **SERVICETAG# - It can be used to look up which AdultBlocks are tagged with a specific tag. (Optional)** |  |
| --- | --- |

:::commandlist[AdultBlock | AdultBlockPlus commands]

- [AddDomainBlocking](../adddomainblocking/)
- [CheckDomainBlockingIPRID](../checkdomainblockingiprid/)
- [DeleteDomainBlocking](../deletedomainblocking/)
- [ModifyDomainBlocking](../modifydomainblocking/)
- [QueryDomainBlockingList](./)
- [RenewDomainBlocking](../renewdomainblocking/)
- [StatusDomainBlocking](../statusdomainblocking/)
- [TransferDomainBlocking - Approve](https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20Approve)
- [TransferDomainBlocking - Cancel](https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20Cancel)
- [TransferDomainBlocking - Deny](https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20Deny)
- [TransferDomainBlocking - Query](https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20Query)
- [TransferDomainBlocking - Request](https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20Request)
- [TransferDomainBlocking - UserTransfer](https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20UserTransfer)

:::
