---
title: "QueryHostingList"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ QueryHostingList ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 3770
---

This command is used to query a specific type of object and return all the information stored on it. More customisation are possible with the use of the optional parameters. Such as returning multiple results, setting further search criteria or sorting can be done. For example, in a single request, the object parameter can accept one or multiple values. Please see the below attributes section to understand the combination of required and optional parameters.

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
COMMAND = QueryHostingList
CLASS = cPanel (required)
TYPE = useraccount|package|featurelist (required)
FILTER = primarydomain|package|useraccount (optional)
NAME = (TEXT) (optional)
OBJECT = (TEXT) (optional)
ORDER = ASC|DESC (optional)
ORDERBY = STATUS|NAME|RENEWALMODE|PACKAGE|REGISTRATIONEXPIRATIONDATE (optional)
STATUS = ACTIVE|PENDINGDELETE (optional)
LIMIT = (INTEGER) (optional)
```

:::

### Attributes

| **FILTER**  | If no values are given for the FILTER parameter, all results will be returned. If TYPE = useraccount, the parameters FILTER and OBJECT are required.  |
| --- | --- |
| **LIMIT**  | If no limit is set, the default value will be 1000.  |
| **NAME** | Filter by name (\*) asterisk is allowed \*TEXT\*. . |
| **OBJECT** | This is the filter criteria, such as the package name or featurelist.  If FILTER = primarydomain, the OBJECT can be a partial search.  If FILTER = package or useraccount, the OBJECT = need to be an exact match or no results will be returned despite the http code being 200. If FILTER = primarydomain|useraccount|package, the OBJECT can be multiple values, separated by a comma (i.e. domain1.com,domain2.com) |
| **ORDER** | Sort the returned list by ascending or descending order.  |
| **ORDEREDBY** | Filter data by various column headings. |
| **STATUS**  | Filter data by status.  |
|  |  |

:::response[Response]

```text
code =  (INT)
description =  (TEXT)
property[account][0] = tkf2igf5
property[accountdomain][0] = messe-useraccount.com
property[accountreseller][0] = l4qdwhtn
property[bandwidth size][0] = unlimited
property[bandwidth unit][0] = MB
property[bandwidth value][0] = unlimited
property[class][0] = CPANEL
property[count][0] = 1
property[created by][0] = messe
property[created date][0] = 2019-02-13 13:11:32
property[first][0] = 0
property[hostname][0] = cpanel-01-eu.hostingww.com
property[ip][0] = 127.0.0.1
property[last][0] = 0
property[limit][0] = 0
property[name][0] = messe useraccount
property[package][0] = hosting-5-emailonly
property[quota][0] = 50000.00 MB
property[quota unit][0] = MB
property[quota value][0] = 50000
property[registration expiration date][0] = 2019-03-13 13:11:32
property[renewal date][0] = 2019-03-13 13:11:32
property[renewalmode][0] = DEFAULT
property[restoreable until][0] = 2019-03-24 06:59:50
property[status][0] = PENDINGDELETE
property[total][0] = 1
property[updated by][0] = messe
property[updated date][0] = 2019-02-22 06:59:50
property[x-hosting-location][0] = EU
property[x-hosting-server][0] = cpanel-01-eu.hostingww.com
```

:::

:::commandlist[Hosting - cPanel commands]

- [AddHosting - AddOnDomain](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20AddOnDomain)
- [AddHosting - CatchAllAddress](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20CatchAllAddress)
- [AddHosting - DomainAlias](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20DomainAlias)
- [AddHosting - Email](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20Email)
- [AddHosting - EmailDomainlForward](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20EmailDomainlForward)
- [AddHosting - EmailForward](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20EmailForward)
- [AddHosting - FeatureList](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20FeatureList)
- [AddHosting - FTPUser](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20FTPUser)
- [AddHosting - MySQLDatabase](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20MySQLDatabase)
- [AddHosting - MySQLDatabaseUser](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20MySQLDatabaseUser)
- [AddHosting - MySQLDatabaseUserPrivileges](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20MySQLDatabaseUserPrivileges)
- [AddHosting - Package](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20Package)
- [AddHosting - SubDomain](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20SubDomain)
- [AddHosting - UserAccount](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20UserAccount)
- [CheckHosting](../checkhosting/)
- [DeleteHosting](../deletehosting/)
- [ModifyHosting](../modifyhosting/)
- [QueryHostingList](./)
- [RenewHosting](../renewhosting/)
- [RestoreHosting](../restorehosting/)
- [StatusHosting](../statushosting/)

:::
