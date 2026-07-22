---
title: "Allowed prefixes for Approver eMail"
description: "Allowed prefixes: ● admin@ ● administrator@ ● hostmaster@ ● webmaster@ ● postmaster@ ➥ Learn more!"
---

Allowed prefixes for the approver e-mail address are:

-   admin@
-   administrator@
-   hostmaster@
-   webmaster@
-   postmaster@

Furthermore, the domain part of the approver e-mail address must be identical with the domain which you want to create a certificate for. I.e. for a certificate order for domain.com the approver e-mail address must be admin@domain.com, administrator@domain.com, hostmaster@domain.com, webmaster@domain.com or postmaster@domain.com.  
Please regard that Approver Emails are always sent to the second level domain. That means, even if you order a certificate for a sub-domain (like sub.domain.com) the Approver Emails are sent to the addresses mentioned above @domain.com.

Next to these standard e-mail addresses it is possible to use a different e-mail address. However, this requires that the e-mail address is available in the Whois for the respective domain. Under the [GDPR](../../help/gdpr) many registrars - including Key-Systems - will not publish e-mail addresses in Whois per default. As a consequence a Certificate Authority (CA) is not able to check if a given approver e-mail address is listed in Whois of the respective domain. The mentioned standard approver e-mail addresses will always work, regardless of Whois. Thus we always advise to use one of these standard e-mail addresses or use the more automated [approval methods via HTTP and DNS](../ssl-validation-methods).

## Example

admin@example.com is a valid approver e-mail address in order to buy a SSL certificate for the domain www.example.com.

**Note**

If an appropriate e-mail address does not exist, it must be created.
