---
title: "Host:Info"
description: "EPP API Command Reference  ➤ Host commands ➤ Host:Info ➥ Learn more about EPP API Commands"
---

## Required Parameters

### Command

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <command>
   <info>
     <host:info
      xmlns:host="urn:ietf:params:xml:ns:host-1.0">
       <host:name>ns1.example.com</host:name>
     </host:info>
   </info>
   <clTRID>D01C728A-2F4D-11DE-BF21-80000000CE8C</clTRID>
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
   <resData>
     <infData xmlns:host="urn:ietf:params:xml:ns:host-1.0">
       <host:name>ns1.example.com</host:name>
       <host:roid>ns1.example.com</host:roid>
       <host:status s="ok"/>
       <host:addr ip="v4">212.227.111.32</host:addr>
       <host:addr ip="v4">212.227.111.93</host:addr>
       <host:clID>messe</host:clID>
       <host:crID>messe</host:crID>
       <host:crDate>2009-04-22T14:55:12.0Z</host:crDate>
       <host:upID>messe</host:upID>
       <host:upDate>2009-04-22T14:55:12.0Z</host:upDate>
     </infData>
   </resData>
   <trID>
     <clTRID>D01C728A-2F4D-11DE-BF21-80000000CE8C</clTRID>
     <svTRID>D596E9A2-2F4D-11DE-BAB3-AA6F590D9318</svTRID>
   </trID>
 </response>
</epp>
```

## Optional Parameters
