---
title: "Domain:Delete"
description: "EPP API Command Reference  ➤ Domain commands ➤ Domain:Delete ➥ Learn more about EPP API Commands"
---

-   [Overview](../../epp-server/epp-command-reference/)
-   [Info](../domain_info/ "Domain:Info")

## Required Parameters

### Command

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <command>
   <delete>
     <domain:delete xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
       <domain:name>example50.com</domain:name>
     </domain:delete>
   </delete>
   <clTRID>734ABADA-3015-11DE-A6A7-800000008EDE</clTRID>
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
     <clTRID>734ABADA-3015-11DE-A6A7-800000008EDE</clTRID>
     <svTRID>77FC94EA-3015-11DE-9878-8D01B5F06CC6</svTRID>
   </trID>
 </response>
</epp>
```
