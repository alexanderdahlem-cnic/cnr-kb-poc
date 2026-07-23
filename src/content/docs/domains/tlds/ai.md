---
title: ".ai"
description: "ccTLD  ● Registration period: 2 years, 3 years, 4 years, 5 years, 6 years, 7 years, 8 years, 9 years, 10 years ● Allowed character length: 1 - 63 characters  ➥ "
tldspecsHtml: "<h2>TLD Specifications</h2> <div class=\"tldinfo\"> <div class=\"property\"> <div class=\"name\">Zone</div> <div class=\"description\">.ai<div class=\"tldtype\"><span class=\"cctld\" title=\".ai is a Country Code Top Level Domain\">ccTLD</span></div><!--/.tldtype--> </div> </div><!--/.property--> <div class=\"property country\"><div class=\"name\">Country</div><div class=\"description flag\"><img class=\"flag\" src=\"/cnr-kb-poc/media/dist/img/flags/ai.png\" alt=\"Anguilla flag\"><a href=\"https://en.wikipedia.org/wiki/Anguilla\" rel=\"nofollow\" target=\"_blank\" title=\"https://en.wikipedia.org/wiki/Anguilla\">Anguilla</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration period</div><div class=\"description\">2 years<br>3 years<br>4 years<br>5 years<br>6 years<br>7 years<br>8 years<br>9 years<br>10 years<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal period</div><div class=\"description\">2 years<br>3 years<br>4 years<br>5 years<br>6 years<br>7 years<br>8 years<br>9 years<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed character length</div><div class=\"description\">1 - 63 characters</div></div><!--/.property--><div class=\"property\"><div class=\"name\">TLD supports</div><div class=\"description\"><div class=\"dnssec\"><span title=\".ai supports DNSsec\">DNSsec</span></div></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer locks possible</div><div class=\"description\"><span class=\"yes\">yes</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal on transfer</div><div class=\"description\"><span>yes, 2 years</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Authcode length</div><div class=\"description\">8 - 32 characters</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed Nameservers</div><div class=\"description\">1 - 13</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Deletion Timeframe</div><div class=\"description\">43 days after expiration date</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Redemption Period</div><div class=\"description\">30 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Server</div><div class=\"description\">https://zenaida.cate.ai/</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Web WHOIS</div><div class=\"description\"><a class=\"external\" href=\"https://whois.nic.ai/whois.jsp\" target=\"_blank\" rel=\"nofollow\" title=\"https://whois.nic.ai/whois.jsp\">https://whois.nic.ai/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry</div><div class=\"description\"><a class=\"external\" href=\"https://epp.whois.ai\" target=\"_blank\" rel=\"nofollow\" title=\"https://epp.whois.ai\">https://epp.whois.ai/</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Terms and Conditions</div><div class=\"description\"><a class=\"external\" href=\"http://whois.ai/faq.html\" target=\"_blank\" rel=\"nofollow\" title=\"http://whois.ai/faq.html\">http://whois.ai/...</a></div></div><!--/.property--> </div><!--/.tldinfo-->"
---

:::tldnav

- [API commands](#api-commands)
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
domain          = yourdomain.ai
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

:::command[Command]

```text
command = ModifyDomain
domain  = yourdomain.ai
```

:::

### Domain Renewal

_(API Command reference » [RenewDomain](../../../api/api-command/renewdomain/))_ 

:::command[Command]

```text
command    = RenewDomain
domain     = yourdomain.ai
period     = (INT)
expiration = (INT)
```

:::

### Domain Deletion

_(API Command reference » [DeleteDomain](../../../api/api-command/deletedomain/))_ 

:::command[Command]

```text
COMMAND = DeleteDomain
DOMAIN = yourdomain.ai
```

:::

### Domain Transfer

_(API Command reference » [TransferDomain](../../../api/api-command/transferdomain/))_ 

:::command[Command]

```text
command = TransferDomain
domain = yourdomain.ai
action = REQUEST
period = 2
auth = (TEXT)
```

:::

-   A ._ai_ domain transfer can be initiated with a so-called authorisation code, which can be obtained from the current registrar through the owner or Admin-C of the domain.
-   A ._ai_ domain transfer can also be initiated without authcode. The losing registrar has to confirm or reject the transfer of the domain within 7 days.
-   Upon successful transfer, .AI domains are renewed by two years and billed accordingly.

### Domain Restore

_(API Command reference » [RestoreDomain](../../../api/api-command/restoredomain/))_ 

:::command[Command]

```text
command = RestoreDomain
domain  = yourdomain.ai
```

:::

## Domain Restrictions

There are no restrictions for _.ai_
