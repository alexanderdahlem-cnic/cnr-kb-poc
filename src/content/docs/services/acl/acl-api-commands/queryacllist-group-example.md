---
title: "QueryAclList - Group Example"
---

Shows all locations with granted rights of a given group.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = QueryAclList
username=group1</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
queuetime = 0
runtime = 0.084
property[column][0] = location
property[column][1] = right
property[column][2] = rightnames
property[count][0] = 1
property[first][0] = 0
property[last][0] = 0
property[limit][0] = 1000
property[location][0] = DOMAIN
property[right][0] = 193
property[rightnames][0] = STATUS,QUERY,CHECK
property[total][0] = 1</code></pre></div>

### Attributes

| **username** | (TEXT) - Mandatory. "username" is either name of a user or a group. |
| --- | --- |
