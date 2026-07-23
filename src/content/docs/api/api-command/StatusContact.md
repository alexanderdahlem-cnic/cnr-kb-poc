---
title: "StatusContact"
description: "CentralNic Reseller API Command Reference  ➤ Contact ➤ StatusContact ➥ Learn more about CentralNic Reseller API Commands"
---



<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = StatusContact
CONTACT = (CONTACT)
AUTH = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>[RESPONSE]
code                                       = (INT)
description                                = (TEXT)
property[REGISTRAR][0]                     = (TEXT)
property[CONTACT][0]                       = (CONTACT)
property[ROID][0]                          = (TEXT)
property[CONTACTNAME][0]                   = (TEXT)
property[AUTO_DELETE][0]                   = (TEXT)
property[CONTACT_INDEX][0]                 = (TEXT)
property[ENCODING][0]                      = (TEXT)
property[TITLE][0]                         = (TEXT)
property[FIRST_NAME][0]                    = (TEXT)
property[MIDDLE_NAME][0]                   = (TEXT)
property[LAST_NAME][0]                     = (TEXT)
property[ORGANIZATION][0]                  = (TEXT)
property[STREET][n]                        = (TEXT)
property[ZIP][0]                           = (TEXT)
property[CITY][0]                          = (TEXT)
property[STATE][0]                         = (TEXT)
property[COUNTRY][0]                       = (COUNTRY)
property[PHONE][0]                         = (PHONE)
property[FAX][0]                           = (PHONE)
property[EMAIL][0]                         = (EMAIL)
property[X-DISCLOSE][0]                    = (TEXT)
property[X-UNDISCLOSE][0]                  = (TEXT)
property[CREATED_DATE][0]                  = (DATE)
property[CREATED_BY][0]                    = (TEXT)
property[UPDATED_DATE][0]                  = (DATE)
property[UPDATED_BY][0]                    = (TEXT)
property[STATUS][n]                        = (TEXT)
property[VALIDATED][0]                     = (TEXT)
property[VERIFIED][0]                      = (TEXT)
property[VERIFICATION_REQUESTED][0]        = (0|1)
property[x-verification-trustframework][0] = (TEXT)
property[x-verification-timestamp][0]      = (DATETIME)
property[x-verification-method][0]         = (TEXT)
property[x-verification-reference][0]      = (TEXT)
property[x-verification-evidence][0]       = (TEXT)
property[x-verification-result][0]         = Success|failed </code></pre></div>


