---
title: "How can I see which useraccounts are restorable?"
---

:::command[Command]

```text
COMMAND = QueryHostingList
CLASS required = cpanel
TYPE required = useraccount
STATUS optional = PENDINGDELETE -
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[restoreable until][0] = 2019-03-24 06:59:50
property[status][0] = PENDINGDELETE
-...
```

:::
