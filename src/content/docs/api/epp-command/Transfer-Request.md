---
title: "Transfer:Request"
description: "EPP API Command Reference  ➤ Transfer commands ➤ Transfer:Request ➥ Learn more about EPP API Commands"
---

The Transfer:Request initiates the process to transfer a domain from one registrar to another.

-   [Default handling](#)
-   [Premium domain handling](#)

## Required Parameters

:::command[Command]

```text
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <command>
   <transfer op="request">
     <domain:transfer
      xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
       <domain:name>example10.com</domain:name>
       <domain:authInfo>
         <domain:pw>2fooBAR</domain:pw>
       </domain:authInfo>
     </domain:transfer>
   </transfer>
   <clTRID>D8592128-3015-11DE-8A79-800000000B2C</clTRID>
 </command>
</epp>
```

:::

 

:::response[Response]

```text
<?xml version="1.0" encoding="UTF-8"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <response>
   <result code="1001">
     <msg>Command completed successfully; action pending</msg>
   </result>
   <resData>
     <domain:trnData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
       <domain:name>example10.com</domain:name>
       <domain:trStatus>pending</domain:trStatus>
       <domain:reID>messe</domain:reID>
       <domain:reDate>2009-04-23T14:49:23.0Z</domain:reDate>
       <domain:acID>unknown</domain:acID>
       <domain:acDate>0001-01-01T00:00:00.0Z</domain:acDate>
     </domain:trnData>
   </resData>
   <trID>
     <clTRID>D8592128-3015-11DE-8A79-800000000B2C</clTRID>
     <svTRID>EF56C7D6-3015-11DE-9A09-DF0C9B1D225A</svTRID>
   </trID>
 </response>
</epp>
```

:::

## Optional Parameters

:::command[Command]

```text
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
  <command>
    <transfer op="request">
      <domain:transfer
       xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
        <domain:name>example.fr</domain:name>
        <domain:authInfo>
          <domain:pw>2fooBAR</domain:pw>
        </domain:authInfo>
      </domain:transfer>
    </transfer>
    <extension>
      <keysys:transfer xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0">
        <keysys:domain>
          <keysys:admincontact0>P-ABC123</keysys:admincontact0>
          <keysys:billingcontact0>P-ABC123</keysys:billingcontact0>
          <keysys:nameserver0>ns1.nameserver.com</keysys:nameserver0>
          <keysys:nameserver1>ns2.nameserver.com</keysys:nameserver1>
          <keysys:ownercontact0>P-ABC123</keysys:ownercontact0>
          <keysys:techcontact0>P-ABC123</keysys:techcontact0>
        </keysys:domain>
      </keysys:transfer>
    </extension>
    <clTRID>C5996C75-754A-4B88-80E6-90FED1207B0D</clTRID>
  </command>
</epp>
```

:::

## Required premium domain handling parameters

:::command[Command]

```text
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
  <command>
    <transfer op="request">
      <domain:transfer
       xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
        <domain:name>example.blue</domain:name>
        <domain:period unit="y">1</domain:period>
        <domain:authInfo>
          <domain:pw>2fooBAR</domain:pw>
        </domain:authInfo>
      </domain:transfer>
    </transfer>
    <extension>
      <fee:transfer xmlns:fee="urn:ietf:params:xml:ns:fee-0.7">
        <fee:currency>USD</fee:currency>
        <fee:fee>743.75</fee:fee>
      </fee:transfer>
    </extension>
    <clTRID>6A15FDA8-6FD3-4941-B05D-E8014D1BD8CE</clTRID>
  </command>
</epp>
```

:::

 

:::response[Response]

```text
<?xml version="1.0" encoding="UTF-8"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
  <response>
    <result code="1001">
      <msg>Command completed successfully; action pending</msg>
    </result>
    <resData>
      <domain:trnData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
        <domain:name>example.blue</domain:name>
        <domain:trStatus>pending</domain:trStatus>
        <domain:reID>registrar2</domain:reID>
        <domain:reDate>2015-06-30T08:54:33.0Z</domain:reDate>
        <domain:acID>registrar1</domain:acID>
        <domain:acDate>2015-07-05T08:54:33.0Z</domain:acDate>
      </domain:trnData>
    </resData>
    <extension>
      <fee:trnData xmlns:fee="urn:ietf:params:xml:ns:fee-0.7">
        <fee:currency>USD</fee:currency>
        <fee:fee refundable="1" description="Transfer fee">743.7500</fee:fee>
      </fee:trnData>
    </extension>
    <trID>
      <clTRID>6A15FDA8-6FD3-4941-B05D-E8014D1BD8CE</clTRID>
      <svTRID>bbac2ec2-4c24-409c-88d7-bf1099c37676</svTRID>
    </trID>
  </response>
</epp>
```

:::

:::commandlist[Transfer commands]

- [Transfer:Approve](../transfer-approve/)
- [Transfer:Cancel](../transfer-cancel/)
- [Transfer:Query](../transfer-query/)
- [Transfer:Reject](../transfer-reject/)
- [Transfer:Request](./)

:::
