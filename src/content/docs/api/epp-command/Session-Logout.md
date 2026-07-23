---
title: "Session:Logout"
description: "EPP API Command Reference  ➤ Session commands ➤ Session:Logout ➥ Learn more about EPP API Commands"
---

## Required Parameters

:::command[Command]

```text
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0
    epp-1.0.xsd">
 <command>
   <logout/>
   <clTRID>83EE2B34-2385-11DE-9267-8000000019CE</clTRID>
 </command>
</epp>
```

:::

 

:::response[Response]

```text
<?xml version="1.0" encoding="UTF-8"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <response>
   <result code="1500">
     <msg>Command completed successfully; ending session</msg>
   </result>
   <trID>
     <clTRID>83EE2B34-2385-11DE-9267-8000000019CE</clTRID>
     <svTRID>8B5DFAD4-2385-11DE-BBAB-C72173B183CA</svTRID>
   </trID>
 </response>
</epp>
```

:::

:::commandlist[Session commands]

- [Session:Hello](../session-hello/)
- [Session:Login](../session-login/)
- [Session:Logout](./)

:::
