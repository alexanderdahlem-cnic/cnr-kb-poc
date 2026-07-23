---
title: "OwnerChange: StatusContact"
description: "StatusContact also returns the current ownerchange status..."
sidebar:
  order: 700
  label: "StatusContact"
---

StatusContact also returns the current ownerchange status.

:::command[Command]

```text
command = StatusContact
contact = P-ABC1
```

:::

 

:::response[Response]

```text
code = 200
description = Command completed successfully
runtime = 0.008
...
property[ownerchange status][0] = REQUESTED|LOSING_APPROVED|GAINING_APPROVED
```

:::
