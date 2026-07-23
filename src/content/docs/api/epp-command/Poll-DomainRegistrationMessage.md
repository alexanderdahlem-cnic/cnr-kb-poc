---
title: "Poll:DomainRegistrationMessage"
description: "EPP API Command Reference  ➤ Poll commands ➤ Poll:DomainRegistrationMessage ➥ Learn more about EPP API Commands"
---

Domain registration message

## Required Parameters

:::response[Response]

```text
<?xml version="1.0" encoding="UTF-8"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <response>
   <result code="1301">
     <msg>Command completed successfully; ack to dequeue</msg>
   </result>
   <msgQ count="1" id="26">
     <qDate>2009-04-14T12:15:12.0Z</qDate>
     <msg>DOMAIN_REGISTRATION_SUCCESSFUL</msg>
   </msgQ>
   <resData>
     <domain:creData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
       <domain:name>anewdummy.com</domain:name>
       <domain:crDate>0001-01-01T00:00:00.0Z</domain:crDate>
     </domain:creData>
   </resData>
   <trID>
     <clTRID>260838FC-28EE-11DE-9AF6-80000000C9CD</clTRID>
     <svTRID>DC650A26-28EE-11DE-A1A7-CF008B2A9BFC</svTRID>
   </trID>
 </response>
</epp>
```

:::

:::commandlist[Poll commands]

- [Poll:Ack](../poll-ack/)
- [Poll:ContactDeletionMessage](../poll-contactdeletionmessage/)
- [Poll:DomainDeletionMessage](../poll-domaindeletionmessage/)
- [Poll:DomainRegistrationMessage](./)
- [Poll:DomainRenewalMessage](../poll-domainrenewalmessage/)
- [Poll:DomainTradeMessage](../poll-domaintrademessage/)
- [Poll:DomainTransferStatusMessage](../poll-domaintransferstatusmessage/)
- [Poll:DomainUpdateMessage](../poll-domainupdatemessage/)
- [Poll:Request](../poll-request/)
- [Poll:RestoreFailedMessage](../poll-restorefailedmessage/)
- [Poll:RestoreNotifyMessage](../poll-restorenotifymessage/)
- [Poll:RestorePendingMessage](../poll-restorependingmessage/)
- [Poll:RestoreSuccessfulMessage](../poll-restoresuccessfulmessage/)

:::
