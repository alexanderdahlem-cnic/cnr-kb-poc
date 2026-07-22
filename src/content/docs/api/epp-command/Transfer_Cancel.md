---
title: "Transfer:Cancel"
description: "EPP API Command Reference  ➤ Transfer commands ➤ Transfer:Cancel ➥ Learn more about EPP API Commands"
---

-   [Overview](../../epp-server/epp-command-reference/)
-   [Query](../transfer_query/ "Transfer:Query")

## Required Parameters

### Command

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <command>
   <transfer op="cancel">
     <domain:transfer
      xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
       <domain:name>example10.com</domain:name>
     </domain:transfer>
   </transfer>
   <clTRID>811846CE-3019-11DE-A3F1-800000003A06</clTRID>
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
     <clTRID>811846CE-3019-11DE-A3F1-800000003A06</clTRID>
     <svTRID>85037D08-3019-11DE-9D4F-D0BB9DED17FC</svTRID>
   </trID>
 </response>
</epp>
```
