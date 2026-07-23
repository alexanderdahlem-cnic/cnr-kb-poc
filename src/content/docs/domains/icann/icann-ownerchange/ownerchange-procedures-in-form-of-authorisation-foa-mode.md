---
title: "OwnerChange in FOA-Mode"
description: "OwnerChange Procedures in Form Of Authorisation (FOA) Mode. ➥ Learn more!"
sidebar:
  order: 580
---

These procedures outline the technical OwnerChange process in FOA Mode.

1.  Request OwnerChange via ModifyDomain
    -   Otherwise: Use parameter TriggerDA=1 to follow the Designated Agent process.
2.  Send FOA Mail to Registrant
3.  Registrants approve OwnerChange via Link. The option for the Old Registrant to opt out of the 60-day transferlock will be displayed on the website, if applicable
4.  Send DOMAIN\_MODIFICATION::MODIFICATION\_SUCCESSFUL event to Reseller
5.  Send Confirmation Mail to Old and New Registrant
