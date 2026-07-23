---
title: "OwnerChange in DA-Mode"
description: "OwnerChange Procedures in Designated Agent Mode. ➥ Learn more!"
sidebar:
  order: 590
---

This procedure outlines the technical OwnerChange process in Designated Agent Mode.

1.  Request OwnerChange via ModifyDomain.
2.  As long as Key-Systems and Reseller act as Designated Agent for both, Old and New Registrant, modifications are carried out instantly.
    1.  Otherwise: Use parameter TriggerFOA=1 and send FOA EMail to Old/New Registrant.
    2.  Registrant approves owner change via Link.
3.  Send DOMAIN\_MODIFICATION::MODIFICATION\_SUCCESSFUL event to reseller.
4.  Send information mail to Old and New Registrant.

Compared to the FOA Mode, the workflow is significantly simpler in Designated Agent Mode, as all modifications and thus the OwnerChange is automatically approved.

## TransferLock Removal for losing registrant

This feature needs to be enabled by SetProperty / ICANNTRANSFER-OWNERCHANGE-REMOVE-TRANSFERLOCK = 1. It adds a link to the Designated Agent confirmation email, which enables the losing registrant, to remove the transfer lock and to skip the 60 day transfer lock phase.

:::command[Command]

```text
command = SetProperty
ICANNTRANSFER-OWNERCHANGE-REMOVE-TRANSFERLOCK = 1
```

:::
