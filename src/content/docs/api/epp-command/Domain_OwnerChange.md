---
title: "Domain:OwnerChange"
description: "EPP API Command Reference  ➤ Domain commands ➤ Domain:OwnerChange ➥ Learn more about EPP API Commands"
---

## Required Parameters

### Command

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
  <command>
    <update>
      <domain:update xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
        <domain:name>domain.com</domain:name>
        <domain:chg>
          <domain:registrant>P-ABC123</domain:registrant>
        </domain:chg>
      </domain:update>
    </update>
    <extension>
      <keysys:update xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0">
        <keysys:domain>
          <keysys:triggerfoa>1</keysys:triggerfoa>
        </keysys:domain>
      </keysys:update>
    </extension>
    <clTRID>58A999EA-81B0-40AB-BEC6-ABFEE2222C12</clTRID>
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
      <keysys:resData xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0">
        <keysys:updData>
          <keysys:ownerchangestatus>REQUESTED</keysys:ownerchangestatus>
        </keysys:updData>
      </keysys:resData>
    </extension>
    <trID>
      <clTRID>58A999EA-81B0-40AB-BEC6-ABFEE2222C12</clTRID>
      <svTRID>2bf03ffe-1d6e-4493-903a-5b69d393b12d</svTRID>
    </trID>
  </response>
</epp>
```
