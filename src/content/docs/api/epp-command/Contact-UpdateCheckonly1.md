---
title: "Contact:UpdateCheckonly1"
description: "EPP API Command Reference  ➤ Contact commands ➤ Contact:UpdateCheckonly1 ➥ Learn more about EPP API Commands"
---

## Required Parameters

:::command[Command]

```text
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0"
     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
     xsi:schemaLocation="urn:ietf:params:xml:ns:epp-1.0
     epp-1.0.xsd">
  <command>
    <update>
      <contact:update
       xmlns:contact="urn:ietf:params:xml:ns:contact-1.0"
       xsi:schemaLocation="urn:ietf:params:xml:ns:contact-1.0
       contact-1.0.xsd">
        <contact:id>P-ABC1</contact:id>
        <contact:chg>
          <contact:postalInfo type="int">
            <contact:name>John Doe</contact:name>
            <contact:org>Example Inc.</contact:org>
          </contact:postalInfo>
          <contact:email>mail@example.com</contact:email>
        </contact:chg>
      </contact:update>
    </update>
    <extension>
      <keysys:update xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0">
        <keysys:contact>
          <keysys:checkonly>1</keysys:checkonly>
        </keysys:contact>
      </keysys:update>
    </extension>
    <clTRID>0CD9A5D9-C0BD-4C9E-957C-72E312663424</clTRID>
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
    <extension>
      <keysys:resData xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0">
        <keysys:contactUpdData>
          <keysys:ownerchangestatus>REQUESTED</keysys:ownerchangestatus>
        </keysys:contactUpdData>
      </keysys:resData>
    </extension>
    <trID>
      <clTRID>0CD9A5D9-C0BD-4C9E-957C-72E312663424</clTRID>
      <svTRID>49e00f20-8944-4a70-b1f8-622aea2ba801</svTRID>
    </trID>
  </response>
</epp>
```

:::

:::commandlist[Contact commands]

- [Contact:Check](../contact-check/)
- [Contact:Create](../contact-create/)
- [Contact:Delete](../contact-delete/)
- [Contact:Info](../contact-info/)
- [Contact:Info](../contact-info/)
- [Contact:OwnerChange](../contact-ownerchange/)
- [Contact:Transfer](../contact-transfer/)
- [Contact:Update](../contact-update/)
- [Contact:UpdateCheckonly1](./)
- [Contact:UpdateTriggerfoa1](../contact-updatetriggerfoa1/)

:::
