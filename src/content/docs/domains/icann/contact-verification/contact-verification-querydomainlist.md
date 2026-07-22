---
title: "Contact Verification: QueryDomainList"
description: "Querinklinometer for suspended domains: QueryDomainList supports searchpatterns for domains which are SUSPENDED"
---

## QueryDomainList for suspended domains

QueryDomainList supports searchpatterns for domains which are SUSPENDED

### Command

```
command = QueryDomainList
type    = SHOWSUSPENDED
zone    = [ZONE]
```

## QueryDomainList for unverified contacts

QueryDomainList supports searchpatterns for domains, whose owner contacts are UNVERIFIED.

### Command

```
command = QueryDomainList
type    = SHOWUNVERIFIED
zone    = [ZONE]
```

### Response

```
...
property[domain][132]               = xn--maxmller-95a.com
property[contact][132]              = P-JCD21
property[verified][132]             = 0
property[x-time-to-suspension][132] = 2014-01-15 12:00:00
```
