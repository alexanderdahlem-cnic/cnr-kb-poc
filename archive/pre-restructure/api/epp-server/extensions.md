---
title: "EPP Server Extensions"
description: "A lot of TLDs require additional information to be send to their system. To handle this we had to add EPP extensions to facilitate all the extra informations."
---

## General

A lot of TLDs require additional information to be send to their system. This might be needed for contact validations or other special settings which are not covered by the RFCs. To handle this we had to add EPP extensions to facilitate all the extra informations. Please find below an example of how the extensions must be set up.

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;extension&gt;
 &lt;keysys:create xmlns:keysys=http://www.key-systems.net/epp/keysys-1.0&gt;
   &lt;keysys:domain&gt;
     &lt;keysys:it-pin&gt;DE1234567912&lt;/keysys:it-pin&gt;
   &lt;/keysys:domain&gt;
 &lt;/keysys:create&gt;
&lt;/extension&gt;</code></pre></div>

## Details

In general when using extensions the first 2 characters (X-) must be removed. I.e: X-FR-BIRTHCITY must be given as FR-BIRTHCITY. One more important information: The extensions MUST be added in alphabetical order! The extensions can also be used when receiving the EPP responses. In order to receive the extensions in the response messages you must indicate this while connecting to our EPP-Server. Especially when retrieving responses to Info commands you will need the extensions to get all information. To do so the Key-Systems schema must be send while connecting (also see login command):

<div class="api-io api-io--command"><span class="api-io__label">Command</span>
<pre class="api-io__code"><code>&lt;svcExtension&gt;
 &lt;extURI&gt;http://www.key-systems.net/epp/keysys-1.0&lt;/extURI&gt;
&lt;/svcExtension&gt;</code></pre></div>


