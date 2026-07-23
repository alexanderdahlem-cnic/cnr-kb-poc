---
title: "Automated Contact Deletion"
sidebar:
  order: 520
---

Starting on 19.09.2018 we will begin to automatically delete unused contacts.

We will be deleting contacts which have not been connected to a product (domain, trademark, application, certificate, registrar) for at least 120 days. We are also offering an option to exclude a contact from automatic deletion. This can be done with the AUTODELETE parameter in AddContact and ModifyContact. However, in regards to GDPR, this can be subject to change. The default value for all existing and newly created contacts is "AUTODELETE = 1" (YES).

If a contact gets automatically deleted, we will send out a contact deletion event. Due to the high amount of unused contacts in our system and the expected load, we will not delete all contacts directly on the 19th of September but rather do these in smaller batches over the following weeks.

After a contact deletion, it will be possible to restore such contact using our API call RestoreContact. After the restore has been processed, this contact is set to "AUTODELETE = 1" (YES) and will begin counting 120 days starting from 0 unless it will be connected to a product.

We also made a few changes to our API that will help to handle this auto deletion process.

## QueryContactList

We added a searchpattern parameter STATUS that can have the value of LINKED|UNLINKED|CLIENTAUTODELETEPROHIBITED along with two new response propertys STATUS and DELETION DATE.

VERY IMPORTANT: Since the status of a contact requires some processing, we are caching the status of a contact once a day. So changing the status from LINKED to UNLINKED or UNLINKED to LINKED can take up to 24hours until it is shown in QueryContactList. For realtime calculation of a single object you can use StatusContact.

| **LINKED** | The contact is linked to a product |
| --- | --- |
| **UNLINKED** | The contact is not linked to a product and will be auto deleted |
| **CLIENTAUTODELETEPROHIBITED** | The contact is set to AUTODELETE=0 and will not be deleted by our system |
| **STATUS** | LINKED|UNLINKED|CLIENTAUTODELETEPROHIBITED |
| **DELETION DATE** | The date when we will start to delete the contact. Contacts with STATUS CLIENTDELETEPROHIBITED or LINKED will have an empty DELETION DATE. |

## StatusContact

We added the response property DELETION DATE for UNLINKED contacts, and the flag for AUTO DELETE is shown here. STATUSCONTACT refreshes and calculates the LINKED|UNLINKED flag in realtime.

## AddContact and ModifyContact

Add optional parameter AUTODELETE=0|1. Default is 1 (YES).

| **AUTODELETE** | Possible values are 0 or 1 |
| --- | --- |

## RestoreContact

New API call that restores a deleted contact(regardless, if explicitly or automatically deleted).

:::command[Command]

```text
command=RestoreContact
contact=(CONTACT)
```

:::
