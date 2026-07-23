---
title: "SetProperty: ContactVerification"
description: "Add RegistrarProperties to set the information for whitelabled email notifications for contact verification."
---

Add RegistrarProperties to set the information for whitelabled email notifications for contact verification.  
Default Email Templates (en) for all registrars with the possibility to exchange some information like sender address, text and language.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command                                    = SetProperty
contactverification-email-sender           = noreply@emailverification.info   (DEFAULT)
contactverification-email-verification-url = http://emailverification.info    (DEFAULT)
contactverification-email-language         = en  (DEFAULT)
contactverification-email-freetext0        = [please enter your text]
contactverification-email-signature[0-2]   = [please enter your text]</code></pre></div>


