---
title: "Account Premium Domain Settings"
description: "The premium domain settings can be found in the WI under Account → Settings → Premium Domain. There are two parameters available: active and allow-simplemode."
---

The premium domain settings can be found in the CP under Account -> Settings -> Premium Domain. There are two parameters available: active and allow-simplemode. Both parameters can be set to 1|0 (ON|OFF), but the allow-simplemode parameter can only be set to ON if active is set to ON. The default value for active and allow-simplemode are 0 (OFF). Setting the paramter active to 1 (ON) enables the handling of premium domain names using the API FEE parameters. Setting the parameter allow-simplemode to 1 (ON) enables the handling of premium domain names using the X-ACCEPT-PREMIUMPRICE=1 parameter. Setting the parameter active to 0 (OFF) can be done at any time. Already existing premium domain names will not be affected, because automatic renewals will still work for them.
