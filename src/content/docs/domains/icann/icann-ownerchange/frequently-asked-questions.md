---
title: "FAQ ICANN OwnerChange"
description: "Frequently asked questions about ICANN OwnerChange. ➥ Learn more!"
---

Will another OwnerChange be possible during the 60-day lock phase?

Yes, this is possible.

Is the 60-day lock changing after an OwnerChange during the the 60-day lock phase?

In Designated Agent Mode the lock will be reset to full 60 days(X-TRANSFERLOCK-UNTIL indicates the end of the lock period). In FOA Mode the lock period is not changed and the remaining lock time persists.

Where can I find the Registration Agreement of Key-Systems?

The Registration Agreement of Key-Systems can be found here:

-   [Key-Systems Website](https://www.key-systems.net/en/registration-agreement)

How can I make sure my clients and registrants can agree to the Registration Agreement of Key-Systems?

In general, the [Terms and Conditions](https://centralnicreseller.com/en/terms-conditions) as well as the [Registration Agreement of Key-Systems](https://centralnicreseller.com/en/registration-agreement) and relevant appendices have to be forwarded to your registrants and they need to agree to them. We already introduced a new version of the Registration Agreement of Key-Systems in October which holds paragraph 1.9 including Designated Agent:

_"Both Registrar as well as Customers authorized by registered name holder shall be considered designated agents of registered name holder with regard to the management and registration of a domain name with regard to ICANN, registry or other parties involved in the registration process."_

To make it even a bit more convenient, our FOA mails for regular inter-registrar transfers ask registrants to agree to our Terms and Conditions. Our Terms and Conditions already reference to our Registration Agreement in paragraph 1.7:

_"By initiating an order through Key-Systems and/or by executing electronic actions the customer declares that he has the proper authority to place orders either for himself or as properly authorized representative of his organisation and that he agrees to the terms and conditions, contractual terms and registration agreements in all parts."_

If including our TAC and Registration Agreement in your own TAC is not possible we can advise to integrate them in your business processes and to make these documents and agreements available to the registrant on a case-by-case basis. For example, during checkout. This way you do not need to change your General Conditions and Special Conditions for Domain Names and you can make sure the clients have access to all necessary documents.

What if the email address of the Old Registrant is invalid or not working any more (i.e., the FOA Mail sent to Old Registrant can not be approved)?

If OwnerChange is requested but former email address is unreachable: This requires a special form, which can be generated through our [formgenerator](https://formgenerator.net/gtld/generic::irtp). A signed copy of this form plus document proving signature and contact relation must be supplied to your sponsoring registrar for review. Please fax the documents to +49 (0)6894 93 96 865 or send by email to [fax@centralnicreseller.com](mailto:fax@centralnicreseller.com).

Please make sure that all documents are compiled into a single .pdf file, with the form showing the barcode as first page.

I'm working in Designated Agent Mode but what if I can not grant, that a single Registrant has not assigned me and Key-Systems as Designated Agents?

For such occasions we will provide you with the option to handle individual cases with the FOA Mode through a special parameter([TriggerFoA=1](ownerchange-procedures-in-designated-agent-mode)).

Using FOA Mode, will the 60-day lock always be applied after a successful OwnerChange? (Similar to Designated Agent Mode, where the 60-day lock is always applied after a successful OwnerChange.)

It depends if the New Registrant opts out of the 60-day lock and on your general settings.

The Old Registrant can opt out of the 60-day lock by clicking the respective link in the FOA Mail.

In general, if ICANNTRANSFER-ownerchange-transferlock-override is set to 0, New Registrants can never opt out of the 60-day transfer lock, the option is not available in FOA Mails.

Which email address is used by default for FOA Mails?

The default sending email-address is noreply@emailverification.info. It will be shown in your account settings in the ICANN Transfer section and you will be able to replace it with a custom address.

Which TAC URL is used by default for FOA Mails?

The default TAC URL is [https://www.key-systems.net/en/terms-und-conditions](https://www.key-systems.net/en/terms-und-conditions). It will be shown in your account settings in the ICANN Transfer section and you will be able to replace it with a custom URL.

Which TLDs are affected?

All gTLDs are affected by the ICANN OwnerChange policy.
