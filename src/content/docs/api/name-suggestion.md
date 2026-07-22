---
title: "Name Suggestion"
description: "The tool generates alternative domain names to a given domain name or sequences/lists of terms. ➥ Learn more!"
---

This service is an integration of Verisign’s Name Suggestion API 2.0. Since Verisign is currently running its service in a beta phase, results might not always be complete or make sense. In case of errors or undesirable results, we’re collecting and reporting them to Verisign.

The tool generates alternative domain names to a given domain name or sequences/lists of terms. An availability check is directly performed for the generated results, but only for TLDs supported by Verisign. Currently these TLDs are limited to those directly offered by Verisign, i.e. .COM, .NET, .CC and .TV. For all other TLDs the availability will usually be stated as “unknown”.

For the generation of alternatives Verisign is using several different algorithms which usually refer to a given language.

It’s possible to individually query these different algorithms or to use an universal function, which incorporates a mix of the different algorithms.

## CentralNic Reseller API Implementation

The Verisign Name Suggestion has been integrated (nearly) 1:1 and offers a wide variety of options. For this purpose we have integrated the API Command GetNameSuggestion. Using the parameter TYPE offers to call different functions of the name suggestion API. Per default we’re using the following values in case these are not stated explicitly.

The only mandatory field is NAME for which alternative suggestions shall be generated. The parameters of the command GetNameSuggestion are depending on the respective TYPE, since parameter vary slightly depending on the selected TYPE. Also, depending on the selected TYPE the response varies. Thus this API documentation for GetNameSuggestion is always in context with a relevant TYPE.

```
Type: Suggest
Language: English
TLDs: com,de,net,org,ch,info,co.uk,es,com.br,eu
IDN: yes
Numbers: yes
Dashes: yes
Content Filter: no
Unavailable Domains: no
Maximum Length: 63 characters
Maximum Results: 30
```

## GetNameSuggestion

Parameter Explanation

| **NAME** | Main parameter for suggestions, prefix, suffix, segment, personal names, alternatives |
| --- | --- |
| **LANGUAGE** | The language for the NAME parameter |
| **TLD0** | List of TLDs for alternatives and availability checks |
| **...** |  |
| **TLD255** | E.g. TLD0 = COM, TLD1 = DE, etc. |
| **USE-NUMBERS** | Alternatives may (1) or will not (0) contain numbers |
| **USE-IDNS** | Alternatives may (1) or will not (0) contain IDN characters |
| **USE-DASHES** | Alternatives may (1) or will not (0) contain dashes (“-“) |
| **FILTER-CONTENT** | (1) Excludes sensitive content from the suggested results |
| **SHOW-UNAVAILABLE** | (1) Also shows registered domains in response |
| **MAX-LENGTH** | Maximum length of generated results (3-63) |
| **MAX-RESULTS** | Maximum number of results (1-99) |
| **IPADDRESS** | Include suggestions based on the approximate geolocation of the provided IP address |
| **USE-SEPARATOR** | Dash (“-“) will be used as separator in results |
| **POSITION** | Position of the word for selective word suggestion. 0 for NAME0, 1 for NAME1, etc. |

### TYPE SUGGEST

This is the standard API function which combines all other functions (prefix, suffix, spin, etc.) and shows various results using different algorithms.  
Integrated as standard function in CentralNic Reseller.

### Command

```
COMMAND = GetNameSuggestion
NAME = [TEXT]
(optional)
TYPE = SUGGEST
LANGUAGE = ENG|SPA|ITA|JPN|TUR|CHI|GER|POR|FRE|KOR
TLD0...255 = [ZONE]
IPADDRESS = [IPADDRESS]
USE-NUMBERS = 0|1
USE-IDNS = 0|1
USE-DASHES = 0|1
FILTER-CONTENT = 0|1
SHOW-UNAVAILABLE = 0|1
MAX-LENGTH = 3-63
MAX-RESULTS = 1-99
```

### Response

```
property[NAME][n] =
property[AVAILABILITY][n] =
```

### TYPE SEGMENT

Segments a given name into single words, if possible.  
Example: iamthelaw -> i, am, the, law

### Command

```
COMMAND = GetNameSuggestion
TYPE = SEGMENT
NAME = [TEXT]
(optional)
LANGUAGE = ENG|SPA|ITA|JPN|TUR|CHI|GER|POR|FRE|KOR
```

### Response

```
property[SEGMENTEDNAME][n] =
```

### TYPE PREFIX/SUFFIX

Adds both syntactically and semantically relevant prefixes or suffixes for domain name suggestions.  
Examples: prefixsearchstring.com or searchstringsuffix.com

### Command

```
COMMAND = GetNameSuggestion
TYPE = PREFIX|SUFFIX
NAME = [TEXT]
(optional)
LANGUAGE = ENG|ITA|JPN|GER|POR|FRE
TLD0...255 = [ZONE]
USE-NUMBERS = 0|1
USE-IDNS = 0|1
FILTER-CONTENT = 0|1
SHOW-UNAVAILABLE = 0|1
MAX-LENGTH = 3-63
MAX-RESULTS = 1-99
USE-SEPARATOR = 0|1
```

### Response

```
property[NAME][n] =
property[PREFIX|SUFFIX][n] =
property[AVAILABILITY][n] =
```

### TYPE SPINWORD

Provides syntactically and semantically relevant alternatives for one specific word of a list of at last 2 and up to 10 words.

### Command

```
COMMAND = GetNameSuggestion
NAME0 || NAME = [TEXT]
TYPE = SPINWORD
(optional)
NAME1 ... NAME10 = [TEXT]
LANGUAGE = ENG|ITA|JPN|GER|POR|FRE
TLD0...255 = [ZONE]
USE-NUMBERS = 0|1
USE-IDNS = 0|1
FILTER-CONTENT = 0|1
SHOW-UNAVAILABLE = 0|1
MAX-LENGTH = 3-63
MAX-RESULTS = 1-99
USE-SEPARATOR = 0|1
POSITION = [INT]
```

### Response

```
property[NAME][n] =
property[AVAILABILITY][n] =
```

### TYPE PERSONALNAME

This function specifically generates alternatives for personal names.

### Command

```
COMMAND = GetNameSuggestion
NAME or FIRSTNAME = [TEXT]
TYPE = PERSONALNAME
(optional)
MIDDLENAME = [TEXT]
LASTNAME = [TEXT]
LANGUAGE = ENG|ITA|JPN|GER|POR|FRE
TLD0...255 = [ZONE]
USE-NUMBERS = 0|1
USE-IDNS = 0|1
USE-DASHES = 0|1
FILTER-CONTENT = 0|1
SHOW-UNAVAILABLE = 0|1
MAX-LENGTH = 3-63
MAX-RESULTS = 1-99
SPIN-FIRSTNAME = 0|1
```

### Response

```
property[NAME][n] =
property[AVAILABILITY][n] =
```
