---
title: "Host:Check"
description: "EPP API Command Reference  ➤ Host commands ➤ Host:Check ➥ Learn more about EPP API Commands"
---

-   [Overview](../../epp-server/epp-command-reference/)
-   [Create](../host_create/ "Host:Create")

## Required Parameters

### Command

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <command>
   <check>
     <host:check
      xmlns:host="urn:ietf:params:xml:ns:host-1.0">
       <host:name>ns1.example.com</host:name>
     </host:check>
   </check>
   <clTRID>E29ECDB4-2F4C-11DE-86F5-80000000A754</clTRID>
 </command>
</epp>
```

### Response

```
<?xml version="1.0" encoding="UTF-8"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <response>
   <result code="1000">
     <msg>Command completed successfully</msg>
   </result>
   <resData xmlns:host="urn:ietf:params:xml:ns:host-1.0">
     <host:chkData>
       <host:cd>
         <host:name avail="1">ns1.example.com</host:name>
         <host:reason>Name server available</host:reason>
       </host:cd>
     </host:chkData>
   </resData>
   <trID>
     <clTRID>E29ECDB4-2F4C-11DE-86F5-80000000A754</clTRID>
     <svTRID>E4B1E8DE-2F4C-11DE-BC4A-D747571B6317</svTRID>
   </trID>
 </response>
</epp>
```
