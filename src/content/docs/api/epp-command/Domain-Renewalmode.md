---
title: "Domain:Renewalmode"
description: "EPP API Command Reference  ➤ Domain commands ➤ Domain:Renewalmode ➥ Learn more about EPP API Commands"
---

If you want to change the renewalmode of a domain from DEFAULT(equals AUTORENEW) to AUTOEXPIRE or AUTODELETE, you can do so with the following command.

## Required Parameters

:::command[Command]

```text
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <command>
   <update>
     <domain:update xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
       <domain:name>example.com</domain:name>
     </domain:update>
   </update>
   <extension>
     <keysys:update xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0">
      <keysys:domain>
       <keysys:renewalmode>AUTOEXPIRE</keysys:renewalmode>
      </keysys:domain>
     </keysys:update>
   </extension>
   <clTRID>9B983473-3822-4C54-AA7D-AA2D857E8F35</clTRID>
 </command>
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
- [Domain:Renewalmode](./)
- [Domain:Restore](../domain-restore/)
- [Domain:Trade](../domain-trade/)
- [Domain:Update](../domain-update/)

:::
