# How to setup OAuth2 authentication

OAuth2 involves 5 different times to correctly setup and use it:

* The OAuth2 Server **administrator** must **create OAuth2 credentials** for the specific Platform application and provides the following information:
  1. client id
  2. client secret
  3. any "scopes" needed later to access specific protected resources&#x20;
  4. the access token end point (an URL)
  5. the authorization base URL&#x20;
* the Platform **dev** must provide a **callback** (i.e. a public web service) that the OAuth2 Server must invoke at the end of the step 3 and pass forward the permanent code, valid per user; the OAuth2 Server administrator could have to include such callback in its configuration; for instance, in case of Google OAuth, _you must include this URL in web page "Client ID for web application", related to the specific OAuth2 credentials created_: Google requires that all callback URLS must be defined and authorized. The Platform dev must creates a server-side javascript action used as the callback and it must be public, i.e. includes Platform credentials, for example using api/cmd=..\&applicationId=...&#x20;

<figure><img src=".gitbook/assets/image (35).png" alt=""/><figcaption></figcaption></figure>

* the **user** have to generate the permanent code una tantum; in order to do it, the Platform **dev** must create a server-side javascript action in order to generate the  "**Authorization request**" (in the schema above); once done that, the user can authorize through its personal credentials and the callback will be invoked; the callback contains the permanent code; there should be also an application logic to store such permanent code somewhere (e.g. in a database table, a code per user)
* after the generation of the permanent code, a series of calls to protected web resources can be executed; before doing it, a temporary access token must be created, starting from the permanent code (the "Access token request" described in the schema above); for example, every time the user logon into the app, its permanent code can be used to generate the access token, which has always an expiration (e.g. an hour); it is up to the application to ensure that the access token is always valid, by re-genereting it when needed
* once getting the access token, this must be included in any subsequent request, when accessing protected web resources (the "Resource request" reported in the schema above)

To sum up, these can be the server-side js actions to create:



Server-side js action used by the end user to generate the permanent code, starting from&#x20;



* client id
* client secret
* access token end point
* authorization base url

```javascript
var authUrl = utils.getOAuth2AuthorizationUrl(
    "...", //client id
    "...", // clientSecret,
    "http://myhost/platform/api?cmd=callback&applicationId=...",
    //"http://localhost:8080/wag/oauth2callback", // callback
    "profile", // scope, 
    "https://oauth2.googleapis.com/token", // accessTokenEndpoint for Google, 
    "https://accounts.google.com/o/oauth2/v2/auth" // authorizationBaseUrl for Google
);
```

When this action is invoked, and authURL is dinamically generated and should be showed in the web browser window: the user must confirm its content and behind the scenes the web service provided by Platform will be invoked (callback), i.e.

<pre class="language-javascript"><code class="lang-javascript"><strong>var code = reqParams.code; 
</strong><strong>// application logic which saves such code in a table for subsequent requests
</strong><strong>// ...
</strong><strong>
</strong><strong>// finally, provide an HTML response to show in the web browser for the user
</strong><strong>// for example:
</strong><strong>utils.setReturnValue("&#x3C;html>&#x3C;body>Authorization process completed: you can now close this window.&#x3C;/body>&#x3C;/html>");
</strong></code></pre>

For example, Google would provide this reqParams content:

```javascript
\{
  "remoteUser":null,
  "code":"....,
  "remoteHost":"0:0:0:0:0:0:0:1",
  "getQueryString":"cmd=callback&applicationId=...&state=...",
  "remotePort":60798,
  "scope":"profile https://www.googleapis.com/auth/userinfo.profile",
  ...
\}
```

The following server-side js action is used to generate a temporary access token, starting from the permanent code:

```javascript
var access_token = utils.getOAuth2AccessToken(
    "...", //client id
    "j6tPwEOOlmePBmkdJImga3Vc", // clientSecret,
    "..., // callback
    "profile", // scope, it cam chamge according to the OAuth2 server... 
    "...", // accessTokenEndpoint, 
    "...", // authorizationBaseUrl,
    code // code
);
```

Finally, you can use it in any subsequent resource calls:

```javascript
var response = utils.sendOAuth2Request(
    "...", //client id
    "...", // clientSecret,
    "...", // callback
    "profile", // scope, 
    "...", // accessTokenEndpoint, 
    "...", // authorizationBaseUrl,
     access_token, // accessToken
     "https://www.googleapis.com/oauth2/v3/userinfo"  // an example of resource call
);
```







