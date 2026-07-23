---
title: "Return Codes"
description: "After the execution of each command our API will report if the command was successful: ● Successful Return Codes ● Temporary Error Codes ● Permanent Error Codes"
---

After the execution of each command our API will report if the command was successful

## Successful Return Codes

Successfully executed commands will result in a return code beginning with two (2xx).

| **200** | Command completed successfully |
| --- | --- |
| **210** | Domain name available |
| **211** | Domain name not available |
| **212** | Name server available |
| **213** | Name server not available |
| **214** | Contact available |
| **215** | Contact not available |
| **218** | Request is available |
| **219** | Request is not available |
| **220** | Command completed successfully. Server closing connection |

## Temporary Error Codes

Temporary errors will lead to a return code beginning with four (4xx). In that case, please resubmit your command at a later point in time.

| **420** | Command failed due to server error. Server closing connection |
| --- | --- |
| **421** | Command failed due to server error. Client should try again |
| **422** | Abuse detected! The account has been temporarily locked! Please standby some minutes. |
| **423** | error (socket error) |

## Permanent Error Codes

A permanent error will result in a return code beginning with five (5xx).

| **500** | Invalid command name |
| --- | --- |
| **501** | Invalid command option |
| **502** | Invalid entity value |
| **503** | Invalid attribute name |
| **504** | Missing required attribute |
| **505** | Invalid attribute value syntax |
| **506** | Invalid option value |
| **507** | Invalid command format |
| **508** | Missing required entity |
| **509** | Missing command option |
| **520** | Server closing connection. Client should try opening new connection |
| **521** | Too many sessions open. Server closing connection |
| **530** | Authentication failed |
| **531** | Authorization failed |
| **532** | Domain names linked with name server |
| **533** | Domain name has active name servers |
| **534** | Domain name has not been flagged for transfer |
| **535** | Restricted IP address |
| **536** | Domain already flagged for transfer |
| **540** | Attribute value is not unique |
| **541** | Invalid attribute value |
| **542** | Invalid old value for an attribute |
| **543** | Final or implicit attribute cannot be updated |
| **544** | Entity on hold |
| **545** | Entity reference not found |
| **546** | Credit limit exceeded |
| **547** | Invalid command sequence |
| **548** | Domain is not up for renewal |
| **549** | Command failed |
| **550** | Parent domain not registered |
| **551** | Parent domain status does not allow for operation |
| **552** | Domain status does not allow for operation |
| **553** | Operation not allowed. Domain pending transfer |
| **554** | Domain already registered |
| **555** | Domain already renewed |
| **556** | Maximum registration period exceeded |
| **557** | Object status prohibits operation |
| **560** | Resource is disabled |
| **561** | Resource still in use |
| **562** | Email address already uses forwarding |
| **563** | Email address already uses mailspace |
| **564** | Email domain already linked to a different mailspace |
