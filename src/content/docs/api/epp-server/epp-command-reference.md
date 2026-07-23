---
title: "EPP Command Reference Manual"
description: "Our EPP Reference Manual will give you an extensive overview of the commands which can be submitted to the system."
---

Our EPP Reference Manual will give you an extensive overview of the commands which can be submitted to the system. Please read the EPP reference manual carefully. As this is a new product type, we appreciate your feedback. Please do not hesitate to contact us with your comments.

<div class="api-io api-io--command"><span class="api-io__label">Application</span>
<pre class="api-io__code"><code><h2>Application</h2><table><tbody><tr><th><a href="../../epp-command/application-checkclaims/">Application:CheckClaims</a></th><th></th></tr><tr><td><a href="../../epp-command/application-createdomainwithclaims/">Application:CreateDomainWithClaims</a></td><td></td></tr><tr><td><a href="../../epp-command/application-createlandrush/">Application:CreateLandrush</a></td><td></td></tr><tr><td><a href="../../epp-command/application-createsunrise/">Application:CreateSunrise</a></td><td></td></tr><tr><td><a href="../../epp-command/application-delete/">Application:Delete</a></td><td></td></tr><tr><td><a href="../../epp-command/application-failed/">Application:Failed</a></td><td>Application Failed (rejected)</td></tr><tr><td><a href="../../epp-command/application-status/">Application:Status</a></td><td></td></tr><tr><td><a href="../../epp-command/application-successful/">Application:Successful</a></td><td>Application Successful (allocated)</td></tr></tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">Contact</span>
<pre class="api-io__code"><code><h2>Contact</h2><table><tbody><tr><th><a href="../../epp-command/contact-check/">Contact:Check</a></th><th>Check availability of contact ID</th></tr><tr><td><a href="../../epp-command/contact-create/">Contact:Create</a></td><td>Create a new contact</td></tr><tr><td><a href="../../epp-command/contact-delete/">Contact:Delete</a></td><td>Delete a contact</td></tr><tr><td><a href="../../epp-command/contact-info/">Contact:Info</a></td><td>Query contact information</td></tr><tr><td><a href="../../epp-command/contact-info/">Contact:Info</a></td><td>Pending owner change example</td></tr><tr><td><a href="../../epp-command/contact-ownerchange/">Contact:OwnerChange</a></td><td>Owner change example</td></tr><tr><td><a href="../../epp-command/contact-transfer/">Contact:Transfer</a></td><td>Request contact transfer</td></tr><tr><td><a href="../../epp-command/contact-update/">Contact:Update</a></td><td>Update contact information</td></tr><tr><td><a href="../../epp-command/contact-updatecheckonly1/">Contact:UpdateCheckonly1</a></td><td>Update contact request with checkonly = 1</td></tr><tr><td><a href="../../epp-command/contact-updatetriggerfoa1/">Contact:UpdateTriggerfoa1</a></td><td>Update contact request with triggerfoa = 1</td></tr></tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">Domain</span>
<pre class="api-io__code"><code><h2>Domain</h2><table><tbody><tr><th><a href="../../epp-command/domain-check/">Domain:Check</a></th><th>Check availability of a single domain</th></tr><tr><td><a href="../../epp-command/domain-create/">Domain:Create</a></td><td>Initiates the domain name registration at the registry</td></tr><tr><td><a href="../../epp-command/domain-delete/">Domain:Delete</a></td><td></td></tr><tr><td><a href="../../epp-command/domain-info/">Domain:Info</a></td><td>Gather information about a domain name in account</td></tr><tr><td><a href="../../epp-command/domain-ownerchange/">Domain:OwnerChange</a></td><td></td></tr><tr><td><a href="../../epp-command/domain-push/">Domain:Push</a></td><td>Move a domain away from CentralNic Reseller</td></tr><tr><td><a href="../../epp-command/domain-renew/">Domain:Renew</a></td><td>Command used to renew domains explicitly for a specified period of time</td></tr><tr><td><a href="../../epp-command/domain-renewalmode/">Domain:Renewalmode</a></td><td>Change the renewalmode of a domain</td></tr><tr><td><a href="../../epp-command/domain-restore/">Domain:Restore</a></td><td>Command used to restore a domain</td></tr><tr><td><a href="../../epp-command/domain-trade/">Domain:Trade</a></td><td></td></tr><tr><td><a href="../../epp-command/domain-update/">Domain:Update</a></td><td>Update domain information</td></tr></tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">Host</span>
<pre class="api-io__code"><code><h2>Host</h2><table><tbody><tr><th><a href="../../epp-command/host-check/">Host:Check</a></th><th></th></tr><tr><td><a href="../../epp-command/host-create/">Host:Create</a></td><td></td></tr><tr><td><a href="../../epp-command/host-delete/">Host:Delete</a></td><td></td></tr><tr><td><a href="../../epp-command/host-info/">Host:Info</a></td><td></td></tr><tr><td><a href="../../epp-command/host-update/">Host:Update</a></td><td></td></tr></tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">Poll</span>
<pre class="api-io__code"><code><h2>Poll</h2><table><tbody><tr><th><a href="../../epp-command/poll-ack/">Poll:Ack</a></th><th>Poll Ack command</th></tr><tr><td><a href="../../epp-command/poll-contactdeletionmessage/">Poll:ContactDeletionMessage</a></td><td>Contact deletion message</td></tr><tr><td><a href="../../epp-command/poll-domaindeletionmessage/">Poll:DomainDeletionMessage</a></td><td>Domain deletion message</td></tr><tr><td><a href="../../epp-command/poll-domainregistrationmessage/">Poll:DomainRegistrationMessage</a></td><td>Domain registration message</td></tr><tr><td><a href="../../epp-command/poll-domainrenewalmessage/">Poll:DomainRenewalMessage</a></td><td>Domain renewal message</td></tr><tr><td><a href="../../epp-command/poll-domaintrademessage/">Poll:DomainTradeMessage</a></td><td>Domain trade message</td></tr><tr><td><a href="../../epp-command/poll-domaintransferstatusmessage/">Poll:DomainTransferStatusMessage</a></td><td>Domain Transfer status message</td></tr><tr><td><a href="../../epp-command/poll-domainupdatemessage/">Poll:DomainUpdateMessage</a></td><td>Domain update message</td></tr><tr><td><a href="../../epp-command/poll-request/">Poll:Request</a></td><td></td></tr><tr><td><a href="../../epp-command/poll-restorefailedmessage/">Poll:RestoreFailedMessage</a></td><td>Domain Restore Failed Poll Message</td></tr><tr><td><a href="../../epp-command/poll-restorenotifymessage/">Poll:RestoreNotifyMessage</a></td><td>Domain Restore Notify Poll Message</td></tr><tr><td><a href="../../epp-command/poll-restorependingmessage/">Poll:RestorePendingMessage</a></td><td>Domain Restore Pending Poll Message</td></tr><tr><td><a href="../../epp-command/poll-restoresuccessfulmessage/">Poll:RestoreSuccessfulMessage</a></td><td>Domain Restore Successful Poll Message</td></tr></tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">Session</span>
<pre class="api-io__code"><code><h2>Session</h2><table><tbody><tr><th><a href="../../epp-command/session-hello/">Session:Hello</a></th><th></th></tr><tr><td><a href="../../epp-command/session-login/">Session:Login</a></td><td></td></tr><tr><td><a href="../../epp-command/session-logout/">Session:Logout</a></td><td></td></tr></tbody></table></code></pre></div>

 

<div class="api-io api-io--command"><span class="api-io__label">Transfer</span>
<pre class="api-io__code"><code><h2>Transfer</h2><table><tbody><tr><th><a href="../../epp-command/transfer-approve/">Transfer:Approve</a></th><th></th></tr><tr><td><a href="../../epp-command/transfer-cancel/">Transfer:Cancel</a></td><td></td></tr><tr><td><a href="../../epp-command/transfer-query/">Transfer:Query</a></td><td></td></tr><tr><td><a href="../../epp-command/transfer-reject/">Transfer:Reject</a></td><td></td></tr><tr><td><a href="../../epp-command/transfer-request/">Transfer:Request</a></td><td>Initiates the domain transfer</td></tr></tbody></table></code></pre></div>


