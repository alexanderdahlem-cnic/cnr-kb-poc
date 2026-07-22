---
title: "Domain Tags"
---

Tags can be created any way you like an be assigned to Domains and TLD Zones. Our system offers two different types of Tags:

-   TLD Zone Tags: Automatically apply to all domains of a certain TLD Zone.
-   Domain Tags: Must be assigned explicitly to domains.

Tags also show up in your **domainlist.csv** file, available in your new CentralNic Reseller Control Panel at "Downloads" -> "My Downloads" Download, or in your old CentralNic Reseller Control Panel at "Account" -> "FTP". Internally we're handling Tags with a unique ID, and not with a unique name to allow name changes at a later time. However, the name must be unique for each type. If an object (e.g. a Domain) is deleted, the Tags are saved so they can be retrieved upon a restore. However, this only applies if respective Tags have not been deleted in the meantime. Multiple Tags can be stated in query commands and work as logical conjunction. The response lists the intersection, i.e. all objects assigned to all Tags stated in the query command. Important: All objects you would like to tag, like Domains, need to be in your account, i.e. you cannot assign Tags to objects not managed inside your account. As a logical consequence, Tags will be removed from objects when they leave your account, for example when a Domain is transferred out of your account. Directly affected commands are TransferDomain and PushObject. When executed successfully, the Domain looses all Tag assignments.

## How it works

Tags can currently be created for and assigned to Domains and TLD Zones. The simple approach is:

1.  Create a Tag
2.  Assign a Tag to an object
3.  Use the Tags!

Tags can be used for many purposes and they have been integrated in several commands.

## Domain Tags

Domain Tags can be assigned directly to Domains using AddTag an will show up in responses of various commands. Also, Domain Tags will show up in the domainlist.csv file in your FTP area. Domain Tags can also be assigned using AddDomain and ModifyDomain, even if the respective Tags don't exist yet. If a Tag doesn't exist, it will be created. In case a Tag can not be created (e.g. because of invalid or too many characters), this Tag will be ignored and the command response will show an error: property\[error\]\[X\]  
In case a Tag not assigned to a certain Domain shall be removed from this Domain, it will be simply ignored without throwing an error.

## TLD Zone Tags

Of course you can create new Tags for TLD Zones and thus you can set up a single Tag for a whole bunch of TLDs, making the management a bit easier. And these Tags for TLD Zones - both default Tags and individually created - automatically apply to all Domains of the respective TLD Zones, i.e. these do not need to be added to single Domains explicitly.  
Our system offers default Tags for TLD Zones which automatically apply to all Domains of the respective TLD Zones. Those Tags can be recognised easily as they all start with DEFAULT\_ and cannot be deleted or modified.  
For example using

Command=QueryDomainlist  
ZoneTag0=DEFAULT\_GENERIC

lists all Domains of generic TLDs.  
TLD Zone Tags can be applied for inactive TLD Zones as well. Default Tags can exist for inactive zones as well.  
Important: Only valid Zones will work, i.e. only those that exist in the Metaregistry.

## Default Tags

Default Tags can be used for Domains and TLD Zones, as well as template using the parameter COPY when using AddTag.  
Important: Tag names starting with DEFAULT\_ are reserved for Default Tags:

-   DEFAULT\_ADULT
-   DEFAULT\_BRAND
-   DEFAULT\_CENTRALNIC
-   DEFAULT\_COMMERCE
-   DEFAULT\_COMPANY
-   DEFAULT\_COMPUTER
-   DEFAULT\_CULTURE
-   DEFAULT\_EDUCATION
-   DEFAULT\_ENVIRONMENT
-   DEFAULT\_FAMILY
-   DEFAULT\_FASHION
-   DEFAULT\_FINANCIAL
-   DEFAULT\_FOOD
-   DEFAULT\_GENERIC
-   DEFAULT\_GEOGRAPHIC
-   DEFAULT\_GEOGRAPHIC/AFRICA
-   DEFAULT\_GEOGRAPHIC/AMERICA
-   DEFAULT\_GEOGRAPHIC/ASIA
-   DEFAULT\_GEOGRAPHIC/AUSTRALIA
-   DEFAULT\_GEOGRAPHIC/EUROPE
-   DEFAULT\_GEOGRAPHIC/MIDDLEEAST
-   DEFAULT\_GEOGRAPHIC/OCEANIA
-   DEFAULT\_GEOGRAPHIC/SOUTHAMERICA
-   DEFAULT\_HEALTH
-   DEFAULT\_IDN/
-   DEFAULT\_IDN/ARABIC
-   DEFAULT\_IDN/CHINESE
-   DEFAULT\_IDN/CYRILLIC
-   DEFAULT\_IDN/DEVANAGARI
-   DEFAULT\_IDN/HEBREW
-   DEFAULT\_IDN/JAPANESE
-   DEFAULT\_IDN/THAI
-   DEFAULT\_INTEREST
-   DEFAULT\_LIFESTYLE
-   DEFAULT\_MEDIA
-   DEFAULT\_OTHER
-   DEFAULT\_POLITICS
-   DEFAULT\_PUBLICITY
-   DEFAULT\_REGIONAL
-   DEFAULT\_RELIGION
-   DEFAULT\_SPORT
-   DEFAULT\_TECHNOLOGY
-   DEFAULT\_THIRDLEVEL
-   DEFAULT\_VEHICLE

## Technical Specification for Tags

-   maximum length 64 characters
-   Zone Tags cannot start with "DEFAULT\_"
-   Tags cannot have the name "0" (number zero)
-   100 Tags maximum per Domain
-   no limitation for Tag Zones per TLD/zone Tag since default groups can be large
-   all special and unicode characters can be used for Tags.
-   The ACL group for Tag commands is TOOLS. So if you want to grant access to Tag commands to users of your CentralNic Reseller account, the group TOOLS must be activated for them.

## Additional Parameters and Responses for Commands

Important: Tags can not be assigned using TransferDomain, since transfers are often not in real-time.

## Parameters for Query Commands

The following API commands now support the COMMAND parameters DomainTag\[0-4095\]= and ZoneTag\[0-4095\]= to limit the search results:

-   QueryRegisteredPremiumDomainList
-   QueryDomainRenewList
-   QueryTrusteeDomainList
-   QueryAccountingList
-   QueryDomainListByContact
-   QueryDomainHistoryList
-   QueryUpcomingAccountingList
-   QueryDomainExpireList
-   QueryDomainList

Example parameters:  
...  
ZoneTag0=  
...  
ZoneTag4095=  
...  
DomainTag0=  
...  
DomainTag4095=  
...

## Responses for StatusDomain, StatusDomain and GetZoneInfo

The following API commands now additionally respond with property\[domaintag\]\[0-X\]=

-   StatusDomainHistory
-   StatusDomain

GetZoneInfo now additionally responds with property\[tag\]\[0-X\]=

## AddDomain

AddDomain now supports DOMAINTAG\[0-4095\]= for the direct assignment of Tags during the registration request.  
Example parameters:  
\[\[AddDomain|AddDomain\]\]  
DomainTag0=  
DomainTagN=  
\- or -  
AddDomainTag0=  
AddDomainTagN=

## ModifyDomain

ModifyDomain now supports DOMAINTAG\[0-4095\]= for direct assignment of Tags during the registration request along with ADDDOMAINTAG\[0-4095\]= and DELDOMAINTAG\[0-4095\]=.  
Example parameters:  
\[\[ModifyDomain|ModifyDomain\]\]  
DomainTag0=  
DomainTagN=  
\- or -  
AddDomainTag0=  
AddDomainTagN=  
DelDomainTag0=  
DelDomainTagN=

## CheckDomains with TLD Zone Tags

The command CheckDomains now also works with TLD Zone Tags and checks for a given search string. The search string can be stated without any TLD. The response automatically displays results for TLDs that belong to a certain TLD Zone Tag. Of course default and individual TLD Zone Tags can be combined.

### Command

```
Command=CheckDomains
Domain0=cooldomainname
ZONETAG=DEFAULT_GENERIC
```

### Response

```
code = 200
description = Command completed successfully
queuetime = 0
runtime = 10.36
property[column][0] = domain
property[column][1] = domaincheck
property[column][2] = domainchecktime
property[count][0] = 15
property[domain][0] = cooldomainname.biz
property[domaincheck][0] = 210 Domain name available
property[domainchecktime][0] = 0.001
property[domain][1] = cooldomainname.com
property[domaincheck][1] = 210 Domain name available
property[domainchecktime][1] = 0.001
property[domain][2] = cooldomainname.info
property[domaincheck][2] = 210 Domain name available
property[domainchecktime][2] = 0.001
...
property[first][0] = 0
property[last][0] = 14
property[limit][0] = 32
property[total][0] = 16
```

## Using Query Commands with Tags

We integrated Tag support for Several Query Commands:

-   QueryDomainList
-   QueryAccountingList
-   QueryDomainExpireList
-   QueryDomainHistoryList
-   QueryDomainListByContact
-   QueryDomainRenewList
-   QueryRegisteredPremiumDomainList
-   QueryTrusteeDomainList
-   QueryUpcomingAccountingList

## Using QueryDomainList and Tags to narrow down the list of Domains

To narrow down a query using tags the parameters DomainTag\[x\] and ZoneTag\[x\] can be used. You can query for up to 4096 Tags (from 0 to 4095) of each type and work as logical conjunction. The response lists the intersection, i.e. all objects assigned to all Tags stated in the query command.

### Command

```
command=QueryDomainlist
ZoneTag0=DEFAULT_GENERIC
```

### Response

```
code = 200
description = Command completed successfully
runtime = 0.009
property[column][0] = domain
property[count][0] = 2
property[domain][0] = first-domain1.com
property[domain][1] = first-domain2.com
property[first][0] = 0
property[last][0] = 1
property[limit][0] = 1000
property[total][0] = 2
```

## Sub-Reseller Management with TLD Zone Tags

Tags can be used to activate TLD zones for Sub-Resellers, during the creation (AddRegistrar) and modification (ModifyRegistrar) of a Sub-Reseller account. Important: Tags are not inherited to Sub-Reseller accounts!

## AddRegistrar with TLD Zone Tags

Important: Only TLD Zones currently assigned to the respective Tag will be activated. Changes to the used Tag at a later time will not be included, i.e. the activated TLD Zones will not changed.

```
Command=AddRegistrar
...
ZoneTag0=
...
ZoneTag4095=
...
```

## ModifyRegistrar with TLD Zone Tags

Deleting of ZoneTags containing Zones that are not activated for the respective Sub-Reseller account, will be ignored.  
Important: Only TLD Zones currently assigned to the respective Tag will be activated. Changes to the used Tag at a later time will not be included, i.e. the activated TLD Zones will not changed.

```
Command=ModifyRegistrar
AddZoneTag0=
...
AddZoneTag4095=
...
DelZoneTag0=
...
DelZoneTag4095=
```

## Domain - Tags API-Commands

| [AddTag](../../api/api-command/addtag/) | Creates a new Tag |
| --- | --- |
| [DeleteTag](../../api/api-command/deletetag/) | DeleteTag |
| [ModifyTag](../../api/api-command/modifytag/) | ModifyTag |
| [QueryTagList](../../api/api-command/querytaglist/) | Shows a list of all created Tags |
| [StatusTag](../../api/api-command/statustag/) | StatusTag |

## API command examples

Add a new Tag for domains

```
command=AddTag
type=DOMAIN
tag=tertius
description=number three
```

Add a new Tag for Domains and assign it to Domains using AddTag

```
command=AddTag
type=DOMAIN
tag=primus
description=number one
domain0=first-domain1.com
domain1=first-domain2.com
domain2=first-domain3.com
domain3=first-domain4.com
domain4=first-domain5.com
domain5=first-domain6.com
domain6=first-domain7.com
domain7=first-domain8.com
domain8=first-domain9.com
```

Add a new Tag for a TLD Zone and assign it to TLD Zones using AddTag

```
command=AddTag
type=ZONE
tag=rich
description=oh so wealthy
zone0=rich
zone1=luxury
zone2=diamonds
```

Add a new TLD Zone Tag using AddTag and COPY from an existing TLD Zone Tag

During creation of a new TLD Zone Tag you copy from an existing TLD Zone Tag or default Tag (always starting with DEFAULT\_). The new TLD Zone Tag will contain all zones copied from the existing Tag.

**Important**

-   When using the parameter COPY additional TLD Zones can not be added.
-   COPY is only working with TLD Zone Tags.

```
command=AddTag
type=ZONE
Copy=ExistingTag
```

## Modifying Tags using ModifyTag

Assign a Tag to some Domains using ModifyTag

```
command=ModifyTag
type=DOMAIN
tag=secundus
adddomain0=second-domain1.com
adddomain1=second-domain2.com
adddomain2=second-domain3.com
adddomain3=second-domain4.com
adddomain4=second-domain5.com
adddomain5=second-domain6.com
```

Remove a Tag from some Domains using ModifyTag

```
command=ModifyTag
type=DOMAIN
tag=primus
deldomain0=first-domain1.com
deldomain1=first-domain2.com
deldomain2=first-domain3.com
deldomain3=first-domain4.com
deldomain4=first-domain5.com
deldomain5=first-domain6.com
```

Assign and remove a Tag to/from some TLD Zones using ModifyTag

```
command=ModifyTag
type=ZONE
tag=famous
addzone0=com
addzone1=net
addzone2=org
delzone3=info
```
