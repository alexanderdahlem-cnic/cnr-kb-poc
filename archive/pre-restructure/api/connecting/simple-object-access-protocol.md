---
title: "Simple Object Access Protocol"
description: "Access to our API is also possible with SOAP. This is a standard-compliant interface and accessible with the default SOAP - modules delivered with your language"
---

Access to our API is also possible with SOAP. This is a standard-compliant interface and accessible with the default SOAP - modules delivered with your language of choice. Please note, that you need to provide your username and password with every request.

Please set the parameter "s\_opmode" to "OTE" to connect to our OT&E - environment. If you do not add the parameter "s\_opmode=OTE", you will connect to our live-system and may be charged for operations.

For access using our SOAP - API, use the following connection - parameters:

-   OT&E - system with SSL proxy => https://api-ote.rrpproxy.net:8082/soap

**Operational Test & Evaluation (OT&E)**

Our API's have an Operational Test and Evaluation (OT&E) system, which you may use to develop and test your scripts. The credentials are identical to your standard-login, but you will need to change your password through the (live) control panel.

## Perl

For access with perl, we recommend using "SOAP::Lite", please have a look at the example below.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>#!/usr/bin/perl --w
use SOAP::Lite; #+trace =&gt; debug;
use Data::Dumper;'
my $soap = SOAP::Lite
-&gt; uri('urn:Api')
-&gt; proxy('URL to SOAP Gateway')
;
my @commands = (
{
's_login' =&gt; '[mregname]',
's_pw' =&gt; '[&lt;mregpassword&gt;ote]',
's_opmode' =&gt; 'OTE',
's_encode' =&gt; 'UTF-8',
'command' =&gt; 'CheckDomain',
'domain' =&gt; 'example.com',
},
);
my $res = $soap-&gt;xcall(@commands);
print Dumper($res-&gt;result) . "\n";</code></pre></div>

## PHP

We recommend to use the PHP-internal SOAP - functions for accessing our SOAP - API with PHP. Please have a look at the example below.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?php
$client = new SoapClient(NULL,
array(
"location" =&gt; "URL to SOAP Gateway",
// "location" =&gt; "URL to SOAP Gateway",
"uri" =&gt; "urn:Api",
"style" =&gt; SOAP_RPC,
"use" =&gt; SOAP_ENCODED,
)
);
$params = array(
array(
"s_login" =&gt; "[mregname]",
"s_pw" =&gt; "[&lt;mregpassword&gt;ote]",
"s_opmode" =&gt; "OTE",
"s_encode" =&gt; "UTF-8",
"command" =&gt; "CheckDomain",
"domain" =&gt; "example.com"
)
);
$result = $client-&gt;__call("xcall",
$params,
array(
"uri" =&gt; "urn:Api",
"soapaction" =&gt; "urn:Api#xcall")
);
print_r($result);
?&gt;</code></pre></div>


