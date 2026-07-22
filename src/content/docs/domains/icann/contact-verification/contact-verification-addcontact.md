---
title: "Contact Verification: AddContact"
description: "The email address used in the contact handle has been verified by the owner by confirming the contact verification mail sent to the given email address of the c"
---

The email address used in the contact handle has been verified by the owner by confirming the contact verification mail sent to the given email address of the contact handle.  
As of September 2014 the new changes will be applied to all generic TLD registrations (including com, net, org, info and biz).

## AddContact

AddContact checks if the used email address is already verified, if that is the case the new contact is directly set to verified.

### Command

```
command    = AddContact
...
VALIDATION = (0|1)
CHECKONLY  = (0|1)
PREVERIFY  = (0|1)
           
```

### Response

```
code                                = 200
...
property[validated][0]              = 1
property[verified][0]               = 0
property[verification requested][0] = 1
```

### Attributes

| **VALIDATION** | explicit validation if all required fields are set: (FIRSTNAME LASTNAME or ORGANIZATION) STREET0 CITY ZIP COUNTRY PHONE EMAIL  
 |
| --- | --- |
| **CHECKONLY** | does NOT INSERT a new contact  
 |
| **PREVERIFY** | generates the email with triggercode if the email has not been already verified or if there is an unverified job pending.  
 |
| **VERIFICATION REQUESTED** | returned only if PREVERIFY |
