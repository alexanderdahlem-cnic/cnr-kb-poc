---
title: "Contact validation and verification requirements"
description: "As part of the ongoing effort to improve contact quality, ICANN requires contact validation for each registrant contact registering a generic TLD. ➥ Learn more!"
---

As part of the ongoing effort to improve contact quality, ICANN requires contact validation for each registrant contact registering a generic TLD. This is required as of January 1, 2014 for new TLDs and September 2014 for the existing gTLDs. Our system will send a customizable e-mail asking every registrant contact to verify the accuracy of the contact e-mail address. This e-mail confirmation is done once for each registrant contact used with a newly registered domain, whenever the registrant contact of a domain name is updated and whenever the e-mail address of a contact associated with such a domain name is modified. Verification needs to be done once for each e-mail address used in a registrant contact and all other contacts using the same e-mail address will be considered successfully verified.

We will provide a customizable white-label solution for the notification e-mails and the website that will record the confirmation. You may change for example the sender address and add a free text as well as your own signature to the e-mail template. Moreover, you can provide your own verification website. This customization can be done via Control Panel (Account -> Settings -> Contact verification) or API as of December 16, 2013.

In the background, we will further perform validation checks of the other fields to ensure they are not blank and formatted correctly in accordance with ICANN-mandated specifications.

To avoid delays and failed registrations, we ask that you also ensure that all submitted data is formatted correctly.

## Update for contact verification: Dedicated website instead of ClientHold

The current contact verification handling of ICANN require domain names under gTLDs and nTLDs with empty or incomplete contact handles to be set to ClientHold status with the result that they no longer resolve.

We are pleased to inform you that on November 6, 2018 we will introduce an improvement to this process and offer a new service: Instead of applying the ClientHold status, the domain in question receives other nameservers and is directed to a [neutral web page](http://ns1.emailverification.info/) with information for the domain owner. This website explains why the domain has been suspended and how it can be reactivated. Among other benefits, this minimizes the number of requests regarding suspended domains due to non-verified contacts for your support team.

This service is also customizable by API and Control Panel: If you prefer to create your own suspension notification web page you can submit your own nameservers. Please note that the changed DNS records must refer to a website with relevant content that explains the domain's suspension due to non-completion of an ICANN-mandated contact verification.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = SetProperty
contactverification-interrupt-nameserver0 = ns1.emailverification.info (DEFAULT) | Your Nameserver (OPTIONAL)
contactverification-interrupt-nameserver1 = ns2.emailverification.info (DEFAULT) | Your Nameserver (OPTIONAL)</code></pre></div>


