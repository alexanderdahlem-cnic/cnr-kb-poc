---
title: "Registrar Properties"
sidebar:
  order: 2000
---

Registrar Settings describes your CentralNic Reseller account settings. The Registrar Settings are used to store account settings for all different kind of functionalities for an CentralNic Reseller and its Subreseller accounts.  
Within the CentralNic Reseller control panel allows you to easily manage your own settings as well as your Subreseller settings.

## Your CentralNic Reseller account settings

Your CentralNic Reseller account settings only apply to your reseller account and can be found in the CentralNic Reseller control panel by clicking on your account name on the upper right side -> Settings. Important: Your CentralNic Reseller account settings are not inherited to your Subreseller Accounts. Instead, you can define settings for your Subresellers separately.

## Account Renewal Mode

Under Account --> Settings --> (Tab) General it is possible to change the RenewalMode for all domains under your management.

-   **AUTORENEW**  
    The respective domain will automatically be renewed to the expiration date including the autorenew grace period (gTLDs).
-   **AUTODELETE**  
    The respective domain will automatically be deleted to the max. expiration date (including the autorenew grace period).
-   **AUTOEXPIRE**  
    Is to be identified if you do not have a confirmed deletion by your customer but you would like to have deleted due to non payment.

As a matter of course you can change the explicit DomainRenewalMode for each domain under Domain --> Renewal  
You can set single domain names to the renewal mode AUTORENEW or RENEWONCE in order to have them renewed. You have to do this before the renewal date is reached. You can check the renewal date at Domain --> fill in domain name and click "search" for your domain names. If you set the renewal mode of a domain to RENEWONCE our system puts it back to DEFAULT after an automated successful renewal. At the same time you will receive an RENEWAL::SUCCESSFUL event.
