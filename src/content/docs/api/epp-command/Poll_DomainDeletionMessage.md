---
title: "Poll:DomainDeletionMessage"
description: "EPP API Command Reference  ➤ Poll commands ➤ Poll:DomainDeletionMessage ➥ Learn more about EPP API Commands"
---

Domain deletion message

## Required Parameters

### Response

```
<?xml version="1.0" encoding="UTF-8"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <response>
   <result code="1301">
     <msg>Command completed successfully; ack to dequeue</msg>
   </result>
   <msgQ count="2" id="25">
     <qDate>2009-04-14T11:53:44.0Z</qDate>
     <msg>DOMAIN_DELETION_SUCCESSFUL</msg>
   </msgQ>
   <resData>
     <domain:panData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
       <domain:name paResult="1">xyz.de</domain:name>
       <domain:paTRID>
         <clTRID>UNDEF</clTRID>
         <svTRID>UNDEF</svTRID>
       </domain:paTRID>
       <domain:paDate>2009-04-14T11:53:44.0Z</domain:paDate>
     </domain:panData>
   </resData>
   <trID>
     <clTRID>388C4A3A-28EF-11DE-ADA2-800000008EA9</clTRID>
     <svTRID>D10074DE-28F5-11DE-BF21-FFBEED57AA34</svTRID>
   </trID>
 </response>
</epp>
```
