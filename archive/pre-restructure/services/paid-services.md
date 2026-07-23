---
title: "Refunded AGP (Add Grace Period) Deletes"
---

Please note that the volume of refundable AGP deletions is limited to a percentage of your registration volume for the respective TLD in the month when the deletions are processed. Please also see the Terms of Service listed at the bottom of this page.

## Automate Domain deletes during the Grace Period

The CentralNic Reseller service "Refunded AGP deletes" enables automatic refunds of deleted domains during the Add Grace Period (AGP).

This service can be enabled via control panel in the registrar settings. Registrations, refunds and remaining deletes can be tracked in real-time at any time via your control panel or API commands.

Refunds will be granted if domain names are deleted during the Add Grace Period (AGP). AGP usually covers 5 days after registration, some ccTLDs offer a different time window.

We follow a fair use policy: associated domain services such as trustee service or whois privacy are not eligible to be refunded, only the domain name registration itself.

## Key Benefits

-   Automatic calculation of the add grace refunds for deleted domains. There is no manual effort needed.
-   Refunding in real time. Maintain a positive cash balance and simplify your accounting.
-   One-time activation via the control panel. Later deactivation and reactivation without additional fee.
-   The "fair use" policy for refunds is applied at the end of the month.
-   Full overview within the control panel of registrations, deletions and remaining AGP deletes within your limit.
-   Query via API how many AGP deletes you already have used.
-   Query supported TLDs to see which TLDs are available for this service.

## How it works - Control Panel Guide

**Go to “Paid Services”:**

To navigate to the service follow these steps:

-   Click the user icon on the top right side.
-   Click _Settings_ to get to Account data.
-   Click the tab _Paid Services_.

![Settings II](https://kb.centralnicreseller.com/imagetypes/859w/image_manager__859w_settings_ii.jpg)

![Paid Services II](https://kb.centralnicreseller.com/imagetypes/859w/image_manager__859w_paid_services_ii.png)

## Activation

You can activate the service via the control panel:

Click the button “_Activate Refunded AGP Deletes_”.

![Button Activate Refunded AGP Deletes II](https://kb.centralnicreseller.com/imagetypes/859w/image_manager__859w_button_activate_refunded_agp_deletes_ii.png)

## Deactivation/Reactivation

After activation of the service you can deactivate it at any time and reactivate it for free.

The initial button changes accordingly to “Deactivate Refunded AGP Deletes” and after deactivation to “Reactivate Refunded AGP Deletes”.

![Button Dectivate Refunded AGP Deletes III](https://kb.centralnicreseller.com/imagetypes/859w/image_manager__859w_button_dectivate_refunded_agp_deletes_iii.png)

![Button Rectivate Refunded AGP Deletes III](https://kb.centralnicreseller.com/imagetypes/859w/image_manager__859w_button_rectivate_refunded_agp_deletes_ii3.png)

After pressing the button you will get a message to confirm that you successfully activated/deactivated/reactivated the Refunded AGP Deletes for your account:

![Confirmation Message III](https://kb.centralnicreseller.com/imagetypes/859w/image_manager__859w_confirmation_message_iii.jpg)

## Show current AGP Refunds

You can see the status of your refunds by clicking the link _Show current APG Refunds_.

![Show current AGP Refunds](https://kb.centralnicreseller.com/imagetypes/859w/image_manager__859w_show_current_agp_refunds.jpg)

The table lists your TLDs, the number of registrations, the number of refunded deletes and the remaining deletes. The latter are indicated in red colour.

Additional information is displayed in a tooltip for TLDs which have a different grace period.

To see the text please hover with your mouse over the blue information icon (“i”).

![Current AGP refunds July 2021](https://kb.centralnicreseller.com/imagetypes/859w/image_manager__859w_current_agp_refunds_july_2021.png)

## Using API Commands

Please enter commands in the “Direct API Console”.

Click _Dashboard_ in the menu bar on the left side to see the console.

![Dashboard III](https://kb.centralnicreseller.com/imagetypes/859w/image_manager__859w_dashboard_iii.jpg)

![Direct API Console III](https://kb.centralnicreseller.com/imagetypes/859w/image_manager__859w_direct_api_console_iii.png)

You can also select the item _Direct API Console_ in the API menu:

![Direct API Console II](https://kb.centralnicreseller.com/imagetypes/859w/image_manager__859w_direct_api_console_ii.jpg)

The following commands are available for querying, monitoring and deleting domains:

STATUSAGPDELETES, QUERYAGPDELETESLIST, DELETEDOMAIN, QUERYSERVICELIST.

You can particularly monitor the AGP values per TLD using the API call STATUSAGPDELETES for a specific TLD/ZONE, or using QUERYAGPDELETESLIST for all TLD/ZONES where AGP is available.

For STATUSAGPDELETES and QUERYAGPDELETESLIST we created a new section called “[Paid Services](../../api/api-commands/api-command-reference/#cat-paidservices)”.

**STATUSAGPDELETES**

Monitor your AGP values per TLD using the API call STATUSAGPDELETES for a specific TLD/ZONE.

The response confirms the successful completion of the command.

It returns the available AGP deletes, current AGP deletes, current domain registrations and total AGP deletes.

STATUSAGPDELETES always requires a ZONE and can only be used if AGP refunds are enabled for the registrar.

Please see our [Knowledge Base](../../api/api-command/statusagpdeletes/) for details of the command.

**QUERYAGPDELETESLIST**

You can also monitor your AGP values using QUERYAGPDELETESLIST for all TLD/ZONES where AGP is available.

The command returns with the parameter “WIDE= 0” all eligible TLD/ZONES, the percentage for the zone and the add grace period in days. Everybody can execute it.

With the parameter “WIDE= 1” the command also provides all AGP statistics: the current domain registrations, current AGP deletes, total AGP deletes, available AGP deletes, the AGP percentage for the zone and the Add Grace Period in days.

For the registrar only AGP refunds are enabled.

Please see our [Knowledge Base](../../api/api-command/queryagpdeleteslist/) for details of the command.

Please also refer to the command STATUSAGPDELETES which uses the same statistics.

**DELETEDOMAIN**

When you call the command “DeleteDomain” the response will confirm the successful completion with days pending for the deletion.

It returns the number of AGP deletes used and remaining.

Please see our [Knowledge Base](../../api/api-command/deletedomain/) for details of the command.

**QUERYSERVICELIST**

In addition to returning annual fee, transfer, trade, restore, currency information, etc., the command returns the service fee that activates the add grace deletion functionality.

Please see our [Knowledge Base](../../api/api-command/queryservicelist/) for details of the command.

## Supported TLDs

The following TLDs are currently supported by the service:

.aaa.pro, .abogado, .aca.pro, .academy, .accountant, .accountants, .acct.pro, .actor, .aero, .agency, .airforce, .allfinanz, .amsterdam, .apartments, .app, .archi, .army, .art, .asia, .associates, .attorney, .auction, .audio, .auto, .autos, .avocat.pro, .baby, .band, .bank, .bar, .bar.pro, .barcelona, .bargains, .bayern, .beauty, .beer, .best, .bet, .bible, .bid, .bike, .bingo, .bio, .biz, .black, .blackfriday, .blog, .blue, .boats, .bond, .boston, .bot, .boutique, .broker, .brussels, .build, .builders, .business, .buzz, .cab, .cafe, .cam, .camera, .camp, .capital, .car, .cards, .care, .careers, .cars, .casa, .cash, .casino, .cat, .catering, .cc, .center, .ceo, .cfd, .charity, .chat, .cheap, .christmas, .church, .city, .claims, .cleaning, .click, .clinic, .clothing, .cloud, .club, .co, .co.in, .coach, .codes, .coffee, .college, .com, .com.co, .com.mx, .community, .company, .compare, .computer, .condos, .construction, .consulting, .contact, .contractors, .cooking, .cool, .coop, .country, .coupons, .courses, .cpa.pro, .credit, .creditcard, .cricket, .cruises, .cymru, .cyou, .dance, .date, .dating, .dealer, .deals, .degree, .delivery, .democrat, .dental, .dentist, .desi, .design, .dev, .diamonds, .diet, .digital, .direct, .directory, .discount, .doctor, .dog, .domains, .download, .dvag, .earth, .eco, .education, .email, .energy, .eng.pro, .engineer, .engineering, .enterprises, .equipment, .estate, .eus, .events, .exchange, .expert, .exposed, .express, .fail, .faith, .family, .fan, .fans, .farm, .fashion, .feedback, .film, .finance, .financial, .firm.in, .fish, .fishing, .fit, .fitness, .flights, .florist, .flowers, .football, .forex, .forsale, .forum, .foundation, .frl, .fun, .fund, .furniture, .futbol, .fyi, .gal, .gallery, .game, .games, .garden, .gay, .gen.in, .gent, .gift, .gifts, .gives, .glass, .global, .gmbh, .gold, .golf, .graphics, .gratis, .green, .gripe, .group, .guide, .guitars, .guru, .hair, .haus, .health, .healthcare, .help, .hiphop, .hiv, .hockey, .holdings, .holiday, .homes, .horse, .hospital, .host, .hosting, .house, .how, .icu, .immo, .immobilien, .in, .inc, .ind.in, .industries, .info, .ink, .institute, .insurance, .insure, .international, .investments, .irish, .ist, .istanbul, .jetzt, .jewelry, .juegos, .jur.pro, .kaufen, .kim, .kitchen, .kr, .krd, .land, .law, .law.pro, .lawyer, .lease, .legal, .lgbt, .life, .lighting, .limited, .limo, .link, .live, .llc, .loan, .loans, .lol, .london, .lotto, .love, .ltd, .ltda, .luxe, .luxury, .madrid, .maison, .makeup, .management, .market, .marketing, .markets, .mba, .me, .med.pro, .media, .melbourne, .memorial, .men, .menu, .miami, .mobi, .moda, .moe, .moi, .mom, .money, .monster, .mortgage, .motorcycles, .movie, .museum, .mx, .name, name\_thirdlevel, nameemail, .navy, .net, .net.co, .net.in, .network, .new, .news, .ninja, .nom.co, .nowruz, .nyc, .observer, .one, .onl, .online, .ooo, .org, .org.in, .org.mx, .organic, .osaka, .page, .paris, .partners, .parts, .party, .pet, .photo, .photography, .photos, .physio, .pics, .pictures, .pink, .pizza, .place, .plumbing, .plus, .poker, .press, .pro, .productions, .promo, .properties, .property, .protection, .pub, .qpon, .quebec, .quest, .racing, .radio, .realty, .recht.pro, .recipes, .red, .rehab, .reise, .reisen, .reit, .rent, .rentals, .repair, .report, .republican, .rest, .restaurant, .review, .reviews, .rich, .rio, .rip, .rocks, .rodeo, .run, .saarland, .sale, .salon, .sarl, .sbs, .school, .schule, .science, .scot, .security, .select, .services, .sexy, .shiksha, .shoes, .shop, .shopping, .show, .singles, .site, .ski, .skin, .soccer, .social, .software, .solar, .solutions, .soy, .spa, .space, .sport, .srl, .storage, .store, .stream, .studio, .study, .style, .sucks, .supplies, .supply, .support, .surf, .surgery, .swiss, .sydney, .systems, .taipei, .tattoo, .tax, .taxi, .team, .tech, .technology, .tel, .tennis, .theater, .theatre, .tickets, .tienda, .tips, .tires, .today, .tools, .tours, .town, .toys, .trade, .trading, .training, .travel, .tube, .tv, .university, .uno, .us, .vacations, .vegas, .ventures, .vet, .viajes, .video, .villas, .vin, .vip, .vision, .vlaanderen, .vodka, .vote, .voting, .voto, .voyage, .wales, .watch, .webcam, .website, .wedding, .wiki, .win, .wine, .work, .works, .world, .wtf, .xn--4gbrim, .xn--5tzm5g, .xn--6frz82g, .xn--80asehdb, .xn--80aswg, .xn--9dbq2a, .xn--cck2b3b, .xn--czrs0t, .xn--fjq720a, .xn--g2xx48c, .xn--jvr189m, .xn--mgbab2bd, .xn--mk1bu44c, .xn--ngbc5azd, .xn--q9jyb4c, .xn--rovu88b, .xn--t60b56a, .xn--tckwe, .xn--unup4y, .xn--vhquv, .xyz, .yachts, .yoga

## Terms of Service

Please note that the volume of refundable AGP deletions is limited to a percentage of your registration volume for the respective TLD in the month when the deletions are processed. We reserve the right to adjust this percentage from time to time. You can review the threshold in your control panel. Any deletions above the threshold will be fully charged.

Note that refunded AGP Deletes only apply to domain names. Additional domain services such as trustee service, whois privacy or similar are not eligible for refunds, only the domain name registration itself.
