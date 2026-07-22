---
title: "Poll:DomainTradeMessage"
description: "EPP API Command Reference  ➤ Poll commands ➤ Poll:DomainTradeMessage ➥ Learn more about EPP API Commands"
---

Domain trade message

## Required Parameters

### Response

```
<?xml version="1.0" encoding="UTF-8"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <response>
   <result code="1301">
     <msg>Command completed successfully; ack to dequeue</msg>
   </result>
   <msgQ count="1" id="29">
     <qDate>2009-04-14T14:28:41.0Z</qDate>
     <msg>DOMAIN_TRADE_FAILED</msg>
   </msgQ>
   <resData>
     <domain:panData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
       <domain:name paResult="false">hoorspelbibliotheek.eu</domain:name>
       <domain:paTRID>
         <clTRID>UNDEF</clTRID>
         <svTRID>UNDEF</svTRID>
       </domain:paTRID>
       <domain:paDate>2009-04-14T14:28:41.0Z</domain:paDate>
     </domain:panData>
   </resData>
   <trID>
     <clTRID>90451408-2900-11DE-BDC2-800000004FFA</clTRID>
     <svTRID>B16696F2-2900-11DE-AF33-AE301AC36DEA</svTRID>
   </trID>
 </response>
</epp>
```
