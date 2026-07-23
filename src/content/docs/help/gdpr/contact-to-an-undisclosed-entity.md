---
title: "Contact to an undisclosed entity"
sidebar:
  order: 2100
---

### Contact to an undisclosed entity

As the email address is no longer shown in WHOIS, we will introduce the possibility to contact the registrant through a web form. Inquiries sent through this form will be sent to the respective contact of record. The link to the web on [https://domain-contact.org/](https://domain-contact.org/) form will be published in the Whois output.

On [https://domain-contact.org/](https://domain-contact.org/) the respective domain can be entered and the respective contact selected (Owner, Admin, Tech, Billing), defaulting to Owner. After solving a captcha a message can be sent including sender address, subject and text.

**Whitelabeling**

You can state your own URL in the settings menu on top right by clicking on your login name -> "Settings" -> "Reselling" -> "GDPR". This URL will also be displayed in the Whois of domains managed through your account.

Inheritance settings for your URL can be found at the same page as well, or via the Subreseller menu on the left side -> "Settings" -> "GDPR". Here you can apply individual settings for each Subreseller or define an URL and lock this setting it for all Subreseller accounts.

On top, all inquiries at domain-contact.org to one of your domains will be forwarded to your URL. Note that your own webform hast to support the two GET paramaters DOMAIN and CONTACTTYPE to work properly. Using the transmitted data you can use StatusDomain to check for the linked contact handles and afterwards StatusContact for the relevant contact handle to get the respective email address which can be used to send a message to.

The syntax we're using is:  
https://www.your-url.com/?domain=domain.com&contacttype=OWNER

**Examples in our OT&E environment**

We've set up two domains in our OT&E testbed which can be used to show exemplary Whois outputs:

whois -h ote.rrpproxy.net bruns.com  
\-> To contact the registered registrant please proceed to:  
http://www.google.de

whois -h ote.rrpproxy.net sdhrserh.com  
\-> To contact the registered registrant please proceed to:  
http://www.ote.domain-contact.org

Note: google.de has not set up a respective contact website. We're using this URL just for demonstration purposes and it is not published in public LIVE systems.
