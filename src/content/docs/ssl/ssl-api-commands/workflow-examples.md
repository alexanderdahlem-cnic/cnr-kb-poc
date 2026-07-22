---
title: "Workflow Examples"
description: "Short description of different commands for certificates and subs. ➥ Learn more!"
---

Short description of different commands for certificates and subs.

## AddCertificate

Ordering a new certificate. Creates a new certificate and a new sub.

### Command

```
command=AddCertificate
csrX=...
[...]
```

Certificate before the command has been issued:

### Command

```
n/a
```

Certificate after the command has been issued:

### Command

```
Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE
```

## RenewCertificate

Renewing an existing certificate. Mandatory parameter is "certificate", a certain sub can be stated optionally. Creates a new sub for an existing certificate.

### Example 1:

No sub has been explicitly stated, the newest active certificate will be renewed.

### Command

```
command=RenewCertificate
certificate=CZ00001
```

Certificate before the command has been issued:

### Command

```
Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE	<-- this sub will be renewed
```

Certificate after the command has been issued:

### Command

```
Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE
Sub:			CZ00001-002		ACTIVE	<-- this is the renewed sub
```

### Example 2:

No sub has been explicitly stated, the newest active certificate will be renewed.

### Command

```
command=RenewCertificate
certificate=CZ00001
```

Certificate before the command has been issued:

### Command

```
Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE
Sub:			CZ00001-002		ACTIVE	<-- this sub will be renewed
```

Certificate after the command has been issued:

### Command

```
Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE
Sub:			CZ00001-002		ACTIVE
Sub:			CZ00001-003		ACTIVE	<-- this is the renewed sub
```

### Example 3:

The explicitly stated sub will be renewed.

### Command

```
command=RenewCertificate
certificate=CZ00001
sub=CZ00001-001
```

Certificate before the command has been issued:

### Command

```
Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE	<-- this sub will be renewed
Sub:			CZ00001-002		ACTIVE
```

Certificate after the command has been issued:

### Command

```
Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE
Sub:			CZ00001-002		ACTIVE
Sub:			CZ00001-003		ACTIVE	<-- this is the renewed sub
```

## ReissueCertificate

Reissuing a certificate.

### Example 1:

No sub has been explicitly stated, the newest active certificate will be reissued.

### Command

```
command=ReissueCertificate
certificate=CZ00001
csrX=...
```

Certificate before the command has been issued:

### Command

```
Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE	<-- this sub will be reissued
```

Certificate after the command has been issued:

### Command

```
Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE
Sub:			CZ00001-002		ACTIVE	<-- this is the reissued sub
```

### Example 2:

No sub has been explicitly stated, the newest active certificate will be reissued.

### Command

```
command=ReissueCertificate
certificate=CZ00001
csrX=...
```

Certificate before the command has been issued:

### Command

```
Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE
Sub:			CZ00001-002		ACTIVE	<-- this sub will be reissued
```

Certificate after the command has been issued:

### Command

```
Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE
Sub:			CZ00001-002		ACTIVE
Sub:			CZ00001-003		ACTIVE	<-- this is the reissued sub
```

### Example 3:

The explicitly stated sub will be reissued.

### Command

```
[Command]
command=ReissueCertificate
certificate=CZ00001
sub=CZ00001-001
csrX=...
```

Certificate before the command has been issued:

### Command

```
Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE	<-- this sub will be reissued
Sub:			CZ00001-002		ACTIVE
```

Certificate after the command has been issued:

### Command

```
Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE
Sub:			CZ00001-002		ACTIVE
Sub:			CZ00001-003		ACTIVE	<-- this is the reissued sub
```

## DeleteCertificate

The DeleteCertificate command can be used to revoke a certificate.

### Example 1:

No sub has been explicitly stated, the newest active certificate will be revoked.

### Command

```
command=DeleteCertificate
certificate=CZ00001
```

Certificate before the command has been issued:

### Command

```
Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE
Sub:			CZ00001-002		ACTIVE	<-- this sub will be revoked
```

Certificate after the command has been issued:

### Command

```
Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE
Sub:			CZ00001-002		REVOKED
```

### Example 2:

The explicitly stated sub will be reissued.

### Command

```
command=DeleteCertificate
certificate=CZ00001
sub=CZ00001-001
```

Certificate before the command has been issued:

### Command

```
Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE	<-- this sub will be revoked
Sub:			CZ00001-002		ACTIVE
```

Certificate after the command has been issued:

### Command

```
Certificate:		CZ00001
Sub:			CZ00001-001		REVOKED
Sub:			CZ00001-002		ACTIVE
```
