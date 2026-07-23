---
title: "Host:Delete"
description: "EPP API Command Reference  ➤ Host commands ➤ Host:Delete ➥ Learn more about EPP API Commands"
---

## Required Parameters

:::command[Command]

```text
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <command>
   <delete>
     <host:delete
      xmlns:host="urn:ietf:params:xml:ns:host-1.0">
       <host:name>ns4.example.com</host:name>
     </host:delete>
   </delete>
   <clTRID>E589498A-2FE4-11DE-8C29-80000000322D</clTRID>
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
     <clTRID>E589498A-2FE4-11DE-8C29-80000000322D</clTRID>
     <svTRID>ECC408CA-2FE4-11DE-9E78-DB445B12E657</svTRID>
   </trID>
 </response>
</epp>
```

:::

## Optional Parameters

:::command[Command]

```text
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
  <command>
    <delete>
      <host:delete
       xmlns:host="urn:ietf:params:xml:ns:host-1.0">
        <host:name>NS1.EXAMPLE.COM</host:name>
      </host:delete>
    </delete>
  <extension>
      <keysys:delete xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0">
        <keysys:host>
          <keysys:force>1</keysys:force>
        </keysys:host>
      </keysys:delete>
    </extension>
    <clTRID>ABC-12345</clTRID>
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
      <clTRID>ABC-12345</clTRID>
      <svTRID>4506fc45-509a-4be8-b8e2-c2b9bbf8d557</svTRID>
    </trID>
  </response>
</epp>
```

:::

### Attributes

| **Force** | Renames the Host in the background to ensure that a DeleteDomain is possible, if necessary. |
| --- | --- |

:::commandlist[Host commands]

- [Host:Check](../host-check/)
- [Host:Create](../host-create/)
- [Host:Delete](./)
- [Host:Info](../host-info/)
- [Host:Update](../host-update/)

:::
