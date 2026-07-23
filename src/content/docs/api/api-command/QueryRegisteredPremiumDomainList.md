---
title: "QueryRegisteredPremiumDomainList"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ QueryRegisteredPremiumDomainList ➥ Learn more about CentralNic Reseller API Commands"
---

The QueryRegisteredPremiumDomainList command allows you to query the list of premium domains in your portfolio or located in subreseller accounts.

## Possible Gateways

The command _QueryRegisteredPremiumDomainList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

-   [Default handling](#)
-   [Premium features](#)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND     = QueryRegisteredPremiumDomainList</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code                                             = (INT)
description                                      = (TEXT)
property[DOMAIN][n]                              = (DOMAIN)
property[REGISTRAR][n]                           = (TEXT)
property[COUNT][0]                               = (INT)
property[FIRST][0]                               = (INT)
property[LAST][0]                                = (INT)
property[LIMIT][0]                               = (INT)
property[TOTAL][0]                               = (INT)</code></pre></div>

### Attributes

| **DOMAIN** | A domain matching the search - filter |
| --- | --- |
| **DOMAIN\_IDN** | The UTF-8 - version of the domain |
| **ROID** | Registry Object ID for this domain |
| **DOMAIN\_CREATED\_DATE** | The date, when the domain was created |
| **DOMAIN\_CREATED\_BY** | Account, in which the domain was created |
| **DOMAIN\_UPDATED\_DATE** | The date, when the domain was last updated |
| **DOMAIN\_UPDATED\_BY** | Account, who did the last modification on this domain |
| **DOMAIN\_REGISTRATION\_EXPIRATION\_DATE** | When will the domain expire |
| **DOMAIN\_RENEWAL\_DATE** | When must the domain be renewed |
| **DOMAIN\_ZONE** | Zone of the domain name |
| **RENEWALMODE** | The current renewalmode of the domain |
| **TRANSFERMODE** | The current transfer mode of the domain |
| **COUNT** | Total number of domains shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of domains matching the criteria |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND     = QueryRegisteredPremiumDomainList
DOMAIN      = (PATTERN)
DOMAINIDN   = (TEXT)
RENEWALMODE = DEFAULT|AUTORENEW|AUTOEXPIRE|AUTODELETE|RENEWONCE|AUTORENEWMONTHLY
ZONE        = (PATTERN)
REGISTRAR   = (PATTERN)
INCLUDESUB  = 0|1
ONLYSUB     = 0|1
ORDER       = ASC|DESC
ORDERBY     = DOMAIN|DOMAINIDN|DOMAINCREATEDDATE|DOMAINREGISTRATIONEXPIRATIONDATE|DOMAINRENEWALDATE|DOMAINZONE|ZONE|RENEWALMODE|TRANSFERMODE
WIDE        = 0|1
FIRST       = (INT)
LIMIT       = (INT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code                                             = (INT)
description                                      = (TEXT)
property[DOMAIN][n]                              = (DOMAIN)
property[REGISTRAR][n]                           = (TEXT)
property[DOMAIN_IDN][n]                          = (TEXT)
property[ROID][n]                                = (TEXT)
property[DOMAIN_CREATED_DATE][n]                 = (DATE)
property[DOMAIN_CREATED_BY][n]                   = (TEXT)
property[DOMAIN_UPDATED_DATE][n]                 = (DATE)
property[DOMAIN_UPDATED_BY][n]                   = (TEXT)
property[DOMAIN_REGISTRATION_EXPIRATION_DATE][n] = (DATE)
property[DOMAIN_RENEWAL_DATE][n]                 = (DATE)
property[DOMAIN_ZONE][n]                         = (TEXT)
property[RENEWALMODE][n]                         = (TEXT)
property[TRANSFERMODE][n]                        = (TEXT)
property[COUNT][0]                               = (INT)
property[FIRST][0]                               = (INT)
property[FIRST][0]                               = (INT)
property[LAST][0]                                = (INT)
property[LIMIT][0]                               = (INT)
property[TOTAL][0]                               = (INT)</code></pre></div>

### Attributes

| **INCLUDESUB** | Also lists premium domains of subreseller accounts if set to 1 (optional, DEFAULT 0) |
| --- | --- |
| **ONLYSUB** | Only lists premium domains of subreseller accounts if set to 1. Also sets INCLUDESUB to 1 if used. (optional, DEFAULT 0) |
| **DOMAIN** | Filter the result by this string (wildcards allowed, optional) |
| **DOMAINIDN** | Filter the result by this string (wildcards allowed, optional) |
| **ORDER** | Ascending or descending result order (optional) |
| **ORDERBY** | Sort the result by this column (optional) |
| **RENEWALMODE** | The Renewalmode selected for this domain (optional) |
| **ZONE** | Show only domains matching this zone (optional) |
| **REGISTRAR** | Show only domains of this registrar. (optional) |
| **WIDE** | Show more or less details in the results (optional) |
| **FIRST** | Start the output of results from this item (optional) |
| **LIMIT** | Show only this many items in the response (optional) |

## Required Parameters (premium)

The following premium parameters are standard for this command.
