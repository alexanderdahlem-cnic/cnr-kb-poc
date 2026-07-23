---
title: "Registry account management system"
description: "Due to the registry account management system (RAM) no regular accountings for domains will be charged in the RRPproxy. In most cases the registrar..."
sidebar:
  order: 350
  label: "RAM"
---

Due to the registry account management system (RAM) no regular accountings for domains will be charged in the CentralNic Reseller. In most cases the registrar will only be charged a handling fee which is the same regardless if it is a premium domain name or not. So if the fee extension in the CentralNic Reseller would only return the handling fee the RAM registrar would not be able to determine if the checked domain is a premium domain and how much the domain name really costs at the registry. To avoid this issue we decided to forward the registry premium domain price in the fee extension for premium domain names in RAM. Then the registrar will recieve the registry price for the premium domain name in the CentralNic Reseller fee extension and will require to use this amount in the handshake process for the create domain call. However we will of course only charge the regular domain handling fee in the CentralNic Reseller for that premium domain name.

**Registry Info**

Some registries offer premium domain names using lists which they provide to the registrars. In case of RAM we offer a set of API commands for the registrar to manage premium domain names for that specific RAM TLD. In case of RAM we will not manage those lists for the registrar, since this is mostly a manual process changes of the premium domain lists at the registry could be overseen or updated with a delay and we will not take responisbility for that.
