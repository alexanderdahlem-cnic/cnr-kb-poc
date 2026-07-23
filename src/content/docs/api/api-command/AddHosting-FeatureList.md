---
title: "AddHosting - FeatureList"
description: "CentralNic Reseller API Command Reference  ➤ Hosting - cPanel ➤ AddHosting - FeatureList ➥ Learn more about CentralNic Reseller API Commands"
---

This command is used to create a new cPanel user account with a specific "TYPE". There is a separate API command page for each specific "TYPE". Please kindly note the "TYPE" parameter value here. Different parameters are needed for different "TYPE".

## Possible Gateways

The command _AddHosting - FeatureList_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND                     = AddHosting
TYPE                         = Featurelist
CLASS                     = cpanel
FEATURELIST                = (TEXT)
FEATUREADDONDOMAINS         = 1|0
FEATUREANALOG                 = 1|0
FEATUREAUTORESPONDERS         = 1|0
FEATUREAUTOSSL                = 1|0
FEATUREAWSTATS                 = 1|0
FEATUREBACKUP                 = 1|0
FEATUREBANDWIDTH             = 1|0
FEATUREBLOCKERS             = 1|0
FEATURECALDAVCARDDAV         = 1|0
FEATURECGI                 = 1|0
FEATURECHANGEMX             = 1|0
FEATURECLAMAVCONNECTORSCAN     = 1|0
FEATURECRON                = 1|0
FEATURECSVIMPORT             = 1|0
FEATUREDEFAULTADDRESS         = 1|0
FEATUREDIRSELECTOR             = 1|0
FEATUREDISKUSAGEVIEWER         = 1|0
FEATUREEMAILDISKUSAGE         = 1|0
FEATUREEMAILARCHIVE             = 1|0
FEATUREEMAILAUTH             = 1|0
FEATUREEMAILDOMAINFWD        = 1|0
FEATUREEMAILTRACE             = 1|0
FEATUREENDUSERLVE             = 1|0
FEATUREERRLOG                 = 1|0
FEATUREERRPAGES             = 1|0
FEATUREFILEMANAGER             = 1|0
FEATUREFORWARDERS             = 1|0
FEATUREFTPACCTS             = 1|0
FEATUREHANDLERS             = 1|0
FEATUREHOTLINK                 = 1|0
FEATUREINDEXMANAGER             = 1|0
FEATUREJETBACKUPDNSBACKUPS     = 1|0
FEATUREJETBACKUPDBBACKUPS     = 1|0
FEATUREJETBACKUPFULLBACKUPS     = 1|0
FEATUREJETBACKUPFILESBACKUPS     = 1|0
FEATUREJETBACKUPSETTINGS         = 1|0
FEATUREJETBACKUPSNAPSHOTS     = 1|0
FEATUREJETBACKUPCRONBACKUPS     = 1|0
FEATUREJETBACKUPGDPR         = 1|0
FEATUREJETBACKUPQUEUE         = 1|0
FEATUREJETBACKUPEMAILBACKUPS     = 1|0
FEATUREJETBACKUPSINGLE         = 1|0
FEATURELASTVISITS             = 1|0
FEATURELISTS                 = 1|0
FEATURELVEPHPSEL             = 1|0
FEATUREMIME                = 1|0
FEATUREMODULESPERL             = 1|0
FEATUREMODULESPHPPEAR         = 1|0
FEATUREMYSQL                 = 1|0
FEATURENETTOOLS             = 1|0
FEATUREOPTIMIZEWS             = 1|0
FEATUREPARKEDDOMAINS         = 1|0
FEATUREPASSWORD             = 1|0
FEATUREPGP                 = 1|0
FEATUREPHPCONFIG             = 1|0
FEATUREPHPMYADMIN             = 1|0
FEATUREPOPACCTS             = 1|0
FEATURERAWLOG                 = 1|0
FEATUREREDIRECTS             = 1|0
FEATURERVSITEBUILDER             = 1|0
FEATURESETLANG                 = 1|0
FEATURESITEPUBLISHER             = 1|0
FEATURESOFTACULOUS             = 1|0
FEATURESPAMASSASSIN             = 1|0
FEATURESPAMBOX                 = 1|0
FEATURESSLINSTALL             = 1|0
FEATURESTATSELECT             = 1|0
FEATURESTYLE                 = 1|0
FEATURESUBDOMAINS             = 1|0
FEATURESUBDOMAINSTATS         = 1|0
FEATURETHEMESWITCH             = 1|0
FEATURETLSWIZARD             = 1|0
FEATURETRACEADDY             = 1|0
FEATURETWOFACTORAUTH         = 1|0
FEATUREUPDATECONTACT         = 1|0
FEATUREUPDATENOTIFICATIONPREFS     = 1|0
FEATUREVIDEOTUT             = 1|0
FEATUREWEBALIZER             = 1|0
FEATUREWEBDISK                 = 1|0
FEATUREWEBMAIL                 = 1|0
FEATUREWEBPROTECT             = 1|0
FEATUREFILERESTORATION         = 1|0
FEATURERESOURCEPLUGIN        = 1|0
FEATURESSLMANAGER             = 1|0
FEATUREWORDPRESSTOOLKIT        = 1|0
FEATUREWORDPRESSTOOLKITDELUXE = 1|0</code></pre></div>

### Attributes

| **FEATURELIST** | The name of the feature list associated with the package. |
| --- | --- |
| **FEATUREADDONDOMAINS** | (DEFAULT: 0) Addon domains allow you to control multiple domains from a single account. An addon domain links a new domain name to a directory in your account, and then stores its files in that directory. |
| **FEATUREANALOG** | (DEFAULT: 0) The Analog Stats interface allows you to access data from the Analog traffic statistics software. Analog compiles traffic statistics for your domain, and organizes the data by month so that it is easy for you to manage and interpret. The software also presents the data for each month in graphs to show additional categories. |
| **FEATUREAUTORESPONDERS** | (DEFAULT: 0) This feature allows you to configure automatic email response messages. This is useful, for example, when the recipient is unavailable. |
| **FEATUREAUTOSSL** | (DEFAULT: 0) The AutoSSL feature provides free SSL certificates for your users domains powered by Comodo |
| **FEATUREAWSTATS** | (DEFAULT: 0) The Awstats interface displays traffic statistics from the Advanced Web Statistics (AWStats) software, which compiles information about how users access your website. |
| **FEATUREBACKUP** | (DEFAULT: 0) The Backup interface allows you to download and store your files, databases, forwarders and filters in a backup file. |
| **FEATUREBANDWIDTH** | (DEFAULT: 0) The Bandwidth interface displays bandwidth usage information in several sets of graphs. Each graph contains information about bandwidth usage over a specific period of time. |
| **FEATUREBLOCKERS** | (DEFAULT: 0) Filter the email for each email account in your domain. |
| **FEATURECALDAVCARDDAV** | (DEFAULT: 0) Calendars and Contacts |
| **FEATURECGI** | (DEFAULT: 0) Enable cgi module |
| **FEATURECHANGEMX** | (DEFAULT: 0) Email routing |
| **FEATURECLAMAVCONNECTORSCAN** | (DEFAULT: 0) The ClamAV Virus Scanner interface scans your cPanel account's services for malicious software. If the ClamAV Virus Scanner identifies a potential security threat, the system prompts you to perform the appropriate action. |
| **FEATURECRON** | (DEFAULT: 0) Cron jobs are scheduled tasks that the system runs at predefined times or intervals. |
| **FEATURECSVIMPORT** | (DEFAULT: 0) This interface allows you to use two types of files to create multiple email addresses or forwarders for your account simultaneously. |
| **FEATUREDEFAULTADDRESS** | (DEFAULT: 0) This interface allows you to set up a default address (catch-all address) that receives any mail for an invalid email address for the domain. |
| **FEATUREDIRSELECTOR** | (DEFAULT: 0) Directory Selection Popup. |
| **FEATUREDISKUSAGEVIEWER** | (DEFAULT: 0) This interface displays information about how you use your account's disk space, and all of your home directory\\'s subdirectories. |
| **FEATUREEMAILDISKUSAGE** | (DEFAULT: 0) This interface allows you to view all of your mailboxes and remove old or large messages. |
| **FEATUREEMAILARCHIVE** | (DEFAULT: 0) This interface allows you to save incoming, outgoing, and mailing list messages for a specified amount of time. The system stores the messages in the mail directory in the user's home directory. |
| **FEATUREEMAILAUTH** | (DEFAULT: 0) Use this interface to identify problems with your mail-related DNS records for one or more of your domains. The system uses these records to verify that other servers can trust it as a sender. |
| **FEATUREEMAILDOMAINFWD** | (DEFAULT: 0) This interface allows you to configure an email address to forward copies of incoming emails to another address. |
| **FEATUREEMAILTRACE** | (DEFAULT: 0) This interface displays reports about email message delivery attempts from your account. You can also use this feature to trace a message's delivery route, which can help you to identify message delivery issues. |
| **FEATUREENDUSERLVE** | (DEFAULT: 0) LVE end user usage statistics |
| **FEATUREERRLOG** | (DEFAULT: 0) The interface displays up to 300 of the most recent entries in Apache's error logs, in reverse chronological order. |
| **FEATUREERRPAGES** | (DEFAULT: 0) Error pages inform visitors about problems when they attempt to access your site. Each problem has its own status code (for example, 404) and error page. |
| **FEATUREFILEMANAGER** | (DEFAULT: 0) cPanel organizes all the files on your account into folders. Use the File Manager interface to manage and edit your files. |
| **FEATUREFORWARDERS** | (DEFAULT: 0) This interface allows you to configure an email address to forward copies of incoming emails to another address. This is useful if, for example, you want to use one email address to check emails addressed to multiple accounts. |
| **FEATUREFTPACCTS** | (DEFAULT: 0) You can use this interface to create and manage your website's File Transfer Protocol (FTP) accounts. FTP allows you to manage your website's files. |
| **FEATUREHANDLERS** | (DEFAULT: 0) Apache handlers control how your site\\’s Apache web server software manages certain file types and file extensions. Apache can handle CGI scripts and server-parsed files. The file extensions for these files include .cgi, .pl, .plx, .ppl, .perl, and .shtml. You can configure Apache to use an existing handler to handle a new file type. To do this, manually add the handler and extension in this interface. |
| **FEATUREHOTLINK** | (DEFAULT: 0) A hotlink occurs when someone embeds content from your site in another site and uses your bandwidth to serve the files. You can use this interface to prevent this issue. |
| **FEATUREINDEXMANAGER** | (DEFAULT: 0) Index Manager to define how your web site handles directory listings. |
| **FEATUREJETBACKUPDNSBACKUPS** | (DEFAULT: 0) DNS Backups: On this page, you can view a list of DNS backups. |
| **FEATUREJETBACKUPDBBACKUPS** | (DEFAULT: 0) Database Backups: On this page, you can view a list of database backups. |
| **FEATUREJETBACKUPFULLBACKUPS** | (DEFAULT: 0) Full Account Backups: On this page, you can view a list of full backup account. |
| **FEATUREJETBACKUPFILESBACKUPS** | (DEFAULT: 0) File Backups: On this page, you can view backups and access the backup file manager. |
| **FEATUREJETBACKUPSETTINGS** | (DEFAULT: 0) On this page, you can enter your email and JetBackup will send a notification when the action you have selected is completed. |
| **FEATUREJETBACKUPSNAPSHOTS** | (DEFAULT: 0) On this page, you can create a snapshot for the account and view all available snapshots for the account. |
| **FEATUREJETBACKUPCRONBACKUPS** | (DEFAULT: 0) Cron Job Backups: On this page, you can view a list of cron job backups. |
| **FEATUREJETBACKUPGDPR** | (DEFAULT: 0) At the first time you enter GDPR setting (when your provider enabled GDPR), You will have to approve the following: User Agreement, Privacy Policy and Backup Destination Information. |
| **FEATUREJETBACKUPQUEUE** | (DEFAULT: 0) On this page you can view the items in the queue. |
| **FEATUREJETBACKUPEMAILBACKUPS** | (DEFAULT: 0) Email Backups: On this page, you can view a list of email backups. |
| **FEATUREJETBACKUPSINGLE** | (DEFAULT: 0) Backup file manager: On this page, you can download and restore specific files. |
| **FEATURELASTVISITS** | (DEFAULT: 0) This interface displays detailed information about the 1,000 most recent visits to your website. This information helps you to learn about your audience and monitor frequent visitors so that you can adjust your website content to fit their needs. It also helps you locate and fix errors, such as missing pages or broken links. |
| **FEATURELISTS** | (DEFAULT: 0) Mailing lists allow you to use a single address to send mail to multiple email addresses. |
| **FEATURELVEPHPSEL** | (DEFAULT: 0) CloudLinux PHP Selector |
| **FEATUREMIME** | (DEFAULT: 0) MIME types relay information to the browser about how to handle file extensions. MIME types can allow visitors browsers to handle new technologies as they become available. To add new MIME types to your web server, define the name, directory, and file extension that correspond to the MIME type. |
| **FEATUREMODULESPERL** | (DEFAULT: 0) Perl modules are software components in the Perl language. This interface allows you to search for and install Perl modules from the CPAN repository to your website. |
| **FEATUREMODULESPHPPEAR** | (DEFAULT: 0) PHP PEAR packages are software components that are written in the PHP language. The PHP PEAR Packages interface allows you to search for and add PEAR packages to your website, or view all of your website's available PHP packages. |
| **FEATUREMYSQL** | (DEFAULT: 0) Enables MySQL |
| **FEATURENETTOOLS** | (DEFAULT: 0) To help diagnose common issues |
| **FEATUREOPTIMIZEWS** | (DEFAULT: 0) Enable compression for website |
| **FEATUREPARKEDDOMAINS** | (DEFAULT: 0) Enable park domains |
| **FEATUREPASSWORD** | (DEFAULT: 0) Allows you to update your account's password |
| **FEATUREPGP** | (DEFAULT: 0) Enables PGP and GPG encryption |
| **FEATUREPHPCONFIG** | (DEFAULT: 0) See PHP Configuration |
| **FEATUREPHPMYADMIN** | (DEFAULT: 0) Enables phpMyAdmin |
| **FEATUREPOPACCTS** | (DEFAULT: 0) Enable Email accounts |
| **FEATURERAWLOG** | (DEFAULT: 0) Raw access logs are text files that contain information about your website's visitors and the content on your website that they have accessed. This feature allows you to download a zipped version of your access log. |
| **FEATUREREDIRECTS** | (DEFAULT: 0) The Redirects interface allows you to send all of the visitors of a domain or particular page to a different URL. |
| **FEATURERVSITEBUILDER** | (DEFAULT: 0) Enable RV website builder |
| **FEATURESETLANG** | (DEFAULT: 0) To change your cPanel interface\\'s language |
| **FEATURESITEPUBLISHER** | (DEFAULT: 0) This interface enables you to quickly create a simple website, even if you have never created a website before. When you use this interface, you will select an appropriate template for your website, and then enter the website content that the template requests. |
| **FEATURESOFTACULOUS** | (DEFAULT: 0) Softaculous Apps Installer |
| **FEATURESPAMASSASSIN** | (DEFAULT: 0) This interface allows you to configure Apache SpamAssassin for your account. Apache SpamAssassin is an email utility that examines incoming email and tests for spam characteristics. It uses Bayesian spam filtering and network tests to screen incoming email. This results in an overall score that Apache SpamAssassin uses to determine whether it should discard a message. |
| **FEATURESPAMBOX** | (DEFAULT: 0) Enable Email Spambox |
| **FEATURESSLINSTALL** | (DEFAULT: 0) Enables SSL certificate installation. |
| **FEATURESTATSELECT** | (DEFAULT: 0) Statistics selector |
| **FEATURESTYLE** | (DEFAULT: 0) Use this interface to choose a style in order to customize the cPanel interface\\'s appearance. |
| **FEATURESUBDOMAINS** | (DEFAULT: 0) This interface allows you to create and manage subdomains for your cPanel account. A subdomain is a subsection of your website that sometimes exists as a subdirectory of your public\_html (document root) directory or your account\\'s home directory. Subdomains use a prefix in conjunction with the domain name. |
| **FEATURESUBDOMAINSTATS** | (DEFAULT: 0) Enables statistics for subdomains |
| **FEATURETHEMESWITCH** | (DEFAULT: 0) Theme menu in the General Information section of cPanel\\'s Home interface. |
| **FEATURETLSWIZARD** | (DEFAULT: 0) The SSL/TLS Wizard interface allows you to easily purchase and install SSL certificates for domains on your account. |
| **FEATURETRACEADDY** | (DEFAULT: 0) This interface contains tools to help you retrieve network information. |
| **FEATURETWOFACTORAUTH** | (DEFAULT: 0) Two-factor authentication (2FA) is an improved security measure that requires two forms of identification: your password and a generated security code. With 2FA enabled, an application on your smartphone supplies a code that you must enter with your password to log in. Without your smartphone, you cannot log in. |
| **FEATUREUPDATECONTACT** | (DEFAULT: 0) Use this interface to store contact information for your cPanel account, and to set your contact preferences. |
| **FEATUREUPDATENOTIFICATIONPREFS** | (DEFAULT: 0) Enables notification preference options in the Contact Information interface |
| **FEATUREVIDEOTUT** | (DEFAULT: 0) Video tutorial |
| **FEATUREWEBALIZER** | (DEFAULT: 0) The Webalizer interface displays traffic statistics from the Webalizer statistics program. |
| **FEATUREWEBDISK** | (DEFAULT: 0) Use the Web Disk interface to manage your Web Disk accounts. |
| **FEATUREWEBMAIL** | (DEFAULT: 0) Use this interface to add, manage, and delete email accounts. |
| **FEATUREWEBPROTECT** | (DEFAULT: 0) WebProtect application. |
| **FEATUREFILERESTORATION** | (DEFAULT: 0) The File and Directory Restoration interface allows you to restore items from local backup sources. |
| **FEATURERESOURCEPLUGIN** | (DEFAULT: 0) Activate LVE resource usage plugin. |
| **FEATURESSLMANAGER** | (DEFAULT: 0) Enables SSL Manager. |
| **FEATUREWORDPRESSTOOLKIT** | (DEFAULT: 0) WordPress Toolkit is a feature-rich management interface that allows anyone to install, configure, and manage WordPress websites. |
| **FEATUREWORDPRESSTOOLKITDELUXE** | (DEFAULT: 0) WordPress Toolkit Deluxe, with tools such as Cloning and Smart Updates, is now included as part of cPanel. |
|  |  |
