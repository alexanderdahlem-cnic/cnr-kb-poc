---
title: "The CentralNic Reseller Renewal System"
---

## Contents

1 Basic Outline of the CentralNic Reseller Renewal System  
2 Relevant Domain Dates  
2.1 Auto Renew Grace Period for Generic TLDs  
2.1.1 AutoRenew Grace Period  
2.1.2 Redemption Grace Period  
3 Renewal Modes  
3.1 Available Renewal Modes  
3.1.1 AutoRenew  
3.1.2 AutoExpire & AutoDelete  
3.1.3 RenewOnce  
3.1.4 RenewOnceThenAutoExpire & RenewOnceThenAutoDelete  
3.1.5 RenewMonthly & RenewQuarterly  
3.2 General Account and Specific Domain Settings  
3.2.1 General Account Settings  
3.2.2 Domain Specific Settings  
4 Explicit Renewals and Domain Auction  
4.1 Explicit Renewals  
4.2 Out of Funds  
4.3 Selling Domains via Auction  
5 Restores  
6 Best Practices  
6.1 Automatic Renewal vs. Non-Renewal  
6.2 Expiration vs. Deletion  
6.3 Non-Automated Processing  
7 Glossary

## 1 Basic Outline of the CentralNic Reseller Renewal System

The renewal system is a component of the CentralNic Reseller domain management system and is responsible for the **automated** processing of **domain renewals** and **deletions**. Its objective is to ensure a precise and reliable observation of renewal and deletion deadlines.  
It engages at the end of a domain’s life cycle and during renewals after domain restores. It should not be confused with explicit renewals or deletions which are requested by or through the managing reseller of a domain.  
The renewal system offers multiple settings and strategies to cater for your renewal requirements. Best practices for a most appropriate solution can be found in the last section of this document.

**Main Principles**

-   Domains are automatically renewed, deleted, or left to expire at the end of their lifecycle.
-   The operation performed depends on the domain’s renewal mode.
-   The most common renewal modes used are AutoRenew, AutoDelete, and AutoExpire.
-   TLD specific differences may apply.

## 2 Relevant Domain Dates

CentralNic Reseller has its own internal renewal model to take different registry policies into account. The system does not use the **expiration date** for renewal management; instead, it uses the **paid-until-date** and the **renewal date**. The paid-until-date indicates for how long the domain has been paid in an administrative sense for billing. The renewal date shows when the next action for renewal or deletion is pending.  
Depending on the TLD and registry policy the renewal date is often different from the registration expiration date returned by the registry.

_Because of these differences, it is important for you to keep in mind that the **renewal date** is the date you must observe for the expiration of your domain._

CentralNic Reseller allocates the time span between the expiration date and the renewal date for the internal renewal and accounting of the domain. This time span, known as the **deletion timeframe**, is documented in our Knowledge Base for every TLD.

**Relevant Domain Dates Summary**

-   The _paid-until_ date is used as the general cornerstone of automated renewal handling.
-   The TLD-specific _deletion timeframe_ is factored in.
-   The resulting _renewal date_ is the actual date for automated renewal or deletion.
-   The renewal date can be well before or after the paid-until date, depending on the TLD.

**2.1 Auto Renew Grace Period for Generic TLDs**

Besides the individual renewal cycle of a registry, there are general policies affecting the renewal date depending on the TLD. These policies particularly concern the so-called **auto renew grace period** (ARGP) and the **redemption grace period** (RPG) for gTLDs.

**2.1.1 Auto Renew Grace Period**

The auto renew grace period applies to all gTLDs, e.g. .com, .net, .org, .shop, .ninja, etc. It grants a 45 day extension before the domain expires. For you and your client’s convenience, we pass this period through to you. For security reasons and to have a certain _buffer_ for taking action we only subtract two days from this period. This means that the renewal date (which is relevant for you) will be _after_ the expiration date, but not the full length of ARGP offered by the registry.

The renewal date is further subject to ICANN’s **Expired Registration Recovery Policy**, ERRP.  
Please see [https://www.icann.org/resources/pages/errp-2013-02-28-en](https://www.icann.org/resources/pages/errp-2013-02-28-en) and [https://kb.centralnicreseller.com/domains/icann/errp](../icann/errp/).  
If you want to delete the domain during the auto renew grace period, it must be suspended for 8 days before deletion can take effect. The domain will not resolve during this time and the status in CentralNic Reseller is _pendingDelete_. A renewal without the need for prior restore is still possible during this phase.  
The purpose of this policy is to make it very clear that the domain will definitely expire if no action is taken. As a consequence, the renewal date will be _35 days after the expiration date_ for gTLDs: 45 days – 8 days ERRP – 2 days buffer.

Please do not be confused in these cases about a time difference between CentralNic Reseller and the respective registry you might find: While most registries count up the expiration date on the day of expiration (e.g., for one year), CentralNic Reseller adjusts the paid-until date on the renewal date (35 days later) and submits the corresponding fee for billing.

If you do not wish to enter the auto renew grace period we offer an exceptional “renew on expiration” service. This will renew all your gTLD domains one day before the expiration date.

You can set it in the control panel here:

-   Click the user icon in the top right corner.
-   Go to _Settings_.
-   Click the _Reselling_ tab.
-   Scroll down to the end of the page.
-   Click the button under _Renew gTLD domains on expiration date_ to switch to “Yes”.

Some ccTLDs offer an auto renew grace period as well, but since these are not bound to ICANN regulations, parameters like period length may vary.

**2.1.2 Redemption Grace Period**

Additionally, all gTLD registries offer a redemption grace period (RGP) of 30 days immediately following the deletion of a registration. During this time you still can restore the domain at additional costs if the service is offered by the registry. These costs will be billed in addition to any subsequent renewals.  
After the redemption period, there is a pending delete phase of 5 days when you cannot restore the domain anymore.  
If you delete a domain before its expiration date, it will enter RGP immediately, bypassing the auto renew grace period and ERRP.  
Again, there may be slight differences when working with ccTLDs.

## 3 Renewal Modes

The action performed upon reaching a domain’s renewal date depends on its renewal mode.  
There are several general renewal modes available to all TLDs, as well as some specific ones only used by smaller groups of TLD zones.  
Which renewal mode applies is determined by the domain’s specific or your account’s general renewal mode setting. Keep in mind that individual domain settings will overwrite your account’s general settings.  
Certain renewal modes are only available for certain TLDs and may not be available in your account settings.

**3.1 Available Renewal Modes**

**3.1.1 AutoRenew**

This will renew your domain automatically whenever the end of the domain term is reached.

**3.1.2 AutoExpire & AutoDelete**

Both _AutoDelete_ and _AutoExpire_ delete the domain from CentralNic Reseller at the end of the renewal process. Depending on the setting and TLD at hand, the domain will either be left to expire or be explicitly deleted at the respective registry.

For most zones, like all gTLDs, there is no difference between these modes, but in some cases, expiration and deletion will have different effects on what processes are triggered at the registry. Please check the Knowledge Base articles of ccTLDs carefully (e.g. .DE and .AT).

**3.1.3 RenewOnce**

After a one-time renewal of your domain, the renewal mode will be set back to the default setting of your account (_Default_).

**3.1.4 RenewOnceThenAutoExpire & RenewOnceThenAutoDelete**

With _RenewOnceThenAutoExpire_ the domain is renewed once and is then set to _AutoExpire_ instead of _Default_.

With _RenewOnceThenAutoDelete_ the domain is renewed once and set to _AutoDelete_ instead of _Default_.

**3.1.5 RenewMonthly & RenewQuarterly**

These modes are only supported by .DE (RenewMonthly) and .NL (RenewMonthly _and_ RenewQuarterly). Their mechanics are self-explanatory, the domain in question will be renewed by one month or by three months respectively.

**G****raphical O****verview (main Modes only):**

![renewal modes centralnic reseller](https://kb.centralnicreseller.com/imagetypes/859w/image_manager__859w_renewal_modes_centralnic_reseller.jpg)

**3.2 General Account and Specific Domain Settings**

The renewal mode of a domain will be defined by your general account settings unless changed explicitly. The default account setting is AutoRenew.

**3.2.1 General Account Settings**

Unless specified differently, a newly registered or transferred domain uses your account’s default renewal mode. This mode is accessible in your account settings under Account > Settings > System > Account Data > Renewalmode. Since this affects all domains regardless of TLD, only the three general options are available: AutoRenew, AutoExpire, and AutoDelete.

![Renewalmode account setting](https://kb.centralnicreseller.com/imagetypes/859w/image_manager__859w_renewalmode_account_setting.png)

You can also set your account’s renewal mode via API using the following command:

### Command

```
command     = ModifyRegistrar
renewalmode = AutoRenew
EOF
```

**3.2.2 Domain Specific Settings**

The renewal settings of your account apply to all domains you manage. You can also specify an individual renewal setting for every single domain. This setting will override the general setting of your account. You can do this in the domain’s details in the control panel or via the API using the commands SetDomainRenewalmode or ModifyDomain, please see below. The renewal modes available depend on the TLD.

![Domain Specific Settings](https://kb.centralnicreseller.com/imagetypes/859w/image_manager__859w_domain_specific_settings.png)

### Command

```
command     = SetDomainRenewalMode
domain      = example.com
renewalmode = RenewOnceThenAutoExpire

or

command     = ModifyDomain
domain      = example.com
renewalmode = RenewOnceThenAutoExpire
EOF
```

## 4 Explicit Renewals and Domain Auction

**4.1. Explicit Renewals**

Most registries offer explicit renewals of domains. This should be requested prior to a domain’s renewal date and is only possible if the maximum registration period of the TLD will not be exceeded.

_Reminder: We advise any manual/explicit renewals to be requested safely before a domain’s renewal date, preferably more than one day ahead of time._

For supported TLDs you can get an explicit renewal via the CentralNic Reseller control panel:

-   Go to the page of the domain.
-   Click the green _Renew_ button on the upper pane.
-   Select the renewal period from the drop-down list.
-   Click _Renew Domain_.

![Explicit Renewal](https://kb.centralnicreseller.com/imagetypes/859w/image_manager__859w_explicit_renewal.png)

![Domain Renewal](https://kb.centralnicreseller.com/imagetypes/859w/image_manager__859w_domain_renewal.png)

You can reach the same result with the following API command:

### Command

```
command    = RenewDomain
domain     = (DOMAIN)
period     = (INT)
expiration = (YEAR of the PAID-UNTIL DATE)
EOF
```

The following TLDs do NOT support an explicit renewal:

| **.AT** | Austria |
| --- | --- |
| **.BE** | Belgium |
| **.CH** | Swiss |
| **.CO.ZA** | South Africa |
| **.DE** | Germany |
| **.DK** | Denmark |
| **.HU** | Hungary |
| **.IS** | Iceland |
| **.IT** | Italy |
| **.JP** | Japan |
| **.LI** | Liechtenstein |
| **.LU** | Luxembourg |
| **.MY** | Malaysia |
| **.NL** | Netherlands |
| **.PΦ** | Russia |
| **.RU** | Russia |
| **.SK** | Slovakia |
| **.SU** | Soviet Union |
| **.UA** | Ukraine |

**4.2 Out of Funds**

Should your account not have funds or credit to pay a domain’s renewal fee in full at the point of renewal, the domain will be left to auto-expire instead and is removed from CentralNic Reseller immediately. To regain/reactivate the domain, a restore will be necessary (see section 5 below). Please make sure to charge your account beforehand sufficiently, including the renewal fee as well as the restore fee (plus taxes if applicable).

**4.3 Selling Domains via Auction**

Domain registrant’s may also want to sell their domains at the end of their lifecycle. For this purpose you can set the renewal mode to **ExpireAuction**. The domain will be transferred a few days before it expires to an auctioneer who will try to sell it. You will receive a profit share if successful. You can set ExpireAuction in the renewal mode drop-down list for specific TLDs (BIZ, .CC, .CO, .COM, .INFO, .ME, .MOBI, .NET, .ORG, .WS, .US). This will appear as the last entry in the list.

## 5 Restores

**Restores** are reactivations of domains that have been deleted from CentralNic Reseller and possibly at the respective registry. These actions can be processed within a limited time as determined in the TLD’s **redemption grace period** (RGP).

Restores are billed separately, prices depend on the TLD and are listed in the price list as usual. Should a domain be restored after it has been deleted at the end of its life cycle, a consecutive renewal will be necessary. Therefore every restore request will automatically set the domain’s renewal mode to RenewOnce and an automated renew will be processed within the next few minutes. Please make sure not to modify the domain’s renewal mode before this renewal has been completed successfully!

_To reiterate: Restores are billed in addition to any renewal fees._

Domains that have been deleted mid-term (i.e. before the end of their life cycle) will be restored as normal and will have their renewal mode set to RenewOnce as well, but no immediate renewal will be executed. This is done at the domain’s upcoming renewal date and until then you have enough time to modify the renewal mode as necessary.

Please note that some ccTLDs may have special procedures and deviate from the general behavior.

You can manually request a restore through the control panel as follows:

-   Go to _Domains._
-   Go to _Former Domains._
-   Search for the domain name in the list.
-   Right-click the domain name and select _Restore._
-   Follow the on-screen instructions.

Via API, the command is:

### Command

```
command	= RestoreDomain
domain	= example.com
EOF
```

Some restores may need manual action by our support team and will therefore not be processed in real-time. This is explicitly stated in our Knowledge Base in the TLD’s restore details. You will receive an automated event/poll message once manually processed restores are completed.

**Restore Summary**

-   Restores are necessary when a domain has been deleted from CentralNic Reseller.
-   Restores after end-term deletions require a consecutive renewal.
-   Restores after mid-term deletions don’t require a consecutive renewal.
-   Restores and renewals are billed separately.

## 6 Best Practices

The CentralNic Reseller renewal system is very flexible and allows for different approaches. As a reseller, you may wish to implement a renewal strategy that helps you to streamline your domain management activities. Below are a few typical considerations commonly encountered.

**6.1 Automatic Renewal vs. Non-Renewal**

Both automatic renewal and non-renewal have their own merits.

CentralNic Reseller reseller accounts are by default pre-configured for auto-renew. It ensures that all domains are automatically renewed on the listed renewal date to avoid unintended domain loss. For a domain deletion, it is necessary to explicitly delete the domain, or change the domain renewal mode to AutoDelete, or AutoDelete before the renewal date is reached.

Settings:  
Account renewal mode: AutoRenew  
Domain renewal modes: Default

Summary:

-   automatic renewal of domains (this is also the default configuration in CentralNic Reseller)
-   counters unintentional domain loss, including unplanned restore costs
-   may lead to unwanted renewals
-   explicit action required for domain deletions

With automatic expiration/deletion, all domains expire by default and thus are deleted from CentralNic Reseller. In order to renew domains, it is necessary to explicitly renew or change the domain’s renewal mode to AutoRenew or RenewOnce prior to the renewal date.

Settings:  
Account renewal mode: AutoExpire or AutoDelete (the difference will be explained below)  
Domain renewal mode: Default

Summary:

-   automatic deletion of domains at the end of the registration period
-   ensures you don’t have to pay for unwanted renewals
-   may lead to unwanted domain loss and possibly to additional restore fees
-   explicit action required for domain renewals

_Note_: Explicit renewals are not possible for all TLDs. We therefore recommend changing the domain’s renewal mode to e.g. RenewOnce. This will renew the domain one time and the system will automatically change the renewal mode back to Default, so the default (expire/delete) would take place again for next time.

**6.2 Expiration vs. Deletion**

While gTLDs show no difference in behavior between deletion and expiration, some ccTLDs do. This may lead to diverging redemption grace periods as well as other changes.

For some TLDs, like .DE and .AT, expiration moves domains back to the registry for direct management by and billing of the registrant. This is a safe method of ensuring a domain’s continued life cycle but also leads to increased costs for the registrant, albeit beyond our and your involvement.

For ccTLDs we strongly suggest you carefully check the corresponding documentation (Knowledge Base and terms and conditions) and decide which renewal mode you prefer.

**6.3 Non-Automated Processing**

You may cover the renewal handling yourself completely, bypassing the built-in CentralNic Reseller renewal system. In this case, it is your responsibility to send explicit renewal and deletion requests in time. We recommend at least one day prior to the listed renewal date to avoid timing issues with CentralNic Reseller's renewal system.

Please also keep in mind that explicit renewals are not supported by all registries. It is necessary to change the domain renewal mode to a “renew” value such as RenewOnce to renew such domains. If you wish to have a consistent renewal handling for all TLDs, it is recommended to work with renewal mode changes in general instead of explicitly renewing domains.

While explicit deletions are supported for most TLDs, it is best practice to let domains expire at the end of the registration period instead of deleting domains explicitly. We therefore recommend setting respective domains to renewal mode AutoDelete or AutoExpire. This will make sure the domain is deleted at the latest time possible.

## 7 Glossary

**Auto Renew Grace Period:** Dedicated period during which a domain is already _renewed_ at the registry but not in CentralNic Reseller yet. The domain may still be _deleted or_ left to _expire_ at its _renewal date_ at no cost.

**Deletion time frame:** The time frame added to the _paid-until date_ to calculate a domain’s _renewal date_.

**Deletion:** Active ending of a domain’s life cycle; may be explicit or automated.

**Expiration date:** The date a domain expires at its registry.

**Expiration:** Passive ending of a domain’s life cycle through non-renewal.

**Explicit deletion:** Deletion not triggered by CentralNic Reseller's renewal system, usually requested through the managing reseller.

**Explicit renewal:** Renewal not triggered by CentralNic Reseller’s renewal system, usually requested through the managing reseller.

**Paid-until date:** The date until which a domain has been paid for in CentralNic Reseller.

**Redemption grace period**: Period after a domain has been deleted but still may be restored.

**Renewal date:** The date a domain’s renewal will be processed in CentralNic Reseller.

**Renewal mode:** Mode of renewal that will be applied on a domain’s next renewal date.

**Renewal:** Extension of a domain’s life cycle; may be explicit or automated.

**Restore:** Reactivation of a deleted domain, usually at an additional fee.
