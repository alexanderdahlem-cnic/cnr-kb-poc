---
title: "Adding a trademark"
sidebar:
  order: 210
---

## Adding a trademark

:::command[Command]

```text
COMMAND          = AddTrademark
MARKTYPE         = <REGISTERED_MARK|COURT_VALIDATED_MARK|STATUTE_OR_TREATY>
MARKNAME         = <Text> Trademark Name
ENTITLEMENT      = <OWNER|ASSIGNEE|LICENSEE>
TMHOLDER         = <CONTACTHANDLE-ID>
DOCTYPE          = <TMLICENSEEDECLARATION|TMASSIGNEEDECLARATION|TMOTHER|DECLARATIONOFPROOFOFUSESAMPLE|PROOFOFUSEOTHER|TMCOPYOFCOURTORDER>
GOODSANDSERVICES = <TEXT> List of all goods / services (the character limit is 4000 chars in summary)
OR
GOODSANDSERVICES0...4096  = <TEXT> List of all goods / services (the character limit per line is 4000 chars/50000 chars in summary)
PERIOD           = <1|3|5> Years (registration of trademark record)
```

:::

 

:::response[Response]

```text
code = 200
description = Command completed successfully
runtime = 0.185
property[auth][0] = @xzwg4lP.GIJ
property[created date][0] = 2013-04-09 09:25:28.0
property[email][0] = 0B26A740-F9D5-45B2-B1C0-F16390164BBA@tmchhandling.info
property[registration expiration date][0] = 2014-04-09 09:25:28.0
property[renewal date][0] = 2014-04-09 09:25:28.0
property[status][0] = REQUESTED
property[trademark][0] = 0B26A740-F9D5-45B2-B1C0-F16390164BBA
```

:::

### Attributes

| **TMREGDATE** | <YYYY-MM-DD> Date when trademark was registered (only for REGISTERED\_MARK)  
 |
| --- | --- |
| **TMREGEXPIRATIONDATE** | <YYYY-MM-DD> Date when trademark will expire (only for REGISTERED\_MARK)  
 |
| **TMREGNUMBER** | <Text> Trademark Register Number (only for REGISTERED\_MARK)  
 |
| **TMREGJURISDICTION** | <Text> Legal responsibility for trademark (only for REGISTERED\_MARK)  
 |
| **TMREGCLASS** | <1-45 | N/A> (only for REGISTERED\_MARK - please see Nice Classification)  
 |
| **SOTEXECDATE** | <YYYY-MM-DD> Date when statute or treaty was established (only for STATUTE\_OR\_TREATY)  
 |
| **SOTTITLE** | <Text> Title of the statute or treaty (only for STATUTE\_OR\_TREATY)  
 |
| **REFNUMBER** | <Text> Reference number of the trademark (only for STATUTE\_OR\_TREATY/COURT\_VALIDATED\_MARK)  
 |
| **PRODATE** | <YYYY-MM-DD> Date when trademark was protected (only for STATUTE\_OR\_TREATY /COURT\_VALIDATED\_MARK)  
 |
| **COURTNAME** | <Text> Name of the court (only for STATUTE\_OR\_TREATY/COURT\_VALIDATED\_MARK) |

## Adding a Trademark Record for registered trademarks

:::command[Command]

```text
[COMMAND]
COMMAND = AddTrademark
MARKTYPE = [REGISTERED_MARK]
MARKNAME = [Text] Trademark Name
ENTITLEMENT = [OWNER|ASSIGNEE|LICENSEE]
TMHOLDER = [CONTACTHANDLE-ID]
DOCTYPE = TMLICENSEEDECLARATION| TMASSIGNEEDECLARATION| TMOTHER| DECLARATIONOFPROOFOFUSESAMPLE| PROOFOFUSEOTHER
GOODSANDSERVICES = [TEXT] List of all goods / services (the character limit is 4000 chars in summary)
OR
GOODSANDSERVICES0...4096  = <TEXT> List of all goods / services (the character limit per line is 4000 chars/50000 chars in summary)
PERIOD = [1|3|5] Years (registration of trademark record)
TMREGDATE = [YYYY-MM-DD] Date when trademark was registered
TMREGEXPIRATIONDATE = [YYYY-MM-DD] Date when trademark will expire
TMREGNUMBER = [Text] Trademark Register Nummer
TMREGJURISDICTION = [2-digit Code] Legal responsibility for trademark

Allowed values ​​for TMREGCOUNTRY and TMREGJURISDICTION: please see here

TMREGCLASS = [1-45 | N/A] - please see Nice Classification

Optional:
ALABEL0...199 = [Text] Max.63 Chars ASCII representation of the label linked to the mark
ULABEL0...199 = [Text] Max.63 Chars Non-ASCII representation of the label linked to the mark
SMDINCLUSION0...199 = 0|1 (Sunrise Service: the label will be included in the SMD file to be used in sunrise)
CLAIMSNOTIFY0...199 = 0|1 (Claims Service: registrants will be made aware of mark existance and you will receive notification on
                          registration during the initial period of General Availability)
X-ACCEPT-ADDITIONAL-LABEL-COST = <0|1> Flag for accepting additional label costs if more than 10 labels (max.200)
```

:::

## Adding a Trademark Record for court validated trademarks

:::command[Command]

```text
[COMMAND]
COMMAND = AddTrademark
MARKTYPE = [COURT_VALIDATED_MARK]
MARKNAME = [Text] Trademark Name
ENTITLEMENT = [OWNER|ASSIGNEE|LICENSEE]
TMHOLDER = [CONTACTHANDLE-ID]
DOCTYPE = TMLICENSEEDECLARATION|TMASSIGNEEDECLARATION|TMCOPYOFCOURTORDER
GOODSANDSERVICES = [TEXT] List of all goods / services (the character limit is 4000 chars in summary)
OR
GOODSANDSERVICES0...4096  = <TEXT> List of all goods / services (the character limit per line is 4000 chars/50000 chars in summary)
PERIOD = [1|3|5] Years (registration of trademark record)
REFNUMBER = [Text] Reference number of the trademark
PRODATE = [YYYY-MM-DD] Date when trademark was protected
COURTNAME = [Text] Name of the court

Optional:
ALABEL0...199 = [Text] Max.63 Chars ASCII representation of the label linked to the mark
ULABEL0...199 = [Text] Max.63 Chars Non-ASCII representation of the label linked to the mark
SMDINCLUSION0...199 = 0|1 (Sunrise Service: the label will be included in the SMD file to be used in sunrise)
CLAIMSNOTIFY0...199 = 0|1 (Claims Service: registrants will be made aware of mark existance and you will receive notification on
                          registration during the initial period of General Availability)
X-ACCEPT-ADDITIONAL-LABEL-COST = <0|1> Flag for accepting additional label costs if more than 10 labels (max.200)
```

:::

## Adding a Trademark Record for marks protected by statute or treaty

:::command[Command]

```text
[COMMAND]
COMMAND = AddTrademark
MARKTYPE = [STATUTE_OR_TREATY]
MARKNAME = [Text] Trademark Name]
ENTITLEMENT = [OWNER|ASSIGNEE|LICENSEE]
TMHOLDER = [CONTACTHANDLE-ID]
DOCTYPE = TMLICENSEEDECLARATION|TMASSIGNEEDECLARATION|TMOTHER
GOODSANDSERVICES = [TEXT] List of all goods / services  (the character limit is 4000 chars in summary)
OR
GOODSANDSERVICES0...4096  = <TEXT> List of all goods / services (the character limit per line is 4000 chars/50000 chars in summary)
PERIOD = [1|3|5] Years (registration of trademark record)
SOTEXECDATE = [YYYY-MM-DD] Date when statute or treaty was established (only for STATUTE_OR_TREATY)
SOTTITLE = [Text] Title of the statute or treaty (only for STATUTE_OR_TREATY)
SOTPROTECTIONRULING = <Iso-Country-Code or Iso-Country-Codes> i.e. de or de,us,be (only for STATUTE_OR_TREATY)
REFNUMBER = [Text] Reference number of the trademark
PRODATE = [YYYY-MM-DD] Date when trademark was protected

Optional:
ALABEL0...199 = [Text] Max.63 Chars ASCII representation of the label linked to the mark
ULABEL0...199 = [Text] Max.63 Chars Non-ASCII representation of the label linked to the mark
SMDINCLUSION0...199 = 0|1 (Sunrise Service: the label will be included in the SMD file to be used in sunrise)
CLAIMSNOTIFY0...199 = 0|1 (Claims Service: registrants will be made aware of mark existance and you will receive notification on
                          registration during the initial period of General Availability)
X-ACCEPT-ADDITIONAL-LABEL-COST = <0|1> Flag for accepting additional label costs if more than 10 labels (max.200)
```

:::
