---
title: "OwnerChange: ModifyContact"
description: "Material change with modify contact. For handles which are linked as owner with a GTLD, \"ownerchange status = REQUESTED\" is returned, indicating that the IRTP p"
---

Material change with modify contact.

For handles which are linked as owner with a GTLD, "ownerchange status = REQUESTED" is returned, indicating that the IRTP process is started. This will happen, if at least one 'material' field is modified. Non material changes can still be done without triggering the IRTP process.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = ModifyContact
contact = P-ABC1
firstname = Max
lastname = Mustermann
organization = Example Inc
email = mail@example.com</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
property[ownerchange status][0] = REQUESTED</code></pre></div>

### ModifyContact checkonly: Material change

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=ModifyContact
contact=P-ABC1
email=notverified21@ks.de
checkonly=1</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully; Check only
runtime = 0.028
queuetime = 0
property[ownerchange status][0] = REQUESTED
property[validated][0] = 1</code></pre></div>

### ModifyContact checkonly: No Material change

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=ModifyContact
contact=P-ABC1
email=notverified22@ks.de
checkonly=1</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully; Check only
runtime = 0.028
queuetime = 0
property[validated][0] = 1</code></pre></div>


