---
title: "QueryMobileAccountList"
description: "CentralNic Reseller API Command Reference  ➤ SMS ➤ QueryMobileAccountList ➥ Learn more about CentralNic Reseller API Commands"
---

Get all informations about your mobile accounts.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a><a class="gw-badge gw-sms" href="../../../services/sms/">SMS</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = QueryMobileAccountList
wide    =(0|1)
first   =(INT)
limit   =(INT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code                      =(INT)
description               =(TEXT)
property[account][0]      =(1234567)
property[status][0]       =(ACTIVE|SUSPENDED)
property[password][0]     =(TEXT)
property[current][0]      =(DECIMAL)
property[created date][0] =(DATE)
property[updated date][0] =(DATE)
property[count][0]        =(INT)
property[first][0]        =(INT)
property[last][0]         =(INT)
property[limit][0]        =(INT)
property[total][0]        =(INT)</code></pre></div>

### Attributes

| **WIDE** | Show more or less details (optional) |
| --- | --- |
| **FIRST** | First result to display (optional) |
| **LIMIT** | Limits the number of results to given number (optional) |
