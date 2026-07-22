---
title: "ModifyAcl Example"
---

Remove AddDomain and ModifyDomain rights

### Command

```
command = ModifyAcl
username = user1
location = DOMAIN
delacl0 = ADD
delacl1 = MODIFY
```

### Attributes

**username**

(TEXT) - Mandatory. "username" is either name of a user or a group.  

**location**

(TEXT) - Mandatory; see Locations list.  

**acl0..255**

(TEXT) - Sets a right for the given location.  

**addacl0..255**

(TEXT) - Adds right# for the given location.  

**delacl0..255**

(TEXT) - Removes right# for the given location.
