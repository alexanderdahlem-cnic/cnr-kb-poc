---
title: "Change of Validation Method"
sidebar:
  order: 1230
---

Currently only possible for Digicert products but Comodo products will be supported in the future.

## After AddCertificate (initial order)

You can only switch from DNS or FILE methods to the EMAIL method. The maximum number of times that you can switch is 10 times within a span of 24 hours.

## Update authmethod through ModifyCertificate

:::command[Command]

```text
command = ModifyCertificate
certificate = ...
sub = ...
authmethod = EMAIL
...
```

:::

## Update authmethod through ReissueCertificate

You can switch between DNS, File, or EMAIL methods. The maximum number of times that you can switch is 10 times within a span of 24 hours.

:::command[Command]

```text
command = ReissueCertificate
certificate = ...
sub = ...
authmethod = EMAIL|DNS|FILE
...
```

:::
