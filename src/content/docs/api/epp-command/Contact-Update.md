---
title: "Contact:Update"
description: "EPP API Command Reference  ➤ Contact commands ➤ Contact:Update ➥ Learn more about EPP API Commands"
---

Update the contact information like address or contact status for example.

## Required Parameters

:::command[Command]

```text
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0
    epp-1.0.xsd">
 <command>
   <update>
     <contact:update
      xmlns:contact="urn:ietf:params:xml:ns:contact-1.0"
      xsi:schemaLocation="urn:ietf:params:xml:ns:contact-1.0
      contact-1.0.xsd">
       <contact:id>P-JMD24</contact:id>
        <contact:add>
        <contact:status s="clientDeleteProhibited"/>
        </contact:add>
       <contact:chg>
         <contact:postalInfo type="int">
           <contact:org/>
           <contact:addr>
             <contact:street>124 Example Dr.</contact:street>
             <contact:street>Suite 200</contact:street>
             <contact:city>Dulles</contact:city>
             <contact:sp>VA</contact:sp>
             <contact:pc>20166-6503</contact:pc>
             <contact:cc>US</contact:cc>
           </contact:addr>
         </contact:postalInfo>
         <contact:voice>+1.7034444444</contact:voice>
         <contact:fax/>
       </contact:chg>
     </contact:update>
   </update>
   <clTRID>C69B3942-2FFE-11DE-A4BB-8000000034E6</clTRID>
 </command>
</epp>
```

:::

 

:::response[Response]

```text
<?xml version="1.0" encoding="UTF-8"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <response>
   <result code="1000">
     <msg>Command completed successfully</msg>
   </result>
   <trID>
     <clTRID>C69B3942-2FFE-11DE-A4BB-8000000034E6</clTRID>
     <svTRID>D70E91A2-2FFE-11DE-9BEA-D9241CA305BD</svTRID>
   </trID>
 </response>
</epp>
```

:::

:::commandlist[Contact commands]

- [Contact:Check](../contact-check/)
- [Contact:Create](../contact-create/)
- [Contact:Delete](../contact-delete/)
- [Contact:Info](../contact-info/)
- [Contact:Info](../contact-info/)
- [Contact:OwnerChange](../contact-ownerchange/)
- [Contact:Transfer](../contact-transfer/)
- [Contact:Update](./)
- [Contact:UpdateCheckonly1](../contact-updatecheckonly1/)
- [Contact:UpdateTriggerfoa1](../contact-updatetriggerfoa1/)

:::
