---
title: "Events for internal and external transfers"
---

## Internal Transfer(UserTransfer)

The following listing contains example responses with the new extended information related to CentralNic Reseller [internal transfers](../../internal-transfers/):

-   Transfer request
-   Transfer cancelation
-   Transfer denial
-   Transfer approval

### Transfer request response for requesting(gaining) or current(losing) registrar

-   Replace value "INTERNAL" for response parameter "current registrar" and "requesting registrar" by real registrar.
-   Subclass property depending on gaining(TRANSFER\_PENDING) or losing(FOREIGN\_TRANSFER\_PENDING)

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
property[date][0] = 2012-09-27 10:00:28.0
property[class][0] = DOMAIN_TRANSFER
property[subclass][0] = TRANSFER_PENDING|FOREIGN_TRANSFER_PENDING
property[object id][0] = example.com
property[data][0] = domain:example.com
property[data][1] = current registrar:registrar1
property[data][2] = requesting registrar:registrar2
property[data][3] = period:0
property[data][4] = autorenew:0
property[data][5] = execute date:2012-09-27 10:00:28
property[data][6] = transfer status:REQUESTED
property[data][7] = requested date:2012-09-26 00:00:00</code></pre></div>

### Transfer cancelation response for requesting(gaining) or current(losing) registrar

-   Add new response parameters "execute date" and "transfer status"
-   Replace value "INTERNAL" for response parameter "current registrar" and "requesting registrar" by real registrar.
-   Subclass property depending on gaining(TRANSFER\_FAILED) or losing(FOREIGN\_TRANSFER\_FAILED)

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
property[date][0] = 2012-09-27 10:00:28.0
property[class][0] = DOMAIN_TRANSFER
property[subclass][0] = TRANSFER_FAILED|FOREIGN_TRANSFER_FAILED
property[object id][0] = example.com
property[data][0] = domain:example.com
property[data][1] = current registrar:registrar1
property[data][2] = requesting registrar:registrar2
property[data][3] = period:0
property[data][4] = autorenew:0
property[data][5] = execute date:2012-09-27 10:00:28
property[data][6] = transfer status:clientCancelled
property[data][7] = requested date:2012-09-26 00:00:00</code></pre></div>

### Transfer denial response for requesting(gaining) or current(losing) registrar

-   Add new response parameters "execute date" and "transfer status"
-   Replace value "INTERNAL" for response parameter "current registrar" and "requesting registrar" by real registrar.
-   Subclass property depending on gaining(TRANSFER\_FAILED) or losing(FOREIGN\_TRANSFER\_FAILED)

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
property[date][0] = 2012-09-27 10:00:28.0
property[class][0] = DOMAIN_TRANSFER
property[subclass][0] = TRANSFER_FAILED|FOREIGN_TRANSFER_FAILED
property[object id][0] = example.com
property[data][0] = domain:example.com
property[data][1] = current registrar:registrar1
property[data][2] = requesting registrar:registrar2
property[data][3] = period:0
property[data][4] = autorenew:0
property[data][5] = execute date:2012-09-27 10:00:28
property[data][6] = transfer status:clientRejected
property[data][7] = requested date:2012-09-26 00:00:00</code></pre></div>

### Transfer approval response for requesting(gaining) or current(losing) registrar

-   Add new response parameters "execute date" and "transfer status"
-   Replace value "INTERNAL" for response parameter "current registrar" and "requesting registrar" by real registrar.
-   Subclass property depending on gaining(TRANSFER\_SUCCESSFUL) or losing(FOREIGN\_TRANSFER\_SUCCESSFUL)

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
property[date][0] = 2012-09-27 10:00:28.0
property[class][0] = DOMAIN_TRANSFER
property[subclass][0] = TRANSFER_SUCCESSFUL|FOREIGN_TRANSFER_SUCCESSFUL
property[object id][0] = example.com
property[data][0] = domain:example.com
property[data][1] = current registrar:registrar1
property[data][2] = requesting registrar:registrar2
property[data][3] = period:0
property[data][4] = autorenew:0
property[data][5] = execute date:2012-09-27 10:00:28
property[data][6] = transfer status:clientApproved
property[data][7] = requested date:2012-09-26 00:00:00</code></pre></div>

## External Transfer

The following listing contains example responses with the new extended information related to inter registrar transfers:

Incoming Transfer

-   pending
-   failed
-   successful

Outgoing Transfer

-   pending
-   failed
-   successful

### Incoming Transfer pending

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
property[date][0] = 2010-04-03 08:59:34.0
property[class][0] = DOMAIN_TRANSFER
property[subclass][0] = TRANSFER_PENDING
property[object id][0] = example.com
property[data][0] = domain:example.com
property[data][1] = current registrar:registrar1
property[data][2] = requesting registrar:registrar2</code></pre></div>

### Incoming Transfer failed

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
property[date][0] = 2012-04-30 18:50:06.0
property[class][0] = DOMAIN_TRANSFER
property[subclass][0] = TRANSFER_FAILED
property[object id][0] = example.com
property[data][0] = domain:example.com
property[data][1] = current registrar:registrar1
property[data][2] = requesting registrar:registrar2
property[data][3] = auto nack:0
property[data][4] = jobid:609657121</code></pre></div>

### Incoming Transfer successful

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
property[date][0] = 2012-04-30 18:50:06.0
property[class][0] = DOMAIN_TRANSFER
property[subclass][0] = TRANSFER_SUCCESSFUL
property[object id][0] = example.com
property[data][0] = domain:example.com
property[data][1] = current registrar:registrar1
property[data][2] = requesting registrar:registrar2
property[data][3] = auto ack:0
property[data][4] = jobid:609657121</code></pre></div>

### Outgoing Transfer pending

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
property[date][0] = 2010-04-03 08:59:34.0
property[class][0] = DOMAIN_TRANSFER
property[subclass][0] = FOREIGN_TRANSFER_PENDING
property[object id][0] = example.com
property[data][0] = domain:example.com
property[data][1] = current registrar:registrar1
property[data][2] = requesting registrar:registrar2</code></pre></div>

### Outgoing Transfer failed

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
property[date][0] = 2012-04-30 18:50:06.0
property[class][0] = DOMAIN_TRANSFER
property[subclass][0] = FOREIGN_TRANSFER_FAILED
property[object id][0] = example.com
property[data][0] = domain:example.com
property[data][1] = current registrar:registrar1
property[data][2] = requesting registrar:registrar2
property[data][3] = auto nack:0
property[data][4] = jobid:609657121</code></pre></div>

### Outgoing Transfer successful

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
property[date][0] = 2013-08-25 23:35:24.0
property[class][0] = DOMAIN_TRANSFER
property[subclass][0] = FOREIGN_TRANSFER_SUCCESSFUL
property[object id][0] = example.com
property[data][0] = domain:example.com
property[data][1] = current registrar:registrar1
property[data][2] = requesting registrar:registrar2
property[data][3] = auto ack:0</code></pre></div>


