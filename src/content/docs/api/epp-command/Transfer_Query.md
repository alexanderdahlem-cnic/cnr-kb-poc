---
title: "Transfer:Query"
description: "EPP API Command Reference  ➤ Transfer commands ➤ Transfer:Query ➥ Learn more about EPP API Commands"
---

-   [Overview](../../epp-server/epp-command-reference/)
-   [Reject](../transfer_reject/ "Transfer:Reject")

## Required Parameters

### Command

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <command>
   <transfer op="query">
     <domain:transfer
      xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
       <domain:name>example10.com</domain:name>
       <domain:authInfo>
         <domain:pw>2fooBAR</domain:pw>
       </domain:authInfo>
     </domain:transfer>
   </transfer>
   <clTRID>4107B196-3019-11DE-AFEE-80000000C080</clTRID>
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
     <domain:Data xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
       <domain:name>example10.com</domain:name>
       <domain:trStatus>pending</domain:trStatus>
       <domain:reID>messe</domain:reID>
       <domain:reDate>2009-04-23T14:49:23.0Z</domain:reDate>
     </domain:Data>
   </resData>
   <trID>
     <clTRID>4107B196-3019-11DE-AFEE-80000000C080</clTRID>
     <svTRID>46466120-3019-11DE-AE61-F7A8E4011C64</svTRID>
   </trID>
 </response>
</epp>
```
