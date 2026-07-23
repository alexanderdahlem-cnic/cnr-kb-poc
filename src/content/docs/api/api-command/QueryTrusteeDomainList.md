---
title: "QueryTrusteeDomainList"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ QueryTrusteeDomainList ➥ Learn more about CentralNic Reseller API Commands"
---

Search for domain names that use an active trustee service.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryTrusteeDomainList</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[DOMAIN][n] = (TEXT)
property[TRUSTEE_RENEWAL_DATE][n] = (DATE)
property[TRUSTEE_TYPE][n] = (DATE)
property[OWNER_ORGANIZATION][n] = (TEXT)
property[OWNER_NAME][n] = (TEXT)
property[OWNER_ADDRESS1][n] = (TEXT)
property[OWNER_ADDRESS2][n] = (TEXT)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)</code></pre></div>

### Attributes

| **DOMAIN** | The domain name. |
| --- | --- |
| **TRUSTEE\_RENEWAL\_DATE** | Renewal date of the trustee service. |
| **TRUSTEE\_TYPE** | The trustee type assigned to the domain name. |
| **OWNER\_ORGANIZATION** | Organization of the domain owner contact. |
| **OWNER\_NAME** | Name of the domain owner contact. |
| **OWNER\_ADDRESS1** | Address of the domain owner contact. |
| **OWNER\_ADDRESS2** | Address of the domain owner contact. |
| **COUNT** | Total number of contacts shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of existing contacts |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryTrusteeDomainList
DOMAIN = (PATTERN)
TRUSTEETYPE = (PATTERN)
ORDER = ASC|DESC
ORDERBY = DOMAIN|RENEWALDATE|TRUSTEETYPE
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)
FIRST = (INT)
LIMIT = (INT)
WIDE = 0|1</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[DOMAIN][n] = (TEXT)
property[TRUSTEE_RENEWAL_DATE][n] = (DATE)
property[TRUSTEE_TYPE][n] = (DATE)
property[OWNER_ORGANIZATION][n] = (TEXT)
property[OWNER_NAME][n] = (TEXT)
property[OWNER_ADDRESS1][n] = (TEXT)
property[OWNER_ADDRESS2][n] = (TEXT)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)</code></pre></div>

### Attributes

| **DOMAIN** | Searchpattern for domain names in the list. (optional) |
| --- | --- |
| **TRUSTEETYPE** | Searchpattern for the trustee service type. (optional) |
| **ORDER** | ASC|DESC (optional) |
| **ORDERBY** | Sort the result by this column (optional) |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
| **FIRST** | Start the output of results from this item (optional) |
| **LIMIT** | Show only this many items in the response (optional) |
| **WIDE** | 0|1 (optional) |
