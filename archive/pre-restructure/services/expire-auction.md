---
title: "Expire Auction"
---

As CentralNic Reseller Reseller you can earn additional revenue from the domains your customers decide not to renew by setting the renewal mode to EXPIREAUCTION.

At the end of the registration period, the expiration date, the domain is put to auction at our partner Afternic. If the domain is sold, you will receive a commission of 50% of the revenue share CentralNic Reseller receives.

## Auction Appendix activation

To use the EXPIREAUCTION option, you need to activate the corresponding appendix which can be found at the top menu "Account Balance" -> "Services & Prices" -> "Other" -> "Other" -> "auction". Activating the auction appendix is free of charge and comes with no obligations on your side.

## Usage

The EXPIREAUCTION option has to be set individually for each domain you wish to submit for auction after it expires. It is currently not possible to select EXPIREAUCTION as the default setting for your account, but we are working to offer this option in the near future.

The EXPIREAUCTION mode is available for the following TLDs: : .BIZ, .CC, .CO, .COM, .INFO, .ME, .MOBI, .NAME, .NET, .ORG, .WS, .US, .TECH, .EMAIL, .AGENCY, .BET, .BLOG, .BUZZ, .CENTER, .CLOUD, .CLUB, .COMPANY, .DESIGN, .DIGITAL, .FIT, .FUN, .GLOBAL, .GROUP, .GURU, .LIFE, .LIVE, .MEDIA, .NETWORK, .NEWS, .ONE, .ONLINE, .ROCKS, .SERVICES, .SHOP, .SITE, .SOLUTIONS, .STORE, .STUDIO, .TECHNOLOGY, .TODAY, .VIP, .WEBSITE, .WORK, .WORLD, .XYZ

Please note that domains EXPIREAUCTION renewal mode are locked on day 30 after the expiration date to allow the auction process to take place. At this point, it is no longer possible for the Reseller to renew the domain.

If a domain with the EXPIREAUCTION renewal mode fails to sell at auction, it will be unlocked in the Reseller account and deleted according to the regular expiry workflow on day 43 after expiration. Domains that are deleted as part of this process can be Restored through the regular Restore process for the extension they are registered in.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>command     = SetDomainRenewalMode
domain      = (DOMAIN)
renewalmode = EXPIREAUCTION</code></pre></div>

## Life cycle of an auction domain

-   The renewal mode must be set to EXPIREAUCTION before the day 4 after expiration of the domain you wish to submit for auction.
-   On Day 5 after the expiration, the DNS settings of the domain are changed to point to a parking page. The parking page helps us estimate the value of the domain for prospective buyers. At this point, the domain is set to the status X-AUCTION = 1.
-   On day 21 after expiration the domain name will be set to X-AUCTION = 2 and submitted to Afternic for auction. Afternic will run a number of checks to verify that the domain name qualifies for auction (for instance, domains that include a trademark are excluded from auctions).
-   On day 26 after the expiration date, the auction for the domain will start on the Afternic auction website.
-   Until day 30 after expiration, the domain name can still be renewed by the original owner by submitting an explicit RenewDomain command.This removes the domain from the auction queue and restores it in the Reseller’s account with the original whois and nameservers data.
-   On day 30 after expiration the domain will be locked and it is no longer possible for the original Registrant to renew, modify, delete or transfer it. The domain is now set to X-AUCTION = 3.
-   The regular auction runs until day 36 after the expiration date. If it doesn’t sell then, Afternic will attempt to sell it through so-called “Close out” auctions.
-   If the domain is sold, it will be transferred to Afternic between day 41-43 and assigned to the auction’s winner.
-   If the domain does not sell, it is deleted at the Registry like any other expired name on day 43 after the expiration date. For these domains, it is possible for the original Registrant to restore the domain following the regular restore procedure.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>Example domain (current date): auction.com on 2013-05-15
Registration date: 2012-04-29
Expiration date: 2014-04-29
Paid until: 2013-04-29
Auction date: 2013-06-03
Deletion date (43 days after expiration date): 2013-06-11
Registration Period: 2012-04-29 – 2013-04-29
Auto Renew Period: 2013-04-29 – 2013-06-11</code></pre></div>


