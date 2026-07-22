---
title: "Domain:Restore"
description: "EPP API Command Reference  ➤ Domain commands ➤ Domain:Restore ➥ Learn more about EPP API Commands"
---

This command is required to restore a domain after deletion or expiration, if a restore is supported by the TLD.

-   [Default handling](#)
-   [Premium domain handling](#)

## Required Parameters

### Command

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <command>
   <update>
     <domain:update xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
       <domain:name>example.com</domain:name>
       <domain:chg/>
     </domain:update>
   </update>
   <extension>
     <rgp:update xmlns:rgp="urn:ietf:params:xml:ns:rgp-1.0">
       <rgp:restore op="request"/>
     </rgp:update>
   </extension>
   <clTRID>CE3FA053-CE97-44EA-A857-E028B6750BE2</clTRID>
 </command>
</epp>
```

## Required premium domain handling parameters

### Command

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
  <command>
    <update>
      <domain:update xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
        <domain:name>example.blue</domain:name>
        <domain:chg/>
      </domain:update>
    </update>
    <extension>
      <rgp:update xmlns:rgp="urn:ietf:params:xml:ns:rgp-1.0">
        <rgp:restore op="request"/>
      </rgp:update>
      <fee:update xmlns:fee="urn:ietf:params:xml:ns:fee-0.7">
        <fee:currency>USD</fee:currency>
        <fee:fee>107.1000</fee:fee>
      </fee:update>
    </extension>
    <clTRID>476046B7-5E04-43EC-B3BE-B4E8D83BED1A</clTRID>
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
      <fee:updData xmlns:fee="urn:ietf:params:xml:ns:fee-0.7">
        <fee:currency>USD</fee:currency>
        <fee:fee refundable="1" description="Restore fee">107.1000</fee:fee>
      </fee:updData>
    </extension>
    <trID>
      <clTRID>476046B7-5E04-43EC-B3BE-B4E8D83BED1A</clTRID>
      <svTRID>a6a45f48-4279-4a74-8222-4643464c2440</svTRID>
    </trID>
  </response>
</epp>
```
