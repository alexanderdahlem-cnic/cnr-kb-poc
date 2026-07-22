---
title: "Poll:RestoreFailedMessage"
description: "EPP API Command Reference  ➤ Poll commands ➤ Poll:RestoreFailedMessage ➥ Learn more about EPP API Commands"
---

Domain Restore Failed Poll Message

## Required Parameters

### Response

```
<?xml version="1.0" encoding="UTF-8"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
  <response>
    <result code="1301">
      <msg>Command completed successfully; ack to dequeue</msg>
    </result>
    <msgQ count="1" id="2351">
      <qDate>2015-02-25T14:07:18.0Z</qDate>
      <msg>DOMAIN_RESTORE_FAILED</msg>
    </msgQ>
    <resData>
      <domain:panData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
        <domain:name paResult="0">example.com</domain:name>
        <domain:paTRID>
          <clTRID>ECA21919-4B41-40BB-8A9F-ED6849950154</clTRID>
          <svTRID>33a2eb76-4295-43f1-a1f6-c757e8d1be41</svTRID>
        </domain:paTRID>
        <domain:paDate>2015-02-25T14:07:18.0Z</domain:paDate>
      </domain:panData>
    </resData>
    <trID>
      <clTRID>8C8B693B-B5E5-47D9-B40A-0FDC10307DF7</clTRID>
      <svTRID>434ec058-9640-4deb-85c6-8e7f497e4acf</svTRID>
    </trID>
  </response>
</epp>
```
