---
title: "QueryCommandSyntax"
description: "CentralNic Reseller API Command Reference  ➤ Query ➤ QueryCommandSyntax ➥ Learn more about CentralNic Reseller API Commands"
---

This command can be used to show all available parameters of a particular command. For certificates, information is returned based on the certificate classes used for the CLASS parameter.

## Possible Gateways

The command _QueryCommandSyntax_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = QueryCommandSyntax
COMMANDNAME = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[COMMANDDESCRIPTION][n] = (TEXT)
property[COMMANDNAME][0] = (TEXT)
property[DESCRIPTION][n] = (TEXT)
property[DOMAIN][0] = (TEXT)
property[OPTIONAL][n] = (TEXT)
property[PARAMETER][n] = (TEXT)
property[PARAMGROUP][n] = (TEXT)
property[POSITION][n] = (TEXT)
property[PROPERTY][n] = (TEXT)
property[QUANTITY][n] = (TEXT)
property[RANGE][n] = (TEXT)
property[TITLE][n] = (TEXT)
property[TYPE][n] = (TEXT)
property[WIDE][n] = (TEXT)
property[ZONE][n] = (TEXT)</code></pre></div>

### Attributes

| **COMMANDNAME** | The name of the command where the syntax is unknown |
| --- | --- |

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>PARENT = 0|1
TYPE = REQUEST|RESPONSE
DOMAIN = (TEXT)
CLASS = (TEXT)
SHOWONLYPARENT = 1|0
IGNOREZONE = 0|1
GENERATELIST = 0|1
SENDLISTEMAIL = (EMAILS)</code></pre></div>

### Attributes

| **PARENT** | Optional |
| --- | --- |
| **TYPE** | Type of syntax to be shown (optional) |
| **CLASS** | A class to query (may be a TLD, too, optional) |
| **SHOWONLYPARENT** | Shows only parent values (optional) |
| **IGNOREZONE** | Shows all entries of all zones (optional) |
| **GENERATELIST** | Show result on screen|Generate a CSV File and upload to ftp (optional) |
| **SENDLISTEMAIL** | Email address where the CSV will be sent to (optional) |
