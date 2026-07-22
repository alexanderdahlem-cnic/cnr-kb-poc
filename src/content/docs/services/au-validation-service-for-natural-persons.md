---
title: ".AU Validation Service for Natural Persons"
---

## What is it

With the release of second level .AU domains on Mar 24, 2022, private individuals will finally also have the opportunity to register any domain they like under .AU.

AuDA, however, requires all Registrars to validate the details of anyone applying for a .au domain “using Reliable and Independent Electronic Data or valid identity documents” before submitting their application to the Registry systems.

For Australian businesses, this type of validation is already built into the regular registration workflow, using the ABN/ACN numbers provided in the domain registration command.

As 2nd level .au domains are open also to Natural Persons, CentralNic Reseller will need to perform validation of the applicant’s details before submitting their orders to the Registry.

Unlike ABN/ACN numbers lookups, these checks are not free.

To meet the demand for .au registrations from private individuals, we have created this separate Verification service that Resellers can use to verify the details of their customers before submitting registration orders on their behalf.

The reason this was built as a separate product was to minimize the changes required to the existing .AU orders flows and to reduce impact of these changes on those Resellers that only work with business customers. Additionally, as each private customer only needs to be validated once regardless of the number of domains they wish to register, this was considered the most efficient way to offer this opportunity also to these customers.

## Important things to keep in mind

-   This verification is carried out on the customer’s Residential Address and a supported form of ID that will be checked using global databases (Equifax) and against the Document Verification Service offered by the Australian government.
-   In order to access this service, Resellers must accept the Appendix for the AU Verification service available in the CentralNic Reseller Control Panel.
-   In particular, Resellers should pay close attention to the fact that explicit and informed consent to verify their personal details must be obtained (and properly tracked) from each customer. The consent can be recorded through a signed form or electronically (e.g. a check-box in the order flow) and proof of this consent must be presented by the Reseller upon request by CentralNic Reseller Resellers should keep a copy of the Customer’s consent for 6 months after submitting the request.
-   All verification requests are a chargeable operation, regardless of whether the verification is successful or not: Resellers should carefully check the details collected and confirm with the customer that they are absolutely correct before submitting them.
-   Each successful verification is valid for 6 months. A validated contact can be used for an unlimited number of registrations, owner changes and renewals during the period of validity. The reason for this limitation is that AuDA requires the Registrar to re-verify Registrant details when a domain is renewed: the limitation is in place to avoid that the same verification can be used both to register and then renew the same domain.
-   For the same reason, we strongly recommend Resellers to encourage Registrants to register their .au domains for the maximum allowed period, to reduce the need to perform the verification again each year the domain comes up for renewal.
-   It is possible to verify the same details multiple times. Each verification will be treated independently and charged accordingly. The main reason for this is to allow Resellers to re-verify an existing contact and update its “validated until” date even before the original date has passed.

## How to use it

A validated contact is required to process the following types of .AU operations:

-   Registration
-   Trade (Owner change)
-   Renewal

Our system will check the Contact Handle used as Registrant and confirm its verification status. If the Handle is not validated, or the verification has expired, the order will fail.

Please note that only the Registrant handle needs to be validated.

Resellers can verify existing Contact Handles or create a new one as part of the verification process. This operation can be performed through the API or using the CentralNic Reseller Control Panel.

Through the CentralNic Reseller Control Panel it is also possible to submit verification requests in bulk (Resellers should remember that each individual customer must have agreed to the verification of their details before submitting the request).

Resellers can also test this service through the CentralNic Reseller OTE system. Sample data is available for testing purposes, please reach out to support should you need to test your integration.

## Supported document types

-   Australian Citizenship
-   Australian Citizenship by Descent
-   Australian Driver's Licence
-   Australian Passport
-   Australian Visa
-   Australian Birth Certificate

## Fields mapping per ID Type

| **ID type** | Required Fields |
| --- | --- |
| **Australian Citizenship** | X-AU-OWNER-IDTYPE = 1 |
|  | X-AU-OWNER-IDDATE = YYYY-MM-DD |
|  | X-AU-OWNER-IDNUMBER = Regex: \[A-Za-z0-9\] |
| **Australian Citizenship by Descent** | X-AU-OWNER-IDTYPE = 2 |
|  | X-AU-OWNER-IDDATE = YYYY-MM-DD |
|  | X-AU-OWNER-IDNUMBER = Regex: \[A-Za-z0-9\] |
| **Australian Driver's Licence** | X-AU-OWNER-IDTYPE = 3 |
|  | X-AU-OWNER-IDNUMBER = Regex: \[A-Za-z0-9\] |
|  | X-AU-OWNER-IDISSUER = \[ACT, NSW, NT, QLD, SA, TAS, VIC, WA\] |
| **Australian Passport** | X-AU-OWNER-IDTYPE = 4 |
|  | X-AU-OWNER-IDNUMBER = Regex: \[A-Za-z\]{1,2}\[0-9\]{7} |
| **Australian Visa** | X-AU-OWNER-IDTYPE = 5 |
|  | X-AU-OWNER-IDNUMBER = Regex: \[A-Za-z0-9\]\* |
| **Australian Birth Certificate** | X-AU-OWNER-IDTYPE = 6 |
|  | X-AU-OWNER-IDISSUER = \[ACT, NSW, NT, QLD, SA, TAS, VIC, WA\] |

X-AU-OWNER-DOB is always required. It should be filled in with the Registrant’s date of birth in the YYYY-MM-DD format.

For Citizenship, the “X-AU-OWNER-IDDATE” should be filled in with the date in which Citizenship was acquired, as it appears in the Citizenship certificate.

## Additional guidance on how to enter the ID data

1.  Australian Citizenship

| **State** | All |
| --- | --- |
| **Given Name(s) \[firstname\]** | Required if available |
| **Middle Name** | N/A |
| **Family Name \[lastname\]** | required |
| **Birth Date** | required |
| **Stock (Document Number)** | Required Stock Number field will permit entry of either; - the stock number (printed on the back top right hand corner) - the Citizenship Automated System (CAS) (prior to late-1998 printed on the front bottom left hand corner) - the evidence number (from late-1998 printed on the front) to be verified |
| **Acquisition Date** | required |
| **Additional Notes** | Single name certificates should have the name entered into the Family Name field and the Given Name field left blank. |

_It is only possible to validate Citizenship by Descent certificates issued from 1 July 2007._

2\. Australian Citizenship by Descent

| **State** | All |
| --- | --- |
| **Given Name(s) \[firstname\]** | Required if available |
| **Middle Name** | N/A |
| **Family Name \[lastname\]** | required |
| **Birth Date** | required |
| **Stock (Document Number)** | Required Prior to mid-2007 certificates contain a Register (maximum 4 digits) and Entry Number (maximum 5 digits) which combined make up the Stock (Document) Number value. From mid-2007 certificates are printed with a Client ID number (11 digits) which should be used for the Stock (Document) Number. |
| **Acquisition Date** | required |
| **Additional Notes** | Single name certificates should have the name entered into the Family Name field and the Given Name field left blank. |

_It is only possible to validate Citizenship by Descent certificates issued from 1 July 2007._

3\. Australian Driver’s Licence

Notes:

-   Expired licences cannot be verified.
-   WA extraordinary licences cannot be verified.
-   Apostrophes can be used but inverted commas will result in verifications failing.
-   Middle name, if supplied, is not sent for verification.
-   Card Number, if supplied, is sent for verification.

| **State** | All |
| --- | --- |
| **Given Name(s) \[firstname\]** | required |
| **Middle Name** | N/A |
| **Family Name \[lastname\]** | required |
| **Birth Date** | required |
| **Licence Number** | required |
| **State of Issue** | required |
| **Additional Notes** | Single name licences should have the name entered into the Family Name field with a full stop or hyphen entered into the Given Name Field. Where a Given Name includes multiple names i.e. John James, the second name may represent a Middle Name and should not be entered. |

4\. Passport

Notes:

-   The following types of Australian travel documents can be verified; Passport (including Ordinary, Frequent traveller, Diplomatic, Official and Emergency).
-   Provisional travel documents cannot be verified.

| **State** | All |
| --- | --- |
| **Given Name(s) \[firstname\]** | required |
| **Middle Name** | N/A |
| **Family Name \[lastname\]** | required |
| **Birth Date** | required |
| **Document Number** | required |
| **Additional Notes** | Given Name(s) field must include all first and middle names. Single name passports should have the name entered into the Family Name field with the Given Name field left blank. Family Name or Given Name(s) that are longer than 31 characters (including spaces) will record as many full names as possible in the respective fields with other names initialized. |

5\. Visa

| **State** | All |
| --- | --- |
| **Given Name(s) \[firstname\]** | Required Should not include accents in name(s). |
| **Middle Name** | N/A |
| **Family Name \[lastname\]** | Required Should not include accents in name(s). |
| **Birth Date** | required |
| **Passport Number** | required |
| **Additional Notes** | Single name passports should have the name entered into the Family Name field and the Given Name(s) field should contain a hyphen. If a successful match is not achieved using the biographic data from the main section of the passport, then the details as they appear in the Machine Readable Zone should be provided (as this does not include non-Latin and national characters). |

_Foreign nationals that arrived in Australia prior to mid-1990 may not be able to be verified._

6\. Australian Birth Certificate

Notes:

The following birth certificates can be verified;

-   ACT where the certificate was issued after 01/01/1930 or those where data has been electronically captured
-   NSW where the birth occurred after 01/01/1914 or those that have otherwise been electronically captured
-   NT birth certificates, including Aboriginal Population Record certificates, where the certificate was issued after
-   01/01/1870 or those that have otherwise been electronically captured
-   QLD where the birth was registered after 01/01/1941
-   SA where the certificate was issued after 01/01/1944 or those that have otherwise been electronically captured
-   TAS where the certificate was issued after 01/01/1970
-   VIC birth certificates issued after 01/01/1929 or those that have otherwise been electronically captured
-   WA where the certificate was issued on or after 01/01/1841.

The following birth certificates cannot be verified;

-   NSW birth records occurring prior to 1952 that contain a district number only
-   WA birth certificates issued in the Cocos Islands prior to 1955
-   WA birth certificates issued by/in Christmas Island prior to 1 July 1993.

| **State** | ACT |
| --- | --- |
| **Registration State** | required |
| **Given Name(s) \[firstname\]** | required |
| **Middle Name** | N/A |
| **Family Name \[lastname\]** | required |
| **Birth Date** | required |
| **Additional Notes** | Single name certificates, where only a Given Name(s) or Family Name is printed must be entered with a hyphen in the empty name field. |
| **\-** | \- |
| **State** | NSW |
| **Registration State** | required |
| **Given Name(s) \[firstname\]** | required |
| **Middle Name** | N/A |
| **Family Name \[lastname\]** | required |
| **Birth Date** | required |
| **Additional Notes** | Single name certificates must have the name values entered into the corresponding name field and the empty field must contain a hyphen or be left blank. |
| **\-** | \- |
| **State** | NT |
| **Registration State** | required |
| **Given Name(s) \[firstname\]** | required |
| **Middle Name** | N/A |
| **Family Name \[lastname\]** | required |
| **Birth Date** | required |
| **Additional Notes** | Single name certificates, where only a Given Name(s) or Family Name is printed must be entered with a hyphen in the empty name Field. Registration number cannot be used to verify Aboriginal Population Record certificates. If it is provided with the certificate number it will be Ignored. Certificate number must be provided to verify Aboriginal Population Record certificates. |
| **\-** | \- |
| **State** | QLD |
| **Registration State** | required |
| **Given Name(s) \[firstname\]** | required |
| **Middle Name** | N/A |
| **Family Name \[lastname\]** | required |
| **Birth Date** | required |
| **Additional Notes** | single name certificates are not verifiable. Given & Middle Names may be required to be submitted together in the Given name field. |
| **\-** | \- |
| **State** | SA |
| **Registration State** | required |
| **Given Name(s) \[firstname\]** | required |
| **Middle Name** | N/A |
| **Family Name \[lastname\]** | required |
| **Birth Date** | required |
| **Additional Notes** | Single name certificates, where only a Given Name(s) or Family Name is printed must be entered with a hyphen in the empty name field. |
| **\-** | \- |
| **State** | TAS |
| **Registration State** | required |
| **Given Name(s) \[firstname\]** | required |
| **Middle Name** | N/A |
| **Family Name \[lastname\]** | required |
| **Birth Date** | required |
| **Additional Notes** | Single name certificates are not verifiable. If the time of birth is displayed on a certificate, it must be included as displayed in order to achieve a positive result. |
| **\-** | \- |
| **State** | VIC |
| **Registration State** | required |
| **Given Name(s) \[firstname\]** | Required if available |
| **Middle Name** | N/A |
| **Family Name \[lastname\]** | required |
| **Birth Date** | required |
| **Additional Notes** | Single name certificates may be printed with a value denoting that the individual does not have a Given Name(s) or Family Name. Typically this will appear as ‘No Registered Surname’ or ‘No Registered Given Name’. If printed this value must be entered to achieve a positive result. Single name certificates may also be printed with a blank Given Name(s) or Family Name field; if there is no value printed on the certificate these can be verified by either entering a hyphen or leaving the field blank. |
| **\-** | \- |
| **State** | WA |
| **Registration State** | required |
| **Given Name(s) \[firstname\]** | required |
| **Middle Name** | N/A |
| **Family Name \[lastname\]** | required |
| **Birth Date** | required |
| **Additional Notes** | Single name certificates will be printed as one name value rather than Given Name(s) and Family Name values. The data should be entered into the Given Name(s) |

## Ensuring a successful address validation

Resellers should ensure that the address provided is the Registrant’s current Residential address (e.g. the one that appears on utility bills) and that all names and addresses are spelled correctly to minimize the possibility of failed validation requests.

The following sources are used to populate the database. As long as the address provided matches the one listed in one of these services, the check should pass without problems:

-   Electoral Roll (Historical)
-   Credit Bureau Commercial
-   Credit Bureau Public Record
-   National Tenancy Database
-   Equifax Phone Directory
-   Phone Directory

Please note that the check performed on the address is not a credit check. Only the Credit Header is checked to match the Name & Address against the file.

In case automated address validation should fail, Resellers can contact support providing proof that the address listed in the validation request is a 1:1 match to the Customer’s residential address. A copy of a utility bill or other document confirming the address should be provided, and the address listed on it MUST match exactly the one provided in the Validation request.

## Updating a validated contact handle

Please note that while it is possible to update the details in a validated contact handle, this will cause the handle to lose its “validated” status.

If the handle is associated with domains that are coming up for renewal, or if the customer wishes to use them for new registrations or trades, a new validation request must be submitted which will be charged as a new request.

## API Commands

### Command

```
command   = ValidateContact
contact = (TEXT) (in case the Reseller wants to add validation to an existing handle rather than creating a new one)
firstname = (TEXT)
middlename = (TEXT)
lastname  = (TEXT)
street0   = (TEXT)
city  	= (TEXT)
state  	= (TEXT)
zip   	= (TEXT)
country   = (COUNTRY) (must be AU)
phone 	= (PHONE)
email 	= (EMAIL)
REGISTRY = AU
X-AU-OWNER-IDTYPE = [INT] (see list below)
X-AU-OWNER-IDNUMBER =  [TEXT]
X-AU-OWNER-IDISSUER = [TEXT]
X-AU-OWNER-IDDATE = YYYY-MM-DD
X-AU-OWNER-DOB = YYYY-MM-DD
X-AU-OWNER-ACCEPT-VALIDATION-TERMS = 1 (required. The regulation requires us to obtain explicit consent from the user to validate their data)
```

### Response

```
[...]
property[x-au-validated] = [0|1]
property[x-au-validated-until] = YYYY-MM-DD
property[x-au-validation-hash] = xxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## QueryContactList

Additional parameter:

X-AU-VALIDATED=\*  
Shows all .AU validated handles, including failed ones.

X-AU-VALIDATED=0  
Shows .AU validated handles, with failed validation.

X-AU-VALIDATED=1  
Shows .AU validated handles, with successful validation.
