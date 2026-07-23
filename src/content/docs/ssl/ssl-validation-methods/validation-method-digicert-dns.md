---
title: "Validation Method: DigiCert DNS"
description: "To use the DNS based authentication for domain-vetted certificates, set the parameter \"AUTHMETHOD\" to \"DNS\" for AddCertificate\", \"RenewCertificate\" and \"Reissue"
sidebar:
  order: 1190
  label: "DigiCert DNS"
---

To use the DNS based authentication for domain-vetted certificates, set the parameter "AUTHMETHOD" to "DNS" for AddCertificate", "RenewCertificate" and "ReissueCertificate". If the certificate class is valid for DNS based authentication, you will get one additional property back.

:::command[Command]

```text
command    = AddCertificate
csrX       = ...
authmethod = DNS
```

:::

 

:::response[Response]

```text
code                      = 200
description               = Command completed successfully
runtime                   = 7.872
property[certificate][0]  = SA4317966
property[dnsauth name][0] = k5loo039okyyz1jlrde57ku091h1og39uv6enkzo1v265graqw
property[status][0]       = REQUESTED
property[sub][0]          = SA4317966-001
property[sub status][0]   = ORDER_REQUESTED
```

:::

The DNS record returned in the API response contains the date and a unique random string derived from the CSR and must be stored in a TXT - record:

-   example.com IN TXT k5loo039okyyz1jlrde57ku091h1og39uv6enkzo1v265graqw

The DNS record must always be stored at the main domain, also for sub-domains.

For SAN SSL certificates, the TXT record for DNS based validation must be stated for all respective main domain(s), also for sub-domains.

**Important:** If your order contains a domain name in the format www.<domain\_name>.com, DigiCert checks for the TXT record on <domain\_name>.com and not on www.<domain\_name>.com. During authentication, their systems treat both these values as separate entities. After <domain\_name>.com is successfully authenticated, DigiCert can issue you certificates for both <domain\_name>.com and www.<domain\_name>.com. This handling does not apply to other sub-domains.

Exemplary domains in CSR

-   www.example.com
-   something.example.com
-   example.net
-   anotherthing.example.org

These require 4 TXT records at main domain level

-   example.com IN TXT <string>
-   something.example.com IN TXT <string>
-   example.net IN TXT <string>
-   anotherthing.example.org IN TXT <string>

The <string> is identical for these domains, it is generated of the CSR and is returned via API.

### Additional information about DigiCert DNS-based authentication

Validates a DNS entry to authenticate the domain. DNS-based authentication is available for enroll (AddCertificate), reissue (ReissueCertificate), renewal (RenewCertificate), and revoke (DeleteCertificate) actions. For enroll, renew, and reissue, DNS-based authentication is only available for DV products. For revoke, DNS-based authentication is available for OV, DV, and EV products.

**DNS authentication methods**

The DNS entry is a TXT record on the requested domain. You can update an existing TXT record or create a new one. The content of TXT record is generated using a random string. The format of this entry is a random string and returned by our API as property\[dnsauth name\]. In the case of multiple orders, you can add multiple of such random string entries to the TXT record. Separate each entry with a line break, being careful not to break these random strings.

**Example TXT record (new record)**

If the domain does not have a DNS TXT record, create one.

auth.scan-test.net. 3600 IN TXT  
"ztkf61glu4h63r88opc9g1n5y5hveqf8r2t7cwuxugdiu72x1y  
ztkf61glu4h63r88opc9g1n5y5hveqf8r2t7cwuxugdiu72x1y"

**Example TXT record (update existing record)**

If the domain already has a DNS TXT record, update it with the combination for each order you want to verify.

auth.scan-test.net. 3600 IN TXT  
"purpose=something mx a:mail.scan-test.net include:servers.scan-test.net ~all  
ztkf61glu4h63r88opc9g1n5y5hveqf8r2t7cwuxugdiu72x1y  
ztkf61glu4h63r88opc9g1n5y5hveqf8r2t7cwuxugdiu72x1y"

**Using DNS-based authentication**

1.  Get the DNS entry and create or update a TXT record on the domain and all SANs with the correct content format. Do this step after you submit your order request.
2.  Test the TXT record using the UNIX dig <sub-domain> txt command and verify that the entry is correct. The TXT record should contain the respective random string for each order being verified.
3.  Submit your request with DNS authentication specified.
4.  DigiCert polls the domain for the DNS entry up to 30 days after the order was placed.
5.  Authentication completes when DigiCert finds the entry.

_Note:_ If your order contains a domain name in the format www.<domain\_name>.com, DigiCert checks for the TXT record on <domain\_name>.com and not on www.<domain\_name>.com. During authentication, their systems treat both these values as separate entities. After <domain\_name>.com is successfully authenticated, DigiCert can issue you certificates for both <domain\_name>.com and www.<domain\_name>.com. This handling does not apply to other sub-domains.

**File and DNS authentication polling frequency**

After you place an order with FILE or DNS authentication, DigiCert polls each domain until the file or DNS entry is found or 30 days have passed. The polling interval is short immediately after the order is placed and gets longer as time passes. For faster order fulfillment, place the file or update the DNS entry as soon as possible after the order is placed.

Polling frequency:

-   Every minute for the first 15 minutes
-   Every five minutes for an hour
-   Every 15 minutes for 4 hours
-   Every hour for a day
-   Every 4 hours for 2 weeks
-   Every day for up to 30 days
