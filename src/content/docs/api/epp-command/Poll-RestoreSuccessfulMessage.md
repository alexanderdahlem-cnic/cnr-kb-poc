---
title: "Poll:RestoreSuccessfulMessage"
description: "EPP API Command Reference  ➤ Poll commands ➤ Poll:RestoreSuccessfulMessage ➥ Learn more about EPP API Commands"
---

Domain Restore Successful Poll Message

## Required Parameters

:::response[Response]

```text
<?xml version="1.0" encoding="UTF-8"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
  <response>
    <result code="1301">
      <msg>Command completed successfully; ack to dequeue</msg>
    </result>
    <msgQ count="1" id="2352">
      <qDate>2015-02-25T14:11:05.0Z</qDate>
      <msg>DOMAIN_RESTORE_SUCCESSFUL</msg>
    </msgQ>
    <resData>
      <domain:panData xmlns:domain="urn:ietf:params:xml:ns:domain-1.0">
        <domain:name paResult="1">example.com</domain:name>
        <domain:paTRID>
          <clTRID>ECA21919-4B41-40BB-8A9F-ED6849950154</clTRID>
          <svTRID>988bd0bf-46dd-48f7-8672-956f690c26bf</svTRID>
        </domain:paTRID>
        <domain:paDate>2015-02-25T14:11:05.0Z</domain:paDate>
      </domain:panData>
    </resData>
    <trID>
      <clTRID>8C8B693B-B5E5-47D9-B40A-0FDC10307DF7</clTRID>
      <svTRID>df9d7e47-ea8a-463b-8068-9ae92491a68f</svTRID>
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
- [Poll:Request](../poll-request/)
- [Poll:RestoreFailedMessage](../poll-restorefailedmessage/)
- [Poll:RestoreNotifyMessage](../poll-restorenotifymessage/)
- [Poll:RestorePendingMessage](../poll-restorependingmessage/)
- [Poll:RestoreSuccessfulMessage](./)

:::
