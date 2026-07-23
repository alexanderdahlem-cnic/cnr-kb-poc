---
title: "CentralNic Reseller API Command Reference"
description: "● Account ● Aftermarket ● Application ● Certificate ● Contact ● Domain ● DynamicDNS ● Event ● Finance ● KeyDNS ● Nameserver ● Query ● Server ● SMS ● Trademark ●"
---



<div class="api-io api-io--command"><span class="api-io__label">Account</span>
<pre class="api-io__code"><code><h2>Account</h2><table><tbody><tr><th><a href="../../api-command/activateappendix/">ActivateAppendix</a></th><th>Activate appendix</th></tr>
<tr><td><a href="../../api-command/modifyregistrar/">ModifyRegistrar</a></td><td>Modify reseller account</td></tr>
<tr><td><a href="../../api-command/modifyregistrarcurrency/">ModifyRegistrarCurrency</a></td><td>Modifies the currency setting of an account</td></tr>
<tr><td><a href="../../api-command/pushobject/">PushObject</a></td><td>Move an object to another position</td></tr>
<tr><td><a href="../../api-command/queryappendixlist/">QueryAppendixList</a></td><td>Query information about appendices</td></tr>
<tr><td><a href="../../api-command/queryregistrarstatisticlist/">QueryRegistrarStatisticList</a></td><td>Gather information about registration numbers in different zones</td></tr>
<tr><td><a href="../../api-command/statusaccount/">StatusAccount</a></td><td>StatusAccount</td></tr>
<tr><td><a href="../../api-command/statusregistrar/">StatusRegistrar</a></td><td>StatusRegistrar</td></tr>
</tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">ACL</span>
<pre class="api-io__code"><code><h2>ACL</h2><p><em>The Access Control List specifies which actions on certain objects a user is allowed to conduct.</em></p><table><tbody><tr><th><a href="../../api-command/addacl/">AddAcl</a></th><th>Add location rights for a given user or group.</th></tr>
<tr><td><a href="../../api-command/adduser/">AddUser</a></td><td>Creates a user or a group.</td></tr>
<tr><td><a href="../../api-command/deleteacl/">DeleteAcl</a></td><td>Remove location rights for a given user or group.</td></tr>
<tr><td><a href="../../api-command/deleteuser/">DeleteUser</a></td><td>Deletes a user or a group.</td></tr>
<tr><td><a href="../../api-command/modifyacl/">ModifyAcl</a></td><td>Modify location rights for a given user or group.</td></tr>
<tr><td><a href="../../api-command/modifyuser/">ModifyUser</a></td><td>Modify already existing ACL user</td></tr>
<tr><td><a href="../../api-command/queryacllist/">QueryACLList</a></td><td>Shows all locations with granted rights of a given user or group.</td></tr>
<tr><td><a href="../../api-command/queryuserlist/">QueryUserList</a></td><td>Shows a list of all users or groups.</td></tr>
<tr><td><a href="../../api-command/statusacl/">StatusAcl</a></td><td>Shows granted rights for a specific location of a given user or group.</td></tr>
<tr><td><a href="../../api-command/statususer/">StatusUser</a></td><td>Shows the status of a given user or group.</td></tr>
</tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">Domain Blocking</span>
<pre class="api-io__code"><code><h2>Domain Blocking</h2><p><em>Available commands for domain blocking services</em></p><table><tbody><tr><th><a href="../../api-command/adddomainblocking/">AddDomainBlocking</a></th><th>This command adds a domain block to your submitted label.</th></tr>
<tr><td><a href="../../api-command/checkdomainblockingiprid/">CheckDomainBlockingIPRID</a></td><td>Retrieve the specific IPR related to the block.</td></tr>
<tr><td><a href="../../api-command/deletedomainblocking/">DeleteDomainBlocking</a></td><td>Remove a domain block.</td></tr>
<tr><td><a href="../../api-command/modifydomainblocking/">ModifyDomainBlocking</a></td><td>Update the AuthInfo, owner contact, renewal mode and tags.</td></tr>
<tr><td><a href="../../api-command/querydomainblockinglist/">QueryDomainBlockingList</a></td><td>Retrieve all blocks’ information.</td></tr>
<tr><td><a href="../../api-command/renewdomainblocking/">RenewDomainBlocking</a></td><td>Renew a domain block</td></tr>
<tr><td><a href="../../api-command/statusdomainblocking/">StatusDomainBlocking</a></td><td>Retrieve a specific block’s information.</td></tr>
<tr><td><a href="https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20Approve">TransferDomainBlocking - Approve</a></td><td>Approve the outbound transfer of a domain block to another registrar</td></tr>
<tr><td><a href="https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20Cancel">TransferDomainBlocking - Cancel</a></td><td>Cancel the initiated inbound transfer for a domain block from another registrar</td></tr>
<tr><td><a href="https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20Deny">TransferDomainBlocking - Deny</a></td><td>Deny the outbound transfer of a domain block to another registrar</td></tr>
<tr><td><a href="https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20Query">TransferDomainBlocking - Query</a></td><td>Find out the status of an inbound transfer for an domain block from another registrar</td></tr>
<tr><td><a href="https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20Request">TransferDomainBlocking - Request</a></td><td>Request an inbound transfer for a domain block from another registrar</td></tr>
<tr><td><a href="https://kb.centralnicreseller.com/api/api-command/TransferDomainBlocking%20-%20UserTransfer">TransferDomainBlocking - UserTransfer</a></td><td>This is used to transfer a domain block from one account to another within CentralNic Reseller.</td></tr>
</tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">Aftermarket</span>
<pre class="api-io__code"><code><h2>Aftermarket</h2><table><tbody><tr><th><a href="../../api-command/addaftermarketaccount/">AddAftermarketAccount</a></th><th>Add an Aftermarket Account</th></tr>
<tr><td><a href="../../api-command/addaftermarketdomain/">AddAftermarketDomain</a></td><td>Add a Domain listing</td></tr>
<tr><td><a href="../../api-command/aftermarketbid/">AftermarketBid</a></td><td>Give a new bid in a bidding</td></tr>
<tr><td><a href="../../api-command/buydomain/">BuyDomain</a></td><td>Start a bid on a domain or directly buy a domain.</td></tr>
<tr><td><a href="../../api-command/deleteaftermarketaccount/">DeleteAftermarketAccount</a></td><td>Remove an Aftermarket Account</td></tr>
<tr><td><a href="../../api-command/deleteaftermarketdomain/">DeleteAftermarketDomain</a></td><td>Remove a Domain from listing</td></tr>
<tr><td><a href="../../api-command/modifyaftermarketaccount/">ModifyAftermarketAccount</a></td><td>Modify an Aftermarket Account</td></tr>
<tr><td><a href="../../api-command/modifyaftermarketdomain/">ModifyAftermarketDomain</a></td><td>Modify a Domain listing</td></tr>
<tr><td><a href="../../api-command/queryaftermarketaccountlist/">QueryAftermarketAccountList</a></td><td>List your Aftermarket Accounts</td></tr>
<tr><td><a href="../../api-command/queryaftermarketbid/">QueryAftermarketBid</a></td><td>Details to a certain bid for a domain</td></tr>
<tr><td><a href="../../api-command/queryaftermarketbidlist/">QueryAftermarketBidList</a></td><td>Query all initiated aftermarket processes in your CentralNic Reseller account.</td></tr>
<tr><td><a href="../../api-command/queryaftermarketdomainlist/">QueryAftermarketDomainList</a></td><td>Returns a list of all Domains in your CentralNic Reseller account that are currently listed for sale through the Aftermarket System. Offers parameters to narrow down the resulting response.</td></tr>
<tr><td><a href="../../api-command/queryaftermarketlist/">QueryAftermarketList</a></td><td>Search domains in the aftermarket</td></tr>
<tr><td><a href="../../api-command/reservedomain/">ReserveDomain</a></td><td>Reserve a domain in the aftermarket</td></tr>
<tr><td><a href="../../api-command/statusaftermarketaccount/">StatusAftermarketAccount</a></td><td>Status of an Aftermarket Account</td></tr>
<tr><td><a href="../../api-command/statusaftermarketdomain/">StatusAftermarketDomain</a></td><td>Status of a Domain listing</td></tr>
</tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">Application</span>
<pre class="api-io__code"><code><h2>Application</h2><table><tbody><tr><th><a href="../../api-command/adddomainapplication/">AddDomainApplication</a></th><th>Submit a domain application or backorder</th></tr>
<tr><td><a href="../../api-command/deletedomainapplication/">DeleteDomainApplication</a></td><td>Delete a domain application</td></tr>
<tr><td><a href="../../api-command/modifydomainapplication/">ModifyDomainApplication</a></td><td>Modifies gTLD pre-orders</td></tr>
<tr><td><a href="../../api-command/queryapplicationlist/">QueryApplicationList</a></td><td>Query list of available application phases</td></tr>
<tr><td><a href="../../api-command/querydomainapplicationlist/">QueryDomainApplicationList</a></td><td>Query list of applications / backorders</td></tr>
<tr><td><a href="../../api-command/statusdomainapplication/">StatusDomainApplication</a></td><td>Check status of particular application</td></tr>
</tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">Certificate</span>
<pre class="api-io__code"><code><h2>Certificate</h2><table>
<tbody><tr><th><a href="../../api-command/addcertificate/">AddCertificate</a></th><th>Request SSL certificate</th></tr>
<tr><td><a href="../../api-command/checkcertificate/">CheckCertificate</a></td><td>Gather information about a certificate request</td></tr>
<tr><td><a href="../../api-command/deletecertificate/">DeleteCertificate</a></td><td>Delete a certificate</td></tr>
<tr><td><a href="../../api-command/getcertificateinfo/">GetCertificateInfo</a></td><td>Request general information about a certificate class</td></tr>
<tr><td><a href="../../api-command/querycertificatelist/">QueryCertificateList</a></td><td>List all certificate orders</td></tr>
<tr><td><a href="../../api-command/reissuecertificate/">ReissueCertificate</a></td><td>Create a new sub-certificate in a certificate order</td></tr>
<tr><td><a href="../../api-command/renewcertificate/">RenewCertificate</a></td><td>RenewCertificate will create a new sub-certificate in a certificate order</td></tr>
<tr><td><a href="../../api-command/statuscertificate/">StatusCertificate</a></td><td>Give all information about Certificate</td></tr>
<tr><td><a href="../../api-command/revokecertificate/">RevokeCertificate</a></td><td>Revoke an issued Certificate</td></tr>
<tr><td><a href="../../api-command/revokecertificateorder/">RevokeCertificateOrder</a></td><td>Revoke a Certificate Order and all its associated certificates.</td></tr>
<tr><td><a href="../../api-command/cancelcertificateorder/">CancelCertificateOrder</a></td><td>Abort a pending Certificate Order</td></tr>
<tr><td><a href="../../api-command/statuscertificateorder/">StatusCertificateOrder</a></td><td>Gives information about a Certificate Order</td></tr>
<tr><td><a href="../../api-command/querycertificateorderlist/">QueryCertificateOrderList</a></td><td>Search for Certificate Orders</td></tr>
<tr><td><a href="../../api-command/addcertificatecontact/">AddCertificateContact</a></td><td>Create a certificate contact</td></tr>
<tr><td><a href="../../api-command/statuscertificatecontact/">StatusCertificateContact</a></td><td>Returns information about a certificate contact</td></tr>
<tr><td><a href="../../api-command/querycertificatecontactlist/">QueryCertificateContactList</a></td><td>Searches for certificate contact handles</td></tr>
</tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">Contact</span>
<pre class="api-io__code"><code><h2>Contact</h2><table><tbody><tr><th><a href="../../api-command/addcontact/">AddContact</a></th><th>Create a new contact</th></tr>
<tr><td><a href="../../api-command/checkcontact/">CheckContact</a></td><td>Check availability of a single contact</td></tr>
<tr><td><a href="../../api-command/checkcontacts/">CheckContacts</a></td><td>Check availability of multiple contacts</td></tr>
<tr><td><a href="../../api-command/clonecontact/">CloneContact</a></td><td>Create duplicate of existing contact</td></tr>
<tr><td><a href="../../api-command/deletecontact/">DeleteContact</a></td><td>Delete a contact</td></tr>
<tr><td><a href="../../api-command/modifycontact/">ModifyContact</a></td><td>Modify a contact handle</td></tr>
<tr><td><a href="../../api-command/querycontactlist/">QueryContactList</a></td><td>Query a list of contacts</td></tr>
<tr><td><a href="../../api-command/requesttoken/">RequestToken</a></td><td>Request email token for contact disclosure</td></tr>
<tr><td><a href="../../api-command/restorecontact/">RestoreContact</a></td><td>Restore deleted contact</td></tr>
<tr><td><a href="../../api-command/statuscontact/">StatusContact</a></td><td>StatusContact</td></tr>
<tr><td><a href="../../api-command/statusownerchange/">StatusOwnerChange</a></td><td>StatusOwnerChange</td></tr>
<tr><td><a href="../../api-command/statusunsyncregistrycontact/">StatusUnsyncRegistryContact</a></td><td>StatusUnsyncRegistryContact</td></tr>
<tr><td><a href="../../api-command/transfercontact/">TransferContact</a></td><td>Transfer a contact</td></tr>
</tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">Domain</span>
<pre class="api-io__code"><code><h2>Domain</h2><table><tbody><tr><th><a href="../../api-command/activateclaimsnotice/">ActivateClaimsNotice</a></th><th>Approve or deny the claims notification</th></tr>
<tr><td><a href="../../api-command/adddomain/">AddDomain</a></td><td>Initiates the domain name registration at the registry</td></tr>
<tr><td><a href="../../api-command/checkclaims/">CheckClaims</a></td><td>Check if TMCH holds trademark entry</td></tr>
<tr><td><a href="../../api-command/checkdomain/">CheckDomain</a></td><td>Check availability of a single domain</td></tr>
<tr><td><a href="../../api-command/checkdomains/">CheckDomains</a></td><td>Check availability of multiple domains</td></tr>
<tr><td><a href="../../api-command/deletedomain/">DeleteDomain</a></td><td>The command is used to request the deletion of the domain</td></tr>
<tr><td><a href="../../api-command/domainprice/">DomainPrice</a></td><td>Gather information about charged fee for specific action</td></tr>
<tr><td><a href="../../api-command/getzone/">GetZone</a></td><td>Get zone information for specific domain name</td></tr>
<tr><td><a href="../../api-command/getzoneinfo/">GetZoneInfo</a></td><td>Query information about a zone</td></tr>
<tr><td><a href="../../api-command/modifydomain/">ModifyDomain</a></td><td>Modify domain data</td></tr>
<tr><td><a href="../../api-command/parkdomain/">ParkDomain</a></td><td>Park your domain for monetization</td></tr>
<tr><td><a href="../../api-command/pushdomain/">PushDomain</a></td><td>Move a domain away from CentralNic Reseller</td></tr>
<tr><td><a href="../../api-command/queryactiveservicelist/">QueryActiveServiceList</a></td><td>Search for active running services and their renewal dates.</td></tr>
<tr><td><a href="../../api-command/queryclaimsnoticelist/">QueryClaimsNoticeList</a></td><td>List all claims notices currently active</td></tr>
<tr><td><a href="../../api-command/querydomainexpirelist/">QueryDomainExpireList</a></td><td>Query list of upcoming domain deletions or expirations</td></tr>
<tr><td><a href="../../api-command/querydomainhistorylist/">QueryDomainHistoryList</a></td><td>Query list of deleted domain names</td></tr>
<tr><td><a href="../../api-command/querydomainlist/">QueryDomainList</a></td><td>Query list of domains in account</td></tr>
<tr><td><a href="../../api-command/querydomainlistbycontact/">QueryDomainListByContact</a></td><td>Query list of domains using a particular contact</td></tr>
<tr><td><a href="../../api-command/querydomainrenewlist/">QueryDomainRenewList</a></td><td>Query list of domains on renew</td></tr>
<tr><td><a href="../../api-command/queryidntaglist/">QueryIDNTagList</a></td><td>Gather information about available IDN tags of zone or domain</td></tr>
<tr><td><a href="../../api-command/queryregisteredpremiumdomainlist/">QueryRegisteredPremiumDomainList</a></td><td>Query list of registered premium domain names in account</td></tr>
<tr><td><a href="../../api-command/querytrusteedomainlist/">QueryTrusteeDomainList</a></td><td>Query list of domains in account, which use a trustee service</td></tr>
<tr><td><a href="../../api-command/renewdomain/">RenewDomain</a></td><td>Command used to renew domains explicitly for a specified period of time</td></tr>
<tr><td><a href="../../api-command/requestdomainpin/">RequestDomainPin</a></td><td>RequestDomainPin</td></tr>
<tr><td><a href="../../api-command/resendnotification/">ResendNotification</a></td><td>ResendNotification</td></tr>
<tr><td><a href="../../api-command/restoredomain/">RestoreDomain</a></td><td>Command used to restore a domain</td></tr>
<tr><td><a href="../../api-command/setdomainpinlock/">SetDomainPinLock</a></td><td>SetDomainPinLock</td></tr>
<tr><td><a href="../../api-command/setdomainrenewalmode/">SetDomainRenewalmode</a></td><td>SetDomainRenewalmode</td></tr>
<tr><td><a href="../../api-command/setdomaintransfermode/">SetDomainTransfermode</a></td><td>SetDomainTransfermode</td></tr>
<tr><td><a href="../../api-command/statusclaimsnotice/">StatusClaimsNotice</a></td><td>Lists details of a specified claims notice</td></tr>
<tr><td><a href="../../api-command/statusdomain/">StatusDomain</a></td><td>Gather information about a domain name in account</td></tr>
<tr><td><a href="../../api-command/statusdomainhistory/">StatusDomainHistory</a></td><td>Show information of a deleted domain</td></tr>
<tr><td><a href="../../api-command/tradedomain/">TradeDomain</a></td><td>Change registrant of a domain</td></tr>
</tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">Domain - Tags</span>
<pre class="api-io__code"><code><h2>Domain - Tags</h2><table><tbody><tr><th><a href="../../api-command/addtag/">AddTag</a></th><th>Creates a new Tag</th></tr>
<tr><td><a href="../../api-command/deletetag/">DeleteTag</a></td><td>DeleteTag</td></tr>
<tr><td><a href="../../api-command/modifytag/">ModifyTag</a></td><td>ModifyTag</td></tr>
<tr><td><a href="../../api-command/querytaglist/">QueryTagList</a></td><td>Shows a list of all created Tags</td></tr>
<tr><td><a href="../../api-command/statustag/">StatusTag</a></td><td>StatusTag</td></tr>
</tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">DynamicDNS</span>
<pre class="api-io__code"><code><h2>DynamicDNS</h2><table><tbody><tr><th><a href="../../api-command/adddynamicdns/">AddDynamicDNS</a></th><th>Adds a dynamic DNS host object.</th></tr>
<tr><td><a href="../../api-command/deletedynamicdns/">DeleteDynamicDNS</a></td><td>Deletes a DynamicDNS host object</td></tr>
<tr><td><a href="../../api-command/modifydynamicdns/">ModifyDynamicDNS</a></td><td>Modifies a DynamicDNS host object</td></tr>
<tr><td><a href="../../api-command/querydynamicdnslist/">QueryDynamicDNSList</a></td><td>Show details about all created DynamicDNS objects</td></tr>
<tr><td><a href="../../api-command/statusdynamicdns/">StatusDynamicDNS</a></td><td>Shows details about a dynamic DNS host object</td></tr>
<tr><td><a href="../../api-command/updatedynamicdns/">UpdateDynamicDNS</a></td><td>Updates a dynamic DNS host object</td></tr>
</tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">Event</span>
<pre class="api-io__code"><code><h2>Event</h2><table><tbody><tr><th><a href="../../api-command/deleteevent/">DeleteEvent</a></th><th>Delete particular event</th></tr>
<tr><td><a href="../../api-command/queryeventlist/">QueryEventList</a></td><td>QueryEventList</td></tr>
<tr><td><a href="../../api-command/statusevent/">StatusEvent</a></td><td>StatusEvent</td></tr>
</tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">Finance</span>
<pre class="api-io__code"><code><h2>Finance</h2><table><tbody><tr><th><a href="../../api-command/convertcurrency/">ConvertCurrency</a></th><th>Convert currency with current exchange rate</th></tr>
<tr><td><a href="../../api-command/queryaccountinglist/">QueryAccountingList</a></td><td>Query list of transactions in account</td></tr>
<tr><td><a href="../../api-command/queryavailablepromotionlist/">QueryAvailablePromotionList</a></td><td>QueryAvailablePromotionList</td></tr>
<tr><td><a href="../../api-command/queryexchangerates/">QueryExchangeRates</a></td><td>QueryExchangeRates</td></tr>
<tr><td><a href="../../api-command/querypremiumdomainlist/">QueryPremiumDomainList</a></td><td>Query list with premium domain prices</td></tr>
<tr><td><a href="../../api-command/querypricehistorylist/">QueryPriceHistoryList</a></td><td>QueryPriceHistoryList</td></tr>
<tr><td><a href="../../api-command/queryservicelist/">QueryServiceList</a></td><td>Query price list of services</td></tr>
<tr><td><a href="../../api-command/queryupcomingaccountinglist/">QueryUpcomingAccountingList</a></td><td>Query information about upcoming accountings</td></tr>
<tr><td><a href="../../api-command/queryzonelist/">QueryZoneList</a></td><td>Query list of activated zones in account</td></tr>
<tr><td><a href="../../api-command/queryzonepricelist/">QueryZonePriceList</a></td><td>QueryZonePriceList</td></tr>
<tr><td><a href="../../api-command/serviceprice/">ServicePrice</a></td><td>ServicePrice</td></tr>
</tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">Hosting - cPanel</span>
<pre class="api-io__code"><code><h2>Hosting - cPanel</h2><p><em>cPanel commands</em></p><table><tbody><tr><th><a href="https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20AddOnDomain">AddHosting - AddOnDomain</a></th><th>Create a new addon domain</th></tr>
<tr><td><a href="https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20CatchAllAddress">AddHosting - CatchAllAddress</a></td><td>Create a new catch all address</td></tr>
<tr><td><a href="https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20DomainAlias">AddHosting - DomainAlias</a></td><td>Create a new domain alias</td></tr>
<tr><td><a href="https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20Email">AddHosting - Email</a></td><td>Create a new email</td></tr>
<tr><td><a href="https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20EmailDomainlForward">AddHosting - EmailDomainlForward</a></td><td>Create a new email domain forward</td></tr>
<tr><td><a href="https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20EmailForward">AddHosting - EmailForward</a></td><td>Create a new email forward</td></tr>
<tr><td><a href="https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20FeatureList">AddHosting - FeatureList</a></td><td>Create a new feature list</td></tr>
<tr><td><a href="https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20FTPUser">AddHosting - FTPUser</a></td><td>Create a new FTP user</td></tr>
<tr><td><a href="https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20MySQLDatabase">AddHosting - MySQLDatabase</a></td><td>Create a new MySQL database</td></tr>
<tr><td><a href="https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20MySQLDatabaseUser">AddHosting - MySQLDatabaseUser</a></td><td>Create a new MySQL database user</td></tr>
<tr><td><a href="https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20MySQLDatabaseUserPrivileges">AddHosting - MySQLDatabaseUserPrivileges</a></td><td>Create new MySQL database user privileges</td></tr>
<tr><td><a href="https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20Package">AddHosting - Package</a></td><td>Create a new package</td></tr>
<tr><td><a href="https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20SubDomain">AddHosting - SubDomain</a></td><td>Create a new sub domain</td></tr>
<tr><td><a href="https://kb.centralnicreseller.com/api/api-command/AddHosting%20-%20UserAccount">AddHosting - UserAccount</a></td><td>Create a new cPanel user account</td></tr>
<tr><td><a href="../../api-command/checkhosting/">CheckHosting</a></td><td>CheckHosting</td></tr>
<tr><td><a href="../../api-command/deletehosting/">DeleteHosting</a></td><td>DeleteHosting</td></tr>
<tr><td><a href="../../api-command/modifyhosting/">ModifyHosting</a></td><td>ModifyHosting</td></tr>
<tr><td><a href="../../api-command/queryhostinglist/">QueryHostingList</a></td><td>QueryHostingList</td></tr>
<tr><td><a href="../../api-command/renewhosting/">RenewHosting</a></td><td>RenewHosting</td></tr>
<tr><td><a href="../../api-command/restorehosting/">RestoreHosting</a></td><td>RestoreHosting</td></tr>
<tr><td><a href="../../api-command/statushosting/">StatusHosting</a></td><td>StatusHosting</td></tr>
</tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">Hosting - Database</span>
<pre class="api-io__code"><code><h2>Hosting - Database</h2><p><em>Homer Database commands</em></p><table><tbody><tr><th><a href="../../api-command/adddatabase/">AddDatabase</a></th><th>For creating a Database</th></tr>
<tr><td><a href="../../api-command/deletedatabase/">DeleteDatabase</a></td><td>For deleting a Database</td></tr>
<tr><td><a href="../../api-command/modifydatabase/">ModifyDatabase</a></td><td>For modifying disk space or password of a Database</td></tr>
<tr><td><a href="../../api-command/querydatabaselist/">QueryDatabaseList</a></td><td>For getting a list/overview of all available/existing Databases</td></tr>
<tr><td><a href="../../api-command/renewdatabase/">RenewDatabase</a></td><td>For renewing a Database</td></tr>
<tr><td><a href="../../api-command/setdatabaserenewalmode/">SetDatabaseRenewalMode</a></td><td>SetDatabaseRenewalMode</td></tr>
<tr><td><a href="../../api-command/statusdatabase/">StatusDatabase</a></td><td>For reviewing the current status of a Database</td></tr>
</tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">Hosting - Mailbox</span>
<pre class="api-io__code"><code><h2>Hosting - Mailbox</h2><p><em>Mailbox, Email address, Forwarding</em></p><table><tbody><tr><th><a href="../../api-command/addemailaddress/">AddEmailaddress</a></th><th>AddEmailaddress</th></tr>
<tr><td><a href="../../api-command/addemailforwarding/">AddEmailforwarding</a></td><td>AddEmailforwarding</td></tr>
<tr><td><a href="../../api-command/addmailbox/">AddMailbox</a></td><td>AddMailbox</td></tr>
<tr><td><a href="../../api-command/deleteemailaddress/">DeleteEmailaddress</a></td><td>DeleteEmailaddress</td></tr>
<tr><td><a href="../../api-command/deleteemailforwarding/">DeleteEmailforwarding</a></td><td>DeleteEmailforwarding</td></tr>
<tr><td><a href="../../api-command/deletemailbox/">DeleteMailbox</a></td><td>DeleteMailbox</td></tr>
<tr><td><a href="../../api-command/queryemailaddresslist/">QueryEmailaddressList</a></td><td>QueryEmailaddressList</td></tr>
<tr><td><a href="../../api-command/queryemailforwardinglist/">QueryEmailforwardingList</a></td><td>QueryEmailforwardingList</td></tr>
<tr><td><a href="../../api-command/querymailboxlist/">QueryMailboxList</a></td><td>QueryMailboxList</td></tr>
<tr><td><a href="../../api-command/statusemailaddress/">StatusEmailaddress</a></td><td>StatusEmailaddress</td></tr>
<tr><td><a href="../../api-command/statusmailbox/">StatusMailbox</a></td><td>StatusMailbox</td></tr>
</tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">Hosting - Mailspace</span>
<pre class="api-io__code"><code><h2>Hosting - Mailspace</h2><p><em>Mailspace</em></p><table><tbody><tr><th><a href="../../api-command/addmailspace/">AddMailspace</a></th><th>AddMailspace</th></tr>
<tr><td><a href="../../api-command/checkmailspaceemail/">CheckMailspaceEmail</a></td><td>Check Mailspace if Email already exists</td></tr>
<tr><td><a href="../../api-command/deletemailspace/">DeleteMailspace</a></td><td>DeleteMailspace</td></tr>
<tr><td><a href="../../api-command/modifymailspace/">ModifyMailspace</a></td><td>ModifyMailspace</td></tr>
<tr><td><a href="../../api-command/querymailspacelist/">QueryMailspaceList</a></td><td>QueryMailspaceList</td></tr>
<tr><td><a href="../../api-command/renewmailspace/">RenewMailspace</a></td><td>RenewMailspace</td></tr>
<tr><td><a href="../../api-command/setmailspacerenewalmode/">SetMailspaceRenewalMode</a></td><td>SetMailspaceRenewalMode</td></tr>
<tr><td><a href="../../api-command/statusmailspace/">StatusMailspace</a></td><td>StatusMailspace</td></tr>
</tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">Hosting - Webhost</span>
<pre class="api-io__code"><code><h2>Hosting - Webhost</h2><p><em>Webhost</em></p><table><tbody><tr><th><a href="../../api-command/addwebhost/">AddWebhost</a></th><th>Creates a new Webhost</th></tr>
<tr><td><a href="../../api-command/deletewebhost/">DeleteWebhost</a></td><td>DeleteWebhost</td></tr>
<tr><td><a href="../../api-command/modifywebhost/">ModifyWebhost</a></td><td>ModifyWebhost</td></tr>
<tr><td><a href="../../api-command/querywebhostlist/">QueryWebhostList</a></td><td>Show list of webhosts in account</td></tr>
<tr><td><a href="../../api-command/statuswebhost/">StatusWebhost</a></td><td>StatusWebhost</td></tr>
</tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">Hosting - Webspace</span>
<pre class="api-io__code"><code><h2>Hosting - Webspace</h2><p><em>Webspace, PHPini</em></p><table><tbody><tr><th><a href="../../api-command/addwebspace/">AddWebspace</a></th><th>Creates a new Webspace</th></tr>
<tr><td><a href="../../api-command/deletewebspace/">DeleteWebspace</a></td><td>DeleteWebspace</td></tr>
<tr><td><a href="../../api-command/modifyphpini/">ModifyPHPIni</a></td><td>ModifyPHPini</td></tr>
<tr><td><a href="../../api-command/modifywebspace/">ModifyWebspace</a></td><td>ModifyWebspace</td></tr>
<tr><td><a href="../../api-command/queryphpini/">QueryPHPIni</a></td><td>QueryPHPIni</td></tr>
<tr><td><a href="../../api-command/querywebspacelist/">QueryWebspaceList</a></td><td>List all created webspaces including related data</td></tr>
<tr><td><a href="../../api-command/querywebspacetraffic/">QueryWebspaceTraffic</a></td><td>QueryWebspaceTraffic</td></tr>
<tr><td><a href="../../api-command/renewwebspace/">RenewWebspace</a></td><td>RenewWebspace</td></tr>
<tr><td><a href="../../api-command/setwebspacerenewalmode/">SetWebspaceRenewalMode</a></td><td>SetWebspaceRenewalMode</td></tr>
<tr><td><a href="../../api-command/statuswebspace/">StatusWebspace</a></td><td>StatusWebspace</td></tr>
</tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">KeyDNS</span>
<pre class="api-io__code"><code><h2>KeyDNS</h2><p><em>Our KeyDNS Reference Manual will give you an extensive overview of the commands which can be submitted to the system. Please read the KeyDNS Reference manual carefully in order to avoid any mistakes. If there are any errors or missing topics, please do not hesitate to contact us.</em></p><table><tbody><tr><th><a href="../../api-command/adddnszone/">AddDNSZone</a></th><th>Add the DNSZone to the HostedDNS section</th></tr>
<tr><td><a href="../../api-command/addmailfwd/">AddMailFwd</a></td><td>Add a mail forward</td></tr>
<tr><td><a href="../../api-command/addwebfwd/">AddWebFwd</a></td><td>Add forward in HostedDNS zone</td></tr>
<tr><td><a href="../../api-command/checkdnszone/">CheckDNSZone</a></td><td>Check availability of DNSZone</td></tr>
<tr><td><a href="../../api-command/deletednszone/">DeleteDNSZone</a></td><td>Delete the DNSZone from the HostedDNS section</td></tr>
<tr><td><a href="../../api-command/deletemailfwd/">DeleteMailFwd</a></td><td>Delete a mail forward</td></tr>
<tr><td><a href="../../api-command/deletewebfwd/">DeleteWebFwd</a></td><td>Delete a web forward</td></tr>
<tr><td><a href="../../api-command/exportdnszone/">ExportDNSZone</a></td><td>Export DNSZone from KeyDNS</td></tr>
<tr><td><a href="../../api-command/getdnszone/">GetDNSZone</a></td><td>GetDNSZone</td></tr>
<tr><td><a href="../../api-command/importdnszone/">ImportDNSZone</a></td><td>Import DNSZone to KeyDNS</td></tr>
<tr><td><a href="../../api-command/modifydnszone/">ModifyDNSZone</a></td><td>Modify the DNSZone in the HostedDNS section</td></tr>
<tr><td><a href="../../api-command/querydnszonelist/">QueryDNSZoneList</a></td><td>Query list of DNSZones in KeyDNS</td></tr>
<tr><td><a href="../../api-command/querydnszonerrlist/">QueryDNSZoneRRList</a></td><td>Query list of DNS zone statistics</td></tr>
<tr><td><a href="../../api-command/querydnszonestatisticlist/">QueryDNSZoneStatisticList</a></td><td>Query list of resource records of a particular zone</td></tr>
<tr><td><a href="../../api-command/querydnszonesubdomainlist/">QueryDNSZoneSubdomainList</a></td><td>Query subdomain list of a particular DNSZone</td></tr>
<tr><td><a href="../../api-command/querymailfwdlist/">QueryMailFwdList</a></td><td>Query list of mail forwards</td></tr>
<tr><td><a href="../../api-command/querywebfwdlist/">QueryWebFwdList</a></td><td>Query list of web forwards</td></tr>
<tr><td><a href="../../api-command/statusdnszone/">StatusDNSZone</a></td><td>Shows the DNSZone configuration</td></tr>
</tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">Nameserver</span>
<pre class="api-io__code"><code><h2>Nameserver</h2><table><tbody><tr><th><a href="../../api-command/addnameserver/">AddNameserver</a></th><th>Create a name server</th></tr>
<tr><td><a href="../../api-command/checknameserver/">CheckNameserver</a></td><td>Check availability of a name server</td></tr>
<tr><td><a href="../../api-command/deletenameserver/">DeleteNameserver</a></td><td>Delete a name server</td></tr>
<tr><td><a href="../../api-command/modifynameserver/">ModifyNameserver</a></td><td>Modify name server (e.g. IP address)</td></tr>
<tr><td><a href="../../api-command/querynameserverlist/">QueryNameserverList</a></td><td>QueryNameserverList</td></tr>
<tr><td><a href="../../api-command/statusnameserver/">StatusNameserver</a></td><td>StatusNameserver</td></tr>
</tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">Newsletter / Maintenance</span>
<pre class="api-io__code"><code><h2>Newsletter / Maintenance</h2><p><em>Subscription to the CentralNic Reseller newsletter and maintenance mailing list. You will regularly receive our CentralNic Reseller news with promotions, product updates, technical changes and many other topics. </em></p><table><tbody><tr><th><a href="../../api-command/activateregistraremailaddress/">ActivateRegistrarEmailAddress</a></th><th>Activate newsletter / maintenance email</th></tr>
<tr><td><a href="../../api-command/addregistraremailaddress/">AddRegistrarEmailAddress</a></td><td>Add newsletter / maintenance / abuse email</td></tr>
<tr><td><a href="../../api-command/deleteregistraremailaddress/">DeleteRegistrarEmailAddress</a></td><td>Delete newsletter / maintenance email</td></tr>
<tr><td><a href="../../api-command/modifyregistraremailaddress/">ModifyRegistrarEmailAddress</a></td><td>Modify newsletter / maintenance / abuse email</td></tr>
<tr><td><a href="../../api-command/queryregistraremailaddresslist/">QueryRegistrarEmailAddressList</a></td><td>Quers newsletter / maintenance email</td></tr>
<tr><td><a href="../../api-command/statusregistraremailaddress/">StatusRegistrarEmailAddress</a></td><td>Status newsletter / maintenance email</td></tr>
</tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">Paid Services</span>
<pre class="api-io__code"><code><h2>Paid Services</h2><table><tbody><tr><th><a href="../../api-command/queryagpdeleteslist/">QueryAGPDeleteslist</a></th><th>Query AGP values for all TLD/ZONES where AGP is available and get further statistics</th></tr>
<tr><td><a href="../../api-command/statusagpdeletes/">StatusAGPdeletes</a></td><td>Query AGP values for a specific TLD/ZONE</td></tr>
</tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">Query</span>
<pre class="api-io__code"><code><h2>Query</h2><table><tbody><tr><th><a href="../../api-command/generatelist/">GenerateList</a></th><th>Optional parameter to generate list out of command response</th></tr>
<tr><td><a href="../../api-command/querycommandsyntax/">QueryCommandSyntax</a></td><td>Query the syntax of a particular command</td></tr>
<tr><td><a href="../../api-command/querydomainpinlocklist/">QueryDomainPinLockList</a></td><td>Query list of domains in account with DomainPinLock</td></tr>
<tr><td><a href="../../api-command/queryjoblist/">QueryJobList</a></td><td>Query list of running jobs in account</td></tr>
<tr><td><a href="../../api-command/querymonitoringlist/">QueryMonitoringList</a></td><td>Query available maintenance information</td></tr>
<tr><td><a href="../../api-command/queryobjectloglist/">QueryObjectLogList</a></td><td>Query information from the object log</td></tr>
<tr><td><a href="../../api-command/queryownerchangelist/">QueryOwnerChangeList</a></td><td>Query list of currently pending owner changes</td></tr>
<tr><td><a href="../../api-command/querypromotionlist/">QueryPromotionList</a></td><td>QueryPromotionList</td></tr>
<tr><td><a href="../../api-command/querypromotionregistrarlist/">QueryPromotionRegistrarList</a></td><td>QueryPromotionRegistrarList</td></tr>
<tr><td><a href="../../api-command/queryregistrarcommentlist/">QueryRegistrarCommentList</a></td><td>QueryRegistrarCommentList</td></tr>
<tr><td><a href="../../api-command/queryregistrarlist/">QueryRegistrarList</a></td><td>Query list of subresellers in account</td></tr>
<tr><td><a href="../../api-command/querytrusteeloglist/">QueryTrusteeLogList</a></td><td>Query list of domains that have used a trustee</td></tr>
<tr><td><a href="../../api-command/statusobjectlog/">StatusObjectLog</a></td><td>Gather information about a particular entry of the object log</td></tr>
</tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">Server</span>
<pre class="api-io__code"><code><h2>Server</h2><table><tbody><tr><th><a href="../../api-command/addserver/">AddServer</a></th><th>Create a server</th></tr>
<tr><td><a href="../../api-command/deleteserver/">DeleteServer</a></td><td>Delete a server</td></tr>
<tr><td><a href="../../api-command/modifyserver/">ModifyServer</a></td><td>Modifies an existing server</td></tr>
<tr><td><a href="../../api-command/queryserverlist/">QueryServerList</a></td><td>Query list of servers</td></tr>
<tr><td><a href="../../api-command/renewserver/">RenewServer</a></td><td>Renew a server</td></tr>
<tr><td><a href="../../api-command/statusserver/">StatusServer</a></td><td>Query server status</td></tr>
</tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">SMS</span>
<pre class="api-io__code"><code><h2>SMS</h2><table><tbody><tr><th><a href="../../api-command/chargemobileaccount/">ChargeMobileAccount</a></th><th>ChargeMobileAccount</th></tr>
<tr><td><a href="../../api-command/createmobileaccount/">CreateMobileAccount</a></td><td>CreateMobileAccount</td></tr>
<tr><td><a href="../../api-command/querymobileaccountlist/">QueryMobileAccountList</a></td><td>QueryMobileAccountList</td></tr>
<tr><td><a href="../../api-command/querysmslist/">QuerySMSList</a></td><td>QuerySMSList</td></tr>
<tr><td><a href="../../api-command/sendsms/">SendSMS</a></td><td>SendSMS</td></tr>
<tr><td><a href="../../api-command/statusmobileaccount/">StatusMobileAccount</a></td><td>StatusMobileAccount</td></tr>
</tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">Trademark</span>
<pre class="api-io__code"><code><h2>Trademark</h2><table><tbody><tr><th><a href="../../api-command/addtrademark/">AddTrademark</a></th><th>Submit a trademark validation request to TMCH</th></tr>
<tr><td><a href="../../api-command/deletetrademark/">DeleteTrademark</a></td><td>Delete trademark entry</td></tr>
<tr><td><a href="../../api-command/gettrademarklabels/">GetTrademarkLabels</a></td><td>Gather labels of a trademark</td></tr>
<tr><td><a href="../../api-command/modifytrademark/">ModifyTrademark</a></td><td>Modifies trademark information</td></tr>
<tr><td><a href="../../api-command/querytrademarklist/">QueryTrademarkList</a></td><td>Query list of trademarks in account</td></tr>
<tr><td><a href="../../api-command/renewtrademark/">RenewTrademark</a></td><td>RenewTrademark</td></tr>
<tr><td><a href="../../api-command/settrademarkrenewalmode/">SetTrademarkRenewalmode</a></td><td>SetTrademarkRenewalmode</td></tr>
<tr><td><a href="../../api-command/statustrademark/">StatusTrademark</a></td><td>StatusTrademark</td></tr>
<tr><td><a href="../../api-command/transfertrademark/">TransferTrademark</a></td><td>Transfer a trademark</td></tr>
</tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">Transfer</span>
<pre class="api-io__code"><code><h2>Transfer</h2><table><tbody><tr><th><a href="../../api-command/activatetransfer/">ActivateTransfer</a></th><th>Request or deny CNOBI transfers, if own confirmation page exists</th></tr>
<tr><td><a href="../../api-command/checkdomaintransfer/">CheckDomainTransfer</a></td><td>Check transfer requirements of particular gTLDs</td></tr>
<tr><td><a href="../../api-command/queryforeigntransferlist/">QueryForeignTransferList</a></td><td>QueryForeignTransferList</td></tr>
<tr><td><a href="../../api-command/querytransferlist/">QueryTransferList</a></td><td>QueryTransferList</td></tr>
<tr><td><a href="../../api-command/setauthcode/">SetAuthcode</a></td><td>SetAuthcode</td></tr>
<tr><td><a href="../../api-command/statusdomaintransfer/">StatusDomainTransfer</a></td><td>StatusDomainTransfer</td></tr>
<tr><td><a href="../../api-command/transferdomain/">TransferDomain</a></td><td>This command allows you to request, approve, deny or cancel a domain transfer.</td></tr>
</tbody></table></code></pre></div>


