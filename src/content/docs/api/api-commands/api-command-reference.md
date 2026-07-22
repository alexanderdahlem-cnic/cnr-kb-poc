---
title: "CentralNic Reseller API Command Reference"
description: "● Account ● Aftermarket ● Application ● Certificate ● Contact ● Domain ● DynamicDNS ● Event ● Finance ● KeyDNS ● Nameserver ● Query ● Server ● SMS ● Trademark ●"
---

## Account

| [ActivateAppendix](../../api-command/activateappendix/) | Activate appendix |
| --- | --- |
| [ModifyRegistrar](../../api-command/modifyregistrar/) | Modify reseller account |
| [ModifyRegistrarCurrency](../../api-command/modifyregistrarcurrency/) | Modifies the currency setting of an account |
| [PushObject](../../api-command/pushobject/) | Move an object to another position |
| [QueryAppendixList](../../api-command/queryappendixlist/) | Query information about appendices |
| [QueryRegistrarStatisticList](../../api-command/queryregistrarstatisticlist/) | Gather information about registration numbers in different zones |
| [StatusAccount](../../api-command/statusaccount/) | StatusAccount |
| [StatusRegistrar](../../api-command/statusregistrar/) | StatusRegistrar |

## ACL

_The Access Control List specifies which actions on certain objects a user is allowed to conduct._

| [AddAcl](../../api-command/addacl/) | Add location rights for a given user or group. |
| --- | --- |
| [AddUser](../../api-command/adduser/) | Creates a user or a group. |
| [DeleteAcl](../../api-command/deleteacl/) | Remove location rights for a given user or group. |
| [DeleteUser](../../api-command/deleteuser/) | Deletes a user or a group. |
| [ModifyAcl](../../api-command/modifyacl/) | Modify location rights for a given user or group. |
| [ModifyUser](../../api-command/modifyuser/) | Modify already existing ACL user |
| [QueryACLList](../../api-command/queryacllist/) | Shows all locations with granted rights of a given user or group. |
| [QueryUserList](../../api-command/queryuserlist/) | Shows a list of all users or groups. |
| [StatusAcl](../../api-command/statusacl/) | Shows granted rights for a specific location of a given user or group. |
| [StatusUser](../../api-command/statususer/) | Shows the status of a given user or group. |

## Domain Blocking

_Available commands for domain blocking services_

| [AddDomainBlocking](../../api-command/adddomainblocking/) | This command adds a domain block to your submitted label. |
| --- | --- |
| [CheckDomainBlockingIPRID](../../api-command/checkdomainblockingiprid/) | Retrieve the specific IPR related to the block. |
| [DeleteDomainBlocking](../../api-command/deletedomainblocking/) | Remove a domain block. |
| [ModifyDomainBlocking](../../api-command/modifydomainblocking/) | Update the AuthInfo, owner contact, renewal mode and tags. |
| [QueryDomainBlockingList](../../api-command/querydomainblockinglist/) | Retrieve all blocks’ information. |
| [RenewDomainBlocking](../../api-command/renewdomainblocking/) | Renew a domain block |
| [StatusDomainBlocking](../../api-command/statusdomainblocking/) | Retrieve a specific block’s information. |
| [TransferDomainBlocking - Approve](https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20Approve) | Approve the outbound transfer of a domain block to another registrar |
| [TransferDomainBlocking - Cancel](https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20Cancel) | Cancel the initiated inbound transfer for a domain block from another registrar |
| [TransferDomainBlocking - Deny](https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20Deny) | Deny the outbound transfer of a domain block to another registrar |
| [TransferDomainBlocking - Query](https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20Query) | Find out the status of an inbound transfer for an domain block from another registrar |
| [TransferDomainBlocking - Request](https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20Request) | Request an inbound transfer for a domain block from another registrar |
| [TransferDomainBlocking - UserTransfer](https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20UserTransfer) | This is used to transfer a domain block from one account to another within CentralNic Reseller. |

## Aftermarket

| [AddAftermarketAccount](../../api-command/addaftermarketaccount/) | Add an Aftermarket Account |
| --- | --- |
| [AddAftermarketDomain](../../api-command/addaftermarketdomain/) | Add a Domain listing |
| [AftermarketBid](../../api-command/aftermarketbid/) | Give a new bid in a bidding |
| [BuyDomain](../../api-command/buydomain/) | Start a bid on a domain or directly buy a domain. |
| [DeleteAftermarketAccount](../../api-command/deleteaftermarketaccount/) | Remove an Aftermarket Account |
| [DeleteAftermarketDomain](../../api-command/deleteaftermarketdomain/) | Remove a Domain from listing |
| [ModifyAftermarketAccount](../../api-command/modifyaftermarketaccount/) | Modify an Aftermarket Account |
| [ModifyAftermarketDomain](../../api-command/modifyaftermarketdomain/) | Modify a Domain listing |
| [QueryAftermarketAccountList](../../api-command/queryaftermarketaccountlist/) | List your Aftermarket Accounts |
| [QueryAftermarketBid](../../api-command/queryaftermarketbid/) | Details to a certain bid for a domain |
| [QueryAftermarketBidList](../../api-command/queryaftermarketbidlist/) | Query all initiated aftermarket processes in your CentralNic Reseller account. |
| [QueryAftermarketDomainList](../../api-command/queryaftermarketdomainlist/) | Returns a list of all Domains in your CentralNic Reseller account that are currently listed for sale through the Aftermarket System. Offers parameters to narrow down the resulting response. |
| [QueryAftermarketList](../../api-command/queryaftermarketlist/) | Search domains in the aftermarket |
| [ReserveDomain](../../api-command/reservedomain/) | Reserve a domain in the aftermarket |
| [StatusAftermarketAccount](../../api-command/statusaftermarketaccount/) | Status of an Aftermarket Account |
| [StatusAftermarketDomain](../../api-command/statusaftermarketdomain/) | Status of a Domain listing |

## Application

| [AddDomainApplication](../../api-command/adddomainapplication/) | Submit a domain application or backorder |
| --- | --- |
| [DeleteDomainApplication](../../api-command/deletedomainapplication/) | Delete a domain application |
| [ModifyDomainApplication](../../api-command/modifydomainapplication/) | Modifies gTLD pre-orders |
| [QueryApplicationList](../../api-command/queryapplicationlist/) | Query list of available application phases |
| [QueryDomainApplicationList](../../api-command/querydomainapplicationlist/) | Query list of applications / backorders |
| [StatusDomainApplication](../../api-command/statusdomainapplication/) | Check status of particular application |

## Certificate

| [AddCertificate](../../api-command/addcertificate/) | Request SSL certificate |
| --- | --- |
| [CheckCertificate](../../api-command/checkcertificate/) | Gather information about a certificate request |
| [DeleteCertificate](../../api-command/deletecertificate/) | Delete a certificate |
| [GetCertificateInfo](../../api-command/getcertificateinfo/) | Request general information about a certificate class |
| [QueryCertificateList](../../api-command/querycertificatelist/) | List all certificate orders |
| [ReissueCertificate](../../api-command/reissuecertificate/) | Create a new sub-certificate in a certificate order |
| [RenewCertificate](../../api-command/renewcertificate/) | RenewCertificate will create a new sub-certificate in a certificate order |
| [StatusCertificate](../../api-command/statuscertificate/) | Give all information about Certificate |
| [RevokeCertificate](../../api-command/revokecertificate/) | Revoke an issued Certificate |
| [RevokeCertificateOrder](../../api-command/revokecertificateorder/) | Revoke a Certificate Order and all its associated certificates. |
| [CancelCertificateOrder](../../api-command/cancelcertificateorder/) | Abort a pending Certificate Order |
| [StatusCertificateOrder](../../api-command/statuscertificateorder/) | Gives information about a Certificate Order |
| [QueryCertificateOrderList](../../api-command/querycertificateorderlist/) | Search for Certificate Orders |
| [AddCertificateContact](../../api-command/addcertificatecontact/) | Create a certificate contact |
| [StatusCertificateContact](../../api-command/statuscertificatecontact/) | Returns information about a certificate contact |
| [QueryCertificateContactList](../../api-command/querycertificatecontactlist/) | Searches for certificate contact handles |

## Contact

| [AddContact](../../api-command/addcontact/) | Create a new contact |
| --- | --- |
| [CheckContact](../../api-command/checkcontact/) | Check availability of a single contact |
| [CheckContacts](../../api-command/checkcontacts/) | Check availability of multiple contacts |
| [CloneContact](../../api-command/clonecontact/) | Create duplicate of existing contact |
| [DeleteContact](../../api-command/deletecontact/) | Delete a contact |
| [ModifyContact](../../api-command/modifycontact/) | Modify a contact handle |
| [QueryContactList](../../api-command/querycontactlist/) | Query a list of contacts |
| [RequestToken](../../api-command/requesttoken/) | Request email token for contact disclosure |
| [RestoreContact](../../api-command/restorecontact/) | Restore deleted contact |
| [StatusContact](../../api-command/statuscontact/) | StatusContact |
| [StatusOwnerChange](../../api-command/statusownerchange/) | StatusOwnerChange |
| [StatusUnsyncRegistryContact](../../api-command/statusunsyncregistrycontact/) | StatusUnsyncRegistryContact |
| [TransferContact](../../api-command/transfercontact/) | Transfer a contact |

## Domain

| [ActivateClaimsNotice](../../api-command/activateclaimsnotice/) | Approve or deny the claims notification |
| --- | --- |
| [AddDomain](../../api-command/adddomain/) | Initiates the domain name registration at the registry |
| [CheckClaims](../../api-command/checkclaims/) | Check if TMCH holds trademark entry |
| [CheckDomain](../../api-command/checkdomain/) | Check availability of a single domain |
| [CheckDomains](../../api-command/checkdomains/) | Check availability of multiple domains |
| [DeleteDomain](../../api-command/deletedomain/) | The command is used to request the deletion of the domain |
| [DomainPrice](../../api-command/domainprice/) | Gather information about charged fee for specific action |
| [GetZone](../../api-command/getzone/) | Get zone information for specific domain name |
| [GetZoneInfo](../../api-command/getzoneinfo/) | Query information about a zone |
| [ModifyDomain](../../api-command/modifydomain/) | Modify domain data |
| [ParkDomain](../../api-command/parkdomain/) | Park your domain for monetization |
| [PushDomain](../../api-command/pushdomain/) | Move a domain away from CentralNic Reseller |
| [QueryActiveServiceList](../../api-command/queryactiveservicelist/) | Search for active running services and their renewal dates. |
| [QueryClaimsNoticeList](../../api-command/queryclaimsnoticelist/) | List all claims notices currently active |
| [QueryDomainExpireList](../../api-command/querydomainexpirelist/) | Query list of upcoming domain deletions or expirations |
| [QueryDomainHistoryList](../../api-command/querydomainhistorylist/) | Query list of deleted domain names |
| [QueryDomainList](../../api-command/querydomainlist/) | Query list of domains in account |
| [QueryDomainListByContact](../../api-command/querydomainlistbycontact/) | Query list of domains using a particular contact |
| [QueryDomainRenewList](../../api-command/querydomainrenewlist/) | Query list of domains on renew |
| [QueryIDNTagList](../../api-command/queryidntaglist/) | Gather information about available IDN tags of zone or domain |
| [QueryRegisteredPremiumDomainList](../../api-command/queryregisteredpremiumdomainlist/) | Query list of registered premium domain names in account |
| [QueryTrusteeDomainList](../../api-command/querytrusteedomainlist/) | Query list of domains in account, which use a trustee service |
| [RenewDomain](../../api-command/renewdomain/) | Command used to renew domains explicitly for a specified period of time |
| [RequestDomainPin](../../api-command/requestdomainpin/) | RequestDomainPin |
| [ResendNotification](../../api-command/resendnotification/) | ResendNotification |
| [RestoreDomain](../../api-command/restoredomain/) | Command used to restore a domain |
| [SetDomainPinLock](../../api-command/setdomainpinlock/) | SetDomainPinLock |
| [SetDomainRenewalmode](../../api-command/setdomainrenewalmode/) | SetDomainRenewalmode |
| [SetDomainTransfermode](../../api-command/setdomaintransfermode/) | SetDomainTransfermode |
| [StatusClaimsNotice](../../api-command/statusclaimsnotice/) | Lists details of a specified claims notice |
| [StatusDomain](../../api-command/statusdomain/) | Gather information about a domain name in account |
| [StatusDomainHistory](../../api-command/statusdomainhistory/) | Show information of a deleted domain |
| [TradeDomain](../../api-command/tradedomain/) | Change registrant of a domain |

## Domain - Tags

| [AddTag](../../api-command/addtag/) | Creates a new Tag |
| --- | --- |
| [DeleteTag](../../api-command/deletetag/) | DeleteTag |
| [ModifyTag](../../api-command/modifytag/) | ModifyTag |
| [QueryTagList](../../api-command/querytaglist/) | Shows a list of all created Tags |
| [StatusTag](../../api-command/statustag/) | StatusTag |

## DynamicDNS

| [AddDynamicDNS](../../api-command/adddynamicdns/) | Adds a dynamic DNS host object. |
| --- | --- |
| [DeleteDynamicDNS](../../api-command/deletedynamicdns/) | Deletes a DynamicDNS host object |
| [ModifyDynamicDNS](../../api-command/modifydynamicdns/) | Modifies a DynamicDNS host object |
| [QueryDynamicDNSList](../../api-command/querydynamicdnslist/) | Show details about all created DynamicDNS objects |
| [StatusDynamicDNS](../../api-command/statusdynamicdns/) | Shows details about a dynamic DNS host object |
| [UpdateDynamicDNS](../../api-command/updatedynamicdns/) | Updates a dynamic DNS host object |

## Event

| [DeleteEvent](../../api-command/deleteevent/) | Delete particular event |
| --- | --- |
| [QueryEventList](../../api-command/queryeventlist/) | QueryEventList |
| [StatusEvent](../../api-command/statusevent/) | StatusEvent |

## Finance

| [ConvertCurrency](../../api-command/convertcurrency/) | Convert currency with current exchange rate |
| --- | --- |
| [QueryAccountingList](../../api-command/queryaccountinglist/) | Query list of transactions in account |
| [QueryAvailablePromotionList](../../api-command/queryavailablepromotionlist/) | QueryAvailablePromotionList |
| [QueryExchangeRates](../../api-command/queryexchangerates/) | QueryExchangeRates |
| [QueryPremiumDomainList](../../api-command/querypremiumdomainlist/) | Query list with premium domain prices |
| [QueryPriceHistoryList](../../api-command/querypricehistorylist/) | QueryPriceHistoryList |
| [QueryServiceList](../../api-command/queryservicelist/) | Query price list of services |
| [QueryUpcomingAccountingList](../../api-command/queryupcomingaccountinglist/) | Query information about upcoming accountings |
| [QueryZoneList](../../api-command/queryzonelist/) | Query list of activated zones in account |
| [QueryZonePriceList](../../api-command/queryzonepricelist/) | QueryZonePriceList |
| [ServicePrice](../../api-command/serviceprice/) | ServicePrice |

## Hosting - cPanel

_cPanel commands_

| [AddHosting - AddOnDomain](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20AddOnDomain) | Create a new addon domain |
| --- | --- |
| [AddHosting - CatchAllAddress](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20CatchAllAddress) | Create a new catch all address |
| [AddHosting - DomainAlias](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20DomainAlias) | Create a new domain alias |
| [AddHosting - Email](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20Email) | Create a new email |
| [AddHosting - EmailDomainlForward](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20EmailDomainlForward) | Create a new email domain forward |
| [AddHosting - EmailForward](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20EmailForward) | Create a new email forward |
| [AddHosting - FeatureList](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20FeatureList) | Create a new feature list |
| [AddHosting - FTPUser](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20FTPUser) | Create a new FTP user |
| [AddHosting - MySQLDatabase](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20MySQLDatabase) | Create a new MySQL database |
| [AddHosting - MySQLDatabaseUser](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20MySQLDatabaseUser) | Create a new MySQL database user |
| [AddHosting - MySQLDatabaseUserPrivileges](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20MySQLDatabaseUserPrivileges) | Create new MySQL database user privileges |
| [AddHosting - Package](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20Package) | Create a new package |
| [AddHosting - SubDomain](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20SubDomain) | Create a new sub domain |
| [AddHosting - UserAccount](https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20UserAccount) | Create a new cPanel user account |
| [CheckHosting](../../api-command/checkhosting/) | CheckHosting |
| [DeleteHosting](../../api-command/deletehosting/) | DeleteHosting |
| [ModifyHosting](../../api-command/modifyhosting/) | ModifyHosting |
| [QueryHostingList](../../api-command/queryhostinglist/) | QueryHostingList |
| [RenewHosting](../../api-command/renewhosting/) | RenewHosting |
| [RestoreHosting](../../api-command/restorehosting/) | RestoreHosting |
| [StatusHosting](../../api-command/statushosting/) | StatusHosting |

## Hosting - Database

_Homer Database commands_

| [AddDatabase](../../api-command/adddatabase/) | For creating a Database |
| --- | --- |
| [DeleteDatabase](../../api-command/deletedatabase/) | For deleting a Database |
| [ModifyDatabase](../../api-command/modifydatabase/) | For modifying disk space or password of a Database |
| [QueryDatabaseList](../../api-command/querydatabaselist/) | For getting a list/overview of all available/existing Databases |
| [RenewDatabase](../../api-command/renewdatabase/) | For renewing a Database |
| [SetDatabaseRenewalMode](../../api-command/setdatabaserenewalmode/) | SetDatabaseRenewalMode |
| [StatusDatabase](../../api-command/statusdatabase/) | For reviewing the current status of a Database |

## Hosting - Mailbox

_Mailbox, Email address, Forwarding_

| [AddEmailaddress](../../api-command/addemailaddress/) | AddEmailaddress |
| --- | --- |
| [AddEmailforwarding](../../api-command/addemailforwarding/) | AddEmailforwarding |
| [AddMailbox](../../api-command/addmailbox/) | AddMailbox |
| [DeleteEmailaddress](../../api-command/deleteemailaddress/) | DeleteEmailaddress |
| [DeleteEmailforwarding](../../api-command/deleteemailforwarding/) | DeleteEmailforwarding |
| [DeleteMailbox](../../api-command/deletemailbox/) | DeleteMailbox |
| [QueryEmailaddressList](../../api-command/queryemailaddresslist/) | QueryEmailaddressList |
| [QueryEmailforwardingList](../../api-command/queryemailforwardinglist/) | QueryEmailforwardingList |
| [QueryMailboxList](../../api-command/querymailboxlist/) | QueryMailboxList |
| [StatusEmailaddress](../../api-command/statusemailaddress/) | StatusEmailaddress |
| [StatusMailbox](../../api-command/statusmailbox/) | StatusMailbox |

## Hosting - Mailspace

_Mailspace_

| [AddMailspace](../../api-command/addmailspace/) | AddMailspace |
| --- | --- |
| [CheckMailspaceEmail](../../api-command/checkmailspaceemail/) | Check Mailspace if Email already exists |
| [DeleteMailspace](../../api-command/deletemailspace/) | DeleteMailspace |
| [ModifyMailspace](../../api-command/modifymailspace/) | ModifyMailspace |
| [QueryMailspaceList](../../api-command/querymailspacelist/) | QueryMailspaceList |
| [RenewMailspace](../../api-command/renewmailspace/) | RenewMailspace |
| [SetMailspaceRenewalMode](../../api-command/setmailspacerenewalmode/) | SetMailspaceRenewalMode |
| [StatusMailspace](../../api-command/statusmailspace/) | StatusMailspace |

## Hosting - Webhost

_Webhost_

| [AddWebhost](../../api-command/addwebhost/) | Creates a new Webhost |
| --- | --- |
| [DeleteWebhost](../../api-command/deletewebhost/) | DeleteWebhost |
| [ModifyWebhost](../../api-command/modifywebhost/) | ModifyWebhost |
| [QueryWebhostList](../../api-command/querywebhostlist/) | Show list of webhosts in account |
| [StatusWebhost](../../api-command/statuswebhost/) | StatusWebhost |

## Hosting - Webspace

_Webspace, PHPini_

| [AddWebspace](../../api-command/addwebspace/) | Creates a new Webspace |
| --- | --- |
| [DeleteWebspace](../../api-command/deletewebspace/) | DeleteWebspace |
| [ModifyPHPIni](../../api-command/modifyphpini/) | ModifyPHPini |
| [ModifyWebspace](../../api-command/modifywebspace/) | ModifyWebspace |
| [QueryPHPIni](../../api-command/queryphpini/) | QueryPHPIni |
| [QueryWebspaceList](../../api-command/querywebspacelist/) | List all created webspaces including related data |
| [QueryWebspaceTraffic](../../api-command/querywebspacetraffic/) | QueryWebspaceTraffic |
| [RenewWebspace](../../api-command/renewwebspace/) | RenewWebspace |
| [SetWebspaceRenewalMode](../../api-command/setwebspacerenewalmode/) | SetWebspaceRenewalMode |
| [StatusWebspace](../../api-command/statuswebspace/) | StatusWebspace |

## KeyDNS

_Our KeyDNS Reference Manual will give you an extensive overview of the commands which can be submitted to the system. Please read the KeyDNS Reference manual carefully in order to avoid any mistakes. If there are any errors or missing topics, please do not hesitate to contact us._

| [AddDNSZone](../../api-command/adddnszone/) | Add the DNSZone to the HostedDNS section |
| --- | --- |
| [AddMailFwd](../../api-command/addmailfwd/) | Add a mail forward |
| [AddWebFwd](../../api-command/addwebfwd/) | Add forward in HostedDNS zone |
| [CheckDNSZone](../../api-command/checkdnszone/) | Check availability of DNSZone |
| [DeleteDNSZone](../../api-command/deletednszone/) | Delete the DNSZone from the HostedDNS section |
| [DeleteMailFwd](../../api-command/deletemailfwd/) | Delete a mail forward |
| [DeleteWebFwd](../../api-command/deletewebfwd/) | Delete a web forward |
| [ExportDNSZone](../../api-command/exportdnszone/) | Export DNSZone from KeyDNS |
| [GetDNSZone](../../api-command/getdnszone/) | GetDNSZone |
| [ImportDNSZone](../../api-command/importdnszone/) | Import DNSZone to KeyDNS |
| [ModifyDNSZone](../../api-command/modifydnszone/) | Modify the DNSZone in the HostedDNS section |
| [QueryDNSZoneList](../../api-command/querydnszonelist/) | Query list of DNSZones in KeyDNS |
| [QueryDNSZoneRRList](../../api-command/querydnszonerrlist/) | Query list of DNS zone statistics |
| [QueryDNSZoneStatisticList](../../api-command/querydnszonestatisticlist/) | Query list of resource records of a particular zone |
| [QueryDNSZoneSubdomainList](../../api-command/querydnszonesubdomainlist/) | Query subdomain list of a particular DNSZone |
| [QueryMailFwdList](../../api-command/querymailfwdlist/) | Query list of mail forwards |
| [QueryWebFwdList](../../api-command/querywebfwdlist/) | Query list of web forwards |
| [StatusDNSZone](../../api-command/statusdnszone/) | Shows the DNSZone configuration |

## Nameserver

| [AddNameserver](../../api-command/addnameserver/) | Create a name server |
| --- | --- |
| [CheckNameserver](../../api-command/checknameserver/) | Check availability of a name server |
| [DeleteNameserver](../../api-command/deletenameserver/) | Delete a name server |
| [ModifyNameserver](../../api-command/modifynameserver/) | Modify name server (e.g. IP address) |
| [QueryNameserverList](../../api-command/querynameserverlist/) | QueryNameserverList |
| [StatusNameserver](../../api-command/statusnameserver/) | StatusNameserver |

## Newsletter / Maintenance

_Subscription to the CentralNic Reseller newsletter and maintenance mailing list. You will regularly receive our CentralNic Reseller news with promotions, product updates, technical changes and many other topics._

| [ActivateRegistrarEmailAddress](../../api-command/activateregistraremailaddress/) | Activate newsletter / maintenance email |
| --- | --- |
| [AddRegistrarEmailAddress](../../api-command/addregistraremailaddress/) | Add newsletter / maintenance / abuse email |
| [DeleteRegistrarEmailAddress](../../api-command/deleteregistraremailaddress/) | Delete newsletter / maintenance email |
| [ModifyRegistrarEmailAddress](../../api-command/modifyregistraremailaddress/) | Modify newsletter / maintenance / abuse email |
| [QueryRegistrarEmailAddressList](../../api-command/queryregistraremailaddresslist/) | Quers newsletter / maintenance email |
| [StatusRegistrarEmailAddress](../../api-command/statusregistraremailaddress/) | Status newsletter / maintenance email |

## Paid Services

| [QueryAGPDeleteslist](../../api-command/queryagpdeleteslist/) | Query AGP values for all TLD/ZONES where AGP is available and get further statistics |
| --- | --- |
| [StatusAGPdeletes](../../api-command/statusagpdeletes/) | Query AGP values for a specific TLD/ZONE |

## Query

| [GenerateList](../../api-command/generatelist/) | Optional parameter to generate list out of command response |
| --- | --- |
| [QueryCommandSyntax](../../api-command/querycommandsyntax/) | Query the syntax of a particular command |
| [QueryDomainPinLockList](../../api-command/querydomainpinlocklist/) | Query list of domains in account with DomainPinLock |
| [QueryJobList](../../api-command/queryjoblist/) | Query list of running jobs in account |
| [QueryMonitoringList](../../api-command/querymonitoringlist/) | Query available maintenance information |
| [QueryObjectLogList](../../api-command/queryobjectloglist/) | Query information from the object log |
| [QueryOwnerChangeList](../../api-command/queryownerchangelist/) | Query list of currently pending owner changes |
| [QueryPromotionList](../../api-command/querypromotionlist/) | QueryPromotionList |
| [QueryPromotionRegistrarList](../../api-command/querypromotionregistrarlist/) | QueryPromotionRegistrarList |
| [QueryRegistrarCommentList](../../api-command/queryregistrarcommentlist/) | QueryRegistrarCommentList |
| [QueryRegistrarList](../../api-command/queryregistrarlist/) | Query list of subresellers in account |
| [QueryTrusteeLogList](../../api-command/querytrusteeloglist/) | Query list of domains that have used a trustee |
| [StatusObjectLog](../../api-command/statusobjectlog/) | Gather information about a particular entry of the object log |

## Server

| [AddServer](../../api-command/addserver/) | Create a server |
| --- | --- |
| [DeleteServer](../../api-command/deleteserver/) | Delete a server |
| [ModifyServer](../../api-command/modifyserver/) | Modifies an existing server |
| [QueryServerList](../../api-command/queryserverlist/) | Query list of servers |
| [RenewServer](../../api-command/renewserver/) | Renew a server |
| [StatusServer](../../api-command/statusserver/) | Query server status |

## SMS

| [ChargeMobileAccount](../../api-command/chargemobileaccount/) | ChargeMobileAccount |
| --- | --- |
| [CreateMobileAccount](../../api-command/createmobileaccount/) | CreateMobileAccount |
| [QueryMobileAccountList](../../api-command/querymobileaccountlist/) | QueryMobileAccountList |
| [QuerySMSList](../../api-command/querysmslist/) | QuerySMSList |
| [SendSMS](../../api-command/sendsms/) | SendSMS |
| [StatusMobileAccount](../../api-command/statusmobileaccount/) | StatusMobileAccount |

## Trademark

| [AddTrademark](../../api-command/addtrademark/) | Submit a trademark validation request to TMCH |
| --- | --- |
| [DeleteTrademark](../../api-command/deletetrademark/) | Delete trademark entry |
| [GetTrademarkLabels](../../api-command/gettrademarklabels/) | Gather labels of a trademark |
| [ModifyTrademark](../../api-command/modifytrademark/) | Modifies trademark information |
| [QueryTrademarkList](../../api-command/querytrademarklist/) | Query list of trademarks in account |
| [RenewTrademark](../../api-command/renewtrademark/) | RenewTrademark |
| [SetTrademarkRenewalmode](../../api-command/settrademarkrenewalmode/) | SetTrademarkRenewalmode |
| [StatusTrademark](../../api-command/statustrademark/) | StatusTrademark |
| [TransferTrademark](../../api-command/transfertrademark/) | Transfer a trademark |

## Transfer

| [ActivateTransfer](../../api-command/activatetransfer/) | Request or deny CNOBI transfers, if own confirmation page exists |
| --- | --- |
| [CheckDomainTransfer](../../api-command/checkdomaintransfer/) | Check transfer requirements of particular gTLDs |
| [QueryForeignTransferList](../../api-command/queryforeigntransferlist/) | QueryForeignTransferList |
| [QueryTransferList](../../api-command/querytransferlist/) | QueryTransferList |
| [SetAuthcode](../../api-command/setauthcode/) | SetAuthcode |
| [StatusDomainTransfer](../../api-command/statusdomaintransfer/) | StatusDomainTransfer |
| [TransferDomain](../../api-command/transferdomain/) | This command allows you to request, approve, deny or cancel a domain transfer. |
