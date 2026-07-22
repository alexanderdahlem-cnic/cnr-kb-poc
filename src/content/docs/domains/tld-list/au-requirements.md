---
title: ".AU Requirements"
---

## Requirements

Registration of domains directly under .au will be available to any business or individual that fulfils the Australian Presence requirements (see [https://www.auda.org.au/policy/au-domain-administration-rules-licensing](https://www.auda.org.au/policy/au-domain-administration-rules-licensing) and [https://www.auda.org.au/policy/au-domain-administration-rules-au-namespace-implementation](https://www.auda.org.au/policy/au-domain-administration-rules-au-namespace-implementation) for details).

There are no special restrictions or requirements on the string that can be applied for registration under .au (i.e. there is no requirement for the string to match a company name or a trademark\*, like it is the case for e.g. com.au).

\* PLEASE NOTE: only in the case an applicant not based in Australia uses an Australian Trademark to establish their Australian Presence, then the domain applied for must match the Trademark.

## AU Relationtype Table

This table shows the mapping of natural or legal persons (API parameter x-au-domain-relationtype) to the respective TLD (API parameter zone) in the API Extensions as specified by the Australian TLD administration auDA (.AU, .COM.AU, .NET.AU, .ASN.AU, .ID.AU). Affected are the transaction types addDomain, modifyDomain and tradeDomain.

[Mapping-File.pdf](https://kb.centralnicreseller.com/files/au-relationtype-table-22-02-23.pdf)

Valid as of 18/4/2023 07:00 UTC

## Important information on Availability checks for second level .AU domains

During the Priority Registration period that runs until September 20th, the RRPProxy API will forward the response from the Registry operator and return the following message when an availability check is performed on a 2nd level domain name:

-   If only one of the 3rd level domains is currently registered:

_211 Domain Name not available; Membership contact required_

-   If more than one of the 3rd level domains is currently registered (the 2nd level domain is in a contention set):

_211 Domain Name not available; Domain Name reserved by PRIORITY-ACCESS_

Unfortunately, the Registry returns the same code (211) both for domains that are unavailable/already registered and for those that are available but require a priority token in the application. We strongly recommend Resellers not to rely simply on the code received, but parse the entire response to get the accurate status of the domain that is being queried.

## Priority Registrations for Registrants of existing 3rd level .au domains (Grandfathering)

In the initial phase of the .au launch, Registrants of existing 3rd level .au domains will have a Priority right to register the corresponding string directly under .au.

During the first 180 days following the launch on March 24th, any string matching an existing 3rd level .au domain will be reserved in the Registry and unavailable for general registration. Only applicants with a Priority right will be able to apply to register the string under .au, using a special authentication token.

AuDA has divided Priority applicants in 2 categories, depending on when their 3rd level .AU domain was registered:

-   Priority category 1: 3rd level .AU Names with a creation date on or before February 4, 2018 at 23:59:59 UTC
-   Priority category 2: 3rd level .AU Names with a creation date after February 4, 2018 at 23:59:59 UTC and before March 23, 2022 at 23:59:59 UTC.

In those cases where more than one eligible Priority applicant exist, the 2nd level .AU domains will be allocated according to the following criteria:

-   Where there are Category 1 and Category 2 applicants, Category 1 applicants have priority over Category 2 applicants.
-   Where there are multiple Category 1 applicants, all Category 1 applicants must agree on the allocation. Domains for which an agreement cannot be reached, will remain reserved indefinitely, until a single applicant remains.
-   Where there are only Category 2 applicants, the name is allocated to the applicant whose 3rd level .AU domain has the earliest creation date in the .AU registry.

## Priority Registration Tokens

AuDA will make the Priority Registration Tokens available to the Registrars managing the 3rd level domain name.

This means that the Reseller submitting a priority registration order/pre-order does not need to obtain the Token from the Registrants if the 3rd level domain on which the priority application is based on is:

-   managed by RRPproxy at the time the application is submitted to AuDA
-   The 3rd level domain is managed by the Reseller that is submitting the application

For pre-orders, this check will take place in the days immediately prior to the launch date of March 24th 2022, in order to account for transfers/deletions of the 3rd level domain used to submit a priority application. Resellers should keep in mind that, while the RRPProxy system will accept any pre-orders submitted, any pre-order that does not meet the conditions above will be failed at that point.

Where the 3rd level domain is currently managed by a different Registrar/Reseller, the Registrant will need to obtain the Token from their current Registrar/Reseller, or directly from AuDA at [https://priority.auda.org.au](https://priority.auda.org.au)

The registrant receives a Priority Token and a Priority Contact ID. **The 'X-AU-PRIORITY-TOKEN' needs to be assembled by conjoining these two with a dash**:

<Priority Contact ID>-<Priority Token>

Example: m00100000773031-Au2BG3NX%VKc1SWc

## How to check the Priority status of a 3rd level domain

AuDA provides an online tool to allow existing Registrants to check the Priority status of their 3rd level .au domain and whether there are other competing applicants for the same string. After March 24th, the tool will also show whether an application for the matching 2nd level domain has been submitted/withdrawn/declined.

The tool is available at [https://www.auda.org.au/tools/priority-status-tool](https://www.auda.org.au/tools/priority-status-tool)

## Using a 3rd level ID.AU domain to claim Priority

Please note that due to the more stringent requirements for validation of Natural Persons applying for 2nd level .AU domains, customers using a 3rd level ID.AU domain to claim Priority for the corresponding 2nd level string will also need to complete the validation process of the Registrant handle (see section “Validation of Natural Persons applying to register a .AU domain name” below for more information).

## Important Information about Billing for .AU Priority Preorders

Please note that AuDA charges Priority Applications at the time they are submitted. In those cases where multiple applicants are eligible for the same string, the Registry will accept - and charge - every application that is submitted successfully. When the contention sets are resolved (see section above for details), the applications of the losing applicants will fail. The Registry will not issue any REFUNDS in these cases.

## How to ensure a smooth Priority application experience

In order to avoid unnecessary delays or errors, it is recommended that Registrants and Resellers confirm that the Registrant details on the 3rd level .au domain used to claim a priority right on a 2nd level .au domain are correct and up-to-date. If necessary, the Registrant details on the 3rd level domain should be updated before a pre-order for the 2nd level .au domain is submitted.

For details on how to perform this operation, see https://wiki.rrpproxy.net/domains/tlds/com.au

Please note that once a Priority application has been submitted to AuDA, it will not be possible to transfer or to perform any update to the Registrant details of the 3rd level domain used to claim the priority right until the 2nd level domain has been assigned.

## When will 2ld.au domains get allocated?

Eligible Priority Applicants have to exercise their priority right and actively submit an application within the 6 months of the Priority Application phase. Eligible Priority Applicants can also explicitly renounce their right to apply.

Generally speaking, the allocation of a reserved 2ld.au domain takes place once all eligible Priority Applicants have expressed their intentions.

When there is only one eligible Priority Applicant for a string, the domain name is immediately allocated to that Applicant.

Where there are multiple eligible Priority Applicants for a string, the name is allocated as soon as the contention is resolved.

In the case where there are only multiple Category 2 applicants, if the applicant with the 3rd level domain with the earliest registration date applies, the domain is allocated to them within the following 24 hours and any pending application from other Category 2 applicants is automatically rejected.

Please note that applicants and prospective applicants can also actively withdraw or decline their application on the AuDA portal where priority tokens can be requested.

![au\_registration\_process](https://kb.centralnicreseller.com/imagetypes/859w/image_manager__859w_au_registration_process.jpeg)

## General Availability applications

Any string that is not currently registered under one of the existing .au 3rd level extensions or otherwise reserved by the Registry will be available for registrations on a First-Come-First-Served basis from March 24th, 2022.

Any applicant fulfilling the Australian presence requirement can submit an order for any available .au string

## Validation of Natural Persons applying to register a .AU domain name

AuDA requires all Registrars to validate the details of anyone applying for a .au domain “using Reliable and Independent Electronic Data or valid identity documents” before submitting their application to the Registry systems.

For 3rd level extensions such as com.au that are restricted to Australian businesses, this type of validation is already built into the regular registration workflow, using the ABN/ACN numbers provided in the domain registration command.

As 2nd level .au domains are open also to Natural Persons, RRPProxy will need to perform validation of the applicant’s details before submitting their orders to the Registry.

Unlike ABN/ACN numbers lookups, these checks are not free. We are currently working on a separate paid validation service that Resellers can offer to their customers to validate a Contact Handle that can then be used to apply for one or more .au domains. More details on this validation service is available at [https://kb.centralnicreseller.com/services/au-validation-service-for-natural-persons](../../../services/au-validation-service-for-natural-persons/)

## How to submit pre-orders

PLEASE NOTE: After March 24th, regular General Availability registrations should be submitted with the "AddDomain" command. For Grandfathering applications, "AddDomainApplication" must be used until September 20th when the Priority phase ends.

Supported periods:

-   Priority preorders with multiple potential applicants: 1 year
-   Priority preorders with single applicants: 1-5 years
-   General availability preorders: 1-5 years

## Priority Registrations (Grandfathering)

To submit a preorder on behalf of a customer with a Priority right, the following additional fields should be included in the AddDomainApplication command:

| **CLASS** | AU-GRANDFATHERING |
| --- | --- |
| **X-AU-PRIORITY-TOKEN** | String |
|  | This field is optional when submitting the AddDomainApplication, and it is not required when the 3rd level domain on which the priority right is based is managed by RRPProxy and by the Reseller submitting the preorder (see section “Priority Registration Tokens” for more details). |
|  | Where the 3rd level domain is managed by a different Registrar/Reseller, this field needs to be populated with the Priority Token provided by AuDA to the Registrant using the ModifyDomainApplication command before March 24th, 2022 in order for the request to be submitted to the Registry. |
| **X-AU-GRANDFATHERING-TLD** | com.au|net.au|org.au|asn.au|id.au |
|  | This is the 3rd level extension of the domain on which the priority right is based. For instance, if you are applying for mydomain.au based on mydomain.net.au, you can fill the value “net.au” here. |
|  | It is very important that this field is filled in correctly for domains that are managed by RRPProxy and the Reseller, to ensure that we can import the Priority Token correctly. |
|  | Resellers should take extra care in ensuring that the Registrant details of the 3rd level domain are correct and match those submitted in the AddDomainApplication for the 2nd level domain. In case the same Registrant holds the domain in multiple 3rd level extensions, it is the responsibility of the Reseller that the domain with the highest Priority right is entered here. |
|  | This extension is required even in case only one 3rd level domain exists matching the string. |
| **X-AU-IMPORT-TOKEN** | (optional - Default 1) |
|  | When the 3rd level domain is managed by the Reseller through RRPProxy, we will automatically import the Priority Token to submit the application to the Registry. In case the Reseller does not wish for the token to be imported automatically, this field can be set to 0. In this case, the X-AU-PRIORITY-TOKEN field will need to be filled in with the Priority token obtained from AuDA. |
|  | If the 3rd level domain is managed by RRPProxy but on behalf of a Reseller other than the one submitting the order, this field will be ignored and the token will not be automatically imported even if the field is set to 1. |
|  | If the "X-AU-IMPORT-TOKEN", is set to "1" and the domain is with RRPProxy (and managed by the Reseller that submitted that pre-order), we will also populate any additional X-FLAGS required to submit the order correctly using the data from the corresponding 3rd level .au domain. |
|  | if "X-AU-IMPORT-TOKEN" is set to "0", we will obviously not attempt to import the token, even if the domain is with us. Furthermore, we will not attempt to populate any of the other X-FLAGS either. I.e. it is entirely up to the Reseller to ensure all the data is added correctly to the pre-order, including all the relevant X-FLAGS. |
| **X-AU-DOMAIN-IDTYPE and X-AU-DOMAIN-IDNUMBER** | these 2 fields need to be filled in with the same values used for the 3rd level domain on which the Priority application is based (e.g. if an ABN number was used to register the corresponding com.au domain, then the value ABN and the ABN number need to be added in these 2 fields). |
| **X-AU-DOMAIN-RELATIONTYPE** | see section “Valid Relation Type values” below for a list of possible values to use in this field. |
| **X-AU-DOMAIN-RELATION** |  |
|  | This indicates the relationship between the Eligibility Type (e.g. business name#) and domain name. Specify the Policy reference number as appropriate from the table below: |
|  | 1 - if the 2nd level domain name is an exact match, an acronym or abbreviation of the company or trading name, organisation or association name, or trademark. |
|  | 2 - if the 2nd level domain name is closely and substantially connected to the organisation or activities undertaken by the organisation. |
| **X-AU-OWNER-ORGANIZATION** | Registrant name (company name or person name in case of a private registration) |
|  | If X-AU-DOMAIN-IDTYPE = TM, the name of the trademark as found on https://search.ipaustralia.gov.au/trademarks/search/quick |

## AddDomainApplication command example:

As the domain owner contact needs to provide a valid Australian postal address, the below states (provinces) are valid for the state contact field:

-   VIC - Victoria
-   NSW - New South Wales
-   SA - South Australia
-   NT - Northern Territory
-   WA - Western Australia
-   TAS - Tasmania
-   ACT - Australian Capital Territory
-   QLD - Queensland
-   JBT - Jervis Bay Territory

### Command

```
command = AddDomainApplication
class = AU-GRANDFATHERING
domain = yourDomain.au
techcontact0 = (contact)
ownercontact0 = (contact)
admincontact0 = (contact)
billingcontact0 = (contact)
period = (INT)
nameserver0 = (nameserver)
nameserver1 = (nameserver)
X-AU-PRIORITY-TOKEN = (token)
X-AU-GRANDFATHERING-TLD = <com.au|net.au|org.au|asn.au|id.au>
X-AU-IMPORT-TOKEN = <1|0>
X-AU-DOMAIN-IDTYPE       = (TEXT)(mandatory if X-AU-DOMAIN-IDTYPE != PRIVATE)
X-AU-DOMAIN-IDNUMBER     = (TEXT)(mandatory)
X-AU-DOMAIN-RELATIONTYPE = (TEXT)(mandatory)
X-AU-DOMAIN-RELATION     = 1|2 (mandatory)
X-AU-OWNER-ORGANIZATION  = (TEXT)(mandatory)
```

## Go Live orders

To submit a registration order on behalf of a customer without a Priority right for a domain that is not reserved by the Registry, the following additional fields should be included in the AddDomain command:

| **X-AU-DOMAIN-IDTYPE** | (TEXT) |
| --- | --- |
|  | When the Registrant is an Australian business, accepted values here are ABN/ACN |
|  | When the Registrant is not based in Australia and uses an Australian Trademark to establish their Australian Presence, the TM number must be provided. |
|  | When the Registrant is a Natural person, the only accepted value here is “PRIVATE” |
| **X-AU-DOMAIN-IDNUMBER** | (TEXT) |
|  | When the Registrant is an Australian business, this field needs to contain the ABN/ACN number of the Registrant, in order to allow us to validate it before submitting the registration request to the Registry. |
|  | When the Registrant is not based in Australia and uses an Australian Trademark to establish their Australian Presence, this field should contain the value “TM".Please remember that the domain applied for must match the Trademark. |
|  | When the Registrant is a Natural person, this field can be left blank as the Registrant validation is handled through a separate product (see section “Validation of Natural Persons applying to register a .AU domain name” above). |
| **X-AU-DOMAIN-RELATIONTYPE** | See section “Valid Relation Type values” below for a list of possible values to use in this field. Please note that if you selected, then this field must contain the value “Citizen/Resident”. Please note that if you entered “PRIVATE” in the field X-AU-DOMAIN-IDTYPE, then this field must contain the value “Citizen/Resident” |
| **X-AU-DOMAIN-RELATION** |  |
|  | This indicates the relationship between the Eligibility Type (e.g. business name#) and domain name. Specify the Policy reference number as appropriate from the table below: |
|  | 1 - if the 2nd level domain name is an exact match, an acronym or abbreviation of the company or trading name, organisation or association name, or trademark. |
|  | 2 - if the 2nd level domain name is closely and substantially connected to the organisation or activities undertaken by the organisation. |
| **X-AU-OWNER-ORGANIZATION** | Registrant name (company name or person name in case of a private registration) |
|  | If X-AU-DOMAIN-IDTYPE = TM, the name of the trademark as found on https://search.ipaustralia.gov.au/trademarks/search/quick |

LIVE registration command is as follows:

### Command

```
command = AddDomain
domain = yourdomain.au
techcontact0 = (contact)
ownercontact0 = (contact)
admincontact0 = (contact)
billingcontact0 = (contact)
period = (INT)
nameserver0 = (nameserver)
nameserver1 = (nameserver)
X-AU-DOMAIN-IDTYPE       = (TEXT)(MANDATORY)
X-AU-DOMAIN-IDNUMBER     = (TEXT)(MANDATORY if X-AU-DOMAIN-IDTYPE != PRIVATE)
X-AU-DOMAIN-RELATIONTYPE = (TEXT)(MANDATORY)
X-AU-DOMAIN-RELATION     = 1|2 (MANDATORY)
X-AU-OWNER-ORGANIZATION  = (TEXT)(MANDATORY)
X-AU-ELIGIBILITY-NAME = <TEXT>
X-AU-ELIGIBILITY-IDNUMBER = <TEXT>
X-AU-ELIGIBILITY-IDTYPE = <TEXT>
```

## Modifying an existing Priority Order that is in pending status

Priority pre-orders that were submitted with incomplete data remain in pending status until the Reseller updates them adding the necessary details. This is typically the case for applications where the 3rd level domain is managed by another Registrar and the Reseller needs to obtain the Priority token from the Registrant.

Customers can modify applications submitted to RRPProxy before they are sent to AuDa using the ModifyDomainApplication command. For instance, this can be used to add the Priority token to the X-AU-PRIORITY-TOKEN field of a Priority application.

The extra fields for this command are the same as described above under AddDomainApplication. Additionally, the field “application” is required and should contain the ID of the application that the Reseller wishes to modify. This information is returned on a successful execution of the AddDomainApplication command or by querying the applications.

ModifyDomainApplication command example:

### Command

```
command = ModifyDomainApplication
class = AU-GRANDFATHERING
application = <ID>
X-AU-PRIORITY-TOKEN = <token>
X-AU-IMPORT-TOKEN = <1|0>
```

## Valid Relation Type values

The X-AU-DOMAIN-RELATIONTYPE field must be filled in with the relevant value from the list below:

-   Company
-   RegisteredBusiness
-   SoleTrader
-   Partnership
-   TrademarkOwner
-   PendingTMOwner
-   Citizen/Resident
-   IncorporatedAssociation
-   UnincorporatedAssociation
-   Club
-   Non-profitOrganisation
-   Charity
-   TradeUnion
-   IndustryBody
-   Commercial
-   StatutoryBody
-   PoliticalParty
-   Religious/ChurchGroup
-   Other
-   BodyServingOverseasStudents
-   ChildCareCentre
-   EducationandCareServices(ChildCare)
-   GovernmentBody
-   GovernmentSchool
-   HigherEducationInstitution
-   IndustryAssociation
-   NationalBody
-   Non-GovernmentSchool
-   ParentandProfessionalAssociation/Organisation
-   Pre-school
-   ProviderofNon-AccreditedTraining
-   ResearchOrganisation
-   TrainingOrganisation
