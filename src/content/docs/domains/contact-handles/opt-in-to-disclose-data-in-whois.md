---
title: "Opt-in to Disclose Data in Whois"
---

An Opt-in to disclose data is available for all contact handles (Owner, Admin, Tech, Billing). The underlying technical process is very similar to contact verification, i.e. the registrant or any other contact will receive a mail including a link to [https://www.domain-contact.org/](https://www.domain-contact.org/) where he can approve or decline disclosure of her or his data in Whois. This will allow each individual contact holder to select for a particular contact handle whether he wishes his data to be disclosed in the Whois. Please note that even if a contact decides to disclose his details in our system, this does not mean that the registry controlling the Whois output will also disclose this data. Work is currently ongoing at ICANN to harmonise this approach.

## The Process

-   As a CentralNic Reseller Reseller you can trigger a contact disclosure email which will be sent to the respective contact using the API Command RequestToken.
-   The mail contains a link forwarding the contact to https://www.domain-contact.org/domainDisclosure?contact={CONTACT}&token={TOKEN}
-   The link only works with a valid token and the proper contact handle ID.
-   On the website the contact can select the fields to disclose or undisclose.
-   Where registry policy allows, these changes will be applied to the domains that are linked to the respective contact handle as Owner, Admin, Tech and/or Billing.
-   The link will only remain functional for 30 days.

## Testing

The contact disclosure website is only available in the LIVE environment. For testing purposes we suggest to use one of your own contact handles (or create a contact handle) and use RequestToken to trigger a contact disclosure email. Triggering the contact disclosure mail and using the contact disclosure website does not require a contact handle to be linked to a domain.

## Available fields to disclose or undisclose

The respective contact has the option to disclose the following contact fields:

-   Name (including: Title, First, Middle, Last)
-   Organisation
-   Address (including: Street, Zip, Country, State)
-   Phone Number
-   Fax Number
-   Email Address

## RequestToken

To request a token to be sent within an email to a given Contact Handle or Domain. If a Domain is stated an email with a token will be sent to all linked contact handles. In case a contact handle is used multiple times (i.e. for Admin and Tech) only one email per contact handle is sent.

## API RequestToken for a specific contact:

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=RequestToken
type=ContactDisclosure
contact=P-ABC123</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully</code></pre></div>

## API RequestToken for multiple contacts of a domain:

unittest-70376373.com P-PGS24 OWNER  
unittest-70376373.com P-PGS24 ADMIN  
unittest-70376373.com P-PHS26 TECH  
unittest-70376373.com P-PCS25 BILLING

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=RequestToken
type=ContactDisclosure
domain=unittest-70376373.com
contacttype0=OWNER
contacttype1=ADMIN
contacttype2=TECH
contacttype3=BILLING</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
property[contact][0] = P-SPZ22
property[description][0] =
property[status][0] = SUCCESS
property[contact][0] = P-PHS26
property[contact][1] = P-PCS25
property[contact][2] = P-PGS24
property[description][0] =
property[description][1] =
property[description][2] =
property[status][0] = SUCCESS
property[status][1] = SUCCESS
property[status][2] = SUCCESS</code></pre></div>

## GDPR settings in the CentralNic Reseller Control Panel

Your account settings for GDPR and the Contact Disclose Email can be found in the CentralNic Reseller Control Panel via the User menu on the upper right -> Settings -> Reselling -> GDPR

The Subreseller settings for GDPR and the Contact Disclose Email can be found in the left menu at Subreseller -> Settings -> GDPR.

Please note that further white labelling options including upload of your own email templates will be available in the coming weeks. Also, we will make available further commands which enable you to set up your own website for contact disclosure.

The options give you the opportunity to change GDPR and various fields in the contact disclosure email:

-   Contact Form URL
    -   This URL will be displayed in the Whois response of domains managed through your account. More information is available in the article "[contact-to-an-undisclosed-entity](../../../help/gdpr/contact-to-an-undisclosed-entity/)".
    -   Default: [https://www.domain-contact.org](https://www.domain-contact.org)
-   Contact Disclosure URL
    -   The URL which will be used in the contact disclose email.
    -   Default: https://www.domain-contact.org/contactDisclosure?contact={CONTACT}&token={TOKEN}
-   Contact Disclosure Policies URL
    -   The URL to privacy policy and terms and conditions.
    -   Default: [https://www.key-systems.net/en/privacy-policy](https://www.key-systems.net/en/privacy-policy)
-   Contact Disclosure FAQ
    -   The URL to a FAQ or website with further information about contact disclosure.
    -   Note: This particular field is currently not used in our default email template. Instead a FAQ is shown on [https://www.domain-contact.org/contactDisclosure](https://www.domain-contact.org/contactDisclosure)
    -   Default: [https://kb.centralnicreseller.com/help/gdpr](../../../help/gdpr/)
-   Contact Disclosure Email Sender
    -   The sender address of the contact disclosure email.
    -   Default: info@domain-contact.org

## Example Mail

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>Dear Registrant,
in accordance with our registration agreement, you have provided us with certain contact
information that is connected with one or more domain names registered through our service.
We were informed by your service provider that you have requested that you wish to disclose
or undisclose elements of your data in the publicly available Whois records.
If you want to modify the publication of your contact information please proceed to:
{DISCLOSURE-URL}
Please note that due to security reasons this link will only remain functional for 30 days.
During this time, it can be used multiple times to change your privacy settings or revoke
your permission to publish the data. After the link expires, please contact your service
provider to request a new link.
Due to ongoing changes of the way Registry Operators handle data, such updates may not be
immediately available for domains in all TLDs where these contact details in use.
To view the corresponding policies go to: {DISCLOSURE-POLICIES}
For more information about the GDPR go to: https://www.eugdpr.org/
Best regards,
Your Domain Registrar</code></pre></div>

## Event example:

After the disclosure settings have been changed through the website, an event in the following form will be generated and sent to the reseller:

-   'event\_class' => 'CONTACT\_MODIFICATION'
-   'event\_subclass' => 'MODIFICATION\_NOTIFY'
-   'event\_data' => "contact:$contact"
-   'event\_info' => "updated disclosure settings"
