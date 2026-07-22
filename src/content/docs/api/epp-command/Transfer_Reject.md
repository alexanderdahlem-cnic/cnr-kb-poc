---
title: "Transfer:Reject"
description: "EPP API Command Reference  ➤ Transfer commands ➤ Transfer:Reject ➥ Learn more about EPP API Commands"
---

## Required Parameters

### Command

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <command>
   <transfer op="reject">
     <domain:transfer
      xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
       <domain:name>example10.com</domain:name>
     </domain:transfer>
   </transfer>
   <clTRID>3CEABFFC-301B-11DE-918C-80000000DE23</clTRID>
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
     <clTRID>3CEABFFC-301B-11DE-918C-80000000DE23</clTRID>
     <svTRID>42987002-301B-11DE-8806-9F97E6302406</svTRID>
   </trID>
 </response>
</epp>
```
