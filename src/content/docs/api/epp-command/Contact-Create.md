---
title: "Contact:Create"
description: "EPP API Command Reference  ➤ Contact commands ➤ Contact:Create ➥ Learn more about EPP API Commands"
---

The command allows to create a new handle in the system. To be able to order ccTLDs we added some rules compared to the EPP standard. When using the field you have to pass the firstname, middlename and lastname information seperated by whitespaces in this field. The middlename is optional. Our internal system parser will parse the in that order. In the example below John Doe “John” is the firstname and “Doe” is the lastname. When using the field you have the possibility to tell our parser to ignore the informations. Due to the restriction that the field is always mandatory you have to send a string without whitespaces in it (i.e. NULL). In this case the field is not parsed. An organization handle can only be used as an ownercontact for gTLDs an some ccTLDs. Here are two examples showing the differences between O-handle (Organization) and P-handle (Person) creation: Create a P-handle This part of the \- command: John -Doe My -Company will be translated to: firstname=John lastname=Doe organization=My -Company Create an O-handle: This part of the \- command: NULL My -Company will be translated to; organization=My -Company

## Required Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd"&gt;
 &lt;command&gt;
   &lt;create&gt;
     &lt;contact:create
      xmlns:contact="urn:ietf:params:xml:ns:contact-1.0"
      xsi:schemaLocation="urn:ietf:params:xml:ns:contact-1.0
      contact-1.0.xsd"&gt;
       &lt;contact:id&gt;sh8013&lt;/contact:id&gt;
       &lt;contact:postalInfo type="int"&gt;
         &lt;contact:name&gt;John Doe&lt;/contact:name&gt;
         &lt;contact:org&gt;Example Inc.&lt;/contact:org&gt;
         &lt;contact:addr&gt;
           &lt;contact:street&gt;123 Example Dr.&lt;/contact:street&gt;
           &lt;contact:street&gt;Suite 100&lt;/contact:street&gt;
           &lt;contact:city&gt;Dulles&lt;/contact:city&gt;
           &lt;contact:sp&gt;VA&lt;/contact:sp&gt;
           &lt;contact:pc&gt;20166-6503&lt;/contact:pc&gt;
           &lt;contact:cc&gt;US&lt;/contact:cc&gt;
         &lt;/contact:addr&gt;
       &lt;/contact:postalInfo&gt;
       &lt;contact:voice&gt;+1.7035555555&lt;/contact:voice&gt;
       &lt;contact:fax&gt;+1.7035555556&lt;/contact:fax&gt;
       &lt;contact:email&gt;jdoe@example.com&lt;/contact:email&gt;
       &lt;contact:authInfo&gt;
         &lt;contact:pw/&gt;
       &lt;/contact:authInfo&gt;
     &lt;/contact:create&gt;
   &lt;/create&gt;
   &lt;clTRID&gt;30FC8ABC-2FFE-11DE-9786-80000000A8C5&lt;/clTRID&gt;
 &lt;/command&gt;
&lt;/epp&gt;</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0"&gt;
 &lt;response&gt;
   &lt;result code="1000"&gt;
     &lt;msg&gt;Command completed successfully&lt;/msg&gt;
   &lt;/result&gt;
   &lt;resData&gt;
     &lt;contact:creData xmlns:contact="urn:ietf:params:xml:ns:contact-1.0"&gt;
       &lt;contact:id&gt;P-JMD24&lt;/contact:id&gt;
       &lt;contact:crDate&gt;2009-04-23T11:59:29.0Z&lt;/contact:crDate&gt;
     &lt;/contact:creData&gt;
   &lt;/resData&gt;
   &lt;trID&gt;
     &lt;clTRID&gt;30FC8ABC-2FFE-11DE-9786-80000000A8C5&lt;/clTRID&gt;
     &lt;svTRID&gt;331E69A0-2FFE-11DE-B163-D0A51393EAB9&lt;/svTRID&gt;
   &lt;/trID&gt;
 &lt;/response&gt;
&lt;/epp&gt;</code></pre></div>

## Optional Parameters

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;?xml version="1.0" encoding="UTF-8" standalone="no"?&gt;
&lt;epp xmlns="urn:ietf:params:xml:ns:epp-1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0 epp-1.0.xsd"&gt;
  &lt;command&gt;
    &lt;create&gt;
      &lt;contact:create xmlns:contact="urn:ietf:params:xml:ns:contact-1.0"
      xsi:schemaLocation="urn:ietf:params:xml:ns:contact-1.0 contact-1.0.xsd"&gt;
        &lt;contact:id&gt;sh8013&lt;/contact:id&gt;
        &lt;contact:postalInfo type="int"&gt;
          &lt;contact:name&gt;John Doe&lt;/contact:name&gt;
          &lt;contact:org&gt;Example Inc.&lt;/contact:org&gt;
          &lt;contact:addr&gt;
            &lt;contact:street&gt;123 Example Dr.&lt;/contact:street&gt;
            &lt;contact:street&gt;Suite 100&lt;/contact:street&gt;
            &lt;contact:city&gt;Dulles&lt;/contact:city&gt;
            &lt;contact:sp&gt;VA&lt;/contact:sp&gt;
            &lt;contact:pc&gt;20166-6503&lt;/contact:pc&gt;
            &lt;contact:cc&gt;US&lt;/contact:cc&gt;
          &lt;/contact:addr&gt;
        &lt;/contact:postalInfo&gt;
        &lt;contact:voice&gt;+1.7035555555&lt;/contact:voice&gt;
        &lt;contact:fax&gt;+1.7035555556&lt;/contact:fax&gt;
        &lt;contact:email&gt;jdoe@example.com&lt;/contact:email&gt;
        &lt;contact:authInfo&gt;
          &lt;contact:pw/&gt;
        &lt;/contact:authInfo&gt;
      &lt;/contact:create&gt;
    &lt;/create&gt;
    &lt;extension&gt;
      &lt;keysys:create xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0"&gt;
        &lt;keysys:contact&gt;
          &lt;keysys:forceDuplication&gt;1&lt;/keysys:forceDuplication&gt;
        &lt;/keysys:contact&gt;
      &lt;/keysys:create&gt;
    &lt;/extension&gt;
    &lt;clTRID&gt;E9AE0746-4DDC-4B6B-8701-AEEEB0EEFF73&lt;/clTRID&gt;
  &lt;/command&gt;
&lt;/epp&gt;</code></pre></div>

### Attributes

| **keysys:forceDuplication** | If there is the necessity to create a new handle with the same information as an already existing one, the CreateContact command has to be extended with this parameter |
| --- | --- |
