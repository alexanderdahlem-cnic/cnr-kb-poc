---
title: "Poll:DomainUpdateMessage"
description: "EPP API Command Reference  ➤ Poll commands ➤ Poll:DomainUpdateMessage ➥ Learn more about EPP API Commands"
---

Domain update message

## Required Parameters

### Response

```
<?xml version="1.0" encoding="UTF-8"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <response>
   <result code="1301">
     <msg>Command completed successfully; ack to dequeue</msg>
   </result>
   <msgQ count="1" id="27">
     <qDate>2009-04-14T12:23:45.0Z</qDate>
     <msg>DOMAIN_MODIFICATION_SUCCESSFUL</msg>
   </msgQ>
   <resData>
     <domain:panData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
       <domain:name paResult="true">anewdummy.com</domain:name>
       <domain:paTRID>
         <clTRID>12345</clTRID>
         <svTRID>67890</svTRID>
       </domain:paTRID>
       <domain:paDate>2009-04-14T12:23:45.0Z</domain:paDate>
     </domain:panData>
   </resData>
   <trID>
     <clTRID>388C4A3A-28EF-11DE-ADA2-800000008EA9</clTRID>
     <svTRID>9430F05C-28F4-11DE-A3AA-FCA63EB67CA0</svTRID>
   </trID>
 </response>
</epp>
```
