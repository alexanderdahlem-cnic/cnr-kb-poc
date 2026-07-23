---
title: "GetCertificateInfo"
description: "CentralNic Reseller API Command Reference  ➤ Certificate ➤ GetCertificateInfo ➥ Learn more about CentralNic Reseller API Commands"
sidebar:
  order: 2750
---

This command will return information about a certificate class.  
For the attributes description, please refer to the SSL 2.0 API Documentation.  
For API 1.0 commands, please refer to the SSL Legacy API Documentation.

:::gateways[Possible Gateways]

- [MREG](../../connecting/centralnic-reseller-metaregistry/)
- [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
- [SOAP](../../connecting/simple-object-access-protocol/)
- [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
- [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

:::

## Required Parameters

The following parameters are standard parameters for this command.

:::command[Command]

```text
COMMAND 	= GetCertificateInfo
APIVERSION 	= 1|2
```

:::

 

:::response[Response]

```text
[RESPONSE]
code                                                = (INTEGER)
description                                         = (TEXT)
runtime                                             = (INTEGER)
queuetime                                           = (INTEGER)
property[algorithms#][n]                            = (TEXT)
property[brand][n]                                  = Sectigo|DigiCert
property[class][n]                                  = (TEXT)
property[dcv dns cname][n]                          = 0|1
property[dcv dns txt][n]                            = 0|1
property[dcv email][n]                              = 0|1
property[dcv http][n]                               = 0|1
property[dcv https][n]                              = 0|1
property[dcv languages][n]                          = n/a|de|ru|zh_cn|zh_tw|fr|pt_br|es|en|ja|kr|it|nl
property[evapprovercontact][n]                      = MANDATORY|NO
property[included domains with base][n]             = (INT)
property[included nonwildcard domains with base][n] = (INT)
property[included wildcard domains with base][n]    = (INT)
property[max domains][n]                            = (INT)
property[max domains including alternatives][n]     = (INT)
property[max free alternatives][n]                  = (INT)
property[max nonwildcard domains][n]                = (INT)
property[max wildcard domains][n]                   = (INT)
property[name][n]                                   = (TEXT)
property[organizationcontact][n]                    = MANDATORY|NO
property[periods][n]                                = (TEXT)
property[prefix][n]                                 = (TEXT)
property[root certificates#][n]                     = (TEXT)
property[server type#][n]                           = (TEXT)
property[supplier][n]                               = DIGICERT|SECTIGO
property[supports immediate issuance][n]            = 0|1
property[techcontact][n]                            = (TEXT)
property[type][n]                                   = DV|EV|OV
property[wildcard][n]                               = 0|1
property[periods][0] = (For Sectigo) 1y,365d
property[periods][0] = (For DigiCert) 1y,7d,14d,21d,28d,35d,42d,49d,56d,63d,70d,77d,84d,91d,98d,105d,112d,119d,126d,133d,140d,147d,154d,161d,168d,175d,182d,189d,196d,203d,210d,217d,224d,231d,238d,245d,252d,259d,266d,273d,280d,287d,294d,301d,308d,315d,322d,329d,336d,343d,350d,357d,364d,365d
```

:::

## Optional

The following parameters are optional for this command.

:::command[Command]

```text
CLASS	= geotrustflexdv|rapidssldv|securesiteflexov|securesiteflexev|securesiteproov|securesiteproev|ssl123dv|webserverov|webserverev|geotrusttruebizidov|geotrusttruebizidev|instantsslov|premiumov|singledomainev|positivessldv|unifiedcommunicationsdv|unifiedcommunicationsov|multidomainev|multidomainov|multidomaindv
```

:::

:::commandlist[Certificate commands]

- [AddCertificate](../addcertificate/)
- [CheckCertificate](../checkcertificate/)
- [DeleteCertificate](../deletecertificate/)
- [GetCertificateInfo](./)
- [QueryCertificateList](../querycertificatelist/)
- [ReissueCertificate](../reissuecertificate/)
- [RenewCertificate](../renewcertificate/)
- [StatusCertificate](../statuscertificate/)
- [RevokeCertificate](../revokecertificate/)
- [RevokeCertificateOrder](../revokecertificateorder/)
- [CancelCertificateOrder](../cancelcertificateorder/)
- [StatusCertificateOrder](../statuscertificateorder/)
- [QueryCertificateOrderList](../querycertificateorderlist/)
- [AddCertificateContact](../addcertificatecontact/)
- [StatusCertificateContact](../statuscertificatecontact/)
- [QueryCertificateContactList](../querycertificatecontactlist/)

:::
