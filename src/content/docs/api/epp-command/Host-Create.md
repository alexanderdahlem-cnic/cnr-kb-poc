---
title: "Host:Create"
description: "EPP API Command Reference  ➤ Host commands ➤ Host:Create ➥ Learn more about EPP API Commands"
---

## Required Parameters

:::command[Command]

```text
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <command>
   <create>
     <host:create
      xmlns:host="urn:ietf:params:xml:ns:host-1.0">
       <host:name>ns1.example.com</host:name>
       <host:addr ip="v4">212.227.111.32</host:addr>
       <host:addr ip="v4">212.227.111.93</host:addr>
     </host:create>
   </create>
   <clTRID>4828DB20-2F4D-11DE-8004-800000003590</clTRID>
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
   <resData>
     <host:creData xmlns:host="urn:ietf:params:xml:ns:host-1.0">
       <host:name>ns1.example.com</host:name>
       <host:crDate>2009-04-22T14:55:12.0Z</host:crDate>
     </host:creData>
   </resData>
   <trID>
     <clTRID>4828DB20-2F4D-11DE-8004-800000003590</clTRID>
     <svTRID>9481C5B8-2F4D-11DE-B5EA-DF2DBC07F68C</svTRID>
   </trID>
 </response>
</epp>
```

:::

:::commandlist[Host commands]

- [Host:Check](../host-check/)
- [Host:Create](./)
- [Host:Delete](../host-delete/)
- [Host:Info](../host-info/)
- [Host:Update](../host-update/)

:::
