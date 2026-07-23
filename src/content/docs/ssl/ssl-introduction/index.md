---
title: "SSL Introduction - How it works"
description: "SSL certificates guarantee the authenticity of a website identity through a specific validation process executed by a certification authority. ➥ Learn more!"
---

SSL (Secure Sockets Layer) certificates guarantee the authenticity of a website identity through a specific validation process executed by a certification authority.  
The certified SSL encryption ensures that information is kept private between your web server and the clients' web browsers.

The process of applying for a signed digital certificate begins with the generation and submission of a Certificate Signing Request (CSR) file.  
The Certification Authority then checks and verifies the right to use the domain name in question.

Our Certificate reference manual will give you an extensive overview of the commands which can be submitted to the system.  
The PDF of our certificate reference manual can be downloaded from the download area of the registrar admin section of the CentralNic Reseller control panel.

Please do not hesitate to contact us with your comments

## Validation Types: DV, OV, EV

There are three types of validation:

-   **Domain authentication (DV)** verifies that the applicant has administrative rights to the domain listed in the certificate. The verification is carried out via email, resource record in the DNS zone file, or a file on a web server. See also: Validation Methods
-   **Full organization authentication (OV)** includes business identity authentication, domain name verification and verification that the organizational contact applying for the certificate on behalf of the company or organization is an employee of that organization. Please kindly note for the organization or technical contact details, it has to be their actual name as he/she is the authorized person for the order. A generic job title or company name cannot be accepted as the contact for any order.
-   **Extended Validation (EV)** is the highest level of authentication (signed acknowledgement of agreement from the corporate contact is required). With Extended Validation, visitors see the address bar turn green when visiting the website in their browser, a visible sign that the site is highly authenticated, trustworthy and the customers' information is secure. However, there might be browsers out there that show a different behaviour.

## Handling certificates and subs

The scheme in our SSL management is the separation of the general certificate data (like the certificate id, the domain name and the contacts) and the specific data of a certain instance of a certificate (we call it sub) like the CSR and CRT.

After each call of an Add-, Renew- or ReissueCertificate command, the response will return an order-identifier (parameter: certificate) and a certificate-identifier (parameter: sub). The StatusCertificate command will return the static data of an order and the dynamic data of the latest certificate (sub).

Thus the following scheme is applied:

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>Certificate (= order identifier, also referred to as certificate id)
- Sub1 (= certificate identifier, also referred to as sub or sub id)
- Sub2
- Sub3
...</code></pre></div>

Unlike domains SSL certificates can not be renewed. Instead, a new certificate will be issued. Following the principle of domain renewals, the CentralNic Reseller system provides the possibility to renew certificates. Issuing a renewal for a certificate will add a new sub to an order.

With this scheme you can keep your certificate id after a renew or reissue, but have technically unlimited renews / reissues and that you are able to look into older data from old certificates (parameter: sub) bundled to an order. This is extremely relevant if you e.g. need older CRT data after you just did a renew/reissue. In addition to giving you the option to look into older data, we also give you the option to use older data for a renew (eg. you need a renew with the data you used before a failed reissue).

Pending orders will be cancelled after 28 days.

**Old Certificate IDs**

With the introduction of our new SSL backend new certificate IDs have been assigned for all certificates in our system. The old IDs will not be used any more. A full list including old IDs and mapped new IDs of your certificates is available in the FTP area of your account which can be found in the control panel at “Account” -> “FTP”. Please regard, this list only exists as long as your account had certificates before we introduced the new SSL backend.
