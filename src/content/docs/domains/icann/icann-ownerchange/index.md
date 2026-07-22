---
title: "ICANN Policy for OwnerChange"
description: "ICANN has announced the implementation of amendments to the Inter-Registrar Transfer Policy (IRTP), which is being renamed as the &quot;Transfer Policy.&quot;"
---

ICANN has announced the implementation of amendments to the Inter-Registrar Transfer Policy (IRTP), which is being renamed as the "Transfer Policy." In addition to rules related to inter-registrar transfers, the updated Transfer Policy now sets policy requirements for transfers between registrants, also described as OwnerChanges. It will also impose new conditions for the expiration of the Form of Authorization (FOA) used by registrars in inter-registrar transfers.

The amended Transfer Policy is applicable to all generic top-level domains (gTLDs) and ICANN-accredited registrars. CcTLDs are not affected.

These new requirements will take effect and will be enforced by ICANN beginning on December 1, 2016.

-   [Redline version of the policy showing changes](https://www.icann.org/en/system/files/files/transfer-policy-redline-24sep15-en.pdf)
-   [Updated version of the Transfer Policy](https://www.icann.org/resources/pages/transfer-policy-2016-06-01-en)
-   [Official ICANN announcement](https://www.icann.org/news/announcement-2-2015-09-24-en)

## Definition of OwnerChange

Since the ICANN Transfer Policy also carries the name Inter-Registrar Transfer Policy (IRTP) and covers transfers from one registrar to another as well as transfers from one registrant to another, we decided to label the latter as OwnerChange, making it easier to comprehend. Both descriptions, OwnerChange and IRTP can occur, but we try to use only OwnerChange.

Within this context, an OwnerChange is a change to relevant fields of an OwnerContact handle.

The following fields are relevant for an OwnerChange:

-   firstname
-   middlename
-   lastname
-   organization
-   email

All other fields of an OwnerContact handle can be updated as usual using the ModifyDomain command, for example the address or telephone number. It will not trigger a confirmation mail.

## Form Of Authorisation (FOA) Mode or Designated Agent Mode

For CentralNic Resellers the policy changes for gTLD OwnerChanges are implemented in two different variants. The default implementation will use a FOA (Form Of Authorisation) confirmation process, where both the old and the new domain owner receive a separate mail and need to confirm the OwnerChange. We're also referring to this method as the **FOA Mode** and it is set as default for all CentralNic Resellers.

Aside from the default FOA Mode CentralNic Resellers will also be able to opt for the optional **Designated Agent Mode**. With this mode, changes to the relevant registrant whois data elements Name, Organisation and E-Mail will be processed instantaneously. In effect, no technical changes apply at reseller and registrant level and adopting the new policy is very easy for CentralNic Resellers. However, it is required that the [Registration Agreement of Key-Systems](https://centralnicreseller.com/en/registration-agreement) is passed on to registrants, in order to opt for the **Designated Agent Mode**.

## Information on FOA Mode

The default FOA Mode introduces a FOA (Form Of Authorisation) confirmation process, where both the old and the new domain owner need to confirm the owner change. This process can be compared with the FOA confirmation process that applies for gTLD transfers.

In general, the new policy requirements include the following:

1.  "Change of Registrant" and "OwnerChange" are now defined terms, meaning a material change to the registrant's name, organization or email address, or the administrative contact's email address if there is no registrant email address.
2.  Registrars must use a secure mechanism to confirm that both the prior registrant and new registrant have consented to any Change of Registrant.
3.  Registrars must notify the prior registrant and new registrant of a Change of Registrant and provide the notice described in the policy which includes, for example, an explanation of the request, information on how to approve of cancel the change of registrant, etc.
4.  Registrars must process the Change of Registrant within one (1) day of receiving the confirmation of Change of Registrant from the prior registrant and the new registrant.
5.  Registrars must impose a 60-day inter-registrar transfer lock following a Change of Registrant but registrars may allow registered name holders to opt out of the lock prior to any Change of Registrant request.
6.  The Form of Authorization used by gaining registrars, labeled "Initial Authorization for Registrar Transfer" shall expire under the following circumstances:
    -   A period of 60 days has passed since the FOA was sent by the gaining registrar (unless the registrar allows automatic renewal of FOAs).
    -   The domain name expires before the transfer is completed.
    -   A Change of Registrant is completed.
    -   The inter-registrar transfer is completed.

## Information on Designated Agent Mode

The new ICANN transfer policy authorises Designated Agents of the old and new registrants to confirm and perform requested changes and to receive the notification regarding the transfer lock resulting from the modification. We have therefore included paragraph 1.9 in our Registration Agreement that explicitly designates Key-Systems and our Resellers as Designated Agents of the old registrant and (in accordance with section 1.7) the new registrant, thereby authorising us to immediately confirm requested owner changes.

Reseller must include the [Registration Agreement of Key-Systems](https://centralnicreseller.com/en/registration-agreement) in its own terms of service or business processes to ensure that both old and new registrants have explicitly designated Reseller and Key-Systems as Designated Agents in accordance with ICANN policy. At the time they accept an update request, Resellers must also inform their customers that an update of the ownership data will result in a 60-day transfer lock (II.C.1.1.3 of the ICANN transfer policy).

If this optional Designated Agent process is activated by Reseller in the CentralNic control panel, Key-Systems and Reseller will act as explicitly authorised Designated Agents of both the old and new registrant. This process replaces the FOA process and thus the requirement to obtain the confirmation from both the old and new registrant prior to executing the update.

Updates to the registrant whois information authorised by Key-Systems or Reseller as Designated Agents will always result in a lock of the affected domain names against transfers for 60 days, as only the old registered name holder at the time of the request can opt out of this lock. To allow the old registrant to opt out, the FOA confirmation process must be used, which can be activated for individual modification requests by sending the appropriate API parameter when initiating the modify request.

## Integrate the New Policy

The first and most important step is to make sure you include the [Registration Agreement of Key-Systems](https://centralnicreseller.com/en/registration-agreement) in your terms and conditions or business processes. This document needs to be available to all your new and existing customers whenever they submit a domain-related request.

-   Make yourself familiar with the new workflows, especially if you're using our API and/or the FOA Mode to handle OwnerChanges as of December 1st 2016.
-   Make sure the new processes will be integrated in your business logic properly. Please let us know if you need information on any issue that might arise.
-   Choose an option, how to handle requests for OwnerChanges: Using the FOA Mode (default), or using the Designated Agent Mode.

As of December 1st 2016 the new ICANN OwnerChange policy will take effect and will be enforced by ICANN.

**Testing in OT&E**

The new FOA Mode is available for testing in our OT&E. Please be aware, that when testing the OwnerChanges in our OT&E, OwnerChange FOA emails will be sent to the reseller email address stated for your OT&E account instead of the registrant email address.

## Contact Verification

An OwnerChange approve or reject verifies the contact automatically (Skips Contact Verification Mail).

## Unreachable Email Address/Offline Process

If the email address of the old registrant is invalid or not working any more (i.e., the FOA Mail sent to the losing registrant can't be approved) a special form is required, which can be generated through our [formgenerator](https://formgenerator.net/gtld/generic::irtp).  
A signed copy of this form plus documents proving the signature and contact relation must be supplied to your sponsoring registrar for review. Please fax the documents to +49 (0)6894 93 96 865 or send them by email to [fax@centralnicreseller.com](mailto=fax@centralnicreseller.com).  
This process will update the registrant's current email address and impose the 60-day transfer lock. Due to the circumstances of this procedure, _this transfer lock cannot be removed ahead prematurely!_  
  
Please make sure that all documents are compiled into a single .pdf file, one form per file, with the form showing the barcode as first page.
