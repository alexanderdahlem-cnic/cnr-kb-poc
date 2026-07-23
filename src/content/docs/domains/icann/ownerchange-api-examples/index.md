---
title: "OwnerChange: Modify Domain"
description: "To initate an OwnerChange..."
sidebar:
  order: 640
  label: "Modify Domain"
---

To initate an OwnerChange.

:::command[Command]

```text
command = ModifyDomain
domain = example.com
ownercontact0 = P-ABC2
TriggerFOA = 0|1      <---- Optional. Triggers sending of FOA Mail, even in Designated Agent Mode.
```

:::

 

:::response[Response]

```text
code = 200
description = Command completed successfully; OwnerChange pending confirmation
property[ownerchange status][0] = REQUESTED
```

:::

### Attributes

| **TRIGGERFOA** | 1 forces the system to send FOA mails, even if the reseller account uses the Designated Agent Mode  
 |
| --- | --- |
| **TRIGGERDA** | 1 forces the system to use the designated agent mode for the relevant operation, even if the reseller account uses FOA Mode. This setting needs to be enabled within the reseller properties (Account --> Settings --> ICANN Transfer). |

## CheckOnly

Precheck for material changes

-   The CHECKONLY=1 parameter can be used to check if a change of the owner contact is a material change and the FOA process is mandatory, without performing any changes to the domain.

:::command[Command]

```text
command = ModifyDomain
domain = example.tld
ownercontact0 = P-ABC1
checkonly = 1
```

:::

### Response on material change

:::response[Response]

```text
code = 200
description = Command completed successfully; Check only
property[ownerchange status][0] = REQUESTED
```

:::

### Response on non-material change

:::response[Response]

```text
code = 200
description = Command completed successfully; Check only
```

:::
