---
title: "Transfer:Approve"
description: "EPP API Command Reference  ➤ Transfer commands ➤ Transfer:Approve ➥ Learn more about EPP API Commands"
---

## Required Parameters

:::command[Command]

```text
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <command>
   <transfer op="approve">
     <domain:transfer
      xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
       <domain:name>example10.com</domain:name>
     </domain:transfer>
   </transfer>
   <clTRID>089D6F9C-301B-11DE-882F-800000007FE6</clTRID>
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
     <clTRID>089D6F9C-301B-11DE-882F-800000007FE6</clTRID>
     <svTRID>0C63A8F8-301B-11DE-8FF5-AB57C71965A9</svTRID>
   </trID>
 </response>
</epp>
```

:::

:::commandlist[Transfer commands]

- [Transfer:Approve](./)
- [Transfer:Cancel](../transfer-cancel/)
- [Transfer:Query](../transfer-query/)
- [Transfer:Reject](../transfer-reject/)
- [Transfer:Request](../transfer-request/)

:::
