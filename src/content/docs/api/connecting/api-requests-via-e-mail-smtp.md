---
title: "API requests via e-mail (SMTP)"
description: "Please note, that you need to provide your username and password with every request. ➥ Learn more!"
---

API requests can also be submitted to an SMTP-based e-mail address which acts as an API gateway.

Requests can be e-mailed to [batch@robot.rrpproxy.net](mailto:batch@robot.rrpproxy.net) where an automated system will submit the request on your behalf, and the processed response will be returned via an e-mailed reply.

**Note**

Please note, that you need to provide your username and password with every request. Please set the parameter "s\_opmode" to "OTE" to connect to our OT&E - environment. If you do not add the parameter "s\_opmode=OTE", you will connect to our live-system and may be charged for operations.

## Example

A basic "CheckDomain" command looks like the following:

```
s_login = [mregname]
s_pw = [<mregpassword>ote]
s_opmode = OTE

[COMMAND]
command = CheckDomain
domain = example.com
```
