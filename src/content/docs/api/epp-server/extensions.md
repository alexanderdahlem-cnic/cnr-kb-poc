---
title: "EPP Server Extensions"
description: "A lot of TLDs require additional information to be send to their system. To handle this we had to add EPP extensions to facilitate all the extra informations."
sidebar:
  order: 40
  label: "Extensions"
---

## General

A lot of TLDs require additional information to be send to their system. This might be needed for contact validations or other special settings which are not covered by the RFCs. To handle this we had to add EPP extensions to facilitate all the extra informations. Please find below an example of how the extensions must be set up.

:::command[Command]

```text
<extension>
 <keysys:create xmlns:keysys=http://www.key-systems.net/epp/keysys-1.0>
   <keysys:domain>
     <keysys:it-pin>DE1234567912</keysys:it-pin>
   </keysys:domain>
 </keysys:create>
</extension>
```

:::

## Details

In general when using extensions the first 2 characters (X-) must be removed. I.e: X-FR-BIRTHCITY must be given as FR-BIRTHCITY. One more important information: The extensions MUST be added in alphabetical order! The extensions can also be used when receiving the EPP responses. In order to receive the extensions in the response messages you must indicate this while connecting to our EPP-Server. Especially when retrieving responses to Info commands you will need the extensions to get all information. To do so the Key-Systems schema must be send while connecting (also see login command):

:::command[Command]

```text
<svcExtension>
 <extURI>http://www.key-systems.net/epp/keysys-1.0</extURI>
</svcExtension>
```

:::
