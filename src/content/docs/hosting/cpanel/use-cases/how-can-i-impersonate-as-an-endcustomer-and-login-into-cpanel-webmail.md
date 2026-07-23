---
title: "How can I impersonate as an endcustomer and login into cPanel/webmail?"
---

Session validity: 15 minutes from last activity (defined by cPanel, unchangeable).

:::command[Command]

```text
COMMAND = StatusHosting
CLASS = cpanel
TYPE = cpanellogin|webmaillogin
OBJECT = cPanelAccountIDofEndcustomer
```

:::

 

:::response[Response]

```text
code = (INT)
description = (TEXT)
property[webmail login url][0] =
property[cpanel login url][0] = -
```

:::
