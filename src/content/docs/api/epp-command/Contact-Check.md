---
title: "Contact:Check"
description: "EPP API Command Reference  ➤ Contact commands ➤ Contact:Check ➥ Learn more about EPP API Commands"
---

Check, if the contact ID is available or already in use.

## Required Parameters

:::command[Command]

```text
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
 <command>
   <check>
     <contact:check
      xmlns:contact="urn:ietf:params:xml:ns:contact-1.0">
       <contact:id>P-JCD21</contact:id>
     </contact:check>
   </check>
   <clTRID>30F11A90-2FFB-11DE-ADDE-80000000D51D</clTRID>
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
   <resData xmlns:contact="urn:ietf:params:xml:ns:contact-1.0">
     <contact:chkData>
       <contact:cd>
         <contact:id avail="1">P-JMD24</contact:id>
       </contact:cd>
     </contact:chkData>
   </resData>
   <trID>
     <clTRID>30F11A90-2FFB-11DE-ADDE-80000000D51D</clTRID>
     <svTRID>32C1BC3A-2FFB-11DE-B49B-B7731FA00EDE</svTRID>
   </trID>
 </response>
</epp>
```

:::

:::commandlist[Contact commands]

- [Contact:Check](./)
- [Contact:Create](../contact-create/)
- [Contact:Delete](../contact-delete/)
- [Contact:Info](../contact-info/)
- [Contact:Info](../contact-info/)
- [Contact:OwnerChange](../contact-ownerchange/)
- [Contact:Transfer](../contact-transfer/)
- [Contact:Update](../contact-update/)
- [Contact:UpdateCheckonly1](../contact-updatecheckonly1/)
- [Contact:UpdateTriggerfoa1](../contact-updatetriggerfoa1/)

:::
