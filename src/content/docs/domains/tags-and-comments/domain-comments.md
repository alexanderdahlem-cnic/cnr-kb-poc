---
title: "Domain Comments"
---

Similar to Tags our system allows to add Comments to single Domains. For Comments, we choose a simple approach: Comments can be added and modified using AddDomain and ModifyDomain. Domain Comments also show up in your domainlist.csv file, available in your new CentralNic Reseller Control Panel at "Downloads" -> "My Downloads" Download, or in your old CentralNic Reseller Control Panel at "Account" -> "FTP". If a Domain is deleted, the Comment is saved so it can be retrieved upon a restore. However, this only applies if the respective Comment has not been deleted in the meantime.

**Important**: All Domains you would like to assign a Comment to need to be in your account, i.e. you cannot assign Comments to Domains not managed inside your account. As a logical consequence, Comments will be removed from objects when they leave your account, for example when a Domain is transferred out of your account. Directly affected commands are TransferDomain and PushObject. When executed successfully, the Domain loses the Comment assignment.

## Responses for StatusDomainHistory, StatusDomain and GetZoneInfo

The following API commands now additionally respond with property\[X-DOMAIN-COMMENT\]\[0\]=

-   StatusDomainHistory
-   StatusDomain
-   GetZoneInfo

## AddDomain

AddDomain now supports X-DOMAIN-COMMENT= for the direct assignment of a Comment during the registration request.

```
COMMAND=AddDomain
...
X-DOMAIN-COMMENT=Some witty comment
...
```

## ModifyDomain

ModifyDomain now supports X-DOMAIN-COMMENT= for direct assignment a Comment when modifying a Domain.

```
COMMAND=ModifyDomain
...
X-DOMAIN-COMMENT=Some witty comment
...
```
