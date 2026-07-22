---
title: "Application:Failed"
description: "EPP API Command Reference  ➤ Application commands ➤ Application:Failed ➥ Learn more about EPP API Commands"
---

Application Failed (rejected)

## Required Parameters

### Response

```
<?xml version="1.0" encoding="UTF-8"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
  <response>
    <result code="1301">
      <msg>Command completed successfully; ack to dequeue</msg>
    </result>
    <msgQ count="1" id="14">
      <qDate>2014-02-19T15:50:00.0Z</qDate>
      <msg>DOMAIN_APPLICATION_FAILED</msg>
    </msgQ>
    <resData>
      <domain:panData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
        <domain:name paResult="0">example.tld</domain:name>
        <domain:paTRID>
          <svTRID>UNDEF</svTRID>
        </domain:paTRID>
        <domain:paDate>2014-02-19T15:50:00.0Z</domain:paDate>
      </domain:panData>
    </resData>
    <extension>
      <launch:infData xmlns:launch="urn:ietf:params:xml:ns:launch-1.0">
        <launch:phase name="TLD-SUNRISE">custom</launch:phase>
        <launch:applicationID>6</launch:applicationID>
        <launch:status s="rejected"/>
      </launch:infData>
    </extension>
    <trID>
      <clTRID>KSregistry-12345</clTRID>
      <svTRID>1a204374-8021-4ee1-910e-cd662e1731f9</svTRID>
    </trID>
  </response>
</epp>
```
