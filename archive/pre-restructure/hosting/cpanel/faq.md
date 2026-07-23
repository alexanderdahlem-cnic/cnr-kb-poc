---
title: "FAQ"
---

What are the cPanel, Webmail, calDav and WebFTP URL's?

-   OT&E
-   cPanel login: https://cpanel-01-eu-ote.hostingww.com:2083
-   Webmail login: https://cpanel-01-eu-ote.hostingww.com:2096
-   calDav login: https://cpanel-01-eu-ote.hostingww.com:2080
-   WebFTP login: https://cpanel-01-eu-ote.hostingww.com:2078

How is the basic DNS zone template ?

-   @ SOA ns1.hostingww.com. root.hostingww.com. \[SERIAL\] 28800 7200 -
-   604800 86400
-   @ NS ns1.hostingww.com.
-   @ NS ns2.hostingww.com.
-   @ NS ns3.hostingww.com.
-   @ MX mail.\[DOMAIN\_NAME\]. 5
-   @ A \[SERVER\_IP\]
-   www A \[SERVER\_IP\]
-   mail A \[SERVER\_IP\]
-   cpanel A \[SERVER\_IP\]
-   webmail A \[SERVER\_IP\]
-   ftp A \[SERVER\_IP\]
-   caldav A \[SERVER\_IP\]

How are the Mail Client Manual Settings ?

-   Secure SSL/TLS Settings (Recommended)
-   Username: \_mainaccount@youdomain.com
-   Password: Use your cPanel password.
-   Incoming Server: cpanel-\[NUMBER\]-\[LOCATION\].hostingww.com
-   IMAP Port: 993 POP3 Port: 995
-   Outgoing Server: cpanel-\[NUMBER\]-\[LOCATION\].hostingww.com
-   SMTP Port: 465
-   IMAP, POP3, and SMTP require authentication.

What is the difference between subdomains, addon domains and alias (parked) domains ?

_Addon domains_ are completely different domains that are added to a cPanel account. Their main purpose is to host multiple websites on a single cPanel account, and can also be used for email. Although they are connected to the same cPanel account as the main domain, to anyone who visits the website or sends an email for an addon domain the main/addon domains are completely transparent from and don't look linked to each other in any way. They share the CPU/RAM/Disk Space of your cPanel account. You can create individual subdomains for addon domains just as you can a normal domain.

_Subdomains_ are branches of a domain, for example, testing.yourdomain.com, login.yourdomain.com. They can be used to host web pages that may or may not be connected to your main website. You are also able to set the A record for a subdomain to another server if you wish. They share the CPU/RAM/Disk Space and other resources of your cPanel account.

_Alias domains_ are like Addon domains however they can't be used to make a new website. By default when you go to a domain that's parked it will go to the website of the main cPanel account. However, this can be changed by using the redirects option in cPanel.
