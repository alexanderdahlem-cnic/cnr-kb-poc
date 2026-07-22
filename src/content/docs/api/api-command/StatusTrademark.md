---
title: "StatusTrademark"
description: "CentralNic Reseller API Command Reference  ➤ Trademark ➤ StatusTrademark ➥ Learn more about CentralNic Reseller API Commands"
---

This command allows you to query trademark status information from our system.

## Possible Gateways

The command _StatusTrademark_ is available via the following gateways:

-   [MREG](../../connecting/centralnic-reseller-metaregistry/)
-   [HTTPS](../../connecting/hypertext-transfer-protocol-socket/)
-   [SOAP](../../connecting/simple-object-access-protocol/)
-   [XML-RPC](../../connecting/extensible-markup-language-remote-procedure-call/)
-   [SMTP](../../connecting/api-requests-via-e-mail-smtp/)

## Required Parameters

The following parameters are standard parameters for this command.

### Command

```
COMMAND   = StatusTrademark
TRADEMARK = (TEXT)
STATUSTYPE = SMD|ENC 
```

### Response

```
code = (INT)
description = (TEXT)
property[TRADEMARK][0] = (TEXT)
property[MARKTYPE][0] = REGISTERED_MARK|COURT_VALIDATED_MARK|STATUTE_OR_TREATY
property[TMCH_ID][0] = (TEXT)
property[TMCH_POU_STATUS][0] = (TEXT)
property[MARKNAME][0] = (TEXT)
property[ENTITLEMENT][0] = OWNER|ASSIGNEE|LICENSEE
property[TMHOLDER][0] = (CONTACT)
property[DOCTYPE][0] = TMLICENSEEDECLARATION | TMASSIGNEEDECLARATION | TMOTHER |
DECLARATIONOFPROOFOFUSESAMPLE | PROOFOFUSEOTHER | TMCOPYOFCOURTORDER
property[AUTH_CODE][0] = (TEXT)
property[GOODSANDSERVICES][0] = (TEXT)
property[TMREGCOUNTRY][0] = (TEXT)
property[REFNUMBER][0] = (TEXT)
property[PRODATE][0] = (DATE)
property[ALABEL][n] = (TEXT)
property[SMDINCLUSION][n] = (TEXT)
property[CLAIMSNOTIFY][n] = (INT)
property[ULABEL][n] = (TEXT)
property[STATUS][0] = (STATUS)
property[EMAIL][0] = (TEXT)
property[TMCH_SMD_FORMAT][0] = (TEXT)
property[SMDENCODEDSIGNEDMARK][0] = (TEXT)
property[SMDDECODEDSIGNEDMARK][0] = (TEXT)
property[TMCH_VALIDATOR_COMMENTS][0] = (TEXT)
property[FILEDOCTYPE][n] = (TEXT)
property[FILENAME][n] = (TEXT)
property[FILETYPE][n] = (TEXT)
property[FILEID][n] = (TEXT)
property[FILESTATUS][n] = (TEXT)
property[SMDID][0] = (TEXT)
property[SMDFILENAME][0] = (TEXT)
property[SMDFILE][n] = (TEXT)
property[TMREGNUMBER][0] = (TEXT)
property[TMREGDATE][0] = (DATE)
property[TMREGEXPIRATIONDATE][0] = (DATE)
property[TMREGJURISDICTION][0] = (TEXT)
property[TMREGCLASS][0] = (TEXT)
property[SOTTITLE][0] = (TEXT)
property[SOTEXECDATE][0] = (DATE)
property[COURTNAME][0] = (TEXT)
property[CREATED_BY][0] = (TEXT)
property[CREATED_DATE][0] = (DATE)
property[UPDATED_BY][0] = (TEXT)
property[UPDATED_DATE][0] = (DATE)
property[TRANSFER_DATE][0] = (DATE)
property[PAID_UNTIL][0] = (DATE)
property[REGISTRAR][0] = (TEXT)
property[REGISTRATION_EXPIRATION_DATE][0] = (DATE)
property[RENEWAL_DATE][0] = (DATE)
property[JOB_ID][0] = (TEXT)
property[RENEWALMODE][0] = AUTORENEW|AUTOEXPIRE
property[X-ACCEPT-ADDITIONAL-LABEL-COST][0] = 0|1
```

### Attributes

| **TRADEMARK** | ID of the trademark given by TMCH. |
| --- | --- |
| **STATUSTYPE** | SMD |
| **TRADEMARK** | ID of the trademark given by RRPproxy. |
| **MARKTYPE** | Type of new trademark. |
| **TMCH\_ID** | ID of the trademark given by TMCH. |
| **TMCH\_POU\_STATUS** | Status of POU of the trademark given by TMCH. |
| **MARKNAME** | Your Trademark name |
| **ENTITLEMENT** | The form of entitlement of the Trademark Holder that is submitting the Trademark Record. |
| **TMHOLDER** | Contact Handle of the Trademark Holder |
| **DOCTYPE** | Document type to proof validity of your Trademark. |
| **AUTH\_CODE** | The authorization code for this Trademark |
| **GOODSANDSERVICES** | Description of the goods and services associated to the trademark. |
| **TMREGCOUNTRY** | Country where trademark is valid |
| **REFNUMBER** | Reference Number |
| **PRODATE** | Date of protection of the mark |
| **ALABEL** | A label |
| **SMDINCLUSION** | SMD Inclusion |
| **CLAIMSNOTIFY** | Claim Notification |
| **ULABEL** | U label |
| **STATUS** | Current status of this trademark |
| **EMAIL** | The unique email address to send trademark documentation to. |
| **TMCH\_SMD\_FORMAT** | SMD file |
| **SMDENCODEDSIGNEDMARK** | SMD file base64 encoded |
| **SMDDECODEDSIGNEDMARK** | SMD file as xml |
| **TMCH\_VALIDATOR\_COMMENTS** | Comments from the validator of TMCH |
| **FILEDOCTYPE** | Document type of uploaded file at TMCH |
| **FILENAME** | Filename of uploaded file at TMCH |
| **FILETYPE** | File extension of uploaded file at TMCH |
| **FILEID** | File id of uploaded file at TMCH |
| **FILESTATUS** | File status of uploaded file at TMCH |
| **SMDID** | SMD ID |
| **SMDFILENAME** | SMD Filename |
| **SMDFILE** | SMD Filecontent |
| **TMREGNUMBER** | Trademark registration number as provided by the trademark office. |
| **TMREGDATE** | The date of the trademark registration. (YYYY-MM-DD) |
| **TMREGEXPIRATIONDATE** | The date when the registered trademark expires. (YYYY-MM-DD) |
| **TMREGJURISDICTION** | The national or regional territory in which the registered trademark is protected. |
| **TMREGCLASS** | Trademark class |
| **SOTTITLE** | Title of statue or treaty |
| **SOTEXECDATE** | Date of execution of the statue or treaty |
| **COURTNAME** | Court name |
| **CREATED\_BY** | Who created this trademark |
| **CREATED\_DATE** | created date of the trademark |
| **UPDATED\_BY** | Updated by |
| **UPDATED\_DATE** | Date of the last modification of the trademark |
| **TRANSFER\_DATE** | Transferred date of the trademark |
| **PAID\_UNTIL** | Paid until date of this trademark |
| **REGISTRAR** | Current registrar |
| **REGISTRATION\_EXPIRATION\_DATE** | Current expiration date of this trademark |
| **RENEWAL\_DATE** | Current renewal date of this trademark |
| **JOB\_ID** | Job id |
| **RENEWALMODE** | Renewalmode |
| **X-ACCEPT-ADDITIONAL-LABEL-COST** | Determines, TAG for resellers to accept the costs for further labels beyond |
