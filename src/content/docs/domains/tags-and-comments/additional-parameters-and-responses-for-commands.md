---
title: "Additional Parameters and Responses for Commands"
---

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

### Example parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>...
ZoneTag0=
...
ZoneTag4095=
...
DomainTag0=
...
DomainTag4095=
...</code></pre></div>

**Important**

Tags can not be assigned using TransferDomain, since transfers are often not in real-time.

## Responses for StatusDomain, StatusDomain and GetZoneInfo

The following API commands now additionally respond with property\[domaintag\]\[0-X\]=

-   StatusDomainHistory
-   StatusDomain
-   GetZoneInfo (now additionally responds with property\[tag\]\[0-X\]=)

## AddDomain

AddDomain now supports DOMAINTAG\[0-4095\]= for the direct assignment of Tags during the registration request.

Example parameters:

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>[[AddDomain|AddDomain]]
DomainTag0=
DomainTagN=
- or -
AddDomainTag0=
AddDomainTagN=</code></pre></div>

## ModifyDomain

ModifyDomain now supports DOMAINTAG\[0-4095\]= for direct assignment of Tags during the registration request along with ADDDOMAINTAG\[0-4095\]= and DELDOMAINTAG\[0-4095\]=.

Example parameters:

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>[[ModifyDomain|ModifyDomain]]
DomainTag0=
DomainTagN=
- or -
AddDomainTag0=
AddDomainTagN=
DelDomainTag0=
DelDomainTagN=</code></pre></div>

## CheckDomains with TLD Zone Tags

The command CheckDomains now also works with TLD Zone Tags and checks for a given search string. The search string can be stated without any TLD. The response automatically displays results for TLDs that belong to a certain TLD Zone Tag. Of course default and individual TLD Zone Tags can be combined.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>Command=CheckDomains
Domain0=cooldomainname
ZONETAG=DEFAULT_GENERIC</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 200
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
property[total][0] = 16</code></pre></div>

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

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=QueryDomainlist
ZoneTag0=DEFAULT_GENERIC</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
runtime = 0.009
property[column][0] = domain
property[count][0] = 2
property[domain][0] = first-domain1.com
property[domain][1] = first-domain2.com
property[first][0] = 0
property[last][0] = 1
property[limit][0] = 1000
property[total][0] = 2</code></pre></div>

## Sub-Reseller Management with TLD Zone Tags

Tags can be used to activate TLD zones for Sub-Resellers, during the creation (AddRegistrar) and modification (ModifyRegistrar) of a Sub-Reseller account. Important: Tags are not inherited to Sub-Reseller accounts!

### AddRegistrar with TLD Zone Tags

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>Command=AddRegistrar
...
ZoneTag0=
...
ZoneTag4095=
...</code></pre></div>

**Important**

Only TLD Zones currently assigned to the respective Tag will be activated. Changes to the used Tag at a later time will not be included, i.e. the activated TLD Zones will not changed.

### ModifyRegistrar with TLD Zone Tags

Deleting of ZoneTags containing Zones that are not activated for the respective Sub-Reseller account, will be ignored.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>Command=ModifyRegistrar
AddZoneTag0=
...
AddZoneTag4095=
...
DelZoneTag0=
...
DelZoneTag4095=</code></pre></div>

**Important**

Only TLD Zones currently assigned to the respective Tag will be activated. Changes to the used Tag at a later time will not be included, i.e. the activated TLD Zones will not changed.
