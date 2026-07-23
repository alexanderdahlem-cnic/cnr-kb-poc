---
title: "Internal Transfers"
---

## General Outline

An internal transfer, also known as usertransfer, is when a domain is to be transferred within the CentralNic Reseller system from one reseller account to another, but the registrar account at the registry stays the same.

Internal transfers can either be requested with or without auth-code, please see details below.

## Without Auth-Code

If you start an internal transfer without auth-code, the current reseller has to approve the transfer request within 5 days, otherwise the transfer will timeout on the 6th day.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = TransferDomain
domain  = yourdomain.TLD
action  = usertransfer
NORENEW = 1</code></pre></div>

## With Auth-Code

If you start an internal transfer **with** auth-code, the current reseller can approve or deny the transfer. If the current reseller does not confirm the transfer and the domain is not locked, the transfer will be successfully completed on the 6th day.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = TransferDomain
domain  = yourdomain.TLD
action  = usertransfer
auth    = .......
NORENEW = 1</code></pre></div>

## With Explicit Renewal

If you wish to explicitly renew a domain during internal transfer, please add the parameters detailed below. Please note that this will only work for those TLDs where explicit renewals are supported. If in doubt, please check the TLD's respective knowledge base article.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>[…]
period  = 1
NORENEW = 0</code></pre></div>

Please note that internal transfers are not subject to usual TLD-specific transfer procedures.

By default, our system does not send any email notifications to domain contacts, neither owner nor admin, for internal transfers.

## Renewal Settings for Internal Transfers

Several options for internal transfer handling regarding renewals give you the possibility to either use these properties (default), apply the registry policy (i.e. renew according to transfer policy of the respective registry), or never renew a domain upon a successfully processed internal transfer. These options only apply for incoming transfers and can be set account-wide. Furthermore, it is possible to skip the renewal against your default settings per internal domain transfer via parameter  
norenew = 1. It is not possible to force a renewal with the usertransfer if not intended by Registry and your account wide settings.

Please note that these options only apply to internal transfers within accreditations of Key-Systems. Reseller accreditations using Registry Account Management (RAM) can not use these options for internally transferring domains to another reseller. Instead a normal inter-registrar transfer applies.

The settings can be found in the control panel following "Account" -> "Settings" -> "System" tab -> "General Settings".

-   "Default" renews .COM, .NET, .ORG, .BIZ, .INFO, .NAME domains upon internal transfer. All other TLDs will not.
-   "Apply registry policy" renews domains according to the specific registry transfer policy.
-   "No renew" never renews a domain upon internal transfer.

## API Example to Modify Your Account-Wide Setting

If no value is transmitted, the default setting is used.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command                 = ModifyRegistrar
INTERNAL-TRANSFER-RENEW = REGISTRY | NORENEW | (Null)</code></pre></div>

## API Example for an Internal Transfer, Skipping the Renewal

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command = TransferDomain
domain  = yourdomain.com
action  = usertransfer
NORENEW = 1</code></pre></div>


