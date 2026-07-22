---
title: "OwnerChange: StatusOwnerChange"
description: "To explicitly check the status of an OwnerChange in detail..."
---

To explicitly check the status of an OwnerChange in detail.

### Command

```
command = StatusOwnerChange
domain = example.com
```

### Response

```
code = 200
description = Command completed successfully
property[domain][0] = example.com
property[status][0] = REQUESTED
property[requested date][0] = 2000-01-01 00:00:00
property[expire date][0] = 2000-01-15 00:00:00
property[losing registrant][0] = P-ABC1
property[gaining registrant][0] = P-ABC2
```

### Attributes

| **REQUESTED** | OwnerChange is requested but none has been confirmed  
 |
| --- | --- |
| **LOSING\_APPROVED** | The losing registrant has approved  
 |
| **GAINING\_APPROVED** | The gaining registrant has approved  
 |
| **SUCCESS** | Losing and gaining registrant have both approved |
