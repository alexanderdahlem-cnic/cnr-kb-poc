---
title: "How to suspend a cPanel email from login on his email because the customer did pay his invoice?"
---

:::command[Command]

```text
COMMAND = ModifyHosting
CLASS = cpanel
TYPE = email
ACCOUNT = cPanelAccountIDofEndcustomer
OBJECT = info@my-first-cpanel-account.com
ACTION = suspendloginemail
REASON = the customer did pay his invoice
```

:::
