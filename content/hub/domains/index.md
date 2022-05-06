---
title: "Domains"
description: "Multi tenancy by using domains and user accounts."
lead: "Multi tenancy by using domains and user accounts."
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  hub:
    parent: "hub"
weight: 305
toc: true
---

By default the Kerberos Hub project can be used in a multi tenancy mode. By creating multiple user and related (sub) accounts you can provide multiple users/customers/companies access to the (same) central platform. Each master user will have a set of sites, groups and cameras attached which can be further delegated to (sub) accounts. This means that sites in a geography can be managed by a specific user working in that specific timezone, etc.

By using domains you can bring the multi tenancy to another level. A domain adds another abstraction layer on top of the default user account. It creates a context in which usernames and users are unique, in others words the same username can be used in multiple domains.

## Introduction

The domain feature works through the concept of a subdomain. By prefixing the `BASE_DOMAIN` with a subdomain you indicate Kerberos Hub to which domain the user belongs. When opening the login page, the page will show the name of the domain you trying to sign in.

![Login page of a domain](login.png)

Once logged in, you will see the domain badge next to your username in the profile section (left top). This indicates to which domain the user currently signed in.

![Domain badge](domain-badge.png)

Any (sub) accounts you will create from the master account will automatically added to the same domain, and be linked to the master account.

## Configuration

To enable the domain feature, you will need to set two environment variables in the Kerberos Hub frontend container. By opening the `values.yaml` of your Helm chart, you can change following properties.

    # By default the Kerberos Hub allows multi-tenancy through the concept
    # of accounts and subaccounts. However through the concept of domains, you
    # take it a step further. Within a domain, user accounts are unique, and are prefixed by a (domain\).
    multiTenant: true
    tenantBaseDomain: "yourdomain.com" 

By setting `multiTenant` to true you indicate to Kerberos Hub you want to enable the domain feature. Once enabled you can provide the `tenantBaseDomain`, which you use as a basis for your domains as DNS sub domains. 

When configured and deployed you can start using sub domains to different the domains in Kerberos Hub, for example `hub.kerberos.live` is used as the `tenantBaseDomain` and following subdomains will result in the equivalent Kerberos Hub domain.

  - `customera.hub.kerberos.live` -> `customera` domain
  - `customerb.hub.kerberos.live` -> `customerb` domain
  - `xyz.hub.kerberos.live` -> `xyz` domain
  - `develop.hub.kerberos.live` -> `develop` domain

Once hitting a specific domain, and for example creating a user. The user itself will be stored as a master user in the Kerberos Hub database, but will prefixed with a `domain@` in the username. When hitting the login page users will be able to sign in with their regular username, but internally the user will be authenticated with the `domain@` prefix.
