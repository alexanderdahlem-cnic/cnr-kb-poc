---
title: "QueryDomainList"
description: "CentralNic Reseller API Command Reference  ➤ Domain ➤ QueryDomainList ➥ Learn more about CentralNic Reseller API Commands"
---

Query list of domains in account

## Possible Gateways

The command _QueryDomainList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryDomainList</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
queuetime = (INT)
runtime = (INT)
property[column][0] = domain
property[count][0]  = (INT)
property[domain][0] = (TEXT)
property[first][0]  = (INT)
property[last][0]   = (INT)
property[limit][0]  = (INT)
property[total][0]  = (INT)
EOF</code></pre></div>

### Attributes

| **DOMAIN** | A domain matching the search - filter |
| --- | --- |
| **COUNT** | Total number of domains shown |
| **FIRST** | Pointer to the first shown ID |
| **LAST** | Pointer to the last shown ID |
| **LIMIT** | The limit given in the command |
| **TOTAL** | Total number of domains matching the criteria |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryDomainList
DOMAIN = (PATTERN)
DOMAINIDN = (TEXT)
DAYS = (INT)
ORDER = ASC|DESC
ORDERBY = DOMAIN|DOMAINIDN|DOMAINCREATEDDATE|DOMAINREGISTRATIONEXPIRATIONDATE|DOMAINRENEWALDATE|DOMAINZONE|ZONE|RENEWALMODE|TRANSFERMODE|DOMAINUPDATEDDATE|X-TRANSFERLOCK-UNTIL
RENEWALMODE = DEFAULT|AUTORENEW|AUTOEXPIRE|AUTODELETE|RENEWONCE|AUTORENEWMONTHLY|EXPIREAUCTION
TYPE = DEFAULT|SHOWGRACE|SHOWRENEW|SHOWRENEWED|SHOWSUBLAYER|SHOWMERGEDLAYER|SHOWSUSPENDED|SHOWUNVERIFIED|SHOWUNVALIDATED|SHOWERRP|SHOWTRANSFERLOCK|SHOWGTLDOWNERTRUSTEESERVICE|ALL
ZONE = (PATTERN)
REGISTRAR = (PATTERN)
WIDE = 0|1
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)
FIRST = (INT)
LIMIT = (INT)
DOMAINTAG# = (TEXT)
ZONETAG# = (TEXT)
NAMESERVER = (PATTERN)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
code = (INT)
description = (TEXT)
queuetime = (INT)
runtime = (INT)
property[column][n] = (TEXT)
property[AMOUNT][n] = (DECIMAL)
property[CONTACT][n] = (TEXT)
property[CURRENCY][n] = (TEXT)
property[DOMAIN_CREATED_BY][n] = (TEXT)
property[DOMAIN_CREATED_DATE][n] = (DATE)
property[DOMAIN_IDN][n] = (TEXT)
property[DOMAIN_REGISTRATION_EXPIRATION_DATE][n]= (DATE)
property[DOMAIN_RENEWAL_DATE][n] = (DATE)
property[DOMAIN_UPDATED_DATE][n] = (DATE)
property[DOMAIN_UPDATED_BY][n] = (TEXT)
property[DOMAIN_ZONE][n] = (TEXT)
property[RENEWALMODE][n] = (TEXT)
property[REGISTRAR][n] = (TEXT)
property[ROID][n] = (TEXT)
property[TRANSFERMODE][n] = (TEXT)
property[TYPE][n] = RENEW|TRANSFER
property[VAT][n] = (DECIMAL)
property[VERIFIED][n] = (TEXT)
property[X-TIME-TO-SUSPENSION][n] = (TEXT)
property[X-TRANSFERLOCK-UNTIL][n] = (DATE)
property[zone][n] = (TEXT)
If type = SHOWGTLDOWNERTRUSTEESERVICE
property[column][3] = x-gtld-owner-trustee-active
property[column][4] = x-gtld-owner-trustee-service-start
property[x-gtld-owner-trustee-active][n] = 1
property[x-gtld-owner-trustee-service-start][n] = YYYY-MM-DD HH:MM:SS</code></pre></div>

### Attributes

| **DOMAINIDN** | The UTF-8 - version of the domain; Will only be returned if TYPE is DEFAULT | SHOWRENEWFilter the result by this string (wildcards allowed, optional) |
| --- | --- |
| **DAYS** | Set the number of days required for TYPE is SHOWRENEW|SHOWRENEWED (optional) |
| **ORDER** | ASC|DESC (optional) |
| **ORDERBY** | Sort the result by this column (optional) |
| **RENEWALMODE** | The current renewalmode of the domain; Will only be returned if TYPE is DEFAULT | SHOWRENEW. The Renewalmode selected for this domain (optional) |
| **TYPE** | Why was the domain renewed; Will only be returned if TYPE is SHOWRENEWED. Select the dataset based on different criteria (optional) |
| **DEFAULT** | The normal domainlist |
| **SHOWGRACE** | All domains currently in the Add Grace - period |
| **SHOWRENEW** | All domains, which will be renewed during the next X days |
| **SHOWRENEWED** | All domains, which were renewed during the last X days |
| **SHOWSUBLAYER** | Show all domains located on suberseller accounts |
| **SHOWMERGEDLAYER** | Show all domains including own and all subreseller domains |
| **SHOWSUSPENDED** | Show all suspended domains |
| **SHOWUNVERIFIED** | Show all domains with unverified owner contacts |
| **SHOWUNVALIDATED** | Show all domains with unvalidated owner contacts |
| **SHOWERRP** | Show all domains within ERRP |
| **ALL** | The regular domain list including comma separated data of authcode, name servers, status and contacts |
| **ZONE** | Show only domains matching this zone (optional) |
| **REGISTRAR** | Registrar account of the domain; Will only be returned if TYPE is SHOWSUBLAYER | SHOWMERGEDLAYER. Show only domains of this registrar. (optional) |
| **WIDE** | Show more or less details in the results (optional) |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
| **DOMAINTAG#** | Show only domains that are associated with this domain tag. (optional) |
| **ZONETAG#** | Show only domains that are associated with this zone tag. (optional) |
| **NAMESERVER** | Filter the result by this string (wildcards allowed, optional). Only available for TYPE is ALL. |
| **ROID** | Registry Object ID for this domain; Will only be returned if TYPE is DEFAULT | SHOWRENEW | SHOWGRACE |
| **DOMAIN\_CREATED\_DATE** | The date, when the domain was created; Will only be returned if TYPE is DEFAULT | SHOWRENEW | SHOWGRACE |
| **DOMAIN\_ZONE** | Zone of the domain name |
| **DOMAIN\_CREATED\_BY** | Account, in which the domain was created; Will only be returned if TYPE is DEFAULT | SHOWRENEW | SHOWGRACE |
| **AMOUNT** | Amount charged for the renewal; Will only be returned if TYPE is SHOWRENEWED |
| **DOMAIN\_UPDATED\_DATE** | The date, when the domain was last updated; Will only be returned if TYPE is DEFAULT |
| **DOMAIN\_UPDATED\_BY** | Account, who did the last modification on this domain; Will only be returned if TYPE is DEFAULT |
| **VAT** | V.A.T. charged for the renewal; Will only be returned if TYPE is SHOWRENEWED |
| **CURRENCY** | The currency used to charge the renewal; Will only be returned if TYPE is SHOWRENEWED |
| **DOMAIN\_REGISTRATION\_EXPIRATION\_DATE** | When will the domain expire; Will only be returned if TYPE is DEFAULT | SHOWRENEW | SHOWGRACE |
| **DOMAIN\_RENEWAL\_DATE** | When must the domain be renewed |
| **CONTACT** | Owner contact of the domain; Will only be returned if TYPE is ALL / SHOWUNVERIFIED |
| **VERIFIED** | Verified owner contact; Will only be returned if TYPE is DEFAULT |
| **X-TIME-TO-SUSPENSION** | The date when the domain will be suspended if the email verification is not done; Will only be returned if TYPE is DEFAULT |
| **X-GLTD-OWNER-TRUSTEE-ACTIVE** | If type is SHOWGTLDOWNERTRUSTEESERVICE, this shows an internal contact has been added. |
| **X-GLTD-OWNER-TRUSTEE-SERVICE-START** | If type is SHOWGTLDOWNERTRUSTEESERVICE, this shows the date where the charge will begin. If it is empty, no charges will apply. |
| **TRANSFERMODE** | The current transfer mode of the domain; Will only be returned if TYPE is DEFAULT |
| **X-TRANSFERLOCK-UNTIL** | Date until the transferlock of the domain name will expire |
