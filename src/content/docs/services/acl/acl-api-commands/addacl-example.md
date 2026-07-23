---
title: "AddAcl Example"
---

Allow user1 AddDomain, StatusDomain and ModifyDomain

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = AddAcl
username = user1
location = DOMAIN
acl0 = ADD
acl1 = STATUS
acl2 = MODIFY</code></pre></div>

### Attributes

| **username** | (TEXT) - Mandatory. "username" is either name of a user or a group.  
 |
| --- | --- |
| **location** | (TEXT) - Mandatory; see Locations list.  
 |
| **acl0..255** | (TEXT) - Sets a right for the given location. |
