---
title: "Session:Hello"
description: "EPP API Command Reference  ➤ Session commands ➤ Session:Hello ➥ Learn more about EPP API Commands"
---

## Required Parameters

### Command

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
   <hello/>
</epp>
```

### Response

```
<?xml version="1.0" encoding="UTF-8"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
  <greeting>
    <svID>Key-Systems EPP Server OTE</svID>
    <svDate>2018-07-06T10:45:41.0Z</svDate>
    <svcMenu>
      <version>1.0</version>
      <lang>en</lang>
      <objURI>urn:ietf:params:xml:ns:domain-1.0</objURI>
      <objURI>urn:ietf:params:xml:ns:contact-1.0</objURI>
      <objURI>urn:ietf:params:xml:ns:host-1.0</objURI>
      <svcExtension>
        <extURI>http://www.key-systems.net/epp/keysys-1.0</extURI>
        <extURI>http://www.key-systems.net/epp/query-1.0</extURI>
        <extURI>urn:ietf:params:xml:ns:secDNS-1.1</extURI>
        <extURI>urn:ietf:params:xml:ns:rgp-1.0</extURI>
        <extURI>urn:ietf:params:xml:ns:launch-1.0</extURI>
        <extURI>urn:ietf:params:xml:ns:idn-1.0</extURI>
        <extURI>urn:ietf:params:xml:ns:fee-0.7</extURI>
      </svcExtension>
    </svcMenu>
    <dcp>
      <access>
        <all/>
      </access>
      <statement>
        <purpose>
          <admin/>
          <prov/>
        </purpose>
        <recipient>
          <ours/>
          <public/>
        </recipient>
        <retention>
          <stated/>
        </retention>
      </statement>
    </dcp>
  </greeting>
</epp>
```
