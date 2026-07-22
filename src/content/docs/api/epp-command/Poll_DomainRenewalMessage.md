---
title: "Poll:DomainRenewalMessage"
description: "EPP API Command Reference  ➤ Poll commands ➤ Poll:DomainRenewalMessage ➥ Learn more about EPP API Commands"
---

Domain renewal message

## Required Parameters

### Response

```
<?xml version="1.0" encoding="UTF-8"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <response>
   <result code="1301">
     <msg>Command completed successfully; ack to dequeue</msg>
   </result>
   <msgQ count="1" id="28">
     <qDate>2009-04-14T13:23:50.0Z</qDate>
     <msg>DOMAIN_RENEWAL_SUCCESSFUL</msg>
   </msgQ>
   <resData>
     <domain:renData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
       <domain:name>siatki.eu</domain:name>
     </domain:renData>
   </resData>
   <trID>
     <clTRID>AE7F32C2-28F7-11DE-A163-8000000099E9</clTRID>
     <svTRID>F8471712-28F7-11DE-900C-B7CCEEA560E0</svTRID>
   </trID>
 </response>
</epp>
```
