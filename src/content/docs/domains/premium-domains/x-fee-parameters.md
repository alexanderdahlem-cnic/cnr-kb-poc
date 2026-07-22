---
title: "X-FEE Parameters"
description: "Each Fee Block consits of the parameters domain, currency, command, period, periodtype and launchphase. A maximum of 30 X-FEE extensions can be used in one API "
---

Each Fee Block consits of the parameters domain, currency, command, period, periodtype and launchphase. A maximum of 30 X-FEE extensions can be used in one API call. Default for currency is always the own account currency. If a currency is given that is not the own account currency it will result in an error. Default for period is always 1 and for periodtype is YEAR. Values that are not available will result in an error.

The default for launchpase is empty which will return the regular TLD price. If launchphase is used it will return the price for an application phase. If the launchphase is not known or no longer active it will result in an error.

**Note**

The x-fee-domain parameter is not required in CheckDomain or StatusDomain since it has to be the same as the regular DOMAIN parameter anyway. Setting x-fee-domain to a domain name that is not included in the regular domain availability check will return an error!

## Complete FEE extension Block

_x-fee-domain0=YOURDOMAIN.TLD  
x-fee-currency0=USD  
x-fee-command0=ADD  
x-fee-period0=1  
x-fee-periodtype0=YEAR  
x-fee-launchphase0=GOLIVE_

### Command

```
command=CheckDomain
domain=YOURDOMAIN.TLD
x-fee-domain0=YOURDOMAIN.TLD
x-fee-currency0=USD
x-fee-command0=ADD
x-fee-period0=1
x-fee-periodtype0=YEAR
x-fee-launchphase0=GOLIVE
EOF
```

### Attributes

| **x-fee-command0** | ADD/CREATE/ADDDOMAIN, TRANSFER/TRANSFERDOMAIN, TRADE/TRADEDOMAIN, RENEW/RENEWDOMAIN, RESTORE/RESTOREDOMAIN |
| --- | --- |

## Suggested FEE extension Block

_x-fee-domain0=YOURDOMAIN.TLD  
x-fee-command0=ADD  
x-fee-period0=1_

### Command

```
command=CheckDomain
domain=YOURDOMAIN.TLD
x-fee-domain0=domain.TLD
x-fee-command0=ADD
x-fee-period0=1
EOF
```
