---
title: "QueryMonitoringList"
description: "CentralNic Reseller API Command Reference  ➤ Query ➤ QueryMonitoringList ➥ Learn more about CentralNic Reseller API Commands"
---

Query information of running or upcoming maintenance.

## Possible Gateways

The command _QueryMonitoringList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryMonitoringList
CLASS = next_maintenance|running_maintenance
DAYS = (INT)
WIDE = 0|1</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[END_DATE][n] = (TEXT)
property[REASON][n] = (TEXT)
property[ZONES][n] = (TEXT)
property[SERVICE_ID][n] = (TEXT)
property[SERVICE_NAME][n] = (TEXT)
property[SERVICE_TYPE][n] = (TEXT)
property[START_DATE][n] = (TEXT)
property[COUNT][0] = (INT)
property[TOTAL][0] = (INT)</code></pre></div>

### Attributes

| **CLASS** | next\_maintenance|running\_maintenance |
| --- | --- |
| **DAYS** | Show the maintenances of the next X days |
| **COUNT** | Total number of monitorings shown |
| **TOTAL** | Total number of monitorings |
| **WIDE** | Show more or less details in the results (optional) |
| **ZONES** | A comma separated list of affected zones |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryMonitoringList
CLASS = next_maintenance|running_maintenance
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)
SUBUSER = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[END_DATE][n] = (TEXT)
property[REASON][n] = (TEXT)
property[ZONES][n] = (TEXT)
property[SERVICE_ID][n] = (TEXT)
property[SERVICE_NAME][n] = (TEXT)
property[SERVICE_TYPE][n] = (TEXT)
property[START_DATE][n] = (TEXT)
property[COUNT][0] = (INT)
property[TOTAL][0] = (INT)</code></pre></div>

### Attributes

| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| --- | --- |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
