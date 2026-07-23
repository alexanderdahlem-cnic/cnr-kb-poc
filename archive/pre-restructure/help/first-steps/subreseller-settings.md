---
title: "Subreseller Settings"
---

The Settings for your Subresellers only apply to your Subresellers and not to your own CentralNic reseller account. The Settings can be found in the new CentralNic Reseller control panel by clicking in the left menu on Subreseller -> Settings.  
All Subreseller Settings act as default settings for all your reseller accounts. Depending on the particular settings these can also be locked, i.e. Subresellers (and accounts underneath) can not change this setting. Of course you can also apply individual settings for single accounts. This screenshot shows 3 features of the Subreseller Settings on the tab "General":

-   Applying a default for a setting (1)
-   Locking a setting (2)
-   Check for Individual Settings (3)

Let's take a short look at Individual Settings in this screenshot:

These settings can be altered right here. However, only accounts with respective individual settings differing from the default settings are shown here. If you would like to add further individual settings to a single account, this can be done in the Individual Settings for Subresellers.

## Inheriting Settings to all Subresellers and further Sub-Subreseller accounts

Once you've set your Subreseller Settings the inheritance feature automatically affects all your Subresellers as well as any further layer and thus Sub-Subreseller accounts. The settings are also applied when creating new Subreseller accounts. Meanwhile the same principle applies for your Subresellers once they would create own Subreseller accounts (your Sub-Subreseller). The responsiveness on the other hand guarantees the top-down principle so any change of your Settings might effect all other Subreseller accounts on all layers. Affected Subreseller settings categories:

-   Subreseller
-   General
-   Control Panel

Example: In the case you would disable a certain setting in your default Subreseller settings this setting would be disabled for all Subreseller accounts as well as all Sub-Subreseller accounts that might exist underneath your CentralNic Reseller Account.

## Individual Settings for Subresellers

Next to the default settings it's also possible to apply individual settings for selected Subresellers. Of course this functionality works in both directions. While being able to grant special rights/settings for single Subreseller accounts it is also possible to restrict single or all accounts on single or all settings. The Individual Settings for Subresellers can be found in the new CentralNic Reseller control panel when opening the details of a Subreseller. For example via the left menu "Subreseller" -> Subresellers. As an example we're showing the tab "Settings" -> "General" on this screenshot:

Note that the highlighted options are activated but can not be adjusted, since the default settings have been locked. The other options can still be set for this particular Subreseller account.

## Tab "Subreseller"

On the tab "Subreseller" you can define the basic settings for your Subreseller system.

| **Maximum accounts** | The maximum number of accounts a reseller can add. Value 0 is unlimited. |
| --- | --- |
| **Maximum layers** | The maximum number of layers a reseller can use to add subresellers. Value 0 disables the subreseller system for that reseller. |
| **Free accounts** | The number of accounts a subreseller can add without beeing charged the subreseller account fee. |
| **Pricescale** | The default pricescales for newly created subresellers. |
| **Currency** | The default currency for newly created subresellers. |
| **VAT** | The default VAT percentage for newly created subresellers. |
| **Credit** | The default credit for new created subresellers. |
| **Emergency Credit** | The default emergency renewal credit for newly created subresellers. Note: This credit can only be used for automatic renewals, e.g. for domains. |
| **Language** | The default language for newly created subresellers. |
| **Allowed VAT** | A comma seperated list of allowed VAT percentage values that can be used on subreseller creation. |
| **Invoicerun** | The default invoicerun for newly created subresellers. |

## Tab "General"

The tab "General" offers options applicable to your subresellers. Note: Some of these settings will be inherited to underlying accounts and can be locked.

| **Internal transfer renew** | Internal transfer renew policy. "Default" renews COM, NET, ORG, BIZ, INFO, NAME domains upon internal transfer. "Registry" renews domains according to registry transfer policy. "Norenew" never renews a domain upon internal transfer. This setting only applies for incoming transfers. Note: This setting will be inherited to underlying accounts and can be locked. |
| --- | --- |
| **Explicit unlock objects** | Explicit object unlock required. If switched on the respective object needs to be modified with one single unlock parameter. It is not possible to use this unlock parameter together with other parameters in one modify command. This affects for example the ClientUpdateProhibited setting of a domain. Note: This setting will be inherited to underlying accounts and can be locked. |
| **Show domains in RGP** | Show Registry Grace Period status of domains, according to RFC 3915. If switched on the API response of a StatusDomain command will also show the Registry Grace Period status of a domain. The response of a StatusDomain command will differ for domains which have recently been deleted, i.e. they will be shown, including their Registry Grace Period status. Note: This setting will be inherited to underlying accounts and can be locked. |
| **Domain utilisation** | Allow Key-Systems to take over domains flagged for expiration or deletion in their own portfolio as soon as the domains enter their respective deletion phase. Note: This setting will be inherited to underlying accounts and can be locked. |

## Tab "Control Panel"

Within this tab you can customize the look and feel of your subreseller interface.

| **Upload your Logo** | Ideally in PNG format. The logo will be displayed at the upper left corner of your subreseller interface. |
| --- | --- |
| **Main Color** | The main color will be shown on the top menu. The color codes are in hexadecimal triplet format. Hint: Take a strong color from your CI. |
| **Background Color** | The background color will be shown on the background of your subreseller interface. The color codes are in hexadecimal triplet format. Hint: Take a light color from your CI or a lighter, less saturated version of your main color. |
| **Languages** | Lets you select the offered languages for your subreseller interface. |
| **Imprint URL** | The 'imprint' link on your subreseller interface will be linked to the URL you are providing here. Note: The default imprint URL points to https://www.key-systems.net/en/terms-and-conditions. You should place your own URL here to avoid confusion, |

## Tab "Premium Domains"

Decide if you would like to offer Premium Domains handling to your subresellers.

| **Premium handling** | Activates premium domains using the FEE extensions. |
| --- | --- |
| **Allow simplemode** | Allows simple mode for premium domain handing with X-ACCEPT-PREMIUMPRICE=1 |
