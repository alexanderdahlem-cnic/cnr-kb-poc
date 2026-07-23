---
title: "PushObject"
description: "CentralNic Reseller API Command Reference  ➤ Account ➤ PushObject ➥ Learn more about CentralNic Reseller API Commands"
---

You can now move an object within your own environment respectively hierarchy from one account in a subaccount using the new command "PushObject". Objects are among others: domain, domain block, SSL certificate, web hosting product or mobile account.

These pushes are possible:

-   From reseller to subreseller.
-   From subreseller to subreseller (command must be submitted from the resellers account).
-   From subreseller to reseller (command must be submitted from the resellers account).
-   Contact handles will be cloned.
-   Does not work with TLDs that require a TradeDomain (instead of ModifyDomain) to change the owner contact!

### What does the PushObject command do in case of domains?

The PushObject command does the following: Besides moving the domain from one account to another, the process clones the current contact handles and substitutes the current ones through a ModifyDomain command. This is done, to give the new maintainer of the domain access to the used contact handles. For a TLD where a TradeDomain is required to change the owner contact, this is not possible. A TradeDomain is, in most cases, not processed in realtime, requires additional documents, an authcode or combinations of them. Therefore, PushObject does not work for TLDs that require a TradeDomain. Additionally, .DK domain names cannot be pushed due to the limitation of modifications only being possible through DK-Hostmaster themselves. The PushObject command does NOT alter the domain renewalmode! If the domain renewalmode is AUTOEXPIRE/AUTODELETE and the renewalmode of the target account is DEFAULT (which is equal to AUTORENEW), the domain will expire/be deleted on the renewaldate, even if the account renewalmode is set to AUTORENEW/DEFAULT because the domain will keep its individual renewalmode. The renewalmode of the account itself will only be applied, if the renewalmode of the domain is set to DEFAULT.

### What does the PushObject command do in case of certificates?

The command automatically identifies the SSL system (whether it's legacy or 2.0) based on the provided ID. It will select all Certificates, CertificateOrders, and CertificateContacts linked to the specified Certificate and transfer them collectively. All relationships between these various objects will remain intact. CertificateContacts will be cloned, and all Certificates in the new account will utilize the copied version of the data.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = PushObject
object  = (unique object identifier, e.g. domain name)
type    = DOMAIN|DOMAINBLOCK|WEBSPACE|CERTIFICATE|SERVER|MOBILE|TRADEMARK
target  = (target registrar / subreseller)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>[RESPONSE]
code = 200
description = Command completed successfully
runtime = 0.107
queuetime = 0
EOF</code></pre></div>


