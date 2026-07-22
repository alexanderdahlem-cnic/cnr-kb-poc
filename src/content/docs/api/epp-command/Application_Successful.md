---
title: "Application:Successful"
description: "EPP API Command Reference  ➤ Application commands ➤ Application:Successful ➥ Learn more about EPP API Commands"
---

Application Successful (allocated)

## Required Parameters

### Response

```
<?xml version="1.0" encoding="UTF-8"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
  <response>
    <result code="1301">
      <msg>Command completed successfully; ack to dequeue</msg>
    </result>
    <msgQ count="11" id="4">
      <qDate>2014-02-18T14:48:47.0Z</qDate>
      <msg>DOMAIN_APPLICATION_SUCCESSFUL</msg>
    </msgQ>
    <resData>
      <domain:panData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
        <domain:name paResult="1">example.tld</domain:name>
        <domain:paTRID>
          <svTRID>UNDEF</svTRID>
        </domain:paTRID>
        <domain:paDate>2014-02-19T15:50:00.0Z</domain:paDate>
      </domain:panData>
    </resData>
    <extension>
      <launch:infData xmlns:launch="urn:ietf:params:xml:ns:launch-1.0">
        <launch:phase name="TLD-SUNRISE">custom</launch:phase>
        <launch:applicationID>5</launch:applicationID>
        <launch:status s="allocated"/>
      </launch:infData>
    </extension>
    <trID>
      <clTRID>KSregistry-12345</clTRID>
      <svTRID>d0a912db-719e-4d82-a299-76eb144a6693</svTRID>
    </trID>
  </response>
</epp>
```
