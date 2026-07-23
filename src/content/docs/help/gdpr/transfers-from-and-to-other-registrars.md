---
title: "Transfers from and to other Registrars"
---

Incoming and outgoing transfer procedure are going to change after May 25h, mainly because the most important necessary data is expected to no longer be published in Whois by many registrars: the registrants email address. Further data of the registrant and admin, tech and billing contacts won't be displayed either, which makes it necessary to adjust update registration details after successful domain transfers.

We currently envision that contact data could be made available for certain purposes, in particular transfers from and to other registrars. This would allow data transmission for transfers. However, this matter is still subject to additional reviews and consensus amongst registrars and registries and may therefore be changed accordingly.

## ICANN's Temporary Specification for gTLD Registration Data

ICANN has published a Temporary Specification for gTLD Registration Data which also covers gTLD domain transfers (Appendix G).

Please keep in mind that this temporary specification is likely to change.

[https://www.icann.org/resources/pages/gtld-registration-data-specs-en](https://www.icann.org/resources/pages/gtld-registration-data-specs-en)

## FOA Handling: Incoming Transfers for gTLDs

Due to the expected redaction of private information under the GDPR, we expect to no longer be able to access registration data including email addresses, neither via Whois nor directly via some registries. As a consequence we have decided to adjust our FOA processes to ensure the continued availability of domain name transfers.

**FOA for incoming transfers will not be sent**

Since the implementation date of the GDPR, transfer contacts or registrant email addresses are only available on rare occasions or are not intended to be working, i.e. do-not-reply@ or similar variants are used.

To avoid unsuccessful transfer requests and to be in-line with the new transfer process published by ICANN we decided no longer send FOA mails for incoming transfer requests until such time as any addresses published can be relied upon again for transfer purposes.

A transfer for a domain will be initiated at the respective registry if the correct auth code is provided and the domain is unlocked. While a new transfer protocol has been envisioned that would require the approval of the transfer to be confirmed by the losing registrar, ICANN has not yet included this in their new transfer protocol.

As soon as the loosing registrar receives a positive acknowledgement from the transfer contact and approves or at least does not deny the transfer it will be completed by the registry.

## FOA Handling: Outgoing Transfers for gTLDs

Under the GDPR, we will begin redacting registration data in the Whois and in the data provided to some registries to prevent the publication of private data. We will not publish registrant email addresses which means other registrars might not be able to send FOA mails to registrants.

**Thus, for outgoing transfer requests we will send an FOA to the registrant.**  
To protect your customers from unwanted transfers, theft and hijacking, outgoing transfer requests received from the respective registry for unlocked domain names will continue to trigger the already required loosing registrar FOA mail to the transfer contact, but we will now require a positive acknowledgement of the transfer request.

If the registrant positively acknowledges the transfer and the domain is unlocked we will approve it at the respective registry. If we don't receive a positive acknowledgement, the domain is locked or the registrant denies the transfer request, we will cancel it.

We are confident this is the most beneficial implementation for Resellers and Registrants also in respect to safety and security required for the continued operation of the domain transfer process. We have also supported and implemented this approach as it requires little or no additional implementation work in your systems.

The FOA mail will be sent to the Owner and Admin contact, unless their email addresses are the same, in which case only one mail will be sent.

## Contact Data after successful Domain Transfers

As it is very likely that we are unable to parse registration data, we must request that you either send the registration details with the transfer request (COM/NET) or update the registration data as soon as possible after the transfer completes (all other gTLDs). We are still bound by ICANN policies on data quality and will be required to deactivate domain names with incorrect or incomplete data after no more than 15 days.

Since we expect that domain contact data for incoming transfers won't be transmitted and advise the following transfer procedures:

-   Thin Registry gTLDs COM/NET: Initiate transfer with authcode and contact handles
-   Thick Registry gTLDs and nTLDs: Initiate transfer with authcode but without contact handles; apply contact handles afterwards
-   ccTLDs: Individual handling; in some cases stating contact handles is necessary

Details described below.

## Incoming Transfers for Thin Registry gTLD Domains (COM/NET)

We advise to state contact handles alongside the respective authcode upon initiating incoming transfers for .COM/.NET domains. Contact Handles for Owner, Admin, Tech and Billing can be stated optionally and is not mandatory as shown in the example below:

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = TransferDomain
domain  = YOURDOMAIN.COM
action  = request
auth    = .......
ownercontact0   = (CONTACT)
admincontact0   = (CONTACT)
techcontact0    = (CONTACT)
billingcontact0 = (CONTACT)</code></pre></div>

## Incoming Transfers for Thick Registry gTLD and nTLD Domains (all other gTLDs)

We advise to check and adjust contact handles after an incoming transfer for a gTLD or newgTLD domain has been finished.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = TransferDomain
domain  = yourdomain.gTLD
action  = request
auth    = .......</code></pre></div>

## Transfer has been completed

After the transfer has been finished, the domain should be updated through a ModifyDomain:

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = ModifyDomain
domain  = yourdomain.gTLD
ownercontact0   = (CONTACT)
admincontact0   = (CONTACT)
techcontact0    = (CONTACT)
billingcontact0 = (CONTACT)</code></pre></div>

## Incoming Transfers for ccTLDs

ccTLD Registries are handling transfers individually after GDPR becomes effective.  
We're already working on gathering this information for every single TLD and will update the respective TLD articles in our Knowledge Base accordingly.

Currently, the following ccTLDs support stating contact handles for incoming Transfers:

**Mandatory** (contact handles must be stated for incoming transfers)

-   AE
-   COM.AU, NET.AU, ORG.AU, ID.AU
-   BE
-   EU
-   GR
-   HK, COM.HK, EDU.HK, GOV.HK, IDV.HK, NET.HK, ORG.HK
-   IE
-   IT
-   JP
-   KR
-   RO
-   SG, COM.SG
-   SI
-   XN--E1A4C

**Optional** (contact handles can be stated optionally for incoming transfers)

-   DE
-   FI
-   COM
-   NET

You can use the command QueryCommandSyntax to check if stating contact handles is possible for transfers. In the command response property\[optional\] shows if a parameter is mandatory (= 0) or optional (= 1).  
Example command:

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=QueryCommandSyntax
commandname=TransferDomain
class=TLD (i.e. COM, NET, etc.)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
...
property[commandname][0] = TransferDomain
property[commandtype][0] = TRANSFER
property[parameter][0] = COMMAND
...
property[parameter][6] = OWNERCONTACT0
property[title][6] = Owner contact
property[position][6] = 21
property[paramgroup][6] = Zone specific
property[range][6] = &lt;CONTACT&gt;|&lt;NULL&gt;
property[description][6] =
property[optional][6] = 1
...</code></pre></div>


