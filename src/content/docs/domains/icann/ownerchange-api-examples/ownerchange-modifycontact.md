---
title: "OwnerChange: ModifyContact"
description: "Material change with modify contact. For handles which are linked as owner with a GTLD, \"ownerchange status = REQUESTED\" is returned, indicating that the IRTP p"
sidebar:
  order: 690
  label: "ModifyContact"
---

Material change with modify contact.

For handles which are linked as owner with a GTLD, "ownerchange status = REQUESTED" is returned, indicating that the IRTP process is started. This will happen, if at least one 'material' field is modified. Non material changes can still be done without triggering the IRTP process.

:::command[Command]

```text
command = ModifyContact
contact = P-ABC1
firstname = Max
lastname = Mustermann
organization = Example Inc
email = mail@example.com
```

:::

 

:::response[Response]

```text
code = 200
description = Command completed successfully
property[ownerchange status][0] = REQUESTED
```

:::

### ModifyContact checkonly: Material change

:::command[Command]

```text
command=ModifyContact
contact=P-ABC1
email=notverified21@ks.de
checkonly=1
```

:::

 

:::response[Response]

```text
code = 200
description = Command completed successfully; Check only
runtime = 0.028
queuetime = 0
property[ownerchange status][0] = REQUESTED
property[validated][0] = 1
```

:::

### ModifyContact checkonly: No Material change

:::command[Command]

```text
command=ModifyContact
contact=P-ABC1
email=notverified22@ks.de
checkonly=1
```

:::

 

:::response[Response]

```text
code = 200
description = Command completed successfully; Check only
runtime = 0.028
queuetime = 0
property[validated][0] = 1
```

:::
