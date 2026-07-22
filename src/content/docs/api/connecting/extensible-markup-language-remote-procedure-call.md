---
title: "Extensible Markup Language Remote Procedure Call"
description: "We provide access to our API via XML-RPC, too. Your username and password needs to be provided with every request, otherwise the authentication will fail."
---

We provide access to our API via XML-RPC, too. Your username and password needs to be provided with every request, otherwise the authentication will fail.

Please set the parameter "s\_opmode" to "OTE" to connect to our OT&E - environment. If you do not add the parameter "s\_opmode=OTE", you will connect to our live-system and may be charged for operations.

For access using our XML-RPC - API, use the following connection - parameters:

-   OT&E - system with SSL proxy => https://api-ote.rrpproxy.net:8083/xmlrpc

## CheckDomain

For access using our XML-RPC - API, use the following connection - parameters:

### Command

```
<?xml version="1.0" encoding="UTF-8"?>
<methodCall>
  <methodName>Api.xcall</methodName>
  <params>
    <param>
      <value>
        <struct>
          <member>
            <name>s_login</name>
            <value>
              <string>MyUsername</string>
            </value>
          </member>
          <member>
            <name>s_pw</name>
            <value>
              <string>MyPassword</string>
            </value>
          </member>
          <member>
            <name>command</name>
            <value>
              <string>CheckDomain</string>
            </value>
          </member>
          <member>
            <name>domain</name>
            <value>
              <string>example.com</string>
            </value>
          </member>
        </struct>
      </value>
    </param>
  </params>
</methodCall>
```

### Response

```
<?xml version="1.0" encoding="UTF-8"?>
<methodResponse>
  <params>
    <param>
      <value>
        <struct>
          <member>
            <name>PROPERTY</name>
            <value>
              <struct/>
            </value>
          </member>
          <member>
            <name>DESCRIPTION</name>
            <value>
              <string>Domain name not available</string>
            </value>
          </member>
          <member>
            <name>CODE</name>
            <value>
              <int>211</int>
            </value>
          </member>
          <member>
            <name>QUEUETIME</name>
            <value>
              <double>0.084</double>
            </value>
          </member>
          <member>
            <name>RUNTIME</name>
            <value>
              <double>0.287</double>
            </value>
          </member>
        </struct>
      </value>
    </param>
  </params>
</methodResponse>
```

## Perl

For access with perl, we recommend using "XMLRPC::Lite", please have a look at the example below.

```
#!/usr/bin/perl --w

use XMLRPC::Lite; #+trace => debug;
use Data::Dumper;
my $xmlrpc = XMLRPC::Lite
--> proxy('Url to xmlrpc gateway')
;

my @commands = (
{
's_login' => '[mregname]',
's_pw' => '[<mregpassword>ote]',
's_opmode' => 'OTE',
's_encode' => 'UTF-8',
'command' => 'CheckDomain',
'domain' => 'example.com',
},
);

my $res = $xmlrpc->call('Api.xcall', @commands);

print Dumper($res->result) . "\n";
```

## PHP

We recommend using the PEAR "XML-RPC" - package for using our XML-RPC - API with PHP. Please take a look at the example listed below.

```
<?php

require_once -'XML/RPC.php';
$command = array (
"s_login" => "[mregname]",
"s_pw" => "[<mregpassword>ote]",
"s_opmode" => "OTE",
"s_encode" => "UFT-8",
"command" => "CheckDomain",
"domain" => "example.com",
);

$client = new XML_RPC_Client('/xmlrpc', 'Url to xmlrpc gateway', 'Port');
$params = array(XML_RPC_encode($command));
$msg = new XML_RPC_Message('Api.xcall', $params);
$response = $client->send($msg);
$v = XML_RPC_decode($response->value());
print_r($v);
?>
```
