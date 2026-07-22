---
title: "Contact Verification: EPP server"
description: "EPP Contact verification: ● Add/ModifyContact ● StatusContact ● StatusDomain ● AddDomain ● ModifyDomain ➥ Learn more!"
---

## contact:create / contact:update

### Command

```
...
</create>
<extension>
<keysys:create xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0">
 <keysys:contact>
  <keysys:checkonly>1</keysys:checkonly>
  <keysys:preverify>1</keysys:preverify>
  <keysys:validation>1</keysys:validation>
 </keysys:contact>
</keysys:create>
</extension>
...
```

## contact:info

add extension to response

### Command

```
...
</resData>
<extension>
 <keysys:resData xmlns:keysys="http://www.key-systems.net/epp/keysys-1.0">
 <keysys:contactInfData>
  <keysys:validated>1</keysys:validated>
  <keysys:verification-requested>1</keysys:verification-requested>
  <keysys:verified>0</keysys:verified>
 </keysys:contactInfData>
 </keysys:resData>
</extension>
...
```

## domain:info

add extension to response: TIME-TO-SUSPENSION

## domain:create

add extension to response: TIME-TO-SUSPENSION

## domain:update

add extension to response: TIME-TO-SUSPENSION
