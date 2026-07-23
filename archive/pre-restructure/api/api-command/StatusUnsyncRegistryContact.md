---
title: "StatusUnsyncRegistryContact"
description: "CentralNic Reseller API Command Reference  ➤ Contact ➤ StatusUnsyncRegistryContact ➥ Learn more about CentralNic Reseller API Commands"
---

The StatusUnsyncRegistryContact command allows you to check if the contact information in CentralNic Reseller matches the contact information at the registry. If a contact is used on different domain names with different registrys and the content of the contact is changed later on it is possible that the update fails at some of the connected registrys. In that case the content of the contact in CentralNic Reseller and the registry is not in sync. This command shows you the problems if a contact is not in sync with the registry. You can either call it with a domain name or with a contact and the command will list the contacts.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

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


