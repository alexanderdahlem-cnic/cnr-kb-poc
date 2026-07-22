---
title: "QueryAclList - User Example"
---

Shows all locations with granted rights of a given user.

### Command

```
command = QueryAclList
username=user2
```

### Response

```
code = 200
description = Command completed successfully
runtime = 0.085
queuetime = 0
property[column][0] = location
property[column][1] = right
property[column][2] = rightnames
property[count][0] = 3
property[first][0] = 0
property[last][0] = 2
property[limit][0] = 1000
property[location][0] = FTP
property[right][0] = 255
property[rightnames][0] = RENEW,CHECK,DELETE,MODIFY,ADD,QUERY,STATUS,TRANSFER
property[location][1] = REGISTRAR
property[right][1] = 255
property[rightnames][1] = RENEW,CHECK,DELETE,MODIFY,QUERY,ADD,STATUS,TRANSFER
property[location][2] = TOOL
property[right][2] = 247
property[rightnames][2] = STATUS,ADD,QUERY,TRANSFER,MODIFY,RENEW,CHECK
property[total][0] = 3
```

### Attributes

| **username** | (TEXT) - Mandatory. "username" is either name of a user or a group. |
| --- | --- |
