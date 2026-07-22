---
title: "Domain:Check"
description: "EPP API Command Reference  ➤ Domain commands ➤ Domain:Check ➥ Learn more about EPP API Commands"
---

This command checks, if the desired domain name is available and may be registered at the registry.

-   [Default handling](#)
-   [Premium domain handling](#)

## Required Parameters

### Command

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <command>
   <check>
     <domain:check
      xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
       <domain:name>example.com</domain:name>
       <domain:name>example.net</domain:name>
       <domain:name>example.org</domain:name>
     </domain:check>
   </check>
   <clTRID>C68D3D5A-2F3C-11DE-8EF9-80000000DC4F</clTRID>
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
   <resData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
     <domain:chkData>
       <domain:cd>
         <domain:name avail="0">example.com</domain:name>
         <domain:reason>Domain name not available</domain:reason>
       </domain:cd>
       <domain:cd>
         <domain:name avail="0">example.net</domain:name>
         <domain:reason>Domain name not available</domain:reason>
       </domain:cd>
       <domain:cd>
         <domain:name avail="1">example.org</domain:name>
       </domain:cd>
     </domain:chkData>
   </resData>
   <trID>
     <clTRID>C68D3D5A-2F3C-11DE-8EF9-80000000DC4F</clTRID>
     <svTRID>C8A99106-2F3C-11DE-9196-E4408ABC6E4A</svTRID>
   </trID>
 </response>
</epp>
```

## Required premium domain handling parameters

### Command

```
<?xml version="1.0" encoding="UTF-8"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0  epp-1.0.xsd">
  <command>
    <check>
      <domain:check xmlns:domain="urn:ietf:params:xml:ns:domain-1.0"
      xsi:schemaLocation="urn:ietf:params:xml:ns:domain-1.0 domain-1.0.xsd">
        <domain:name>example.blue</domain:name>
      </domain:check>
    </check>
    <extension>
      <fee:check xmlns:fee="urn:ietf:params:xml:ns:fee-0.7" xsi:schemaLocation="urn:ietf:params:xml:ns:fee-0.7 fee-0.7.xsd">
        <fee:domain>
          <fee:name>example.blue</fee:name>
          <fee:command>create</fee:command>
          <fee:period unit="y">1</fee:period>
        </fee:domain>
        <fee:domain>
          <fee:name>example.blue</fee:name>
          <fee:command>renew</fee:command>
          <fee:period unit="y">5</fee:period>
        </fee:domain>
        <fee:domain>
          <fee:name>example.blue</fee:name>
          <fee:command>transfer</fee:command>
          <fee:period unit="y">1</fee:period>
        </fee:domain>
        <fee:domain>
          <fee:name>example.blue</fee:name>
          <fee:command>restore</fee:command>
          <fee:period unit="y">1</fee:period>
        </fee:domain>
      </fee:check>
    </extension>
    <clTRID>F5098B90-4FC8-41E4-9405-F2DE33347176</clTRID>
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
    <resData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
      <domain:chkData>
        <domain:cd>
          <domain:name avail="0">example.blue</domain:name>
          <domain:reason>Domain name not available</domain:reason>
        </domain:cd>
      </domain:chkData>
    </resData>
    <extension>
      <fee:chkData xmlns:fee="urn:ietf:params:xml:ns:fee-0.7">
        <fee:cd>
          <fee:name>example.blue</fee:name>
          <fee:currency>USD</fee:currency>
          <fee:command>create</fee:command>
          <fee:period unit="y">1</fee:period>
          <fee:fee refundable="1" description="Registration fee">743.7500</fee:fee>
          <fee:class>premium</fee:class>
        </fee:cd>
        <fee:cd>
          <fee:name>example.blue</fee:name>
          <fee:currency>USD</fee:currency>
          <fee:command>renew</fee:command>
          <fee:period unit="y">5</fee:period>
          <fee:fee refundable="1" description="Renewal fee">3718.7500</fee:fee>
          <fee:class>premium</fee:class>
        </fee:cd>
        <fee:cd>
          <fee:name>example.blue</fee:name>
          <fee:currency>USD</fee:currency>
          <fee:command>transfer</fee:command>
          <fee:period unit="y">1</fee:period>
          <fee:fee refundable="1" description="Transfer fee">743.7500</fee:fee>
          <fee:class>premium</fee:class>
        </fee:cd>
        <fee:cd>
          <fee:name>example.blue</fee:name>
          <fee:currency>USD</fee:currency>
          <fee:command>restore</fee:command>
          <fee:period unit="y">1</fee:period>
          <fee:fee refundable="1" description="Restore fee">107.1000</fee:fee>
          <fee:class>premium</fee:class>
        </fee:cd>
      </fee:chkData>
    </extension>
    <trID>
      <clTRID>F5098B90-4FC8-41E4-9405-F2DE33347176</clTRID>
      <svTRID>156412fb-2396-4829-af5c-39bf4cda2d87</svTRID>
    </trID>
  </response>
</epp>
```
