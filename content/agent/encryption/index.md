---
title: "Encryption"
description: "End-to-end encryption to keep your recordings secure."
lead: "End-to-end encryption to keep your recordings secure."
date: 2023-04-09T21:45:00+00:00
lastmod: 2023-04-09T21:45:00+00:00
draft: true
images: []
menu:
  agent:
    parent: "agent"
weight: 204
toc: true
---

Kerberos Agent main goal is to make recordings and store them somewhere so you can access them. Next to "just" storing them, storing them securely is even more important, due to these we have integrated different levels of security in the Kerberos.io stack.

![Encryption diagram](./encryption.svg)

## Encryption from Kerberos Agent to Kerberos Vault

![Encryption Kerberos Agent to Kerberos Vault](./encryption-agent-vault.svg)

## Decryption from Kerberos Vault to Kerberos Hub

![Encryption Kerberos Vault to Kerberos Hub](./encryption-vault-hub.svg)

## Encryption from Kerberos Agent to Kerberos Hub

![Encryption Kerberos Agent to Kerberos Hub](./encryption-agent-hub.svg)
