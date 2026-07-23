---
title: "EPP Server Examples"
description: "Server Examples: ● Application Fee ● Registration Fee ● Renewal Fee ● Restore Fee ➥ Learn more!"
---



<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>...
 &lt;fee:chkData xmlns:fee="urn:ietf:params:xml:ns:fee-0.5"&gt;
  &lt;fee:cd&gt;
   &lt;fee:name&gt;example.com&lt;/fee:name&gt;
   &lt;fee:currency&gt;USD&lt;/fee:currency&gt;
   &lt;fee:command phase="sunrise"&gt;create&lt;/fee:command&gt;
   &lt;fee:period unit="y"&gt;1&lt;/fee:period&gt;
   &lt;fee:fee description="Application Fee" refundable="0"&gt;5.00&lt;/fee:fee&gt;
   &lt;fee:fee description="Registration Fee" refundable="1"&gt;5.00&lt;/fee:fee&gt;
  &lt;/fee:cd&gt;
...</code></pre></div>

| **Application Fee** | The fee charged in addition to the registration fee for domains applied for during sunrise or landrush phases. |
| --- | --- |
| **Registration Fee** | The fee charged for the first year of registration. |
| **Renewal Fee** | The fee charged for all years subsequent to the first year. |
| **Restore Fee** | The fee charged to restore a domain from the Redemption Grace Period. |

## Fee classes

-   The domain name has the standard price
-   The domain has a non-standard premium price.

If class is not standard or empty than this is a premium domain/price. "EPP Commands" lists the commands that provide premium domain information with corresponding examples.
