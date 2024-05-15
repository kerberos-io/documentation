---
title: "SSO"
description: "Use your own Identity Provider through OpenID Connect (OIDC)"
lead: "Use your own Identity Provider through OpenID Connect (OIDC)"
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

Kerberos Hub is a multi-tenancy application that allow you to onboard multiple users (with sub accounts). Each users is granted a subscription, given specific permissions and features, and credentials to link multiple cameras to their user account. Afterwards a user can delegate cameras and recordings to sub accounts, so they can review in a divide-and-conquer strategy.

By default a user is authenticating using their username/email and password. These credentials are stored within the Kerberos Hub database, and hashed and salted using a specific algorithm to hide the password. This means that if your users would be using various applications, they will have seperate credentials (which might be the same) for each of the other applications. The complexity begins with your users updating their password across various applications and they might get out-of-sync or completely lost.

{{< figure src="hub-add-account.gif" alt="Give another user limited access to Kerberos Hub by creating a sub account." caption="Give another user limited access to Kerberos Hub by creating a sub account." class="stretch">}}

To overcome these challenges, Kerberos Hub can be linked to multiple OIDC providers. Depending on the domain you use to sign in `@customer1.com` or `@customer2.com`, you will be redirected to the relevant OIDC provider. You can use following `environment variables` to configure one ore more SSO domains having the specific `SSO credentials`; more information can be found in the configuration section.

    sso: # OIDC settings for allowing SSO.
      - domain: "uug.ai"
        redirectUrl: "https://api.cloud.kerberos.io/sso/callback/uug.ai"
        issuer: "https://xxx.eu.auth0.com/"
        claimId: "email"
        clientId: "xxx"
        clientSecret: "xxx"
        clientVerificationId: "" # This is only required for SSO chaining.
      - domain: "kerberos.io"
        redirectUrl: "https://api.cloud.kerberos.io/sso/callback/kerberos.io"
        issuer: "https://accounts.google.com"
        claimId: "email"
        clientId: "xxx"
        clientSecret: "xxx"
        clientVerificationId: "" # This is only required for SSO chaining.
      - ...

Once authenticated with the OIDC provider, you will redirected back to the `redirectUrl`, and an access token is verified to reveal the identity of the authentication request. Once verified, a user in the Kerberos Hub is located, and used to sign in. Hence you'll still need to create a user in Kerberos Hub that matches the identity of your OIDC provider, but the credentials for that user will reside in the OIDC provider and not in the Kerberos Hub application.

{{< figure src="sso-kerberos-hub.gif" alt="Example of how SSO works with Kerberos Hub." caption="Example of how SSO works with Kerberos Hub." class="stretch">}}

## Configuration

To configure Kerberos Hub with one or more OIDC providers you'll need to provide a configuration in the `values.yaml` file (as shown above). Each OIDC provider is assigned to a domain, which is then activated by signing in. For example if your user would signin with an email address like `tom@uug.ai`, the user will be redirected to the `auth0` OIDC provider, if signing with an email address like `john@kerberos.io`, the user will be redirected to the `google` OIDC provider.

### Microsoft Entra (Azure Active Directory)

To connect an existing Azure Active Directory to your Kerberos Hub instance, you might go through [following tutorial](https://learn.microsoft.com/en-us/power-pages/security/authentication/openid-settings#create-an-app-registration-in-azure). By creating a new app registration in Microsoft Entra, you'll obtain a client ID and client secret. Next to that you'll need to provide the `redirectUrl` variable, so Microsoft Entra knows to which endpoint it should send the tokens for authorization.

After creating the new `App registration`, you should be able to abstract following details:

- issuer: https://login.microsoftonline.com/{yourtenantid}/v2.0
- clientId: Application (client) ID
- clientSecret: Secret ID
- redirectUrl: this is something that you have configured in the Kerberos Hub helm chart, but also need to add in your Azure tenant.

### Other OIDC provider

As mentioned above with Microsoft Entra, you will have plenty of other providers such as Google, Auth0, etc. Each of those providers have their own UI of configure the Kerberos Hub application

## SSO Chaining

Having SSO enabled for your Kerberos Hub simplifies the login experience for your end users, as they do not have to remember specific credentials for the Kerberos Hub application. Next to that you might want to include Kerberos Hub into an existing application for example using an `iframe`, where that existing application might already ise OIDC for single sign-on.

An elegant way to boost the user experience for your end users is to reuse the OIDC authentication of the surrounding application for the Kerberos Hub application which is embedded. 

{{< figure src="sso-chaining.gif" alt="Forward existing access token to Kerberos Hub to SSO." caption="Forward existing access token to Kerberos Hub to SSO.." class="stretch">}}

To make this work you'll need to setup both applications with OpenID Connect (OIDC). This means that the "wrapper" application will need a configuration setup with the OIDC provider (for example Auth0 in previous example), and Kerberos Hub should have a similar configuration with the same OIDC provider.

However there is a difference with this setup, as Kerberos Hub will not be responsible for running the authentication against the OIDC provider; the wrapper application is responsible here. What is happening is that the `accessToken` which is received by the wrapper application is forwarded (or chained) to the Kerberos Hub application. The Kerberos Hub application will receive the `accessToken` on the verification url: `"https://hub.kerberos.io/sso/verify/{domain}?accesstoken={accessToken}`, and will use the `clientVerificationId` value for the specific `domain` you defined.

What happens behind the scene is that Kerberos Hub will look for the SSO definition you have provided in the helm chart, by selecting the `domain` you've defined.

    - domain: "uug.ai"
      redirectUrl: "https://api.cloud.kerberos.io/sso/callback/uug.ai"
      forceSSO: "false"
      issuer: "https://uugai.eu.auth0.com/"
      claimId: "email"
      clientId: "xxx"
      clientSecret: "xxx"
      clientVerificationId: "NSkr7Ezyyyyyyyyz8HqmF2iGDb" # This is only required for SSO chaining.

The `clientVerificationId` should be the same clientId you have used to configure the wrapper application, otherwise you will not be able to validate the `accessToken`. Once validated the user credentials are extracted from the `accessToken` and the user is automatically signed in.

## Force SSO for Domain

When leveraging the domain feature, you can force the SSO usage, by setting the `forceSSO` value to `true`. This will make sure that once you arrive on the domain page, the SSO redirection is shown by default and the username/password fields are hidden.

{{< figure src="force-sso-domains.gif" alt="Forcing SSO for domains, this will hide the username and password fields." caption="Forcing SSO for domains, this will hide the username and password fields." class="stretch">}}

### Configuration

To make this work you might need to create two different app registrations with two different callback urls:
  - an application registration for the wrapper application with a specific `redirectUrl` to the wrapper application.
  - (optional) an application registration for Kerberos Hub with a `redirectUrl` to `https://hub.kerberos.io/sso/callback/{domain}`.
  
By creating two app registrations you will be able to SSO against both applications independently. Once you have obtained the different credentials for each app registration: `issuer`, `clientId` and `clientSecret`, you also need to make sure a correct `redirectUrl` is configured in the chosen OIDC provider (this is typically configured through the OIDC provider's web UI).

While having both applications setup with their own OIDC configuration (targetting the same OIDC provider), you can now close the loop by configuring the `clientVerificationId`. This value should equal the `clientId` of the wrapper application. You can simply copy-paste the `clientId` into the `clientVerificationId` value and you are done.

Once deployed this new configuration and setting up the relevant wrapper application, you will now be able to receive an `accessToken` from the OIDC provider. By sending that `accessToken` to following endpoint `https://hub.kerberos.io/sso/verify/{domain}?accesstoken={accessToken}`, it will be validated against the `clientVerificationId` value in your Kerberos Hub configuration (linked to the specific domain).

By embedding following url `https://hub.kerberos.io/sso/verify/{domain}?accesstoken={accessToken}` in forexample an `iframe` you will now seamless login into Kerberos Hub without providing any credentials.

## Database

As detailed above you can configure your Kerberos Hub tenant to include one ore more SSO domains. Depending on the users domain name or suffix, you redirect a user to a specific SSO domain which authenticates the user on your behalf. 

There are two options to configure the SSO domain feature.

1. Through environment variables as described above.
2. Using the database and by creating an entry in the `settings` collection.

### Environment variables

Within the `values.yaml` of the Kerberos Hub installation you have the option to specify one or more SSO domains by creating seperate list items. When applying the `values.yaml` configuration you will have those SSO domains available in the Kerberos Hub application. 

    sso: # OIDC settings for allowing SSO.
      - domain: "uug.ai"
        redirectUrl: "https://api.cloud.kerberos.io/sso/callback/uug.ai"
        forceSSO: "false"
        issuer: "https://xxx.eu.auth0.com/"
        claimId: "email"
        clientId: "xxx"
        clientSecret: "xxx"
        clientVerificationId: "" # This is only required for SSO chaining.
      - domain: "kerberos.io"
        redirectUrl: "https://api.cloud.kerberos.io/sso/callback/kerberos.io"
        forceSSO: "false"
        issuer: "https://accounts.google.com"
        claimId: "email"
        clientId: "xxx"
        clientSecret: "xxx"
        clientVerificationId: "" # This is only required for SSO chaining.
      - ...

### Database

Another possibility to provide SSO domains is by defining them in the database. By creating a new item in the `settings` collection of your database, your Kerberos Hub application will read the SSO domains in memory.

    { 
        "_id" : ObjectId("xxxxx"), 
        "key" : "sso", 
        "map" : {
            "uug.ai" : {
                "domain" : "uug.ai", 
                "redirect_url" : "httpd://xxxx/sso/callback/uug.ai",
                "force_sso": "false",
                "issuer" : "https://uugai.xxx.com/", 
                "claim_id" : "email",
                "client_id" : "xxxx", 
                "client_secret" : "xxxx", 
                "client_verification_id" : "xxxx", 
            },
            "kerberos.io" : {
                "domain" : "kerberos.io", 
                "redirect_url" : "httpd://xxxx/sso/callback/kerberos.io",
                "force_sso": "false",
                "issuer" : "https://kerberosio.xxx.com/", 
                "claim_id" : "email",
                "client_id" : "xxxx", 
                "client_secret" : "xxxx", 
                "client_verification_id" : "xxxx"
            }
        }
    }