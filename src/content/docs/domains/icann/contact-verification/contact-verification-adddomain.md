---
title: "Contact Verification: AddDomain"
description: "If an unverified contact is used, the X-TIME-TO-SUSPENSION: <DateTime> must be set (NOW() plus 15 days)"
sidebar:
  order: 840
  label: "AddDomain"
---

## AddDomain

If an unverified contact is used, the X-TIME-TO-SUSPENSION: <DateTime> must be set (NOW() plus 15 days)

:::response[Response]

```text
...
property[x-time-to-suspension][0] = 2014-11-23 00:41:49.0
```

:::
