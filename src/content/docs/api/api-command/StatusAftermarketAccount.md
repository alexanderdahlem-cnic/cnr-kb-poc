---
title: "StatusAftermarketAccount"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ StatusAftermarketAccount ➥ Learn more about CentralNic Reseller API Commands"
---

StatusAftermarketAccount shows the total number of domains currently listed, Account Key, Description, Aftermarket Provider of an Aftermarket Account. Furthermore it shows if the Login to the Aftermarket Provider was successful (1) or unsuccessful (0). The Login will be shown as unsuccessful if the Account Key has been changed, for example directly at the Aftermarket Provider.

## Possible Gateways

The command _StatusAftermarketAccount_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command=StatusAftermarketAccount
aftermarketaccount=<TEXT>          (identifier for the Aftermarket Account to be modified, alphanumerical random string of 10 characters)
```

### Response

```
property[aftermarketaccount][0] = <TEXT>
property[accountkey][0] = <TEXT>
property[description][0] = <TEXT>
property[listed domains][0] = <INT> (how many domains are currently listed for sale with this Aftermarket Account)
property[login successful][0] = 0|1 (Shows if the Login to the Aftermarket Provider was successful (1) or unsuccessful (0).
				    Unsuccessful if the Account Key has been changed, for example directly at the Aftermarket Provider.)
property[provider][0] = sedo
```
