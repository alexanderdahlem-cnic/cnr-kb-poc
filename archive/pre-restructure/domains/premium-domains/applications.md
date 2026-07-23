---
title: "Applications"
---

## AddDomainApplication

Example of a domain application with premium pricing.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command         = AddDomainApplication
domain          = premium0080.menu
ownercontact0   = P-MAM25
admincontact0   = P-MAM25
techcontact0    = P-MAM25
billingcontact0 = P-MAM25
CLASS           = MENU-GOLIVE
x-fee-amount    = 1487.50</code></pre></div>

## ModifyDomainApplication (activate GTLD-PREORDER)

Example of changing a gTLD pre-order to GOLIVE application while accepting the premium pricing.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command      = ModifyDomainApplication
application  = 10000876
class        = MENU-GOLIVE
x-fee-amount = 1487.50
pay          = 1</code></pre></div>


