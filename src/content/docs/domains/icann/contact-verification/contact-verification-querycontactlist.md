---
title: "Contact Verification: QueryContactList"
description: "QueryContactList supports searchpatterns for valid and verified. Also with &#039;type = showverificationrequested&#039; shows the contact handles where an email"
---

## QueryContactList

QueryContactList supports searchpatterns for valid and verified. Also with 'type = showverificationrequested' shows the contact handles where an email verification is already requested.

### Command

```
command   = QueryContactList
type      = showverificationrequested
wide      = (0|1)
verified  = (0|1)
validated = (0|1)
orderby   = (verified|validated)
```

### Response

```
...
property[verification last requested][1] = 2014-11-24 08:13:48
property[verification created date][1]   = 2014-11-12 16:33:58
property[verification history][1]        = 2014-11-12 16:35:03 [EMAIL]; 2014-11-24 08:13:48 [EVENT];
```
