---
title: "Frequently Asked Questions"
sidebar:
  order: 2070
  label: "FAQ"
---

What is GDPR?

GDPR (General Data Protection Regulation) is the new European Data Privacy act. The GDPR is designed to improve the protection of the private information of all natural persons residing within the European union. One of it’s key components is that personal data can only be collected and/or processed when there is a valid reason to do so in accordance with Art 6 (1) GDPR ([http://eur-lex.europa.eu/eli/reg/2016/679/oj](http://eur-lex.europa.eu/eli/reg/2016/679/oj)) to do so and that the principle of data minimization should always be considered. These include data processing based on consent, based on a legal requirement, in order to perform contractual obligations towards the data subject, or based on legitimate interests that override the legal interests or fundamental rights of the data subject.

For data processing based on consent of the data subject, the consent must be given freely and actively, with informed consent and the data subject must have the ability to revoke his or her consent to the processing of their personal data at any given time. (Art 7 (3) GDPR)

Why don't you disclose contact data in Whois for non-EU contacts?

Because we're an European company and data processor within the context of GDPR.

Do you require acknowledgement of the Data Processing Agreement?

Since we are a data processor within the context of GDPR, we need to make sure our client base has acknowledged our Data Processing Agreement. This is especially in the interest of you as our client as well, since you need to comply to GDPR as well.

The technical details for this acknowledgement will be published soon.

Where can I find information on how single TLDs and Services are complying with GDPR?

This information will be available in the individual appendices for TLDs and Services.

How to find out which TLD requires stating of contact handles for incoming Transfers?

We're already working on gathering this information for every single TLD and will update the respective TLD articles in our Knowledgebase accordingly.

Why don't you support stating contact handles upon transfer initiation for all TLDs?

There are several reasons. In general this would require combining two API different commands, here: TransferDomain and ModifyDomain. One of these two different real time actions might fail and the combined action would only partially succeed. For example a ModifyDomain could trigger a trade for some TLDs or might fail for other reasons. A whole new process would be necessary to handle such cases properly including adding and adjusting API responses of our system. We don't think our resellers would appreciate a "completed partially successful" response to a command. Via EPP this would be even more critical.

Why don't you publish the contact URL in the email field of the Whois output?

If we would publish something else than an email address in the email field of the Whois output, this might lead to issues when parsing Whois data. Thus we decided to add an additional line in the Whois output.
