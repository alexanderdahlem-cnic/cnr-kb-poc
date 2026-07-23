---
title: "QueryTrademarkList"
description: "CentralNic Reseller API Command Reference  ➤ Trademark ➤ QueryTrademarkList ➥ Learn more about CentralNic Reseller API Commands"
---

Query a list of trademarks in the own and subreseller accounts.

## Possible Gateways

The command _QueryTrademarkList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryTradeMarkList</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[TRADEMARK][n] = (TEXT)
property[TRADEMARK_TYPE][n] = (TEXT)
property[TRADEMARK_NAME][n] = (TEXT)
property[TRADEMARK_STATUS][n] = (TEXT)
property[REGISTRAR][n] = (TEXT)
property[ENTITLEMENT][n] = (TEXT)
property[REGISTRATION_EXPIRATION_DATE][n] = (TEXT)
property[RENEWAL_DATE][n] = (TEXT)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)</code></pre></div>

### Attributes

| **TRADEMARK** | The trademark ID. |
| --- | --- |
| **TRADEMARK\_TYPE** | The type of the trademark. |
| **TRADEMARK\_NAME** | The trademark name. |
| **TRADEMARK\_STATUS** | Status of the trademark. |
| **REGISTRAR** | Registrar. |
| **ENTITLEMENT** | Entitlement of the trademark. |
| **REGISTRATION\_EXPIRATION\_DATE** | Registration expiration date of the trademark. |
| **RENEWAL\_DATE** | Renewal date of the trademark. |
| **COUNT** | Total number of contacts shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of existing contacts |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryTradeMarkList
TRADEMARKNAME = &lt;PATTERN&gt;
TRADEMARKTYPE = REGISTERED_MARK|COURT_VALIDATED_MARK|STATUTE_OR_TREATY
ORDER = ASC|DESC
ORDERBY = TRADEMARKNAME|RENEWALDATE|TRADEMARKTYPE|ENTITLEMENT|TRADEMARKSTATUS
TYPE = DEFAULT( The trademarklist)|SHOWSUBLAYER(Show all trademarks located on suberseller accounts)
GENERATELIST = 0|1
SENDLISTEMAIL = &lt;EMAILS&gt;
FIRST = &lt;INT&gt;
LIMIT = &lt;INT&gt;
WIDE = 0|1</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[TRADEMARK][n] = (TEXT)
property[TRADEMARK_TYPE][n] = (TEXT)
property[TRADEMARK_NAME][n] = (TEXT)
property[TRADEMARK_STATUS][n] = (TEXT)
property[REGISTRAR][n] = (TEXT)
property[ENTITLEMENT][n] = (TEXT)
property[REGISTRATION_EXPIRATION_DATE][n] = (TEXT)
property[RENEWAL_DATE][n] = (TEXT)
property[COUNT][0] = (INT)
property[FIRST][0] = (INT)
property[LAST][0] = (INT)
property[LIMIT][0] = (INT)
property[TOTAL][0] = (INT)</code></pre></div>

### Attributes

| **TRADEMARKNAME** | Search pattern for trademark names in the list. (optional) |
| --- | --- |
| **TRADEMARKTYPE** | Search pattern for trademark types in the list. (optional) |
| **ORDER** | ASC|DESC (optional) |
| **ORDERBY** | Sort the result by this column (optional) |
| **TYPE** | Select the data set based on different criteria (optional) |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
| **FIRST** | Start the output of results from this item (optional) |
| **LIMIT** | Show only this many items in the response (optional) |
| **WIDE** | 0|1 (optional) |
