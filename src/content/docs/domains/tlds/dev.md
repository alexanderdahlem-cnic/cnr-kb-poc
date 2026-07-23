---
title: ".dev"
description: "New gTLD  ● Registration period: 1-10 years ● Allowed character length: 2 - 63 characters  ➥ Learn more about .dev"
tldspecsHtml: "<h2>TLD Specifications</h2> <div class=\"tldinfo\"> <div class=\"property\"> <div class=\"name\">Zone</div> <div class=\"description\">.dev<div class=\"tldtype\"><span class=\"ngtld\" title=\".dev is a new New Generic Top Level Domain\">New gTLD</span></div><!--/.tldtype--> </div> </div><!--/.property--> <div class=\"property\"><div class=\"name\">Registration period</div><div class=\"description\">1-10 years<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal period</div><div class=\"description\">1-10 years<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed character length</div><div class=\"description\">2 - 63 characters</div></div><!--/.property--><div class=\"property\"><div class=\"name\">TLD supports</div><div class=\"description\"><div class=\"ipv6\"><span title=\".dev supports IPv6\">IPv6</span></div><div class=\"dnssec\"><span title=\".dev supports DNSsec\">DNSsec</span></div><div class=\"idn\"><span title=\".dev supports IDN\">IDN</span></div><div class=\"whoisprivacy\"><span title=\".dev supports Whois Privacy\">WhoisPrivacy</span></div></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer locks possible</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal on transfer</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Authcode length</div><div class=\"description\">8 - 32 characters</div></div><!--/.property--><div class=\"property handles\"><div class=\"name\">Handle updates</div><div class=\"description\"><span class=\"yes\">yes</span><em>All owner changes of gTLDs will apply the <a href=\"../../icann/icann-ownerchange/\">ICANN Transfer policy</a>.</em></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed Nameservers</div><div class=\"description\">1 - 13</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Autorenew Grace Period</div><div class=\"description\">35 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Deletion Timeframe</div><div class=\"description\">35 days after expiration date</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Redemption Period</div><div class=\"description\">30 days</div></div><!--/.property--> </div><!--/.tldinfo-->"
---

:::tldnav

- [API commands](#api-commands)
- [Extensions](#domain-extensions)
- [IDN](#supported-idn-scripts)

:::

## API commands

Please find in the following a set of the most commonly used standard API commands in order to register, modify, renew, and transfer a domain name.

:::commandlist

- [AddDomain](#domain-registration)
- [ModifyDomain](#domain-modification)
- [RenewDomain](#domain-renewal)
- [DeleteDomain](#domain-deletion)
- [TransferDomain](#domain-transfer)
- [RestoreDomain](#domain-restore)

:::

### Domain Registration

_(API Command reference » [AddDomain](../../../api/api-command/adddomain/))_

Sample text:  
._dev_ is a more secure domain, meaning that HTTPS is required for all ._dev_ websites. You can buy your ._dev_ domain name now, but in order for it to work properly in browsers you must first configure HTTPS serving. For more information about configuring HTTPS, including resources to obtain an SSL certificate, please visit \[link to registrar page on SSL, or Let’s Encrypt\]. \[Follow by registrar option to add certificate to cart.\]

Please note: The SSL requirement is enforced at the browser level, so there is no mandated order of purchase. The HSTS Preload list, to which ._dev_ is inscribed, only forces encryption on HTTPS connections, thus, ._dev_ domain names that do not have an SSL certificate configured may still be used for other services like e-mail and non-browser based uses such as defensive registrations.

:::exception[Exception]

```text
command = AddDomain
domain = yourdomain.dev
period = 1
ownercontact0 = (CONTACT)
admincontact0 = (CONTACT)
techcontact0 = (CONTACT)
billingcontact0 = (CONTACT)
nameserver0 = (NAMESERVER) | (NULL)
nameserver1 = (NAMESERVER) | (NULL)
X-ACCEPT-SSL-REQUIREMENT = 1
```

:::

### Domain Modification

_(API Command reference » [ModifyDomain](../../../api/api-command/modifydomain/))_ 

:::command[Command]

```text
command = ModifyDomain
domain  = yourdomain.dev
```

:::

### Domain Renewal

_(API Command reference » [RenewDomain](../../../api/api-command/renewdomain/))_ 

:::command[Command]

```text
command    = RenewDomain
domain     = yourdomain.dev
period     = (INT)
expiration = (INT)
```

:::

### Domain Deletion

_(API Command reference » [DeleteDomain](../../../api/api-command/deletedomain/))_ 

:::command[Command]

```text
COMMAND = DeleteDomain
DOMAIN = yourdomain.dev
```

:::

### Domain Transfer

_(API Command reference » [TransferDomain](../../../api/api-command/transferdomain/))_ 

:::command[Command]

```text
command = TransferDomain
domain = yourdomain.dev
action = REQUEST
auth = (TEXT)
```

:::

#### Transfer procedure

-   The transfer is submitted to the registry and the losing registrar is automatically notified by them.
-   The losing registrar sends an email to the owner (and optionally admin) contact, informing about the transfer; this may include options to approve and/or deny the transfer. If neither explicitly approved nor denied, the transfer will be automatically finalized after 5 days.

#### Transfer notes

-   A ._dev_ domain transfer must be initiated with a so-called authorisation code, (auth-code) which can be obtained from the current registrar through the owner/admin contact of the domain.
-   Ensure that your respective domain does not have a lock-status (clientTransferProhibited and/or serverTransferProhibited). This can be seen in WHOIS.
-   If the domain has a client-side transfer lock, the owner can ask the current registrar to have the lock removed.

These procedures only apply for domain transfers between registrars. For internal transfers between resellers, please consult our documentation about [internal transfers/usertransfers.](../../transfers/internal-transfers/)

### Domain Restore

_(API Command reference » [RestoreDomain](../../../api/api-command/restoredomain/))_ 

:::command[Command]

```text
command = RestoreDomain
domain  = yourdomain.dev
```

:::

## Domain Extensions

| X-ACCEPT-SSL-REQUIREMENT | 1  
  
Confirmation that the process required for the registration is implemented on the reseller side and the respective options are presented to the registrant prior to the registration. |
| --- | --- |
| X-CHANNEL-ACCEPT-HIGHLY-REGULATED-TAC = 1 |  |

## Supported IDN Scripts

The following IDN scripts are supported by _.dev_.  
Provide the LANGUAGE TAG corresponding to your desired IDN within the AddDomain command as X-IDN-LANGUAGE extension.

| Japanese | JP |
| --- | --- |

Get more information of "IDN tables", which represent permitted code points (letters) allowed for Internationalised Domain Name registrations in particular registries on [IANA Repository of IDN Practices](https://www.iana.org/domains/idn-tables).
