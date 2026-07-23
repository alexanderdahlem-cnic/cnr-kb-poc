---
title: "Contact Verification: StatusDomain"
sidebar:
  order: 870
  label: "StatusDomain"
---

## StatusDomain

:::response[Response]

```text
...
property[x-time-to-suspension][0] = [DateTime]
property[status][0]               = clientHold
property[status][1]               = serverHold
```

:::

### Attributes

| **X-TIME-TO-SUSPENSION** | Does not mean the domain is already suspended (it's just a candidate)  
 |
| --- | --- |
| **STATUS0** | ClientHold |
| **STATUS1** | ServerHold |
