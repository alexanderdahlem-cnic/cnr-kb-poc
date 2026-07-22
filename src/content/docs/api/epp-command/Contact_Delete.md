---
title: "Contact:Delete"
description: "EPP API Command Reference  ➤ Contact commands ➤ Contact:Delete ➥ Learn more about EPP API Commands"
---

The contact:delete removes a contact from the system. Please make sure that no clientDeleteProhibited status is set. Newly created contacts will automatically receive the AUTODELETE=1 flag, which will result in the automated deletion of contacts that have not been linked to a product for 120 days. Further details can be found at "Domains --> Contact Handles --> Automated Contact Deletion".

## Required Parameters

### Command

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0
    epp-1.0.xsd">
 <command>
   <delete>
     <contact:delete
      xmlns:contact="urn:ietf:params:xml:ns:contact-1.0"
      xsi:schemaLocation="urn:ietf:params:xml:ns:contact-1.0
      contact-1.0.xsd">
       <contact:id>P-JMD24</contact:id>
     </contact:delete>
   </delete>
   <clTRID>FDB67388-2FFE-11DE-970B-80000000568C</clTRID>
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
     <clTRID>FDB67388-2FFE-11DE-970B-80000000568C</clTRID>
     <svTRID>29B5C6C2-3005-11DE-9BD1-C9EF1D79318A</svTRID>
   </trID>
 </response>
</epp>
```
