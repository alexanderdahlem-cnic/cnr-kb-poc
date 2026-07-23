---
title: "Labels (Domain names)"
sidebar:
  order: 250
---

The Clearinghouse will support sunrise services and trademark claims services offered by gTLD registries.  
Sunrise services include: 1) generating an SMD file allowing Trademark Holders or Trademark Agents to register domain names matching the labels applicable for a Trademark Record and 2) providing Trademark Holders or Trademark Agents with Notification of Registered Names (NORNs) during the Sunrise Period. (NORNs are notifications sent by the Trademark Clearinghouse to Trademark Holders and Trademark Agents during a Sunrise Period or Trademark Claims Period to inform them that a domain name has been registered matching labels included in a Trademark Record.) Identical labels (domain names) are automatically generated on the basis of the name of the trademark, according to the Matching Rules as established in the gTLD Applicant Guidebook.

## Label rules

The following method can be used to verify if a label matches a name of a mark

1.  a dot ‘.’ is not allowed in a mark name – all mark names (and labels) with a dot will be rejected.determine which characters that can be represented in an IDN label
2.  determine which characters that can be represented in an IDN domain name (refer to IDN 2008 guideline)
3.  all other IDN non permissable characters can be omitted or replaced by a hyphen ‘-’
4.  in case the character is the ampersand (&) or the atpersand (@) it can be omitted, replaced by a hyphen ‘-’ or by a transliteration of ‘and’ or ‘at’ in the language linked to the jurisdiction or the country where the mark is registered. (see appendix 3)
5.  Verify if the label is conform the general domain name rules
    -   name cannot start with a hyphen(‘-’)
    -   name cannot end in a hypen(‘-’)
    -   name with a dash on the 3rd and 4th position is rejected
    -   name and its ascii representation (a-label) cannot be longer than 63 characters

If using the 5 above steps allow to convert the mark name in a label will be accepted.

## Example: ab & c

| **Allowed** | ab-c, ab-c, abandc, ab-and-c (if jursdiction is US), ... |
| --- | --- |
| **Not allowed** | ab---c (dash on 3rd and 4th position), a-and-c (b cannot be omitted), ... |

## Example: a+b

| **Allowed** | ab, a-b |
| --- | --- |

## Example: +abc+

| **Allowed** | abc |
| --- | --- |
| **Not allowed** | \-abc (starts with dash), abc- (ends with a dash), ... |

## Algorithm

1.  We will assume the trademark name TM is according to ICANN specifications (no dot allowed)
2.  create an empty list of lists A
3.  for all characters C in the name TM check if the character C can be represented in IDN2008
    -   yes : create a list L with a single element, the character C
    -   no: create a list L with 2 elements : an empty string and the character ‘-’
    -   if the character is ‘&’ or ‘@’ add additional transliterations to the list L (based on country or jurisdiction – see appendix 3)
    -   add the list L to the list of lists A
4.  create a complete set S of labels by calculation all unique combinations of exactly one choice for all lists L in the list A (this can easily be done by recursion or by straight for- ward looping over all combinations)
5.  eliminate all labels from the set S that start or end in a ‘-’, have a ‘-’ in 3rd and 4th position or are longer then 63 characters
6.  S now contains the list of all possible labels linked to the mark name TM

## Generate labels

The "TMCH Label Generator" can be used through the control panel or by the following API command:

:::command[Command]

```text
command=GetTrademarkLabels
MARKNAME=Fäther & Sön & Mother & Daughter &
MARKTYPE=REGISTERED_MARK
COUNTRY=D
```

:::

 

:::response[Response]

```text
code = 200
description = Command completed successfully
runtime = 0.359
property[alabel][0] = xn--fthersnmotherdaughter-51b33b
property[alabel][1] = xn--fthersnmother-daughter-04b15b
property[alabel][2] = xn--fthersnmother--daughter-v7b96b
property[alabel][3] = xn--fthersnmother---daughter-qbc78b
property[alabel][4] = xn--fthersn-motherdaughter-04b15b
property[alabel][5] = xn--fthersn-mother-daughter-v7b96b
property[alabel][6] = xn--fthersn-mother--daughter-qbc78b
property[alabel][7] = xn--fthersn-mother---daughter-lec50c
property[alabel][8] = xn--fthersn--motherdaughter-v7b96b
property[alabel][9] = xn--fthersn--mother-daughter-qbc78b
property[alabel][10] = xn--fthersn--mother--daughter-lec50c
property[alabel][11] = xn--fthersn--mother---daughter-ghc32c
property[alabel][12] = xn--fthersn---motherdaughter-qbc78b
property[alabel][13] = xn--fthersn---mother-daughter-lec50c
property[alabel][14] = xn--fthersn---mother--daughter-ghc32c
property[alabel][15] = xn--fthersn---mother---daughter-bkc14c
property[alabel][16] = xn--fther-snmotherdaughter-04b25b
property[alabel][17] = xn--fther-snmother-daughter-v7b07b
property[alabel][18] = xn--fther-snmother--daughter-qbc88b
property[alabel][19] = xn--fther-snmother---daughter-lec60c
property[alabel][20] = xn--fther-sn-motherdaughter-v7b07b
property[alabel][21] = xn--fther-sn-mother-daughter-qbc88b
property[alabel][22] = xn--fther-sn-mother--daughter-lec60c
property[alabel][23] = xn--fther-sn-mother---daughter-ghc42c
property[alabel][24] = xn--fther-sn--motherdaughter-qbc88b
property[alabel][25] = xn--fther-sn--mother-daughter-lec60c
property[alabel][26] = xn--fther-sn--mother--daughter-ghc42c
property[alabel][27] = xn--fther-sn--mother---daughter-bkc24c
property[alabel][28] = xn--fther-sn---motherdaughter-lec60c
property[alabel][29] = xn--fther-sn---mother-daughter-ghc42c
property[alabel][30] = xn--fther-sn---mother--daughter-bkc24c
property[alabel][31] = xn--fther-sn---mother---daughter-5mc06c
property[alabel][32] = xn--fther--snmotherdaughter-v7b17b
property[alabel][33] = xn--fther--snmother-daughter-qbc98b
property[alabel][34] = xn--fther--snmother--daughter-lec70c
property[alabel][35] = xn--fther--snmother---daughter-ghc52c
property[alabel][36] = xn--fther--sn-motherdaughter-qbc98b
property[alabel][37] = xn--fther--sn-mother-daughter-lec70c
property[alabel][38] = xn--fther--sn-mother--daughter-ghc52c
property[alabel][39] = xn--fther--sn-mother---daughter-bkc34c
property[alabel][40] = xn--fther--sn--motherdaughter-lec70c
property[alabel][41] = xn--fther--sn--mother-daughter-ghc52c
property[alabel][42] = xn--fther--sn--mother--daughter-bkc34c
property[alabel][43] = xn--fther--sn--mother---daughter-5mc16c
property[alabel][44] = xn--fther--sn---motherdaughter-ghc52c
property[alabel][45] = xn--fther--sn---mother-daughter-bkc34c
property[alabel][46] = xn--fther--sn---mother--daughter-5mc16c
property[alabel][47] = xn--fther--sn---mother---daughter-0pc97c
property[alabel][48] = xn--fther---snmotherdaughter-qbc09b
property[alabel][49] = xn--fther---snmother-daughter-lec80c
property[alabel][50] = xn--fther---snmother--daughter-ghc62c
property[alabel][51] = xn--fther---snmother---daughter-bkc44c
property[alabel][52] = xn--fther---sn-motherdaughter-lec80c
property[alabel][53] = xn--fther---sn-mother-daughter-ghc62c
property[alabel][54] = xn--fther---sn-mother--daughter-bkc44c
property[alabel][55] = xn--fther---sn-mother---daughter-5mc26c
property[alabel][56] = xn--fther---sn--motherdaughter-ghc62c
property[alabel][57] = xn--fther---sn--mother-daughter-bkc44c
property[alabel][58] = xn--fther---sn--mother--daughter-5mc26c
property[alabel][59] = xn--fther---sn--mother---daughter-0pc08c
property[alabel][60] = xn--fther---sn---motherdaughter-bkc44c
property[alabel][61] = xn--fther---sn---mother-daughter-5mc26c
property[alabel][62] = xn--fther---sn---mother--daughter-0pc08c
property[alabel][63] = xn--fther---sn---mother---daughter-vsc89c
property[label][0] = fäthersönmotherdaughter
property[label][1] = fäthersönmother-daughter
property[label][2] = fäthersönmother--daughter
property[label][3] = fäthersönmother---daughter
property[label][4] = fäthersön-motherdaughter
property[label][5] = fäthersön-mother-daughter
property[label][6] = fäthersön-mother--daughter
property[label][7] = fäthersön-mother---daughter
property[label][8] = fäthersön--motherdaughter
property[label][9] = fäthersön--mother-daughter
property[label][10] = fäthersön--mother--daughter
property[label][11] = fäthersön--mother---daughter
property[label][12] = fäthersön---motherdaughter
property[label][13] = fäthersön---mother-daughter
property[label][14] = fäthersön---mother--daughter
property[label][15] = fäthersön---mother---daughter
property[label][16] = fäther-sönmotherdaughter
property[label][17] = fäther-sönmother-daughter
property[label][18] = fäther-sönmother--daughter
property[label][19] = fäther-sönmother---daughter
property[label][20] = fäther-sön-motherdaughter
property[label][21] = fäther-sön-mother-daughter
property[label][22] = fäther-sön-mother--daughter
property[label][23] = fäther-sön-mother---daughter
property[label][24] = fäther-sön--motherdaughter
property[label][25] = fäther-sön--mother-daughter
property[label][26] = fäther-sön--mother--daughter
property[label][27] = fäther-sön--mother---daughter
property[label][28] = fäther-sön---motherdaughter
property[label][29] = fäther-sön---mother-daughter
property[label][30] = fäther-sön---mother--daughter
property[label][31] = fäther-sön---mother---daughter
property[label][32] = fäther--sönmotherdaughter
property[label][33] = fäther--sönmother-daughter
property[label][34] = fäther--sönmother--daughter
property[label][35] = fäther--sönmother---daughter
property[label][36] = fäther--sön-motherdaughter
property[label][37] = fäther--sön-mother-daughter
property[label][38] = fäther--sön-mother--daughter
property[label][39] = fäther--sön-mother---daughter
property[label][40] = fäther--sön--motherdaughter
property[label][41] = fäther--sön--mother-daughter
property[label][42] = fäther--sön--mother--daughter
property[label][43] = fäther--sön--mother---daughter
property[label][44] = fäther--sön---motherdaughter
property[label][45] = fäther--sön---mother-daughter
property[label][46] = fäther--sön---mother--daughter
property[label][47] = fäther--sön---mother---daughter
property[label][48] = fäther---sönmotherdaughter
property[label][49] = fäther---sönmother-daughter
property[label][50] = fäther---sönmother--daughter
property[label][51] = fäther---sönmother---daughter
property[label][52] = fäther---sön-motherdaughter
property[label][53] = fäther---sön-mother-daughter
property[label][54] = fäther---sön-mother--daughter
property[label][55] = fäther---sön-mother---daughter
property[label][56] = fäther---sön--motherdaughter
property[label][57] = fäther---sön--mother-daughter
property[label][58] = fäther---sön--mother--daughter
property[label][59] = fäther---sön--mother---daughter
property[label][60] = fäther---sön---motherdaughter
property[label][61] = fäther---sön---mother-daughter
property[label][62] = fäther---sön---mother--daughter
property[label][63] = fäther---sön---mother---daughter
property[markname][0] = Fäther & Sön & Mother & Daughter &
```

:::
