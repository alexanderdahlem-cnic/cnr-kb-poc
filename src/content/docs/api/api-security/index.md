---
title: "API Security"
sidebar:
  order: 80
---

## Set IP addresses/ranges for all connections (IP whitelisting)

The new security feature ["IP whitelisting"](../../help/account-security/ip-whitelist/) is active for our API gateways. The configuration options for this feature are available in your system settings in the CentralNic Reseller Control Panel.

By default, the IP whitelisting functionality is disabled. You can add up to five (5) IPv4 addresses/ranges. When IP whitelisting is enabled, all connections via EPP, SOAP, HTTPS, XRRP, and XMLRPC are checked against the IP addresses/ranges listed in the whitelist. The settings take effect as soon as the connection is re-established; open connections continue to work.

Please note that the Control Panel is not included in the IP whitelisting! Since this is a new registrar setting, IP whitelisting also supports the inheritance functionality for subresellers ([Inheriting Settings to all Subresellers and further Sub-Subreseller accounts](../../help/first-steps/subreseller-settings/)).
