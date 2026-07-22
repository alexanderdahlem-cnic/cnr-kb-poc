---
title: "EPP Server Examples"
description: "Server Examples: ● Application Fee ● Registration Fee ● Renewal Fee ● Restore Fee ➥ Learn more!"
---

### Response

```
...
 <fee:chkData xmlns:fee="urn:ietf:params:xml:ns:fee-0.5">
  <fee:cd>
   <fee:name>example.com</fee:name>
   <fee:currency>USD</fee:currency>
   <fee:command phase="sunrise">create</fee:command>
   <fee:period unit="y">1</fee:period>
   <fee:fee description="Application Fee" refundable="0">5.00</fee:fee>
   <fee:fee description="Registration Fee" refundable="1">5.00</fee:fee>
  </fee:cd>
...
```

| **Application Fee** | The fee charged in addition to the registration fee for domains applied for during sunrise or landrush phases. |
| --- | --- |
| **Registration Fee** | The fee charged for the first year of registration. |
| **Renewal Fee** | The fee charged for all years subsequent to the first year. |
| **Restore Fee** | The fee charged to restore a domain from the Redemption Grace Period. |

## Fee classes

-   The domain name has the standard price
-   The domain has a non-standard premium price.

If class is not standard or empty than this is a premium domain/price. "EPP Commands" lists the commands that provide premium domain information with corresponding examples.
