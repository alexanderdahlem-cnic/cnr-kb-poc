---
title: "AddTrademark"
description: "CentralNic Reseller API Command Reference  ➤ Trademark ➤ AddTrademark ➥ Learn more about CentralNic Reseller API Commands"
---

The AddTrademark command allows you to add a trademark validation request. Your trademark data will be validated with our partners.

<div class="gw-list"><span class="gw-list__label">Possible Gateways</span>
<div class="gw-badges"><a class="gw-badge gw-mreg" href="../../connecting/centralnic-reseller-metaregistry/">MREG</a><a class="gw-badge gw-https" href="../../connecting/hypertext-transfer-protocol-socket/">HTTPS</a><a class="gw-badge gw-soap" href="../../connecting/simple-object-access-protocol/">SOAP</a><a class="gw-badge gw-xmlrpc" href="../../connecting/extensible-markup-language-remote-procedure-call/">XML-RPC</a><a class="gw-badge gw-smtp" href="../../connecting/api-requests-via-e-mail-smtp/">SMTP</a></div></div>

## Required Parameters

The following parameters are standard parameters for this command.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>COMMAND                        = AddTrademark
MARKNAME                       = [TEXT]
X-ACCEPT-ADDITIONAL-LABEL-COST = 0|1
ENTITLEMENT                    = OWNER|ASSIGNEE|LICENSEE
TMHOLDER                       = [CONTACT]
DOCTYPE                        = TMLICENSEEDECLARATION|TMASSIGNEEDECLARATION|TMOTHER|DECLARATIONOFPROOFOFUSESAMPLE|PROOFOFUSEOTHER|TMCOPYOFCOURTORDER
PERIOD                         = 1|3|5
AUTH                           = [TEXT]
GOODSANDSERVICES               = [LONGTEXT]
GOODSANDSERVICES#              = [LONGTEXT]
TMREGNUMBER                    = [TEXT]
TMREGDATE                      = [DATE]
TMREGEXPIRATIONDATE            = [DATE]
TMREGCOUNTRY                   = [TEXT]
TMREGJURISDICTION              = [TEXT]
TMREGCLASS                     = [TEXT]
REFNUMBER                      = [TEXT]
PRODATE                        = [DATE]
SOTTITLE                       = [TEXT]
SOTEXECDATE                    = [DATE]
SOTPROTECTIONRULING            = [TEXT]
COURTNAME                      = [TEXT]
ALABEL#                        = [TEXT]
REGNUMBER                      = [TEXT]
REGDATE                        = [DATE]
SMDINCLUSION#                  = 0|1
CLAIMSNOTIFY#                  = 0|1
ULABEL#                        = [TEXT]
MARKTYPE                       = REGISTERED_MARK|COURT_VALIDATED_MARK|STATUTE_OR_TREATY</code></pre></div>

 

<div class="api-io api-io--response"><span class="api-io__label">Response</span>
<pre class="api-io__code"><code>code                                        = [INT]
description                                 = [TEXT]
property[TRADEMARK][0]                      = [TEXT]
property[JOB_ID][0]                         = [TEXT]
property[EMAIL][0]                          = [TEXT]
property[AUTH][0]                           = [TEXT]
property[CREATED_DATE][0]                   = [DATE]
property[REGISTRATION_EXPIRATION_DATE][0]   = [DATE]
property[RENEWAL_DATE][0]                   = [DATE]
property[STATUS][0]                         = ACTIVE|PROCESSING|REQUESTED|FAILED|DOCUMENTS_RECEIVED|DEACTIVATED|EXPIRED
property[X-ACCEPT-ADDITIONAL-LABEL-COST][0] = 0|1</code></pre></div>

### Attributes

| **MARKNAME** | Name of the trademark |
| --- | --- |
| **X-ACCEPT-ADDITIONAL-LABEL-COST** | Optional {0:No; 1:Yes} |
| **ENTITLEMENT** | The form of entitlement of the Trademark Holder that is submitting the Trademark Record {OWNER; ASSIGNEE; LICENSEE} |
| **TMHOLDER** | Contact handle of the Trademark Holder |
| **DOCTYPE** | Document type to proof validity of your Trademark. {TMLICENSEEDECLARATION; TMASSIGNEEDECLARATION; TMOTHER; DECLARATIONOFPROOFOFUSESAMPLE; PROOFOFUSEOTHER; TMCOPYOFCOURTORDER} |
| **PERIOD** | Period in Years. (optional) {1; 3; 5} |
| **AUTH** | The authorization code for this Trademark. Will be generated automatically if empty. (optional) |
| **GOODSANDSERVICES** | Description of the goods and services associated to the trademark. Limited to 50000 characters if marktype is REGISTERED\_MARK, limited to 255 characters if marktype is STATUTE\_OR\_TREATY or COURT\_VALIDATED\_MARK |
| **GOODSANDSERVICES#** | GOODSANDSERVICES ##NUM## (optional) |
| **TMREGNUMBER** | Trademark registration number as provided by the trademark office. (optional) |
| **TMREGDATE** | The date of the trademark registration. (YYYY-MM-DD, optional) |
| **TMREGEXPIRATIONDATE** | The date when the registered trademark expires. (YYYY-MM-DD, optional) |
| **TMREGCOUNTRY** | Country where trademark is valid (optional) |
| **TMREGJURISDICTION** | The national or regional territory in which the registered trademark is protected. (optional) |
| **TMREGCLASS** | Trademark class(es), separated by comma. See also: http://web2.wipo.int/nicepub/edition-20130101/taxonomy/ or http://en.wikipedia.org/wiki/Nice\_(WIPO)(optional) |
| **REFNUMBER** | Reference Number (optional) |
| **PRODATE** | Date of protection of the mark (optional) |
| **SOTTITLE** | Title of statue or treaty (optional) |
| **SOTEXECDATE** | Date of execution of the statue or treaty (optional) |
| **SOTPROTECTIONRULING** | Protection ruling iso country code(s), separated by comma. (optional) |
| **COURTNAME** | Court name (optional) |
| **ALABEL#** | ALabel ##NUM## (optional) |
| **REGNUMBER** | Reference/Registration Number (optional) |
| **REGDATE** | Date of protection/registration of the mark (optional) |
| **SMDINCLUSION#** | SMD Inclusion ##NUM## (optional) |
| **CLAIMSNOTIFY#** | Claim Notification ##NUM## (optional) |
| **ULABEL#** | ULabel ##NUM## (optional) |
| **MARKTYPE** | Type of new trademark. {REGISTERED\_MARK; COURT\_VALIDATED\_MARK; STATUTE\_OR\_TREATY} |
| **TRADEMARK** | The unique ID of your Trademark validation request. |
| **JOB\_ID** | Job id |
| **EMAIL** | The unique email address to send trademark documentation to. |
| **AUTH** | The authorization code for this Trademark |
| **CREATED\_DATE** | Date the trademark was registered |
| **REGISTRATION\_EXPIRATION\_DATE** | Date the trademark will expire |
| **RENEWAL\_DATE** | Date when the trademark must be renewed |
| **STATUS** | Shows the current state of the trademark registration |
| **X-ACCEPT-ADDITIONAL-LABEL-COST** | Determines, TAG for resellers to accept the costs for further labels beyond 10 {0:No; 1:Yes} |
