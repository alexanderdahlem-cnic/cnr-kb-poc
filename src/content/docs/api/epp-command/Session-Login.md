---
title: "Session:Login"
description: "EPP API Command Reference  ➤ Session commands ➤ Session:Login ➥ Learn more about EPP API Commands"
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
   <login>
     <clID> _LOGIN_ </clID>
     <pw> _PASS_ </pw>
     <options>
       <version>1.0</version>
       <lang>en</lang>
     </options>
     <svcs>
       <objURI>urn:ietf:params:xml:ns:domain-1.0</objURI>
       <objURI>urn:ietf:params:xml:ns:contact-1.0</objURI>
       <objURI>urn:ietf:params:xml:ns:host-1.0</objURI>
       <svcExtension>
         <extURI>http://www.key-systems.net/epp/keysys-1.0</extURI>
         <extURI>http://www.key-systems.net/epp/query-1.0</extURI>
       </svcExtension>
     </svcs>
   </login>
    <clTRID>5E70DE38-2F3D-11DE-8431-800000005C3B</clTRID>
 </command>
</epp>
```

:::

 

:::response[Response]

```text
<?xml version="1.0" encoding="UTF-8"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <response>
   <result code="1000">
     <msg>Command completed successfully</msg>
   </result>
   <trID>
     <clTRID>5E70DE38-2F3D-11DE-8431-800000005C3B</clTRID>
     <svTRID>6C660E64-2385-11DE-AECC-E740607DD87B</svTRID>
   </trID>
 </response>
</epp>
```

:::

:::commandlist[Session commands]

- [Session:Hello](../session-hello/)
- [Session:Login](./)
- [Session:Logout](../session-logout/)

:::
