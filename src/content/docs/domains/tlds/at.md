---
title: ".at"
description: "ccTLD  ● Registration Time: real-time ● Registration period: 1 year ● Allowed character length: 1 - 63 characters  ➥ Learn more about .at"
tldspecsHtml: "<h2>TLD Specifications</h2> <div class=\"tldinfo\"> <div class=\"property\"> <div class=\"name\">Zone</div> <div class=\"description\">.at<div class=\"tldtype\"><span class=\"cctld\" title=\".at is a Country Code Top Level Domain\">ccTLD</span></div><!--/.tldtype--> </div> </div><!--/.property--> <div class=\"property country\"><div class=\"name\">Country</div><div class=\"description flag\"><img class=\"flag\" src=\"/cnr-kb-poc/media/dist/img/flags/at.png\" alt=\"Austria flag\"><a href=\"https://en.wikipedia.org/wiki/Austria\" rel=\"nofollow\" target=\"_blank\" title=\"https://en.wikipedia.org/wiki/Austria\">Austria</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration Time</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration period</div><div class=\"description\">1 year<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal period</div><div class=\"description\">1 year<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed character length</div><div class=\"description\">1 - 63 characters</div></div><!--/.property--><div class=\"property\"><div class=\"name\">TLD supports</div><div class=\"description\"><div class=\"ipv6\"><span title=\".at supports IPv6\">IPv6</span></div><div class=\"dnssec\"><span title=\".at supports DNSsec\">DNSsec</span></div><div class=\"idn\"><span title=\".at supports IDN\">IDN</span></div></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer locks possible</div><div class=\"description\"><span class=\"no\">no</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal on transfer</div><div class=\"description\"><span class=\"no\">no</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer time</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Authcode length</div><div class=\"description\">6 - 16 characters</div></div><!--/.property--><div class=\"property handles\"><div class=\"name\">Handle updates</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Preconfigured DNS</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed Nameservers</div><div class=\"description\">2 - 8</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Deletion Timeframe</div><div class=\"description\">3 days prior to paiduntil date</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Redemption Period</div><div class=\"description\">59 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Update</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Server</div><div class=\"description\">whois.nic.at</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Web WHOIS</div><div class=\"description\"><a class=\"external\" href=\"https://www.nic.at/en/my-at-domain/domain-search/whois\" target=\"_blank\" rel=\"nofollow\" title=\"https://www.nic.at/en/my-at-domain/domain-search/whois\">https://www.nic.at/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry</div><div class=\"description\"><a class=\"external\" href=\"http://www.nic.at\" target=\"_blank\" rel=\"nofollow\" title=\"http://www.nic.at\">http://www.nic.at/</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Terms and Conditions</div><div class=\"description\"><a class=\"external\" href=\"https://www.nic.at/en/terms\" target=\"_blank\" rel=\"nofollow\" title=\"https://www.nic.at/en/terms\">https://www.nic.at/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Dispute Policy</div><div class=\"description\"><a class=\"external\" href=\"https://www.nic.at/en/good_to_know/legal-backgrounds/privacy-policy\" target=\"_blank\" rel=\"nofollow\" title=\"https://www.nic.at/en/good_to_know/legal-backgrounds/privacy-policy\">https://www.nic.at/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry Connection</div><div class=\"description\"><div class=\"accreditation\"><span title=\"Directly accredited\">Directly accredited</span></div></div></div><!--/.property--> </div><!--/.tldinfo-->"
---

:::tldnav

- [API commands](#api-commands)
- [Extensions](#domain-extensions)
- [Restrictions](#domain-restrictions)

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

:::command[Command]

```text
command         = AddDomain
domain          = yourdomain.at
period          = (INT)
ownercontact0   = (CONTACT)
admincontact0   = (CONTACT)
techcontact0    = (CONTACT)
billingcontact0 = (CONTACT)
nameserver0	= (NAMESERVER)
nameserver1 	= (NAMESERVER)
```

:::

### Domain Modification

_(API Command reference » [ModifyDomain](../../../api/api-command/modifydomain/))_ 

:::command[Standard command]

```text
command = ModifyDomain
domain  = yourdomain.at
```

:::

#### Change of registrant

:::exception[Exception]

```text
command       = TradeDomain
domain        = yourdomain.at
ownercontact0 = (CONTACT)
```

:::

The ._at_ owner change process has adapted the FoA procedure, where an email will be sent to the current and future owner of the domain, who have to approve the owner change. If no agreement is given, the trade request expires. The mandatory form will be omitted.

The registration period will not be affected. Trade requests expire after 10 days!

Sending a new trade request during an already pending trade, will cancel the previous one.

### Domain Renewal

:::command[Command]

```text
RenewDomain
```

:::

 is not available for .at TLDs.

._at_ domains cannot be renewed explicitly. To renew a ._at_ domain you have to set the domain renewal mode or default renewal mode to **AUTORENEW** or **RENEWONCE**.

### Domain Deletion

_(API Command reference » [DeleteDomain](../../../api/api-command/deletedomain/))_ 

:::command[Command]

```text
COMMAND = DeleteDomain
DOMAIN = yourdomain.at
```

:::

For most TLDs there is no difference between AUTODELETE and AUTOEXPIRE. But there is a difference for ._at_ domain names. If a ._at_ domain name is set to AUTOEXPIRE the invoice recipient will be changed to the owner at the registry (billwithdraw). In this case the owner will receive an invoice and has to pay the registry for a renewal. If a ._at_ domain is set to AUTODELETE it will be deleted at the registry.

### Domain Transfer

_(API Command reference » [TransferDomain](../../../api/api-command/transferdomain/))_ 

:::command[Standard command]

```text
command = TransferDomain
domain = yourdomain.at
action = REQUEST
auth = (TEXT)
```

:::

The authInfo will need to have at least eight characters consisting of one number, one alphabet and one special character.  
Standard process

-   In the standard AuthInfo process the domain holder who wants to change the registrar, requests an AuthInfo from the losing registrar and forwards it to the new registrar. By sending a transfer request containing the AuthInfo, the new registrar takes over the domain. The transfer is processed immediately
-   If the AuthInfo standard procedure does not work, there are two emergency methods for these special cases.
    -   The special case token-request and
    -   The Emergency-process, if the domain holder's e-mail address is not working. If the Emergency-process is required, please contact [support@centralnicreseller.com](mailto:support@centralnicreseller.com)

#### Transfer request WITHOUT AuthInfo(Token Request)

:::exception[Exception]

```text
command = TransferDomain
domain  = yourdomain.at
action  = request
X-AT-REQUESTAUTHCODE	= 1
```

:::

The token request for a domain transfer is one of the emergency methods. It can be used, for example, if the auth info does not work or the current registrar is not giving out the auth info to the registrant:

1.  The new/gaining registrar requests a token
2.  Nic.at sends a token code to the e-mail address of the domain holder. This token is valid for 21 days and is only valid for this specific registrar who requested the token.
3.  The domain holder will have to forward the token code to the new registrar.
4.  The new registrar will then send a transfer request containing the token code he has received from the holder.
5.  The transfer is processed within approximately 5 minutes.

### Domain Restore

_(API Command reference » [RestoreDomain](../../../api/api-command/restoredomain/))_ 

:::command[Command]

```text
command = RestoreDomain
domain  = yourdomain.at
```

:::

-   Restores are possible within 59 days after deletion, if the domain was deleted explicitly with the DeleteDomain command or set to **AUTODELETE**.
-   Restores are not possible if the domain was set to **AUTOEXPIRE** or was pushed back to the registry with the PushDomain command.

## Domain Extensions

| X-AT-REQUESTAUTHCODE | 1  
Only in special cases! |
| --- | --- |

## Domain Restrictions

-   P.O. box **NOT** allowed as owner address
-   The customer needs to be fully informed about the product, the price, conditions, suppliers etc. before, during and after the order as well as there need to be information about his right to withdraw.
    -   According to Austrian law, by registering a ._at_ domain, a contract takes place between Domain-Holder and NIC.at.
-   You can find additional legal information regarding ._at_ registrations on the [registry website](https://www.nic.at/en/good_to_know/legal-backgrounds/domain-law).
-   Changes to whois output in relation to GDPR for ._at_ domain names are explained on the [registry website](https://www.nic.at/en/good_to_know/legal-backgrounds/privacy-policy)
