---
title: "QueryDomainListByContact"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ QueryDomainListByContact ➥ Learn more about CentralNic Reseller API Commands"
---

Search all domains using a specific contact handle managed in your account

## Possible Gateways

The command _QueryDomainListByContact_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryDomainListByContact
CONTACT = (CONTACT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[DOMAIN][n] = (DOMAIN)
property[TYPE][n] = ADMIN|OWNER|TECH|BILLING
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)</code></pre></div>

### Attributes

| **CONTACT** | The contact to be searched for |
| --- | --- |
| **DOMAIN** | Domain using the given contact handle |
| **TYPE** | Type the contact is used for |
| **COUNT** | Total number of domains with this contact shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of domains using this contact |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryDomainListByContact
CONTACT = (CONTACT)
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)
FIRST = (INT)
LIMIT = (INT)
ORDER = ASC|DESC
ORDERBY = DOMAIN|TYPE</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[DOMAIN][n] = (DOMAIN)
property[TYPE][n] = ADMIN|OWNER|TECH|BILLING
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)</code></pre></div>

### Attributes

| **CONTACT** | The contact to be searched for |
| --- | --- |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
| **FIRST** | Start the output of results from this item (optional) |
| **LIMIT** | Show only this many items in the response (optional) |
| **ORDER** | Optional |
| **ORDERBY** | Order the results for the corresponding column. Default is DOMAIN. (optional) |
