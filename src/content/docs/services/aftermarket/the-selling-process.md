---
title: "The Selling Process"
sidebar:
  order: 1610
---

Selling Domains through the CentralNic Reseller Aftermarket System is currently only available for Sedo. After domains have been listed for sale, this section covers to actual selling process. In general there are two different types of sale:

-   **Direct Sale**: Refers to a listing of a domain using listingtype=buy\_now. Directly processes the sale as soon as a valid bid is received.
-   **Bidding**: By setting up a listing of a domain as bidding, using listingtype=make\_offer, you will receive bids as BID\_INCOMING events. The system gives full flexibility to react individually to every received bid, by accepting or denying the offer, or make a counter offer, if you’re not satisfied with the received bid.

### Direct Sale (buy\_now)

When a bid is received for a Domain listed for direct sale (listingtype=buy\_now), you'll receive a BID\_SUCCESS event.

Basically that's it, you successfully sold or bought a domain. Congratulations! You'll receive a respective TRANSFER\_SUCCESS event for the incoming domain, or a FOREIGN\_TRANSFER\_SUCCESS event for the outgoing domain.

:::command[Command]

```text
AFTERMARKET_BID:BID_SUCCESS
(token:<token>;domain:<domain>;bid:<bid>)
A bid for a domain was successful and is now available in the reseller - account.
```

:::

### Bidding (make\_offer): React to a bid

This process refers to a Domain listed as a bidding using the parameter value listingtype=make\_offer: The domain has a set minimum price which needs to be matched for a sale. However the buyer can offer a price for which he is willing to buy the domain. Whenever a bid is received for a Domain listed for bidding, you’ll receive a BID\_INCOMING event. You can now react to this bid using the command AftermarketBid to accept or deny the offer, or make a counter offer, if you’re not satisfied with the received bid.

:::command[Command]

```text
AFTERMARKET_BID:BID_INCOMING
(token:<token>;domain:<domain>;bid:<bid>)
```

:::

### Accept a Bid

If you'd like to agree to the bid and close the deal. The buyer is receiving a respective BID\_ACCEPTED event and the domain will be moved to the buyers CentralNic Reseller account.

:::command[Command]

```text
command=AftermarketBid
token=(TEXT)
action=accept
```

:::

### Deny a Bid

If you don't agree to the bid. The potential buyer is receiving a respective BID\_REJECTED event.

:::command[Command]

```text
command=AftermarketBid
token=(TEXT)
action=deny
```

:::

### Deny a Bid and make a Counter Offer

If you don't agree to the bid but would like to make a counter offer. This can be repeated several times until both sides are satisfied. The potential buyer is receiving a respective BID\_REJECTED including the proposed counter offer.

:::command[Command]

```text
command=AftermarketBid
token=(TEXT)
bid=(DECIMAL)
action=counter
```

:::
