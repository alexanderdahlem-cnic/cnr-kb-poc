---
title: "CAA records"
---

As of now KeyDNS is capable of managing CAA records via API and in our CentralNic control panel.

The purpose of the CAA (Certification Authority Authorization) record is to allow domain owners to specify which certificate authorities are allowed to issue a SSL certificate for a domain. If no CAA record is present, any CA is allowed to issue a certificate for the domain. If a CAA record is present, only the CAs listed in the record(s) are allowed to issue certificates for that host name. Thus a CAA record is optional for customers to set, but mandatory for certificate authorities to check.

For reference: [RFC 6844 for CAA records](https://tools.ietf.org/html/rfc6844)

## API Command Examples

Allow the Certificate Authority DigiCert to issue SSL certificates for example.com:

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = adddnszone
dnszone = example.com
rr0 = @ IN CAA 0 issue digicert.com</code></pre></div>

Allow the Certificate Authority DigiCert to issue SSL wildcard certificates for example.com:

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = modifydnszone
dnszone = example.com
rr0 = @ IN CAA 0 issuewild digicert.com</code></pre></div>

Allow the Certificate Authority DigiCert to issue SSL wildcard certificates for example.com, but disallow single domain SSL certificates:

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = modifydnszone
dnszone = example.com
rr0 = @ IN CAA 0 issue ";"
rr1 = @ IN CAA 0 issuewild digicert.com</code></pre></div>

Define email address to send incident reports to:

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = modifydnszone
dnszone = example.com
rr0 = @ IN CAA 0 iodef mailto:info@example.com</code></pre></div>

Define URL to send incident reports to:

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = modifydnszone
dnszone = example.com
rr0 = @ IN CAA 0 iodef http://www.example.com/script.php</code></pre></div>

There's currently no standard format for receiving incident reports. And it might not be supported by all Certificate Authorities.

## Certificate Authorities offered at CentralNic Reseller

-   [Digicert](https://www.digicert.com) with the following brands:
    -   [Symantec](https://www.symantec.com/)
    -   [Thawte](https://www.thawte.com/)
    -   [Geotrust](https://www.geotrust.com/)
    -   [RapidSSL](https://www.rapidssl.com/)
-   [Comodo](https://ssl.comodo.com/)

## Certificate Authority used by our CentralNic Reseller hosting (HOMER)

-   [Let's Encrypt](http://letsencrypt.org)
