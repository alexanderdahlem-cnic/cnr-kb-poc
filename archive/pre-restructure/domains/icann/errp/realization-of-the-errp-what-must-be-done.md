---
title: "Realization of the ERRP – what must be done?"
description: "RRPproxy supports you in the fulfillment of the new requirements. ➥ Learn more!"
---

CentralNic Reseller supports you in the fulfillment of the new requirements.

## ERRP notification e-mails to registrants:

Starting August 31, CentralNic Reseller will be required to send ERRP notification e-mails to the domain holders of generic domain names on the following dates:

-   30 days before expiration date (Pre-Expiry notices)
-   7 days before before expiration date (Pre-Expiry notices)
-   1 day after expiration date without renewal or deletion (Post-Expiry notices)

These messages will not contain any direct reference to Key-Systems / CentralNic Reseller and our services.  
Additionally, all gTLDs can be set to renewal on expiration date in order to prevent sending the third e-mail notification.

Customization service (as of August 1): If you want to customize these notifications you can among others provide your own „From“ e-mail address via API (ICANNERRP-EMAIL-SENDER = noreply@example.net) or Control Panel. If no individual "From" e-mail address is provided, the e-mail address noreply@expirationwarning.net is used by default.

The e-mail language priority is determined by the country of the domain owner. If the home country is Germany, Austria or Switzerland, the German template is used. Otherwise, either the language can be set by the reseller (ICANNERRP-EMAIL-LANGUAGE = \[en|de\]), or the English template is used as default.

In addition, it is possible to implement your completely customized template in our system. We charge a one time fee per template. The template is checked by us for compliance with the ICANN guidelines. Please contact our support team if interested in this service.

Please note: If the domain has no owner contact e-mail, the notification will be sent to the reseller's urgent e-mail address. In that case, please contact the customer to forward the notice and request that the whois data is updated as soon as possible.

## Interrupting of the DNS resolution path of the registration

For at least eight days before the deletion of a domain name, the DNS records of domain name must resolve to a dedicated web page that indicates that the domain name registration has expired and that provides renewal instructions.

As a service, we will provide you with an external, neutral web page with general information for the domain owner. On day 35 within the Autorenew Grace Period the respective domain names will be forwarded to this web page for 8 days per default. The web page is showing the following content:

„Notice: This domain name registration has expired and is pending renewal or deletion. If you are the registrant and want to renew the domain name, please contact your registration service provider.“

Again, this service is customizable by API and Control Panel. If you prefer to create your own notification web page you can change the DNS resolution path of the registration by submitting the parameter ICANNERRP-INTERRUPT-NAMESERVER0 = \[your nameserver\]. Otherwise, the name server ns1.expirationwarning.net will be used. Please note that the changed records must resolve to a web site which must display a notice about the expiration of the domain name registration and the possibility of a renewal.

To avoid the automatic deactivation of a domain name please set the domain name to autorenew or send a renew command prior to the deactivation time frame.

## Notice to Registrants of Fees and Procedures

Registrars/resellers must clearly display their renewal and restore prices and a description of the methods used to deliver pre- and post-expiration notifications on their web sites.

Please read the details [here](https://www.icann.org/resources/pages/errp-2013-02-28-en) (refer to item 4).

Our advice: Please display renewal and restore pricing on your web site and in your registration agreement. Furthermore, please integrate details about the ERRP notifications by e-mail on your web site and in your registration agreement. Explain that the registrant will be informed about the upcoming deletion of his domain name 30 and 7 days prior to and 1 day after the expiration date of a generic domain.
