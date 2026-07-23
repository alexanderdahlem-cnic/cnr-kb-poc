---
title: "Contact Verification: ModifyDomain"
description: "Check, if owner change to an unverified contact and set X-TIME-TO-SUSPENSION: <DateTime> Disallowed to change status: CLIENTHOLD, if domain is suspended."
sidebar:
  order: 860
  label: "ModifyDomain"
---

## ModifyDomain

Check, if owner change to an unverified contact and set X-TIME-TO-SUSPENSION: <DateTime>  
Disallowed to change status: CLIENTHOLD, if domain is suspended.

:::response[Response]

```text
...
property[x-time-to-suspension][0] = 2014-11-23 00:41:49.0
```

:::
