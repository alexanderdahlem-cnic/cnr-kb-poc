---
title: "Events"
sidebar:
  order: 60
---

## CLASS: ACCOUNT\_CREATE

| **SUBCLASS** | DATA |
| --- | --- |
| **ACCOUNT\_ACTIVE** |  |

## CLASS: ACCOUNT\_CREATE

| **SUBCLASS** | DATA |
| --- | --- |
| **ACCOUNT\_CREATE\_SUCCESSFUL** |  |

## CLASS: ACCOUNT\_CREATE

| **SUBCLASS** | DATA |
| --- | --- |
| **ACCOUNT\_DOMAIN\_SUCCESSFUL** |  |

## CLASS: ACCOUNT\_MODIFICATION

| **SUBCLASS** | DATA |
| --- | --- |
| **CREDITCARD\_EXPIRED** |  |

## CLASS: ACCOUNT\_MODIFICATION

| **SUBCLASS** | DATA |
| --- | --- |
| **CREDITCARD\_FAILED** |  |

## CLASS: ACCOUNT\_MODIFICATION

| **SUBCLASS** | DATA |
| --- | --- |
| **MODIFICATION\_SUCCESSFUL** |  |

## CLASS: ACCOUNT\_MODIFICATION

| **SUBCLASS** | DATA |
| --- | --- |
| **SEPA\_EXPIRED** |  |

## CLASS: CONTACT\_DELETION

| **SUBCLASS** | DATA |
| --- | --- |
| **DELETION\_SUCCESSFUL** | domain cltrid svtrid jobid roid |

_The parameters "cltrid", "svtrid", "roid" and "jobid" are optional and will only be returned if the event belongs to a pending job._

## CLASS: CONTACT\_MODIFICATION

| **SUBCLASS** | DATA |
| --- | --- |
| **MODIFICATION\_FAILED** | domain cltrid svtrid jobid roid |
| **MODIFICATION\_NOTIFY** | domain cltrid svtrid jobid roid |
| **MODIFICATION\_SUCCESSFUL** | domain cltrid svtrid jobid roid |

_The parameters "cltrid", "svtrid", "roid" and "jobid" are optional and will only be returned if the event belongs to a pending job._

## CLASS: CONTACT\_REGISTRATION

| **SUBCLASS** | DATA |
| --- | --- |
| **CONTACT\_REGISTRATION\_NOTIFY** | domain cltrid svtrid jobid roid |

_The parameters "cltrid", "svtrid", "roid" and "jobid" are optional and will only be returned if the event belongs to a pending job._

## CLASS: DOMAIN\_REGISTRATION

| **SUBCLASS** | DATA |
| --- | --- |
| **REGISTRATION\_SUCCESSFUL** | domain cltrid svtrid jobid roid |
| **REGISTRATION\_PENDING** | domain cltrid svtrid jobid roid |
| **REGISTRATION\_NOTIFY** | domain cltrid svtrid jobid roid |
| **REGISTRATION\_FAILED** | domain cltrid svtrid jobid roid |

_The parameters "cltrid", "svtrid", "roid" and "jobid" are optional and will only be returned if the event belongs to a pending job._

## CLASS: DOMAIN\_MODIFICATION

| **SUBCLASS** | DATA |
| --- | --- |
| **MODIFICATION\_SUCCESSFUL** | domain cltrid svtrid jobid roid |
| **MODIFICATION\_NOTIFY** | domain cltrid svtrid jobid roid |
| **MODIFICATION\_PENDING** | domain cltrid svtrid jobid roid |
| **MODIFICATION\_FAILED** | domain cltrid svtrid jobid roid |

_The parameters "cltrid", "svtrid", "roid" and "jobid" are optional and will only be returned if the event belongs to a pending job._

## CLASS: DOMAIN\_DELETION

| **SUBCLASS** | DATA |
| --- | --- |
| **DELETION\_SUCCESSFUL** | domain autodelete cltrid svtrid jobid roid |
| **DELETION\_NOTIFY** | domain cltrid svtrid jobid roid |
| **DELETION\_PENDING** | domain cltrid svtrid jobid roid |
| **DELETION\_FAILED** | domain cltrid svtrid jobid roid |

_The parameters "cltrid", "svtrid", "roid" and "jobid" are optional and will only be returned if the event belongs to a pending job._

## CLASS: DOMAIN\_RENEWAL

| **SUBCLASS** | DATA |
| --- | --- |
| **RENEWAL\_SUCCESSFUL** | domain period autorenew cltrid svtrid jobid roid |
| **RENEWAL\_NOTIFY** | domain cltrid svtrid jobid roid |
| **RENEWAL\_PENDING** | domain cltrid svtrid jobid roid |
| **RENEWAL\_FAILED** | domain cltrid svtrid jobid roid |

_The parameters "cltrid", "svtrid", "roid" and "jobid" are optional and will only be returned if the event belongs to a pending job._

## CLASS: DOMAIN\_TRADE

| **SUBCLASS** | DATA |
| --- | --- |
| **TRADE\_SUCCESSFUL** | domain cltrid svtrid jobid roid |
| **TRADE\_NOTIFY** | domain cltrid svtrid jobid roid |
| **TRADE\_PENDING** | domain cltrid svtrid jobid roid |
| **TRADE\_FAILED** | domain cltrid svtrid jobid roid |

_The parameters "cltrid", "svtrid", "roid" and "jobid" are optional and will only be returned if the event belongs to a pending job._

## CLASS: DOMAIN\_TRANSFER

| **SUBCLASS** | DATA |
| --- | --- |
| **TRANSFER\_SUCCESSFUL** | domain current registrar new registrar auto ack cltrid svtrid jobid roid |
| **TRANSFER\_NOTIFY** | domain cltrid svtrid jobid roid |
| **TRANSFER\_PENDING** | domain current registrar requesting registrar cltrid svtrid jobid roid |
| **TRANSFER\_FAILED** | domain current registrar new registrar auto nack cltrid svtrid jobid roid |
| **FOREIGN\_TRANSFER\_SUCCESSFUL** | domain current registrar new registrar auto ack cltrid svtrid jobid roid |
| **FOREIGN\_TRANSFER\_NOTIFY** | domain cltrid svtrid jobid roid |
| **FOREIGN\_TRANSFER\_PENDING** | domain current registrar requesting registrar cltrid svtrid jobid roid |
| **FOREIGN\_TRANSFER\_FAILED** | domain current registrar new registrar auto nack cltrid svtrid jobid roid |

_The parameters "cltrid", "svtrid", "roid" and "jobid" are optional and will only be returned if the event belongs to a pending job._

## CLASS: DOMAINAPPLICATION

| **SUBCLASS** | DATA |
| --- | --- |
| **SUCCESSFUL** | application domain cltrid svtrid jobid roid |
| **FAILED** | application domain reason cltrid svtrid jobid roid |
| **NOTIFY** | domain cltrid svtrid jobid roid |

_The parameters "cltrid", "svtrid", "roid" and "jobid" are optional and will only be returned if the event belongs to a pending job._

## CLASS: CERTIFICATE\_REGISTRATION

| **SUBCLASS** | DATA |
| --- | --- |
| **REGISTRATION\_SUCCESSFUL** | certificate sub |
| **REGISTRATION\_FAILED** | certificate sub |
| **REGISTRATION\_NOTIFY** | certificate sub |

## CLASS: CERTIFICATE\_RENEWAL

| **SUBCLASS** | DATA |
| --- | --- |
| **RENEWAL\_SUCCESSFUL** | certificate sub |
| **RENEWAL\_FAILED** | certificate sub |
| **RENEWAL\_NOTIFY** | certificate sub |

## CLASS: CERTIFICATE\_MODIFICATION

| **SUBCLASS** | DATA |
| --- | --- |
| **MODIFICATION\_SUCCESSFUL** | certificate sub |
| **MODIFICATION\_FAILED** | certificate sub |
| **MODIFICATION\_NOTIFY** | certificate sub |

## CLASS: CERTIFICATE\_REISSUE

| **SUBCLASS** | DATA |
| --- | --- |
| **REISSUE\_SUCCESSFUL** | certificate sub |
| **REISSUE\_FAILED** | certificate sub |
| **REISSUE\_NOTIFY** | certificate sub |

## CLASS: CERTIFICATE\_DELETION

| **SUBCLASS** | DATA |
| --- | --- |
| **DELETION\_SUCCESSFUL** | certificate sub |
| **DELETION\_FAILED** | certificate sub |
| **DELETION\_NOTIFY** | certificate sub |
