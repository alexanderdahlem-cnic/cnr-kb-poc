---
title: "Poll:Ack"
description: "EPP API Command Reference  ➤ Poll commands ➤ Poll:Ack ➥ Learn more about EPP API Commands"
---

Poll Ack command

## Required Parameters

:::command[Command]

```text
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
 <command>
   <poll op="ack" msgID="2"/>
   <clTRID>ABC-12346</clTRID>
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
   <msgQ count="1" id="2"/>
   <trID>
     <clTRID>ABC-12346</clTRID>
     <svTRID>DFF06456-2385-11DE-8594-FFBC6BA5E3CA</svTRID>
   </trID>
 </response>
</epp>
```

:::

:::commandlist[Poll commands]

- [Poll:Ack](./)
- [Poll:ContactDeletionMessage](../poll-contactdeletionmessage/)
- [Poll:DomainDeletionMessage](../poll-domaindeletionmessage/)
- [Poll:DomainRegistrationMessage](../poll-domainregistrationmessage/)
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
