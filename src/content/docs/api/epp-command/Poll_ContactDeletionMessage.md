---
title: "Poll:ContactDeletionMessage"
description: "EPP API Command Reference  ➤ Poll commands ➤ Poll:ContactDeletionMessage ➥ Learn more about EPP API Commands"
---

-   [Overview](../../epp-server/epp-command-reference/)
-   [DomainDeletionMessage](../poll_domaindeletionmessage/ "Poll:DomainDeletionMessage")

## Required Parameters

### Response

```
<?xml version="1.0" encoding="UTF-8"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
  <response>
    <result code="1301">
      <msg>Command completed successfully; ack to dequeue</msg>
    </result>
    <msgQ count="10" id="5705">
      <qDate>2018-09-21T11:34:18.0Z</qDate>
      <msg>CONTACT_DELETION_SUCCESSFUL</msg>
    </msgQ>
    <resData>
      <contact:panData xmlns:contact="urn:ietf:params:xml:ns:contact-1.0">
        <contact:id paResult="1">O-ACM22</contact:id>
        <contact:paTRID>
          <svTRID>UNDEF</svTRID>
        </contact:paTRID>
        <contact:paDate>2018-09-21T11:34:18.0Z</contact:paDate>
      </contact:panData>
    </resData>
    <extension>
      <keysys:poll xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0">
        <keysys:data>
          <contact>O-ACM22</contact>
          <autodelete>1</autodelete>
        </keysys:data>
        <keysys:info>Unused contact autodeletion</keysys:info>
      </keysys:poll>
    </extension>
    <trID>
      <clTRID>ABC-12345</clTRID>
      <svTRID>ddcf0b8b-7117-413b-a242-92726f1a581d</svTRID>
    </trID>
  </response>
</epp>
```
