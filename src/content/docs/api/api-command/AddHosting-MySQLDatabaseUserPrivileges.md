---
title: "AddHosting - MySQLDatabaseUserPrivileges"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ AddHosting - MySQLDatabaseUserPrivileges ➥ Learn more about CentralNic Reseller API Commands"
---

This command is used to create a new cPanel user account with a specific "TYPE". There is a separate API command page for each specific "TYPE". Please kindly note the "TYPE" parameter value here. Different parameters are needed for different "TYPE".

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND         = AddHosting
TYPE             = Mysqldatabaseuserprivileges
CLASS         = cpanel
ACCOUNT        = (TEXT)
DATABASENAME    = (TEXT)
DATABASEUSER    = (TEXT)
OBJECT        = (TEXT)</code></pre></div>

### Attributes

| **ACCOUNT** | The cPanel account ID of the end customer. |
| --- | --- |
| **DATABASENAME** | User generated database name. |
| **DATABASEUSER** | User generated database user. |
| **OBJECT** | ALL PRIVILEGES or ALTER, ALTER ROUTINE, CREATE, CREATE ROUTINE, CREATE TEMPORARY TABLES, CREATE VIEW, DELETE, DROP, EVENT, EXECUTE, INDEX, INSERT, LOCK TABLES, REFERENCES, SELECT, SHOW VIEW, TRIGGER, UPDATE |
