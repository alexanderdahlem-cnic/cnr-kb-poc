---
title: "ICANN OwnerChange Events"
description: "Events: ● Trade Domain Failed ● Trade Domain Success ● Trade Contact Failed ● Trade Contact Success ➥ Learn more!"
sidebar:
  order: 610
  label: "Events"
---

## Trade Domain Failed (DOMAIN\_MODIFICATION::MODIFICATION\_FAILED)

OwnerChange status values: gaining\_denied|losing\_denied|gaining, losing denied|user cancelled|expired 

:::response[Response]

```text
code = 200
description = Command completed successfully
property[date][0] = 2016-11-28 14:25:31.0
property[class][0] = DOMAIN_MODIFICATION
property[subclass][0] = MODIFICATION_FAILED
property[object id][0] = testdomain.com
property[data][0] = domain:testdomain.com
property[data][1] = jobid:7331577
property[data][2] = cltrid:9F9F44A4-94E8-4A1D-87A3-C4162D4C6883
property[data][3] = svtrid:F458F82E-4169-41C9-ACBF-408AAF7D8102
property[data][4] = ownerchange_status:gaining_denied|losing_denied|gaining, losing denied|user cancelled|expired
property[data][5] = reason:ownerchange failed
property[data][6] = gaining_registrant:P-ABC2
property[data][7] = losing_registrant:P-ABC1
property[data][8] = domain:testdomain.com
property[info][0] = ownerchange%20failed
EOF
```

:::

## Trade Domain Success (DOMAIN\_MODIFICATION::MODIFICATION\_SUCCESSFUL)

:::response[Response]

```text
code = 200
description = Command completed successfully
property[date][0] = 2016-11-18 16:32:41.0
property[class][0] = DOMAIN_MODIFICATION
property[subclass][0] = MODIFICATION_SUCCESS
property[object id][0] = testdomain.com
property[data][0] = domain:testdomain.com
property[data][1] = jobid:524526142
property[data][2] = cltrid:EE9B83F4-7A68-4256-843D-1A6CBA266995
property[data][3] = svtrid:32DD089F-2D8C-4A67-9FEC-87AC6F5C4B1F
property[data][4] = domain:test12342342.com
property[data][5] = gaining_registrant:P-ABC2
property[data][6] = ownerchange_status:successful
property[data][7] = losing_registrant:P-ABC1
property[data][8] = reason:ownerchange successful
property[info][0] = ownerchange%20successful
EOF
```

:::

## Trade Contact Failed (CONTACT\_MODIFICATION::MODIFICATION\_FAILED)

:::response[Response]

```text
code = 200
description = Command completed successfully
property[date][0] = 2016-11-25 12:14:00.0
property[class][0] = CONTACT_MODIFICATION
property[subclass][0] = MODIFICATION_FAILED
property[object id][0] = P-ABC2
property[data][0] = contact:P-ABC2
property[data][1] = jobid:524526367
property[data][2] = cltrid:05B4522D-7C7E-4552-9EA8-1E083A8F8690
property[data][3] = svtrid:0CFEC847-475F-4043-83B9-6601917D9C0C
property[data][4] = gaining_registrant:P-ABC2
property[data][5] = ownerchange_status:registry operation failed|gaining_denied|losing_denied|gaining, losing denied|user cancelled|expired
property[data][6] = reason:ownerchange failed: 531 Authorization failed
property[info][0] = ownerchange%20failed%3a%20531%20Authorization%20failed
EOF
```

:::

## Trade Contact Success (CONTACT\_MODIFICATION::MODIFICATION\_SUCCESSFUL)

:::response[Response]

```text
code = 200
description = Command completed successfully
property[date][0] = 2016-11-24 15:03:34.0
property[class][0] = CONTACT_MODIFICATION
property[subclass][0] = MODIFICATION_SUCCESS
property[object id][0] = P-ABC2
property[data][0] = contact:P-ABC2
property[data][1] = jobid:524526284
property[data][2] = cltrid:1EE66338-4F10-427A-B1A7-78DD25594300
property[data][3] = svtrid:63F2FBFC-263E-48F2-A687-6350EE82CB61
property[data][4] = ownerchange_status:successful
property[data][5] = gaining_registrant:P-ABC2
property[data][6] = reason:ownerchange successful
property[info][0] = ownerchange%20successful
EOF
```

:::
