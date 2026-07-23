---
title: "CentralNic Reseller API Command Reference"
description: "● Account ● Aftermarket ● Application ● Certificate ● Contact ● Domain ● DynamicDNS ● Event ● Finance ● KeyDNS ● Nameserver ● Query ● Server ● SMS ● Trademark ●"
---

:::command[Account]

```text
AccountActivateAppendixActivate appendix
ModifyRegistrarModify reseller account
ModifyRegistrarCurrencyModifies the currency setting of an account
PushObjectMove an object to another position
QueryAppendixListQuery information about appendices
QueryRegistrarStatisticListGather information about registration numbers in different zones
StatusAccountStatusAccount
StatusRegistrarStatusRegistrar
```

:::

 

:::command[ACL]

```text
ACLThe Access Control List specifies which actions on certain objects a user is allowed to conduct.AddAclAdd location rights for a given user or group.
AddUserCreates a user or a group.
DeleteAclRemove location rights for a given user or group.
DeleteUserDeletes a user or a group.
ModifyAclModify location rights for a given user or group.
ModifyUserModify already existing ACL user
QueryACLListShows all locations with granted rights of a given user or group.
QueryUserListShows a list of all users or groups.
StatusAclShows granted rights for a specific location of a given user or group.
StatusUserShows the status of a given user or group.
```

:::

 

:::command[Domain Blocking]

```text
Domain BlockingAvailable commands for domain blocking servicesAddDomainBlockingThis command adds a domain block to your submitted label.
CheckDomainBlockingIPRIDRetrieve the specific IPR related to the block.
DeleteDomainBlockingRemove a domain block.
ModifyDomainBlockingUpdate the AuthInfo, owner contact, renewal mode and tags.
QueryDomainBlockingListRetrieve all blocks’ information.
RenewDomainBlockingRenew a domain block
StatusDomainBlockingRetrieve a specific block’s information.
TransferDomainBlocking - ApproveApprove the outbound transfer of a domain block to another registrar
TransferDomainBlocking - CancelCancel the initiated inbound transfer for a domain block from another registrar
TransferDomainBlocking - DenyDeny the outbound transfer of a domain block to another registrar
TransferDomainBlocking - QueryFind out the status of an inbound transfer for an domain block from another registrar
TransferDomainBlocking - RequestRequest an inbound transfer for a domain block from another registrar
TransferDomainBlocking - UserTransferThis is used to transfer a domain block from one account to another within CentralNic Reseller.
```

:::

 

:::command[Aftermarket]

```text
AftermarketAddAftermarketAccountAdd an Aftermarket Account
AddAftermarketDomainAdd a Domain listing
AftermarketBidGive a new bid in a bidding
BuyDomainStart a bid on a domain or directly buy a domain.
DeleteAftermarketAccountRemove an Aftermarket Account
DeleteAftermarketDomainRemove a Domain from listing
ModifyAftermarketAccountModify an Aftermarket Account
ModifyAftermarketDomainModify a Domain listing
QueryAftermarketAccountListList your Aftermarket Accounts
QueryAftermarketBidDetails to a certain bid for a domain
QueryAftermarketBidListQuery all initiated aftermarket processes in your CentralNic Reseller account.
QueryAftermarketDomainListReturns a list of all Domains in your CentralNic Reseller account that are currently listed for sale through the Aftermarket System. Offers parameters to narrow down the resulting response.
QueryAftermarketListSearch domains in the aftermarket
ReserveDomainReserve a domain in the aftermarket
StatusAftermarketAccountStatus of an Aftermarket Account
StatusAftermarketDomainStatus of a Domain listing
```

:::

 

:::command[Application]

```text
ApplicationAddDomainApplicationSubmit a domain application or backorder
DeleteDomainApplicationDelete a domain application
ModifyDomainApplicationModifies gTLD pre-orders
QueryApplicationListQuery list of available application phases
QueryDomainApplicationListQuery list of applications / backorders
StatusDomainApplicationCheck status of particular application
```

:::

 

:::command[Certificate]

```text
Certificate
AddCertificateRequest SSL certificate
CheckCertificateGather information about a certificate request
DeleteCertificateDelete a certificate
GetCertificateInfoRequest general information about a certificate class

QueryCertificateListList all certificate orders
ReissueCertificateCreate a new sub-certificate in a certificate order
RenewCertificateRenewCertificate will create a new sub-certificate in a certificate order
StatusCertificateGive all information about Certificate
RevokeCertificateRevoke an issued Certificate
RevokeCertificateOrderRevoke a Certificate Order and all its associated certificates.
CancelCertificateOrderAbort a pending Certificate Order
StatusCertificateOrderGives information about a Certificate Order
QueryCertificateOrderListSearch for Certificate Orders
AddCertificateContactCreate a certificate contact
StatusCertificateContactReturns information about a certificate contact
QueryCertificateContactListSearches for certificate contact handles
```

:::

 

:::command[Contact]

```text
ContactAddContactCreate a new contact
CheckContactCheck availability of a single contact
CheckContactsCheck availability of multiple contacts
CloneContactCreate duplicate of existing contact
DeleteContactDelete a contact
ModifyContactModify a contact handle
QueryContactListQuery a list of contacts
RequestTokenRequest email token for contact disclosure
RestoreContactRestore deleted contact
StatusContactStatusContact
StatusOwnerChangeStatusOwnerChange
StatusUnsyncRegistryContactStatusUnsyncRegistryContact
TransferContactTransfer a contact
```

:::

 

:::command[Domain]

```text
DomainActivateClaimsNoticeApprove or deny the claims notification
AddDomainInitiates the domain name registration at the registry
CheckClaimsCheck if TMCH holds trademark entry
CheckDomainCheck availability of a single domain
CheckDomainsCheck availability of multiple domains
DeleteDomainThe command is used to request the deletion of the domain
DomainPriceGather information about charged fee for specific action
GetZoneGet zone information for specific domain name
GetZoneInfoQuery information about a zone
ModifyDomainModify domain data
ParkDomainPark your domain for monetization
PushDomainMove a domain away from CentralNic Reseller
QueryActiveServiceListSearch for active running services and their renewal dates.
QueryClaimsNoticeListList all claims notices currently active
QueryDomainExpireListQuery list of upcoming domain deletions or expirations
QueryDomainHistoryListQuery list of deleted domain names
QueryDomainListQuery list of domains in account
QueryDomainListByContactQuery list of domains using a particular contact
QueryDomainRenewListQuery list of domains on renew
QueryIDNTagListGather information about available IDN tags of zone or domain
QueryRegisteredPremiumDomainListQuery list of registered premium domain names in account
QueryTrusteeDomainListQuery list of domains in account, which use a trustee service
RenewDomainCommand used to renew domains explicitly for a specified period of time
RequestDomainPinRequestDomainPin
ResendNotificationResendNotification
RestoreDomainCommand used to restore a domain
SetDomainPinLockSetDomainPinLock
SetDomainRenewalmodeSetDomainRenewalmode
SetDomainTransfermodeSetDomainTransfermode
StatusClaimsNoticeLists details of a specified claims notice
StatusDomainGather information about a domain name in account
StatusDomainHistoryShow information of a deleted domain
TradeDomainChange registrant of a domain
```

:::

 

:::command[Domain - Tags]

```text
Domain - TagsAddTagCreates a new Tag
DeleteTagDeleteTag
ModifyTagModifyTag
QueryTagListShows a list of all created Tags
StatusTagStatusTag
```

:::

 

:::command[DynamicDNS]

```text
DynamicDNSAddDynamicDNSAdds a dynamic DNS host object.
DeleteDynamicDNSDeletes a DynamicDNS host object
ModifyDynamicDNSModifies a DynamicDNS host object
QueryDynamicDNSListShow details about all created DynamicDNS objects
StatusDynamicDNSShows details about a dynamic DNS host object
UpdateDynamicDNSUpdates a dynamic DNS host object
```

:::

 

:::command[Event]

```text
EventDeleteEventDelete particular event
QueryEventListQueryEventList
StatusEventStatusEvent
```

:::

 

:::command[Finance]

```text
FinanceConvertCurrencyConvert currency with current exchange rate
QueryAccountingListQuery list of transactions in account
QueryAvailablePromotionListQueryAvailablePromotionList
QueryExchangeRatesQueryExchangeRates
QueryPremiumDomainListQuery list with premium domain prices
QueryPriceHistoryListQueryPriceHistoryList
QueryServiceListQuery price list of services
QueryUpcomingAccountingListQuery information about upcoming accountings
QueryZoneListQuery list of activated zones in account
QueryZonePriceListQueryZonePriceList
ServicePriceServicePrice
```

:::

 

:::command[Hosting - cPanel]

```text
Hosting - cPanelcPanel commandsAddHosting - AddOnDomainCreate a new addon domain
AddHosting - CatchAllAddressCreate a new catch all address
AddHosting - DomainAliasCreate a new domain alias
AddHosting - EmailCreate a new email
AddHosting - EmailDomainlForwardCreate a new email domain forward
AddHosting - EmailForwardCreate a new email forward
AddHosting - FeatureListCreate a new feature list
AddHosting - FTPUserCreate a new FTP user
AddHosting - MySQLDatabaseCreate a new MySQL database
AddHosting - MySQLDatabaseUserCreate a new MySQL database user
AddHosting - MySQLDatabaseUserPrivilegesCreate new MySQL database user privileges
AddHosting - PackageCreate a new package
AddHosting - SubDomainCreate a new sub domain
AddHosting - UserAccountCreate a new cPanel user account
CheckHostingCheckHosting
DeleteHostingDeleteHosting
ModifyHostingModifyHosting
QueryHostingListQueryHostingList
RenewHostingRenewHosting
RestoreHostingRestoreHosting
StatusHostingStatusHosting
```

:::

 

:::command[Hosting - Database]

```text
Hosting - DatabaseHomer Database commandsAddDatabaseFor creating a Database
DeleteDatabaseFor deleting a Database
ModifyDatabaseFor modifying disk space or password of a Database
QueryDatabaseListFor getting a list/overview of all available/existing Databases
RenewDatabaseFor renewing a Database
SetDatabaseRenewalModeSetDatabaseRenewalMode
StatusDatabaseFor reviewing the current status of a Database
```

:::

 

:::command[Hosting - Mailbox]

```text
Hosting - MailboxMailbox, Email address, ForwardingAddEmailaddressAddEmailaddress
AddEmailforwardingAddEmailforwarding
AddMailboxAddMailbox
DeleteEmailaddressDeleteEmailaddress
DeleteEmailforwardingDeleteEmailforwarding
DeleteMailboxDeleteMailbox
QueryEmailaddressListQueryEmailaddressList
QueryEmailforwardingListQueryEmailforwardingList
QueryMailboxListQueryMailboxList
StatusEmailaddressStatusEmailaddress
StatusMailboxStatusMailbox
```

:::

 

:::command[Hosting - Mailspace]

```text
Hosting - MailspaceMailspaceAddMailspaceAddMailspace
CheckMailspaceEmailCheck Mailspace if Email already exists
DeleteMailspaceDeleteMailspace
ModifyMailspaceModifyMailspace
QueryMailspaceListQueryMailspaceList
RenewMailspaceRenewMailspace
SetMailspaceRenewalModeSetMailspaceRenewalMode
StatusMailspaceStatusMailspace
```

:::

 

:::command[Hosting - Webhost]

```text
Hosting - WebhostWebhostAddWebhostCreates a new Webhost
DeleteWebhostDeleteWebhost
ModifyWebhostModifyWebhost
QueryWebhostListShow list of webhosts in account
StatusWebhostStatusWebhost
```

:::

 

:::command[Hosting - Webspace]

```text
Hosting - WebspaceWebspace, PHPiniAddWebspaceCreates a new Webspace
DeleteWebspaceDeleteWebspace
ModifyPHPIniModifyPHPini
ModifyWebspaceModifyWebspace
QueryPHPIniQueryPHPIni
QueryWebspaceListList all created webspaces including related data
QueryWebspaceTrafficQueryWebspaceTraffic
RenewWebspaceRenewWebspace
SetWebspaceRenewalModeSetWebspaceRenewalMode
StatusWebspaceStatusWebspace
```

:::

 

:::command[KeyDNS]

```text
KeyDNSOur KeyDNS Reference Manual will give you an extensive overview of the commands which can be submitted to the system. Please read the KeyDNS Reference manual carefully in order to avoid any mistakes. If there are any errors or missing topics, please do not hesitate to contact us.AddDNSZoneAdd the DNSZone to the HostedDNS section
AddMailFwdAdd a mail forward
AddWebFwdAdd forward in HostedDNS zone
CheckDNSZoneCheck availability of DNSZone
DeleteDNSZoneDelete the DNSZone from the HostedDNS section
DeleteMailFwdDelete a mail forward
DeleteWebFwdDelete a web forward
ExportDNSZoneExport DNSZone from KeyDNS
GetDNSZoneGetDNSZone
ImportDNSZoneImport DNSZone to KeyDNS
ModifyDNSZoneModify the DNSZone in the HostedDNS section
QueryDNSZoneListQuery list of DNSZones in KeyDNS
QueryDNSZoneRRListQuery list of DNS zone statistics
QueryDNSZoneStatisticListQuery list of resource records of a particular zone
QueryDNSZoneSubdomainListQuery subdomain list of a particular DNSZone
QueryMailFwdListQuery list of mail forwards
QueryWebFwdListQuery list of web forwards
StatusDNSZoneShows the DNSZone configuration
```

:::

 

:::command[Nameserver]

```text
NameserverAddNameserverCreate a name server
CheckNameserverCheck availability of a name server
DeleteNameserverDelete a name server
ModifyNameserverModify name server (e.g. IP address)
QueryNameserverListQueryNameserverList
StatusNameserverStatusNameserver
```

:::

 

:::command[Newsletter / Maintenance]

```text
Newsletter / MaintenanceSubscription to the CentralNic Reseller newsletter and maintenance mailing list. You will regularly receive our CentralNic Reseller news with promotions, product updates, technical changes and many other topics. ActivateRegistrarEmailAddressActivate newsletter / maintenance email
AddRegistrarEmailAddressAdd newsletter / maintenance / abuse email
DeleteRegistrarEmailAddressDelete newsletter / maintenance email
ModifyRegistrarEmailAddressModify newsletter / maintenance / abuse email
QueryRegistrarEmailAddressListQuers newsletter / maintenance email
StatusRegistrarEmailAddressStatus newsletter / maintenance email
```

:::

 

:::command[Paid Services]

```text
Paid ServicesQueryAGPDeleteslistQuery AGP values for all TLD/ZONES where AGP is available and get further statistics
StatusAGPdeletesQuery AGP values for a specific TLD/ZONE
```

:::

 

:::command[Query]

```text
QueryGenerateListOptional parameter to generate list out of command response
QueryCommandSyntaxQuery the syntax of a particular command
QueryDomainPinLockListQuery list of domains in account with DomainPinLock
QueryJobListQuery list of running jobs in account
QueryMonitoringListQuery available maintenance information
QueryObjectLogListQuery information from the object log
QueryOwnerChangeListQuery list of currently pending owner changes
QueryPromotionListQueryPromotionList
QueryPromotionRegistrarListQueryPromotionRegistrarList
QueryRegistrarCommentListQueryRegistrarCommentList
QueryRegistrarListQuery list of subresellers in account
QueryTrusteeLogListQuery list of domains that have used a trustee
StatusObjectLogGather information about a particular entry of the object log
```

:::

 

:::command[Server]

```text
ServerAddServerCreate a server
DeleteServerDelete a server
ModifyServerModifies an existing server
QueryServerListQuery list of servers
RenewServerRenew a server
StatusServerQuery server status
```

:::

 

:::command[SMS]

```text
SMSChargeMobileAccountChargeMobileAccount
CreateMobileAccountCreateMobileAccount
QueryMobileAccountListQueryMobileAccountList
QuerySMSListQuerySMSList
SendSMSSendSMS
StatusMobileAccountStatusMobileAccount
```

:::

 

:::command[Trademark]

```text
TrademarkAddTrademarkSubmit a trademark validation request to TMCH
DeleteTrademarkDelete trademark entry
GetTrademarkLabelsGather labels of a trademark
ModifyTrademarkModifies trademark information
QueryTrademarkListQuery list of trademarks in account
RenewTrademarkRenewTrademark
SetTrademarkRenewalmodeSetTrademarkRenewalmode
StatusTrademarkStatusTrademark
TransferTrademarkTransfer a trademark
```

:::

 

:::command[Transfer]

```text
TransferActivateTransferRequest or deny CNOBI transfers, if own confirmation page exists
CheckDomainTransferCheck transfer requirements of particular gTLDs
QueryForeignTransferListQueryForeignTransferList
QueryTransferListQueryTransferList
SetAuthcodeSetAuthcode
StatusDomainTransferStatusDomainTransfer
TransferDomainThis command allows you to request, approve, deny or cancel a domain transfer.
```

:::
