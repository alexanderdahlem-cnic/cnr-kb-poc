---
title: "Premium Domain Handling"
description: "The new premium domain handling will offer the possibility to submit applications and register premium domain names through the automated RRPproxy system."
sidebar:
  order: 290
---

The premium domain handling described below offers both, the possibility to submit applications and register premium domain names through the automated CentralNic Reseller system by using the EPP-Fee extension. It is a fully automated handshake process between the CentralNic Reseller and the registries on one side and between the CentralNic Reseller and the registrar on the other side.

## Upcoming Changes

Currently, we have all premium domain names blacklisted with a notification to contact our support for ordering these domain names. With the new system, we are changing the way premium domains are handled on a registrar basis so every registrar can take his own decision on how he wants to handle premium domain names.

The new premium domain system will be disabled by default for each registrar, which causes our system to return "domain name not available" on availability checks for a premium domain name through our API. This will avoid the problem most registrars faced with the old implementation mentioned in the introduction.

We will add a new position in the registrar account settings where the premium domain handling can be activated using the fee extension through our API. The activation of the premium domain handling will require the registrar to implement the fee extension into our API connection. For all registrars that are not interested in premium domain names, no changes are required!

For registrars that want to manually handle premium domain names through our Control Panel (CP), there are also no changes required!

Premium domain names can be registered and managed through our Control Panel without activating the premium domain settings! The Control Panel will always show additional information and specific prices for premium domain names so they cannot be mistakenly registered.

Already registered premium domain names will not be out of control if the premium domain handling is not activated, since automated renewals will still work for all domain names. However, explicit interactions with premium domain names like creates, explicit renewals (not auto renewals), transfers, trades (billable trades only) and restores will require the implementation of the fee extension using the API (not the CP).

The fee extension is more or less a handshake process that ensures correct accounting since most new gTLD registries could change the price of a domain name every second! In addition to a regular availability check, registrars will also request the prices in the same API call. The submission of the fee extensions will be required for premium domain name registrations afterwards.

Example availability check for premium.name with the price request for a 2 year registration.

:::command[Command]

```text
command = CheckDomain
domain = premium.name
x-fee-command0 = create
x-fee-domain0 = premium.name
x-fee-period0 = 2
x-fee-periodtype0 = YEAR
```

:::

 

:::response[Response]

```text
code = 210
description = Domain name available
property[x-fee-amount][0] = 235.0000
property[x-fee-application][0] = 0.0000
property[x-fee-class][0] = premium
property[x-fee-command][0] = create
property[x-fee-currency][0] = USD
property[x-fee-domain][0] = premium.name
property[x-fee-launchphase][0] =
property[x-fee-period][0] = 2
property[x-fee-periodtype][0] = YEAR
```

:::

Example AddDomain for premium.name with fee extension

If the price at the registry changes between the check and the creation, the handshake will fail to prevent false accountings. For regular domain names, the fee extension handshake will not be required!!

:::command[Command]

```text
command=AddDomain
domain=premium.name
ownercontact0=...
nameserver0=...
...
x-fee-amount=235.00
```

:::

 

:::response[Response]

```text
code = 200
description = Command completed successfully
property[x-fee-amount][0] = 235.0000
property[x-fee-application][0] = 0.0000
property[x-fee-periodtype][0] = YEAR
```

:::

We are working with amounts with four decimals!

Due to compatibility reasons to our current premium domain handling, we will offer an additional premium domain setting "allow-simplemode". This setting can be enabled in connection with an active premium domain handling. Instead of providing the correct handshake, it will be possible to just send X-ACCEPT-PREMIUMPRICE=1 in any API call to successfully pass the handshake.

-   We strongly recommend **NOT** using the simplemode and implement the fee extension handshake instead!

Sending X-ACCEPT-PREMIUMPRICE=1 for a regular domain name process will not cause an error, even if the premium domain system is not activated or the domain name is not a premium domain name.

**IMPORTANT NOTE**

Registrars with active premium domain handling will not receive any fee extensions in the availability check response through our API if they did not request prices in the availability check. In that case, it is not possible to determine, if it is a premium domain name or not. So we strongly recommend to add fee extensions in all availability checks when premium domain handling is activated.

The fee extensions are also available for regular domain names but are mandatory for premium domain names. When the fee extension is provided in a regular domain registration, the amount will be checked and will return an error if the handshake does not succeed.

Even though the X-FEE-CURRENCY is available in the API, the system will return an error if the registrar requests a currency that does not match his own account currency! Therefore, we recommend not to set any value in the X-FEE-CURRENCY parameter provided to the CentralNic Reseller. The X-FEE-CURRENCY returned to the registrar in availability check responses will always match the current registrar's CentralNic Reseller account currency.
