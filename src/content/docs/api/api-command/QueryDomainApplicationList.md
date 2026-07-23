---
title: "QueryDomainApplicationList"
description: "CentralNic Reseller API Command Reference  ➤ Application ➤ QueryDomainApplicationList ➥ Learn more about CentralNic Reseller API Commands"
---

List all applications in your account

## Possible Gateways

The command _QueryDomainApplicationList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryDomainApplicationList
DOMAIN = YOURDOMAIN.TLD
CLASS = (PATTERN)
ORDERBY = DOMAIN|APPLICATION|FINALIZATIONDATE
WIDE = 0|1
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)
FIRST = (INT)
LIMIT = (INT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[APPLICATION][n] = (INT)
property[DOMAIN][n] = (DOMAIN)
property[CLASS][n] = (TEXT)
property[STATUS][n] = (TEXT)
property[CREATED_DATE][n] = (DATE)
property[UPDATED_DATE][n] = (DATE)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)</code></pre></div>

### Attributes

| **DOMAIN** | Search applications for this domain (wildcard allowed)/Domain, the application was issued for |
| --- | --- |
| **CLASS** | Search applications belonging to this class (wildcard allowed, optional)/Class of the application |
| **ORDERBY** | Order resulting list by this column (optional) |
| **WIDE** | Show more or less details (optional) |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
| **FIRST** | Start the output of results from this item (optional) |
| **LIMIT** | Show only this many items in the response (optional) |
| **APPLICATION** | ID of the application (registrar - unique) |
| **STATUS** | Status of the application |
| **CREATED\_DATE** | Date the application was issued |
| **UPDATED\_DATE** | Date the application was last updated |
| **COUNT** | Total number of applications shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of existing applications |
