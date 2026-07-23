---
title: "Aftermarket Events"
description: "Received by the buyer: A bid made for a domain was accepted and the domain has been transferred to the winning RRPproxy reseller account..."
sidebar:
  order: 1630
---

## Received by the buyer

A bid made for a domain was accepted and the domain has been transferred to the winning CentralNic Reseller reseller account.

:::command[Command]

```text
AFTERMARKET_BID:BID_ACCEPTED
(token:<token>;domain:<domain>;bid:<bid>)
```

:::

## Received by the potential buyer

A bid made for a domain was rejected, optionally the seller offered a counter proposal.

:::command[Command]

```text
AFTERMARKET_BID:BID_REJECTED
(token:<token>;domain:<domain>;bid:<bid>;{counter:<bid>})
```

:::

## Received by the seller

For a domain you are selling there is a bid incoming (respond with AftermarketBid).

:::command[Command]

```text
AFTERMARKET_BID:BID_INCOMING
(token:<token>;domain:<domain>;bid:<bid>)
```

:::

## Received by seller and buyer

Can be received both by seller and buyer: A bid for a domain was successful and it is now is available in your CentralNic Reseller reseller account.

:::command[Command]

```text
AFTERMARKET_BID:BID_SUCCESS
(token:<token>;domain:<domain>;bid:<bid>)
```

:::
