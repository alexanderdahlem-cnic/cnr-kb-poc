---
title: "Contact:Info"
description: "EPP API Command Reference  ➤ Contact commands ➤ Contact:Info ➥ Learn more about EPP API Commands"
---

The contact:info provides contact details.

## Required Parameters

### Command

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0
    epp-1.0.xsd">
 <command>
   <info>
     <contact:info
      xmlns:contact="urn:ietf:params:xml:ns:contact-1.0"
      xsi:schemaLocation="urn:ietf:params:xml:ns:contact-1.0
      contact-1.0.xsd">
       <contact:id>P-JMD24</contact:id>
     </contact:info>
   </info>
   <clTRID>6662D288-2FFE-11DE-A0EB-80000000AAB4</clTRID>
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
     <contact:infData xmlns:contact="urn:ietf:params:xml:ns:contact-1.0">
       <contact:id>P-JMD24</contact:id>
       <contact:roid>495726825335031_CONTACT-KEYSYS</contact:roid>
       <contact:status s="ok"/>
       <contact:postalInfo>
         <contact:name>John Doe</contact:name>
         <contact:org>Example Inc.</contact:org>
         <contact:addr>
           <contact:street>123 Example Dr.</contact:street>
           <contact:street>Suite 100</contact:street>
           <contact:city>Dulles</contact:city>
           <contact:sp>VA</contact:sp>
           <contact:pc>20166-6503</contact:pc>
           <contact:cc>US</contact:cc>
         </contact:addr>
       </contact:postalInfo>
       <contact:voice>+1.7035555555</contact:voice>
       <contact:fax>+1.7035555556</contact:fax>
       <contact:email>jdoe@example.com</contact:email>
       <contact:clID>messe</contact:clID>
       <contact:crID>messe</contact:crID>
       <contact:crDate>2009-04-14T14:05:00.0Z</contact:crDate>
       <contact:upID>messe</contact:upID>
       <contact:upDate>2009-04-14T14:05:00.0Z</contact:upDate>
     </contact:infData>
   </resData>
   <trID>
     <clTRID>6662D288-2FFE-11DE-A0EB-80000000AAB4</clTRID>
     <svTRID>6BFBA8FA-2FFE-11DE-A1D9-ED9826062824</svTRID>
   </trID>
 </response>
</epp>
```
