---
title: "Subject Alternative Names (SAN)"
description: "To add additional domains to a certificate, please use the SAN - extension for a CSR AND submit the required domains in the AddCertificate/ReissueCertificate - "
---

## Add additional domains to a certificate

To add additional domains to a certificate, please use the SAN - extension for a CSR AND submit the required domains in the AddCertificate/ReissueCertificate - command. The domains submitted via command and included in the CSR will be compared and any difference will result in a failing request. The order of domains is not important and the matching is not case-sensitive. You can use the CheckCertificate command to check the SAN in your CSR.

**Note**

Certificates containing SAN will be charged by the number of additional domains - We don't support changing of SAN in existing certificates at the moment

## AddCertificate

### Command

```
command=AddCertificate
csrX=...
[...]
domain0=example.net
domain1=www.example.net
domain2=www.example.com
domain3=mail.example.com
```

## Generating a CSR including SAN with OpenSSL

To create a CSR containing SAN with OpenSSL, you need to create a config containing the "alt\_names" - extension as shown below (using example.cnf)

```
HOME                    = .
RANDFILE                = $ENV::HOME/.rnd

[req]
default_bits            = 2048
default_keyfile         = privkey.pem
distinguished_name      = req_distinguished_name
attributes              = req_attributes
x509_extensions         = v3_req
string_mask             = nombstr
req_extensions          = v3_req
default_md = sha256

[req_distinguished_name]
countryName                     = Country Name (2 letter code)
countryName_default             = DE
countryName_min                 = 2
countryName_max                 = 2

stateOrProvinceName             = State or Province Name (full name)
stateOrProvinceName_default     = Test state

localityName                    = Locality Name (eg, city)
localityName_default            = Test town

0.organizationName              = Organization Name (eg, company)
0.organizationName_default      = Testing Ltd.

organizationalUnitName          = Organizational Unit Name (eg, section)
organizationalUnitName_default  = Test department

commonName                      = Common Name (eg, YOUR name)
commonName_max                  = 64
commonName_default              = www.example.com

emailAddress                    = Email Address
emailAddress_max                = 64
emailAddress_default            = hostmaster@example.com

[v3_req]
basicConstraints = CA:FALSE
keyUsage = nonRepudiation, digitalSignature, keyEncipherment
subjectAltName = @alt_names

[alt_names]
DNS.1 = example.net
DNS.2 = www.example.net
DNS.3 = www.example.com
DNS.4 = mail.example.com
```

This file can now be used with this openssl command to create a new CSR: The resulting content of example.csr can then be used in CheckCertificate, AddCertificate or ReissueCertificate by using the CSR# parameter (every line in the CSR a new numbered parameter).

```
openssl req -new [-nodes] [-sha256] -keyout example.key -out example.csr -config example.cnf
```

## Ordering a certificate with Subject Alternative Names

To include multiple domains in 1 certificate, Subject Alternative Names (SAN) can be used. For this, the domainX - parameters must match the SAN - extension in the CSR (See details in the introduction).

### Command

```
command=AddCertificate
csr0=-----BEGIN CERTIFICATE REQUEST-----
csr1=MIIC9DCCAdwCAQAwga4xCzAJBgNVBAYTAkRFMRswGQYDVQQIExJSaGluZWxhbmQt
csr2=UGFsYXRpbmUxFDASBgNVBAcTC011c3RlcnN0YWR0MRQwEgYDVQQKEwtNdXN0ZXJm
csr3=aXJtYTEdMBsGA1UECxMUVGVjaG5pY2FsIGRlcGFydG1lbnQxFDASBgNVBAMTC2V4
csr4=YW1wbGUuY29tMSEwHwYJKoZIhvcNAQkBFhJtdXN0ZXJAZXhhbXBsZS5jb20wggEi
csr5=MA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDNfuchcGp4dbz++86IT9dhN9DT
csr6=Wt3ll8bDlLBkntHVIUcBPNl0QwX3WSM1Oc1Xf8VuDvk8ywlj0KC8kEtBMdwDBONg
csr7=K+c0QcXTjebFd5Az5ExUiAytUvficVccDzpPIojcht4/pZoYtwDA7ZLxegT50fe6
csr8=qiFUkT1O9NGIZIfHooh2wFzRN92UXb2L08zuNv6+He6OAPoAA9JgmlY+MDD0Nwrj
csr9=n6dWKv8RZ8ffBLevdKivYMvZWD+z5FF/T43UMQ2Zu+4oYYx/o2Zq0IKormHGTydq
csr10=h1Cxy4zmhdRYkY/ISXDhUrZB/PNL30eWnUQrOk074jrAw+27HtFI1iTaVXwPAgMB
csr11=AAGgADANBgkqhkiG9w0BAQUFAAOCAQEAjr3iAQIYN2F3XFj2t3x818wLbmnIkuL3
csr12=KW96PfGs/c6IQbLcdauPrLly+rZIWwic0/TKgGV3A9mQM/V2Bip6b50l7AEWSdiL
csr13=8wq3B9kQN24XA19E0YtILuBBFIcnAEvB70xWKdYn1y0gBnepgIGJ56ecxpFK2QBY
csr14=3flMV6puvRIXatB4g6UeEO4aekBsVnPC8wIQSn6ioZ5SOlzXGHOtE5deuJt4LMtn
csr15=KNaA4vhGW3ogflle4Dnf9HILsd41KNfOLS+f2adBq6eXJpAydVbEHW2qU9/TNGHK
csr16=imMq0DwFaRVWh29FKXqEFJJN5KjtGfCoKj9rIC/TOMgeq+2XIUyxzA==
csr17=-----END CERTIFICATE REQUEST-----
approveremail=muster@example.com
ownercontact0=P-ABC1
admincontact0=P-ABC1
techcontact0=P-ABC1
billingcontact0=P-ABC1
webservertype=apache2
class=TRUEBIZID
domain0=example.net
domain1=www.example.net
domain2=www.example.com
domain3=mail.example.com
```

### Response

```
code = 200
description = Command completed successfully
property[billingclass][0] = truebizid-4san
property[certificate][0] = SA1234567
property[status][0] = REQUESTED
property[sub][0] = SA1234567-001
property[sub status][0] = ORDER_REQUESTED
EOF
```
