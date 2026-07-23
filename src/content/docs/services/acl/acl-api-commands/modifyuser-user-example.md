---
title: "ModifyUser - User Example"
sidebar:
  order: 1850
---

Change password for "user1", remove him from group "admins" and add him to group "group1"

:::command[Command]

```text
command = ModifyUser
username = user1
password = newsecret
delgroup0 = admins
addgroup0 = group1
```

:::
