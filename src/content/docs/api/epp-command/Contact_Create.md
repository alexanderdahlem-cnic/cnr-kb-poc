---
title: "Contact:Create"
description: "EPP API Command Reference  ➤ Contact commands ➤ Contact:Create ➥ Learn more about EPP API Commands"
---

The command allows to create a new handle in the system. To be able to order ccTLDs we added some rules compared to the EPP standard. When using the field you have to pass the firstname, middlename and lastname information seperated by whitespaces in this field. The middlename is optional. Our internal system parser will parse the in that order. In the example below John Doe “John” is the firstname and “Doe” is the lastname. When using the field you have the possibility to tell our parser to ignore the informations. Due to the restriction that the field is always mandatory you have to send a string without whitespaces in it (i.e. NULL). In this case the field is not parsed. An organization handle can only be used as an ownercontact for gTLDs an some ccTLDs. Here are two examples showing the differences between O-handle (Organization) and P-handle (Person) creation: Create a P-handle This part of the \- command: John -Doe My -Company will be translated to: firstname=John lastname=Doe organization=My -Company Create an O-handle: This part of the \- command: NULL My -Company will be translated to; organization=My -Company

## Required Parameters

### Command

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
 <command>
   <create>
     <contact:create
      xmlns:contact="urn:ietf:params:xml:ns:contact-1.0"
      xsi:schemaLocation="urn:ietf:params:xml:ns:contact-1.0
      contact-1.0.xsd">
       <contact:id>sh8013</contact:id>
       <contact:postalInfo type="int">
         <contact:name>John Doe</contact:name>
         <contact:org>Example Inc.</contact:org>
         <contact:addr>
           <contact:street>123 Example Dr.</contact:street>
           <contact:street>Suite 100</contact:street>
           <contact:city>Dulles</contact:city>
           <contact:sp>VA</contact:sp>
           <contact:pc>20166-6503</contact:pc>
           <contact:cc>US</contact:cc>
         </contact:addr>
       </contact:postalInfo>
       <contact:voice>+1.7035555555</contact:voice>
       <contact:fax>+1.7035555556</contact:fax>
       <contact:email>jdoe@example.com</contact:email>
       <contact:authInfo>
         <contact:pw/>
       </contact:authInfo>
     </contact:create>
   </create>
   <clTRID>30FC8ABC-2FFE-11DE-9786-80000000A8C5</clTRID>
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
     <contact:creData xmlns:contact="urn:ietf:params:xml:ns:contact-1.0">
       <contact:id>P-JMD24</contact:id>
       <contact:crDate>2009-04-23T11:59:29.0Z</contact:crDate>
     </contact:creData>
   </resData>
   <trID>
     <clTRID>30FC8ABC-2FFE-11DE-9786-80000000A8C5</clTRID>
     <svTRID>331E69A0-2FFE-11DE-B163-D0A51393EAB9</svTRID>
   </trID>
 </response>
</epp>
```

## Optional Parameters

### Command

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd">
  <command>
    <create>
      <contact:create xmlns:contact="urn:ietf:params:xml:ns:contact-1.0"
      xsi:schemaLocation="urn:ietf:params:xml:ns:contact-1.0 contact-1.0.xsd">
        <contact:id>sh8013</contact:id>
        <contact:postalInfo type="int">
          <contact:name>John Doe</contact:name>
          <contact:org>Example Inc.</contact:org>
          <contact:addr>
            <contact:street>123 Example Dr.</contact:street>
            <contact:street>Suite 100</contact:street>
            <contact:city>Dulles</contact:city>
            <contact:sp>VA</contact:sp>
            <contact:pc>20166-6503</contact:pc>
            <contact:cc>US</contact:cc>
          </contact:addr>
        </contact:postalInfo>
        <contact:voice>+1.7035555555</contact:voice>
        <contact:fax>+1.7035555556</contact:fax>
        <contact:email>jdoe@example.com</contact:email>
        <contact:authInfo>
          <contact:pw/>
        </contact:authInfo>
      </contact:create>
    </create>
    <extension>
      <keysys:create xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0">
        <keysys:contact>
          <keysys:forceDuplication>1</keysys:forceDuplication>
        </keysys:contact>
      </keysys:create>
    </extension>
    <clTRID>E9AE0746-4DDC-4B6B-8701-AEEEB0EEFF73</clTRID>
  </command>
</epp>
```

### Attributes

| **keysys:forceDuplication** | If there is the necessity to create a new handle with the same information as an already existing one, the CreateContact command has to be extended with this parameter |
| --- | --- |
