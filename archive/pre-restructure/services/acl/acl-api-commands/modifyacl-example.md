---
title: "ModifyAcl Example"
---

Remove AddDomain and ModifyDomain rights

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = ModifyAcl
username = user1
location = DOMAIN
delacl0 = ADD
delacl1 = MODIFY</code></pre></div>

### Attributes

| **username** | (TEXT) - Mandatory. "username" is either name of a user or a group.  
 |
| --- | --- |
| **location** | (TEXT) - Mandatory; see Locations list.  
 |
| **acl0..255** | (TEXT) - Sets a right for the given location.  
 |
| **addacl0..255** | (TEXT) - Adds right# for the given location.  
 |
| **delacl0..255** | (TEXT) - Removes right# for the given location. |
