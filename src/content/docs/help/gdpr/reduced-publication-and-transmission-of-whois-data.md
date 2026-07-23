---
title: "Reduced publication and transmission of Whois Data"
sidebar:
  order: 2090
---

By default, we are not publishing your private data in Whois, i.e. we do **NOT** disclose your data. In particular, the data which is coming from our Whois server and being transmitted to registries will be redacted entirely.

Please note, that certain registries may still require the publication of your data despite your settings. In these cases, publication is based on a legitimate reason in accordance with GDPR, which will be included in the privacy policy of the respective registry.

## Reduced Data provision by our Whois server

The contact data provided by our Whois server only includes data of domains managed by us in so called “Thin” Registry gTLDs, like .COM/.NET/.CC/.TV/.JOBS. To comply with GDPR requirements, Key-Systems will not publish any contact data in Whois. All fields will be redacted or replaced.

## Reduced Data transmitted to registries

Contact data transfer to gTLD thick registries (like .INFO, .ORG, .XYZ, etc.) and ccTLD registries (like .DE, .AT, etc.) will be reduced to only a few fields as well unless we can be certain that both data transfers as well as the measures taken by the registry operator are in full compliance with GDPR.

-   To avoid publication of contact data, all fields are set to non-disclose when transferred via EPP to registries where necessary.
-   To our current knowledge, most gTLD and European ccTLD registries are GDRP compliant.

## Redacted or replaced fields in Whois

As mentioned above, all contact fields will be redacted or replaced. Some registries offer to undisclose/disclose certain fields in Whois and support a respective EPP parameter _<contact:disclose flag="0">_.

If a registry is supporting these parameters, we set the respective fields to undisclose as long as the respective registry is not GDPR compliant. If a registry is not supporting these EPP parameters or similar functions, we will **NOT** transmit the respective contact fields but instead transmit a place holder, i.e. "_REDACTED FOR PRIVACY_".

## Replaced Email fields in Whois

Our own whois server will replace all email fields with a generic address of ours: _info@domain-contact.org_ . This email address will also be shown in the Whois output of registries, where possible.

Emails sent to this address will be replied by an automatic responder pointing out the website [http://www.domain-contact.org](http://www.domain-contact.org), which can be used to get in touch with the contact of a domain.

Similar to other contact data fields, GDPR compliant registries will not disclose email fields. For non-compliant registries, if the respective EPP parameter is supported, we will set the email fields to undisclose.

## Whois output and contact data transmission for RAM TLDs

The Whois output and contact data transmission, for TLDs of reseller accreditations in our Registry Account Management, will be provided using the same logic that our own Whois servers are using.
