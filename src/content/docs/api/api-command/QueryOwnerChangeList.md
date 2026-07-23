---
title: "QueryOwnerChangeList"
description: "CentralNic Reseller API Command Reference  ➤ Query ➤ QueryOwnerChangeList ➥ Learn more about CentralNic Reseller API Commands"
---

Gives an overview about all pending OwnerChanges. To receive a detailed Status of ACTIVE OwnerChanges ('REQUESTED', 'LOSING\_APPROVED', 'GAINING\_APPROVED', 'SUCCESS'), a StatusOwnerChange API call must be used.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = QueryOwnerChangeList</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
property[column][0] = domain
property[column][1] = status
property[column][2] = request date
property[column][3] = request expiration date
property[column][4] = losing registrant
property[column][5] = gaining registrant
property[count][0] = 0
property[first][0] = 0
property[last][0] = 0
property[limit][0] = 1000
property[total][0] = 0</code></pre></div>

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = QueryOwnerChangeList
STATUS = ACTIVE|SUCCESS|FAILED|EXPIRED</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
property[column][0] = domain
property[column][1] = status
property[column][2] = request date
property[column][3] = request expiration date
property[column][4] = losing registrant
property[column][5] = gaining registrant
property[count][0] = 0
property[first][0] = 0
property[last][0] = 0
property[limit][0] = 1000
property[total][0] = 0</code></pre></div>


