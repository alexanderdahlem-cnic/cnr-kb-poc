---
title: "Applications"
sidebar:
  order: 330
---

## AddDomainApplication

Example of a domain application with premium pricing.

:::command[Command]

```text
command         = AddDomainApplication
domain          = premium0080.menu
ownercontact0   = P-MAM25
admincontact0   = P-MAM25
techcontact0    = P-MAM25
billingcontact0 = P-MAM25
CLASS           = MENU-GOLIVE
x-fee-amount    = 1487.50
```

:::

## ModifyDomainApplication (activate GTLD-PREORDER)

Example of changing a gTLD pre-order to GOLIVE application while accepting the premium pricing.

:::command[Command]

```text
command      = ModifyDomainApplication
application  = 10000876
class        = MENU-GOLIVE
x-fee-amount = 1487.50
pay          = 1
```

:::
