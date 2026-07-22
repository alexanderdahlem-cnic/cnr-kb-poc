---
title: "AddAftermarketDomain"
description: "CentralNic Reseller API Command Reference  ➤ Aftermarket ➤ AddAftermarketDomain ➥ Learn more about CentralNic Reseller API Commands"
---

Adding a Domain for selling via the Aftermarket System requires the statement of: the Domain name Identifier of the Aftermarket Account Price, a minimum of 90.00 USD is required the type of listing, buy\_now (price is fixed) or make\_offer (offers can be made) the Aftermarket Provider The command always returns a token, which identifies the listing.  
  
After a domain has been added to the Aftermarket System, a **Form Of Authorisation (FOA) email** will be sent to the Admin Contacts of the respective domain. If several domains with the same Admin Contact are added, only one FOA email for these domains will be sent. The FOA email contains a link including an approval code to aftermarketapproval.com to activate the listing. The sender address is "noreply@aftermarketapproval.com".  
  
The respective URL for approving Sedo listings is http://sedo.aftermarketapproval.com/ Once the Admin Contact approved the listing, the resepective domain(s) will be submitted for listing at the selected provider. If after 5 days no approval is received, the domain will automatically be removed from the Aftermarket System in RRPproxy.

## Possible Gateways

The command _AddAftermarketDomain_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
command=AddAftermarketDomain
domain=<DOMAIN>                  (The Domain you'd like to list.)
 - or
domainX=<DOMAIN>                 (In case you'd like to list up to 256 Domains with one command, specify them with domain0, domain1 ... domain255)
aftermarketaccount=<TEXT>        (Identifier of the Account where the domain should be listed)
price=<DECIMAL>                  (Price for the listed Domain. Format XX.XX, decimals always need to be stated. A minimum price of 90.00 USD is required.)
- or -
priceX=<DECIMAL>                 (In case you'd like to list several Domains with one command, specify their respective prices with price0, price1 ... price255.)
listingtype=buy_now|make_offer   (Price is fixed|offers can be made. Defaults to buy_now if not stated otherwise.)
provider=sedo                    (The Aftermarket Provider, where the Domain(s) shall be listed.)
```

### Response

```
property[aftermarketdomain][n] = <DOMAIN>
property[status][n] = foa_pending
property[token][n] = <TEXT>
```
