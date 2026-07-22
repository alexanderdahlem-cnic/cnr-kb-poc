---
title: "Contact Verification: ModifyContact"
description: "In the ModifyContact command it is prohibited to remove information from a validated contact (see definitions) if the contact is related to a domain (with activ"
---

## ModifyContact

In the ModifyContact command it is prohibited to remove information from a validated contact (see definitions) if the contact is related to a domain (with active contactverification) as owner.

### Command

```
command    = ModifyContact
contact    = (CONTACT)
validation = (0|1)
checkonly  = (0|1)
preverify  = (0|1)
```

### Response

```
code                                = 200
property[validated][0]              = 1
property[verified][0]               = 0
property[verification requested][0] = 1
```

### Attributes

**VALIDATION**

explicite validation if all required fields are set  

**CHECKONLY**

does NOT UPDATE the contact  

**PREVERIFY**

generates the email with triggercode if the email has not been already verified or if there is a pending request  

**VERIFICATION REQUESTED**

returned only if PREVERIFY
