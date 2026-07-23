---
title: "Contact Verification: Email templates"
description: "If a reseller wants a branded version in another language he MUST ATTACH AN ENGLISH VERSION below his preferred language! Please contact our support for further"
---

## English version

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>Subject: [%PRESUBJECT%]Request for domain contact email address verification
Dear registrant [%IF DOMAIN%]of [%DOMAIN%][% ELSE%]or prospective registrant[% END %],
due to the requirements regarding registration data accuracy arising from ICANN and/or 
registry policies as well as applicable legislation, we are required to confirm the accuracy 
of the registrant email address provided for the domain name registration application or 
domain contact creation.
[% IF DOMAINLIST %]The domain(s) listed below were registered/requested/updated with your e-mail 
address in the domain owner contact. Please confirm the accuracy of this email address by following 
the instructions below.
[%TRANSLATION_VERIFICATION%] / Domain Name
[% FOREACH domain IN DOMAINLIST %]
[%domain.value%] [%domain.domain%][% END %][%END%]
You will only have to do this once for each email address used even if you use this address 
for other domain name registrations. Please note however that depending on ICANN and/or registry 
policies, we may be required to remind you of your data annually and in rare instances 
may also require you to re-confirm the functionality of your email address on a regular basis.
To confirm your email address is accurate and you have received
this message, please click on the link below. Please note that
without timely verification of your email address or modified
contact information, you can't fully manage your domain name
and your domain name may stop resolving after the Verification
Deadline Date below.
&lt;[%VERIFICATIONURL%]?trigger=[%TRIGGER | uri %][%IF EMAIL%][%EMAIL%][%END%]&gt;
You will not be required to provide any personal information, login details or other 
sensitive information to complete this verification. This process only requires you 
to confirm that you have received this email.
If the above shown link should be broken please proceed to 
[%VERIFICATIONURL%]
and enter your personal validation token into the form field: 
trigger = [%TRIGGER%]
IMPORTANT NOTE:
If you do not carry out this confirmation, the domain registration guidelines prescribe that 
the domain is suspended and the status of your domain (s) mentioned above is changed to "on hold". 
In consequence any websites under your domain(s) can not be reached anymore and any email or other services 
under this domain will cease to function. 
This suspension will be processed on or after: 
[%SUSPENSIONDATE%]
Please note that even after this date you can always re-activate your domain name(s) by confirming 
the accuracy of the address as described above. 
[% IF FREETEXT %][%FREETEXT%][%END%]
For more information on email verification and the applicable data accuracy policies please contact your domain service provider.
Thank you very much for your cooperation!
Best regards,
[% IF !SIGNATURE0 %]Your accredited Registrar 
[% ELSE %][%SIGNATURE0%]
[%SIGNATURE1%]
[%SIGNATURE2%]
[% END %]
[%END%]</code></pre></div>

## Branded version

If a reseller wants a branded version in another language he MUST ATTACH AN ENGLISH VERSION below his preferred language! Please contact our support for further details!
