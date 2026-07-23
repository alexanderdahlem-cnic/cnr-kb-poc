---
title: "Simple Object Access Protocol"
description: "Access to our API is also possible with SOAP. This is a standard-compliant interface and accessible with the default SOAP - modules delivered with your language"
sidebar:
  order: 140
  label: "SOAP"
---

Access to our API is also possible with SOAP. This is a standard-compliant interface and accessible with the default SOAP - modules delivered with your language of choice. Please note, that you need to provide your username and password with every request.

Please set the parameter "s\_opmode" to "OTE" to connect to our OT&E - environment. If you do not add the parameter "s\_opmode=OTE", you will connect to our live-system and may be charged for operations.

For access using our SOAP - API, use the following connection - parameters:

-   OT&E - system with SSL proxy => https://api-ote.rrpproxy.net:8082/soap

**Operational Test & Evaluation (OT&E)**

Our API's have an Operational Test and Evaluation (OT&E) system, which you may use to develop and test your scripts. The credentials are identical to your standard-login, but you will need to change your password through the (live) control panel.

## Perl

For access with perl, we recommend using "SOAP::Lite", please have a look at the example below.

:::command[Command]

```text
#!/usr/bin/perl --w

use SOAP::Lite; #+trace => debug;
use Data::Dumper;'

my $soap = SOAP::Lite
-> uri('urn:Api')
-> proxy('URL to SOAP Gateway')
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

my $res = $soap->xcall(@commands);

print Dumper($res->result) . "\n";
```

:::

## PHP

We recommend to use the PHP-internal SOAP - functions for accessing our SOAP - API with PHP. Please have a look at the example below.

:::command[Command]

```text
<?php
$client = new SoapClient(NULL,
array(
"location" => "URL to SOAP Gateway",
// "location" => "URL to SOAP Gateway",
"uri" => "urn:Api",
"style" => SOAP_RPC,
"use" => SOAP_ENCODED,
)
);

$params = array(
array(
"s_login" => "[mregname]",
"s_pw" => "[<mregpassword>ote]",
"s_opmode" => "OTE",
"s_encode" => "UTF-8",
"command" => "CheckDomain",
"domain" => "example.com"
)
);

$result = $client->__call("xcall",
$params,
array(
"uri" => "urn:Api",
"soapaction" => "urn:Api#xcall")
);

print_r($result);
?>
```

:::
