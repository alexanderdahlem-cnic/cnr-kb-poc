---
title: "Extended Validation (EV) Certificates Examples"
description: "For Extended Validation (EV) Certificates, the respective Certificate Authority (CA) will check some databases to verify the contact information..."
---

**Extended Validated (EV):** support all features of OV certificates. In addition, a strict check is carried out as to the legitimacy of the company. EV certificates will not be accepted if they are not recorded in multiple transparency logs.

With SSL API 2.0 integration:

-   DV certificates will require a “Tech Contact”.
-   OV certificates will require the above and an additional “Organization Contact”.
-   EV certificates will require the above and an additional “EV Approver Contact”. This is the contact person allowed to approve EV certificates in an organization.

### Complete EV validation process

1.  Complete Domain Control Verification (DCV) to verify the domain(s) are controlled by the organization. This can be completed using 1 of 3 methods: DCV email, CNAME or HTTP(S) challenge.
2.  The CA must validate your authority to order a certificate for the given organization on the order. To do this, there will be a telephone call through the main business phone number to speak with someone who represents the organization such as the technical contact.
3.  It is possible there will be an email requesting for additional information.

### What Details are Validated?

Typically, EV Validation basics consist of verifying the following:

-   Organization legal name and status is in good standing
-   Organization tradename / DBA (Doing Business As) if applicable
-   Currently operating the business
-   Address where you conduct business operations
-   Organization main telephone number
-   Control the domain(s) listed on the certificate
-   Authenticity of the subscriber agreement

All CAs are bound to guidelines, which makes the validation process almost identical. For further details, please visit [Sectigo’s knowledge base](https://www.sectigo.com/knowledge-base/) or [DigiCert's documentation](https://docs.digicert.com/).

## Contact information databases

For Extended Validation (EV) Certificates, the respective Certificate Authority (CA) will check some databases to verify the contact information. Please find example databases below:

### National (Germany)

-   [http://www.dasoertliche.de](http://www.dasoertliche.de/)
-   [http://www.telefonbuch.de](https://www.telefonbuch.de/)
-   [http://www.gelbe-seiten.de](http://www.gelbeseiten.de/)
-   [http://www.upik.de](https://www.upik.de/)
-   [http://www.firmenwissen.de](http://www.firmenwissen.de/index.html)
-   [https://www.11880.com/](https://www.11880.com/)
-   [http://www.dialo.de](https://www.dialo.de/)

### International

-   [http://www.numberway.com](https://www.numberway.com/)
-   [http://www.hoovers.com/](http://www.hoovers.com/)

### Netherlands

-   [http://www.detelefoongids.nl/bedrijven/2-1/](https://www.detelefoongids.nl/bedrijven/2-1/)
