---
title: "EPP Command Reference Manual"
description: "Our EPP Reference Manual will give you an extensive overview of the commands which can be submitted to the system."
sidebar:
  order: 20
  label: "EPP API Commands"
---

Our EPP Reference Manual will give you an extensive overview of the commands which can be submitted to the system. Please read the EPP reference manual carefully. As this is a new product type, we appreciate your feedback. Please do not hesitate to contact us with your comments.

:::command[Application]

```text
ApplicationApplication:CheckClaimsApplication:CreateDomainWithClaimsApplication:CreateLandrushApplication:CreateSunriseApplication:DeleteApplication:FailedApplication Failed (rejected)Application:StatusApplication:SuccessfulApplication Successful (allocated)
```

:::

 

:::command[Contact]

```text
ContactContact:CheckCheck availability of contact IDContact:CreateCreate a new contactContact:DeleteDelete a contactContact:InfoQuery contact informationContact:InfoPending owner change exampleContact:OwnerChangeOwner change exampleContact:TransferRequest contact transferContact:UpdateUpdate contact informationContact:UpdateCheckonly1Update contact request with checkonly = 1Contact:UpdateTriggerfoa1Update contact request with triggerfoa = 1
```

:::

 

:::command[Domain]

```text
DomainDomain:CheckCheck availability of a single domainDomain:CreateInitiates the domain name registration at the registryDomain:DeleteDomain:InfoGather information about a domain name in accountDomain:OwnerChangeDomain:PushMove a domain away from CentralNic ResellerDomain:RenewCommand used to renew domains explicitly for a specified period of timeDomain:RenewalmodeChange the renewalmode of a domainDomain:RestoreCommand used to restore a domainDomain:TradeDomain:UpdateUpdate domain information
```

:::

 

:::command[Host]

```text
HostHost:CheckHost:CreateHost:DeleteHost:InfoHost:Update
```

:::

 

:::command[Poll]

```text
PollPoll:AckPoll Ack commandPoll:ContactDeletionMessageContact deletion messagePoll:DomainDeletionMessageDomain deletion messagePoll:DomainRegistrationMessageDomain registration messagePoll:DomainRenewalMessageDomain renewal messagePoll:DomainTradeMessageDomain trade messagePoll:DomainTransferStatusMessageDomain Transfer status messagePoll:DomainUpdateMessageDomain update messagePoll:RequestPoll:RestoreFailedMessageDomain Restore Failed Poll MessagePoll:RestoreNotifyMessageDomain Restore Notify Poll MessagePoll:RestorePendingMessageDomain Restore Pending Poll MessagePoll:RestoreSuccessfulMessageDomain Restore Successful Poll Message
```

:::

 

:::command[Session]

```text
SessionSession:HelloSession:LoginSession:Logout
```

:::

 

:::command[Transfer]

```text
TransferTransfer:ApproveTransfer:CancelTransfer:QueryTransfer:RejectTransfer:RequestInitiates the domain transfer
```

:::
