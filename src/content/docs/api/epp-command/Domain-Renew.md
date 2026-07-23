---
title: "Domain:Renew"
description: "EPP API Command Reference  ➤ Domain commands ➤ Domain:Renew ➥ Learn more about EPP API Commands"
---

The Domain:Renew command is used to renew domains explicitly for a specified time period. When renewing a domain please enter the domain, the period for renewal (e.g. period = 1) and the current expiration year (e.g. 2007). Please notice that you can not explicitly renew domains under all TLDs. For further information please see the corresponding TLD info page.

-   [Default handling](#)
-   [Premium domain handling](#)

## Required Parameters

:::command[Command]

```text
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <command>
   <renew>
     <domain:renew xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
       <domain:name>example.com</domain:name>
       <domain:curExpDate>2011-02-18</domain:curExpDate>
       <domain:period unit="y">1</domain:period>
     </domain:renew>
   </renew>
   <clTRID>EF1F57D0-3013-11DE-8D9E-8000000041FC</clTRID>
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
     <domain:renData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
       <domain:name>example.com</domain:name>
       <domain:exDate>2012-02-18T16:02:04.0Z</domain:exDate>
     </domain:renData>
   </resData>
   <trID>
     <clTRID>EF1F57D0-3013-11DE-8D9E-8000000041FC</clTRID>
     <svTRID>F7F750BE-3014-11DE-A523-A02790CC78DB</svTRID>
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
    <renew>
      <domain:renew
       xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
        <domain:name>example.blue</domain:name>
        <domain:curExpDate>2016-06-30</domain:curExpDate>
        <domain:period unit="y">5</domain:period>
      </domain:renew>
    </renew>
    <extension>
      <fee:renew xmlns:fee="urn:ietf:params:xml:ns:fee-0.7">
        <fee:currency>USD</fee:currency>
        <fee:fee>3718.75</fee:fee>
      </fee:renew>
    </extension>
    <clTRID>A6305111-AD36-4716-A17C-8F9C1883F3C5</clTRID>
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
      <domain:renData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
        <domain:name>example.blue</domain:name>
        <domain:exDate>2021-06-30T08:34:20.0Z</domain:exDate>
      </domain:renData>
    </resData>
    <extension>
      <fee:renData xmlns:fee="urn:ietf:params:xml:ns:fee-0.7">
        <fee:currency>USD</fee:currency>
        <fee:fee refundable="1" description="Renewal fee">3718.7500</fee:fee>
      </fee:renData>
    </extension>
    <trID>
      <clTRID>A6305111-AD36-4716-A17C-8F9C1883F3C5</clTRID>
      <svTRID>31e1e476-5067-4e33-af00-7bdf82ac348a</svTRID>
    </trID>
  </response>
</epp>
```

:::

## Optional premium domain handling parameters

:::command[Command]

```text
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
  <command>
    <renew>
      <domain:renew
       xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
        <domain:name>bbq.bike</domain:name>
<domain:curExpDate>2018-01-27</domain:curExpDate>
        <domain:period unit="y">1</domain:period>
      </domain:renew>
    </renew>
    <extension>
      <keysys:renew xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0">
        <keysys:domain>
<keysys:accept-premiumprice>1</keysys:accept-premiumprice>
        </keysys:domain>
      </keysys:renew>
    </extension>
<clTRID>1806671C-03E5-44A5-A236-372FB0AF04CE</clTRID>
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
      <domain:renData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
        <domain:name>bbq.bike</domain:name>
<domain:exDate>2019-01-27T12:30:10.0Z</domain:exDate>
      </domain:renData>
    </resData>
    <trID>
<clTRID>1806671C-03E5-44A5-A236-372FB0AF04CE</clTRID>
<svTRID>9ba5577a-a44b-47de-84db-b5a85d0ab209</svTRID>
    </trID>
  </response>
</epp>
```

:::

:::commandlist[Domain commands]

- [Domain:Check](../domain-check/)
- [Domain:Create](../domain-create/)
- [Domain:Delete](../domain-delete/)
- [Domain:Info](../domain-info/)
- [Domain:OwnerChange](../domain-ownerchange/)
- [Domain:Push](../domain-push/)
- [Domain:Renew](./)
- [Domain:Renewalmode](../domain-renewalmode/)
- [Domain:Restore](../domain-restore/)
- [Domain:Trade](../domain-trade/)
- [Domain:Update](../domain-update/)

:::
