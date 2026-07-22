---
title: "StatusHosting"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ StatusHosting ➥ Learn more about CentralNic Reseller API Commands"
---

StatusHosting

## Possible Gateways

The command _StatusHosting_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND = StatusHosting
CLASS required = cpanel (DEFAULT)
TYPE required = useraccount|domains|email|emailforward|emaildomainforward|ftpuser|
mysqldatabase|mysqldatabaseuser|mysqldatabaseuserprivileges|bandwidth|cpanellogin|webmaillogin|
package|featurelist|quota
ACCOUNT optional = cPanelAccountID
OBJECT optional =
DATABASENAME optional =
```

### Response

```
code = <INT>
description = <TEXT>
property[account][0] = tkf2igf5
property[accountdomain][0] = messe-useraccount.com
property[accountreseller][0] = l4qdwhtn
property[bandwidth size][0] = unlimited
property[bandwidth unit][0] = MB
property[bandwidth value][0] = unlimited
property[caldav login url][0] = https://127.0.0.1:2080
property[cpanel login url][0] = https://127.0.0.1:2083
property[created by][0] = messe
property[created date][0] = 2019-02-13 13:11:32
property[dns zone template settings a][0] = @ 86400 IN A 127.0.0.1
property[dns zone template settings caldav][0] = caldav 86400 IN A 127.0.0.1
property[dns zone template settings cpanel][0] = cpanel 86400 IN A 127.0.0.1
property[dns zone template settings ftp][0] = ftp 86400 IN A 127.0.0.1
property[dns zone template settings mail][0] = mail 86400 IN A 127.0.0.1
property[dns zone template settings spf][0] = @ 86400 IN TXT v=spf1 a mx include:mail.hostingww.com ~all
property[dns zone template settings webmail][0] = webmail 86400 IN A 127.0.0.1
property[dns zone template settings www][0] = www 86400 IN A 127.0.0.1
property[featurelist][0] = Mail Only
property[hostname][0] = cpanel-01-eu.hostingww.com
property[ip][0] = 127.0.0.1
property[name][0] = hosting-5-emailonly
property[package][0] = hosting-5-emailonly
property[packagebandwidthlimit][0] = unlimited
property[packagecgi][0] = 0
property[packagelanguage][0] = en
property[packagemaxaddon][0] = 0
property[packagemaxemailacctquota][0] = unlimited
property[packagemaxftp][0] = 0
property[packagemaxpark][0] = 0
property[packagemaxpop][0] = unlimited
property[packagemaxsql][0] = 0
property[packagemaxsub][0] = 0
property[primary domain][0] = messe-useraccount.com
property[quota][0] = 50000
property[quota unit][0] = MB
property[quota value][0] = 50000
property[registration expiration date][0] = 2019-03-13 13:11:32
property[renewal date][0] = 2019-03-13 13:11:32
property[renewalmode][0] = DEFAULT
property[reseller][0] = messe
property[reseller user][0] = l4qdwhtn
property[restoreable until][0] = 2019-03-24 06:59:50
property[status][0] = PENDINGDELETE
property[updated by][0] = messe
property[updated date][0] = 2019-02-22 06:59:50
property[webftp login url][0] = https://127.0.0.1:2078
property[webmail login url][0] = https://127.0.0.1:2096
property[x-hosting-location][0] = EU
property[x-hosting-server][0] = cpanel-01-eu.hostingww.com
```
