---
title: "FAQ for ModifyTrademark"
---

How many times can I update the content of the mark ?

It's only possible to update the content of the mark ONCE, if it has the state 'INCORRECT', for a period of 30 days. After a successful update the mark will be set to NEW at TMCH and any content updates are prohibited.  
If the update was not sufficient, the registration will fail and no further updates will be possible on this trademark. The registration fee cannot be refunded in this cas

**Note**

All invalid details have to be updated simultaneously in one ModifyTrademark command!

TMCH Validator complains about contact handle: How can the referenced contact handle be updated?

After you modified the contact handle, you have to use the following command:

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND   = ModifyTrademark
TRADEMARK = &lt;TRADEMARK_TOKEN&gt;
TMHOLDER  = &lt;CONTACT-HANDLE_ID&gt;</code></pre></div>

TMCH Validator complaints about the markname: How can the markname be updated and how can the labels be changed?

Update the name of the Mark (and other fields if necessary), after executing the command to change the name of the Mark the existing labels attached to the Mark record will be AUTOMATICALLY REMOVED.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND   = ModifyTrademark
TRADEMARK = &lt;TRADEMARK_TOKEN&gt;
MARKNAME  = &lt;NEW MARK NAME&gt;</code></pre></div>

Add the labels you want, if any, to the Mark record (if you do not perform this step no labels will be attached to the Mark record).  
The number of labels you can attach to the Mark record is either the number of labels originally attached to the Mark record or 10 labels, whichever number is biggest.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND                                       = ModifyTrademark
TRADEMARK                                     = &lt;TRADEMARK_TOKEN&gt;
(ADD)ALABEL0...MAX_ORIGINALLY_SUBMITTED       = &lt;Text&gt; Max.63 Chars ASCII representation of the label linked to the mark
(ADD)SMDINCLUSION0...MAX_ORIGINALLY_SUBMITTED = &lt;0|1&gt;
(ADD)CLAIMSNOTIFY0...MAX_ORIGINALLY_SUBMITTED = &lt;0|1&gt;</code></pre></div>

How can the smdInclusion/claimsNotify flags be update?

Please be aware that the SMD Inclusion flag can only be set when a Proof of Use document has been uploaded (this can be done at any time except if the Mark record is being verified or is expired). When enabling or disabling the smdInclusion flag(s) you need to follow the next steps in the exact order, in separate commands:

**1\. Remove the label(s)**

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND    = ModifyTrademark
TRADEMARK  = &lt;TRADEMARK_TOKEN&gt;
DELALABEL0 = my-label-to-update</code></pre></div>

**2\. Add the label(s) again with the smdInclusion flags enabled or disabled.**  
More specifically, to do this please send an update command with a <rem> section to delete the specific label(s) followed by an update <add> command to add the label(s) again with the appropriate flags set.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND          = ModifyTrademark
TRADEMARK        = &lt;TRADEMARK_TOKEN&gt;
ADDALABEL0       = my-label-to-update
ADDSMDINCLUSION0 = 1
ADDCLAIMSNOTIFY0 = 1</code></pre></div>

How is the renewalmode changed?

The renewalmode of a TMCH entry can be switched between AUTORENEW and AUTOEXPIRE as explained in the following API example:

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND     = SetTrademarkRenewalMode
TRADEMARK   = &lt;TRADEMARK-TOKEN&gt;
RENEWALMODE = AUTORENEW|AUTOEXPIRE</code></pre></div>

How to renew a trademark

If renewalmode is AUTORENEW (=default) then the trademark will be automatically renewed for 1 year.

Manual renew:

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code> COMMAND        = RENEWTRADEMARK
 TRADEMARK      = &lt;TRADEMARK-TOKEN&gt;
 PERIOD         = &lt;PERIOD&gt; # 1 or 3
 EXPIRATIONDATE = &lt;YEAR&gt;</code></pre></div>

How to transfer in a trademark

If the transfer is executed successfully a new mark id is returned

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = TransferTrademark
TRADEMARK = &lt;TRADEMARK-TOKEN&gt;
ACTION = &lt;execute&gt;
AUTH = 12345</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
property[new tmch id][0] = 000001123456789876543211113333-1
property[trademark][0] = &lt;TRADEMARK_TOKEN&gt;
property[transfer date][0] = 2014-01-30T15:27:14.3Z
runtime = 0.003</code></pre></div>

How to transfer out a trademark

To initiate a transfer out for a mark that is in your portfolio you can send the transfer initiate command and you will receive an authcode. The transfer code will be active for 14 days, after this period you can request a new transfer code by following the same process as described below.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = TransferTrademark
TRADEMARK = &lt;TRADEMARK-TOKEN&gt;
ACTION = &lt;initiate&gt;</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = 200
description = Command completed successfully
property[authcode][0] = 12345
property[trademark id][0] = 00000113976353131397635313-1
property[transfer status][0] = &lt;pendingTransfer&gt;
runtime = 0.001</code></pre></div>

How to push a trademark

Use the following commanf to push a trademark:

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = PushOjbect
TYPE    = TRADEMARK
TARGET  = &lt;SUBUSER&gt;
OBJECT  = &lt;TRADEMARK-TOKEN&gt;</code></pre></div>

How to delete a trademark

Deleting a trademark is only possible as long as the trademark entry has not become ACTIVE, which means it has not been validated and verified by TMCH.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND   = DeleteTrademark
TRADEMARK = &lt;TRADEMARK-TOKEN&gt; (e.g. 3BD0B280-1FF5-4573-8CF5-C95F75C1D5FB)</code></pre></div>


