---
title: "CheckDomainTransfer"
description: "CentralNic Reseller API Command Reference  ➤ Transfer ➤ CheckDomainTransfer ➥ Learn more about CentralNic Reseller API Commands"
---

The CheckDomainTransfer command allows you to review the possibility of Transferring a Domain, as well as the details which are necessary to perform a successful transfer on the domain’s TLD conditions (i.e. eMail addresses, current registrar, domain status). The command is available for domain names belonging to the following TLDs:

-   ac, .academy, .accountants, .actor, .adult, .agency, .airforce, .apartments, .army, .associates, .attorney, .auction, .audio, .band, .bargains, .beer, .bet, .bid, .bike, .bingo, .bio, .biz, .black, .blue, .bot, .boutique, .builders, .business, .buzz, .cab, .cafe, .camera, .camp, .capital, .cards, .care, .careers, .casa, .cash, .casino, .catering, .cc, .center, .ceo, .chat, .cheap, .christmas, .church, .city, .claims, .cleaning, .click, .clinic, .clothing, .cloud, .club, .co, .coach, .codes, .coffee, .college, .com, .community, .company, .computer, .condos, .construction, .consulting, .contact, .contractors, .cool, .coupons, .credit, .creditcard, .cruises, .dance, .dating, .deals, .degree, .delivery, .democrat, .dental, .dentist, .design, .dev, .diamonds, .diet, .digital, .direct, .directory, .discount, .doctor, .dog, .domains, .education, .email, .energy, .engineer, .engineering, .enterprises, .equipment, .estate, .events, .exchange, .expert, .exposed, .express, .fail, .family, .fan, .farm, .fashion, .finance, .financial, .fish, .fitness, .flights, .florist, .flowers, .fm, .football, .forsale, .foundation, .fun, .fund, .furniture, .futbol, .fyi, .gallery, .games, .garden, .gift, .gifts, .gives, .glass, .global, .gmbh, .gold, .golf, .graphics, .gratis, .green, .gripe, .group, .guide, .guitars, .guru, .haus, .healthcare, .help, .hiv, .hockey, .holdings, .holiday, .hospital, .host, .hosting, .house, .immo, .immobilien, .industries, .info, .ink, .institute, .insure, .international, .investments, .io, .irish, .jetzt, .jewelry, .jobs, .juegos, .kaufen, .kim, .kitchen, .kiwi, .land, .law, .lawyer, .lease, .legal, .lgbt, .life, .lighting, .limited, .limo, .link, .live, .llc, .loan, .loans, .lol, .ltd, .maison, .management, .market, .marketing, .mba, .media, .memorial, .mobi, .moda, .moi, .money, .mortgage, .movie, .name, .navy, .net, .network, .news, .ninja, .onl, .online, .org, .partners, .parts, .photo, .photography, .photos, .pics, .pictures, .pink, .pizza, .place, .plumbing, .plus, .poker, .porn, .press, .pro, .productions, .properties, .property, .pub, .pw, .qpon, .recipes, .red, .rehab, .reise, .reisen, .rentals, .repair, .report, .republican, .restaurant, .reviews, .rip, .rocks, .ruhr, .run, .sale, .salon, .sarl, .school, .schule, .services, .sex, .sexy, .sh, .shiksha, .shoes, .shopping, .show, .singles, .site, .ski, .soccer, .social, .software, .solar, .solutions, .space, .store, .stream, .studio, .style, .sucks, .supplies, .supply, .support, .surgery, .systems, .tattoo, .tax, .taxi, .team, .tech, .technology, .tennis, .theater, .tienda, .tips, .tires, .today, .tools, .tours, .town, .toys, .trade, .training, .tv, .university, .uno, .vacations, .vegas, .ventures, .vet, .viajes, .video, .villas, .vin, .vip, .vision, .vote, .voyage, .watch, .website, .wedding, .wiki, .wine, .work, .works, .world, .wtf, .xxx, .xyz, .yoga, .zone
-   .au, .com.au, .net.au, .be, .berlin, .ca, .ch, .cl, .cz, .de, .es, .eu, .fi, .fr, .gg, .im, .in, .it, .jp, .me, .mx, .com.mx, .nl, .nz, .net.nz, .co.nz, .org.nz, .qa, .ru, .se, .sg, .com.sg, .us, .vc, .vg, .wien

## Possible Gateways

The command _CheckDomainTransfer_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = CheckDomainTransfer
DOMAIN = YOURDOMAIN.TLD
AUTH = (TEXT)
ACTION = REQUEST|APPROVE|DENY|CANCEL|USERTRANSFER
EMAILLANGUAGE = en_US|de_DE|fr_FR
EMAILSENDER = (TEXT)
EMAILSUBJECT = (TEXT)
EMAILTAC = (TEXT)
EMAILURL = (TEXT)
REQUESTENTITY = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[INFO][0] = (TEXT)
property[JOB_ID][0] = (TEXT)
property[PROMOTIONS][0] = (TEXT)
property[RENEWAL_PERIOD][0] = (TEXT)
property[ROID][0] = (TEXT)
property[TRANSFER_STATUS][0] = (TEXT)
property[TRANSFERSTATUS][0] = (TEXT)
property[X-FEE-AMOUNT][0] = (DECIMAL)
property[X-FEE-APPLICATION][0] = (DECIMAL)
property[X-FEE-CURRENCY][0] = (TEXT)</code></pre></div>

### Attributes

| **AUTH** | Optional |
| --- | --- |
| **ACTION** | Optional |
| **EMAILLANGUAGE** | Optional |
| **EMAILSENDER** | Optional |
| **EMAILSUBJECT** | Optional |
| **EMAILTAC** | Optional |
| **EMAILURL** | Optional |
| **REQUESTENTITY** | Optional |
| **TRANSFERSTATUS** | The current transfer status of the domain |
| **ADMINCONTACTEMAIL** | The email - address of the administrative contact |
| **ADMINCONTACTLANGUAGE** | The language of the administrative contact |
| **ADMINCONTACTNAME** | The name of the administrative contact |
| **AGEINDAYS** | The domain age in days |
| **CREATEDDATE** | The date, when the domain was created |
| **REGISTRAR** | The current registrar of the domain |
| **TRANSFERLOCK** | The status of the transfer lock of the domain |
| **WHOISSERVER** | The whois server to be queried for details of the domain |
