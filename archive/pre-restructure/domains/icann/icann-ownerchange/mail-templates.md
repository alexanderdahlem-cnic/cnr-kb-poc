---
title: "Mail Templates for ICANN OwnerChange procedure"
description: "The FOA Mail is sent to the Old and New Registrant for confirmation and requires that either FOA Mode is activated, or the parameter Trigger..."
---

Below are our default mail templates used for the ICANN OwnerChange procedure. The FOA Mail is sent to the Old and New Registrant for confirmation and requires that either FOA Mode is activated, or the parameter TriggerFOA = 0|1 is used for a particular OwnerChange in Designated Agent Mode. Minor customizations (e.g. email sender address, three free text fields) can be done through the account settings.

In addition, it is possible to implement your completely customized template in our system. We charge a one time fee per template. The template is checked by us for compliance with the ICANN guidelines. Please contact our support team if interested in this service.

## FOA Mail

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>From: [%EMAILSENDER%]
Subject: [%EMAILSUBJECT%]
Type: text/plain
charset: UTF-8
Encoding: 8bit
Dear registrant of [%IF DOMAIN%][%DOMAIN%][%ELSE%](please see full list of names at the end of this email)[%END%],
In accordance with the Section II of the ICANN Inter-Registrar Transfer policy (see [https://www.icann.org/resources/pages/transfer-policy-2015-09-24-en]) we kindly ask you for your cooperation to allow/deny the following changes:
Requested changes to be made to the registered domain holder:
[%FOREACH c IN CHANGES%][%c%]
[%END%]
If you would like to *proceed* with the changes to the domain name your *confirmation is required* by [%CONFIRMATIONENDDATE%].
After the above mentioned date (or in the event an involved party explicitly denies the request) the owner change will be considered failed and will not be executed. [Please note that both contacts must approve the requested change.]
If you would like the modifications to be carried out please click on the link below:
[%CONFIRMATIONLINK%]/?type=ownerchange&amp;transferlock=[%TRANSFERLOCK%]&amp;transferlockoverride=[%TRANSFERLOCK_OVERRIDE%]&amp;trigger=[%TRIGGER%]&amp;action=APPROVE
In case the changes have NOT been authorized by you please click on the following link to REJECT the owner change or modifications to the registrant contact.
[%CONFIRMATIONLINK%]/?type=ownerchange&amp;transferlock=[%TRANSFERLOCK%]&amp;transferlockoverride=[%TRANSFERLOCK_OVERRIDE%]&amp;trigger=[%TRIGGER%]&amp;action=DENY
[%IF INFOPAGELINK%]
More information can be found on our registrant change info page at the following link:
[%INFOPAGELINK%]
[%END%]
All acting persons declare by clicking on any of aforesaid links that they are bound to the sponsoring registrars terms and conditions (as shown on the registrar website) as well as ICANN policies.
[%IF FREETEXT0%][%FREETEXT0%][%END%]
[%IF FREETEXT1%][%FREETEXT1%][%END%]
[%IF FREETEXT2%][%FREETEXT2%][%END%]
Best regards,
[%IF FOOTER0%][%FOOTER0%][%ELSE%]Your ICANN accredited registrar
[%END%]
[%IF FOOTER1%][%FOOTER1%][%END%]
[%IF FOOTER2%][%FOOTER2%][%END%]
[%IF DOMAINS%]
=========
/ List of domain names affected by this
[%FOREACH d IN DOMAINS%][%d%]
[%END%]/ Full List End
[%END%]</code></pre></div>

## Information Mail

The Information Mail is sent to the Old and New Registrant after the OwnerChange has been finished.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>From: [%EMAILSENDER%]
Subject: [%EMAILSUBJECT%]
Type: text/plain
charset: UTF-8
Encoding: 8bit
Dear registrant of [%IF DOMAIN%][%DOMAIN%][%ELSE%](please see full list of names at the end of this email)[%END%],
In accordance with the Section II of the ICANN Inter-Registrar Transfer policy (see [https://www.icann.org/resources/pages/transfer-policy-2015-09-24-en]) we kindly inform you of the following changes that have been made to the registrant details of the domain name[s] listed below:
Changes to the domain owner data:
[%FOREACH c IN CHANGES%][%c%]
[%END%]
Please contact your service provider in case you wish to undo this modification request.
[%IF TRANSFERLOCK%]In accordance with the abovementioned policy the domain has been locked against transfers for 60 days.
[%END%]
[%IF INFOPAGELINK%]
More information can be found on our registrant change info page at the following link:
[%INFOPAGELINK%]
[%END%]
[%IF FREETEXT0%][%FREETEXT0%][%END%]
[%IF FREETEXT1%][%FREETEXT1%][%END%]
[%IF FREETEXT2%][%FREETEXT2%][%END%]
Best regards,
[%IF FOOTER0%][%FOOTER0%][%ELSE%]Your ICANN accredited registrar
[%END%]
[%IF FOOTER1%][%FOOTER1%][%END%]
[%IF FOOTER2%][%FOOTER2%][%END%]
[%IF DOMAINS%]
=========
/ List of domain names affected by this
[%FOREACH d IN DOMAINS%][%d%]
[%END%]/ Full List End
[%END%]</code></pre></div>


