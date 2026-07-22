---
title: "The Reissue Process"
---

When a ReissueCertificate command is issued, either the old CSR is used or a new CSR can be stated. A new CRT will be available after the Reissue has been processed. The new CRT can be retrieved with a StatusCertificate command and needs to be put in place at the respective web server.

It is possible to:

-   reissue a certificate using the old CSR
-   using the new CRT, replacing the old CRT

## Best Practice

However, the best practice reissuing a certificate is:

-   reissuing a certificate using a newly generated CSR
-   using the new CRT, replacing the old CRT
-   actively revoking the old certificate

**Please note**

This is an asynchronous process so it might take a while until the reissue has been completed by the CA. A reissue is not revoking the certificate. Instead, a new CRT is generated. Both old and new CRT are valid and can be used.

## Reissue and Changing Data: What happens?

-   **The CRT always changes**  
    If you reissue an SSL certificate, the CRT changes. So please make sure, the CRT is replaced after the reissue has been completed.
-   **Approver Mail**  
    The approver mail address is changed. All approval mails to issue and reissue the certificate will be sent to this address. Make sure it is properly monitored and validation links are clicked to approve certificate issues and reissues.
    
-   **Private Key (CSR)**  
    You can generate and use a new private key (CSR) during reissuing an SSL certificate.
    
-   **Hashing Algorithm**  
    You can use a different hashing algorithm (e.g. SHA2) when reissuing an SSL certificate. This is in particular necessary if an old SHA1 algorithm has been used before.
    
-   **Common Name (Domain Name)**  
    The common name (Domain Name) of an SSL certificate can be changed. This triggers a complete validation process. DV SSL certificates are validated via email within short time (minutes to hours). But OV and EV SSL Certificate validation might take up to several days.
    
-   **Organisation name**  
    The Organisation name of an SSL certificate can be changed. Please note: This triggers a complete validation process. DV SSL certificates are validated via email within short time (minutes to hours). But OV and EV SSL Certificate validation might take up to several days.
    

**Please note**

If details other than those associated with your public key require amendment (i.e. cont, the underlying CA may be required to revalidate your application. If the reissue request does not pass the validation process, the underlying CA reserves the right to refuse your reissue application and the original Certificate may be revoked.

## Approving the SSL Certificate Reissue

Once the certificate re-issue is requested, we will forward the information to the certificate authority. The certificate authority will then send you a link to validate the certificate, as it happened for the original certificate purchase.

**Remember to approve the certificate reissue!**

In most cases, the reissue process gets stuck because the request is never approved by the owner. Please monitor the approval email inbox and make sure to click on the link contained in the email sent from the Certificate Authority in order to validate and approve the reissue.

## How long does it take?

The time required to issue a new SSL certificate depends on many factors. The SSL certificate type, the validation process, and how quickly you respond with requested information from us or the certificate authority communications. In general, issuing a new domain-validated SSL certificate can take from a few minutes to a few hours, after you approve the SSL certificate.

## Are there any costs for reissuing a certificate?

No:

-   A reissue is free of charge.
-   The expiration date of the certificate will not change.
-   A reissue does not revoke a certificate.
