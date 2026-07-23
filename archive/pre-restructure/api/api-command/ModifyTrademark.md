---
title: "ModifyTrademark"
description: "CentralNic Reseller API Command Reference  ➤ Trademark ➤ ModifyTrademark ➥ Learn more about CentralNic Reseller API Commands"
---

The ModifyTrademark command allows you to modify a trademark validation request. Your trademark data will be validated with our partners.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND = ModifyTrademark
TRADEMARK = (TEXT)
MARKNAME = (TEXT)
X-ACCEPT-ADDITIONAL-LABEL-COST = 0|1
ENTITLEMENT = OWNER|ASSIGNEE|LICENSEE
TMHOLDER = (CONTACT)
DOCTYPE = TMLICENSEEDECLARATION|TMASSIGNEEDECLARATION|TMOTHER|DECLARATIONOFPROOFOFUSESAMPLE|PROOFOFUSEOTHER|TMCOPYOFCOURTORDER
AUTH = (TEXT)
GOODSANDSERVICES = (LONGTEXT)
GOODSANDSERVICES# = (LONGTEXT)
TMREGNUMBER = (TEXT)
TMREGDATE = (DATE)
TMREGEXPIRATIONDATE = (DATE)
TMREGCOUNTRY = (TEXT)
TMREGJURISDICTION = (TEXT)
TMREGCLASS = (TEXT)
REFNUMBER = (TEXT)
PRODATE = (DATE)
SOTTITLE = (TEXT)
SOTEXECDATE = (DATE)
SOTPROTECTIONRULING = (TEXT)
COURTNAME = (TEXT)
ALABEL# = (TEXT)
ADDALABEL# = (TEXT)
DELALABEL# = (TEXT)
REGNUMBER = (TEXT)
REGDATE = (DATE)
SMDINCLUSION# = 0|1
ADDSMDINCLUSION# = 0|1
DELSMDINCLUSION# = 0|1
CLAIMSNOTIFY# = 0|1
ADDCLAIMSNOTIFY# = 0|1
DELCLAIMSNOTIFY# = 0|1
ULABEL# = (TEXT)
ADDULABEL# = (TEXT)
DELULABEL# = (TEXT)</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code = (INT)
description = (TEXT)
property[TRADEMARK][0] = (TEXT)
property[JOB_ID][0] = (TEXT)
property[EMAIL][0] = (TEXT)
property[AUTH][0] = (TEXT)
property[UPDATED_DATE][0] = (DATE)
property[REGISTRATION_EXPIRATION_DATE][0] = (DATE)
property[RENEWAL_DATE][0] = (DATE)
property[STATUS][0] = ACTIVE|PROCESSING|REQUESTED|FAILED|DOCUMENTS_RECEIVED|INCORRECT|DEACTIVATED|EXPIRED
property[X-ACCEPT-ADDITIONAL-LABEL-COST][0] = 0|1</code></pre></div>

### Attributes

| **TRADEMARK** | ID of the trademark given by TMCH. (optional)/The unique ID of your Trademark validation request. |
| --- | --- |
| **MARKNAME** | Name of the trademark. |
| **X-ACCEPT-ADDITIONAL-LABEL-COST** | 0|1(optional) |
| **ENTITLEMENT** | OWNER|ASSIGNEE|LICENSEE |
| **TMHOLDER** | Contact handle of the Trademark Holder |
| **DOCTYPE** | TMLICENSEEDECLARATION|TMASSIGNEEDECLARATION|TMOTHER| DECLARATIONOFPROOFOFUSESAMPLE|PROOFOFUSEOTHER|TMCOPYOFCOURTORDER |
| **AUTH** | The authorization code for this Trademark. Will be generated automatically if empty. (optional)/The authorization code for this Trademark |
| **GOODSANDSERVICES** | Description of the goods and services associated to the trademark. Limited to 4000 characters/50000 characters in summary(use GOODSANDSERVICES#)if marktype is REGISTERED\_MARK, limited to 255 characters if marktype is STATUTE\_OR\_TREATY or COURT\_VALIDATED\_MARK |
| **GOODSANDSERVICES0-4096** | The character limit per line is 4000 chars/50000 chars in summary(optional) |
| **TMREGNUMBER** | Trademark registration number as provided by the trademark office. (optional) |
| **TMREGDATE** | The date of the trademark registration. (YYYY-MM-DD, optional) |
| **TMREGEXPIRATIONDATE** | The date when the registered trademark expires. (YYYY-MM-DD, optional) |
| **TMREGCOUNTRY** | Country where trademark is valid (optional) |
| **TMREGJURISDICTION** | The national or regional territory in which the registered trademark is protected.(optional) |
| **TMREGCLASS** | Trademark class(es), separated by comma. See also |
| **REFNUMBER** | Reference Number (optional) |
| **PRODATE** | Date of protection of the mark (optional) |
| **SOTTITLE** | Title of statue or treaty (optional) |
| **SOTEXECDATE** | Date of execution of the statue or treaty (optional) |
| **SOTPROTECTIONRULING** | Protection ruling iso country code(s), separated by comma. (optional) |
| **COURTNAME** | Court name (optional) |
| **ALABEL#** | ALabel ##NUM## (optional) |
| **ADDALABEL#** | Add ALabel ##NUM## (optional) |
| **DELALABEL#** | Delete ALabel ##NUM## (optional) |
| **REGNUMBER** | Reference/Registration Number (optional) |
| **REGDATE** | Date of protection/registration of the mark (optional) |
| **SMDINCLUSION#** | SMD Inclusion ##NUM## (optional) |
| **ADDSMDINCLUSION#** | Add SMD Inclusion ##NUM## (optional) |
| **DELSMDINCLUSION#** | Delete SMD Inclusion ##NUM## (optional) |
| **CLAIMSNOTIFY#** | Claim Notification ##NUM## (optional) |
| **ADDCLAIMSNOTIFY#** | Add Claim Notification ##NUM## (optional) |
| **DELCLAIMSNOTIFY#** | Delete Claim Notification ##NUM## (optional) |
| **ULABEL#** | ULabel ##NUM## (optional) |
| **ADDULABEL#** | Add ULabel ##NUM## (optional) |
| **DELULABEL#** | Delete ULabel ##NUM## (optional) |
| **JOB\_ID** | Job id |
| **EMAIL** | The unique email address to send trademark documentation to. |
| **UPDATED\_DATE** | Date when the trademark was updated |
| **REGISTRATION\_EXPIRATION\_DATE** | Date when the trademark will expire |
| **RENEWAL\_DATE** | Date when the trademark must be renewed |
| **STATUS** | Shows the current state of the trademark registration |
| **X-ACCEPT-ADDITIONAL-LABEL-COST** | Determines, TAG for resellers to accept the costs for further labels beyond 10 |
