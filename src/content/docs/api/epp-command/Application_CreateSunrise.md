---
title: "Application:CreateSunrise"
description: "EPP API Command Reference  ➤ Application commands ➤ Application:CreateSunrise ➥ Learn more about EPP API Commands"
---

## Required Parameters

### Command

```
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
        <launch:phase name="TLD-SUNRISE">custom</launch:phase>
        <smd:encodedSignedMark
         xmlns:smd="urn:ietf:params:xml:ns:signedMark-1.0">
Marks: Example
smdID: 00000012345678901234567-65535
U-labels: example
notBefore: 2014-01-01 00:00:00
notAfter: 2018-01-01 00:00:00
-----BEGIN ENCODED SMD-----
[base64 encoded signed mark]
-----END ENCODED SMD-----
        </smd:encodedSignedMark>
      </launch:create>
    </extension>
    <clTRID>C6A6B9E1-1AF3-44BB-81F0-41CE758FC1CD</clTRID>
  </command>
</epp>
```

### Response

```
<?xml version="1.0" encoding="UTF-8"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
  <response>
    <result code="1001">
      <msg>Command completed successfully; action pending</msg>
    </result>
    <resData>
      <domain:creData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
        <domain:name>example.tld</domain:name>
        <domain:crDate>2014-02-11T11:19:52.0Z</domain:crDate>
      </domain:creData>
    </resData>
    <extension>
      <launch:creData xmlns:launch="urn:ietf:params:xml:ns:launch-1.0">
        <launch:phase name="TLD-SUNRISE">custom</launch:phase>
        <launch:applicationID>123</launch:applicationID>
      </launch:creData>
    </extension>
    <trID>
      <clTRID>C6A6B9E1-1AF3-44BB-81F0-41CE758FC1CD</clTRID>
      <svTRID>25c95d76-2d30-4c2d-b029-17a6a9946da5</svTRID>
    </trID>
  </response>
</epp>
```
