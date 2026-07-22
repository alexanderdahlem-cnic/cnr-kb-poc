---
title: "E-mail signing"
---

As part of the CentralNic Reseller service, as a Reseller, you are able to customise the sending e-mail address created by the CentralNic service related to core policies such as Contact Verification, ERRP, WDRP, FOA, etc. In February 2024, Google introduced their policies for what they called "[New Gmail protections for a safer, less spammy inbox](https://blog.google/products/gmail/gmail-security-authentication-spam-protection/)". As a result, any Reseller using a customised sending e-mail address on the CentralNic Reseller system must implement some additional security settings in the domain name in the customised e-mail address. Failure to do so may result in e-mails being sent to their customers not being delivered.

### E-mail Audit

You can get an audit of your domain name measures against e-mail spoofing, identity theft and for optimal deliverability of your e-mails via this service (part of the CentralNic group): [Email Security Audit - by NicManager](https://www.domainsecurity.info/?pk_campaign=CNR&pk_kwd=DKIM&pk_source=reseller_kb)

## DKIM (DomainKeys Identified Mail)

DKIM is a security mechanism that helps e-mail receiving services detect if a message has been modified or isn't being sent by the domain name owner. Without DKIM, messages sent are more likely to be marked as spam by receiving mail servers.

The sending service must "sign" each outgoing message and this signature must match a record held in the sending e-mail domain name's zone file. If you are using customised e-mail addresses for the sending of e-mails by our service, you should setup DKIM.

The CentralNic e-mail sending servers will DKIM sign all outgoing mails should there be a corresponding record in the sending domain name zone file. If, for example, the sending e-mail address is _emails@example.com_, then to enable DKIM on the following two records need to be added to the _example.com_ DNS zone:

**DNS CNAME Records**

```

ti-a-oveesuingaiye6aoth9i._domainkey IN CNAME ti-a-oveesuingaiye6aoth9i.mailrelay.rrpproxy.net.
ti-b-oveesuingaiye6aoth9i._domainkey IN CNAME ti-b-oveesuingaiye6aoth9i.mailrelay.rrpproxy.net.
            			
```

## SPF (Sender Policy Framework)

SPF helps prevent messages from being marked as spam by receiving servers. SPF specifies the mail servers that are allowed to send email for a domain.

If you are using customised e-mail addresses for the sending of e-mails by our service, you must add the CentralNic e-mail sending server to you existing SPF record (or create an SPF record with it if one does not exist).

If you do not have an SPF record on the sending e-mail domain name, then you will need to add the following TXT record to the DNS zone:

**DNS TXT Records**

```
@   IN TXT     "v=spf1 include:_spf.mailrelay.rrpproxy.net ~all"
```

If you already have an SPF record, you will need to add the following to your SPF record:

**Additional SPF record**

```
include:_spf.mailrelay.rrpproxy.net ~all
```

## DMARC (Domain-based Message Authentication, Reporting & Conformance)

DMARC tells receiving servers what to do with messages that don’t pass SPF or DKIM. DMARC records have many options and significantly affect how an e-mail is delivered when they are enabled.

If you are using customised e-mail addresses for the sending of e-mails by our service, and do not have a DMARC record setup on the sending e-mail address domain name, then, as a minumum, the following TXT record should be added to the zone file:

**DNS TXT Record**

```
_dmarc    IN TXT     "v=DMARC1; p=none;"
```

This instructs the receiving server to take no action on the message, should it fail DKIM/SPF and deliver it to the intended recipient. It will log messages in a daily report (if a rua parameter is included, e.g. rua=mailto:dmarc@example.net;). It is recommended that you review the logs and modify your DMARC record in line with your businesses, and general best practices, to avoid e-mail spoofing and spamming on your domain name.

If you already have a DMARC record enabled, you should discuss with your IT/Security team the best approach for any modifications to your DMARC record.

## E-mail Audit

You can get an audit of your domain name measures against e-mail spoofing, identity theft and for optimal deliverability of your e-mails via this service (part of the CentralNic group): [Email Security Audit - by NicManager](https://www.domainsecurity.info/?pk_campaign=CNR&pk_kwd=DKIM&pk_source=reseller_kb)
