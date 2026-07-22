---
title: "OwnerChange: ResendNotification"
description: "Resend the ICANN OwnerChange FOA Mail to losing, gaining or both owner contacts. The resubmission of the email through the web interface will soon be available."
---

## Notification

Resend the ICANN OwnerChange FOA Mail to losing, gaining or both owner contacts.

The resubmission of the email through the Control Panel will soon be available.

### Command

```
command = ResendNotification
type = OwnerChange
object = example.com | P-ABC1
recipient = losing|gaining|both
```

## Designated agent email

With this feature, the reseller can resend the designated agent email by himself.

**Note**

Resend designated agent (DA) email can trigger several emails, for example, if there were several IRTP changes for one domain-/contactobject.
