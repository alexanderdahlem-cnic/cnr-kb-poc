---
title: "Validation Method: Sectigo DNS"
description: "To automatically create comodo - certificates (DNS), 2 hashes are needed: ● SHA-1 of the CSR in DER (important!) format ● MD5 of the CSR in DER (important!) for"
---

For this validation method you need to create a CNAME record in the DNS settings of your domain.

To order Comodo SSL Certificates using DNS validation please set the respective parameter "AUTHMETHOD = DNS" in "AddCertificate", "RenewCertificate" and "ReissueCertificate" commands. The data necessary for DNS validation will be returned in the response of the respective command:

-   property\[dnsauth name\]\[0\]: needed ressource record

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>Command=AddCertificate
AuthMethod=DNS</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 200
property[certificate][0] = CY2757994
property[dnsauth name][0] = _47cba4dfbe697765f51230e84f04d091.mail.example.com.  CNAME  5b06bda4ffe784373d6616ab8fcbef1.7da4549f0623a25f37e128efb0fbf745d.1f96729172445e721043.comodoca.com.
property[status][0] = REQUESTED
property[sub][0] = CY2757994-001
property[sub status][0] = ORDER_REQUESTED</code></pre></div>

## Example

mail.example.com  
MD5 Hash: 47cba4dfbe697765f51230e84f04d091  
SHA-256 Hash: 5b06bda4ffe784373d6616ab8fcbef17da4549f0623a25f37e128efb0fbf745d  
Random Hash: 1f96729172445e721043

**Important**:

-   The CNAME Record must begin with a leading underscore "\_"
-   The SHA-256 Hash needs to be interrupted with a point every 32 characters. Additionally, the Random Hash needs to be separated with a point as well.

The new CNAME record should look as follows:

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>_47cba4dfbe697765f51230e84f04d091.mail.example.com.  CNAME  5b06bda4ffe784373d6616ab8fcbef1.7da4549f0623a25f37e128efb0fbf745d.1f96729172445e721043.comodoca.com.</code></pre></div>

## Order the certificate

After ordering the certificate you can check its status by issuing the StatusCertificate command. The data for DNS Validation will be returned as well.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>Command=StatusCertificate
Certificate=CY2737994</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>property[certificate][0] = CY2737994
property[dnsauth name][0] = _47cba4dfbe697765f51230e84f04d091.mail.example.com.  CNAME  5b06bda4ffe784373d6616ab8fcbef1.7da4549f0623a25f37e128efb0fbf745d.1f96729172445e721043.comodoca.com.
property[status][0] = REQUESTED</code></pre></div>


