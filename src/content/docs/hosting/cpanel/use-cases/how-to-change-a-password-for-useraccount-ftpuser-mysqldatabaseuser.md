---
title: "How to change a password for useraccount/ftpuser/ mysqldatabaseuser?"
---

:::command[Command]

```text
COMMAND = ModifyHosting
CLASS = cpanel
TYPE = passwordresetaccount|passwordresetftpuser|passwordresetmysqldatabaseuser
ACCOUNT = cPanelAccountIDofEndcustomer
OBJECT = ftpuser|dbuser
PASSWORD (required) = mySecretPassword
```

:::
