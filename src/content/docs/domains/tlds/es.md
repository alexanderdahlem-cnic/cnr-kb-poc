---
title: ".es"
description: "ccTLD  ● Registration Time: real-time ● Registration period: 1-5 years, 10 years ● Allowed character length: 3 - 63 characters  ➥ Learn more about .es"
tldspecsHtml: "<h2>TLD Specifications</h2> <div class=\"tldinfo\"> <div class=\"property\"> <div class=\"name\">Zone</div> <div class=\"description\">.es<div class=\"tldtype\"><span class=\"cctld\" title=\".es is a Country Code Top Level Domain\">ccTLD</span></div><!--/.tldtype--> </div> </div><!--/.property--> <div class=\"property country\"><div class=\"name\">Country</div><div class=\"description flag\"><img class=\"flag\" src=\"/cnr-kb-poc/media/dist/img/flags/es.png\" alt=\"Spain flag\"><a href=\"https://en.wikipedia.org/wiki/Spain\" rel=\"nofollow\" target=\"_blank\" title=\"https://en.wikipedia.org/wiki/Spain\">Spain</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration Time</div><div class=\"description\">real-time</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registration period</div><div class=\"description\">1-5 years<br>10 years<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal period</div><div class=\"description\">1-5 years<br>10 years<br></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed character length</div><div class=\"description\">3 - 63 characters</div></div><!--/.property--><div class=\"property\"><div class=\"name\">TLD supports</div><div class=\"description\"><div class=\"ipv6\"><span title=\".es supports IPv6\">IPv6</span></div><div class=\"dnssec\"><span title=\".es supports DNSsec\">DNSsec</span></div><div class=\"idn\"><span title=\".es supports IDN\">IDN</span></div></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Transfer locks possible</div><div class=\"description\"><span class=\"no\">no</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Renewal on transfer</div><div class=\"description\"><span class=\"no\">no</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Authcode length</div><div class=\"description\">6 - 16 characters</div></div><!--/.property--><div class=\"property handles\"><div class=\"name\">Handle updates</div><div class=\"description\"><span class=\"no\">no</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Preconfigured DNS</div><div class=\"description\"><span class=\"no\">no</span></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Allowed Nameservers</div><div class=\"description\">2 - 7</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Deletion Timeframe</div><div class=\"description\">7 days prior to paiduntil date</div></div><!--/.property--><div class=\"property\"><div class=\"name\">Redemption Period</div><div class=\"description\">10 days</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Update</div><div class=\"description\">6 times, every 4 hours</div></div><!--/.property--><div class=\"property\"><div class=\"name\">WHOIS Server</div><div class=\"description\"><a class=\"external\" href=\"https://www.dominios.es/en\" target=\"_blank\" rel=\"nofollow\" title=\"https://www.dominios.es/en\">https://www.dominios.es/en</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Web WHOIS</div><div class=\"description\"><a class=\"external\" href=\"http://www.nic.es\" target=\"_blank\" rel=\"nofollow\" title=\"http://www.nic.es\">http://www.nic.es/</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry</div><div class=\"description\"><a class=\"external\" href=\"http://www.nic.es/\" target=\"_blank\" rel=\"nofollow\" title=\"http://www.nic.es/\">http://www.nic.es/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Terms and Conditions</div><div class=\"description\"><a class=\"external\" href=\"https://www.dominios.es/dominios/en/todo-lo-que-necesitas-saber/sobre-registros-de-dominios/terms-and-conditions\" target=\"_blank\" rel=\"nofollow\" title=\"https://www.dominios.es/dominios/en/todo-lo-que-necesitas-saber/sobre-registros-de-dominios/terms-and-conditions\">https://www.dominios.es/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Dispute Policy</div><div class=\"description\"><a class=\"external\" href=\"http://www.dominios.es/dominios/en/\" target=\"_blank\" rel=\"nofollow\" title=\"http://www.dominios.es/dominios/en/\">http://www.dominios.es/...</a></div></div><!--/.property--><div class=\"property\"><div class=\"name\">Registry Connection</div><div class=\"description\"><div class=\"accreditation\"><span title=\"Directly accredited\">Directly accredited</span></div></div></div><!--/.property--> </div><!--/.tldinfo-->"
---

:::tldnav

- [API commands](#api-commands)
- [Extensions](#domain-extensions)
- [Restrictions](#domain-restrictions)
- [IDN](#idn-information)

:::

### Database clean-up process

  

Red.es, the registry for the Spanish .es TLD, have established a database clean-up process in cooperation with the National Cybersecurity Institute of Spain (INCIBE).

INCIBE is carrying out specific analyses for all registered .es domain names in order to identify those with reasonable indications regarding inaccurate or false information in the domain owner identifier data such as the VAT ID. INCIBE provides the registry with lists of such conspicuous .es domains. Red.es checks the reports and if there is verified evidence, the clean-up process for the affected .es domain will be initiated consisting of these phases:

-   Initial e-mail notification to the registrar, domain owner and admin contact informing that deficiencies have been found in the registration data of the domain name and granting a period of 3 calendar days to make the necessary corrections. The registry intends to send the clean-up process notices during the first weekdays.  
    
-   If no corrections are made within the time allowed, the three-step Special Cancellation Procedure will be initiated  
      
    1\. sending a reminder to the registrant with the request to correct the data,  
    2\. deactivation of the .es domain in the DNS (after 10 days),  
    3\. deletion of the .es domain (after 20 more days).  
      
    It is still possible to correct the data during the cancellation procedure.

  

[Flowchart of Clean Up process](https://kb.centralnicreseller.com/files/image001.png)

## API commands

Please find in the following a set of the most commonly used standard API commands in order to register, modify, renew, and transfer a domain name.

:::commandlist

- [AddDomain](#domain-registration)
- [ModifyDomain](#domain-modification)
- [RenewDomain](#domain-renewal)
- [DeleteDomain](#domain-deletion)
- [TransferDomain](#domain-transfer)
- [RestoreDomain](#domain-restore)

:::

### Domain Registration

_(API Command reference » [AddDomain](../../../api/api-command/adddomain/))_ 

:::exception[Exception]

```text
command         = AddDomain
domain          = yourdomain.es
period          = (INT)
ownercontact0   = (CONTACT)
admincontact0   = (CONTACT)
techcontact0    = (CONTACT)
billingcontact0 = (CONTACT)
nameserver0	= (NAMESERVER)
nameserver1 	= (NAMESERVER)
X-ES-OWNER-TIPO-IDENTIFICACION   = 0 | 1 | 3
X-ES-ADMIN-TIPO-IDENTIFICACION   = 0 | 1 | 3
X-ES-TECH-TIPO-IDENTIFICACION    = 0 | 1 | 3
X-ES-BILLING-TIPO-IDENTIFICACION = 0 | 1 | 3
​​​​​​​X-ES-OWNER-IDENTIFICACION        = (TEXT)
X-ES-ADMIN-IDENTIFICACION        = (TEXT)
X-ES-TECH-IDENTIFICACION         = (TEXT)
X-ES-BILLING-IDENTIFICACION      = (TEXT)
X-ES-OWNER-LEGALFORM             = (INT)
X-ES-ADMIN-LEGALFORM             = 1
X-ES-TECH-LEGALFORM              = 1
X-ES-BILLING-LEGALFORM           = 1
```

:::

### Domain Modification

_(API Command reference » [ModifyDomain](../../../api/api-command/modifydomain/))_ 

:::command[Standard command]

```text
command = ModifyDomain
domain  = yourdomain.es
```

:::

#### Requesting an AuthCode (for Transfer purpose)

:::exception[Exception]

```text
command = ModifyDomain
domain  = yourdomain.es
X-ES-REQUESTAUTHCODE = 1
```

:::

This command will trigger a generation of an AuthCode, which will be available for 10 days, on the StatusDomains response. This AuthCode shall be used with TransferDomain command.

#### Change of registrant

:::exception[Exception]

```text
command         = TradeDomain
domain          = yourdomain.es
ownercontact0   = (CONTACT)
admincontact0   = (CONTACT)
X-ES-OWNER-TIPO-IDENTIFICACION   = 0 | 1 | 3
X-ES-ADMIN-TIPO-IDENTIFICACION   = 0 | 1 | 3
X-ES-OWNER-IDENTIFICACION        = (TEXT)
X-ES-ADMIN-IDENTIFICACION        = (TEXT)
X-ES-OWNER-LEGALFORM             = (INT)
X-ES-ADMIN-LEGALFORM             = 1
```

:::

As a response of the above command, you will receive the NIC handles for the new holder-, new admin-, new billing- and new tech-contact which are necessary to start the registrant transfer in the web-interface of the registry.

1.  [Login at the registry](https://www.nic.es/sgnd/login.action?tipoContactoElegido=1&nivelDominio=2) with the credentials of the current admin contact
    1.  Request the login details from your customer for the admin contact of the domain at the registry webinterface or, if not available, perform a WhoIs request at the NIC to receive the contact handle name (Identificador) of the admin contact (PERSONA DE CONTACTO ADMINISTRATIVO) [https://www.nic.es/index.action](https://www.nic.es/index.action)
    2.  If the password, related to the registry contact handle, for the login at the registry is not known, you can [request the password from the registry](https://www.nic.es/sgnd/contacto/passRecoverInicializar.action?tContacto.nic). The password will be sent to the email address of the current admin contact
    3.  Request the password from the holder of the domain for the admin contact's handle
    4.  Please request a trade for the domain in our system, stating the new holder and new admin contact (see above example)
2.  Once you are logged in the webinterface click on "Solicitud Transmisión de dominio" (Domain Transfer Request)
    1.  Enter the domain name
    2.  Enter the new owner contact handle "Titular nuevo"
    3.  Enter the new admin contact handle "PCA nuevo"
    4.  Enter the captcha and press "Continuar"
    5.  (next page)
    6.  Press "Tramitacion si DNIe Certificado ..."
    7.  Enter the path to the ID / Passport copy from the current admin contact of the domain and press "Finalizar solicitud"

_Please note that the file has to be a .JPG with a maximum of 2MB and a maximum of 600px!_

-   The new admin contact will receive an email from the registry enabling him to confirm or cancel the transfer request after he logged in to the webinterface of the registry.
    -   If the request is approved it must be confirmed by going to the link which appears in the email. Please note, to access the confirmation form the admin contact must be logged into the NIC web interface.
    -   To redeem the login credentials please see above.
    -   Once the transfer request has been accepted, the web interface will display the content of the request so that the information entered can be checked and the request can be signed by uploading a copy of the ID card or passport.
    -   Press "Tramitación sin DNIe/Certificado (Debe adjuntar fotocopia de su documento de identidad)"
    -   Once the transfer has been confirmed a form will appear "New registrant's conditions acceptance" on which new contacts and DNS and other parameters can be entered. With the exception of "Accredited Registrar" which must be set to "KEY-SYSTEMS", please do not change anything else as this may cause un-synchronicity to the RRPproxy system.
    -   After you have chosen "KEY-SYSTEMS" as registrar please click "Next".
    -   Once the document has been signed a screen will appear showing a summary of the request and there will be a change of status.
-   After the trade has been approved by the current admin contact and the new admin contact the change of registrant needs to be confirmed by Key-Systems, acting as old and new registrar.

#### Update admin contact if required

:::exception[Exception]

```text
command                        = ModifyDomain
domain                         = yourdomain.es
admincontact0                  = (CONTACT)
X-ES-OWNER-TIPO-IDENTIFICACION = 0 | 1 | 3
X-ES-ADMIN-TIPO-IDENTIFICACION = 0 | 1 | 3
X-ES-OWNER-IDENTIFICACION      = (TEXT)
X-ES-ADMIN-IDENTIFICACION      = (TEXT)
X-ES-ADMIN-LEGALFORM           = 1
```

:::

Since Red.ES checks the ID card number of the admin contact, it might be required to update the admin contact prior to the change of registrant.

### Domain Renewal

_(API Command reference » [RenewDomain](../../../api/api-command/renewdomain/))_ 

:::command[Command]

```text
command    = RenewDomain
domain     = yourdomain.es
period     = (INT)
expiration = (INT)
```

:::

### Domain Deletion

_(API Command reference » [DeleteDomain](../../../api/api-command/deletedomain/))_ 

:::command[Command]

```text
command = DeleteDomain
domain = yourdomain.es
```

:::

-   The deletion is initiated through our system.
-   The Admin-C (PCA) receives an email from the registry with 2 links (Approve/Cancel) where he is asked to approve the deletion.
-   The Admin-C has 10 days time to approve or cancel the deletion.

### Domain Transfer

_(API Command reference » [TransferDomain](../../../api/api-command/transferdomain/))_ 

:::exception[Exception]

```text
command = TransferDomain
domain  = yourdomain.es
action  = request
auth    = .......
```

:::

  

An .es domain transfer must be initiated with a so-called authorisation code by the new registrar and Admin contact of the domain must approve or reject the request with in 10 days, via the link provided for this purpose in the notification email sent by the registry.

Auth-codes can only be generated by the registry. To trigger the generation of a new auth-code, please use the command below.

#### Request New Auth-Code

:::exception[Exception]

```text
command              = ModifyDomain
domain               = yourdomain.es
X-ES-REQUESTAUTHCODE = 1
```

:::

The new .es auth-code will be given on the response, will be valid for 10 days, and it will also be available on StatusDomain response during that time.

### Domain Restore

_(API Command reference » [RestoreDomain](../../../api/api-command/restoredomain/))_ 

:::command[Command]

```text
command = RestoreDomain
domain  = yourdomain.es
```

:::

The restore request will be manually processed by our support team. You will be notified by email.

## Domain Extensions

| X-ES-(OWNER|ADMIN|TECH|BILLING)-IDENTIFICACION | ID card or passport number of the admin (You may create contacts for Spanish citizens using their passport. In this case you should indicate “Others” as type of Identification Document and include the passport number. Please remember that, in the event that the User may request a change of registrant, they should sign it with the copy of their passport.) |
| --- | --- |
| X-ES-(OWNER|ADMIN|TECH|BILLING)-TIPO-IDENTIFICACION | 0 | 1 | 3  
| **0** | _other (for contacts outside Spain)_ |
| --- | --- |
| **1** | _DNI/NIF (for spanish contacts)_ |
| **3** | _NIE (ID number for foreigners in Spain, composed of a letter at the beginning (usually X or Y), 7 numbers and a final letter, not hyphenated)_ |

 |
| X-ES-ADMIN-LEGALFORM | 1  
  
Individual |
| X-ES-BILLING-LEGALFORM | 1  
  
Individual |
| X-ES-OWNER-LEGALFORM | Individual or Legal Entity  
  
Valid values are:  

| **1** | _Individual_ |
| --- | --- |
| **39** | _Economic Interest Group_ |
| **47** | _Association_ |
| **59** | _Sports Association_ |
| **68** | _Professional Association_ |
| **124** | _Savings Bank_ |
| **150** | _Community Property_ |
| **152** | _Community of Owners_ |
| **164** | _Order or Religious Institution_ |
| **181** | _Consulate_ |
| **197** | _Public Law Association_ |
| **203** | _Embassy_ |
| **229** | _Local Authority_ |
| **269** | _Sports Federation_ |
| **286** | _Foundation_ |
| **365** | _Mutual Insurance Company_ |
| **434** | _Regional Government Body_ |
| **436** | _Central Government Body_ |
| **439** | _Political Party_ |
| **476** | _Trade Union_ |
| **510** | _Farm Partnership_ |
| **524** | _Public Limited Company_ |
| **525** | _Sports Association_ |
| **554** | _Civil Society_ |
| **560** | _General Partnership_ |
| **562** | _General and Limited Partnership_ |
| **566** | _Cooperative_ |
| **608** | _Worker-owned Company_ |
| **612** | _Limited Company_ |
| **713** | _Spanish Office_ |
| **717** | _Temporary Alliance of Enterprises_ |
| **744** | _Worker-owned Limited Company_ |
| **745** | _Regional Public Entity_ |
| **746** | _National Public Entity_ |
| **747** | _Local Public Entity_ |
| **877** | _Others_ |
| **878** | _Designation of Origin Supervisory (only for contacts outsight of Spain) Council_ |
| **879** | _Entity Managing Natural Areas_ |

 |
| X-ES-TECH-LEGALFORM | 1  
  
Individual |

## Domain Restrictions

-   Admin-, Tech- and Billing- contact have to be a natural person
-   Since 2010 it is no longer possible to change the contact information of the domain holder trough a registrar.
    -   The domain holder has to login at the registry with his NIC handle (can be found in whois information). The password can be recovered here: [https://www.nic.es/sgnd/contacto/passRecoverInicializar.action?tContacto.nic](https://www.nic.es/sgnd/contacto/passRecoverInicializar.action?tContacto.nic). The domain holder will then receive an email with his credentials.
-   The email address of the domain holder and admin contact can only be changed by the respective contact at the registry directly.

The SGND the list of reserved terms consisting of names of toponyms that coincide with the official denomination of the Territorial Public Administrations can be found here (https://www.dominios.es/sites/dominios/files/2021-08/toponimos\_20210212.pdf).

These names are put on hold when registrations are submitted, the applications are rejected if requirements are not met. Anyone can submit a registration so it's not blocked. However the eligibility criteria is as follows:

The owner of the domain must be the Territorial Public Administration, the constitutional body, the State Institution or the international or supranational organisation, legitimised to request the domain name in accordance with the list of reserved terms, approved by Instruction of the President of the Public Business Entity Red.es dated 12 September 2005.

Only legal persons/ organisations can register these reserved domains. The organisation name must match the reserved names/ include the reserved name I believe.

Once registrations are submitted, the order goes into 'PDOC'/ Pending Documentation status. If documents are not submitted within 10 days the registration will be cancelled.

Documents that are submitted are reviewed by their team within 24-48hrs (as confirmed by phone).

Documents required:

-   Documentation accrediting that the holder is the Territorial Public Administration, constitutional body, State Institution or international or supranational body, legitimised to request the domain name in accordance with the list of reserved terms, approved by Instruction of the President of the Public Business Entity Red.es dated 12 September 2005.

FOR NIF (TAX number)

-   Copy of the holder's Tax Identification Card.

## IDN Information

á, à, é, è, í, ï, ó, ò, ú, ü, ñ, ç and ·
