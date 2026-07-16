# JWT



## Create a JWT token

Available since 6.0.2 version.

Use this method to create a JWT token containing a payload.

Optionally, you can also define an expiration, an issuer and a subject.

**Syntax**

```javascript
var jwtToken = utils.createJWT(
  String sharedKey,
  String id, 
  String issuer, 
  String subject, 
  Long ttlMillis
);
```



**Settings detail**

| Argument           | Description                                                                                                                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sharedKey          | <p>A private key, used as a seed to generate the token. You can set it starting from a custom global parameter.</p><p>This value is shared with the external app where decoding the JWT token.</p> |
| id                 | The payload to include in the JWT token. It can be expressed as a plain String or a JSON String. Mandatory.                                                                                        |
| issuer (optional)  | can be null; if specified, it defines the issuer                                                                                                                                                   |
| subject (optional) | can be null; if specified, it defines the subject                                                                                                                                                  |
| ttlMillis          | can be null; if specified, it defines the expiration, expressed in milliseconds; e.g. 60000 means that the token duration is 60 seconds.                                                           |



## Decode a JWT token

Available since 6.0.2 version.

Use this method to decode a JWT token generated starting from the previous method.



**Syntax**

```javascript
var json = utils.decodeJWT(String sharedKey,String jwt);
```



**Settings detail**

| Argument  | Description                                                                                                                                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sharedKey | <p>A private key, used as a seed to generate and later decode the token. You can set it starting from a custom global parameter.</p><p>This value is shared with the external app where decoding the JWT token.</p> |
| jwt       | The JWT token                                                                                                                                                                                                       |

It returns a JSON string containing the following attributes:

* id - the payload
* subject - optional
* issuer - optional

In case the token has been generated with an expiration and the decode JWT method has neen invoked AFTER that time, an exception is fired, so it would be better to surround this method with a try-catch and manage such a scenario.&#x20;
