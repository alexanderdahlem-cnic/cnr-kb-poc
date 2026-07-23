---
title: "QuerySMSList"
description: "CentralNic Reseller API Command Reference  ➤ SMS ➤ QuerySMSList ➥ Learn more about CentralNic Reseller API Commands"
---

Query details about SMS sent with the given account. Useful for delivery notifications or accountings.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span><span class="gw-badge gw-sms">SMS</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command   = QuerySMSList
accountid =(TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code                   =(INT)
description            =(TEXT)
property[smsid][0]     = 1234567
property[status][0]    = SEND|DELIVERED|BUFFERED|FAILED|EXPIRED|REJECTED|ERROR|UNKNOWN
property[recipient][0] = 0049123456xxx
property[date][0]      = 2009-06-02 08:32:37
property[count][0]     =(INT)
property[first][0]     =(INT)
property[last][0]      =(INT)
property[limit][0]     =(INT)
property[total][0]     =(INT)</code></pre></div>

### Attributes

| **ACCOUNTID** | ID of the account to be queried |
| --- | --- |
| **SMSID** | Unique ID of this transaction |
| **STATUS** | the following states may occur: |
|  | SEND: SMS delivery in progress |
|  | DELIVERED: Message successfully delivered |
|  | BUFFERED: Message buffered, usually because it failed first time and is now being retried |
|  | FAILED: The message failed to deliver |
|  | EXPIRED: Message expired, could not be delivered within the validity period |
|  | REJECTED: Message rejected by SMSC |
|  | ERROR: Internal error, message could not be processed this time |
|  | UNKNOWN: SMS - server has returned a non standard status code or no response within 24 hours |
| **RECIPIENT** | The recipient of the SMS, last 3 characters anonymised |
| **DATE** | Date the SMS was sent |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command   = QuerySMSList
accountid =(TEXT)
wide      =(0|1)
recipient =(TEXT)
mindate   =(DATE)
maxdate   =(DATE)
smsid     =(TEXT)
first     =(INT)
limit     =(INT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code                   =(INT)
description            =(TEXT)
property[smsid][0]     = 1234567
property[status][0]    = SEND|DELIVERED|BUFFERED|FAILED|EXPIRED|REJECTED|ERROR|UNKNOWN
property[recipient][0] = 0049123456xxx
property[date][0]      = 2009-06-02 08:32:37
property[count][0]     =(INT)
property[first][0]     =(INT)
property[last][0]      =(INT)
property[limit][0]     =(INT)
property[total][0]     =(INT)</code></pre></div>

### Attributes

| **WIDE** | Show more or less details (optional) |
| --- | --- |
| **RECIPIENT** | Show only this recipient of sms, wildcard allowed (i.e. \*1234\*, optional) |
| **MINDATE** | Show only SMS sent since this date (optional) |
| **MAXDATE** | Show only SMS sent before this date (optional) |
| **SMSID** | Show only SMS matching with this ID, wildcard allowed (i.e. \*123\*, optional) |
| **FIRST** | First result to display (optional) |
| **LIMIT** | Limits the number of results to given number (optional) |
