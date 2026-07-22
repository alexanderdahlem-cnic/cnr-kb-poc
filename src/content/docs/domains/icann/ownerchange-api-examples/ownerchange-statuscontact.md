---
title: "OwnerChange: StatusContact"
description: "StatusContact also returns the current ownerchange status..."
---

StatusContact also returns the current ownerchange status.

### Command

```
command = StatusContact
contact = P-ABC1
```

### Response

```
code = 200
description = Command completed successfully
runtime = 0.008
...
property[ownerchange status][0] = REQUESTED|LOSING_APPROVED|GAINING_APPROVED
```
