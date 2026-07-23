---
title: "Buying a Domain"
description: "To buy a domain in the RRPproxy Aftermarket, a search for available domains at Aftermarket Providers must be done to determine the price of a domain."
---

To buy a domain in the CentralNic Reseller Aftermarket, a search for available domains at Aftermarket Providers must be done to determine the price of a domain. This can be done using the QueryAftermarketList command. To allow a domain be put into a shopping cart on websites, the command ReserveDomain may be utilised, which reserves a domain exclusively for an Aftermarket Account for 8 hours, and up to 96 hours in total. This step can be skipped and BuyDomain can be used directly to initiate the process of buying a domain from the aftermarket.

In case ReserveDomain was used, please note the TOKEN returned by the command. To successfully acquire the domain this token must be stated in the following BuyDomain command. The section of the aftermarket, where a domain is listed determines the next step.

If the domain was listed as a Direct Sale ("buy\_now"), a transfer will be initiated to put the domain into your account. After a successful transfer, the domain will be modified to reflect the new owner given by CONTACT in the original BuyDomain call.

In case the domain was listed as Bidding ("make\_offer", available only for Sedo), the seller must approve your bid or make a counter offer. Upon approval, you will receive an event and the domain is automatically moved to your account followed by the owner contact modification. Rejection of a bid can happen in two variants, with or without counter offer. Without counter offer your bid is simply rejected. Of course you can place further bids for the same bidding. In case you receive a rejection including a counter offer, you can approve it or place a counter offer yourself. This process repeats until both sides are satisfied, after which the domain will be transferred into your account and the owner contact data will be modified.

**Note**

The CentralNic Reseller Aftermarket System works with your account currency. The minimum price of 90.00 USD must be equal converted to your account currency. You might want to use the API command ConvertCurrency to convert USD in a currency of your choice.
