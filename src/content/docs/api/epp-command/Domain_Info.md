---
title: "Domain:Info"
description: "EPP API Command Reference  ➤ Domain commands ➤ Domain:Info ➥ Learn more about EPP API Commands"
---

-   [Overview](../../epp-server/epp-command-reference/)
-   [OwnerChange](../domain_ownerchange/ "Domain:OwnerChange")

The Domain:Info command enables you to check the current status of a domain name. It gives information about the created date, expiration, renewal mode, transfer-lock, etc.

-   [Default handling](#)
-   [Premium domain handling](#)

## Required Parameters

### Command

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <command>
   <info>
     <domain:info
      xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
       <domain:name>example.com</domain:name>
     </domain:info>
   </info>
   <clTRID>07D102F6-2F3D-11DE-B362-80000000E123</clTRID>
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
   <resData>
     <domain:infData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
       <domain:name>example.com</domain:name>
       <domain:roid>2464151135031_DOMAIN-KEYSYS</domain:roid>
       <domain:status s="clientHold"/>
       <domain:status s="clientUpdateProhibited"/>
       <domain:registrant>P-JCD21</domain:registrant>
       <domain:contact type="admin">P-JID21</domain:contact>
       <domain:contact type="tech">P-JID21</domain:contact>
       <domain:contact type="billing">P-JID21</domain:contact>
       <domain:contact type="tech">P-JCD21</domain:contact>
       <domain:ns>
         <domain:hostObj>NS1.EXAMPLE.COM</domain:hostObj>
         <domain:hostObj>NS2.EXAMPLE.COM</domain:hostObj>
         <domain:hostObj>NS3.EXAMPLE.COM</domain:hostObj>
         <domain:hostObj>NS4.EXAMPLE.COM</domain:hostObj>
       </domain:ns>
       <domain:clID>reseller</domain:clID>
       <domain:crID>reseller</domain:crID>
       <domain:crDate>2016-12-27T13:46:20.0Z</domain:crDate>
       <domain:upID>reseller</domain:upID>
       <domain:upDate>2018-04-18T08:26:52.0Z</domain:upDate>
       <domain:exDate>2025-12-27T13:46:20.0Z</domain:exDate>
       <domain:authInfo>
         <domain:pw>2BARfoo2</domain:pw>
       </domain:authInfo>
     </domain:infData>
   </resData>
   <extension>
     <keysys:resData xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0">
       <keysys:infData>
         <keysys:renDate>2026-01-31T13:46:20.0Z</keysys:renDate>
          <keysys:punDate>2025-12-27T13:46:20.0Z</keysys:punDate>
          <keysys:domain-roid>1850955283_DOMAIN_COM-VRSN</keysys:domain-roid>
          <keysys:renewalmode>DEFAULT</keysys:renewalmode>
          <keysys:transferlock>1</keysys:transferlock>
          <keysys:transfermode>DEFAULT</keysys:transfermode>
       </keysys:infData>
     </keysys:resData>
     <secDNS:infData xmlns:secDNS="urn:ietf:params:xml:ns:secDNS-1.1">
        <secDNS:dsData>
          <secDNS:keyTag>51941</secDNS:keyTag>
          <secDNS:alg>8</secDNS:alg>
          <secDNS:digestType>2</secDNS:digestType>
          <secDNS:digest>96A73136C2362059487B60104F1A6F3C2877B7A9ED3873D9CE3DA76F297D45F9</secDNS:digest>
        </secDNS:dsData>
      </secDNS:infData>
   </extension>
   <trID>
     <clTRID>07D102F6-2F3D-11DE-B362-80000000E123</clTRID>
     <svTRID>09F0DBD8-2F3D-11DE-B232-DC436F017869</svTRID>
   </trID>
 </response>
</epp>
```

## Required premium domain handling parameters

### Command

```
<?xml version="1.0" encoding="utf-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
  <command>
    <info>
      <domain:info xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
        <domain:name hosts="all">example.blue</domain:name>
      </domain:info>
    </info>
    <extension>
      <fee:info xmlns:fee="urn:ietf:params:xml:ns:fee-0.7">
        <fee:currency>USD</fee:currency>
        <fee:command>create</fee:command>
        <fee:period unit="y">1</fee:period>
      </fee:info>
    </extension>
    <clTRID>AB2B573E-B0E8-4C51-AE18-8E28EFAF8B01</clTRID>
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
    <resData>
      <domain:infData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
        <domain:name>example.blue</domain:name>
        <domain:roid>1234567890_DOMAIN-KEYSYS</domain:roid>
        <domain:status s="ok"/>
        <domain:registrant>P-JPD21</domain:registrant>
        <domain:contact type="admin">P-JPD21</domain:contact>
        <domain:contact type="tech">P-JPD21</domain:contact>
        <domain:contact type="billing">P-JPD21</domain:contact>
        <domain:clID>registrar1</domain:clID>
        <domain:crID>registrar1</domain:crID>
        <domain:crDate>2015-06-30T08:34:20.0Z</domain:crDate>
        <domain:upID>registrar1</domain:upID>
        <domain:upDate>2015-06-30T08:34:20.0Z</domain:upDate>
        <domain:exDate>2016-06-30T08:34:20.0Z</domain:exDate>
      </domain:infData>
    </resData>
    <extension>
      <fee:infData xmlns:fee="urn:ietf:params:xml:ns:fee-0.7">
        <fee:currency>USD</fee:currency>
        <fee:command>create</fee:command>
        <fee:period unit="y">1</fee:period>
        <fee:fee refundable="1" description="Registration fee">743.7500</fee:fee>
        <fee:class>premium</fee:class>
      </fee:infData>
    </extension>
    <trID>
      <clTRID>AB2B573E-B0E8-4C51-AE18-8E28EFAF8B01</clTRID>
      <svTRID>8f42e12d-a3b6-49b4-a3c6-10ff24129d90</svTRID>
    </trID>
  </response>
</epp>
```
