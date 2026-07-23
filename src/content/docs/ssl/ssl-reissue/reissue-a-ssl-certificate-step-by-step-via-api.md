---
title: "Reissue a SSL Certificate Step by Step via API"
sidebar:
  order: 1260
  label: "SSL Reissue via API"
---

To reissue an SSL certificate you need:

-   The ID of the certificate (parameter: certificate; also referred to as order-identifier)
-   Optional: a new CSR
-   Optional: a new email address for the validation of the SSL certificate
-   Optional: the sub ID, if a different than the newest active certificate shall be reissued (parameter: sub; also referred to as certificate-identifier)

## API Command Example 1: No sub is stated

No sub is stated, the newest active sub-certificate will be reissued (in this case CZ00001-002).

:::command[Command]

```text
command=ReissueCertificate
certificate=CZ00001
csrX=...
```

:::

Certificate before the command has been issued (in this case CZ00001-002 ist the newest active sub-certificate):

:::command[Command]

```text
Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE
Sub:			CZ00001-002		ACTIVE	<-- this sub will be reissued
```

:::

Certificate after the command has been issued:

:::command[Command]

```text
Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE
Sub:			CZ00001-002		ACTIVE
Sub:			CZ00001-003		ACTIVE	<-- this is the reissued sub
```

:::

## API Command Example 2: explicitly stated sub

An explicitly stated sub will be reissued.

:::command[Command]

```text
command=ReissueCertificate
certificate=CZ00001
sub=CZ00001-001
csrX=...
```

:::

Certificate before the command has been issued:

:::command[Command]

```text
Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE	<-- this sub will be reissued
Sub:			CZ00001-002		ACTIVE
```

:::

Certificate after the command has been issued:

:::command[Command]

```text
Certificate:		CZ00001
Sub:			CZ00001-001		ACTIVE
Sub:			CZ00001-002		ACTIVE
Sub:			CZ00001-003		ACTIVE	<-- this is the reissued sub
```

:::

## Obtaining the new CRT

The new CRT can be obtained via StatusCertificate, once the reissue has been finished by the CA. Please note, this is an asynchronous process so it might take a while until the reissue has been completed by the CA.

:::command[Command]

```text
command=StatusCertificate
certificate= CZ00001
sub=CZ00001-003
```

:::

## Revoking a certificate

In the context of a certificate reissue the old certificate should be revoked after the new CRT is active. You can do so by sending in a DeleteCertificate command. Please make sure, you're stating the correct sub-certificate ID! (parameter: sub; also referred to as certificate-identifier). If you just use the certificate ID the whole certificate order including all sub-certificates will be revoked! (Certificate ID parameter: certificate; also referred to as order-identifier)

:::command[Command]

```text
command=DeleteCertificate
certificate=CZ00001
sub=CZ00001-001
```

:::

## ReissueCertificate API Command

This command will create a new sub-certificate in a certificate order (parameter "certificate") based on data of the most recent existing sub-certificate and the data given with the command (given values overwrite existing data). The expiration date of the new sub-certificate will not change since the new sub-certificate is only meant to be used as a replacement. Stating the CSR is mandatory. If you want to reissue the certificate order based on a different sub-certificate than the most recent, you have the option to use a specific sub-certificate (parameter "sub").  
Exemplary command and output:

:::command[Command]

```text
command=ReissueCertificate
certificate=                               <-- ID of the certificate
csr0=-----BEGIN CERTIFICATE REQUEST-----
csr1=                                      <-- The CSR, line by line.
csr2=
csr3=
...
csr#=-----END CERTIFICATE REQUEST-----

sub=                                       <-- Optional. Only necessary, if data of an old sub-certificate shall be used. If not stated, the data of the most recent sub-certificate will be used.
reissueemail=                              <-- Optional. In case you would like to use a different approval email for the validation process.
algorithm=                                 <-- Optional. Per default the valid algorithm will be used.
```

:::

## StatusCertificate API Command

In particular, for reissuing a certificate the API command StatusCertificate is of help. It returns: - The sub-certificate ID (property\[sub id\]\[0\] = ...) and which is currently active (property\[sub status\]\[0\]=ACTIVE) - The approver email address (property\[approveremail\]\[0\] = ...) - The full CSR (property\[csr\]\[0-X\] = ...) - The full CRT (property\[crt\]\[0-X\] = ...)

:::command[Command]

```text
...
property[approveremail][0]= address@example.com
property[certificate][0]= AB1234567
...
property[crt][0]=
property[crt][X]=
...
property[csr][0]=
property[csr][X]=
...
property[sub][0]= AB1234567-001
property[sub id][0]= AB1234567-001
property[sub status][0]= ACTIVE
...
```

:::

:::command[Certificate API-Commands]

```text
Certificate API-CommandsAddCertificateRequest SSL certificateCheckCertificateGather information about a certificate requestDeleteCertificateDelete a certificateGetCertificateInfoRequest general information about a certificate classModifyCertificateChange the approver email addressQueryCertificateListList all certificate ordersReissueCertificateCreate a new sub-certificate in a certificate orderRenewCertificateRenewCertificate will create a new sub-certificate in a certificate orderStatusCertificateGive all information about certificate order
```

:::
