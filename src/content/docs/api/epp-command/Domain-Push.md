---
title: "Domain:Push"
description: "EPP API Command Reference  ➤ Domain commands ➤ Domain:Push ➥ Learn more about EPP API Commands"
---

The Push Domain is used to send .DE / .AT domains to transit / billwithdraw status and to change the tag or delete a .UK domain.

## Required Parameters

:::command[Command]

```text
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
  <command>
    <delete>
      <domain:delete
       xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
        <domain:name>delete.co.uk</domain:name>
      </domain:delete>
    </delete>
    <extension>
      <keysys:delete xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0">
        <keysys:domain>
          <keysys:action>push</keysys:action>
          <keysys:target>DETAGGED</keysys:target>
        </keysys:domain>
      </keysys:delete>
    </extension>
    <clTRID>242BB8EF-D23A-4BBC-8338-B5C9B97128FC</clTRID>
  </command>
</epp>
```

:::

### Attributes

| **DOMAIN** | The domain name to be pushed |
| --- | --- |
| **TARGET** | Where to push the domain |
|  | .DE target: TRANSIT (push domain back to registry) |
|  | .AT target: REGISTRY (push domain back to registry) |
|  | .UK target: EXAMPLE-TAG-HOLDER (new IPS TAG) DETAGGED (push domain back to registry) |

:::commandlist[Domain commands]

- [Domain:Check](../domain-check/)
- [Domain:Create](../domain-create/)
- [Domain:Delete](../domain-delete/)
- [Domain:Info](../domain-info/)
- [Domain:OwnerChange](../domain-ownerchange/)
- [Domain:Push](./)
- [Domain:Renew](../domain-renew/)
- [Domain:Renewalmode](../domain-renewalmode/)
- [Domain:Restore](../domain-restore/)
- [Domain:Trade](../domain-trade/)
- [Domain:Update](../domain-update/)

:::
