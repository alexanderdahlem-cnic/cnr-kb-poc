---
title: "Contact Verification: StatusDomain"
---

## StatusDomain

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>...
property[x-time-to-suspension][0] = [DateTime]
property[status][0]               = clientHold
property[status][1]               = serverHold</code></pre></div>

### Attributes

| **X-TIME-TO-SUSPENSION** | Does not mean the domain is already suspended (it's just a candidate)  
 |
| --- | --- |
| **STATUS0** | ClientHold |
| **STATUS1** | ServerHold |
