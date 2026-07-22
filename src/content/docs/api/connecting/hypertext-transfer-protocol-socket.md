---
title: "Hypertext Transfer Protocol Socket"
description: "You can connect by using the HTTP(s) call: ➥ Learn more!"
---

You can connect by using the following HTTP(s) call(the values in square brackets,including those, need to be substituted by your account name and corresponding password):

\[mregname\] => accountname

\[<mregpassword>ote\] => accountpassword

```
https://api-ote.rrpproxy.net/api/call?s_login=[mregname]&s_pw=[<mregpassword>ote]
```

The API commands are passed on through the parameters:

```
https://api-ote.rrpproxy.net/api/call?s_login=[mregname]&s_pw=[<mregpassword>ote]&command=CheckDomain&domain=example.com
```

## Wget

Connect by using the following Wget command:

### Command

```
wget --nv -"https://api-ote.rrpproxy.net/api/call?s_opmode=OTE&s_login=[mregname]&s_pw=
[<mregpassword>ote]&command=checkdomain&domain=example.org" --O-
```

### Response

```
code = 210
description = Domain name available
queuetime=0
runtime=0.054
```

## Curl

Connect by using the following Curl command:

### Command

```
curl -"https://api-ote.rrpproxy.net/api/call?s_opmode=OTE&s_login=[mregname]&s_pw=
[<mregpassword>ote]&command=checkdomain&domain=example.org"
```

### Response

```
code = 211
description = Domain name not available
queuetime=0
runtime=0.15
```

**Operational Test & Evaluation (OT&E)**

Our API's have an Operational Test and Evaluation (OT&E) system, which you may use to develop and test your scripts. The password is your standard-login, but you will need to change your password in the (live) control panel. Please navigate to "Account" -> "Settings" -> Tab (Passwords) for this.
