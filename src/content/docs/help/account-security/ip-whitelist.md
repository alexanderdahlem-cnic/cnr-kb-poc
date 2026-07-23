---
title: "IP Whitelist"
sidebar:
  order: 1970
---

You can restrict access to the Control Panel login of your CentralNic Reseller account as well to access via API to listed IP addresses. This way you can make sure only IP addresses you have defined can access your account. Please keep in mind that when using dial-up IP addresses these might change. We don't want you to lock yourself out of your account.

You can set up IPv4 addresses that are allowed to access your CentralNic Reseller account via control panel or API. Single IPv4 addresses or ranges from 24-30 are allowed. (e.g. 192.0.2.42 or 192.0.2.42/27)

Important: Internal and reserved IPv4 addresses will not work! Please use your external IPv4 address(es) connecting to our API gateways.

You can find and edit your IP Whitelist settings in the control panel of your CentralNic Reseller control panel via the User menu on the upper right side -> Settings -> Account Data -> Security.

![User menu > Settings](/cnr-kb-poc/media/imagetypes/859w/image_manager__859w_user_menu_settings.png)

![CNIC\_general\_settings\_system\_ip\_whitelist](/cnr-kb-poc/media/imagetypes/859w/image_manager__859w_cnic_general_settings_system_ip_whitelist.png)

Per Default all settings are set to "Use Default" which means the settings of the parent account will be used. This is in particular interesting for the Sub-Reseller system, as you can define defaults and even lock those settings.

To **activate** the IP Whitelist click the "Use Default" switches and choose "Yes" so the IP Whitelist ist activated.

**IP Whitelist** refers to IP whitelisting for the API gateways.

**IP Whitelist WI** refers to IP whitelisting for the control panel.

When all IP addresses are entered click on **Save Changes** on the lower right side to save your settings.

Below an exemplary setting. The fictional IP address 123.456.789.012 has been whitelisted for control panel and API access.

![IP Whitelist Settings](/cnr-kb-poc/media/imagetypes/859w/image_manager__859w_ip_whitelist_settings.png)
