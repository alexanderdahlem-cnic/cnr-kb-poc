---
title: "SetProperty: ContactVerification"
description: "Add RegistrarProperties to set the information for whitelabled email notifications for contact verification."
sidebar:
  order: 900
---

Add RegistrarProperties to set the information for whitelabled email notifications for contact verification.  
Default Email Templates (en) for all registrars with the possibility to exchange some information like sender address, text and language.

:::command[Command]

```text
command                                    = SetProperty
contactverification-email-sender           = noreply@emailverification.info   (DEFAULT)
contactverification-email-verification-url = http://emailverification.info    (DEFAULT)
contactverification-email-language         = en  (DEFAULT)
contactverification-email-freetext0        = [please enter your text]
contactverification-email-signature[0-2]   = [please enter your text]
```

:::
