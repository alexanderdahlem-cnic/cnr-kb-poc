---
title: "Frequently asked questions"
---

When will the domains be suspended if I use the same unverified contact handle for domain registrations on different days?

Each domain registration has it's own X-TIME-TO-SUSPENSION date (created date/transfer date (in case of transfer in) plus 15 days) independent of the used contact handle.

What does it mean CentralNic Reseller contact is invalid (validated = 0)?

The following attributes must be set: [Definitions](../definitions/)

Can I register a domain with an invalid contact?

No, the CentralNic Reseller will forbid the AddContact during the AddDomain process.

_\[RESPONSE\] code = ..._

_description = Could not create registryContact..._

How can I generate an email verification request without registering a domain?

This can be useful either if you want to have a verified contact prior to a domain registration to avoid the domain suspension after 15 days, if, for any reason, the link was not clicked or if you want to update a gTLD with a new contact and not risk the domain suspension due to the aforementioned reason.

### Command

```
command   = ModifyContact
contact   = (CONTACT)
checkonly = 1
preverify = 1
```

### Response

```
code                                = 200
description                         = Command completed successfully; Verification requested
property[validated][0]              = 1
property[verification requested][0] = 1
```

### Attributes

| **checkonly** | 1 does NOT UPDATE the contact  
 |
| --- | --- |
| **preverify** | 1 generates the email with triggercode, if the email has not been already verified or if there is a pending request |

Is it possible to verify an unvalidated contact handle?

No, if you verified the email address only contact handles with validated = 1 will be set to verified = 1. In order to do so you have to ModifyContact with valid data and it will become also verified.

If I change the owner of a domain (which has already a X-TIME-TO-SUSPENSION date) will this give me another timeframe of 15 days?

No, otherwise it would be possible to change the owner every 14 days and there would be a possibility to never verify an email address of the owner!

Is it possible to remove the domain from suspension (status=clientHold/serverHold) by myself if the owner is meanwhile verified?

Yes, you can send a ModifyDomain command with delstatus0=clientHold and the domain will be released from lock, otherwise the system will do this in a timeframe of about 30 minutes.

I want to implement my own emailverification website, how do I do this?

Via the contact verification properties you can set your own URL:

This information will appear in the verification email as the following link:

-   http://your-emailverification-url.example?trigger=TRIGGERCODE

Via https API, LIVE - URL you can send the ActivateContact command to verify the email address:

-   https://api.rrpproxy.net/api/call?s\_login=USER&s\_pw=PASSWORD&command=activatecontact&trigger=

### Command

```
command                                    = SetProperty
contactverification-email-verification-url = http://your-emailverification-url.example
```

How will the events for contact verification look like?

Examples for email and poll as follows:

## Event example:

```
REASON:CONTACTVERIFICATION WITH TRIGGERCODE: xxxxxxxxxx
MESSAGE:CONTACTVERIFICATION WITH TRIGGERCODE: xxxxxxxxxx
OBJECT:<CONTACTHANDLEID>
CLASS:CONTACT_REGISTRATION
SUBCLASS:CONTACT_REGISTRATION_NOTIFY
```

## EPP Poll:

```
EPP Poll:

<?xml version="1.0" encoding="UTF-8"?>
<epp xmlns="urn:ietf:params:xml:ns:epp-1.0">
  <response>
    <result code="1301">
      <msg>Command completed successfully; ack to dequeue</msg>
    </result>
    <msgQ count="1" id="15784">
      <qDate>2016-06-22T06:50:05.0Z</qDate>
      <msg>CONTACT_CONTACT_REGISTRATION_NOTIFY</msg>
    </msgQ>
    <resData>
      <contact:panData xmlns:contact="urn:ietf:params:xml:ns:contact-1.0">
        <contact:id paResult="false">P-ABC1234</contact:id>
        <contact:paTRID>
          <svTRID>UNDEF</svTRID>
        </contact:paTRID>
        <contact:paDate>2016-06-22T06:50:05.0Z</contact:paDate>
      </contact:panData>
    </resData>
    <extension>
      <keysys:poll xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0">
        <keysys:data>
          <contact>P-ABC1234</contact>
          <reason>CONTACTVERIFICATION WITH TRIGGERCODE:MTQ2NjU3ODIwNC41MDg5IzQ0ODEyNTg3MTc0NzIgTA==</reason>
        </keysys:data>
        <keysys:info>CONTACTVERIFICATION WITH TRIGGERCODE:MTQ2NjU3ODIwNC41MDg5IzQ0ODEyNTg3MTc0NzIgTA==</keysys:info>
      </keysys:poll>
    </extension>
    <trID>
      <clTRID>poll-4035830250883638326</clTRID>
      <svTRID>00dd4356-12e6-41c0-9573-ec2347cefeeb</svTRID>
    </trID>
  </response>
</epp>
```

How will the link for email verifications look like?

http://emailverification.info?trigger=xxxxxxxxxx=&email=your@email.net
