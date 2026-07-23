---
title: "SendSMS"
description: "CentralNic Reseller API Command Reference  ➤ SMS ➤ SendSMS ➥ Learn more about CentralNic Reseller API Commands"
---

Send one or more SMS with your mobile account. The costs will be charged from the mobile account, not from your real account. If the input provided are valid, it should return a response with the code “200” indicating success. This indicates that the SMS was successfully submitted to the SMS gateway, meaning the phone number is valid, the gateway is responding and the connection is fine. In the response, the status can be one of two values - “successful” or “ failed”. “Successful” indicates we received an messageid from the 3th party provider. “Failed” could be a number of reasons beyond our control. Another command, QuerySMSList can be used to find out what has happened with the SMS, whether if it got delivered, expired, the phone number was not reachable or if the carrier has broken down.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><span class="gw-badge gw-mreg">MREG</span><span class="gw-badge gw-https">HTTPS</span><span class="gw-badge gw-soap">SOAP</span><span class="gw-badge gw-xmlrpc">XML-RPC</span><span class="gw-badge gw-smtp">SMTP</span><span class="gw-badge gw-sms">SMS</span></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command   = SendSMS
accountid =(TEXT)
password  =(TEXT)
mobilenr# =(TEXT)
sourceid  =(TEXT)
text      =(TEXT)
encoding  =(PLAIN|PLAINFLASH|UNICODE|UNICODEFLASH)
premium   =(0|1)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code               =(INT)
description        =(TEXT)
property[smsid][0] =(INT)</code></pre></div>

### Attributes

| **accountid** | ID of the account to be used |
| --- | --- |
| **password** | Password from the mobileaccount to be used, not your real account password! |
| **mobilenr#** | Number of the cellphone to send the message to (up to 256 recipients, mobilenr0 - mobilenr255) |
| **sourceid** | Number of the cellphone being the sender |
| **text** | Text of the SMS to be send |
| **encoding** | Encoding of the message (defaulting to "PLAIN", optional): |
|  | PLAIN: Plain Text Message (GSM) |
|  | PLAINFLASH: Plain Text Message (GSM), appearing directly on display |
|  | UNICODE: Text Message using unicode characters |
|  | UNICODEFLASH: Text Message using unicode, appearing directly on display |
| **premium** | Standard (0) or Premium (1) SMS |
| **smsid** | Unique ID of this transaction |
