---
title: "StatusAcl Example"
---

Shows granted rights for a specific location of a given user or group.

### Command

```
command = StatusAcl
username = user1
location = DOMAIN
```

### Response

```
code = 200
description = Command completed successfully
property[acl][0] = MODIFY
property[acl][1] = STATUS
property[acl][2] = ADD
property[location][0] = DOMAIN
property[rights][0] = 7
property[username][0] = user1
```

### Attributes

| **username** | (TEXT) - Mandatory. "username" is either name of a user or a group.  
 |
| --- | --- |
| **location** | (TEXT) - Mandatory; see Locations list. |
