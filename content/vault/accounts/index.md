---
title: "Accounts"
description: ""
lead: ""
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
    vault:
        parent: "vault"
weight: 306
toc: true
---

So just a short recap, an account allows something or someone to interact with Kerberos Vault, and store data in the authorized `Providers` and in a directory, the `Provider directory`, inside that `Provider`.

As explained before, you can choose in which directory, the `Provider directory`, an account can store the recordings. By defining a  `Provider directory` you limit an account to have only access to this directory. On the other hand if you want to give an account more flexibility, and thus grant more access, you can use the `*` value for the `Provider directory` parameter. The latter will allow an account to write, in any subdirectory in the `Provider`.

Once an account is created it can be used in Kerberos Enterprise (and soon Kerberos Open Source) to persist your data from your Kerberos Enterprise agent into your own `Provider`.
