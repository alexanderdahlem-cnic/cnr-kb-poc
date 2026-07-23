---
title: "New Public Key Infrastructur for DigiCert SSL Certificates as of December 1st 2017"
sidebar:
  order: 1310
  label: "New PKI for Symantec"
---

You might have read in the news about Google and Symantec. Earlier this year, after incidents of Symantec have become known to the public, Google stepped forward and announced plans to distrust all SSL certificates of the Symantec product group in their Google Chrome browser. Both companies had many discussions with each other as this move would affect a huge number of internet users.  
Google and Symantec finally came to a conclusion on how to proceed and to keep it possible for Symantec to maintain their certificate business. This is only possible if Symantec will no longer act as Certificate Authority, since Google Chrome will distrust all Symantec certificates in 2018. Instead the Digicert PKI will be used to issue certificates as of December 1st 2017, and Symantec will effectively become, in technical terms, a Subordinate Certificate Authority (SubCA). Similar to that, all other Symantec certificate brands will become SubCAs.  
Google will in a first step distrust all Symantec certificates issued before June 1st 2016 with the release of Chrome 66 (estimated April 2018), and finally all existing Symantec SSL certificates issued before December 1st using the old Symantec PKI with the release of Chrome 70 (estimated October 2018). In addition, because Symantec bought other CAs (GeoTrust, Thawte, and RapidSSL), the root certificates of those former companies have been added to the Symantec root. Certificates issued under these three CAs are affected like native Symantec SSL certs and users will have to reissue them as well.

## Reissues Necessary

Thus, unfortunately all Symantec, GeoTrust, Thawte, and RapidSSL SSL Certificates are affected and will in future be distrusted in Google Chrome. To avoid your certificates from being distrusted in Google Chrome, Reissues for Affected Certificates will become necessary.

**Important to know:**

-   A reissue is free of charge.
-   The expiration date of the certificate will not change.
-   A reissue does not revoke a certificate.
-   Reissues require a full validation due to the demand by Google

## Affected Certificates

In conclusion, two groups of certificates can be regarded separately. The differences are when Google Chrome starts distrusting Symantec certificates:

-   March 15th 2018 (= release of Chrome 66) for all certificates issued before June 1st 2016
-   September 13th 2017 (= release of Chrome 70) for all certificates issued before December 1st 2017

What they share is the date when reissues can and should be started: December 1st 2017, when Symantec and its brands GeoTrust, Thawte, and RapidSSL became SubCAs of Digicert.

## Affected Certificates in your CentralNic Reseller Account

You can find a daily updated version of affected SSL certificates managed in your CentralNic Reseller in your download area, accessible through the CentralNic Reseller control panel at "Downloads" -> "My Downloads" -> "Reports" -> symantec\_certificate\_reissue.(your account name).(current date).csv

For your Sub-Resellers, a file is availabe in the download area of the respective Sub-Reseller account.

## Reissue time frame

The details for these groups in summary:

-   Certificates issued **BEFORE** June 1st 2016: These will be distrusted by Google Chrome on March 15th 2018 (= release of Chrome 66). To prevent the distrust a reissue under the Digicert PKI is necessary. This can be done starting December 1st 2017.

For reissues there's only time **UNTIL** March 15th 2018. Afterwards Google Chrome will display errors.

-   Certificates issued **BEFORE** December 1st 2017: These will be distrusted by Google on September 13th 2018 (= release of Chrome 70). To prevent the distrust a reissue under the Digicert PKI is necessary. This can be done starting December 1st 2017.

For reissues there's only time **UNTIL** September 13th 2018. Afterwards Google Chrome will display errors.

## How to perform Reissues

A full how to on how to reissue affected certificates alongside best practices is available in the [ReissueCertificate](../../ssl-reissue/) article.
