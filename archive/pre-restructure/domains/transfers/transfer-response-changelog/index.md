---
title: "Transfer Response Changelog"
---

## Unified Transfer Response Parameters

The changes will be activated in our live system on January 8, 2019 and can already be tested in the OT&E system.

The following transfer parameters are returned on all domain transfer responses and events:

-   registrar = <INTERNAL USER or EXTERNAL REGISTRAR>
    -   Property that contains the identifier of the client that SHOULD act upon a PENDING transfer request (losing registrar).
-   requesting registrar = <INTERNAL USER or EXTERNAL REGISTRAR>
    -   The identifier of the client that requested the object transfer.
-   transfer status = <TRANSFERSTATUS>
    -   The state of the most recent transfer request.
        -   pending - transfer-in pending at the registry
        -   FOREIGN\_PENDING - transfer-out pending at the registry (only used in CentralNic Reseller-API, EPP: pending)
        -   REQUESTED - transfer-in requested in CentralNic Reseller (only used in CentralNic Reseller-API, EPP: pending)
        -   INITIATED - transfer-in initiated at the registry, similar to "pending" status, only used by a few registries e.g. .org (only used in CentralNic Reseller-API, EPP: pending)
        -   USERTRANSFER - internal transfer pending in CentralNic Reseller (only used in CentralNic Reseller-API, EPP: pending)
        -   clientApproved - the loosing registrar approved the transfer
        -   clientCancelled - the gaining registrar cancelled the transfer
        -   clientRejected - the loosing registrar rejected the transfer
        -   serverApproved - the registry approved the transfer, auto-approve
        -   serverCancelled - the registry or CentralNic Reseller cancelled the transfer
-   request date = <DATE>
    -   The date and time on which the transfer was initiated
-   execute date = <DATE>
    -   The date and time of a required or completed response. For a PENDING request, the value identifies the date and time by which a response is required.
-   registration expiration date = <DATE>
    -   The end of the domain object's validity period if the TransferDomain command caused or causes a change in the validity period.

## Registrar property values

The property registrar and requesting registrar can contain the own user name from CentralNic Reseller or an external registrar name:

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>property[registrar][0] = rrp-user
property[requesting registrar][0] = foreign-registrar
property[transfer status][0] = pending
property[request date][0] = 2015-08-06 14:02:00.0
property[execute date][0] = 2015-08-11 14:02:00.0
property[registration expiration date][0] = 2016-04-18 14:06:58.0</code></pre></div>

This example shows an initiated outgoing transfer to another registrar:

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>property[registrar][0] = rrp-user
property[requesting registrar][0] = foreign-registrar
property[transfer status][0] = pending
property[request date][0] = 2015-08-06 15:00:00.0
property[execute date][0] = 2015-08-11 15:00:00.0
property[registration expiration date][0] = 2016-04-18 14:06:58.0</code></pre></div>

EPP Example:

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
  &lt;response&gt;
    &lt;result code="1001"&gt;
      &lt;msg&gt;Command completed successfully; action pending&lt;/msg&gt;
    &lt;/result&gt;
    &lt;resData&gt;
      &lt;domain:trnData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"&gt;
        &lt;domain:name&gt;example.com&lt;/domain:name&gt;
        &lt;domain:trStatus&gt;pending&lt;/domain:trStatus&gt;
        &lt;domain:reID&gt;rrp-user&lt;/domain:reID&gt;
        &lt;domain:reDate&gt;2018-08-02T13:19:35.0Z&lt;/domain:reDate&gt;
        &lt;domain:acID&gt;foreign-registrar&lt;/domain:acID&gt;
        &lt;domain:acDate&gt;2018-08-07T13:19:35.0Z&lt;/domain:acDate&gt;
      &lt;/domain:trnData&gt;
    &lt;/resData&gt;
    &lt;trID&gt;
      &lt;clTRID&gt;ABC-12345&lt;/clTRID&gt;
      &lt;svTRID&gt;396ce82d-47d1-4494-bd23-25d1ed015bf6&lt;/svTRID&gt;
    &lt;/trID&gt;
  &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>

### Summary

**XRRP**

-   Add new parameters "execute date", "registrar", "requesting registrar", "requested date" and "transfer status" to all TransferDomain responses and Transfer-Events.
-   On external transfers use the foreign registrar name on response parameter "current registrar" or "requesting registrar".
-   On internal transfers (USERTRANSFER) replace the value "INTERNAL" on response parameter "current registrar" and "requesting registrar" by the real registrar.

**EPP**

-   The values of the transfer response parameters "domain:reID", "domain:reDate", "domain:acID" and "domain:acDate" are being revised.
-   On external transfers use the foreign registrar name on response parameter "domain:acID" or "domain:reID".
-   On internal transfers replace the value "INTERNAL" on response parameter "domain:acID" and "domain:reID" by the real registrar.

## Metaregistry

The changes mainly affect the TransferDomain and StatusDomainTransfer commands.

### TransferDomain

The examples below explain in detail what has changed on the following actions of the TransferDomain command:

-   Action request
-   Action cancel
-   Action deny
-   Action approve
-   Action query

### Action request

-   Added new response parameters "execute date", "registrar", "requesting registrar" and "requested date"

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = TransferDomain
action = request
domain = yourdomain.TLD
auth = FooBar123</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
property[execute date][0] = 2013-08-07 14:22:09.0
property[job id][0] = 100092
property[registrar][0] = registrar1
property[renewal period][0] = 1
property[requesting registrar][0] = registrar2
property[request date][0] = 2013-08-02 14:22:09.0
property[transfer status][0] = INITIATED</code></pre></div>

### Action cancel

-   Added new response parameters "execute date", "registrar", "requesting registrar", "requested date" and "transfer status"

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = TransferDomain
action = cancel
domain = yourdomain.TLD
auth = FooBar123</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
property[execute date][0] = 2013-08-02 14:30:22.0
property[registrar][0] = registrar1
property[requesting registrar][0] = registrar2
property[request date][0] = 2013-08-02 14:29:38.0
property[transfer status][0] = clientCancelled</code></pre></div>

### Action deny

-   Added new response parameters "execute date", "registrar", "requesting registrar", "requested date", "roid" and "transfer status"

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = TransferDomain
action = deny
domain = yourdomain.TLD</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
property[execute date][0] = 2013-08-02 13:41:26.0
property[registrar][0] = registrar1
property[requesting registrar][0] = registrar2
property[request date][0] = 2013-08-02 13:41:00.0
property[roid][0] = 13438296011048_DOMAIN-KEYSYS
property[transfer status][0] = clientRejected</code></pre></div>

### Action approve

-   Added new response parameters "execute date", "registrar", "requesting registrar", "request date", "roid" and "transfer status"

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = TransferDomain
action = approve
domain = yourdomain.TLD</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
property[execute date][0] = 2013-08-02 15:50:32.0
property[registrar][0] = registrar1
property[requesting registrar][0] = registrar2
property[request date][0] = 2013-08-02 15:49:28.0
property[transfer status][0] = clientApproved
property[roid][0] = 15849440711048_DOMAIN-KEYSYS</code></pre></div>

### Action query

-   Added new action "query" (Required for EPP Standard)

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = TransferDomain
action = query
domain = yourdomain.TLD</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
property[execute date][0] = 2013-08-06 14:27:09.0
property[registrar][0] = registrar1
property[registration expiration date][0] = 2014-04-18 14:06:58.0
property[requesting registrar][0] = registrar2
property[request date][0] = 2013-08-06 14:02:04.0
property[transfer status][0] = serverCancelled</code></pre></div>

### StatusDomainTransfer

-   Renamed response parameter "request registrar" to "requesting registrar"

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = StatusDomainTransfer
domain = yourdomain.TLD</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
property[execute date][0] = 2013-08-06 14:27:09
property[registrar][0] = registrar1
property[registration expiration date][0] = 2014-04-18 14:06:58
property[requesting registrar][0] = registrar2
property[requested date][0] = 2013-08-06 14:02:04
property[transfer status][0] = serverCancelled</code></pre></div>


