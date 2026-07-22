---
title: "HTTPS Session Handling"
---

On the HTTPs API, the password is usually given with each request and checked by the API-Server. For security reasons, the password check requires more time, which is slowing down every single request. The use of a persistent session increases the security because the password is sent only at the start of the session and thus speeding up all other request.

## Two methods to open a session

Passing on the API commands through parameters:

https://api.rrpproxy.net/api/call?s\_login=<REGISTRAR>&s\_pw=<PASSWORD>&command=StartSession&persistent=1

or

https://api.rrpproxy.net/api/call

followed by the API command below:

### Command

```
command     = StartSession
login       = (REGISTRAR)
password    = (PASSWORD)
persistent  = 1
newpassword = (NEW_PASSWORD, optional, it allows you to set a new password during session start)
```

### Response

```
code = 200
description = Command completed successfully
property[sessionid][0] = 1dac7d5108865ac2a4c54fec04526d69
```

## Requests with session ID

The previously received session ID can be used in the following way:

https://api.rrpproxy.net/api/call?s\_login=<REGISTRAR>&s\_sessionid=1dac7d5108865ac2a4c54fec04526d69&command=StatusAccount

or

https://api.rrpproxy.net/api/call?s\_login=<REGISTRAR>&s\_sessionid=1dac7d5108865ac2a4c54fec04526d69

### Command

```
command=StatusAccount
```

### Response

```
code = 200
description = Command completed successfully
...
```

## Closing a session

The already opened session can be closed in the following ways:

https://api.rrpproxy.net/api/call?s\_login=<REGISTRAR>&s\_sessionid=1dac7d5108865ac2a4c54fec04526d69&command=StopSession

or

https://api.rrpproxy.net/api/call?s\_login=<REGISTRAR>&s\_sessionid=1dac7d5108865ac2a4c54fec04526d69

### Command

```
command=StopSession
```

### Response

```
code = 200
description = Command completed successfully
```
