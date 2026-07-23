---
title: "DomainPinLock"
description: "Secure a domain through a PIN token procedure by SMS. The registrar can activate a security procedure to protect his domain by a new API command (SetDomainPinLo"
sidebar:
  order: 1530
---

A new service to secure a domain through a PIN token procedure by SMS.  
The registrar can activate a security procedure to protect his domain by a new API command (SetDomainPinLock). An authority number (mobile number in international format with leading country code) has to be given for this new API command, which will receive the one time tokens by SMS. This service will be directly charged as soon as the API command SetDomainPinLock is exucted for a domain name because this will immediately cause costs on our side for the submission of the SMS. During the request of the Pinlock, first, a token will be sent to the authority number. Afterwards, the same API command SetDomainPinLock must be submitted again for the domain name including the received one time token. Only if this is successfully carried out, the pinlock service will be activated for this domain. The service can be deactivated by using the SetDomainPinLock API command again. The service will be invoiced for a period of one year during which the service will not be charged again, even if it is activated/deactivate multiple times as long as the service is in its original term.

If a domain is secured with a pinlock, then the following actions can only be carried out, if a one time token has been requested prior to it and is submitted with the corresponding action. A one time token can be requested with the API command RequestDomainPin. The token will be valid for a period of 30 minutes before it expires. A new token cannot be requested as long as this token has not been used or expired. If a token has been used, it will be removed from the system and become invalid. In this case, a new token can be generated immediately.

A registrar can lookup all domains with activated pinlock service by the API command QueryDomainPinLockList, which will also provide the information of how long the service is paid and when it will be charged again.

The price of the pinlock service can be found in the control panel following "Account --> Zones & prices --> Services --> (Tab) Other --> domain-pin-lock" where it can also be activated. If a registrar executes the command SetDomainPinLock for a domain without the activation of the appendix, it will be activated automatically.

## SetDomainPinLock

This API command is used to activate the pinlock service

-   only possible for subresellers, if the service type "OTHER --> DOMAIN-PIN-LOCK" is activated
-   Appendix will be activated automatically for CentralNic Reseller customers, if the command is executed and has not been activated before
-   Command can be used to activate (pinlock = 1) or deactivate (pinlock = 0) the DomainSafe function
-   Activation is only possible, if the domain exists, no pinlock is activated and the domain belongs to the RSP
-   Deactivation is only possible, if the domain exists, pinlock has been activated already and the domain belongs to the RSP
-   On the first time activation, a CreditCheck will be performed and the service is directly charged, afterwards a token will be sent to the number by SMS
-   For the final activation, the complete command has to be resend with the token received by the mobile number
-   Only after this procedure, the DomainSafe is active for this particular domain
-   Due to SMS Fraud Protection, there will be no refund, if the DomainSafe is never activated after the initial SetDomainPinLock command
-   Repeated activation during the accounting period does not cause a new invoicing
-   The first response contains property INFO "Please resend this command with the one-way token to activate the pinlock service."
-   If the second command contains different values (e.g. different mobile number) an error will occur

## RequestDomainPin

-   only possible, if domain exists, Pinlock is already activated and the domain belongs to the requesting account
-   Pin can only be requested every 10 minutes (The token will be valid for a period of 30 minutes before it expires)

:::commandlist[DomainPinLock Command]

- [SetDomainPinLock](../../api/api-command/setdomainpinlock/)
- [RequestDomainPin](../../api/api-command/requestdomainpin/)
- [QueryDomainPinLockList](../../api/api-command/querydomainpinlocklist/)

:::
