---
title: "Domain:Update"
description: "EPP API Command Reference  ➤ Domain commands ➤ Domain:Update ➥ Learn more about EPP API Commands"
---

Update domain information like contacts or name servers.

## Required Parameters

:::command[Command]

```text
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <command>
   <update>
     <domain:update
      xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
       <domain:name>example.com</domain:name>
       <domain:add>
         <domain:ns>
           <domain:hostObj>ns1.domaindiscount24.net</domain:hostObj>
         </domain:ns>
         <domain:contact type="billing">P-JQD21</domain:contact>
         <domain:status s="clientTransferProhibited"/>
       </domain:add>
       <domain:rem>
         <domain:ns>
           <domain:hostObj>ns1.example.com</domain:hostObj>
         </domain:ns>
         <domain:contact type="tech">P-JID21</domain:contact>
         <domain:status s="clientUpdateProhibited"/>
       </domain:rem>
       <domain:chg>
         <domain:registrant>P-JQD21</domain:registrant>
         <domain:authInfo>
           <domain:pw>2fooBAR</domain:pw>
         </domain:authInfo>
       </domain:chg>
     </domain:update>
   </update>
   <clTRID>6A464E50-300A-11DE-B776-80000000AE6H</clTRID>
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
     <clTRID>6A464E50-300A-11DE-B776-80000000AE6H</clTRID>
     <svTRID>AAE6E292-3011-11DE-B8D5-FA031D34C8E4</svTRID>
   </trID>
 </response>
</epp>
```

:::

:::commandlist[Domain commands]

- [Domain:Check](../domain-check/)
- [Domain:Create](../domain-create/)
- [Domain:Delete](../domain-delete/)
- [Domain:Info](../domain-info/)
- [Domain:OwnerChange](../domain-ownerchange/)
- [Domain:Push](../domain-push/)
- [Domain:Renew](../domain-renew/)
- [Domain:Renewalmode](../domain-renewalmode/)
- [Domain:Restore](../domain-restore/)
- [Domain:Trade](../domain-trade/)
- [Domain:Update](./)

:::
