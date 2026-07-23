---
title: "ACL Users & Groups"
sidebar:
  order: 1720
---

Each CentralNic Reseller account can set up users and groups. Specific rights can be applied for each user and each group, granting access to objects, as well as what operations are allowed on given objects.

To log into the Control Panel as a certain user (or send a command to the API) you have to append the username to the account name, connected by ":", as login name (i.e. login=\[accountname\]:\[username\]) and enter the corresponding user password.

## Users and Groups Management in the Control Panel

The most simple way to manage the users and groups for your CentralNic Reseller account is via the Control Panel. You can access the settings via the user menu by clicking on your login name on the upper right -> User management. Here you can find full lists of all existing users and groups in your account and also manage their ACL permissions (LINK TO ACL DOCU).

## Users and Groups Management via API

Users & Groups can be managed via API through several commands:

| **AddUser** | Creates a user or a group. |
| --- | --- |
| **ModifyUser** | Change a password of a given user. Adding/removing users to groups. |
| **DeleteUser** | Deletes a user or a group. |
| **StatusUser** | Shows the status of a given user or group. |
| **QueryUserList** | Shows a list of all users or groups. |
