---
title: "AddAcl Example"
sidebar:
  order: 1770
---

Allow user1 AddDomain, StatusDomain and ModifyDomain

:::command[Command]

```text
command = AddAcl
username = user1
location = DOMAIN
acl0 = ADD
acl1 = STATUS
acl2 = MODIFY
```

:::

### Attributes

| **username** | (TEXT) - Mandatory. "username" is either name of a user or a group.  
 |
| --- | --- |
| **location** | (TEXT) - Mandatory; see Locations list.  
 |
| **acl0..255** | (TEXT) - Sets a right for the given location. |
