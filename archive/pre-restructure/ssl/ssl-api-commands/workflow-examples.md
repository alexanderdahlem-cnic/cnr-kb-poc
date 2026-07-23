---
title: "Workflow Examples"
description: "Short description of different commands for certificates and subs. ➥ Learn more!"
---

Short description of different commands for certificates and subs.

## AddCertificate

Ordering a new certificate. Creates a new certificate and a new sub. 

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=AddCertificate
csrX=...
[...]</code></pre></div>

Certificate before the command has been issued: 

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>n/a</code></pre></div>

Certificate after the command has been issued: 

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE</code></pre></div>

## RenewCertificate

Renewing an existing certificate. Mandatory parameter is "certificate", a certain sub can be stated optionally. Creates a new sub for an existing certificate.

### Example 1:

No sub has been explicitly stated, the newest active certificate will be renewed. 

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=RenewCertificate
certificate=CZ00001</code></pre></div>

Certificate before the command has been issued: 

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE	&lt;-- this sub will be renewed</code></pre></div>

Certificate after the command has been issued: 

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE
Sub:			CZ00001-002		ACTIVE	&lt;-- this is the renewed sub</code></pre></div>

### Example 2:

No sub has been explicitly stated, the newest active certificate will be renewed. 

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=RenewCertificate
certificate=CZ00001</code></pre></div>

Certificate before the command has been issued: 

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE
Sub:			CZ00001-002		ACTIVE	&lt;-- this sub will be renewed</code></pre></div>

Certificate after the command has been issued: 

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE
Sub:			CZ00001-002		ACTIVE
Sub:			CZ00001-003		ACTIVE	&lt;-- this is the renewed sub</code></pre></div>

### Example 3:

The explicitly stated sub will be renewed. 

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=RenewCertificate
certificate=CZ00001
sub=CZ00001-001</code></pre></div>

Certificate before the command has been issued: 

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE	&lt;-- this sub will be renewed
Sub:			CZ00001-002		ACTIVE</code></pre></div>

Certificate after the command has been issued: 

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE
Sub:			CZ00001-002		ACTIVE
Sub:			CZ00001-003		ACTIVE	&lt;-- this is the renewed sub</code></pre></div>

## ReissueCertificate

Reissuing a certificate.

### Example 1:

No sub has been explicitly stated, the newest active certificate will be reissued. 

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=ReissueCertificate
certificate=CZ00001
csrX=...</code></pre></div>

Certificate before the command has been issued: 

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE	&lt;-- this sub will be reissued</code></pre></div>

Certificate after the command has been issued: 

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE
Sub:			CZ00001-002		ACTIVE	&lt;-- this is the reissued sub</code></pre></div>

### Example 2:

No sub has been explicitly stated, the newest active certificate will be reissued. 

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=ReissueCertificate
certificate=CZ00001
csrX=...</code></pre></div>

Certificate before the command has been issued: 

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE
Sub:			CZ00001-002		ACTIVE	&lt;-- this sub will be reissued</code></pre></div>

Certificate after the command has been issued: 

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE
Sub:			CZ00001-002		ACTIVE
Sub:			CZ00001-003		ACTIVE	&lt;-- this is the reissued sub</code></pre></div>

### Example 3:

The explicitly stated sub will be reissued. 

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>[Command]
command=ReissueCertificate
certificate=CZ00001
sub=CZ00001-001
csrX=...</code></pre></div>

Certificate before the command has been issued: 

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE	&lt;-- this sub will be reissued
Sub:			CZ00001-002		ACTIVE</code></pre></div>

Certificate after the command has been issued: 

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE
Sub:			CZ00001-002		ACTIVE
Sub:			CZ00001-003		ACTIVE	&lt;-- this is the reissued sub</code></pre></div>

## DeleteCertificate

The DeleteCertificate command can be used to revoke a certificate.

### Example 1:

No sub has been explicitly stated, the newest active certificate will be revoked. 

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=DeleteCertificate
certificate=CZ00001</code></pre></div>

Certificate before the command has been issued: 

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE
Sub:			CZ00001-002		ACTIVE	&lt;-- this sub will be revoked</code></pre></div>

Certificate after the command has been issued: 

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE
Sub:			CZ00001-002		REVOKED</code></pre></div>

### Example 2:

The explicitly stated sub will be reissued. 

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command=DeleteCertificate
certificate=CZ00001
sub=CZ00001-001</code></pre></div>

Certificate before the command has been issued: 

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE	&lt;-- this sub will be revoked
Sub:			CZ00001-002		ACTIVE</code></pre></div>

Certificate after the command has been issued: 

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>Certificate:		CZ00001
Sub:			CZ00001-001		REVOKED
Sub:			CZ00001-002		ACTIVE</code></pre></div>


