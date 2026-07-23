---
title: "Reseller Settings"
description: "Example API Command for Reseller Settings ➥ Learn more!"
sidebar:
  order: 560
---

| **ICANNTRANSFER-ownerchange-mode** | Choose between FOA Mode (default) and Designated Agent Mode. |
| --- | --- |
| **ICANNTRANSFER-ownerchange-transferlock-override** | Registrant can opt-out the transfer lock (Yes=1|No=0). Only applicable if FOA Mode is selected. |
| **ICANNTRANSFER-ownerchange-emailsender** | Sets the FROM address of the ICANN-OwnerChange email. Default: noreply@emailverification.info |
| **ICANNTRANSFER-ownerchange-emailsubject** | Sets the SUBJECT of the ICANN-OwnerChange email. Default: ICANN inter-registrant transfer |
| **ICANNTRANSFER-ownerchange-confirmationlink** | Sets the confirmation link which is displayed in the ICANN-OwnerChange email. Default: https://icann-transfers.key-systems.net/ |
| **ICANNTRANSFER-ownerchange-infopagelink** | Sets the info page link which is displayed in the ICANN-OwnerChange email. Default: https://www.icann.org/resources/pages/transfer-policy-2016-06-01-en#II.A |
| **ICANNTRANSFER-ownerchange-freetext0 .. 2** | Sets the freetext which is displayed in the ICANN-OwnerChange email |

## Example API Command for Reseller Settings

:::command[Command]

```text
 command=setproperty
 ICANNTRANSFER-ownerchange-mode = FOA|DESIGNATED_AGENT
 ICANNTRANSFER-ownerchange-transferlock = 0|1
 ICANNTRANSFER-ownerchange-transferlock-override = 0|1
 ICANNTRANSFER-ownerchange-emailsender = noreply@emailverification.info
 ICANNTRANSFER-ownerchange-emailsubject = ICANN inter-registrant transfer
 ICANNTRANSFER-ownerchange-confirmationlink = https://icann-transfers.key-systems.net/
 ICANNTRANSFER-ownerchange-infopagelink = https://www.icann.org/resources/pages/transfer-policy-2016-06-01-en#II.A
 ICANNTRANSFER-ownerchange-freetext0..2 =
 ICANNTRANSFER-ownerchange-footer0..2 = Your ICANN accredited registrar
```

:::
