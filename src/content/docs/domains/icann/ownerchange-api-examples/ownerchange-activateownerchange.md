---
title: "OwnerChange: ActivateOwnerChange"
description: "ActivateOwnerChange is used to finish an OwnerChange using the respective &quot;action&quot; parameter..."
---

ActivateOwnerChange is used to finish an OwnerChange using the respective "action" parameter.

-   Approve: To approve an OwnerChange request.
-   Deny: To reject an OwnerChange request.
-   Cancel: To cancel a pending OwnerChange request.

### Approve OwnerChange request.

Approve OwnerChange only works with respective trigger code. Transferlock can be set optionally.

### Command

```
command = ActivateOwnerChange
action = APPROVE
trigger = 1234567890
transferlock = 1
```

### Reject OwnerChange request

Reject OwnerChange request only works with respective trigger code.

### Command

```
command = ActivateOwnerChange
action = DENY
trigger = 1234567890
```

### Cancel OwnerChange request

Cancel OwnerChange request only works with respective domain name.

### Command

```
command = ActivateOwnerChange
domain = example.com
action = CANCEL
```
