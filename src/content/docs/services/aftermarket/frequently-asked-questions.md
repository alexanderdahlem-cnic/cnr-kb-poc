---
title: "FAQ Aftermarket"
description: "Can Domains outside my RRPproxy account be listed? Can anybody see my domain listings at the respective Aftermarket Provider?..."
---

Can Domains outside my CentralNic Reseller account be listed?

Unfortunately, the answer is no. We can only make sure the listed domains are under your control as long as they are inside your account. For domains outside your account we can not assure they are under your full control.

Can anybody see my domain listings at the respective Aftermarket Provider?

Yes. Your listings will be visible for everybody.

Can domains be traded between two different CentralNic Reseller accounts in the Aftermarket System?

Yes, this is fully supported.

Can I list one domain multiple times at Sedo?

This is not possible. At Sedo one domain can only be listed once. However, you can list the same domain at other Aftermarket Providers as well.

Can I list one domain multiple times at Afternic?

This is not possible. At Afternic one domain can only be listed once. However, you can list the same domain at other Aftermarket Providers as well.

How am I notified that a bid/offer has been placed for a listed domain?

You will receive a BID\_INCOMING Event: AFTERMARKET\_BID:BID\_INCOMING

Instead of having to use the token, is stating Domain name also possible?

No, the token is necessary because several listing instances can exist for one Domain in the Aftermarket System. For example: An inactive listing for direct buy and an active listing for bidding. Also, as soon as additional Aftermarket Providers are available these tokens are necessary to distinguish listings of same domains at different Aftermarket Providers.

Why do I have to set a minimum price of 90.00 USD?

This is a requirement of the Aftermarket Providers.

Is a listed domain locked?

Yes. All domains listed in the CentralNic Reseller Aftermarket are locked, domain modifications, transfers and deletions are not possible.

Why am I getting the error message "Domain listed on aftermarket, please remove first"?

You'll receive this error message when trying to modify (ModifyDomain), transfer (TransferDomain) or delete (DeleteDomain) a domain which is listed in the CentralNic Reseller Aftermarket. If you would like to perform such an action, please delist the respective domain first.

Why is no EPP support available for the CentralNic Reseller Aftermarket?

EPP is designed for domain management. Adding EPP support for the CentralNic Reseller Aftermarket would require the development of many EPP extensions which would be far beyond any standardisation.
