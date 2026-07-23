---
title: "StatusUnsyncRegistryContact"
description: "CentralNic Reseller API Command Reference  ➤ Contact ➤ StatusUnsyncRegistryContact ➥ Learn more about CentralNic Reseller API Commands"
---

The StatusUnsyncRegistryContact command allows you to check if the contact information in CentralNic Reseller matches the contact information at the registry. If a contact is used on different domain names with different registrys and the content of the contact is changed later on it is possible that the update fails at some of the connected registrys. In that case the content of the contact in CentralNic Reseller and the registry is not in sync. This command shows you the problems if a contact is not in sync with the registry. You can either call it with a domain name or with a contact and the command will list the contacts.

## Possible Gateways

The command _StatusUnsyncRegistryContact_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command                            = StatusUnsyncRegistryContact
domain                             = (DOMAIN)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code                                   = (CODE)
description                            = (DESCRIPTION)
property[domain][0]                    = (DOMAIN)
property[zone][0]                      = (TEXT)
property[contact][0]                   = (CONTACT)
property[contacttype][0]               = (TEXT)
property[errorcode][0]                 = (INT)
property[errordescription][0]          = (TEXT)</code></pre></div>

## Optional

The following parameters are optional for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command                            = StatusUnsyncRegistryContact
contact                            = (CONTACT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code                                   = (CODE)
description                            = (DESCRIPTION)
property[domain][0]                    = (DOMAIN)
property[zone][0]                      = (TEXT)
property[contact][0]                   = (CONTACT)
property[contacttype][0]               = (TEXT)
property[errorcode][0]                 = (INT)
property[errordescription][0]          = (TEXT)</code></pre></div>


