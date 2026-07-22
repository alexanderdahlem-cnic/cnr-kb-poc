---
title: "Domain:Trade"
description: "EPP API Command Reference  ➤ Domain commands ➤ Domain:Trade ➥ Learn more about EPP API Commands"
---

## Required Parameters

### Command

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <command>
   <update>
     <domain:update xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
       <domain:name>example.ch</domain:name>
       <domain:chg>
         <domain:registrant>P-NEW</domain:registrant>
       </domain:chg>
     </domain:update>
   </update>
   <extension>
     <keysys:update xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0">
       <keysys:domain>
         <keysys:accept-trade>1</keysys:accept-trade>
       </keysys:domain>
     </keysys:update>
   </extension>
   <clTRID>695B8383-B2D4-4E58-87A4-6C536A5E894A</clTRID>
 </command>
</epp>
```
