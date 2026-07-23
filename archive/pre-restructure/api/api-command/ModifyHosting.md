---
title: "ModifyHosting"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ ModifyHosting ➥ Learn more about CentralNic Reseller API Commands"
---

ModifyHosting

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = ModifyHosting
CLASS required = cpanel (DEFAULT)
TYPE optional = useraccount|email|mysqldatabaseuserprivileges|passwordresetftpuser|passwordresetaccount|passwordresetmysqldatabaseuser
ACCOUNT required = cPanelAccountID
OBJECT optional = (mysqldatabaseprivileges values: ALL PRIVILEGES or ALTER, ALTER ROUTINE, CREATE, CREATE -
ROUTINE, CREATE TEMPORARY TABLES,CREATE VIEW, DELETE, DROP, EVENT, EXECUTE,INDEX, INSERT, LOCK -
TABLES, REFERENCES, SELECT,SHOW VIEW, TRIGGER, UPDATE)
REASON optional = TEXT in case of account suspension
DATABASENAME optional = -
DATABASEUSER optional =
PACKAGE optional = economy|business|firstclass
ACTION optional = suspendsendemail|suspendloginemail|suspendreceiveemail|unsuspendsendemail|unsuspendloginemail|unsuspendreceiveemail|suspend|unsuspend
NAME optional = (only for CentralNic Reseller tagging)
PASSWORD optional =
RENEWALMODE = AUTODELETE|AUTORENEW</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code =  (INT)
description =  (TEXT)</code></pre></div>


