---
title: "Poll:DomainTransferStatusMessage"
description: "EPP API Command Reference  ➤ Poll commands ➤ Poll:DomainTransferStatusMessage ➥ Learn more about EPP API Commands"
---

Domain Transfer status message

## Required Parameters

### Response

```
<?xml version="1.0" encoding="UTF-8"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <response>
   <result code="1301">
     <msg>Command completed successfully; ack to dequeue</msg>
   </result>
   <msgQ count="4" id="31">
     <qDate>2009-04-23T14:49:23.0Z</qDate>
     <msg>DOMAIN_TRANSFER_PENDING</msg>
   </msgQ>
   <resData>
     <domain:trnData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
       <domain:name>example10.com</domain:name>
       <domain:trStatus>pending</domain:trStatus>
       <domain:reID>INTERNAL</domain:reID>
       <domain:reDate>0001-01-01T00:00:00.0Z</domain:reDate>
       <domain:acID>INTERNAL</domain:acID>
       <domain:acDate>0001-01-01T00:00:00.0Z</domain:acDate>
     </domain:trnData>
   </resData>
   <extension>
     <keysys:poll xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0">
       <keysys:data>
         <domain>example10.com</domain>
         <currentRegistrar>INTERNAL</currentRegistrar>
         <requestingRegistrar>INTERNAL</requestingRegistrar>
       </keysys:data>
       <keysys:info>USERTRANSFER stec -> messe</keysys:info>
     </keysys:poll>
   </extension>
   <trID>
     <clTRID>96ABFF8A-2385-11DE-A5FC-8000000002DF</clTRID>
     <svTRID>CFE4E51C-301B-11DE-B41A-9D23A342064B</svTRID>
   </trID>
 </response>
</epp>
```
