---
title: "Allowed prefixes for Approver eMail"
description: "Allowed prefixes: ● admin@ ● administrator@ ● hostmaster@ ● webmaster@ ● postmaster@ ➥ Learn more!"
---

A Certificate Revocation List (CRL) is a list of certificate serial numbers which have been revoked, are no longer valid, and should not be relied upon by any system user.

Online Certificate Status Protocol (OCSP) has largely replaced the use of CRLs to check SSL Certificate revocation. Instead of downloading a potentially large list of revoked certificates in a CRL, the protocol requests the status of a specific website’s X.509 digital certificate from the issuing CA’s OCSP response server. This resource maintains a list of information relating to certificates that have been revoked or replaced that’s frequently updated.

At Sectigo, the organization validation certificates can include CRL extension or OCSP.  
At DigiCert, certificates that typically omit the CRL and OSCP are self signed or ones used in a completely closed system. All of their products support the CRL and OSCP function.
