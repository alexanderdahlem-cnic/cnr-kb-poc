---
title: "Aftermarket Account Management"
description: "Prior to selling domains throuth the RRPproxy Aftermarket system, you need to add your Aftermarket Account(s) inside your RRPproxy account."
sidebar:
  order: 1590
  label: "Account Management"
---

Prior to selling domains throuth the CentralNic Reseller Aftermarket system, you need to add your Aftermarket Account(s) inside your CentralNic Reseller account. You can manage your Aftermarket Accounts by adding, modifying and removing them and check their current status. Each Aftermarket Account entered into the CentralNic Reseller Aftermarket system is identified with an unique ID, an alphanumerical random string of 10 characters. For easier identification a freetext can be applied for each Aftermarket Account.

The “Account Key" for your Aftermarket Account can be obtained at the respective Aftermarket Provider.

**Managing Aftermarket Accounts currently only applies to Sedo**

Log in to your Account at sedo.com and have a look at "My Sedo" -> "My Account" -> "Account Settings” -> “Registrar Listing ID”. When adding a Sedo Aftermarket Account into the CentralNic Reseller Aftermarket System, the owner of the Sedo Account receives an email from Sedo.

:::command[Aftermarket API-Commands]

```text
Aftermarket API-CommandsAddAftermarketAccountAdd an Aftermarket AccountAddAftermarketDomainAdd a Domain listingAftermarketBidGive a new bid in a biddingBuyDomainStart a bid on a domain or directly buy a domain.DeleteAftermarketAccountRemove an Aftermarket AccountDeleteAftermarketDomainRemove a Domain from listingModifyAftermarketAccountModify an Aftermarket AccountModifyAftermarketDomainModify a Domain listingQueryAftermarketAccountListList your Aftermarket AccountsQueryAftermarketBidDetails to a certain bid for a domainQueryAftermarketBidListQuery all initiated aftermarket processes in your CentralNic Reseller account.QueryAftermarketDomainListReturns a list of all Domains in your CentralNic Reseller account that are currently listed for sale through the Aftermarket System. Offers parameters to narrow down the resulting response.QueryAftermarketListSearch domains in the aftermarketReserveDomainReserve a domain in the aftermarketStatusAftermarketAccountStatus of an Aftermarket AccountStatusAftermarketDomainStatus of a Domain listing
```

:::
