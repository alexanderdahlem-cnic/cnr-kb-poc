---
title: "Application:Delete"
description: "EPP API Command Reference  ➤ Application commands ➤ Application:Delete ➥ Learn more about EPP API Commands"
---

## Required Parameters

:::command[Command]

```text
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
  <command>
    <delete>
      <domain:delete
       xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
        <domain:name>example.tld</domain:name>
      </domain:delete>
    </delete>
    <extension>
     <launch:delete
      xmlns:launch="urn:ietf:params:xml:ns:launch-1.0">
       <launch:phase name="TLD-SUNRISE">custom</launch:phase>
       <launch:applicationID>123</launch:applicationID>
     </launch:delete>
    </extension>
    <clTRID>62CB2558-A467-495E-89BF-3ACF9F1EAF9B</clTRID>
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
      <clTRID>62CB2558-A467-495E-89BF-3ACF9F1EAF9B</clTRID>
      <svTRID>0ee118e6-155e-4ffe-9fb0-1db13d24c5f2</svTRID>
    </trID>
  </response>
</epp>
```

:::

:::commandlist[Application commands]

- [Application:CheckClaims](../application-checkclaims/)
- [Application:CreateDomainWithClaims](../application-createdomainwithclaims/)
- [Application:CreateLandrush](../application-createlandrush/)
- [Application:CreateSunrise](../application-createsunrise/)
- [Application:Delete](./)
- [Application:Failed](../application-failed/)
- [Application:Status](../application-status/)
- [Application:Successful](../application-successful/)

:::
