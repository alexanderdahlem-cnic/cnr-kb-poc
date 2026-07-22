---
title: "Host:Update"
description: "EPP API Command Reference  ➤ Host commands ➤ Host:Update ➥ Learn more about EPP API Commands"
---

-   [Overview](../../epp-server/epp-command-reference/)

## Required Parameters

### Command

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <command>
   <update>
     <host:update
      xmlns:host="urn:ietf:params:xml:ns:host-1.0">
       <host:name>ns1.example.com</host:name>
       <host:add>
         <host:addr ip="v4">192.0.2.22</host:addr>
       </host:add>
       <host:rem>
         <host:addr ip="v6">212.227.111.93</host:addr>
       </host:rem>
     </host:update>
   </update>
   <clTRID>96625086-2FE4-11DE-B92A-80000000D00F</clTRID>
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
   <trID>
     <clTRID>96625086-2FE4-11DE-B92A-80000000D00F</clTRID>
     <svTRID>9BEFC6E6-2FE4-11DE-A161-955524E89722</svTRID>
   </trID>
 </response>
</epp>
```
