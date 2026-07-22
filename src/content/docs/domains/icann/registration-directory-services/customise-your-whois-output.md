---
title: "Customise your Whois output"
---

As CentralNic Reseller you can customise the Whois output coming from our Whois server for your domains you manage through us.

The general settings, valid for all domains managed in your CentralNic Reseller account:

-   User menu -> Settings -> Reselling -> WHOIS Banner
    -   RSP: This text will be shown in the Whois as responsible registrar. For example your company name.
    -   URL: URL used for registration servicers. For example https://yourdomain.com/
    -   1\. Banner: Three lines
    -   2\. Banner: for a free text
    -   3\. Banner: Whois banner

On top, you can define individual settings for every single domain you manage.

The following parameters can be used for the API commands AddDomain (to register a domain) and ModifyDomain (to modify a domain):

-   X-WHOIS-URL = (TEXT)
-   X-WHOIS-RSP = (TEXT)
-   X-WHOIS-BANNER0 = (TEXT)
-   X-WHOIS-BANNER1 = (TEXT)
-   X-WHOIS-BANNER2 = (TEXT)

What happens at the registry?

-   First of all, it's important to know that we're transmitting your customised Whois output to all registries where possible. This is the case for most gTLDs, but only a few ccTLDs.
-   Next, it is important to know that thick registries (.INFO, .ORG, .XYZ, etc.) have a different output than thin registries (in particular .COM and .NET). Thick registry Whois is completely delivered from the registry. Thin Whois is a mixture of data coming from the registry and the registrar.
-   Finally, the well known Unix/Linux tool "whois" usually does not query the Whois server of a registrar but of the respective registry. Thus, you'd like to compare the outputs of queries stated with or without our Whois server:
    -   $ whois -h whois.rrpproxy.net key-systems.net
    -   $ whois -h key-systems.net

## GDPR

With the introduction of [GDPR](../../../help/gdpr) all registrars are required to publish information about how to get in touch with contacts of a domain, i.e. registrant (owner), administrative contact (admin), technical contact (tech) and billing contact (billing). As default our Whois server is publishing the URL https://www.domain-contact.org where a domain name can be entered and a contact selected to send a message to.

Furthermore, we're obliged by policy to display a generic contact email address in Whois as well. We're using info@domain-contact.org. This email address can not be changed out of policy reasons.  
All mails to this address will answer with a default auto responder message, asking the original sender to visit https://www.domain-contact.org

More information about this topic: [https://kb.centralnicreseller.com/help/gdpr/contact-to-an-undisclosed-entity](../../../help/gdpr/contact-to-an-undisclosed-entity)

How does it look like?

This is an exemplary Whois output of the Linux/Unix command line tool "whois" for key-systems.net. First from the registries Whois server, second from our Whois server. Notice the differences in the output. Customisable fields are indicated accordingly.

```
$ whois -h whois.rrpproxy.net key-systems.net

Domain Name: rrpproxy.net
Registry Domain ID: 69690466_DOMAIN_NET-VRSN
Registrar WHOIS Server: whois.rrpproxy.net
Registrar URL: http://www.key-systems.net --> X-WHOIS-URL
Updated Date: 2018-01-18T06:56:03Z
Creation Date: 2001-04-19T18:39:15Z
Registrar Registration Expiration Date: 2023-04-19T18:39:15Z
Registrar: Key-Systems GmbH
Registrar IANA ID: 269
Registrar Abuse Contact Email: abuse@key-systems.net
Registrar Abuse Contact Phone: +49.68949396850
Domain Status: clientTransferProhibited https://icann.org/epp#clientTransferProhibited
Registry Registrant ID: REDACTED FOR PRIVACY
Registrant Name: REDACTED FOR PRIVACY
Registrant Organization: REDACTED FOR PRIVACY
Registrant Street: REDACTED FOR PRIVACY
Registrant Street: REDACTED FOR PRIVACY
Registrant Street: REDACTED FOR PRIVACY
Registrant City: REDACTED FOR PRIVACY
Registrant State/Province: REDACTED FOR PRIVACY
Registrant Postal Code: REDACTED FOR PRIVACY
Registrant Country: REDACTED FOR PRIVACY
Registrant Phone: REDACTED FOR PRIVACY
Registrant Phone Ext: REDACTED FOR PRIVACY
Registrant Fax: REDACTED FOR PRIVACY
Registrant Fax Ext: REDACTED FOR PRIVACY
Registrant Email: info@domain-contact.org --> contact email address; can not be changed.
Registry Admin ID: REDACTED FOR PRIVACY
Admin Name: REDACTED FOR PRIVACY
Admin Organization: REDACTED FOR PRIVACY
Admin Street: REDACTED FOR PRIVACY
Admin Street: REDACTED FOR PRIVACY
Admin Street: REDACTED FOR PRIVACY
Admin City: REDACTED FOR PRIVACY
Admin State/Province: REDACTED FOR PRIVACY
Admin Postal Code: REDACTED FOR PRIVACY
Admin Country: REDACTED FOR PRIVACY
Admin Phone: REDACTED FOR PRIVACY
Admin Phone Ext: REDACTED FOR PRIVACY
Admin Fax: REDACTED FOR PRIVACY
Admin Fax Ext: REDACTED FOR PRIVACY
Admin Email: info@domain-contact.org --> contact email address; can not be changed.
Registry Tech ID: REDACTED FOR PRIVACY
Tech Name: REDACTED FOR PRIVACY
Tech Organization: REDACTED FOR PRIVACY
Tech Street: REDACTED FOR PRIVACY
Tech Street: REDACTED FOR PRIVACY
Tech Street: REDACTED FOR PRIVACY
Tech City: REDACTED FOR PRIVACY
Tech State/Province: REDACTED FOR PRIVACY
Tech Postal Code: REDACTED FOR PRIVACY
Tech Country: REDACTED FOR PRIVACY
Tech Phone: REDACTED FOR PRIVACY
Tech Phone Ext: REDACTED FOR PRIVACY
Tech Fax: REDACTED FOR PRIVACY
Tech Fax Ext: REDACTED FOR PRIVACY
Tech Email: info@domain-contact.org --> contact email address; can not be changed.
Registry Billing ID: REDACTED FOR PRIVACY
Billing Name: REDACTED FOR PRIVACY
Billing Organization: REDACTED FOR PRIVACY
Billing Street: REDACTED FOR PRIVACY
Billing Street: REDACTED FOR PRIVACY
Billing Street: REDACTED FOR PRIVACY
Billing City: REDACTED FOR PRIVACY
Billing State/Province: REDACTED FOR PRIVACY
Billing Postal Code: REDACTED FOR PRIVACY
Billing Country: REDACTED FOR PRIVACY
Billing Phone: REDACTED FOR PRIVACY
Billing Phone Ext: REDACTED FOR PRIVACY
Billing Fax: REDACTED FOR PRIVACY
Billing Fax Ext: REDACTED FOR PRIVACY
Billing Email: info@domain-contact.org --> contact email address; can not be changed.
Name Server: ns1a.ksregistry.net
Name Server: ns1b.ksregistry.net
Name Server: ns2a.ksregistry.com
Name Server: ns2b.ksregistry.com
DNSSEC: signedDelegation
URL of the ICANN WHOIS Data Problem Reporting System: https://wdprs.internic.net/

Last update of WHOIS database: 2018-06-27T12:08:59Z <<<

For more information on Whois status codes, please visit https://www.icann.org/epp

To contact the registered registrant please proceed to:
https://www.domain-contact.org --> GDPR-CONTACT-FORM-URL

Please register your domains at; http://www.key-systems.net --> Whois Banner
This data is provided by domaindiscount24.com --> X-WHOIS-RSP
for information purposes, and to assist persons obtaining information
about or related to domain name registration records.
domaindiscount24.com does not guarantee its accuracy. --> X-WHOIS-RSP
By submitting a WHOIS query, you agree that you will use this data
only for lawful purposes and that, under no circumstances, you will
use this data to
1) allow, enable, or otherwise support the transmission of mass
unsolicited, commercial advertising or solicitations via E-mail
(spam) or
2) enable high volume, automated, electronic processes that apply
to this WHOIS server.
These terms may be changed without prior notice.
By submitting this query, you agree to abide by this policy.

$ whois key-systems.net

$ whois key-systems.net
Domain Name: KEY-SYSTEMS.NET
Registry Domain ID: 30428855_DOMAIN_NET-VRSN
Registrar WHOIS Server: whois.rrpproxy.net
Registrar URL: http://www.key-systems.net --> X-WHOIS-URL
Updated Date: 2018-02-06T16:36:30Z
Creation Date: 2000-06-29T07:04:01Z
Registry Expiry Date: 2023-06-29T07:04:01Z
Registrar: Key-Systems GmbH
Registrar IANA ID: 269
Registrar Abuse Contact Email: abuse@key-systems.net
Registrar Abuse Contact Phone: +49.68949396850
Domain Status: clientDeleteProhibited https://icann.org/epp#clientDeleteProhibited
Domain Status: clientTransferProhibited https://icann.org/epp#clientTransferProhibited
Domain Status: serverDeleteProhibited https://icann.org/epp#serverDeleteProhibited
Domain Status: serverTransferProhibited https://icann.org/epp#serverTransferProhibited
Domain Status: serverUpdateProhibited https://icann.org/epp#serverUpdateProhibited
Name Server: NS1A.KSREGISTRY.NET
Name Server: NS1B.KSREGISTRY.NET
Name Server: NS2A.KSREGISTRY.COM
Name Server: NS2B.KSREGISTRY.COM
DNSSEC: signedDelegation
DNSSEC DS Data: 28726 8 2 03A5DD6A60281A8CAF87E6E43567B88EF3672C415969452A5B22038C7AAEB606
URL of the ICANN Whois Inaccuracy Complaint Form: https://www.icann.org/wicf/

Last update of whois database: 2018-06-27T13:32:26Z <<<

For more information on Whois status codes, please visit https://icann.org/epp

NOTICE: The expiration date displayed in this record is the date the
registrar's sponsorship of the domain name registration in the registry is
currently set to expire. This date does not necessarily reflect the expiration
date of the domain name registrant's agreement with the sponsoring
registrar. Users may consult the sponsoring registrar's Whois database to
view the registrar's reported date of expiration for this registration.

TERMS OF USE: You are not authorized to access or query our Whois
database through the use of electronic processes that are high-volume and
automated except as reasonably necessary to register domain names or
modify existing registrations; the Data in VeriSign Global Registry
Services' ("VeriSign") Whois database is provided by VeriSign for
information purposes only, and to assist persons in obtaining information
about or related to a domain name registration record. VeriSign does not
guarantee its accuracy. By submitting a Whois query, you agree to abide
by the following terms of use: You agree that you may use this Data only
for lawful purposes and that under no circumstances will you use this Data
to: (1) allow, enable, or otherwise support the transmission of mass
unsolicited, commercial advertising or solicitations via e-mail, telephone,
or facsimile; or (2) enable high volume, automated, electronic processes
that apply to VeriSign (or its computer systems). The compilation,
repackaging, dissemination or other use of this Data is expressly
prohibited without the prior written consent of VeriSign. You agree not to
use electronic processes that are automated and high-volume to access or
query the Whois database except as reasonably necessary to register
domain names or modify existing registrations. VeriSign reserves the right
to restrict your access to the Whois database in its sole discretion to ensure
operational stability. VeriSign may restrict or terminate your access to the
Whois database for failure to abide by these terms of use. VeriSign
reserves the right to modify these terms at any time.

The Registry database contains ONLY .COM, .NET, .EDU domains and
Registrars.
```
