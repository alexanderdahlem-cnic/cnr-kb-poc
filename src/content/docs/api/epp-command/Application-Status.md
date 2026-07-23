---
title: "Application:Status"
description: "EPP API Command Reference  ➤ Application commands ➤ Application:Status ➥ Learn more about EPP API Commands"
---

## Required Parameters

:::command[Command]

```text
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
  <command>
   <info>
    <domain:info
     xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
      <domain:name>example.tld</domain:name>
    </domain:info>
   </info>
   <extension>
    <launch:info
      xmlns:launch="urn:ietf:params:xml:ns:launch-1.0"
      includeMark="false">
      <launch:phase name="TLD-SUNRISE">custom</launch:phase>
      <launch:applicationID>123</launch:applicationID>
    </launch:info>
   </extension>
  <clTRID>C6A6B9E1-1AF3-44BB-81F0-41CE758FC1CF</clTRID>
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
    <resData>
      <domain:infData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
        <domain:name>example.tld</domain:name>
        <domain:roid>1234567890_DOMAPP-KEYSYS</domain:roid>
        <domain:status s="pendingCreate"/>
        <domain:registrant>EXAMPLE-0001</domain:registrant>
        <domain:contact type="admin">EXAMPLE-0001</domain:contact>
        <domain:contact type="tech">EXAMPLE-0001</domain:contact>
        <domain:contact type="billing">EXAMPLE-0001</domain:contact>
        <domain:clID>1234</domain:clID>
        <domain:crDate>2014-02-01T00:00:00.0Z</domain:crDate>
      </domain:infData>
    </resData>
    <extension>
      <launch:infData xmlns:launch="urn:ietf:params:xml:ns:launch-1.0">
        <launch:phase name="TLD-SUNRISE">custom</launch:phase>
        <launch:applicationID>123</launch:applicationID>
        <launch:status s="pendingValidation"/>
      </launch:infData>
    </extension>
    <trID>
      <clTRID>C6A6B9E1-1AF3-44BB-81F0-41CE758FC1CF</clTRID>
      <svTRID>51172b78-f383-4874-8b3d-61617c8139af</svTRID>
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
- [Application:Delete](../application-delete/)
- [Application:Failed](../application-failed/)
- [Application:Status](./)
- [Application:Successful](../application-successful/)

:::
