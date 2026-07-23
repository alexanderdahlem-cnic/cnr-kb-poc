---
title: "Permissions for ACL Users & Groups"
sidebar:
  order: 1730
  label: "ACL Permissions"
---

How does it work?

The ACL - short for Access Control List - specifies which actions on certain objects a user is allowed to conduct.

## ACL in the control panel

The most simple way to manage the ACL for your CentralNic reseller account is via the control panel. You can access the ACL settings via the user menu by clicking on your login name on the upper right -> User management. Here you can find full lists of all existing users and groups in your account allowing direct access to their permissions.

The list of objects and the respective operations is derived from the API structure, although the operations are grouped into the 3 categories read, write and delete for the purpose of simplification. The user ACL apply to both the control panel and the API. Note that in order to be able to use the control panel, a certain set of rights is mandatory!

## ACL via API

ACL can be managed via API through several commands:

| **AddAcl** | Add location rights for a given user or group. |
| --- | --- |
| **ModifyAcl** | Modify location rights for a given user or group. |
| **DeleteAcl** | Remove location rights for a given user or group. |
| **StatusAcl** | Shows granted rights for a specific location of a given user or group. |
| **QueryACLList** | Shows all locations with granted rights of a given user or group. |

## Locations and Rights

-   "locations" defines a specific set of objects, such as DOMAIN.
-   "rights" defines allowed operations that are allowed on a given object.

Each right can be granted to each location. Each user and each group has its own rights for each location. Rights need to be granted explicitly, i.e. a user without any rights can literally do nothing, not even use the control panel.
