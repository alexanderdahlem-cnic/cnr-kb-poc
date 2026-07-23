---
title: "QueryUserList - Group Example"
sidebar:
  order: 1910
---

Shows a list of all groups.

:::command[Command]

```text
command = QueryUserList
type = GROUP
```

:::

 

:::response[Response]

```text
code = 200
description = Command completed successfully
runtime = 0.085
queuetime = 0
property[column][0] = username
property[column][1] = type
property[count][0] = 5
property[first][0] = 0
property[last][0] = 4
property[limit][0] = 1000
property[total][0] = 5
property[username][0] = admin
property[type][0] = group
property[username][1] = group1
property[type][1] = group
property[username][2] = group2
property[type][2] = group
property[username][3] = group3
property[type][3] = group
property[username][4] = group4
property[type][4] = group
```

:::
