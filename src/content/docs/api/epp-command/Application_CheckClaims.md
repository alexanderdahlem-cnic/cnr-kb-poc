---
title: "Application:CheckClaims"
description: "EPP API Command Reference  ➤ Application commands ➤ Application:CheckClaims ➥ Learn more about EPP API Commands"
---

-   [Overview](../../epp-server/epp-command-reference/)
-   [CreateDomainWithClaims](../application_createdomainwithclaims/ "Application:CreateDomainWithClaims")

## Required Parameters

### Command

```
<?xml version="1.0" encoding="UTF-8"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
  <command>
    <check>
      <domain:check xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"
xsi:schemaLocation="urn:ietf:params:xml:ns:domain-1.0 domain-1.0.xsd">
        <domain:name>example1.tld</domain:name>
        <domain:name>example2.tld</domain:name>
        <domain:name>example3.tld</domain:name>
      </domain:check>
    </check>
    <extension>
      <launch:check xmlns:launch="urn:ietf:params:xml:ns:launch-1.0"
       xsi:schemaLocation="urn:ietf:params:xml:ns:launch-1.0 launch-1.0.xsd"
       type="claims">
        <launch:phase>claims</launch:phase>
      </launch:check>
    </extension>
    <clTRID>C6A6B9E1-1AF3-44BB-81F0-41CE758FC1CC</clTRID>
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
    <extension>
      <launch:chkData xmlns:launch="urn:ietf:params:xml:ns:launch-1.0">
        <launch:phase>claims</launch:phase>
        <launch:cd>
          <launch:name exists="0">example1.tld</launch:name>
        </launch:cd>
        <launch:cd>
          <launch:name exists="1">example2.tld</launch:name>
          <launch:claimKey>/G4yEclOt/RaMgEROrjkxx16xLVEW9e/WkVj7gx+T3O6STwj1n3yNGcZKlEV9ZLOPinOb1S5WWJQ vJ7W+3SunA==
          </launch:claimKey>
        </launch:cd>
        <launch:cd>
          <launch:name exists="0">example3.tld</launch:name>
        </launch:cd>
      </launch:chkData>
    </extension>
    <trID>
      <clTRID>C6A6B9E1-1AF3-44BB-81F0-41CE758FC1CC</clTRID>
      <svTRID>2595c13c-5019-4a46-88e1-434997ae81e7</svTRID>
    </trID>
  </response>
</epp>
```
