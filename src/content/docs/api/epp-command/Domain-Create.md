---
title: "Domain:Create"
description: "EPP API Command Reference  ➤ Domain commands ➤ Domain:Create ➥ Learn more about EPP API Commands"
---

This commands invokes several processes: It checks if the domainname is available at the registry, creates the contacthandles in the registry and starts the registration at the registry. For a basic Create command, only a few common parameters are required. For some TLDs special parameters are required in order to register domains. All special parameters start with X-\- and can be found in the specific TLD Documentation. These parameters are submitted within the keysys extension.

-   [Default handling](#)
-   [Premium domain handling](#)

## Required Parameters

:::command[Command]

```text
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <command>
   <create>
     <domain:create
      xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
       <domain:name>example.asia</domain:name>
       <domain:period unit="y">2</domain:period>
       <domain:ns>
         <domain:hostObj>ns1.domaindiscount24.net</domain:hostObj>
         <domain:hostObj>ns2.domaindiscount24.net</domain:hostObj>
         <domain:hostObj>ns3.domaindiscount24.net</domain:hostObj>
       </domain:ns>
       <domain:registrant>P-JCD21</domain:registrant>
       <domain:contact type="admin">P-JCD21</domain:contact>
       <domain:contact type="tech">P-JCD21</domain:contact>
       <domain:contact type="billing">P-JCD21</domain:contact>
       <domain:authInfo>
         <domain:pw>2fooBAR</domain:pw>
       </domain:authInfo>
     </domain:create>
   </create>
   <extension>
     <keysys:create xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0">
       <keysys:domain>
         <keysys:asia-ced-accept-trustee-tac>1</keysys:asia-ced-accept-trustee-tac>
         <keysys:asia-maintainerurl>http://www.example.com</keysys:asia-maintainerurl>
         <keysys:whois-rsp>Example</keysys:whois-rsp>
         <keysys:whois-url>http://www.example.com</keysys:whois-url>
       </keysys:domain>
     </keysys:create>
   </extension>
   <clTRID>3F169D90-411F-11DE-84A7-80000000274B</clTRID>
 </command>
</epp>
```

:::

 

:::response[Response]

```text
<?xml version="1.0" encoding="UTF-8"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <response>
   <result code="1000">
     <msg>Command completed successfully</msg>
   </result>
   <resData>
     <domain:creData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
       <domain:name>example.com</domain:name>
       <domain:crDate>2009-04-22T13:04:21.0Z</domain:crDate>
       <domain:exDate>2011-04-22T13:04:21.0Z</domain:exDate>
     </domain:creData>
   </resData>
   <trID>
     <clTRID>3F169D90-411F-11DE-84A7-80000000274B</clTRID>
     <svTRID>17EAB41A-2F3E-11DE-A3B9-B0E6A3917139</svTRID>
   </trID>
 </response>
</epp>
```

:::

## IDN Registration Example 1

:::command[Command]

```text
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <command>
  <create>
   <domain:create
    xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
    <domain:name>xn--idn-beispiel--nfba.de</domain:name>
    <domain:period unit="y">1</domain:period>
    <domain:ns>
     <domain:hostObj>ns1.domaindiscount24.net</domain:hostObj>
     <domain:hostObj>ns2.domaindiscount24.net</domain:hostObj>
     <domain:hostObj>ns3.domaindiscount24.net</domain:hostObj>
    </domain:ns> 
    <domain:registrant>P-JCD21</domain:registrant>
    <domain:contact type="admin">P-JCD21</domain:contact>
    <domain:contact type="tech">P-JCD21</domain:contact>
    <domain:contact type="billing">P-JCD21</domain:contact>
    <domain:authInfo>
     <domain:pw>2fooBAR</domain:pw>
    </domain:authInfo>
   </domain:create>
  </create>
  <extension>
   <keysys:create xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0">
    <keysys:domain>
     <keysys:idn-language>GER</keysys:idn-language>
    </keysys:domain>
   </keysys:create>
  </extension>
  <clTRID>ABC-12345</clTRID>
 </command>
</epp>
```

:::

 

:::response[Response]

```text
<?xml version="1.0" encoding="UTF-8"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <response>
   <result code="1000">
     <msg>Command completed successfully</msg>
   </result>
   <resData>
     <domain:creData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
       <domain:name>xn--idn-beispiel--nfba.de</domain:name>
       <domain:crDate>2009-04-22T13:04:21.0Z</domain:crDate>
       <domain:exDate>2011-04-22T13:04:21.0Z</domain:exDate>
     </domain:creData>
   </resData>
   <trID>
     <clTRID>ABC-12345</clTRID>
     <svTRID>27ECB41A-3G3E-12FE-A4B9-B0A6A3937139</svTRID>
   </trID>
 </response>
</epp>
```

:::

## IDN Registration Example 2

:::command[Command]

```text
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <command>
  <create>
   <domain:create
   xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
    <domain:name>xn--idn-beispiel--nfba.de</domain:name>
    <domain:period unit="y">1</domain:period>
    <domain:ns>
     <domain:hostObj>ns1.domaindiscount24.net</domain:hostObj>
     <domain:hostObj>ns2.domaindiscount24.net</domain:hostObj>
     <domain:hostObj>ns3.domaindiscount24.net</domain:hostObj>
    </domain:ns>
    <domain:registrant>P-JCD21</domain:registrant>
    <domain:contact type="admin">P-JCD21</domain:contact>
    <domain:contact type="tech">P-JCD21</domain:contact>
    <domain:contact type="billing">P-JCD21</domain:contact>
    <domain:authInfo>
     <domain:pw>2fooBAR</domain:pw>
    </domain:authInfo>
   </domain:create>
  </create>
  <extension>
   <idn:language xmlns:idn="urn:ietf:params:xml:ns:idn-1.0">ger</idn:language>
  </extension>
  <clTRID>ABC-12345</clTRID>
 </command>
</epp>
```

:::

 

:::response[Response]

```text
<?xml version="1.0" encoding="UTF-8"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <response>
   <result code="1000">
     <msg>Command completed successfully</msg>
   </result>
   <resData>
     <domain:creData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
       <domain:name>xn--idn-beispiel--nfba.de</domain:name>
       <domain:crDate>2009-04-22T13:04:21.0Z</domain:crDate>
       <domain:exDate>2011-04-22T13:04:21.0Z</domain:exDate>
     </domain:creData>
   </resData>
   <trID>
     <clTRID>ABC-12345</clTRID>
     <svTRID>17EAC42B-5G3D-21SE-U3N8-C0E7A3918135</svTRID>
   </trID>
 </response>
</epp>
```

:::

## Required premium domain handling parameters

:::command[Command]

```text
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
  <command>
    <create>
      <domain:create xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
        <domain:name>example.blue</domain:name>
        <domain:period unit="y">1</domain:period>
        <domain:ns>
          <domain:hostObj>ns1.key-systems.net</domain:hostObj>
          <domain:hostObj>ns2.key-systems.net</domain:hostObj>
        </domain:ns>
        <domain:registrant>P-JPD21</domain:registrant>
        <domain:contact type="admin">P-JPD21</domain:contact>
        <domain:contact type="tech">P-JPD21</domain:contact>
        <domain:contact type="billing">P-JPD21</domain:contact>
        <domain:authInfo>
          <domain:pw>2fooBAR</domain:pw>
        </domain:authInfo>
      </domain:create>
    </create>
    <extension>
      <fee:create xmlns:fee="urn:ietf:params:xml:ns:fee-0.7">
        <fee:currency>USD</fee:currency>
        <fee:fee>743.75</fee:fee>
      </fee:create>
    </extension>
    <clTRID>32765351-60AC-40AD-9749-AC9E103D9DE7</clTRID>
  </command>
</epp>
```

:::

 

:::response[Response]

```text
<?xml version="1.0" encoding="UTF-8"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
  <response>
    <result code="1000">
      <msg>Command completed successfully</msg>
    </result>
    <resData>
      <domain:creData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
        <domain:name>example.blue</domain:name>
        <domain:crDate>2015-06-30T08:34:20.0Z</domain:crDate>
        <domain:exDate>2016-06-30T08:34:20.0Z</domain:exDate>
      </domain:creData>
    </resData>
    <extension>
      <fee:creData xmlns:fee="urn:ietf:params:xml:ns:fee-0.7">
        <fee:currency>USD</fee:currency>
        <fee:fee refundable="1" description="Registration fee">743.7500</fee:fee>
      </fee:creData>
    </extension>
    <trID>
      <clTRID>32765351-60AC-40AD-9749-AC9E103D9DE7</clTRID>
      <svTRID>72eb8e8f-ed0a-44c3-bc39-ed5d10669163</svTRID>
    </trID>
  </response>
</epp>
```

:::

:::commandlist[Domain commands]

- [Domain:Check](../domain-check/)
- [Domain:Create](./)
- [Domain:Delete](../domain-delete/)
- [Domain:Info](../domain-info/)
- [Domain:OwnerChange](../domain-ownerchange/)
- [Domain:Push](../domain-push/)
- [Domain:Renew](../domain-renew/)
- [Domain:Renewalmode](../domain-renewalmode/)
- [Domain:Restore](../domain-restore/)
- [Domain:Trade](../domain-trade/)
- [Domain:Update](../domain-update/)

:::
