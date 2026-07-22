---
title: "Contact:Transfer"
description: "EPP API Command Reference  ➤ Contact commands ➤ Contact:Transfer ➥ Learn more about EPP API Commands"
---

-   [Overview](../../epp-server/epp-command-reference/)
-   [Update](../contact_update/ "Contact:Update")

RRPproxy contacts can be transferred between accounts.

## Required Parameters

### Command

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0
    epp-1.0.xsd">
 <command>
   <transfer op="request">
     <contact:transfer
      xmlns:contact="urn:ietf:params:xml:ns:contact-1.0"
      xsi:schemaLocation="urn:ietf:params:xml:ns:contact-1.0
      contact-1.0.xsd">
       <contact:id>P-JYC22</contact:id>
     </contact:transfer>
   </transfer>
   <clTRID>50045BF6-3008-11DE-B070-800000008F2D</clTRID>
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
     <contact:trnData xmlns:contact="urn:ietf:params:xml:ns:contact-1.0">
       <contact:id>P-JYC23</contact:id>
       <contact:trStatus>serverApproved</contact:trStatus>
       <contact:reID>messe</contact:reID>
       <contact:reDate>2009-04-23T13:23:37.0Z</contact:reDate>
       <contact:acID>messe</contact:acID>
       <contact:acDate>2009-04-23T13:23:37.0Z</contact:acDate>
     </contact:trnData>
   </resData>
   <trID>
     <clTRID>50045BF6-3008-11DE-B070-800000008F2D</clTRID>
     <svTRID>F3E82A26-3009-11DE-81C1-E83D05CED238</svTRID>
   </trID>
 </response>
</epp>
```
