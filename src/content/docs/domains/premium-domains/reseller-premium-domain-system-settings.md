---
title: "Reseller Premium Domain System Settings"
---

The premium domain system settings can only be set if there is an active subreseller system and if the registrar is either the rootuser (or registry user in KSRegistry) or his parent user has also activated the premium domain system. They can be found in the CP under Subreseller -> Settings -> Premium Domain System.

Here you can activate the premium domain system for your subresellers by setting "active" to 1 (on). Afterwards the premium domain settings show up for subresellers in the CP under Account -> Settings -> Premium Domain where they can activate the FEE parameters or simple mode for their account.

Be aware that is not possible to deactivate the premium domain system later on as long as a subreseller has an active premium domain setting.

When setting the premium domain system to active you can enter a formula that will be used to calculate the sell prices for premium domain names for you subresellers.

These formula consists of a currency, amount values (1 to 9) and percentage values (0-9). Here you can add a percent value that will be added to the price for different categorys. If no formula is entered the system just passes the original premium domain price without price increase (if active is set to 1 (on)).

The table below shows an example for the formula(currency: USD). This would add an increase of 20% to all prices that sarting 0 and up all amounts smaller 50 USD, 15% for prices sarting with 50 and smaller 200 USD and 10% for everyting sarting with 200 USD.

Note that this applies to each price separately not the total amount! (setup, unit, transfer, trade, restore, application).

**value (in currency)**

percentage (added to price)

**\>=0**

20%

**\>=50**

15%

**\>=200**

10%
