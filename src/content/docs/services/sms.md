---
title: "SMS Gateway"
description: "Our SMS gateway reference manual will give you an extensive overview of the commands which can be submitted to the system."
---

## Introduction

Our SMS gateway reference manual will give you an extensive overview of the commands which can be submitted to the system. Please read the User's Manual carefully in order to avoid any mistakes. If there are any errors or missing topics, please do not hesitate to contact us.

CentralNic Reseller's SMS gateway provides the ability to send directly routed text messages to most cellular networks worldwide for a flat rate per SMS. You can connect to the SMS gateway via the regular API or the dedicated SMS API. The dedicated SMS API can be used via a separate mobile account with separate log-in data, providing the possibility to offer a transparent prepaid account to your customers.

In addition to our proven standard SMS tool we also offer a Premium SMS Service. We work together with another SMS provider that offers high-availability systems and enables very fast delivery times. The delivery of a Premium SMS takes less than 10 seconds in more than 95% of all transmissions. These properties make the new product to a highly reliable SMS service which, for example, is crucial when sending tokens or pins via SMS.

The premium SMS service can be used by any existing mobile account provided that enough credit is available. You only need to submit the parameter PREMIUM = 1 for sending a Premium SMS via our API.

**Note**

Please note that the Premium SMS Service does not support text messages of the type PLAINFLASH / UNICODEFLASH.

## Highlights of the SMS Gateway

-   Fast and directly routed SMS (no proxy via other countries)
-   Favorable prices for all routes
-   Delivery status notifications
-   Usable via API or dedicated SMS-API
-   Prepayment allowing full cost control
-   Up to 256 recipients per SMS possible
-   PLAIN and UNICODE for both Standard and Premium SMS Service
-   Additionally PLAINFLASH and UNICODEFLASH for Standard SMS Service

<div class="api-io api-io--command"><span class="api-io__label">SMS API-Commands</span>
<pre class="api-io__code"><code><h2>SMS API-Commands</h2><table><tbody><tr><th><a href="../../api/api-command/chargemobileaccount/">ChargeMobileAccount</a></th><th>ChargeMobileAccount</th></tr><tr><td><a href="../../api/api-command/createmobileaccount/">CreateMobileAccount</a></td><td>CreateMobileAccount</td></tr><tr><td><a href="../../api/api-command/querymobileaccountlist/">QueryMobileAccountList</a></td><td>QueryMobileAccountList</td></tr><tr><td><a href="../../api/api-command/querysmslist/">QuerySMSList</a></td><td>QuerySMSList</td></tr><tr><td><a href="../../api/api-command/sendsms/">SendSMS</a></td><td>SendSMS</td></tr><tr><td><a href="../../api/api-command/statusmobileaccount/">StatusMobileAccount</a></td><td>StatusMobileAccount</td></tr></tbody></table></code></pre></div>


