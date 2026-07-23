---
title: "Application:CreateLandrush"
description: "EPP API Command Reference  ➤ Application commands ➤ Application:CreateLandrush ➥ Learn more about EPP API Commands"
---

## Required Parameters

:::command[Command]

```text
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
  <command>
    <create>
      <domain:create
       xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
        <domain:name>example.tld</domain:name>
        <domain:registrant>EXAMPLE-0001</domain:registrant>
        <domain:contact type="admin">EXAMPLE-0001</domain:contact>
        <domain:contact type="tech">EXAMPLE-0001</domain:contact>
        <domain:contact type="billing">EXAMPLE-0001</domain:contact>
        <domain:authInfo>
          <domain:pw>2fooBAR!</domain:pw>
        </domain:authInfo>
      </domain:create>
    </create>
    <extension>
      <launch:create
       xmlns:launch="urn:ietf:params:xml:ns:launch-1.0">
        <launch:phase name="TLD-LANDRUSH">custom</launch:phase>
      </launch:create>
    </extension>
    <clTRID>C6A6B9E1-1AF3-44BB-81F0-41CE758FC1C1</clTRID>
  </command>
</epp>
```

:::

 

:::response[Response]

```text
<?xml version="1.0" encoding="UTF-8"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
  <response>
    <result code="1001">
      <msg>Command completed successfully; action pending</msg>
    </result>
    <resData>
      <domain:creData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
        <domain:name>example.tld</domain:name>
        <domain:crDate>2014-02-11T16:35:54.0Z</domain:crDate>
      </domain:creData>
    </resData>
    <extension>
      <launch:creData xmlns:launch="urn:ietf:params:xml:ns:launch-1.0">
        <launch:phase name="TLD-LANDRUSH">custom</launch:phase>
        <launch:applicationID>10000499</launch:applicationID>
      </launch:creData>
    </extension>
    <trID>
      <clTRID>C6A6B9E1-1AF3-44BB-81F0-41CE758FC1C1</clTRID>
      <svTRID>1b82cb58-1d97-4813-9718-16b3baa39528</svTRID>
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
    <create>
      <domain:create
       xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
        <domain:name>example.tld</domain:name>
        <domain:registrant>EXAMPLE-0001</domain:registrant>
        <domain:contact type="admin">EXAMPLE-0001</domain:contact>
        <domain:contact type="tech">EXAMPLE-0001</domain:contact>
        <domain:contact type="billing">EXAMPLE-0001</domain:contact>
        <domain:authInfo>
          <domain:pw>2fooBAR!</domain:pw>
        </domain:authInfo>
      </domain:create>
    </create>
    <extension>
      <launch:create
       xmlns:launch="urn:ietf:params:xml:ns:launch-1.0">
        <launch:phase name="TLD-LANDRUSH">custom</launch:phase>
        <launch:notice>
          <launch:noticeID validatorID="tmch">ec0ea0ce0000000000000012345</launch:noticeID>
          <launch:notAfter>2014-01-01T00:00:00.0Z</launch:notAfter>
          <launch:acceptedDate>2014-01-24T00:00:00.0Z</launch:acceptedDate>
        </launch:notice>
      </launch:create>
    </extension>
    <clTRID>C6A6B9E1-1AF3-44BB-81F0-41CE758FC1C2</clTRID>
  </command>
</epp>
```

:::

 

:::response[Response]

```text
<?xml version="1.0" encoding="UTF-8"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
  <response>
    <result code="1001">
      <msg>Command completed successfully; action pending</msg>
    </result>
    <resData>
      <domain:creData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
        <domain:name>example.tld</domain:name>
        <domain:crDate>2014-02-11T16:35:54.0Z</domain:crDate>
      </domain:creData>
    </resData>
    <extension>
      <launch:creData xmlns:launch="urn:ietf:params:xml:ns:launch-1.0">
        <launch:phase name="TLD-LANDRUSH">custom</launch:phase>
        <launch:applicationID>10000499</launch:applicationID>
      </launch:creData>
    </extension>
    <trID>
      <clTRID>C6A6B9E1-1AF3-44BB-81F0-41CE758FC1C1</clTRID>
      <svTRID>1b82cb58-1d97-4813-9718-16b3baa39528</svTRID>
    </trID>
  </response>
</epp>
```

:::

:::commandlist[Application commands]

- [Application:CheckClaims](../application-checkclaims/)
- [Application:CreateDomainWithClaims](../application-createdomainwithclaims/)
- [Application:CreateLandrush](./)
- [Application:CreateSunrise](../application-createsunrise/)
- [Application:Delete](../application-delete/)
- [Application:Failed](../application-failed/)
- [Application:Status](../application-status/)
- [Application:Successful](../application-successful/)

:::
