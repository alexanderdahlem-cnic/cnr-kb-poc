---
title: "Poll:Request"
description: "EPP API Command Reference  ➤ Poll commands ➤ Poll:Request ➥ Learn more about EPP API Commands"
---

## Required Parameters

:::command[Command]

```text
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <command>
   <poll op="req"/>
   <clTRID>96ABFF8A-2385-11DE-A5FC-8000000002DF</clTRID>
 </command>
</epp>
```

:::

 

:::response[Response]

```text
<?xml version="1.0" encoding="UTF-8"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <response>
   <result code="1301">
     <msg>Command completed successfully; ack to dequeue</msg>
   </result>
   <msgQ count="1" id="2">
     <qDate>2009-03-02T00:00:00.0Z</qDate>
     <msg>TRANSFER_PENDING</msg>
   </msgQ>
   <resData>
     <domain:trnData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
       <domain:name>example.com</domain:name>
       <domain:trStatus>pending</domain:trStatus>
       <domain:reID>ABC</domain:reID>
       <domain:reDate>2009-03-01T00:00:00.0Z</domain:reDate>
       <domain:acID>DEF</domain:acID>
       <domain:acDate>2009-02-01T00:00:00.0Z</domain:acDate>
     </domain:trnData>
   </resData>
   <trID>
     <clTRID>96ABFF8A-2385-11DE-A5FC-8000000002DF</clTRID>
     <svTRID>9D0093FA-2385-11DE-821B-B3E190C00BCC</svTRID>
   </trID>
 </response>
</epp>
```

:::

:::commandlist[Poll commands]

- [Poll:Ack](../poll-ack/)
- [Poll:ContactDeletionMessage](../poll-contactdeletionmessage/)
- [Poll:DomainDeletionMessage](../poll-domaindeletionmessage/)
- [Poll:DomainRegistrationMessage](../poll-domainregistrationmessage/)
- [Poll:DomainRenewalMessage](../poll-domainrenewalmessage/)
- [Poll:DomainTradeMessage](../poll-domaintrademessage/)
- [Poll:DomainTransferStatusMessage](../poll-domaintransferstatusmessage/)
- [Poll:DomainUpdateMessage](../poll-domainupdatemessage/)
- [Poll:Request](./)
- [Poll:RestoreFailedMessage](../poll-restorefailedmessage/)
- [Poll:RestoreNotifyMessage](../poll-restorenotifymessage/)
- [Poll:RestorePendingMessage](../poll-restorependingmessage/)
- [Poll:RestoreSuccessfulMessage](../poll-restoresuccessfulmessage/)

:::
