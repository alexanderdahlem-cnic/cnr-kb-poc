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

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;methodCall&gt;
  &lt;methodName&gt;Api.xcall&lt;/methodName&gt;
  &lt;params&gt;
    &lt;param&gt;
      &lt;value&gt;
        &lt;struct&gt;
          &lt;member&gt;
            &lt;name&gt;s_login&lt;/name&gt;
            &lt;value&gt;
              &lt;string&gt;MyUsername&lt;/string&gt;
            &lt;/value&gt;
          &lt;/member&gt;
          &lt;member&gt;
            &lt;name&gt;s_pw&lt;/name&gt;
            &lt;value&gt;
              &lt;string&gt;MyPassword&lt;/string&gt;
            &lt;/value&gt;
          &lt;/member&gt;
          &lt;member&gt;
            &lt;name&gt;command&lt;/name&gt;
            &lt;value&gt;
              &lt;string&gt;CheckDomain&lt;/string&gt;
            &lt;/value&gt;
          &lt;/member&gt;
          &lt;member&gt;
            &lt;name&gt;domain&lt;/name&gt;
            &lt;value&gt;
              &lt;string&gt;example.com&lt;/string&gt;
            &lt;/value&gt;
          &lt;/member&gt;
        &lt;/struct&gt;
      &lt;/value&gt;
    &lt;/param&gt;
  &lt;/params&gt;
&lt;/methodCall&gt;</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;methodResponse&gt;
  &lt;params&gt;
    &lt;param&gt;
      &lt;value&gt;
        &lt;struct&gt;
          &lt;member&gt;
            &lt;name&gt;PROPERTY&lt;/name&gt;
            &lt;value&gt;
              &lt;struct/&gt;
            &lt;/value&gt;
          &lt;/member&gt;
          &lt;member&gt;
            &lt;name&gt;DESCRIPTION&lt;/name&gt;
            &lt;value&gt;
              &lt;string&gt;Domain name not available&lt;/string&gt;
            &lt;/value&gt;
          &lt;/member&gt;
          &lt;member&gt;
            &lt;name&gt;CODE&lt;/name&gt;
            &lt;value&gt;
              &lt;int&gt;211&lt;/int&gt;
            &lt;/value&gt;
          &lt;/member&gt;
          &lt;member&gt;
            &lt;name&gt;QUEUETIME&lt;/name&gt;
            &lt;value&gt;
              &lt;double&gt;0.084&lt;/double&gt;
            &lt;/value&gt;
          &lt;/member&gt;
          &lt;member&gt;
            &lt;name&gt;RUNTIME&lt;/name&gt;
            &lt;value&gt;
              &lt;double&gt;0.287&lt;/double&gt;
            &lt;/value&gt;
          &lt;/member&gt;
        &lt;/struct&gt;
      &lt;/value&gt;
    &lt;/param&gt;
  &lt;/params&gt;
&lt;/methodResponse&gt;</code></pre></div>

## Perl

For access with perl, we recommend using "XMLRPC::Lite", please have a look at the example below.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>#!/usr/bin/perl --w
use XMLRPC::Lite; #+trace =&gt; debug;
use Data::Dumper;
my $xmlrpc = XMLRPC::Lite
--&gt; proxy('Url to xmlrpc gateway')
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
my $res = $xmlrpc-&gt;call('Api.xcall', @commands);
print Dumper($res-&gt;result) . "\n";</code></pre></div>

## PHP

We recommend using the PEAR "XML-RPC" - package for using our XML-RPC - API with PHP. Please take a look at the example listed below.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?php
require_once -'XML/RPC.php';
$command = array (
"s_login" =&gt; "[mregname]",
"s_pw" =&gt; "[&lt;mregpassword&gt;ote]",
"s_opmode" =&gt; "OTE",
"s_encode" =&gt; "UFT-8",
"command" =&gt; "CheckDomain",
"domain" =&gt; "example.com",
);
$client = new XML_RPC_Client('/xmlrpc', 'Url to xmlrpc gateway', 'Port');
$params = array(XML_RPC_encode($command));
$msg = new XML_RPC_Message('Api.xcall', $params);
$response = $client-&gt;send($msg);
$v = XML_RPC_decode($response-&gt;value());
print_r($v);
?&gt;</code></pre></div>


