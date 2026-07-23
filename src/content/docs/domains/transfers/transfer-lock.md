---
title: "Transfer Lock"
---

## Overview

CentralNic Reseller automatically applies a **transfer lock** (`clientTransferProhibited`) to all newly registered or transferred-in domains immediately after they are confirmed in our system. This feature is enabled by default for all accounts and applies to all domains in TLDs where the registry supports this lock option.

The transfer lock functions as an additional layer of security for your domain portfolio. Even if a threat actor obtains a domain's authorization (auth) code, they cannot initiate a transfer while the lock is active — they would also need direct access to the account. Additionally, if an unauthorized incoming transfer occurs, the immediate lock prevents the domain from being transferred back using the same auth code.

## How It Works

When a domain is registered or transferred in, the `clientTransferProhibited` status is applied automatically. Any outbound transfer of that domain will fail until the lock is explicitly removed.

After a lock is removed, if the domain is not transferred out within **30 days**, the lock is automatically reapplied (provided the default lock setting is active for your account). This ensures domains remain protected whenever a transfer is not actively in progress.

## Opting Out

While we do not recommend disabling this feature, two opt-out options are available:

### Account-wide default setting

A Registrar Property called `GENERAL-DEFAULT-CLIENTTRANSFERPROHIBITED` controls the default lock behavior for your entire account. It is set (enabled) by default for all customers. To disable the default lock for all new domains, unset this property with following API command:

:::command[Command]

```text
command = SetProperty
GENERAL-DEFAULT-CLIENTTRANSFERPROHIBITED = 0
```

:::

### Per-domain override

The `TRANSFERLOCK` parameter on the `AddDomain` and `TransferDomain` commands lets you override the account default for individual domains:

-   `TRANSFERLOCK=1` — apply the lock at registration/transfer (explicit enable)
-   `TRANSFERLOCK=0` — do not apply the lock at registration/transfer (explicit disable)

The per-domain `TRANSFERLOCK` parameter always takes precedence over the account-wide Registrar Property, in both directions:

-   If the account default is **enabled**, use `TRANSFERLOCK=0` to exclude a specific domain.
-   If the account default is **disabled**, use `TRANSFERLOCK=1` to lock a specific domain.

## Removing a Lock

Remove the transfer lock only when you intend to transfer a domain out. **Once removed, the domain must be transferred within 30 days** — after which the lock will be automatically reapplied if the account default is active.
