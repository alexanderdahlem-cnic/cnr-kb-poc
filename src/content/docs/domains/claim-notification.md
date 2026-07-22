---
title: "Claim Notification"
description: "ICANN requires for any domain order under new TLDs with an existing TMCH (Trademark Clearinghouse) entry, that the registrant will be informed..."
---

The Claim notification service works as follows:

-   A potential domain name registrant gets a warning notice when attempting to register a domain name that matches a trademark term in the TMCH.
-   If, after receiving and accepting the notice, the domain name registrant does continue to register the domain name, the trademark holder with a corresponding mark in the Clearinghouse receives a notification of the domain name registration, so they can take any appropriate action if they would like to.

**Important notice for live registrations**

ICANN requires for any domain order under new gTLDs with an existing TMCH (Trademark Clearinghouse) entry, that the registrant will be informed about the possibility of trademark infringement by the registration. The Claims Notice period always lasts at least until the first 90 days of General Availability have passed. During this time, it is mandatory to check all registration orders under all new gTLDs introduced by ICANN against entries of trademarks listed in the TMCH.

## Claims handling via Key-Systems

Additional parameter for the AddDomain command: Registrarproperty 'email-deactivated = 0' (default setting) The command returns Code 200, STATUS = REQUESTED

The mail delivery of the Claims Notification will be done by Key-Systems with the sender address noreply@claimnotification.info (see the newsletter of Dec. 9, 2013). The e-mail will contain a link to the website "claimnotification.info" where all existing claims notices for the given string are provided. The domain registrant may terminate the order by mouse click after checking the Claims Notice linked in the e-mail. An event is created when the order is completed.

## Customized handling by the CentralNic Reseller client

If the reseller is going to carry out the claim notification of the registrant by himself, while deactivating the claim notification of CentralNic Reseller, additional parameters will be required within the AddDomain command. Registrarproperty email-deactivated = 1(no Claims e-mail will be sent out by Key-Systems). The AddDomain command interrupts with Code 549, if a claim exists and the additional extensions are not submitted.

To order claim domain names using the customized reseller handling, three additional special parameters have to be included in the order: Notice ID, Expiry Date and Accepted Date.

### Command

```
command                = AddDomain
domain                 = claimdomain.tld
ownercontact0          = P-MHM147
billingcontact0        = P-MHM147
admincontact0          = P-MHM147
auth                   = sdjf"213$
X-LAUNCH-NOTICE-ID     = 1a9c71e70000000000000036415
X-LAUNCH-EXPIRY-DATE   = 2014-02-08 00:00:00
X-LAUNCH-ACCEPTED-DATE = 2014-02-07 00:00:00
```

### Attributes

**X-LAUNCH-NOTICE-ID**

(NOTICE ID) Out of the Claims Notice, XML field tmNotice:id  

**X-LAUNCH-EXPIRY-DATE**

(EXPIRY DATE) Out of the Claims Notice, XML field tmNotice:notAfter  

**X-LAUNCH-ACCEPTED-DATE**

(ACCEPTANCE DATE) Specifies the point in time, when the Claims Notice was accepted. This field will be filled with the current date/time by default (if nothing else is defined). A Claim Notice is only valid for a period of 48 hours.

## Download of the Claims Notice

The respective link will be returned in the command AddDomain and in the CheckClaims command in XML format:

-   property\[claim url\]\[0\] = [http://db.claimnotification.info/?token=](http://db.claimnotification.info/?token=)

## Affirmation of the Claims Notice per Control Panel

The respective link will be returned in the AddDomain command:

-   property\[claim portal url\]\[0\] = [http://www.claimnotification.info/?token=](http://www.claimnotification.info/?token=)

This process only applies to new gTLDs. The Claims Notice period always starts with the first limited registration phase other than Sunrise period and lasts at least until the first 90 days of General Availability have passed. During this time, it is mandatory to check all pre-registrations under all new gTLDs introduced by ICANN against entries of trademarks listed in the TMCH (Trademark Clearing House). In the event a claim exists for an applied-for string the registrant needs to be informed about the existence and potential infringement of a third party’s trademark and has to be presented with a specific claims notice. The registrant will have to acknowledge the claims notice to allow us to continue with the application or registration. Key-Systems will check all confirmed (binding) applications for new TLDs against potential claims at the TMCH. Once a claim (or subsequent new claim) is found for a string, we will send a white-labeled e-mail to the applicant with a short description of the process and what action needs to be taken. This e-mail will contain a link to the website "claimnotification.info" where all existing claims notices for the given string are provided. The applicant will need to acknowledge those claims 48 hours prior to the registration in order to proceed with the application/registration. Applications for domain names listed in the Trademark Clearinghouse can not be sent to the registry for registration until we have received appropriate confirmation that the applicant has read and acknowledged the claims notice until the Claims Notice period has ended.

We offer you the possibility to customize the e-mail sent to the applicant as well as to implement your own website that provides the claims activation service. The necessary options can be setup in the account settings.

**Please note**: If you implement your own claims activation process, you must submit the following parameters along with the AddDomainApplication/ModifyDomainApplication command in order to confirm that the potential registrant has acknowledged the claims notice:

-   X-LAUNCH-NOTICE-ID = \[ID of the claims notice, e.g. 12d34\]
-   X-LAUNCH-EXPIRY-DATE = \[Expirations date of the claims notice, 2013-10-01 00:00:00\]
