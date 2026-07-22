---
title: "DeleteCertificate"
description: "CentralNic Reseller API Command Reference  ➤ Certificate ➤ DeleteCertificate ➥ Learn more about CentralNic Reseller API Commands"
---

This command allows the user to cancel or revoke orders without implementing the complete handling of orders by just using the certificate ID instead of the order ID.  
For the parameter "action", with the value "Revoke" executes the API command RevokeCertificate, with "CancelOrder" executes the API command CancelCertificateOrder and with "RevokeOrder" executes the API command RevokeCertificateOrder. Please kindly note, depending on the CA, a revoke of an order and/or certificate alone will not cancel the order and thus won't initiate a refund (if applicable).  
For the attributes description, please refer to the SSL 2.0 API Documentation.  
For API 1.0 commands, please refer to the SSL Legacy API Documentation.

## Possible Gateways

The command _DeleteCertificate_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND         = DeleteCertificate
CERTIFICATE	= (TEXT)
ACTION 		= REVOKE|CANCELORDER|REVOKEORDER
APIVERSION 	= 1|2
```

### Response

```
code 		= (INT)
description 	= (TEXT)
```
