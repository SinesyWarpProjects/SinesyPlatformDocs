# Function JSS EE

## addFileToMobileDevices

Register a file (store it in CON55 and if needed in CON54 as well) so that it can be linked to all the registered devices or only to devices linked to the specified username.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.addFileToMobileDevices(
	fullPathName, //String
	fileName, //String
	username //String
);
```
{% endcode %}

Details

| Argument     | Description                                                                                                                                                                           |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fullPathName | \[String] fullPathName absolute path, in the central server, where the file is stored; it must include the file name too                                                              |
| fileName     | \[String] fileName file name, without the path                                                                                                                                        |
| username     | \[String] username it can be null: if so, the file is linked to all registered devices; if this argument is not empty, then the file is linked to all devices binded to this username |

***

## addGoogleCalendarEvent

Creates an event in the main user calendar (the one corresponding to the Google user account)

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return CalendarEvent type
var risp = utils.addGoogleCalendarEvent(
	title, //String
	beginDate, //Date
	endDate //Date
);
```
{% endcode %}

Details

| Argument  | Description |
| --------- | ----------- |
| title     | \[String]   |
| beginDate | \[Date]     |
| endDate   | \[Date]     |

***

## addGoogleCalendarEvent

Creates an event in the main user calendar (the one corresponding to the Google user account)

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return CalendarEvent type
var risp = utils.addGoogleCalendarEvent(
	serviceAccountEmail, //String
	privateKeyString, //String
	userId, //String
	title, //String
	beginDate, //Date
	endDate, //Date
	description, //String
	location, //String
	calendarId, //String
	creatorEmail, //String
	optionals, //Map
	attendeeEmails //String[]
);
```
{% endcode %}

Details

| Argument            | Description                                                                                                                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| serviceAccountEmail | \[String]                                                                                                                                                                                                                |
| privateKeyString    | \[String]                                                                                                                                                                                                                |
| userId              | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| title               | \[String]                                                                                                                                                                                                                |
| beginDate           | \[Date]                                                                                                                                                                                                                  |
| endDate             | \[Date]                                                                                                                                                                                                                  |
| description         | \[String]                                                                                                                                                                                                                |
| location            | \[String]                                                                                                                                                                                                                |
| calendarId          | \[String]                                                                                                                                                                                                                |
| creatorEmail        | \[String]                                                                                                                                                                                                                |
| optionals           | \[Map]                                                                                                                                                                                                                   |
| attendeeEmails      | \[String\[]]                                                                                                                                                                                                             |

***

## addGoogleCalendarEventWithConference

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return CalendarEvent type
var risp = utils.addGoogleCalendarEventWithConference(
	serviceAccountEmail, //String
	privateKeyString, //String
	userId, //String
	title, //String
	beginDate, //Date
	endDate, //Date
	description, //String
	location, //String
	calendarId, //String
	type, //String
	creatorEmail, //String
	attendeeEmails //String[]
);
```
{% endcode %}

Details

| Argument            | Description                                                                                                                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| serviceAccountEmail | \[String]                                                                                                                                                                                                                |
| privateKeyString    | \[String]                                                                                                                                                                                                                |
| userId              | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| title               | \[String]                                                                                                                                                                                                                |
| beginDate           | \[Date]                                                                                                                                                                                                                  |
| endDate             | \[Date]                                                                                                                                                                                                                  |
| description         | \[String]                                                                                                                                                                                                                |
| location            | \[String]                                                                                                                                                                                                                |
| calendarId          | \[String]                                                                                                                                                                                                                |
| type                | \[String]                                                                                                                                                                                                                |
| creatorEmail        | \[String]                                                                                                                                                                                                                |
| attendeeEmails      | \[String\[]]                                                                                                                                                                                                             |

***

## addGoogleCalendarEventWithSettings

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return CalendarEvent type
var risp = utils.addGoogleCalendarEventWithSettings(
	serviceAccountEmail, //String
	privateKeyString, //String
	userId, //String
	title, //String
	beginDate, //Date
	endDate, //Date
	description, //String
	location, //String
	calendarId, //String
	creatorEmail, //String
	attendeeEmails //String[]
);
```
{% endcode %}

Details

| Argument            | Description                                                                                                                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| serviceAccountEmail | \[String]                                                                                                                                                                                                                |
| privateKeyString    | \[String]                                                                                                                                                                                                                |
| userId              | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| title               | \[String]                                                                                                                                                                                                                |
| beginDate           | \[Date]                                                                                                                                                                                                                  |
| endDate             | \[Date]                                                                                                                                                                                                                  |
| description         | \[String]                                                                                                                                                                                                                |
| location            | \[String]                                                                                                                                                                                                                |
| calendarId          | \[String]                                                                                                                                                                                                                |
| creatorEmail        | \[String]                                                                                                                                                                                                                |
| attendeeEmails      | \[String\[]]                                                                                                                                                                                                             |

***

## addGoogleContact

Add a contact in the list, personal or shared, based on the `shared` flag.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Contact type
var risp = utils.addGoogleContact(
	name, //String
	surname, //String
	email, //String
	phone, //String
	shared //Boolean
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| name     | \[String]   |
| surname  | \[String]   |
| email    | \[String]   |
| phone    | \[String]   |
| shared   | \[Boolean]  |

***

## addGoogleDriveFileProperty

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.addGoogleDriveFileProperty(
	fileId, //String
	key, //String
	value, //String
	visibility //String
);
```
{% endcode %}

Details

| Argument   | Description                 |
| ---------- | --------------------------- |
| fileId     | \[String] id of Google file |
| key        | \[String]                   |
| value      | \[String]                   |
| visibility | \[String]                   |

***

## addGoogleDriveFileProperty

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.addGoogleDriveFileProperty(
	userId, //String
	fileId, //String
	key, //String
	value, //String
	visibility //String
);
```
{% endcode %}

Details

| Argument   | Description                                                                                                                                                                                                              |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId     | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| fileId     | \[String] id of Google file                                                                                                                                                                                              |
| key        | \[String]                                                                                                                                                                                                                |
| value      | \[String]                                                                                                                                                                                                                |
| visibility | \[String]                                                                                                                                                                                                                |

***

## addISO8601

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Date type
var risp = utils.addISO8601(
	dt, //Date
	period //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| dt       | \[Date]     |
| period   | \[String]   |

***

## addNotificationsAllEvents

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.addNotificationsAllEvents(
	serviceAccountEmail, //String
	privateKeyString, //String
	userId, //String
	calendarId, //String
	reminders //String>>
);
```
{% endcode %}

Details

| Argument            | Description                                                                                                                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| serviceAccountEmail | \[String]                                                                                                                                                                                                                |
| privateKeyString    | \[String]                                                                                                                                                                                                                |
| userId              | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| calendarId          | \[String]                                                                                                                                                                                                                |
| reminders           | \[String>>]                                                                                                                                                                                                              |

***

## addPermissionsToGoogleDriveFolder

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.addPermissionsToGoogleDriveFolder(
	folderId, //String
	type, //String
	value, //String
	fileRole, //String
	folderRole, //String
	additionalRoles, //String>
	updateBaseFolder, //Boolean
	recursive, //Boolean
	sendNotifications, //Boolean
	message //String
);
```
{% endcode %}

Details

| Argument          | Description                   |
| ----------------- | ----------------------------- |
| folderId          | \[String] id of Google folder |
| type              | \[String]                     |
| value             | \[String]                     |
| fileRole          | \[String]                     |
| folderRole        | \[String]                     |
| additionalRoles   | \[String>]                    |
| updateBaseFolder  | \[Boolean]                    |
| recursive         | \[Boolean]                    |
| sendNotifications | \[Boolean]                    |
| message           | \[String]                     |

***

## addPermissionsToGoogleDriveFolder

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.addPermissionsToGoogleDriveFolder(
	userId, //String
	folderId, //String
	type, //String
	value, //String
	fileRole, //String
	folderRole, //String
	additionalRoles, //String>
	updateBaseFolder, //Boolean
	recursive, //Boolean
	sendNotifications, //Boolean
	message //String
);
```
{% endcode %}

Details

| Argument          | Description                                                                                                                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId            | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| folderId          | \[String] id of Google folder                                                                                                                                                                                            |
| type              | \[String]                                                                                                                                                                                                                |
| value             | \[String]                                                                                                                                                                                                                |
| fileRole          | \[String]                                                                                                                                                                                                                |
| folderRole        | \[String]                                                                                                                                                                                                                |
| additionalRoles   | \[String>]                                                                                                                                                                                                               |
| updateBaseFolder  | \[Boolean]                                                                                                                                                                                                               |
| recursive         | \[Boolean]                                                                                                                                                                                                               |
| sendNotifications | \[Boolean]                                                                                                                                                                                                               |
| message           | \[String]                                                                                                                                                                                                                |

***

## addValueInCache

Add a value to the shared web cache, with no expiration time for that variable.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.addValueInCache(
	varName, //String
	value, //Object
	expirationTime //Long
);
```
{% endcode %}

Details

| Argument       | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| varName        | \[String] varName variable name                              |
| value          | \[Object] value value to store                               |
| expirationTime | \[Long] expirationTime expiration time, expressed in minutes |

***

## addValueInCache

Add a value to the shared web cache, with no expiration time for that variable.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.addValueInCache(
	varName, //String
	value //Object
);
```
{% endcode %}

Details

| Argument | Description                     |
| -------- | ------------------------------- |
| varName  | \[String] varName variable name |
| value    | \[Object] value value to store  |

***

## analyzeEntities

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.analyzeEntities(
	text, //String
	encodingType, //String
	htmlText //Boolean
);
```
{% endcode %}

Details

| Argument     | Description |
| ------------ | ----------- |
| text         | \[String]   |
| encodingType | \[String]   |
| htmlText     | \[Boolean]  |

***

## analyzeEntitySentiment

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.analyzeEntitySentiment(
	text, //String
	encodingType, //String
	htmlText //Boolean
);
```
{% endcode %}

Details

| Argument     | Description |
| ------------ | ----------- |
| text         | \[String]   |
| encodingType | \[String]   |
| htmlText     | \[Boolean]  |

***

## analyzeSentiment

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.analyzeSentiment(
	text, //String
	encodingType, //String
	htmlText //Boolean
);
```
{% endcode %}

Details

| Argument     | Description |
| ------------ | ----------- |
| text         | \[String]   |
| encodingType | \[String]   |
| htmlText     | \[Boolean]  |

***

## analyzeSyntax

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.analyzeSyntax(
	text, //String
	encodingType, //String
	htmlText //Boolean
);
```
{% endcode %}

Details

| Argument     | Description |
| ------------ | ----------- |
| text         | \[String]   |
| encodingType | \[String]   |
| htmlText     | \[Boolean]  |

***

## appendRangeGoogleSheet

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Integer type
var risp = utils.appendRangeGoogleSheet(
	userId, //String
	spreadsheetId, //String
	range, //String
	valueInputOption, //String
	insertDataOption, //String
	vos //Object[][]
);
```
{% endcode %}

Details

| Argument         | Description                                                                                                                                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId           | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| spreadsheetId    | \[String] Id of Google SpreadSheet                                                                                                                                                                                       |
| range            | \[String]                                                                                                                                                                                                                |
| valueInputOption | \[String]                                                                                                                                                                                                                |
| insertDataOption | \[String]                                                                                                                                                                                                                |
| vos              | \[Object\[]\[]]                                                                                                                                                                                                          |

***

## backupEntitiesInGCS

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.backupEntitiesInGCS(
	entityNames, //String[]
	directoryId //Long
);
```
{% endcode %}

Details

| Argument    | Description                                        |
| ----------- | -------------------------------------------------- |
| entityNames | \[String\[]]                                       |
| directoryId | \[Long] dir id used to find or write or read files |

***

## bulkDeleteOnGoogleDatastore

Execute a bulk delete on Google Datastore, starting from a GQL query.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.bulkDeleteOnGoogleDatastore(
	gql //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| gql      | \[String]   |

***

## bulkImport

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String[] type
var risp = utils.bulkImport(
	sourceDirId, //Long
	destDirId, //Long
	backupDirId, //Long
	dataSourceId, //Long
	tableName, //String
	csvFileName, //String
	csvFileNameField, //String
	csvUniqueIdField, //String
	csvSep, //String
	defaultValues, //Object>
	mapping, //String>
	nullString, //String
	skipWithErrors, //Boolean
	skipFileNotInCSV, //Boolean
	beforeInsertActionId, //Long
	afterInsertActionId //Long
);
```
{% endcode %}

Details

| Argument             | Description                                                                                        |
| -------------------- | -------------------------------------------------------------------------------------------------- |
| sourceDirId          | \[Long]                                                                                            |
| destDirId            | \[Long]                                                                                            |
| backupDirId          | \[Long]                                                                                            |
| dataSourceId         | \[Long] num value; it can be null and used to specify a different db to use with the sql statement |
| tableName            | \[String] String: name of table                                                                    |
| csvFileName          | \[String]                                                                                          |
| csvFileNameField     | \[String]                                                                                          |
| csvUniqueIdField     | \[String]                                                                                          |
| csvSep               | \[String]                                                                                          |
| defaultValues        | \[Object>]                                                                                         |
| mapping              | \[String>]                                                                                         |
| nullString           | \[String]                                                                                          |
| skipWithErrors       | \[Boolean]                                                                                         |
| skipFileNotInCSV     | \[Boolean]                                                                                         |
| beforeInsertActionId | \[Long]                                                                                            |
| afterInsertActionId  | \[Long]                                                                                            |

***

## bulkImportFromDSToBigQuery

Import multiple records as a streaming.\
return errors during import, expressed as a JSON map; null if there are NOT errors\
IMPORTANT NOTE: this records are read only: they cannot neither be updated or deleted.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.bulkImportFromDSToBigQuery(
	gql, //String
	datastoreDataModelId, //Long
	location, //String
	bigQueryTable, //String
	interruptExecution, //boolean
	pars //Object[]
);
```
{% endcode %}

Details

| Argument             | Description                                                                                                                                                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| gql                  | \[String]                                                                                                                                                                                                                     |
| datastoreDataModelId | \[Long]                                                                                                                                                                                                                       |
| location             | \[String]                                                                                                                                                                                                                     |
| bigQueryTable        | \[String]                                                                                                                                                                                                                     |
| interruptExecution   | \[boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue                                                     |
| pars                 | \[Object\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## bulkImportFromDSToSpanner

Import multiple records as a streaming.\
return errors during import, expressed as a JSON map; null if there are NOT errors

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.bulkImportFromDSToSpanner(
	gql, //String
	datastoreDataModelId, //Long
	interruptExecution, //boolean
	pars //Object[]
);
```
{% endcode %}

Details

| Argument             | Description                                                                                                                                                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| gql                  | \[String]                                                                                                                                                                                                                     |
| datastoreDataModelId | \[Long]                                                                                                                                                                                                                       |
| interruptExecution   | \[boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue                                                     |
| pars                 | \[Object\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## bulkImportFromFTP

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String[] type
var risp = utils.bulkImportFromFTP(
	host, //String
	port, //Integer
	useSSL, //Boolean
	username, //String
	password, //String
	remoteDir, //String
	fileFilter, //String
	destDirId, //Long
	backupDirId, //Long
	dataSourceId, //Long
	tableName, //String
	csvFileName, //String
	csvFileNameField, //String
	csvUniqueIdField, //String
	csvSep, //String
	defaultValues, //Object>
	mappingCsvToFields, //String>
	nullString, //String
	skipWithErrors, //Boolean
	skipFileNotInCSV, //Boolean
	beforeInsertActionId, //Long
	afterInsertActionId //Long
);
```
{% endcode %}

Details

| Argument             | Description                                                                                                                                                                                                              |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| host                 | \[String]                                                                                                                                                                                                                |
| port                 | \[Integer]                                                                                                                                                                                                               |
| useSSL               | \[Boolean]                                                                                                                                                                                                               |
| username             | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| password             | \[String]                                                                                                                                                                                                                |
| remoteDir            | \[String]                                                                                                                                                                                                                |
| fileFilter           | \[String]                                                                                                                                                                                                                |
| destDirId            | \[Long]                                                                                                                                                                                                                  |
| backupDirId          | \[Long]                                                                                                                                                                                                                  |
| dataSourceId         | \[Long] num value; it can be null and used to specify a different db to use with the sql statement                                                                                                                       |
| tableName            | \[String] String: name of table                                                                                                                                                                                          |
| csvFileName          | \[String]                                                                                                                                                                                                                |
| csvFileNameField     | \[String]                                                                                                                                                                                                                |
| csvUniqueIdField     | \[String]                                                                                                                                                                                                                |
| csvSep               | \[String]                                                                                                                                                                                                                |
| defaultValues        | \[Object>]                                                                                                                                                                                                               |
| mappingCsvToFields   | \[String>] collection of attribute names defined as first row in csv vs field name in the table name                                                                                                                     |
| nullString           | \[String]                                                                                                                                                                                                                |
| skipWithErrors       | \[Boolean]                                                                                                                                                                                                               |
| skipFileNotInCSV     | \[Boolean]                                                                                                                                                                                                               |
| beforeInsertActionId | \[Long]                                                                                                                                                                                                                  |
| afterInsertActionId  | \[Long]                                                                                                                                                                                                                  |

***

## bulkUpdateOnGoogleDatastore

Execute a bulk update on Google Datastore, starting from a GQL query:\
for each record read, update it, by including the specified fields & values.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.bulkUpdateOnGoogleDatastore(
	gql, //String
	attributesToSet, //Map
	attributesToRemove, //Map
	actionId //Long
);
```
{% endcode %}

Details

| Argument           | Description |
| ------------------ | ----------- |
| gql                | \[String]   |
| attributesToSet    | \[Map]      |
| attributesToRemove | \[Map]      |
| actionId           | \[Long]     |

***

## callGaeAction

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.callGaeAction(
	actionId, //Long
	async //Boolean
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| actionId | \[Long]     |
| async    | \[Boolean]  |

***

## checkGoogleSSOToken

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.checkGoogleSSOToken(
	ssoAuthToken //String
);
```
{% endcode %}

Details

| Argument     | Description |
| ------------ | ----------- |
| ssoAuthToken | \[String]   |

***

## classifyText

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.classifyText(
	text, //String
	htmlText //Boolean
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| text     | \[String]   |
| htmlText | \[Boolean]  |

***

## clearAllDatastoreEntities

Clear up the internal cache used to get Datastore entities, for ALL entities.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.clearAllDatastoreEntities();
```
{% endcode %}

***

## clearCache

Invoke GAE instance and ask for clearing up a list of variable names from the MemCache.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.clearCache(
	varNames, //String
	keys //String
);
```
{% endcode %}

Details

| Argument | Description                                                                                                                                                                                                                                                               |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| varNames | \[String] varNames a varName or many variable names separated by a comma (e.g. "MOTPROM,MOTPROM\_BANCHES")                                                                                                                                                                |
| keys     | \[String] keys optional: can be null; a key within or many keys, separated by a comma; if specified, the cached entry related to varName must be a map and such a map inside the cache will not be removed completely, but only the entries related to the specified keys |

***

## clearCache

Invoke GAE instance and ask for clearing up a list of variable names from the MemCache.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.clearCache(
	varNames //String
);
```
{% endcode %}

Details

| Argument | Description                                                                                                |
| -------- | ---------------------------------------------------------------------------------------------------------- |
| varNames | \[String] varNames a varName or many variable names separated by a comma (e.g. "MOTPROM,MOTPROM\_BANCHES") |

***

## clearDatastoreEntities

Clear up the internal cache used to get a Datastore entity, starting from the specified entity name.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.clearDatastoreEntities(
	entityName //String
);
```
{% endcode %}

Details

| Argument   | Description                                               |
| ---------- | --------------------------------------------------------- |
| entityName | \[String] entityName entity name, expressed in camel case |

***

## clearRangeGoogleSheet

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.clearRangeGoogleSheet(
	userId, //String
	spreadsheetId, //String
	range //String
);
```
{% endcode %}

Details

| Argument      | Description                                                                                                                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId        | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| spreadsheetId | \[String] Id of Google SpreadSheet                                                                                                                                                                                       |
| range         | \[String]                                                                                                                                                                                                                |

***

## closeActivitiTask

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.closeActivitiTask(
	taskInstanceId, //String
	map //Map
);
```
{% endcode %}

Details

| Argument       | Description |
| -------------- | ----------- |
| taskInstanceId | \[String]   |
| map            | \[Map]      |

***

## closeActivitiTask

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.closeActivitiTask(
	processInstanceId, //String
	taskDefinitionKey, //String
	assignee, //String
	map //Map
);
```
{% endcode %}

Details

| Argument          | Description |
| ----------------- | ----------- |
| processInstanceId | \[String]   |
| taskDefinitionKey | \[String]   |
| assignee          | \[String]   |
| map               | \[Map]      |

***

## completeActivitiTask

Start and automatically mark as completed a manual Activiti task.\
@return

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Map type
var risp = utils.completeActivitiTask(
	processInstanceId, //String
	params, //Map
	processVariables //Map
);
```
{% endcode %}

Details

| Argument          | Description                                                                                                                                                                                                             |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| processInstanceId | \[String]                                                                                                                                                                                                               |
| params            | \[Map] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |
| processVariables  | \[Map]                                                                                                                                                                                                                  |

***

## convertDocxToOtherFormat

Convert a docx file to another format supported by LibreOffice and save it to the file system.\
File conversion is be carried out through the LibreOffice Portable conv tool (which must be previously installed)\
LIBREOFFICE\_PATH common parameter must have been defined, then convert the document using LibreOffice portable version (which must be available on the server)

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.convertDocxToOtherFormat(
	docxFile, //String
	newFile, //String
	deleteDocxFile, //Boolean
	format //String
);
```
{% endcode %}

Details

| Argument       | Description                                                                                                           |
| -------------- | --------------------------------------------------------------------------------------------------------------------- |
| docxFile       | \[String] docxFile source file, in docx format                                                                        |
| newFile        | \[String] newFile new file, in the specified format                                                                   |
| deleteDocxFile | \[Boolean] deleteDocxFile flag used to automatically delete the source file, when the converted file has been created |
| format         | \[String] format output format; supported values should be: pdf, odt, txt, txt:Text, csv, html, html:XHTML            |

***

## convertDocxToPdf

Convert a docx file to a pdf file and save it to the file system.\
File conversion can be carried out in three alternative ways:

* if CLOUD\_CONVERT\_API\_KEY common parameter has been defined, then try to use this service to convert from docx to pdf
* if LIBREOFFICE\_PATH common parameter has been defined, then convert the document using LibreOffice portable version (which must be available on the server)
* otherwise, convert using org.apache.poi.hwpf\
  In case no more "minutes" are available with cloud conv web service, then use the second alternative to convert the file.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.convertDocxToPdf(
	docxFile, //String
	pdfFile, //String
	deleteDocxFile //Boolean
);
```
{% endcode %}

Details

| Argument       | Description                                                                                                     |
| -------------- | --------------------------------------------------------------------------------------------------------------- |
| docxFile       | \[String] docxFile source file, in docx format                                                                  |
| pdfFile        | \[String] pdfFile new file, in pdf format                                                                       |
| deleteDocxFile | \[Boolean] deleteDocxFile flag used to automatically delete the source file, when the pdf file has been created |

***

## convertHtmlToImage

Read the HTML content and convert it to an image and save the image to the server file system.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.convertHtmlToImage(
	html, //String
	imagePath //String
);
```
{% endcode %}

Details

| Argument  | Description                                                                                       |
| --------- | ------------------------------------------------------------------------------------------------- |
| html      | \[String] html HTML content to read                                                               |
| imagePath | \[String] imagePath absolute path + image file name where saving the image; supported format: png |

***

## convertISO8601

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.convertISO8601(
	period //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| period   | \[String]   |

***

## convertListWithMapper

Convert a JSON having this format:\
{ valueObjectList: \[...], moreRows: true|false }\
this another JSON string having the same format but different content for the list of objects, which\
will be converted according to the mapper.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.convertListWithMapper(
	json, //String
	settings //Map
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| json     | \[String]   |
| settings | \[Map]      |

***

## convertObjectWithMapper

Convert a JSON having this format:\
{ attributesOfASingleObject }\
this another JSON string having the same format but different content for the object, which\
will be converted according to the mapper.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.convertObjectWithMapper(
	json, //String
	settings //Map
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| json     | \[String]   |
| settings | \[Map]      |

***

## convertPdfToImage

Convert the PDF file stored in the folder identified by pdfDirId to an image, which will be stored\
in the folder identified by imgDirId, with an image format defined by "imgExtension".

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.convertPdfToImage(
	pdfDirId, //Long
	pdfFileName, //String
	imgDirId, //Long
	imgExtension, //String
	scale //Float
);
```
{% endcode %}

Details

| Argument     | Description                                                                                                                               |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| pdfDirId     | \[Long] pdfDirId folder identifier, where the input PDF file is already stored                                                            |
| pdfFileName  | \[String] pdfFileName PDF file name, stored in the folder identified by pdfDirId                                                          |
| imgDirId     | \[Long] imgDirId folder identifier, where the image will be saved                                                                         |
| imgExtension | \[String] imgExtension image format; allowed formats: png                                                                                 |
| scale        | \[Float] scale positive number <= 1.0, used to define how much to reduce the PDF; e.g. 0.3; the more is reduced, the smaller the image is |

***

## convertTifToJpg

Convert a TIF image (big image) stored in the folder identified by tifDirId to a jpeg image, which will be stored\
in the folder identified by jpgDirId, with te specified compression factor.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.convertTifToJpg(
	tifDirId, //Long
	tifFileName, //String
	jpgDirId, //Long
	jpgFileName, //String
	compressionFactor //Float
);
```
{% endcode %}

Details

| Argument          | Description                                                                                                                                        |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| tifDirId          | \[Long] tifDirId folder identifier, where the input PDF file is already stored                                                                     |
| tifFileName       | \[String] tifFileName PDF file name, stored in the folder identified by pdfDirId                                                                   |
| jpgDirId          | \[Long] jpgDirId folder identifier, where the image will be saved                                                                                  |
| jpgFileName       | \[String] jpgFileName jpeg file name to create                                                                                                     |
| compressionFactor | \[Float] compressionFactor compression factor to use when saving the jpeg image; e.g. 0.5; allowed values: 0.1-1.0 where 1.0 = 100% (high quality) |

***

## convertUrlToImage

Read the specified URL and convert the HTML content to an image and save it to the server file system.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.convertUrlToImage(
	url, //String
	imagePath //String
);
```
{% endcode %}

Details

| Argument  | Description                                                                                       |
| --------- | ------------------------------------------------------------------------------------------------- |
| url       | \[String] url URL to read, related to HTML content                                                |
| imagePath | \[String] imagePath absolute path + image file name where saving the image; supported format: png |

***

## copyGoogleCloudStorageObject

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.copyGoogleCloudStorageObject(
	sourceBucketName, //String
	sourceObjectName, //String
	sourceObjectVersion, //Long
	destinationBucketName, //String
	destinationObjectName //String
);
```
{% endcode %}

Details

| Argument              | Description |
| --------------------- | ----------- |
| sourceBucketName      | \[String]   |
| sourceObjectName      | \[String]   |
| sourceObjectVersion   | \[Long]     |
| destinationBucketName | \[String]   |
| destinationObjectName | \[String]   |

***

## copyGoogleSheet

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.copyGoogleSheet(
	userId, //String
	spreadsheetId, //String
	sheetId, //Integer
	destinationSpreadsheetId //String
);
```
{% endcode %}

Details

| Argument                 | Description                                                                                                                                                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId                   | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| spreadsheetId            | \[String] Id of Google SpreadSheet                                                                                                                                                                                       |
| sheetId                  | \[Integer]                                                                                                                                                                                                               |
| destinationSpreadsheetId | \[String]                                                                                                                                                                                                                |

***

## createBigQueryDataset

Create a new dataset into Google BigQuery

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.createBigQueryDataset(
	datasetName //String
);
```
{% endcode %}

Details

| Argument    | Description |
| ----------- | ----------- |
| datasetName | \[String]   |

***

## createBigQueryTable

Create a new table in the specified dataset of Google BigQuery

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.createBigQueryTable(
	datasetName, //String
	tableName, //String
	columns //Map>
);
```
{% endcode %}

Details

| Argument    | Description                     |
| ----------- | ------------------------------- |
| datasetName | \[String]                       |
| tableName   | \[String] String: name of table |
| columns     | \[Map>]                         |

***

## createBigQueryTableFromDatastoreEntities

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.createBigQueryTableFromDatastoreEntities(
	entityNames, //String[]
	directoryId, //Long
	datasetName //String
);
```
{% endcode %}

Details

| Argument    | Description                                        |
| ----------- | -------------------------------------------------- |
| entityNames | \[String\[]]                                       |
| directoryId | \[Long] dir id used to find or write or read files |
| datasetName | \[String]                                          |

***

## createConDbForCurrentUser

Create in advance a con.db mobile database for the specified mobile user.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.createConDbForCurrentUser(
	companyId, //String
	siteId, //Long
	username //String
);
```
{% endcode %}

Details

| Argument  | Description                                                                                                                                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| companyId | \[String]                                                                                                                                                                                                                |
| siteId    | \[Long]                                                                                                                                                                                                                  |
| username  | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |

***

## createCsvFromFTPFolders

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.createCsvFromFTPFolders(
	dirId, //Long
	ftpProtocol, //String
	ftpHost, //String
	ftpPort, //Integer
	useSSL, //Boolean
	ftpUsername, //String
	ftpPassword, //String
	ftpBaseDir, //String
	csvFileName, //String
	csvSeparator, //String
	fileNameAttributes, //String
	fileNameSeparator, //String
	folderAttributes //String[]
);
```
{% endcode %}

Details

| Argument           | Description                                        |
| ------------------ | -------------------------------------------------- |
| dirId              | \[Long] dir id used to find or write or read files |
| ftpProtocol        | \[String]                                          |
| ftpHost            | \[String]                                          |
| ftpPort            | \[Integer]                                         |
| useSSL             | \[Boolean]                                         |
| ftpUsername        | \[String]                                          |
| ftpPassword        | \[String]                                          |
| ftpBaseDir         | \[String]                                          |
| csvFileName        | \[String]                                          |
| csvSeparator       | \[String]                                          |
| fileNameAttributes | \[String]                                          |
| fileNameSeparator  | \[String]                                          |
| folderAttributes   | \[String\[]]                                       |

***

## createCsvFromFolders

Create a CSV file and save it with the specified csvFileName in the base dir identified by destDirId.\
The CSV content contains a row for each file found within the folder (and subfolder) identified by dirId.\
The CSV contains a first line with the list of column names, which are:\
folderAttributes fileNameAttributes fileName

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.createCsvFromFolders(
	dirId, //Long
	destDirId, //Long
	csvFileName, //String
	csvSeparator, //String
	fileNameAttributes, //String
	fileNameSeparator, //String
	folderAttributes //String[]
);
```
{% endcode %}

Details

| Argument           | Description                                                                                                      |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- |
| dirId              | \[Long] dirId base dir where searching for files                                                                 |
| destDirId          | \[Long] destDirId base dir where saving the CSV foile                                                            |
| csvFileName        | \[String] csvFileName CSV file name to create                                                                    |
| csvSeparator       | \[String] csvSeparator character to use to separate fields (e.g. "," or ";")                                     |
| fileNameAttributes | \[String] fileNameAttributes the parts composing the file name, separated with each other by "fileNameSeparator" |
| fileNameSeparator  | \[String] fileNameSeparator the character to use for separing attributes in the file name (e.g. "\_")            |
| folderAttributes   | \[String\[]] folderAttributes list of attributes identifying the folders containing a file                       |

***

## createCsvFromSqlQuery

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.createCsvFromSqlQuery(
	sql, //String
	dataSourceId, //Long
	includeRowNum, //Boolean
	replaceNullWith, //String
	fromRow, //Long
	maxRowsToRead, //Long
	firstRow, //String
	sep, //String
	dirId, //Long
	fileName //String
);
```
{% endcode %}

Details

| Argument        | Description                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------- |
| sql             | \[String] string value: sql to execute; it can contain ?                                           |
| dataSourceId    | \[Long] num value; it can be null and used to specify a different db to use with the sql statement |
| includeRowNum   | \[Boolean]                                                                                         |
| replaceNullWith | \[String]                                                                                          |
| fromRow         | \[Long]                                                                                            |
| maxRowsToRead   | \[Long]                                                                                            |
| firstRow        | \[String]                                                                                          |
| sep             | \[String]                                                                                          |
| dirId           | \[Long] dir id used to find or write or read files                                                 |
| fileName        | \[String] file name                                                                                |

***

## createGoogleCloudStorageBucket

Create a new bucket in the desired project and location, with the (optional) desired class

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return FileContainer type
var risp = utils.createGoogleCloudStorageBucket(
	project, //String
	bucketName, //String
	bucketLocation, //String
	storageClass //String
);
```
{% endcode %}

Details

| Argument       | Description                                                                                                                                                     |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| project        | \[String]                                                                                                                                                       |
| bucketName     | \[String]                                                                                                                                                       |
| bucketLocation | \[String] bucketLocation multi-region location: US, EU, ASIA. Other locations are supported. See https://cloud.google.com/storage/docs/bucket-locations         |
| storageClass   | \[String] storageClass optional storage class: STANDARD, NEARLINE and DURABLE\_REDUCED\_AVAILABILITY. See https://cloud.google.com/storage/docs/storage-classes |

***

## createGoogleDriveFolder

Creates a folder in current user Google Drive, possibly having parents and a description

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.createGoogleDriveFolder(
	folderName, //String
	parents, //String>
	description //String
);
```
{% endcode %}

Details

| Argument    | Description |
| ----------- | ----------- |
| folderName  | \[String]   |
| parents     | \[String>]  |
| description | \[String]   |

***

## createGoogleDriveFolder

Creates a folder in current user Google Drive, possibly having parents and a description

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.createGoogleDriveFolder(
	userId, //String
	folderName, //String
	parents, //String>
	description //String
);
```
{% endcode %}

Details

| Argument    | Description                                                                                                                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId      | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| folderName  | \[String]                                                                                                                                                                                                                |
| parents     | \[String>]                                                                                                                                                                                                               |
| description | \[String]                                                                                                                                                                                                                |

***

## createGoogleSheets

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.createGoogleSheets(
	userId, //String
	spreadsheetId, //String
	sheets //String[]
);
```
{% endcode %}

Details

| Argument      | Description                                                                                                                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId        | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| spreadsheetId | \[String] Id of Google SpreadSheet                                                                                                                                                                                       |
| sheets        | \[String\[]]                                                                                                                                                                                                             |

***

## createGoogleSpreadsheets

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.createGoogleSpreadsheets(
	userId, //String
	spreadsheetTitle, //String
	sheets //String[]
);
```
{% endcode %}

Details

| Argument         | Description                                                                                                                                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId           | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| spreadsheetTitle | \[String]                                                                                                                                                                                                                |
| sheets           | \[String\[]]                                                                                                                                                                                                             |

***

## createJWT

Create a JWT token, starting from thew shared key and subject.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.createJWT(
	sharedKey, //String
	id, //String
	issuer, //String
	subject, //String
	ttlMillis //Long
);
```
{% endcode %}

Details

| Argument  | Description                                                                                                |
| --------- | ---------------------------------------------------------------------------------------------------------- |
| sharedKey | \[String] sharedKey mandatory: the shared key to use when creating/decoding JWT                            |
| id        | \[String]                                                                                                  |
| issuer    | \[String] issuer optional                                                                                  |
| subject   | \[String] subject optional                                                                                 |
| ttlMillis | \[Long] ttlMillis optional: expiration for the token, expressed in ms: how many ms to wait before expiring |

***

## createStripeCustomer

Define a customer in Stripe Payments

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.createStripeCustomer(
	apiKey, //String
	customerData //Map
);
```
{% endcode %}

Details

| Argument     | Description                                                                                |
| ------------ | ------------------------------------------------------------------------------------------ |
| apiKey       | \[String]                                                                                  |
| customerData | \[Map] customerData optional; can be null; allowed values: name, email, phone, description |

***

## createTablesFromDatastoreBackup

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.createTablesFromDatastoreBackup(
	entityNames, //String[]
	gcsURI, //String
	datasetName //String
);
```
{% endcode %}

Details

| Argument    | Description  |
| ----------- | ------------ |
| entityNames | \[String\[]] |
| gcsURI      | \[String]    |
| datasetName | \[String]    |

***

## createXLSXFileFromSQLQuery

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Long type
var risp = utils.createXLSXFileFromSQLQuery(
	templateDirectoryId, //Long
	templateFileName, //String
	sheetName, //String
	outDirectoryId, //Long
	outFileName, //String
	formatHeaderColumns, //Map[]
	formatColumns, //Map[]
	grouping, //Map
	additionalSettings, //Map
	datastoreId, //Long
	sqlQuery, //String
	pars //Object[]
);
```
{% endcode %}

Details

| Argument            | Description                                                                                                                                                                                                                   |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| templateDirectoryId | \[Long]                                                                                                                                                                                                                       |
| templateFileName    | \[String]                                                                                                                                                                                                                     |
| sheetName           | \[String] name of sheet in xls, xlsx or Google Spreadsheet file                                                                                                                                                               |
| outDirectoryId      | \[Long]                                                                                                                                                                                                                       |
| outFileName         | \[String]                                                                                                                                                                                                                     |
| formatHeaderColumns | \[Map\[]]                                                                                                                                                                                                                     |
| formatColumns       | \[Map\[]]                                                                                                                                                                                                                     |
| grouping            | \[Map]                                                                                                                                                                                                                        |
| additionalSettings  | \[Map]                                                                                                                                                                                                                        |
| datastoreId         | \[Long]                                                                                                                                                                                                                       |
| sqlQuery            | \[String]                                                                                                                                                                                                                     |
| pars                | \[Object\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## createXlsContent

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.createXlsContent(
	dirId, //Long
	fileName, //String
	sheetName, //String
	sheetIndex, //Integer
	fromRow, //Integer
	vos, //Object>[]
	attributeNames //String[]
);
```
{% endcode %}

Details

| Argument       | Description                                                     |
| -------------- | --------------------------------------------------------------- |
| dirId          | \[Long] dir id used to find or write or read files              |
| fileName       | \[String] file name                                             |
| sheetName      | \[String] name of sheet in xls, xlsx or Google Spreadsheet file |
| sheetIndex     | \[Integer]                                                      |
| fromRow        | \[Integer]                                                      |
| vos            | \[Object>\[]]                                                   |
| attributeNames | \[String\[]]                                                    |

***

## decodeJWT

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.decodeJWT(
	sharedKey, //String
	jwt //String
);
```
{% endcode %}

Details

| Argument  | Description |
| --------- | ----------- |
| sharedKey | \[String]   |
| jwt       | \[String]   |

***

## decodeJWT

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.decodeJWT(
	sharedKey, //String
	jwt, //String
	attributes //String[]
);
```
{% endcode %}

Details

| Argument   | Description  |
| ---------- | ------------ |
| sharedKey  | \[String]    |
| jwt        | \[String]    |
| attributes | \[String\[]] |

***

## decrValueFromRedis

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return long type
var risp = utils.decrValueFromRedis(
	key //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| key      | \[String]   |

***

## deleteAllGoogleCalendarEventWithSettings

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.deleteAllGoogleCalendarEventWithSettings(
	serviceAccountEmail, //String
	privateKeyString, //String
	userId, //String
	calendarId //String
);
```
{% endcode %}

Details

| Argument            | Description                                                                                                                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| serviceAccountEmail | \[String]                                                                                                                                                                                                                |
| privateKeyString    | \[String]                                                                                                                                                                                                                |
| userId              | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| calendarId          | \[String]                                                                                                                                                                                                                |

***

## deleteAllGoogleCalendarEventWithSettings

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.deleteAllGoogleCalendarEventWithSettings(
	serviceAccountEmail, //String
	privateKeyString, //String
	userId, //String
	calendarId, //String
	fromDate //Date
);
```
{% endcode %}

Details

| Argument            | Description                                                                                                                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| serviceAccountEmail | \[String]                                                                                                                                                                                                                |
| privateKeyString    | \[String]                                                                                                                                                                                                                |
| userId              | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| calendarId          | \[String]                                                                                                                                                                                                                |
| fromDate            | \[Date]                                                                                                                                                                                                                  |

***

## deleteBigQueryDataset

Delete an already existing dataset into Google BigQuery

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.deleteBigQueryDataset(
	datasetName //String
);
```
{% endcode %}

Details

| Argument    | Description |
| ----------- | ----------- |
| datasetName | \[String]   |

***

## deleteBigQueryObject

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Long type
var risp = utils.deleteBigQueryObject(
	datasetName, //String
	tableName, //String
	obj, //Map
	pks //String[]
);
```
{% endcode %}

Details

| Argument    | Description                     |
| ----------- | ------------------------------- |
| datasetName | \[String]                       |
| tableName   | \[String] String: name of table |
| obj         | \[Map]                          |
| pks         | \[String\[]]                    |

***

## deleteBigQueryTable

Delete an already existing table from the specified dataset

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.deleteBigQueryTable(
	datasetName, //String
	tableName //String
);
```
{% endcode %}

Details

| Argument    | Description                     |
| ----------- | ------------------------------- |
| datasetName | \[String]                       |
| tableName   | \[String] String: name of table |

***

## deleteCard

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Map type
var risp = utils.deleteCard(
	dataModelId, //Long
	panelId, //Long
	vo //Map
);
```
{% endcode %}

Details

| Argument    | Description                                                      |
| ----------- | ---------------------------------------------------------------- |
| dataModelId | \[Long] data model id, used to compare the attribute value types |
| panelId     | \[Long]                                                          |
| vo          | \[Map]                                                           |

***

## deleteCards

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Map[] type
var risp = utils.deleteCards(
	dataModelId, //Long
	panelId, //Long
	vos //Map[]
);
```
{% endcode %}

Details

| Argument    | Description                                                      |
| ----------- | ---------------------------------------------------------------- |
| dataModelId | \[Long] data model id, used to compare the attribute value types |
| panelId     | \[Long]                                                          |
| vos         | \[Map\[]]                                                        |

***

## deleteDir

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Boolean type
var risp = utils.deleteDir(
	dirId, //Long
	subFolder //String
);
```
{% endcode %}

Details

| Argument  | Description                                        |
| --------- | -------------------------------------------------- |
| dirId     | \[Long] dir id used to find or write or read files |
| subFolder | \[String]                                          |

***

## deleteFileFromCMS

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.deleteFileFromCMS(
	uuid //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| uuid     | \[String]   |

***

## deleteFiles

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Boolean type
var risp = utils.deleteFiles(
	dirId, //Long
	subFolder, //Boolean
	operator, //String
	fileName, //String
	caseSensitive, //Boolean
	removeEmptyDir //Boolean
);
```
{% endcode %}

Details

| Argument       | Description                                        |
| -------------- | -------------------------------------------------- |
| dirId          | \[Long] dir id used to find or write or read files |
| subFolder      | \[Boolean]                                         |
| operator       | \[String]                                          |
| fileName       | \[String] file name                                |
| caseSensitive  | \[Boolean]                                         |
| removeEmptyDir | \[Boolean]                                         |

***

## deleteFiles

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Boolean type
var risp = utils.deleteFiles(
	dirId, //Long
	subFolder, //Boolean
	operator, //String
	fileName, //String
	caseSensitive //Boolean
);
```
{% endcode %}

Details

| Argument      | Description                                        |
| ------------- | -------------------------------------------------- |
| dirId         | \[Long] dir id used to find or write or read files |
| subFolder     | \[Boolean]                                         |
| operator      | \[String]                                          |
| fileName      | \[String] file name                                |
| caseSensitive | \[Boolean]                                         |

***

## deleteGoogleCalendarEvent

Deletes an event in the main user calendar (the one corresponding to the Google user account)

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.deleteGoogleCalendarEvent(
	calendarEventId //String
);
```
{% endcode %}

Details

| Argument        | Description |
| --------------- | ----------- |
| calendarEventId | \[String]   |

***

## deleteGoogleCalendarEventWithSettings

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.deleteGoogleCalendarEventWithSettings(
	serviceAccountEmail, //String
	privateKeyString, //String
	userId, //String
	calendarEventId //String
);
```
{% endcode %}

Details

| Argument            | Description                                                                                                                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| serviceAccountEmail | \[String]                                                                                                                                                                                                                |
| privateKeyString    | \[String]                                                                                                                                                                                                                |
| userId              | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| calendarEventId     | \[String]                                                                                                                                                                                                                |

***

## deleteGoogleCalendarEventWithSettings

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.deleteGoogleCalendarEventWithSettings(
	serviceAccountEmail, //String
	privateKeyString, //String
	userId, //String
	calendarId, //String
	calendarEventId //String
);
```
{% endcode %}

Details

| Argument            | Description                                                                                                                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| serviceAccountEmail | \[String]                                                                                                                                                                                                                |
| privateKeyString    | \[String]                                                                                                                                                                                                                |
| userId              | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| calendarId          | \[String]                                                                                                                                                                                                                |
| calendarEventId     | \[String]                                                                                                                                                                                                                |

***

## deleteGoogleCloudStorageBucket

Delete a bucket

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return FileContainer type
var risp = utils.deleteGoogleCloudStorageBucket(
	bucketName //String
);
```
{% endcode %}

Details

| Argument   | Description |
| ---------- | ----------- |
| bucketName | \[String]   |

***

## deleteGoogleCloudStorageObject

Delete an object and its metadata

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.deleteGoogleCloudStorageObject(
	bucketName, //String
	objectName //String
);
```
{% endcode %}

Details

| Argument   | Description |
| ---------- | ----------- |
| bucketName | \[String]   |
| objectName | \[String]   |

***

## deleteGoogleContact

Delete a contact from the list, personal or shared, based on the `shared` flag.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.deleteGoogleContact(
	contactId, //String
	shared //Boolean
);
```
{% endcode %}

Details

| Argument  | Description |
| --------- | ----------- |
| contactId | \[String]   |
| shared    | \[Boolean]  |

***

## deleteGoogleDriveFile

Delete file/folder from current user Google Drive

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.deleteGoogleDriveFile(
	fileId, //String
	skipTrash //boolean
);
```
{% endcode %}

Details

| Argument  | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| fileId    | \[String] id of Google file                                           |
| skipTrash | \[boolean] skipTrash do not move file in trash but delete permanently |

***

## deleteGoogleDriveFile

Delete file/folder from current user Google Drive

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.deleteGoogleDriveFile(
	userId, //String
	fileId, //String
	skipTrash //boolean
);
```
{% endcode %}

Details

| Argument  | Description                                                                                                                                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId    | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| fileId    | \[String] id of Google file                                                                                                                                                                                              |
| skipTrash | \[boolean] skipTrash do not move file in trash but delete permanently                                                                                                                                                    |

***

## deleteGoogleDriveFileProperty

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.deleteGoogleDriveFileProperty(
	fileId, //String
	key //String
);
```
{% endcode %}

Details

| Argument | Description                 |
| -------- | --------------------------- |
| fileId   | \[String] id of Google file |
| key      | \[String]                   |

***

## deleteGoogleDriveFileProperty

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.deleteGoogleDriveFileProperty(
	userId, //String
	fileId, //String
	key //String
);
```
{% endcode %}

Details

| Argument | Description                                                                                                                                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId   | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| fileId   | \[String] id of Google file                                                                                                                                                                                              |
| key      | \[String]                                                                                                                                                                                                                |

***

## deleteGoogleSheets

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.deleteGoogleSheets(
	userId, //String
	spreadsheetId, //String
	sheetIds //Integer[]
);
```
{% endcode %}

Details

| Argument      | Description                                                                                                                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId        | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| spreadsheetId | \[String] Id of Google SpreadSheet                                                                                                                                                                                       |
| sheetIds      | \[Integer\[]]                                                                                                                                                                                                            |

***

## deleteObjectOnBigQuery

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.deleteObjectOnBigQuery(
	obj, //Map
	dataModelId, //Long
	interruptExecution //Boolean
);
```
{% endcode %}

Details

| Argument           | Description                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| obj                | \[Map]                                                                                                                                                                    |
| dataModelId        | \[Long] data model id, used to compare the attribute value types                                                                                                          |
| interruptExecution | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |

***

## deleteObjectOnGoogleDatastore

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.deleteObjectOnGoogleDatastore(
	obj, //Map
	dataModelId, //Long
	interruptExecution //Boolean
);
```
{% endcode %}

Details

| Argument           | Description                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| obj                | \[Map]                                                                                                                                                                    |
| dataModelId        | \[Long] data model id, used to compare the attribute value types                                                                                                          |
| interruptExecution | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |

***

## deleteObjectOnGoogleSpanner

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.deleteObjectOnGoogleSpanner(
	obj, //Map
	dataModelId, //Long
	interruptExecution //Boolean
);
```
{% endcode %}

Details

| Argument           | Description                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| obj                | \[Map]                                                                                                                                                                    |
| dataModelId        | \[Long] data model id, used to compare the attribute value types                                                                                                          |
| interruptExecution | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |

***

## deleteObjectOnMongoDb

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.deleteObjectOnMongoDb(
	obj, //Map
	dataModelId, //Long
	interruptExecution //Boolean
);
```
{% endcode %}

Details

| Argument           | Description                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| obj                | \[Map]                                                                                                                                                                    |
| dataModelId        | \[Long] data model id, used to compare the attribute value types                                                                                                          |
| interruptExecution | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |

***

## deleteProcessInstance

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.deleteProcessInstance(
	processInstanceId //String
);
```
{% endcode %}

Details

| Argument          | Description |
| ----------------- | ----------- |
| processInstanceId | \[String]   |

***

## deleteValueFromRedis

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.deleteValueFromRedis(
	key //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| key      | \[String]   |

***

## downloadArchiflowDocument

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Map type
var risp = utils.downloadArchiflowDocument(
	dirId, //Long
	fileName, //String
	cardId, //String
	additionalSettings //Map
);
```
{% endcode %}

Details

| Argument           | Description                                        |
| ------------------ | -------------------------------------------------- |
| dirId              | \[Long] dir id used to find or write or read files |
| fileName           | \[String] file name                                |
| cardId             | \[String]                                          |
| additionalSettings | \[Map]                                             |

***

## downloadFileFromGoogleDrive

Download a file stored in Google Drive and save it to the server's file system.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.downloadFileFromGoogleDrive(
	userId, //String
	fileId, //String
	localPath, //String
	fileName //String
);
```
{% endcode %}

Details

| Argument  | Description                                                                          |
| --------- | ------------------------------------------------------------------------------------ |
| userId    | \[String] userId user id to use when accessing Drive                                 |
| fileId    | \[String] fileId file identifier in Drive                                            |
| localPath | \[String] localPath absolute path on the servers' file system, where saving the file |
| fileName  | \[String] fileName file name to use when saving locally the file                     |

***

## downloadGoogleCloudStorageObject

Download a file from Google Cloud Storage.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.downloadGoogleCloudStorageObject(
	bucketName, //String
	objectName, //String
	destPath //String
);
```
{% endcode %}

Details

| Argument   | Description                                                                                               |
| ---------- | --------------------------------------------------------------------------------------------------------- |
| bucketName | \[String] bucketName bucket where the object is located                                                   |
| objectName | \[String] objectName file to download                                                                     |
| destPath   | \[String] destPath absilute path + file name, where the file will be downloaded on the server file system |

***

## duplicateGoogleDriveFile

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.duplicateGoogleDriveFile(
	userId, //String
	sourceFileId, //String
	destinationFolderId, //String
	newFileName, //String
	copyPermissions //Boolean
);
```
{% endcode %}

Details

| Argument            | Description                                                                                                                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId              | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| sourceFileId        | \[String]                                                                                                                                                                                                                |
| destinationFolderId | \[String]                                                                                                                                                                                                                |
| newFileName         | \[String]                                                                                                                                                                                                                |
| copyPermissions     | \[Boolean]                                                                                                                                                                                                               |

***

## duplicateGoogleDriveFolderAndContents

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.duplicateGoogleDriveFolderAndContents(
	sourceFolderId, //String
	newFolderName, //String
	newFolderDescription, //String
	destinationFolderId, //String
	titlePrefix, //String
	copyPermissions //Boolean
);
```
{% endcode %}

Details

| Argument             | Description |
| -------------------- | ----------- |
| sourceFolderId       | \[String]   |
| newFolderName        | \[String]   |
| newFolderDescription | \[String]   |
| destinationFolderId  | \[String]   |
| titlePrefix          | \[String]   |
| copyPermissions      | \[Boolean]  |

***

## duplicateGoogleDriveFolderAndContents

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.duplicateGoogleDriveFolderAndContents(
	userId, //String
	sourceFolderId, //String
	newFolderName, //String
	newFolderDescription, //String
	destinationFolderId, //String
	titlePrefix, //String
	copyPermissions //Boolean
);
```
{% endcode %}

Details

| Argument             | Description                                                                                                                                                                                                              |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId               | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| sourceFolderId       | \[String]                                                                                                                                                                                                                |
| newFolderName        | \[String]                                                                                                                                                                                                                |
| newFolderDescription | \[String]                                                                                                                                                                                                                |
| destinationFolderId  | \[String]                                                                                                                                                                                                                |
| titlePrefix          | \[String]                                                                                                                                                                                                                |
| copyPermissions      | \[Boolean]                                                                                                                                                                                                               |

***

## duplicateGoogleSheet

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.duplicateGoogleSheet(
	userId, //String
	spreadsheetId, //String
	sourceSheetId, //Integer
	insertSheetIndex, //Integer
	newSheetId, //Integer
	newSheetName //String
);
```
{% endcode %}

Details

| Argument         | Description                                                                                                                                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId           | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| spreadsheetId    | \[String] Id of Google SpreadSheet                                                                                                                                                                                       |
| sourceSheetId    | \[Integer]                                                                                                                                                                                                               |
| insertSheetIndex | \[Integer]                                                                                                                                                                                                               |
| newSheetId       | \[Integer]                                                                                                                                                                                                               |
| newSheetName     | \[String]                                                                                                                                                                                                                |

***

## encodeJWT

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.encodeJWT(
	dataToSend, //Map
	sharedKey //String
);
```
{% endcode %}

Details

| Argument   | Description |
| ---------- | ----------- |
| dataToSend | \[Map]      |
| sharedKey  | \[String]   |

***

## enqueueGaeAction

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.enqueueGaeAction(
	queueName, //String
	actionId, //Long
	params //Map
);
```
{% endcode %}

Details

| Argument  | Description                                                                                                                                                                                                             |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| queueName | \[String]                                                                                                                                                                                                               |
| actionId  | \[Long]                                                                                                                                                                                                                 |
| params    | \[Map] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## enqueueMessageOnPubSub

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.enqueueMessageOnPubSub(
	topic, //String
	region, //String
	message, //String
	orderingKey //String
);
```
{% endcode %}

Details

| Argument    | Description |
| ----------- | ----------- |
| topic       | \[String]   |
| region      | \[String]   |
| message     | \[String]   |
| orderingKey | \[String]   |

***

## enquiryTasks

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.enquiryTasks(
	pars //HashMap
);
```
{% endcode %}

Details

| Argument | Description                                                                                                                                                                                                                 |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pars     | \[HashMap] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## executeAction

Execute synchronously a server-side JS action. A new SQL transaction is created for this action.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.executeAction(
	actionId, //Long
	vo, //Map
	params, //Map
	headers //Map
);
```
{% endcode %}

Details

| Argument | Description                                                              |
| -------- | ------------------------------------------------------------------------ |
| actionId | \[Long] actionId server-side JS action id                                |
| vo       | \[Map]                                                                   |
| params   | \[Map] params map of parameters to pass to the action (as "vo" argument) |
| headers  | \[Map]                                                                   |

***

## executeActionSameTransaction

Execute synchronously a server-side JS action. The same SQL transaction is used for this action.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.executeActionSameTransaction(
	actionId, //Long
	vo, //Map
	params, //Map
	headers //Map
);
```
{% endcode %}

Details

| Argument | Description                                                              |
| -------- | ------------------------------------------------------------------------ |
| actionId | \[Long] actionId server-side JS action id                                |
| vo       | \[Map]                                                                   |
| params   | \[Map] params map of parameters to pass to the action (as "vo" argument) |
| headers  | \[Map]                                                                   |

***

## executeAllExports

Execute all exports, in the order specified by exportOrder field.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return long type
var risp = utils.executeAllExports(
	queryType, //String
	paramValues //Map
);
```
{% endcode %}

Details

| Argument    | Description                                                                                                                       |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| queryType   | \[String] queryType can be null: if set to null, the main query will be used, otherwise, it can be the initial query ("I" value)  |
| paramValues | \[Map] paramValues optional list of parameter values, required by the export definition to work property (query's bind variables) |

***

## executeBigQueryDmlStatement

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Long type
var risp = utils.executeBigQueryDmlStatement(
	datasetName, //String
	sql, //String
	pars //Object[]
);
```
{% endcode %}

Details

| Argument    | Description                                                                                                                                                                                                                   |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| datasetName | \[String]                                                                                                                                                                                                                     |
| sql         | \[String] string value: sql to execute; it can contain ?                                                                                                                                                                      |
| pars        | \[Object\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## executeBigQuerySaveOnLocalTable

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return long type
var risp = utils.executeBigQuerySaveOnLocalTable(
	datastoreId, //Long
	localTableName, //String
	defaultFieldNames, //Map
	csvFields, //Map[]
	defaultDataset, //String
	sqlQuery, //String
	params //Object[]
);
```
{% endcode %}

Details

| Argument          | Description                                                                                                                                                                                                                   |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| datastoreId       | \[Long]                                                                                                                                                                                                                       |
| localTableName    | \[String]                                                                                                                                                                                                                     |
| defaultFieldNames | \[Map]                                                                                                                                                                                                                        |
| csvFields         | \[Map\[]]                                                                                                                                                                                                                     |
| defaultDataset    | \[String]                                                                                                                                                                                                                     |
| sqlQuery          | \[String]                                                                                                                                                                                                                     |
| params            | \[Object\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## executeBigQuerySaveOnTable

Execute the specifield SQL query on the BigQuery service and save the result on a BigQuery table, created automatically.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.executeBigQuerySaveOnTable(
	destinationDataset, //String
	destinationTable, //String
	defaultDataset, //String
	sqlQuery, //String
	params //Object[]
);
```
{% endcode %}

Details

| Argument           | Description                                                                                                                                                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| destinationDataset | \[String]                                                                                                                                                                                                                     |
| destinationTable   | \[String]                                                                                                                                                                                                                     |
| defaultDataset     | \[String]                                                                                                                                                                                                                     |
| sqlQuery           | \[String]                                                                                                                                                                                                                     |
| params             | \[Object\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## executeBigQueryWithCallback

Execute the specifield SQL query on the BigQuery service and get back the result, a record a time, expressed as a list of values.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
function processRowFunName(data) {
	
}

utils.executeBigQueryWithCallback(
	processRowFunName, //String
	defaultDataset, //String
	sqlQuery, //String
	params //Object[]
);
```
{% endcode %}

Details

| Argument          | Description                                                                                                                                                                                                                   |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| processRowFunName | \[String]                                                                                                                                                                                                                     |
| defaultDataset    | \[String]                                                                                                                                                                                                                     |
| sqlQuery          | \[String]                                                                                                                                                                                                                     |
| params            | \[Object\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## executeBigQueryWithObjectCallback

Execute the specifield SQL query on the BigQuery service and get back the result, a record a time, expressed as an object.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
function processRowFunName(data) {
	
}

utils.executeBigQueryWithObjectCallback(
	processRowFunName, //String
	defaultDataset, //String
	sqlQuery, //String
	params //Object[]
);
```
{% endcode %}

Details

| Argument          | Description                                                                                                                                                                                                                   |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| processRowFunName | \[String]                                                                                                                                                                                                                     |
| defaultDataset    | \[String]                                                                                                                                                                                                                     |
| sqlQuery          | \[String]                                                                                                                                                                                                                     |
| params            | \[Object\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## executeCachedQueryOnGoogleDatastore

Get an entity, starting from a GQL query.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.executeCachedQueryOnGoogleDatastore(
	maxCachedEntities, //int
	sql, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	pars //Object[]
);
```
{% endcode %}

Details

| Argument           | Description                                                                                                                                                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| maxCachedEntities  | \[int] maxCachedEntities max number of entities read from this method which will be stored in cached, instead of being retrieved from datastore; the cache can be cleared up, by using "clearDatastoreEntities" method        |
| sql                | \[String] string value: sql to execute; it can contain ?                                                                                                                                                                      |
| dataModelId        | \[Long] data model id, used to compare the attribute value types                                                                                                                                                              |
| interruptExecution | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue                                                     |
| pars               | \[Object\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## executeCachedQueryOnGoogleDatastoreWithSetting

Get an entity, starting from a GQL query.\
Additionally, use the settings argument to apply additional join conditions:

1. inject a cached secondary object in to the specified attribute; required settings:\
   {\
   secondaryObjects: \[\
   {\
   name: "...", // attribute name in the main object, where jnjecting the retrieved secondary object\
   objectName: "...", // secondary object; you can use dataModelId instead\
   dataModelId: "...", // data model id which identifies the secondary object\
   fkName: "...", // attribute name in the main object, representing the linking condition (FK) with the secondary object\
   compositeFkName: \[{ value: "..." }, variable: "...", ...], list of values/variables composing the fk\
   where: "...", // optional: alternative to the previous one and used to manually specify the WHERE condition to get ONE entity from the secondary object; it can contains binding variables expressed as :XXX where XXX is the uncamel of the main object's attribute name\
   longResultSet: true|false // optional: true if the secondary result is long and consequently cannot be read at all, false if there are a few records for the secondary query\
   }\
   ]\
   }
2. inject multiple attributes starting from a cached secondary object in to the specified attribute; required settings:\
   {\
   secondaryAttributes: \[\
   {\
   mapping: {\
   "mainAttrName1": "secondaryAttrName1", // attribute name in the main object, where jnjecting the corresponding attribute fethed from retrieved secondary object\
   "mainAttrName2": "secondaryAttrName2",\
   ...\
   },\
   objectName: "...", // secondary object; you can use dataModelId instead\
   dataModelId: "...", // data model id which identifies the secondary object\
   fkName: "...", // attribute name in the main object, representing the linking condition (FK) with the secondary object\
   compositeFkName: \[{ value: "..." }, variable: "...", ...], list of values/variables composing the fk\
   where: "...", // optional: alternative to the previous one and used to manually specify the WHERE condition to get ONE entity from the secondary object; it can contains binding variables expressed as :XXX where XXX is the uncamel of the main object's attribute name\
   longResultSet: true|false // optional: true if the secondary result is long and consequently cannot be read at all, false if there are a few records for the secondary query\
   }\
   ]\
   }

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.executeCachedQueryOnGoogleDatastoreWithSetting(
	maxCachedEntities, //int
	sql, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	settings, //Map
	pars //Object[]
);
```
{% endcode %}

Details

| Argument           | Description                                                                                                                                                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| maxCachedEntities  | \[int] maxCachedEntities max number of entities read from this method which will be stored in cached, instead of being retrieved from datastore; the cache can be cleared up, by using "clearDatastoreEntities" method        |
| sql                | \[String] string value: sql to execute; it can contain ?                                                                                                                                                                      |
| dataModelId        | \[Long] data model id, used to compare the attribute value types                                                                                                                                                              |
| interruptExecution | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue                                                     |
| settings           | \[Map]                                                                                                                                                                                                                        |
| pars               | \[Object\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## executeExport

Execute an export, starting from the exportId (identifier of the export definition) and the query type.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return long type
var risp = utils.executeExport(
	exportId, //Long
	queryType, //String
	paramValues //Map
);
```
{% endcode %}

Details

| Argument    | Description                                                                                                                       |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| exportId    | \[Long] exportId identifier of the export definition                                                                              |
| queryType   | \[String] queryType can be null: if set to null, the main query will be used, otherwise, it can be the initial query ("I" value)  |
| paramValues | \[Map] paramValues optional list of parameter values, required by the export definition to work property (query's bind variables) |

***

## executeExportsInGroup

Execute a group of exports, starting from the group name and the query type: all export definitions belonging to the same group name\
will be executed, in the order specified by exportOrder field.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return long type
var risp = utils.executeExportsInGroup(
	groupName, //String
	queryType, //String
	paramValues //Map
);
```
{% endcode %}

Details

| Argument    | Description                                                                                                                       |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| groupName   | \[String] groupName identifier for a group of export definitions                                                                  |
| queryType   | \[String] queryType can be null: if set to null, the main query will be used, otherwise, it can be the initial query ("I" value)  |
| paramValues | \[Map] paramValues optional list of parameter values, required by the export definition to work property (query's bind variables) |

***

## executeQueryOnBigQuery

Execute the specified GQL query and apply automatically filtering/sorting conditions coming from the UI.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.executeQueryOnBigQuery(
	sql, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	pars //Object[]
);
```
{% endcode %}

Details

| Argument           | Description                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------- |
| sql                | \[String] string value: sql to execute; it can contain ?                                     |
| dataModelId        | \[Long] dataModelId data model id containing the object structure to retrieve                |
| interruptExecution | \[Boolean] interruptExecution fire an exception in case of errors on execution               |
| pars               | \[Object\[]] pars values related to bind variables included in the GQL query as ?1, ?2, etc. |

***

## executeQueryOnBigQueryWithSettings

Execute the specified GQL query and apply automatically filtering/sorting conditions coming from the UI.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.executeQueryOnBigQueryWithSettings(
	sql, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	map, //Map
	pars //Object[]
);
```
{% endcode %}

Details

| Argument           | Description                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------- |
| sql                | \[String] string value: sql to execute; it can contain ?                                     |
| dataModelId        | \[Long] dataModelId data model id containing the object structure to retrieve                |
| interruptExecution | \[Boolean] interruptExecution fire an exception in case of errors on execution               |
| map                | \[Map]                                                                                       |
| pars               | \[Object\[]] pars values related to bind variables included in the GQL query as ?1, ?2, etc. |

***

## executeQueryOnGoogleDatastore

Execute the specified GQL query and apply automatically filtering/sorting conditions coming from the UI.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.executeQueryOnGoogleDatastore(
	sql, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	pars //Object[]
);
```
{% endcode %}

Details

| Argument           | Description                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------- |
| sql                | \[String] string value: sql to execute; it can contain ?                                     |
| dataModelId        | \[Long] dataModelId data model id containing the object structure to retrieve                |
| interruptExecution | \[Boolean] interruptExecution fire an exception in case of errors on execution               |
| pars               | \[Object\[]] pars values related to bind variables included in the GQL query as ?1, ?2, etc. |

***

## executeQueryOnGoogleDatastoreWithSettings

Execute the specified GQL query and apply automatically filtering/sorting conditions coming from the UI.\
Additionally, use the settings argument to apply additional join conditions:

1. inject a cached secondary object in to the specified attribute; required settings:\
   {\
   secondaryObjects: \[\
   {\
   name: "...", // attribute name in the main object, where jnjecting the retrieved secondary object\
   objectName: "...", // secondary object; you can use dataModelId instead\
   dataModelId: "...", // data model id which identifies the secondary object\
   fkName: "...", // attribute name in the main object, representing the linking condition (FK) with the secondary object\
   compositeFkName: \[{ value: "..." }, variable: "...", ...], list of values/variables composing the fk\
   where: "...", // optional: alternative to the previous one and used to manually specify the WHERE condition to get ONE entity from the secondary object; it can contains binding variables expressed as :XXX where XXX is the uncamel of the main object's attribute name\
   longResultSet: true|false // optional: true if the secondary result is long and consequently cannot be read at all, false if there are a few records for the secondary query\
   }\
   ]\
   }
2. inject multiple attributes starting from a cached secondary object in to the specified attribute; required settings:\
   {\
   secondaryAttributes: \[\
   {\
   mapping: {\
   "mainAttrName1": "secondaryAttrName1", // attribute name in the main object, where jnjecting the corresponding attribute fethed from retrieved secondary object\
   "mainAttrName2": "secondaryAttrName2",\
   ...\
   },\
   objectName: "...", // secondary object; you can use dataModelId instead\
   dataModelId: "...", // data model id which identifies the secondary object\
   fkName: "...", // attribute name in the main object, representing the linking condition (FK) with the secondary object\
   compositeFkName: \[{ value: "..." }, variable: "...", ...], list of values/variables composing the fk\
   where: "...", // optional: alternative to the previous one and used to manually specify the WHERE condition to get ONE entity from the secondary object; it can contains binding variables expressed as :XXX where XXX is the uncamel of the main object's attribute name\
   longResultSet: true|false // optional: true if the secondary result is long and consequently cannot be read at all, false if there are a few records for the secondary query\
   }\
   ]\
   }\
   }

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.executeQueryOnGoogleDatastoreWithSettings(
	sql, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	settings, //Map
	pars //Object[]
);
```
{% endcode %}

Details

| Argument           | Description                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------- |
| sql                | \[String] string value: sql to execute; it can contain ?                                     |
| dataModelId        | \[Long] dataModelId data model id containing the object structure to retrieve                |
| interruptExecution | \[Boolean] interruptExecution fire an exception in case of errors on execution               |
| settings           | \[Map] settings additional settings, used to emulate join conditions                         |
| pars               | \[Object\[]] pars values related to bind variables included in the GQL query as ?1, ?2, etc. |

***

## executeQueryOnGoogleSpanner

Execute the specified GQL query and apply automatically filtering/sorting conditions coming from the UI.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.executeQueryOnGoogleSpanner(
	sql, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	pars //Object[]
);
```
{% endcode %}

Details

| Argument           | Description                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------- |
| sql                | \[String] string value: sql to execute; it can contain ?                                     |
| dataModelId        | \[Long] dataModelId data model id containing the object structure to retrieve                |
| interruptExecution | \[Boolean] interruptExecution fire an exception in case of errors on execution               |
| pars               | \[Object\[]] pars values related to bind variables included in the GQL query as ?1, ?2, etc. |

***

## executeQueryOnGoogleSpannerWithSettings

Execute the specified GQL query and apply automatically filtering/sorting conditions coming from the UI.\
Additionally, use the settings argument to apply additional join conditions:

1. inject a cached secondary object in to the specified attribute; required settings:\
   {\
   secondaryObjects: \[\
   {\
   name: "...", // attribute name in the main object, where jnjecting the retrieved secondary object\
   objectName: "...", // secondary object; you can use dataModelId instead\
   dataModelId: "...", // data model id which identifies the secondary object\
   fkName: "...", // attribute name in the main object, representing the linking condition (FK) with the secondary object\
   compositeFkName: \[{ value: "..." }, variable: "...", ...], list of values/variables composing the fk\
   where: "...", // optional: alternative to the previous one and used to manually specify the WHERE condition to get ONE entity from the secondary object; it can contains binding variables expressed as :XXX where XXX is the uncamel of the main object's attribute name\
   longResultSet: true|false // optional: true if the secondary result is long and consequently cannot be read at all, false if there are a few records for the secondary query\
   }\
   ]\
   }
2. inject multiple attributes starting from a cached secondary object in to the specified attribute; required settings:\
   {\
   secondaryAttributes: \[\
   {\
   mapping: {\
   "mainAttrName1": "secondaryAttrName1", // attribute name in the main object, where jnjecting the corresponding attribute fethed from retrieved secondary object\
   "mainAttrName2": "secondaryAttrName2",\
   ...\
   },\
   objectName: "...", // secondary object; you can use dataModelId instead\
   dataModelId: "...", // data model id which identifies the secondary object\
   fkName: "...", // attribute name in the main object, representing the linking condition (FK) with the secondary object\
   compositeFkName: \[{ value: "..." }, variable: "...", ...], list of values/variables composing the fk\
   where: "...", // optional: alternative to the previous one and used to manually specify the WHERE condition to get ONE entity from the secondary object; it can contains binding variables expressed as :XXX where XXX is the uncamel of the main object's attribute name\
   longResultSet: true|false // optional: true if the secondary result is long and consequently cannot be read at all, false if there are a few records for the secondary query\
   }\
   ]\
   }\
   }

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.executeQueryOnGoogleSpannerWithSettings(
	sql, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	settings, //Map
	pars //Object[]
);
```
{% endcode %}

Details

| Argument           | Description                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------- |
| sql                | \[String] string value: sql to execute; it can contain ?                                     |
| dataModelId        | \[Long] dataModelId data model id containing the object structure to retrieve                |
| interruptExecution | \[Boolean] interruptExecution fire an exception in case of errors on execution               |
| settings           | \[Map] settings additional settings, used to emulate join conditions                         |
| pars               | \[Object\[]] pars values related to bind variables included in the GQL query as ?1, ?2, etc. |

***

## executeQueryOnMongoDb

***

```
                                   MONGODB
```

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.executeQueryOnMongoDb(
	where, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	pars //Object[]
);
```
{% endcode %}

Details

| Argument           | Description                                                                                                                                                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| where              | \[String] String: where condition for query                                                                                                                                                                                   |
| dataModelId        | \[Long] data model id, used to compare the attribute value types                                                                                                                                                              |
| interruptExecution | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue                                                     |
| pars               | \[Object\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## executeSpannerDdl

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.executeSpannerDdl(
	scripts //String[]
);
```
{% endcode %}

Details

| Argument | Description  |
| -------- | ------------ |
| scripts  | \[String\[]] |

***

## executeSpannerSql

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.executeSpannerSql(
	sql //String
);
```
{% endcode %}

Details

| Argument | Description                                              |
| -------- | -------------------------------------------------------- |
| sql      | \[String] string value: sql to execute; it can contain ? |

***

## executeStripePayment

return payment intent id

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.executeStripePayment(
	apiKey, //String
	priceWithCents, //Long
	currency, //String
	customerId //String
);
```
{% endcode %}

Details

| Argument       | Description |
| -------------- | ----------- |
| apiKey         | \[String]   |
| priceWithCents | \[Long]     |
| currency       | \[String]   |
| customerId     | \[String]   |

***

## exportFromExcelFileToGSheet

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.exportFromExcelFileToGSheet(
	sourceDirId, //Long
	sourceFileName, //String
	spreadsheetId, //String
	areas //List
);
```
{% endcode %}

Details

| Argument       | Description                        |
| -------------- | ---------------------------------- |
| sourceDirId    | \[Long]                            |
| sourceFileName | \[String]                          |
| spreadsheetId  | \[String] Id of Google SpreadSheet |
| areas          | \[List]                            |

***

## exportFromExcelFileToGSheet

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.exportFromExcelFileToGSheet(
	userId, //String
	sourceDirId, //Long
	sourceFileName, //String
	spreadsheetId, //String
	areas //List
);
```
{% endcode %}

Details

| Argument       | Description                                                                                                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId         | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| sourceDirId    | \[Long]                                                                                                                                                                                                                  |
| sourceFileName | \[String]                                                                                                                                                                                                                |
| spreadsheetId  | \[String] Id of Google SpreadSheet                                                                                                                                                                                       |
| areas          | \[List]                                                                                                                                                                                                                  |

***

## exportUsersToDatastore

Export PRM01\_USERS users to Google Datastore Users entity (Platform for GAE)

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.exportUsersToDatastore(
	companyId //String
);
```
{% endcode %}

Details

| Argument  | Description |
| --------- | ----------- |
| companyId | \[String]   |

***

## exportUsersToDatastore

Export PRM01\_USERS users to Google Datastore Users entity (Platform for GAE)

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.exportUsersToDatastore();
```
{% endcode %}

***

## extractBigQueryData

Extract data from the specified BigQuery table to a Google Cloud Storage file.\
You can export up to 1 GB of table data to a single file.\
If you are exporting more than 1 GB of data, use a wildcard to export the data into multiple files.\
When you export data to multiple files, the size of the files will vary.\
You cannot export nested and repeated data in CSV format. Nested and repeated data is supported for Avro and JSON exports.\
You cannot export data from multiple tables in a single export job.\
Examples for gcsUrl:\
gs://my-bucket/file-name.json\
gs://my-bucket/file-name-.json\
gs://my-bucket/path-component- /file-name.json

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.extractBigQueryData(
	datasetName, //String
	tableName, //String
	format, //String
	gcsUrl, //String
	deleteTableAfterExport, //Boolean
	exportHeaders //Boolean
);
```
{% endcode %}

Details

| Argument               | Description                                                                            |
| ---------------------- | -------------------------------------------------------------------------------------- |
| datasetName            | \[String]                                                                              |
| tableName              | \[String] String: name of table                                                        |
| format                 | \[String] format export format; supported values: CSV (with comma separator),JSON,Avro |
| gcsUrl                 | \[String] gcsUrl Google Cloud Storage URI                                              |
| deleteTableAfterExport | \[Boolean]                                                                             |
| exportHeaders          | \[Boolean]                                                                             |

***

## forceMobileDeviceUpdates

Force all data to be sent again for one device, in terms of updates.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.forceMobileDeviceUpdates(
	deviceId //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| deviceId | \[String]   |

***

## generateDocx

Create a .docx file starting from a template and save it to the specified absolute path

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.generateDocx(
	reportId, //Long
	args, //Object>
	langId, //String
	path, //String
	fileName //String
);
```
{% endcode %}

Details

| Argument | Description                                                                                                                                    |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| reportId | \[Long] reportId long value representing a specific report template in CON66                                                                   |
| args     | \[Object>] args a collection of pairs \<attributeName,attributeValue> to use to bind queries connected to that report                          |
| langId   | \[String] langId (optional) language that identify the template to use; can be null                                                            |
| path     | \[String] path the absolute path where saving the document (it must not include the file name)                                                 |
| fileName | \[String] fileName (optional) the name to use when creating the file; may be null: in that case, a dynamic name will be assigned automatically |

***

## generateGCPAuthToken

Get an URL to authorize the generation of an auth token for GCP, starting from the specified service account + key and user

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.generateGCPAuthToken(
	user, //String
	serviceAccountEmail, //String
	privateKeyString, //String
	redirectUri, //String
	_scopes //String[]
);
```
{% endcode %}

Details

| Argument            | Description  |
| ------------------- | ------------ |
| user                | \[String]    |
| serviceAccountEmail | \[String]    |
| privateKeyString    | \[String]    |
| redirectUri         | \[String]    |
| \_scopes            | \[String\[]] |

***

## getActivitiLastVersionProcessId

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getActivitiLastVersionProcessId(
	id //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| id       | \[String]   |

***

## getActivitiProcessAsJson

Get a JSON representation of the specified process id

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getActivitiProcessAsJson(
	id, //String
	includeSubProcesses, //Boolean
	tasksDueDates //Map
);
```
{% endcode %}

Details

| Argument            | Description                                                                                                                                                                  |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                  | \[String] id process id                                                                                                                                                      |
| includeSubProcesses | \[Boolean] includeSubProcesses flag used to define whether including subprocesses as well                                                                                    |
| tasksDueDates       | \[Map] tasksDueDates couples: \<processid.taskid,duedate> where duedate can be a String in the ISO format or a String representing a date in the "yyyy-MM-ddHH:mm:ss" format |

***

## getActivitiProcessInstancesVariables

Get ALL variables of a process instance in Activiti BPM.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getActivitiProcessInstancesVariables(
	processInstanceId, //String
	processDefinitionId //String
);
```
{% endcode %}

Details

| Argument            | Description                                            |
| ------------------- | ------------------------------------------------------ |
| processInstanceId   | \[String] processInstanceId id of the process instance |
| processDefinitionId | \[String] processDefinitionId process id               |

***

## getActivitiUserAssignedTasks

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getActivitiUserAssignedTasks(
	assignee, //String
	processInstanceId, //String
	taskDefinitionKey //String
);
```
{% endcode %}

Details

| Argument          | Description |
| ----------------- | ----------- |
| assignee          | \[String]   |
| processInstanceId | \[String]   |
| taskDefinitionKey | \[String]   |

***

## getActivitiUserCandidateTasks

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getActivitiUserCandidateTasks(
	candidate, //String
	processInstanceId, //String
	taskDefinitionKey //String
);
```
{% endcode %}

Details

| Argument          | Description |
| ----------------- | ----------- |
| candidate         | \[String]   |
| processInstanceId | \[String]   |
| taskDefinitionKey | \[String]   |

***

## getAlfrescoDocument

Extract a file from Alfresco and save it to the specified local file path.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.getAlfrescoDocument(
	id, //String
	fileName, //String
	destPath //String
);
```
{% endcode %}

Details

| Argument | Description                                                                    |
| -------- | ------------------------------------------------------------------------------ |
| id       | \[String] id file UUID within Alfresco                                         |
| fileName | \[String] fileName file name within Alfresco                                   |
| destPath | \[String] destPath path where saving it; it does NOT contain the file name too |

***

## getAlfrescoWebScript

Execute an Alfresco web script, starting with "service/xyz?..." and fetch the result, expresses as a String (e.g. a JSON or XML result content)

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getAlfrescoWebScript(
	uri, //String
	replaceVariables, //boolean
	httpMethod, //String
	bodyRequest, //String
	charSet //String
);
```
{% endcode %}

Details

| Argument         | Description                                                                                                 |
| ---------------- | ----------------------------------------------------------------------------------------------------------- |
| uri              | \[String] uri URI, expressed as http:// or https:// with or without variables, expressed as :XXX            |
| replaceVariables | \[boolean] replaceVariables flag used to replace variables within the uri (variables are expressed as :XXX) |
| httpMethod       | \[String] (optional: can be null); if specified, it defines the HTTP method: GET, POST, PATCH, PUT, DELETE  |
| bodyRequest      | \[String]                                                                                                   |
| charSet          | \[String]                                                                                                   |

***

## getAlfrescoWebScript

Execute an Alfresco web script, starting with "service/xyz?..." and fetch the result, expresses as a String (e.g. a JSON or XML result content)

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getAlfrescoWebScript(
	uri, //String
	replaceVariables, //boolean
	httpMethod, //String
	bodyRequest //String
);
```
{% endcode %}

Details

| Argument         | Description                                                                                                 |
| ---------------- | ----------------------------------------------------------------------------------------------------------- |
| uri              | \[String] uri URI, expressed as http:// or https:// with or without variables, expressed as :XXX            |
| replaceVariables | \[boolean] replaceVariables flag used to replace variables within the uri (variables are expressed as :XXX) |
| httpMethod       | \[String] (optional: can be null); if specified, it defines the HTTP method: GET, POST, PATCH, PUT, DELETE  |
| bodyRequest      | \[String]                                                                                                   |

***

## getBigQueryDataset

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getBigQueryDataset();
```
{% endcode %}

***

## getButtonsAuthorizationOfUser

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Map type
var risp = utils.getButtonsAuthorizationOfUser();
```
{% endcode %}

***

## getCustomApplFromCookie

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getCustomApplFromCookie(
	key //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| key      | \[String]   |

***

## getDetailOnArchiflow

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getDetailOnArchiflow(
	dataModelId, //Long
	cardId, //String
	additionalSettings //Map
);
```
{% endcode %}

Details

| Argument           | Description                                                      |
| ------------------ | ---------------------------------------------------------------- |
| dataModelId        | \[Long] data model id, used to compare the attribute value types |
| cardId             | \[String]                                                        |
| additionalSettings | \[Map]                                                           |

***

## getElementFromQueueByNote

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getElementFromQueueByNote(
	note, //String
	namespace //String
);
```
{% endcode %}

Details

| Argument  | Description |
| --------- | ----------- |
| note      | \[String]   |
| namespace | \[String]   |

***

## getEntities

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Map[] type
var risp = utils.getEntities(
	entityName, //String
	entityKeys //Object[]
);
```
{% endcode %}

Details

| Argument   | Description  |
| ---------- | ------------ |
| entityName | \[String]    |
| entityKeys | \[Object\[]] |

***

## getEntitiesAsJSON

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getEntitiesAsJSON(
	entityName, //String
	entityKeys //Object[]
);
```
{% endcode %}

Details

| Argument   | Description  |
| ---------- | ------------ |
| entityName | \[String]    |
| entityKeys | \[Object\[]] |

***

## getEntity

Get an entity, starting from its key.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Map type
var risp = utils.getEntity(
	entityName, //String
	key, //Object
	maxCachedEntities //int
);
```
{% endcode %}

Details

| Argument          | Description                                                                                                                                                                                                            |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| entityName        | \[String] entityName entity name, expressed in camel case                                                                                                                                                              |
| key               | \[Object] key entity key, usually a String                                                                                                                                                                             |
| maxCachedEntities | \[int] maxCachedEntities max number of entities read from this method which will be stored in cached, instead of being retrieved from datastore; the cache can be cleared up, by using "clearDatastoreEntities" method |

***

## getEntity

Get an entity, starting from its key.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Map type
var risp = utils.getEntity(
	entityName, //String
	key, //Object
	maxCachedEntities, //int
	expirationTime //Long
);
```
{% endcode %}

Details

| Argument          | Description                                                                                                                                                                                                            |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| entityName        | \[String] entityName entity name, expressed in camel case                                                                                                                                                              |
| key               | \[Object] key entity key, usually a String                                                                                                                                                                             |
| maxCachedEntities | \[int] maxCachedEntities max number of entities read from this method which will be stored in cached, instead of being retrieved from datastore; the cache can be cleared up, by using "clearDatastoreEntities" method |
| expirationTime    | \[Long] expirationTime expiration time, expressed in minutes                                                                                                                                                           |

***

## getEntityAsJSON

Get an entity, starting from its key.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getEntityAsJSON(
	entityName, //String
	key, //Object
	maxCachedEntities //int
);
```
{% endcode %}

Details

| Argument          | Description                                                                                                                                                                                                            |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| entityName        | \[String] entityName entity name, expressed in camel case                                                                                                                                                              |
| key               | \[Object] key entity key, usually a String                                                                                                                                                                             |
| maxCachedEntities | \[int] maxCachedEntities max number of entities read from this method which will be stored in cached, instead of being retrieved from datastore; the cache can be cleared up, by using "clearDatastoreEntities" method |

***

## getEntityAsJSON

Get an entity, starting from its key.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getEntityAsJSON(
	entityName, //String
	key, //Object
	maxCachedEntities, //int
	expirationTime //Long
);
```
{% endcode %}

Details

| Argument          | Description                                                                                                                                                                                                            |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| entityName        | \[String] entityName entity name, expressed in camel case                                                                                                                                                              |
| key               | \[Object] key entity key, usually a String                                                                                                                                                                             |
| maxCachedEntities | \[int] maxCachedEntities max number of entities read from this method which will be stored in cached, instead of being retrieved from datastore; the cache can be cleared up, by using "clearDatastoreEntities" method |
| expirationTime    | \[Long] expirationTime expiration time, expressed in minutes                                                                                                                                                           |

***

## getFunctionAuthorizationOfUser

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Map type
var risp = utils.getFunctionAuthorizationOfUser(
	functionId //String
);
```
{% endcode %}

Details

| Argument   | Description |
| ---------- | ----------- |
| functionId | \[String]   |

***

## getGCPAuthToken

Get an auth token for GCP, starting from the specified service account + key and user

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getGCPAuthToken(
	user, //String
	serviceAccountEmail, //String
	privateKeyString, //String
	_scopes //String[]
);
```
{% endcode %}

Details

| Argument            | Description  |
| ------------------- | ------------ |
| user                | \[String]    |
| serviceAccountEmail | \[String]    |
| privateKeyString    | \[String]    |
| \_scopes            | \[String\[]] |

***

## getGoogleCalendarAccessToken

Get Google Calendar Client

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getGoogleCalendarAccessToken(
	serviceAccountEmail, //String
	privateKeyString, //String
	userId //String
);
```
{% endcode %}

Details

| Argument            | Description                                                                                                                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| serviceAccountEmail | \[String]                                                                                                                                                                                                                |
| privateKeyString    | \[String]                                                                                                                                                                                                                |
| userId              | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |

***

## getGoogleCloudStorageBucket

Get bucket information

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return FileContainer type
var risp = utils.getGoogleCloudStorageBucket(
	bucketName //String
);
```
{% endcode %}

Details

| Argument   | Description |
| ---------- | ----------- |
| bucketName | \[String]   |

***

## getGoogleCloudStorageBucketVersioning

Check status of bucket object versioning

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Boolean type
var risp = utils.getGoogleCloudStorageBucketVersioning(
	bucketName //String
);
```
{% endcode %}

Details

| Argument   | Description |
| ---------- | ----------- |
| bucketName | \[String]   |

***

## getGoogleCloudStorageObject

Get object information

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.getGoogleCloudStorageObject(
	bucketName, //String
	objectName //String
);
```
{% endcode %}

Details

| Argument   | Description |
| ---------- | ----------- |
| bucketName | \[String]   |
| objectName | \[String]   |

***

## getGoogleCloudStorageObjectVersions

Get a list of object versions

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return List type
var risp = utils.getGoogleCloudStorageObjectVersions(
	bucketName, //String
	objectName //String
);
```
{% endcode %}

Details

| Argument   | Description |
| ---------- | ----------- |
| bucketName | \[String]   |
| objectName | \[String]   |

***

## getGoogleCloudStorageSignedURL

Get the signed URL to download a Google Cloud Storage object

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getGoogleCloudStorageSignedURL(
	verb, //String
	expiration, //Long
	bucketName, //String
	objectName, //String
	mime //String
);
```
{% endcode %}

Details

| Argument   | Description |
| ---------- | ----------- |
| verb       | \[String]   |
| expiration | \[Long]     |
| bucketName | \[String]   |
| objectName | \[String]   |
| mime       | \[String]   |

***

## getGoogleContactsFiltered

Fetches a list of contacts, filtered by searchString, max contacts equals maxResults.\
The splitEmails parameters creates an object for every email address o the fetched contacts.\
The contacts number is not the same of e-mail number, as every contact can have multiple\
e-mail addresses.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return List type
var risp = utils.getGoogleContactsFiltered(
	pages, //Integer
	maxPageResults, //Integer
	searchString, //String
	splitEmails //Boolean
);
```
{% endcode %}

Details

| Argument       | Description |
| -------------- | ----------- |
| pages          | \[Integer]  |
| maxPageResults | \[Integer]  |
| searchString   | \[String]   |
| splitEmails    | \[Boolean]  |

***

## getGoogleDomainContactsFiltered

Fetches a list of contacts, filtered by searchString, max contacts equals maxResults\
from del Google Apps domain Shared Contact List (aka GAL).\
The splitEmails parameters creates an object for every email address o the fetched contacts.\
The contacts number is not the same of e-mail number, as every contact can have multiple\
e-mail addresses.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return List type
var risp = utils.getGoogleDomainContactsFiltered(
	pages, //Integer
	maxPageResults, //Integer
	query, //String
	orderBy, //String
	sortOrder //String
);
```
{% endcode %}

Details

| Argument       | Description |
| -------------- | ----------- |
| pages          | \[Integer]  |
| maxPageResults | \[Integer]  |
| query          | \[String]   |
| orderBy        | \[String]   |
| sortOrder      | \[String]   |

***

## getGoogleDriveFileDownloadURL

Return the URL to download a file

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getGoogleDriveFileDownloadURL(
	fileId //String
);
```
{% endcode %}

Details

| Argument | Description                 |
| -------- | --------------------------- |
| fileId   | \[String] id of Google file |

***

## getGoogleDriveFileInfo

Returns the metadata of a file stored in Google Drive, accessible by the current user

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.getGoogleDriveFileInfo(
	fileId //String
);
```
{% endcode %}

Details

| Argument | Description                 |
| -------- | --------------------------- |
| fileId   | \[String] id of Google file |

***

## getGoogleDriveFileInfo

Returns the metadata of a file stored in Google Drive, accessible by the current user

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.getGoogleDriveFileInfo(
	userId, //String
	fileId //String
);
```
{% endcode %}

Details

| Argument | Description                                                                                                                                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId   | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| fileId   | \[String] id of Google file                                                                                                                                                                                              |

***

## getGoogleDriveFileOpenURL

Return the URL to open the file

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getGoogleDriveFileOpenURL(
	fileId //String
);
```
{% endcode %}

Details

| Argument | Description                 |
| -------- | --------------------------- |
| fileId   | \[String] id of Google file |

***

## getGoogleDriveFileProperty

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getGoogleDriveFileProperty(
	fileId, //String
	key, //String
	visibility //String
);
```
{% endcode %}

Details

| Argument   | Description                 |
| ---------- | --------------------------- |
| fileId     | \[String] id of Google file |
| key        | \[String]                   |
| visibility | \[String]                   |

***

## getGoogleDriveFileProperty

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getGoogleDriveFileProperty(
	userId, //String
	fileId, //String
	key, //String
	visibility //String
);
```
{% endcode %}

Details

| Argument   | Description                                                                                                                                                                                                              |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId     | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| fileId     | \[String] id of Google file                                                                                                                                                                                              |
| key        | \[String]                                                                                                                                                                                                                |
| visibility | \[String]                                                                                                                                                                                                                |

***

## getGoogleDriveFileRevisions

Get file revisions from current user Google Drive

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return List type
var risp = utils.getGoogleDriveFileRevisions(
	fileId //String
);
```
{% endcode %}

Details

| Argument | Description                 |
| -------- | --------------------------- |
| fileId   | \[String] id of Google file |

***

## getGoogleDriveFileRevisions

Get file revisions from current user Google Drive

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return List type
var risp = utils.getGoogleDriveFileRevisions(
	userId, //String
	fileId //String
);
```
{% endcode %}

Details

| Argument | Description                                                                                                                                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId   | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| fileId   | \[String] id of Google file                                                                                                                                                                                              |

***

## getGoogleDriveFolderContents

Get a list of files of the content of a folder in the current user Drive. A query can be specified and also file in trash can be searched

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return List type
var risp = utils.getGoogleDriveFolderContents(
	folderId, //String
	query, //String
	trashed //Boolean
);
```
{% endcode %}

Details

| Argument | Description                   |
| -------- | ----------------------------- |
| folderId | \[String] id of Google folder |
| query    | \[String]                     |
| trashed  | \[Boolean]                    |

***

## getGoogleDriveFolderContents

Get a list of files of the content of a folder in the current user Drive. A query can be specified and also file in trash can be searched

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return List type
var risp = utils.getGoogleDriveFolderContents(
	userId, //String
	folderId, //String
	query, //String
	trashed //Boolean
);
```
{% endcode %}

Details

| Argument | Description                                                                                                                                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId   | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| folderId | \[String] id of Google folder                                                                                                                                                                                            |
| query    | \[String]                                                                                                                                                                                                                |
| trashed  | \[Boolean]                                                                                                                                                                                                               |

***

## getGoogleDriveFolderContentsIds

Get a list of ids of the content of a folder in the current user Drive. A query can be specified and also file in trash can be searched

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return List type
var risp = utils.getGoogleDriveFolderContentsIds(
	folderId, //String
	query, //String
	trashed //boolean
);
```
{% endcode %}

Details

| Argument | Description                   |
| -------- | ----------------------------- |
| folderId | \[String] id of Google folder |
| query    | \[String]                     |
| trashed  | \[boolean]                    |

***

## getGoogleDriveFolderContentsIds

Get a list of ids of the content of a folder in the current user Drive. A query can be specified and also file in trash can be searched

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return List type
var risp = utils.getGoogleDriveFolderContentsIds(
	userId, //String
	folderId, //String
	query, //String
	trashed //boolean
);
```
{% endcode %}

Details

| Argument | Description                                                                                                                                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId   | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| folderId | \[String] id of Google folder                                                                                                                                                                                            |
| query    | \[String]                                                                                                                                                                                                                |
| trashed  | \[boolean]                                                                                                                                                                                                               |

***

## getGoogleOAuth2AccessToken

Get the Google OAuth2 token for REST requests, for the desired scopes,\
for the projectId specified.\
Two keys have to be specified in CON44 or CON07:\
GOOGLE\_SERVACC\_EMAIL\_\
GOOGLE\_SERVACC\_KEY\_

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getGoogleOAuth2AccessToken(
	scopes //String[]
);
```
{% endcode %}

Details

| Argument | Description  |
| -------- | ------------ |
| scopes   | \[String\[]] |

***

## getGoogleOAuth2AccessToken

Get the Google OAuth2 token for REST requests, for the desired scopes,\
for the projectId specified.\
Two keys have to be specified in CON44 or CON07:\
GOOGLE\_SERVACC\_EMAIL\_\
GOOGLE\_SERVACC\_KEY\_

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getGoogleOAuth2AccessToken(
	projectId, //String
	serviceAccountEmail, //String
	privateKeyString, //String
	scopes //String[]
);
```
{% endcode %}

Details

| Argument            | Description  |
| ------------------- | ------------ |
| projectId           | \[String]    |
| serviceAccountEmail | \[String]    |
| privateKeyString    | \[String]    |
| scopes              | \[String\[]] |

***

## getGoogleOAuth2AccessToken

Get the Google OAuth2 token for REST requests, for the desired scopes,\
for the projectId specified.\
Two keys have to be specified in CON44 or CON07:\
GOOGLE\_SERVACC\_EMAIL\_\
GOOGLE\_SERVACC\_KEY\_

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getGoogleOAuth2AccessToken(
	projectId, //String
	scopes //String[]
);
```
{% endcode %}

Details

| Argument  | Description  |
| --------- | ------------ |
| projectId | \[String]    |
| scopes    | \[String\[]] |

***

## getGoogleSharedContactsFiltered

Fetches a list of contacts, filtered by searchString, max contacts equals maxResults\
from del Google Apps domain Shared Contact List (aka GAL).\
The splitEmails parameters creates an object for every email address o the fetched contacts.\
The contacts number is not the same of e-mail number, as every contact can have multiple\
e-mail addresses.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return List type
var risp = utils.getGoogleSharedContactsFiltered(
	pages, //Integer
	maxPageResults, //Integer
	searchString, //String
	splitEmails //Boolean
);
```
{% endcode %}

Details

| Argument       | Description |
| -------------- | ----------- |
| pages          | \[Integer]  |
| maxPageResults | \[Integer]  |
| searchString   | \[String]   |
| splitEmails    | \[Boolean]  |

***

## getGoogleSheetData

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getGoogleSheetData(
	userId, //String
	spreadsheetId, //String
	range, //String>
	valueRenderOption, //String
	dateTimeRenderOption //String
);
```
{% endcode %}

Details

| Argument             | Description                                                                                                                                                                                                              |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId               | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| spreadsheetId        | \[String] Id of Google SpreadSheet                                                                                                                                                                                       |
| range                | \[String>]                                                                                                                                                                                                               |
| valueRenderOption    | \[String]                                                                                                                                                                                                                |
| dateTimeRenderOption | \[String]                                                                                                                                                                                                                |

***

## getGoogleSheetData

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getGoogleSheetData(
	userId, //String
	spreadsheetId, //String
	range, //String
	valueRenderOption, //String
	dateTimeRenderOption //String
);
```
{% endcode %}

Details

| Argument             | Description                                                                                                                                                                                                              |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId               | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| spreadsheetId        | \[String] Id of Google SpreadSheet                                                                                                                                                                                       |
| range                | \[String]                                                                                                                                                                                                                |
| valueRenderOption    | \[String]                                                                                                                                                                                                                |
| dateTimeRenderOption | \[String]                                                                                                                                                                                                                |

***

## getGoogleSheetData

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getGoogleSheetData(
	userId, //String
	dataModelId, //Long
	spreadsheetId, //String
	range, //String>
	valueRenderOption, //String
	dateTimeRenderOption //String
);
```
{% endcode %}

Details

| Argument             | Description                                                                                                                                                                                                              |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId               | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| dataModelId          | \[Long] data model id, used to compare the attribute value types                                                                                                                                                         |
| spreadsheetId        | \[String] Id of Google SpreadSheet                                                                                                                                                                                       |
| range                | \[String>]                                                                                                                                                                                                               |
| valueRenderOption    | \[String]                                                                                                                                                                                                                |
| dateTimeRenderOption | \[String]                                                                                                                                                                                                                |

***

## getGoogleSheetData

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getGoogleSheetData(
	userId, //String
	dataModelId, //Long
	spreadsheetId, //String
	range, //String
	valueRenderOption, //String
	dateTimeRenderOption //String
);
```
{% endcode %}

Details

| Argument             | Description                                                                                                                                                                                                              |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId               | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| dataModelId          | \[Long] data model id, used to compare the attribute value types                                                                                                                                                         |
| spreadsheetId        | \[String] Id of Google SpreadSheet                                                                                                                                                                                       |
| range                | \[String]                                                                                                                                                                                                                |
| valueRenderOption    | \[String]                                                                                                                                                                                                                |
| dateTimeRenderOption | \[String]                                                                                                                                                                                                                |

***

## getGoogleSheets

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getGoogleSheets(
	spreadsheetId //String
);
```
{% endcode %}

Details

| Argument      | Description                        |
| ------------- | ---------------------------------- |
| spreadsheetId | \[String] Id of Google SpreadSheet |

***

## getGoogleSheets

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getGoogleSheets(
	userId, //String
	spreadsheetId //String
);
```
{% endcode %}

Details

| Argument      | Description                                                                                                                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId        | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| spreadsheetId | \[String] Id of Google SpreadSheet                                                                                                                                                                                       |

***

## getGroupMembers

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getGroupMembers(
	userId, //String
	groupId //String
);
```
{% endcode %}

Details

| Argument | Description                                                                                                                                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId   | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| groupId  | \[String]                                                                                                                                                                                                                |

***

## getInfoFiles

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return ArrayList type
var risp = utils.getInfoFiles(
	dirId, //Long
	subFolder, //Boolean
	operator, //String
	fileName, //String
	caseSensitive //Boolean
);
```
{% endcode %}

Details

| Argument      | Description                                        |
| ------------- | -------------------------------------------------- |
| dirId         | \[Long] dir id used to find or write or read files |
| subFolder     | \[Boolean]                                         |
| operator      | \[String]                                          |
| fileName      | \[String] file name                                |
| caseSensitive | \[Boolean]                                         |

***

## getInternalCacheKeyCount

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return int type
var risp = utils.getInternalCacheKeyCount();
```
{% endcode %}

***

## getInternalCacheKeys

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getInternalCacheKeys(
	namespace //String
);
```
{% endcode %}

Details

| Argument  | Description |
| --------- | ----------- |
| namespace | \[String]   |

***

## getInternalCacheMetadataSize

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return long type
var risp = utils.getInternalCacheMetadataSize(
	namespace, //String
	appId //String
);
```
{% endcode %}

Details

| Argument  | Description |
| --------- | ----------- |
| namespace | \[String]   |
| appId     | \[String]   |

***

## getInternalCacheSize

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return long type
var risp = utils.getInternalCacheSize();
```
{% endcode %}

***

## getInvolvedNotAssignedTasks

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getInvolvedNotAssignedTasks(
	pars, //HashMap
	username //String
);
```
{% endcode %}

Details

| Argument | Description                                                                                                                                                                                                                 |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pars     | \[HashMap] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |
| username | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user.    |

***

## getKeysFromCache

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String[] type
var risp = utils.getKeysFromCache(
	keyPrefix //String
);
```
{% endcode %}

Details

| Argument  | Description |
| --------- | ----------- |
| keyPrefix | \[String]   |

***

## getLastSynchronizationDevice

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Timestamp type
var risp = utils.getLastSynchronizationDevice();
```
{% endcode %}

***

## getModifiedPks

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return ArrayList type
var risp = utils.getModifiedPks(
	tableName, //String
	field, //String
	changedStardDate, //Date
	changedEndDate //Date
);
```
{% endcode %}

Details

| Argument         | Description                     |
| ---------------- | ------------------------------- |
| tableName        | \[String] String: name of table |
| field            | \[String]                       |
| changedStardDate | \[Date]                         |
| changedEndDate   | \[Date]                         |

***

## getOAuth2AccessToken

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getOAuth2AccessToken(
	clientId, //String
	clientSecret, //String
	callback, //String
	scope, //String
	accessTokenEndpoint, //String
	authorizationBaseUrl, //String
	code //String
);
```
{% endcode %}

Details

| Argument             | Description |
| -------------------- | ----------- |
| clientId             | \[String]   |
| clientSecret         | \[String]   |
| callback             | \[String]   |
| scope                | \[String]   |
| accessTokenEndpoint  | \[String]   |
| authorizationBaseUrl | \[String]   |
| code                 | \[String]   |

***

## getOAuth2AuthorizationUrl

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getOAuth2AuthorizationUrl(
	clientId, //String
	clientSecret, //String
	callback, //String
	scope, //String
	accessTokenEndpoint, //String
	authorizationBaseUrl //String
);
```
{% endcode %}

Details

| Argument             | Description |
| -------------------- | ----------- |
| clientId             | \[String]   |
| clientSecret         | \[String]   |
| callback             | \[String]   |
| scope                | \[String]   |
| accessTokenEndpoint  | \[String]   |
| authorizationBaseUrl | \[String]   |

***

## getPartialResultOnArchiflow

return { valueObjectList: \[....], moreRows: true|false, resultSetLength: num }

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getPartialResultOnArchiflow(
	dataModelId, //Long
	filters, //Map[]
	archiveIds, //Integer[]
	cardsWithAttachedDoc, //Boolean
	searchTypes, //Integer
	additionalSettings //Map
);
```
{% endcode %}

Details

| Argument             | Description                                                      |
| -------------------- | ---------------------------------------------------------------- |
| dataModelId          | \[Long] data model id, used to compare the attribute value types |
| filters              | \[Map\[]]                                                        |
| archiveIds           | \[Integer\[]]                                                    |
| cardsWithAttachedDoc | \[Boolean]                                                       |
| searchTypes          | \[Integer]                                                       |
| additionalSettings   | \[Map]                                                           |

***

## getPartialResultOnBigQuery

Execute the specified GQL query and apply automatically filtering/sorting conditions coming from the UI.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getPartialResultOnBigQuery(
	sql, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	pars //Object[]
);
```
{% endcode %}

Details

| Argument           | Description                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------- |
| sql                | \[String] string value: sql to execute; it can contain ?                                     |
| dataModelId        | \[Long] dataModelId data model id containing the object structure to retrieve                |
| interruptExecution | \[Boolean] interruptExecution fire an exception in case of errors on execution               |
| pars               | \[Object\[]] pars values related to bind variables included in the GQL query as ?1, ?2, etc. |

***

## getPartialResultOnBigQueryWithSettings

Execute the specified GQL query and apply automatically filtering/sorting conditions coming from the UI.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getPartialResultOnBigQueryWithSettings(
	sql, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	settings, //Map
	pars //Object[]
);
```
{% endcode %}

Details

| Argument           | Description                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------- |
| sql                | \[String] string value: sql to execute; it can contain ?                                     |
| dataModelId        | \[Long] dataModelId data model id containing the object structure to retrieve                |
| interruptExecution | \[Boolean] interruptExecution fire an exception in case of errors on execution               |
| settings           | \[Map] settings can be null; javascript object containing additiona settings: { count: true  |
| pars               | \[Object\[]] pars values related to bind variables included in the GQL query as ?1, ?2, etc. |

***

## getPartialResultOnGoogleDatastore

Execute the specified GQL query and apply automatically filtering/sorting conditions coming from the UI.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getPartialResultOnGoogleDatastore(
	sql, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	pars //Object[]
);
```
{% endcode %}

Details

| Argument           | Description                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------- |
| sql                | \[String] string value: sql to execute; it can contain ?                                     |
| dataModelId        | \[Long] dataModelId data model id containing the object structure to retrieve                |
| interruptExecution | \[Boolean] interruptExecution fire an exception in case of errors on execution               |
| pars               | \[Object\[]] pars values related to bind variables included in the GQL query as ?1, ?2, etc. |

***

## getPartialResultOnGoogleDatastoreWithSettings

Execute the specified GQL query and apply automatically filtering/sorting conditions coming from the UI.\
Additionally, use the settings argument to apply additional join conditions:

1. inject a cached secondary object in to the specified attribute; required settings:\
   {\
   secondaryObjects: \[\
   {\
   name: "...", // attribute name in the main object, where jnjecting the retrieved secondary object\
   objectName: "...", // secondary object; you can use dataModelId instead\
   dataModelId: "...", // data model id which identifies the secondary object\
   fkName: "...", // attribute name in the main object, representing the linking condition (FK) with the secondary object\
   compositeFkName: \[{ value: "..." }, variable: "...", ...], list of values/variables composing the fk\
   where: "...", // optional: alternative to the previous one and used to manually specify the WHERE condition to get ONE entity from the secondary object; it can contains binding variables expressed as :XXX where XXX is the uncamel of the main object's attribute name\
   longResultSet: true|false // optional: true if the secondary result is long and consequently cannot be read at all, false if there are a few records for the secondary query\
   }\
   ]\
   }
2. inject multiple attributes starting from a cached secondary object in to the specified attribute; required settings:\
   {\
   secondaryAttributes: \[\
   {\
   mapping: {\
   "mainAttrName1": "secondaryAttrName1", // attribute name in the main object, where jnjecting the corresponding attribute fethed from retrieved secondary object\
   "mainAttrName2": "secondaryAttrName2",\
   ...\
   },\
   objectName: "...", // secondary object; you can use dataModelId instead\
   dataModelId: "...", // data model id which identifies the secondary object\
   fkName: "...", // attribute name in the main object, representing the linking condition (FK) with the secondary object\
   compositeFkName: \[{ value: "..." }, variable: "...", ...], list of values/variables composing the fk\
   where: "...", // optional: alternative to the previous one and used to manually specify the WHERE condition to get ONE entity from the secondary object; it can contains binding variables expressed as :XXX where XXX is the uncamel of the main object's attribute name\
   longResultSet: true|false // optional: true if the secondary result is long and consequently cannot be read at all, false if there are a few records for the secondary query\
   }\
   ]\
   }
3. specify "main" filtering conditions, i.e. list of alternative sets of attributes actually applied to GQL; all other filtering conditions will be applied applicatively, not through DS\
   NOTE: these properties are taken into account ONLY IF all result set has been retrieved (no data pagination)\
   {\
   mainFilteringConditions: \[\
   "attr1,attr2",\
   "attr2,attr4,...",\
   ...\
   ]\
   }
4. sorting conditions passed through the UI will be applied applicatively, instead of through DS,.\
   ONLY IF the whole result set has been retrieved (no data pagination)\
   AND mainFilteringConditions has been specified

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getPartialResultOnGoogleDatastoreWithSettings(
	sql, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	settings, //Map
	pars //Object[]
);
```
{% endcode %}

Details

| Argument           | Description                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------- |
| sql                | \[String] string value: sql to execute; it can contain ?                                     |
| dataModelId        | \[Long] dataModelId data model id containing the object structure to retrieve                |
| interruptExecution | \[Boolean] interruptExecution fire an exception in case of errors on execution               |
| settings           | \[Map] settings additional settings, used to emulate join conditions                         |
| pars               | \[Object\[]] pars values related to bind variables included in the GQL query as ?1, ?2, etc. |

***

## getPartialResultOnGoogleSpanner

Execute the specified GQL query and apply automatically filtering/sorting conditions coming from the UI.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getPartialResultOnGoogleSpanner(
	sql, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	pars //Object[]
);
```
{% endcode %}

Details

| Argument           | Description                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------- |
| sql                | \[String] string value: sql to execute; it can contain ?                                     |
| dataModelId        | \[Long] dataModelId data model id containing the object structure to retrieve                |
| interruptExecution | \[Boolean] interruptExecution fire an exception in case of errors on execution               |
| pars               | \[Object\[]] pars values related to bind variables included in the GQL query as ?1, ?2, etc. |

***

## getPartialResultOnGoogleSpannerWithSettings

Execute the specified GQL query and apply automatically filtering/sorting conditions coming from the UI.\
Additionally, use the settings argument to apply additional join conditions:

1. inject a cached secondary object in to the specified attribute; required settings:\
   {\
   secondaryObjects: \[\
   {\
   name: "...", // attribute name in the main object, where jnjecting the retrieved secondary object\
   objectName: "...", // secondary object; you can use dataModelId instead\
   dataModelId: "...", // data model id which identifies the secondary object\
   fkName: "...", // attribute name in the main object, representing the linking condition (FK) with the secondary object\
   compositeFkName: \[{ value: "..." }, variable: "...", ...], list of values/variables composing the fk\
   where: "...", // optional: alternative to the previous one and used to manually specify the WHERE condition to get ONE entity from the secondary object; it can contains binding variables expressed as :XXX where XXX is the uncamel of the main object's attribute name\
   longResultSet: true|false // optional: true if the secondary result is long and consequently cannot be read at all, false if there are a few records for the secondary query\
   }\
   ]\
   }
2. inject multiple attributes starting from a cached secondary object in to the specified attribute; required settings:\
   {\
   secondaryAttributes: \[\
   {\
   mapping: {\
   "mainAttrName1": "secondaryAttrName1", // attribute name in the main object, where jnjecting the corresponding attribute fethed from retrieved secondary object\
   "mainAttrName2": "secondaryAttrName2",\
   ...\
   },\
   objectName: "...", // secondary object; you can use dataModelId instead\
   dataModelId: "...", // data model id which identifies the secondary object\
   fkName: "...", // attribute name in the main object, representing the linking condition (FK) with the secondary object\
   compositeFkName: \[{ value: "..." }, variable: "...", ...], list of values/variables composing the fk\
   where: "...", // optional: alternative to the previous one and used to manually specify the WHERE condition to get ONE entity from the secondary object; it can contains binding variables expressed as :XXX where XXX is the uncamel of the main object's attribute name\
   longResultSet: true|false // optional: true if the secondary result is long and consequently cannot be read at all, false if there are a few records for the secondary query\
   }\
   ]\
   }\
   }

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getPartialResultOnGoogleSpannerWithSettings(
	sql, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	settings, //Map
	pars //Object[]
);
```
{% endcode %}

Details

| Argument           | Description                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------- |
| sql                | \[String] string value: sql to execute; it can contain ?                                     |
| dataModelId        | \[Long] dataModelId data model id containing the object structure to retrieve                |
| interruptExecution | \[Boolean] interruptExecution fire an exception in case of errors on execution               |
| settings           | \[Map] settings additional settings, used to emulate join conditions                         |
| pars               | \[Object\[]] pars values related to bind variables included in the GQL query as ?1, ?2, etc. |

***

## getPartialResultOnMongoDb

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getPartialResultOnMongoDb(
	where, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	pars //Object[]
);
```
{% endcode %}

Details

| Argument           | Description                                                                                                                                                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| where              | \[String] String: where condition for query                                                                                                                                                                                   |
| dataModelId        | \[Long] data model id, used to compare the attribute value types                                                                                                                                                              |
| interruptExecution | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue                                                     |
| pars               | \[Object\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## getProcessDefinition

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getProcessDefinition(
	processDefinitionId, //String
	params //Map
);
```
{% endcode %}

Details

| Argument            | Description                                                                                                                                                                                                             |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| processDefinitionId | \[String]                                                                                                                                                                                                               |
| params              | \[Map] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## getShortUrl

Generate a short URL.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getShortUrl(
	realUrl //String
);
```
{% endcode %}

Details

| Argument | Description                               |
| -------- | ----------------------------------------- |
| realUrl  | \[String] realUrl the real URL to shorten |

***

## getUUID

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getUUID();
```
{% endcode %}

***

## getValueFromRedis

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Object type
var risp = utils.getValueFromRedis(
	key //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| key      | \[String]   |

***

## getValueInCache

Fetch a value from the shared web cache.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Object type
var risp = utils.getValueInCache(
	varName //String
);
```
{% endcode %}

Details

| Argument | Description                     |
| -------- | ------------------------------- |
| varName  | \[String] varName variable name |

***

## getValueInCache

Fetch a value from the shared web cache.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Object type
var risp = utils.getValueInCache(
	varName, //String
	alternativeFunctionName //String
);
```
{% endcode %}

Details

| Argument                | Description                                                                                                                         |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| varName                 | \[String] varName variable name                                                                                                     |
| alternativeFunctionName | \[String] alternativeFunctionName name for a js function previously defined and to invoke, in case the value was not found in cache |

***

## getValueInCache

Fetch a value from the shared web cache.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Object type
var risp = utils.getValueInCache(
	varName, //String
	alternativeFunctionName, //String
	expirationTime //Long
);
```
{% endcode %}

Details

| Argument                | Description                                                                                                                         |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| varName                 | \[String] varName variable name                                                                                                     |
| alternativeFunctionName | \[String] alternativeFunctionName name for a js function previously defined and to invoke, in case the value was not found in cache |
| expirationTime          | \[Long]                                                                                                                             |

***

## getWaitingElementsInQueue

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getWaitingElementsInQueue(
	queueName, //String
	companyId, //String
	note, //String
	namespace //String
);
```
{% endcode %}

Details

| Argument  | Description |
| --------- | ----------- |
| queueName | \[String]   |
| companyId | \[String]   |
| note      | \[String]   |
| namespace | \[String]   |

***

## getWebContentWithNTLM

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getWebContentWithNTLM(
	url, //String
	contentType, //String
	httpMethod, //String
	bodyRequest, //String
	username, //String
	password, //String
	workstation, //String
	domain, //String
	settings //Map
);
```
{% endcode %}

Details

| Argument    | Description                                                                                                                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| url         | \[String]                                                                                                                                                                                                                |
| contentType | \[String]                                                                                                                                                                                                                |
| httpMethod  | \[String] (optional: can be null); if specified, it defines the HTTP method: GET, POST, PATCH, PUT, DELETE                                                                                                               |
| bodyRequest | \[String]                                                                                                                                                                                                                |
| username    | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| password    | \[String]                                                                                                                                                                                                                |
| workstation | \[String]                                                                                                                                                                                                                |
| domain      | \[String]                                                                                                                                                                                                                |
| settings    | \[Map]                                                                                                                                                                                                                   |

***

## importBigQueryDataFromGCS

Import a text file stored in GCS to a BigTable table.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.importBigQueryDataFromGCS(
	datasetName, //String
	tableName, //String
	format, //String
	sourceUri, //String
	encoding, //String
	separator //String
);
```
{% endcode %}

Details

| Argument                                                                                                                             | Description                                                |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| datasetName                                                                                                                          | \[String]                                                  |
| tableName                                                                                                                            | \[String] String: name of table                            |
| format                                                                                                                               | \[String] format export format; supported values: CSV,JSON |
| sourceUri                                                                                                                            | \[String] sourceUri file path on GCS                       |
| Examples for gcsUrl:                                                                                                                 |                                                            |
| gs://my-bucket/file-name.json                                                                                                        |                                                            |
| gs://my-bucket/file-name-.json                                                                                                       |                                                            |
| gs:/                                                                                                                                 |                                                            |
| When you load CSV or JSON data, values in DATE columns must use the dash (-) separator and the date must be in the following format: |                                                            |
| YYYY-MM-DD (year-month-day).                                                                                                         |                                                            |
| When you load JSON or CSV data, values in TIMESTAMP columns must use a dash (-) separator for the date portion of the timestamp,     |                                                            |
| and the date must be in the following format: YYYY-MM-DD (year-month-day).                                                           |                                                            |
| The hh:mm:ss (hour-minute-second) portion of the timestamp must use a colon (:) separator.                                           |                                                            |
| encoding                                                                                                                             | \[String]                                                  |
| separator                                                                                                                            | \[String]                                                  |

***

## importBigQueryDataFromLocalDatasource

Import a text file stored in the server file system to a BigTable table.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.importBigQueryDataFromLocalDatasource(
	datasetName, //String
	tableName, //String
	location, //String
	format, //String
	csvPath, //String
	encoding, //String
	separator, //String
	maxBadRecords, //Integer
	truncate, //Boolean
	deleteSrcFileAfterImport //Boolean
);
```
{% endcode %}

Details

| Argument                 | Description                                                                                                                               |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| datasetName              | \[String]                                                                                                                                 |
| tableName                | \[String] String: name of table                                                                                                           |
| location                 | \[String] location GCS location; allowed values: EU, US; see: https://cloud.google.com/bigquery/docs/locations#specifying\_your\_location |
| format                   | \[String] format export format; supported values: CSV,JSON                                                                                |
| csvPath                  | \[String] csvPath absolute path + filename, related to a server-side file                                                                 |
| encoding                 | \[String]                                                                                                                                 |
| separator                | \[String]                                                                                                                                 |
| maxBadRecords            | \[Integer]                                                                                                                                |
| truncate                 | \[Boolean]                                                                                                                                |
| deleteSrcFileAfterImport | \[Boolean]                                                                                                                                |

***

## importBigQueryThroughStreaming

Import a single record as a streaming.\
return errors during import, expressed as a JSON map; null if there are NOT errors

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.importBigQueryThroughStreaming(
	datasetName, //String
	tableName, //String
	objectsForBQ //Object[]
);
```
{% endcode %}

Details

| Argument     | Description                     |
| ------------ | ------------------------------- |
| datasetName  | \[String]                       |
| tableName    | \[String] String: name of table |
| objectsForBQ | \[Object\[]]                    |

***

## importBigQueryThroughWriteableStreaming

Import a single record as a streaming.\
return errors during import, expressed as a JSON map; null if there are NOT errors

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.importBigQueryThroughWriteableStreaming(
	datasetName, //String
	tableName, //String
	records //Object[]
);
```
{% endcode %}

Details

| Argument    | Description                     |
| ----------- | ------------------------------- |
| datasetName | \[String]                       |
| tableName   | \[String] String: name of table |
| records     | \[Object\[]]                    |

***

## importDataFromGCSWithSchema

Import a text file stored in GCS to a BigTable table.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.importDataFromGCSWithSchema(
	datasetName, //String
	tableName, //String
	format, //String
	sourceUri, //String
	encoding, //String
	separator, //String
	cols //String[]
);
```
{% endcode %}

Details

| Argument                                                                                                                             | Description                                                |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| datasetName                                                                                                                          | \[String]                                                  |
| tableName                                                                                                                            | \[String] String: name of table                            |
| format                                                                                                                               | \[String] format export format; supported values: CSV,JSON |
| sourceUri                                                                                                                            | \[String] sourceUri file path on GCS                       |
| Examples for gcsUrl:                                                                                                                 |                                                            |
| gs://my-bucket/file-name.json                                                                                                        |                                                            |
| gs://my-bucket/file-name-.json                                                                                                       |                                                            |
| gs:/                                                                                                                                 |                                                            |
| When you load CSV or JSON data, values in DATE columns must use the dash (-) separator and the date must be in the following format: |                                                            |
| YYYY-MM-DD (year-month-day).                                                                                                         |                                                            |
| When you load JSON or CSV data, values in TIMESTAMP columns must use a dash (-) separator for the date portion of the timestamp,     |                                                            |
| and the date must be in the following format: YYYY-MM-DD (year-month-day).                                                           |                                                            |
| The hh:mm:ss (hour-minute-second) portion of the timestamp must use a colon (:) separator.                                           |                                                            |
| encoding                                                                                                                             | \[String]                                                  |
| separator                                                                                                                            | \[String]                                                  |
| cols                                                                                                                                 | \[String\[]]                                               |

***

## importDataInCloudSQL

Import data into a CloudSQL instance

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Long type
var risp = utils.importDataInCloudSQL(
	instance, //String
	bucketPath, //String
	dbSchema, //String
	dataSourceId, //Long
	tablename, //String
	where, //String
	timeout, //Integer
	columns //String[]
);
```
{% endcode %}

Details

| Argument                                                                                   | Description                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| instance                                                                                   | \[String] instance Cloud SQL instance ID. This does not include the project ID                                                                                                           |
| bucketPath                                                                                 | \[String] bucketPath GCS backet name + subpath + filename, expressed as gs://bucket/blabla                                                                                               |
| @patam dbSchema database schema containing the specified table where data must be imported |                                                                                                                                                                                          |
| dbSchema                                                                                   | \[String]                                                                                                                                                                                |
| dataSourceId                                                                               | \[Long] num value; it can be null and used to specify a different db to use with the sql statement                                                                                       |
| tablename                                                                                  | \[String] tablename table where importing data                                                                                                                                           |
| where                                                                                      | \[String] String: where condition for query                                                                                                                                              |
| timeout                                                                                    | \[Integer] timeout expressed in seconds; the method will be blocked until the natural ending of the process or until the timeout, if expessed; if not expressed the max time is 500 secs |
| columns                                                                                    | \[String\[]] columns table fields                                                                                                                                                        |

***

## importDataInCloudSQL

Import data into a CloudSQL instance

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return HashMap type
var risp = utils.importDataInCloudSQL(
	instance, //String
	bucketPath, //String
	dbSchema, //String
	dataSourceId, //Long
	tablename, //String
	where, //String
	columns //String[]
);
```
{% endcode %}

Details

| Argument                                                                                   | Description                                                                                        |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| instance                                                                                   | \[String] instance Cloud SQL instance ID. This does not include the project ID                     |
| bucketPath                                                                                 | \[String] bucketPath GCS backet name + subpath + filename, expressed as gs://bucket/blabla         |
| @patam dbSchema database schema containing the specified table where data must be imported |                                                                                                    |
| dbSchema                                                                                   | \[String]                                                                                          |
| dataSourceId                                                                               | \[Long] num value; it can be null and used to specify a different db to use with the sql statement |
| tablename                                                                                  | \[String] tablename table where importing data                                                     |
| where                                                                                      | \[String] String: where condition for query                                                        |
| columns                                                                                    | \[String\[]] columns table fields                                                                  |

***

## importFileInCMS

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.importFileInCMS(
	path, //String
	destDirId, //Long
	dataSourceId, //Long
	tableName //String
);
```
{% endcode %}

Details

| Argument     | Description                                                                                        |
| ------------ | -------------------------------------------------------------------------------------------------- |
| path         | \[String]                                                                                          |
| destDirId    | \[Long]                                                                                            |
| dataSourceId | \[Long] num value; it can be null and used to specify a different db to use with the sql statement |
| tableName    | \[String] String: name of table                                                                    |

***

## importFileInCMS

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.importFileInCMS(
	sourceDirId, //Long
	fileName, //String
	destDirId, //Long
	dataSourceId, //Long
	tableName //String
);
```
{% endcode %}

Details

| Argument     | Description                                                                                        |
| ------------ | -------------------------------------------------------------------------------------------------- |
| sourceDirId  | \[Long]                                                                                            |
| fileName     | \[String] file name                                                                                |
| destDirId    | \[Long]                                                                                            |
| dataSourceId | \[Long] num value; it can be null and used to specify a different db to use with the sql statement |
| tableName    | \[String] String: name of table                                                                    |

***

## importMultipleDataFromLocalDatasource

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.importMultipleDataFromLocalDatasource(
	datasetName, //String
	tableNames, //String[]
	location, //String
	format, //String
	dirPath, //String
	csvFiles, //String[]
	encoding, //String
	separator, //String
	maxBadRecords, //Integer
	truncate, //Boolean
	deleteSrcFileAfterImport //Boolean
);
```
{% endcode %}

Details

| Argument                 | Description  |
| ------------------------ | ------------ |
| datasetName              | \[String]    |
| tableNames               | \[String\[]] |
| location                 | \[String]    |
| format                   | \[String]    |
| dirPath                  | \[String]    |
| csvFiles                 | \[String\[]] |
| encoding                 | \[String]    |
| separator                | \[String]    |
| maxBadRecords            | \[Integer]   |
| truncate                 | \[Boolean]   |
| deleteSrcFileAfterImport | \[Boolean]   |

***

## incrValueFromRedis

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return long type
var risp = utils.incrValueFromRedis(
	key //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| key      | \[String]   |

***

## insertBigQueryObject

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Long type
var risp = utils.insertBigQueryObject(
	datasetName, //String
	tableName, //String
	obj //Map
);
```
{% endcode %}

Details

| Argument    | Description                     |
| ----------- | ------------------------------- |
| datasetName | \[String]                       |
| tableName   | \[String] String: name of table |
| obj         | \[Map]                          |

***

## insertCard

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Map type
var risp = utils.insertCard(
	dataModelId, //Long
	panelId, //Long
	vo, //Map
	archiveId, //Integer
	additionalSettings, //Map
	actionId //Long
);
```
{% endcode %}

Details

| Argument           | Description                                                      |
| ------------------ | ---------------------------------------------------------------- |
| dataModelId        | \[Long] data model id, used to compare the attribute value types |
| panelId            | \[Long]                                                          |
| vo                 | \[Map]                                                           |
| archiveId          | \[Integer]                                                       |
| additionalSettings | \[Map]                                                           |
| actionId           | \[Long]                                                          |

***

## insertCard

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Map type
var risp = utils.insertCard(
	dataModelId, //Long
	panelId, //Long
	vo, //Map
	archiveId, //Integer
	additionalSettings //Map
);
```
{% endcode %}

Details

| Argument           | Description                                                      |
| ------------------ | ---------------------------------------------------------------- |
| dataModelId        | \[Long] data model id, used to compare the attribute value types |
| panelId            | \[Long]                                                          |
| vo                 | \[Map]                                                           |
| archiveId          | \[Integer]                                                       |
| additionalSettings | \[Map]                                                           |

***

## insertCards

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Map[] type
var risp = utils.insertCards(
	dataModelId, //Long
	panelId, //Long
	vos, //Map[]
	archiveId, //Integer
	additionalSettings, //Map
	actionId //Long
);
```
{% endcode %}

Details

| Argument           | Description                                                      |
| ------------------ | ---------------------------------------------------------------- |
| dataModelId        | \[Long] data model id, used to compare the attribute value types |
| panelId            | \[Long]                                                          |
| vos                | \[Map\[]]                                                        |
| archiveId          | \[Integer]                                                       |
| additionalSettings | \[Map]                                                           |
| actionId           | \[Long]                                                          |

***

## insertCards

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Map[] type
var risp = utils.insertCards(
	dataModelId, //Long
	panelId, //Long
	vos, //Map[]
	archiveId, //Integer
	additionalSettings //Map
);
```
{% endcode %}

Details

| Argument           | Description                                                      |
| ------------------ | ---------------------------------------------------------------- |
| dataModelId        | \[Long] data model id, used to compare the attribute value types |
| panelId            | \[Long]                                                          |
| vos                | \[Map\[]]                                                        |
| archiveId          | \[Integer]                                                       |
| additionalSettings | \[Map]                                                           |

***

## insertObjectOnGoogleDatastore

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.insertObjectOnGoogleDatastore(
	obj, //Map
	dataModelId, //Long
	interruptExecution //Boolean
);
```
{% endcode %}

Details

| Argument           | Description                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| obj                | \[Map]                                                                                                                                                                    |
| dataModelId        | \[Long] data model id, used to compare the attribute value types                                                                                                          |
| interruptExecution | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |

***

## insertObjectOnGoogleSpanner

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.insertObjectOnGoogleSpanner(
	obj, //Map
	dataModelId, //Long
	interruptExecution //Boolean
);
```
{% endcode %}

Details

| Argument           | Description                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| obj                | \[Map]                                                                                                                                                                    |
| dataModelId        | \[Long] data model id, used to compare the attribute value types                                                                                                          |
| interruptExecution | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |

***

## insertObjectOnMongoDb

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Map type
var risp = utils.insertObjectOnMongoDb(
	obj, //Map
	dataModelId, //Long
	interruptExecution //Boolean
);
```
{% endcode %}

Details

| Argument           | Description                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| obj                | \[Map]                                                                                                                                                                    |
| dataModelId        | \[Long] data model id, used to compare the attribute value types                                                                                                          |
| interruptExecution | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |

***

## insertObjectsOnBigQuery

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.insertObjectsOnBigQuery(
	objs, //Map[]
	dataModelId, //Long
	interruptExecution //Boolean
);
```
{% endcode %}

Details

| Argument           | Description                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objs               | \[Map\[]]                                                                                                                                                                 |
| dataModelId        | \[Long] data model id, used to compare the attribute value types                                                                                                          |
| interruptExecution | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |

***

## insertObjectsOnGoogleDatastore

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.insertObjectsOnGoogleDatastore(
	objs, //Map[]
	dataModelId, //Long
	interruptExecution //Boolean
);
```
{% endcode %}

Details

| Argument           | Description                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objs               | \[Map\[]]                                                                                                                                                                 |
| dataModelId        | \[Long] data model id, used to compare the attribute value types                                                                                                          |
| interruptExecution | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |

***

## insertObjectsOnGoogleDatastoreWithSettings

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.insertObjectsOnGoogleDatastoreWithSettings(
	objs, //Map[]
	dataModelId, //Long
	interruptExecution, //Boolean
	settings //Map
);
```
{% endcode %}

Details

| Argument           | Description                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objs               | \[Map\[]]                                                                                                                                                                 |
| dataModelId        | \[Long] data model id, used to compare the attribute value types                                                                                                          |
| interruptExecution | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |
| settings           | \[Map]                                                                                                                                                                    |

***

## insertObjectsOnGoogleSpanner

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.insertObjectsOnGoogleSpanner(
	objs, //Map[]
	dataModelId, //Long
	interruptExecution //Boolean
);
```
{% endcode %}

Details

| Argument           | Description                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objs               | \[Map\[]]                                                                                                                                                                 |
| dataModelId        | \[Long] data model id, used to compare the attribute value types                                                                                                          |
| interruptExecution | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |

***

## invalidateAll

Remove all values from the cache.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.invalidateAll();
```
{% endcode %}

***

## invalidateAllCache

Remove all values from the cache.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.invalidateAllCache(
	varName //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| varName  | \[String]   |

***

## listGoogleCloudStorageObjects

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return List type
var risp = utils.listGoogleCloudStorageObjects(
	bucketName, //String
	prefix, //String
	delimiter //String
);
```
{% endcode %}

Details

| Argument   | Description |
| ---------- | ----------- |
| bucketName | \[String]   |
| prefix     | \[String]   |
| delimiter  | \[String]   |

***

## listGoogleCloudStorageObjects

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return GooglePaginatedList type
var risp = utils.listGoogleCloudStorageObjects(
	bucketName, //String
	maxPageResults, //Long
	pages, //Integer
	nextPageToken, //String
	prefix, //String
	delimiter //String
);
```
{% endcode %}

Details

| Argument       | Description |
| -------------- | ----------- |
| bucketName     | \[String]   |
| maxPageResults | \[Long]     |
| pages          | \[Integer]  |
| nextPageToken  | \[String]   |
| prefix         | \[String]   |
| delimiter      | \[String]   |

***

## matchTensorFlowCsvResults

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.matchTensorFlowCsvResults(
	dirId, //Long
	dataSourceId, //Long
	tableName, //String
	jsObj //Map
);
```
{% endcode %}

Details

| Argument     | Description                                                                                        |
| ------------ | -------------------------------------------------------------------------------------------------- |
| dirId        | \[Long] dir id used to find or write or read files                                                 |
| dataSourceId | \[Long] num value; it can be null and used to specify a different db to use with the sql statement |
| tableName    | \[String] String: name of table                                                                    |
| jsObj        | \[Map]                                                                                             |

***

## maybeStartProcess

Check if the process is already running: only if it is not, then start it.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.maybeStartProcess(
	schedId, //Long
	forceRunning, //Boolean
	startNextProcesses //Boolean
);
```
{% endcode %}

Details

| Argument           | Description                                                                                          |
| ------------------ | ---------------------------------------------------------------------------------------------------- |
| schedId            | \[Long] schedId scheduler id (PK of CON48\_SCHED\_PROCESS)                                           |
| forceRunning       | \[Boolean] forceRunning to force process executing, independently of the fact it is already running  |
| startNextProcesses | \[Boolean] startNextProcesses to auto-start also the children processed and not only the current one |

***

## mergeDocx

Starting from a list of already existing docx files, stored in the same location, merge them and product a new one.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.mergeDocx(
	srcDirId, //Long
	docxNames, //String[]
	destDirId, //Long
	mergedDocxName, //String
	deleteFilesAfterMerge //Boolean
);
```
{% endcode %}

Details

| Argument              | Description                                                                                                        |
| --------------------- | ------------------------------------------------------------------------------------------------------------------ |
| srcDirId              | \[Long] srcDirId directory id where all source docx files are located                                              |
| docxNames             | \[String\[]] docxNames list of file names, related to docx files to merge; they must NOT contain the absolute path |
| destDirId             | \[Long] destDirId directory id where the new merged docx file will be stored                                       |
| mergedDocxName        | \[String] mergedDocxName new docx file to generate, created by merging all source docx files                       |
| deleteFilesAfterMerge | \[Boolean] deleteFilesAfterMerge flag used to delete automatically (or not) the source docx files                  |

***

## mergeObjectOnGoogleDatastore

Starting from the PK included in the passed obj, fetch the current content of the entity from the Datastore and\
re-fill the attributes passed forward, with the ones included in obj. The others remain as they are.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.mergeObjectOnGoogleDatastore(
	attributesToSet, //Map
	attributesToSetToNull, //String[]
	dataModelId, //Long
	interruptExecution //Boolean
);
```
{% endcode %}

Details

| Argument              | Description                                                                                                                                                               |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| attributesToSet       | \[Map] attributesToSet attribute to set                                                                                                                                   |
| attributesToSetToNull | \[String\[]] attributesToSetToNull list of attributes to remove                                                                                                           |
| dataModelId           | \[Long] data model id, used to compare the attribute value types                                                                                                          |
| interruptExecution    | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |

***

## mergeObjectOnGoogleSpanner

Starting from the PK included in the passed obj, fetch the current content of the entity from the Datastore and\
re-fill the attributes passed forward, with the ones included in obj. The others remain as they are.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.mergeObjectOnGoogleSpanner(
	attributesToSet, //Map
	attributesToSetToNull, //String[]
	dataModelId, //Long
	interruptExecution //Boolean
);
```
{% endcode %}

Details

| Argument              | Description                                                                                                                                                               |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| attributesToSet       | \[Map] attributesToSet attribute to set                                                                                                                                   |
| attributesToSetToNull | \[String\[]] attributesToSetToNull list of attributes to remove                                                                                                           |
| dataModelId           | \[Long] data model id, used to compare the attribute value types                                                                                                          |
| interruptExecution    | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |

***

## modifyGoogleCalendarEvent

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return CalendarEvent type
var risp = utils.modifyGoogleCalendarEvent(
	calendarEventId, //String
	title, //String
	beginDate, //Date
	endDate //Date
);
```
{% endcode %}

Details

| Argument        | Description |
| --------------- | ----------- |
| calendarEventId | \[String]   |
| title           | \[String]   |
| beginDate       | \[Date]     |
| endDate         | \[Date]     |

***

## modifyGoogleCalendarEventWithSettings

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return CalendarEvent type
var risp = utils.modifyGoogleCalendarEventWithSettings(
	calendarEventId, //String
	title, //String
	beginDate, //Date
	endDate, //Date
	description, //String
	location, //String
	creatorEmail, //String
	attendeeEmails //String[]
);
```
{% endcode %}

Details

| Argument        | Description  |
| --------------- | ------------ |
| calendarEventId | \[String]    |
| title           | \[String]    |
| beginDate       | \[Date]      |
| endDate         | \[Date]      |
| description     | \[String]    |
| location        | \[String]    |
| creatorEmail    | \[String]    |
| attendeeEmails  | \[String\[]] |

***

## modifyGoogleDriveFileParents

Move a file under a new parent folder in the current user Google Drive

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.modifyGoogleDriveFileParents(
	fileId, //String
	parentsToAdd, //String
	parentsToRemove //String
);
```
{% endcode %}

Details

| Argument        | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| fileId          | \[String] id of Google file                                  |
| parentsToAdd    | \[String] parentsToAdd comma separated list of folder ids    |
| parentsToRemove | \[String] parentsToRemove comma separated list of folder ids |

***

## modifyGoogleDriveFileParents

Move a file under a new parent folder in the current user Google Drive

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.modifyGoogleDriveFileParents(
	userId, //String
	fileId, //String
	parentsToAdd, //String
	parentsToRemove //String
);
```
{% endcode %}

Details

| Argument        | Description                                                                                                                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId          | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| fileId          | \[String] id of Google file                                                                                                                                                                                              |
| parentsToAdd    | \[String] parentsToAdd comma separated list of folder ids                                                                                                                                                                |
| parentsToRemove | \[String] parentsToRemove comma separated list of folder ids                                                                                                                                                             |

***

## moveGoogleDriveFile

Move a file under a new parent folder(s) in the current user Google Drive

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.moveGoogleDriveFile(
	userId, //String
	fileId, //String
	newParent, //String
	addToRevision //boolean
);
```
{% endcode %}

Details

| Argument      | Description                                                                                                                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId        | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| fileId        | \[String] id of Google file                                                                                                                                                                                              |
| newParent     | \[String]                                                                                                                                                                                                                |
| addToRevision | \[boolean]                                                                                                                                                                                                               |

***

## moveGoogleDriveFile

Move a file under a new parent folder(s) in the current user Google Drive

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.moveGoogleDriveFile(
	userId, //String
	fileId, //String
	newParents //String
);
```
{% endcode %}

Details

| Argument   | Description                                                                                                                                                                                                              |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId     | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| fileId     | \[String] id of Google file                                                                                                                                                                                              |
| newParents | \[String] newParents comma separated list of folder ids                                                                                                                                                                  |

***

## moveGoogleDriveFile

Move a file under a new parent folder(s) in the current user Google Drive

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.moveGoogleDriveFile(
	fileId, //String
	newParents //String
);
```
{% endcode %}

Details

| Argument   | Description                                             |
| ---------- | ------------------------------------------------------- |
| fileId     | \[String] id of Google file                             |
| newParents | \[String] newParents comma separated list of folder ids |

***

## moveGoogleDriveFile

Move a file under a new parent folder(s) in the current user Google Drive

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.moveGoogleDriveFile(
	fileId, //String
	newParent, //String
	addToRevision //boolean
);
```
{% endcode %}

Details

| Argument      | Description                 |
| ------------- | --------------------------- |
| fileId        | \[String] id of Google file |
| newParent     | \[String]                   |
| addToRevision | \[boolean]                  |

***

## patchGoogleDriveFileProperty

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.patchGoogleDriveFileProperty(
	userId, //String
	fileId, //String
	key, //String
	value, //String
	visibility //String
);
```
{% endcode %}

Details

| Argument   | Description                                                                                                                                                                                                              |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId     | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| fileId     | \[String] id of Google file                                                                                                                                                                                              |
| key        | \[String]                                                                                                                                                                                                                |
| value      | \[String]                                                                                                                                                                                                                |
| visibility | \[String]                                                                                                                                                                                                                |

***

## patchGoogleDriveFileProperty

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.patchGoogleDriveFileProperty(
	fileId, //String
	key, //String
	value, //String
	visibility //String
);
```
{% endcode %}

Details

| Argument   | Description                 |
| ---------- | --------------------------- |
| fileId     | \[String] id of Google file |
| key        | \[String]                   |
| value      | \[String]                   |
| visibility | \[String]                   |

***

## popElement

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.popElement(
	queueName, //String
	uuid, //String
	namespace //String
);
```
{% endcode %}

Details

| Argument  | Description |
| --------- | ----------- |
| queueName | \[String]   |
| uuid      | \[String]   |
| namespace | \[String]   |

***

## popValueFromRedis

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.popValueFromRedis(
	key //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| key      | \[String]   |

***

## prepareStripePayment

return a JSON string to pass back for the UI, in order to correctly setup the payment form with the right price

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.prepareStripePayment(
	apiKey, //String
	publicKey, //String
	priceWithCents, //Long
	currency, //String
	customerId //String
);
```
{% endcode %}

Details

| Argument       | Description |
| -------------- | ----------- |
| apiKey         | \[String]   |
| publicKey      | \[String]   |
| priceWithCents | \[Long]     |
| currency       | \[String]   |
| customerId     | \[String]   |

***

## pushValuesToRedis

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.pushValuesToRedis(
	key, //String
	values //String[]
);
```
{% endcode %}

Details

| Argument | Description  |
| -------- | ------------ |
| key      | \[String]    |
| values   | \[String\[]] |

***

## recoverGoogleDriveFile

Recover file from current user Google Drive trash

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.recoverGoogleDriveFile(
	fileId //String
);
```
{% endcode %}

Details

| Argument | Description                 |
| -------- | --------------------------- |
| fileId   | \[String] id of Google file |

***

## recoverGoogleDriveFile

Recover file from current user Google Drive trash

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.recoverGoogleDriveFile(
	userId, //String
	fileId //String
);
```
{% endcode %}

Details

| Argument | Description                                                                                                                                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId   | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| fileId   | \[String] id of Google file                                                                                                                                                                                              |

***

## reinsertElements

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return int type
var risp = utils.reinsertElements(
	companyId, //String
	actionId, //Long
	queueName, //String
	status, //String
	id //String
);
```
{% endcode %}

Details

| Argument  | Description |
| --------- | ----------- |
| companyId | \[String]   |
| actionId  | \[Long]     |
| queueName | \[String]   |
| status    | \[String]   |
| id        | \[String]   |

***

## removeGoogleDriveFilePermissions

Remove one permission on a file for user

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.removeGoogleDriveFilePermissions(
	fileId, //String
	emailUser //String
);
```
{% endcode %}

Details

| Argument  | Description                 |
| --------- | --------------------------- |
| fileId    | \[String] id of Google file |
| emailUser | \[String]                   |

***

## removeGoogleDriveFilePermissions

Remove one permission on a file for user

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.removeGoogleDriveFilePermissions(
	userId, //String
	fileId, //String
	emailUser //String
);
```
{% endcode %}

Details

| Argument  | Description                                                                                                                                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId    | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| fileId    | \[String] id of Google file                                                                                                                                                                                              |
| emailUser | \[String]                                                                                                                                                                                                                |

***

## removeValueInCache

Remove a value from the shared web cache.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.removeValueInCache(
	varName //String
);
```
{% endcode %}

Details

| Argument | Description                     |
| -------- | ------------------------------- |
| varName  | \[String] varName variable name |

***

## removeValuesFromCache

Remove multiple values from cache: the one whose key starts with the specified pattern.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.removeValuesFromCache(
	keyPrefix //String
);
```
{% endcode %}

Details

| Argument  | Description                                                   |
| --------- | ------------------------------------------------------------- |
| keyPrefix | \[String] keyPrefix key radix used to filter values to remove |

***

## rewriteGoogleCloudStorageObject

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.rewriteGoogleCloudStorageObject(
	sourceBucketName, //String
	sourceObjectName, //String
	sourceObjectVersion, //Long
	destinationBucketName, //String
	destinationObjectName //String
);
```
{% endcode %}

Details

| Argument              | Description |
| --------------------- | ----------- |
| sourceBucketName      | \[String]   |
| sourceObjectName      | \[String]   |
| sourceObjectVersion   | \[Long]     |
| destinationBucketName | \[String]   |
| destinationObjectName | \[String]   |

***

## scaleJpgFile

Scale jpg file

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.scaleJpgFile(
	srcJpgDirId, //Long
	srcJpgFileName, //String
	destDirId, //Long
	destFileName, //String
	maxWidth, //Long
	maxHeight //Long
);
```
{% endcode %}

Details

| Argument       | Description                                                                          |
| -------------- | ------------------------------------------------------------------------------------ |
| srcJpgDirId    | \[Long] srcJpgDirId folder identifier, where the input JPG file is already stored    |
| srcJpgFileName | \[String] srcJpgFileName TIFF file name, stored in the folder identified by pdfDirId |
| destDirId      | \[Long] destDirId folder identifier, where the image will be saved                   |
| destFileName   | \[String] destFileName jpeg/png file name to create                                  |
| maxWidth       | \[Long]                                                                              |
| maxHeight      | \[Long]                                                                              |

***

## scaleJpgFile

Scale jpg file

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.scaleJpgFile(
	srcJpgDirId, //Long
	srcJpgFileName, //String
	destDirId, //Long
	destFileName, //String
	scale //Double
);
```
{% endcode %}

Details

| Argument       | Description                                                                          |
| -------------- | ------------------------------------------------------------------------------------ |
| srcJpgDirId    | \[Long] srcJpgDirId folder identifier, where the input JPG file is already stored    |
| srcJpgFileName | \[String] srcJpgFileName TIFF file name, stored in the folder identified by pdfDirId |
| destDirId      | \[Long] destDirId folder identifier, where the image will be saved                   |
| destFileName   | \[String] destFileName jpeg/png file name to create                                  |
| scale          | \[Double] scale factor to use for calculate new dimension                            |

***

## searchInGoogleDrive

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return GooglePaginatedList type
var risp = utils.searchInGoogleDrive(
	userId, //String
	maxPageResults, //Integer
	pages, //Integer
	nextPageToken, //String
	folderId, //String
	recursive, //Boolean
	query, //String
	trashed //Boolean
);
```
{% endcode %}

Details

| Argument       | Description                                                                                                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId         | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| maxPageResults | \[Integer]                                                                                                                                                                                                               |
| pages          | \[Integer]                                                                                                                                                                                                               |
| nextPageToken  | \[String]                                                                                                                                                                                                                |
| folderId       | \[String] id of Google folder                                                                                                                                                                                            |
| recursive      | \[Boolean]                                                                                                                                                                                                               |
| query          | \[String]                                                                                                                                                                                                                |
| trashed        | \[Boolean]                                                                                                                                                                                                               |

***

## searchInGoogleDrive

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return GooglePaginatedList type
var risp = utils.searchInGoogleDrive(
	maxPageResults, //Integer
	pages, //Integer
	nextPageToken, //String
	folderId, //String
	recursive, //Boolean
	query, //String
	trashed //Boolean
);
```
{% endcode %}

Details

| Argument       | Description                   |
| -------------- | ----------------------------- |
| maxPageResults | \[Integer]                    |
| pages          | \[Integer]                    |
| nextPageToken  | \[String]                     |
| folderId       | \[String] id of Google folder |
| recursive      | \[Boolean]                    |
| query          | \[String]                     |
| trashed        | \[Boolean]                    |

***

## sendOAuth2Request

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.sendOAuth2Request(
	clientId, //String
	clientSecret, //String
	callback, //String
	scope, //String
	accessTokenEndpoint, //String
	authorizationBaseUrl, //String
	accessToken, //String
	requestUrl //String
);
```
{% endcode %}

Details

| Argument             | Description |
| -------------------- | ----------- |
| clientId             | \[String]   |
| clientSecret         | \[String]   |
| callback             | \[String]   |
| scope                | \[String]   |
| accessTokenEndpoint  | \[String]   |
| authorizationBaseUrl | \[String]   |
| accessToken          | \[String]   |
| requestUrl           | \[String]   |

***

## sendPushNotification

Send a Push message to all devices identified by their deviceIds, starting from the list of linked user code ids.\
The generated Push message to send is expressed in JSON format and composed of the specified info.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.sendPushNotification(
	appId, //String
	userCodeIds, //String[]
	title, //String
	shortMessage, //String
	actionId, //Long
	json, //String
	badgeNr //Long
);
```
{% endcode %}

Details

| Argument                                              | Description                                                                                                                                            |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| appId                                                 | \[String]                                                                                                                                              |
| userCodeIds                                           | \[String\[]] userCodeIds list of user code ids; they will be used to get the corresponding device ids and send to them the Push message                |
| title                                                 | \[String] title Push message title                                                                                                                     |
| shortMessage                                          | \[String] shortMessage Push message text (mandatory)                                                                                                   |
| actionId                                              | \[Long] actionId action id to invoke in the mobile device when the end user presses on the notification or on the message shown inside the app         |
| json                                                  | \[String] json text expressed in JSON format to pass to the action                                                                                     |
| badgeNr                                               | \[Long] badgeNr (only for iOS and optional: if not specified, it is set to 1); used to show the nr of unread messages on the app icon on Apple Devices |
| This method will fire an exception in case of errors. |                                                                                                                                                        |

***

## sendPushNotificationWithOptions

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.sendPushNotificationWithOptions(
	appId, //String
	userCodeIds, //String[]
	title, //String
	shortMessage, //String
	actionId, //Long
	json, //String
	badgeNr, //Long
	rootOptions, //Map
	dataOptions, //Map
	notificationOptions //Map
);
```
{% endcode %}

Details

| Argument            | Description  |
| ------------------- | ------------ |
| appId               | \[String]    |
| userCodeIds         | \[String\[]] |
| title               | \[String]    |
| shortMessage        | \[String]    |
| actionId            | \[Long]      |
| json                | \[String]    |
| badgeNr             | \[Long]      |
| rootOptions         | \[Map]       |
| dataOptions         | \[Map]       |
| notificationOptions | \[Map]       |

***

## sendSinglePushNotification

@deprecated

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.sendSinglePushNotification(
	appId, //String
	firebaseId, //String
	title, //String
	shortMessage, //String
	actionId, //Long
	json, //String
	badgeNr, //Long
	rootOptions, //Map
	dataOptions, //Map
	notificationOptions //Map
);
```
{% endcode %}

Details

| Argument            | Description |
| ------------------- | ----------- |
| appId               | \[String]   |
| firebaseId          | \[String]   |
| title               | \[String]   |
| shortMessage        | \[String]   |
| actionId            | \[Long]     |
| json                | \[String]   |
| badgeNr             | \[Long]     |
| rootOptions         | \[Map]      |
| dataOptions         | \[Map]      |
| notificationOptions | \[Map]      |

***

## sendSmsMessage

Send an SMS message through some carrier.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.sendSmsMessage(
	fromPhoneNr, //String
	toPhoneNr, //String
	text, //String
	logMessage //Boolean
);
```
{% endcode %}

Details

| Argument    | Description                                                             |
| ----------- | ----------------------------------------------------------------------- |
| fromPhoneNr | \[String] fromPhoneNr phone number used to identify the starting device |
| toPhoneNr   | \[String] toPhoneNr phone number where the message will be sent         |
| text        | \[String] text text message to send                                     |
| logMessage  | \[Boolean]                                                              |

***

## sendTensorFlowCsvFromCsv

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.sendTensorFlowCsvFromCsv(
	csvFilePath, //String
	includeFirstRow, //Boolean
	includeRowNum, //Boolean
	resultValuesNr, //int
	dirId, //Long
	topic, //String
	cmd, //String
	pkIndex, //Long
	jsObj //Map
);
```
{% endcode %}

Details

| Argument        | Description                                        |
| --------------- | -------------------------------------------------- |
| csvFilePath     | \[String]                                          |
| includeFirstRow | \[Boolean]                                         |
| includeRowNum   | \[Boolean]                                         |
| resultValuesNr  | \[int]                                             |
| dirId           | \[Long] dir id used to find or write or read files |
| topic           | \[String]                                          |
| cmd             | \[String]                                          |
| pkIndex         | \[Long]                                            |
| jsObj           | \[Map]                                             |

***

## sendTensorFlowCsvFromSqlQuery

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.sendTensorFlowCsvFromSqlQuery(
	sql, //String
	dataSourceId, //Long
	fromRow, //Long
	maxRowsToRead, //Long
	fieldName, //String
	resultValuesNr, //Integer
	dirId, //Long
	fileName, //String
	jsObj //Map
);
```
{% endcode %}

Details

| Argument       | Description                                                                                        |
| -------------- | -------------------------------------------------------------------------------------------------- |
| sql            | \[String] string value: sql to execute; it can contain ?                                           |
| dataSourceId   | \[Long] num value; it can be null and used to specify a different db to use with the sql statement |
| fromRow        | \[Long]                                                                                            |
| maxRowsToRead  | \[Long]                                                                                            |
| fieldName      | \[String]                                                                                          |
| resultValuesNr | \[Integer]                                                                                         |
| dirId          | \[Long] dir id used to find or write or read files                                                 |
| fileName       | \[String] file name                                                                                |
| jsObj          | \[Map]                                                                                             |

***

## sendWhatsappMessage

WHATSAPP

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.sendWhatsappMessage(
	accountId, //String
	secretKey, //String
	fromNr, //String
	toNumber, //String
	message, //String
	publicUrl //String
);
```
{% endcode %}

Details

| Argument  | Description |
| --------- | ----------- |
| accountId | \[String]   |
| secretKey | \[String]   |
| fromNr    | \[String]   |
| toNumber  | \[String]   |
| message   | \[String]   |
| publicUrl | \[String]   |

***

## sendWhatsappMessage

WHATSAPP

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.sendWhatsappMessage(
	accountId, //String
	secretKey, //String
	fromNr, //String
	toNumber, //String
	message, //String
	bucketName, //String
	fileName //String
);
```
{% endcode %}

Details

| Argument   | Description         |
| ---------- | ------------------- |
| accountId  | \[String]           |
| secretKey  | \[String]           |
| fromNr     | \[String]           |
| toNumber   | \[String]           |
| message    | \[String]           |
| bucketName | \[String]           |
| fileName   | \[String] file name |

***

## sendWhatsappMessage

WHATSAPP

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.sendWhatsappMessage(
	toNumber, //String
	message, //String
	publicUrl //String
);
```
{% endcode %}

Details

| Argument  | Description |
| --------- | ----------- |
| toNumber  | \[String]   |
| message   | \[String]   |
| publicUrl | \[String]   |

***

## sendWhatsappMessage

WHATSAPP

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.sendWhatsappMessage(
	toNumber, //String
	message, //String
	bucketName, //String
	fileName //String
);
```
{% endcode %}

Details

| Argument   | Description         |
| ---------- | ------------------- |
| toNumber   | \[String]           |
| message    | \[String]           |
| bucketName | \[String]           |
| fileName   | \[String] file name |

***

## setBigQueryDataset

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setBigQueryDataset(
	bigQueryDataset //String
);
```
{% endcode %}

Details

| Argument        | Description |
| --------------- | ----------- |
| bigQueryDataset | \[String]   |

***

## setBlockSize

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setBlockSize(
	blockSize //int
);
```
{% endcode %}

Details

| Argument  | Description |
| --------- | ----------- |
| blockSize | \[int]      |

***

## setDatasetId

Set dataset id for the Google Datastore. Helpful in case of statelss ws

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setDatasetId(
	datasetId //String
);
```
{% endcode %}

Details

| Argument  | Description |
| --------- | ----------- |
| datasetId | \[String]   |

***

## setDatastoreNamespace

Export from Datastore the specified list of entities, save them within the GCS bucket identified by the dir id and create corresponding tables on BigQuery.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setDatastoreNamespace(
	namespace //String
);
```
{% endcode %}

Details

| Argument  | Description |
| --------- | ----------- |
| namespace | \[String]   |

***

## setGoogleClientId

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setGoogleClientId(
	id //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| id       | \[String]   |

***

## setGoogleClientSecret

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setGoogleClientSecret(
	pwd //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| pwd      | \[String]   |

***

## setGoogleCloudStorageBucketVersioning

Enable or disable bucket object versioning

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return FileContainer type
var risp = utils.setGoogleCloudStorageBucketVersioning(
	bucketName, //String
	versioning //Boolean
);
```
{% endcode %}

Details

| Argument   | Description                         |
| ---------- | ----------------------------------- |
| bucketName | \[String]                           |
| versioning | \[Boolean] versioning true or false |

***

## setGoogleDriveFileAttributes

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setGoogleDriveFileAttributes(
	userId, //String
	fileId, //String
	fileAttributes //FileAttributes
);
```
{% endcode %}

Details

| Argument       | Description                                                                                                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId         | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| fileId         | \[String] id of Google file                                                                                                                                                                                              |
| fileAttributes | \[FileAttributes]                                                                                                                                                                                                        |

***

## setGoogleDriveFileAttributes

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setGoogleDriveFileAttributes(
	fileId, //String
	fileAttributes //FileAttributes
);
```
{% endcode %}

Details

| Argument       | Description                 |
| -------------- | --------------------------- |
| fileId         | \[String] id of Google file |
| fileAttributes | \[FileAttributes]           |

***

## setGoogleDriveFilePermissions

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setGoogleDriveFilePermissions(
	fileId, //String
	type, //String
	value, //String
	role, //String
	additionalRoles, //String>
	sendNotifications, //boolean
	message //String
);
```
{% endcode %}

Details

| Argument          | Description                 |
| ----------------- | --------------------------- |
| fileId            | \[String] id of Google file |
| type              | \[String]                   |
| value             | \[String]                   |
| role              | \[String]                   |
| additionalRoles   | \[String>]                  |
| sendNotifications | \[boolean]                  |
| message           | \[String]                   |

***

## setGoogleDriveFilePermissions

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setGoogleDriveFilePermissions(
	userId, //String
	fileId, //String
	type, //String
	value, //String
	role, //String
	additionalRoles, //String>
	sendNotifications, //boolean
	message //String
);
```
{% endcode %}

Details

| Argument          | Description                                                                                                                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId            | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| fileId            | \[String] id of Google file                                                                                                                                                                                              |
| type              | \[String]                                                                                                                                                                                                                |
| value             | \[String]                                                                                                                                                                                                                |
| role              | \[String]                                                                                                                                                                                                                |
| additionalRoles   | \[String>]                                                                                                                                                                                                               |
| sendNotifications | \[boolean]                                                                                                                                                                                                               |
| message           | \[String]                                                                                                                                                                                                                |

***

## setGooglePrivateKeyString

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setGooglePrivateKeyString(
	key //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| key      | \[String]   |

***

## setGoogleServiceAccountEmail

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setGoogleServiceAccountEmail(
	email //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| email    | \[String]   |

***

## setGoogleTokenResponse

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setGoogleTokenResponse(
	token //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| token    | \[String]   |

***

## setPublicLink

Upload an object in a bucket starting from a text

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setPublicLink(
	bucketName, //String
	objectName, //String
	publicLink //Boolean
);
```
{% endcode %}

Details

| Argument   | Description |
| ---------- | ----------- |
| bucketName | \[String]   |
| objectName | \[String]   |
| publicLink | \[Boolean]  |

***

## setStartIndex

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setStartIndex(
	startIndex //int
);
```
{% endcode %}

Details

| Argument   | Description |
| ---------- | ----------- |
| startIndex | \[int]      |

***

## setTaskAssignee

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setTaskAssignee(
	taskId, //String
	assignee //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| taskId   | \[String]   |
| assignee | \[String]   |

***

## setValueInRedis

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setValueInRedis(
	key, //String
	value //Object
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| key      | \[String]   |
| value    | \[Object]   |

***

## setValueInRedis

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setValueInRedis(
	key, //String
	value, //Object
	timeout //Integer
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| key      | \[String]   |
| value    | \[Object]   |
| timeout  | \[Integer]  |

***

## sharedContatctsSync

Calls the contacts synchronization process for all applications\
if correctly configured\
@throws Throwable

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.sharedContatctsSync();
```
{% endcode %}

***

## startActivitiProcess

***

```
                                   ACTIVITI
```

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Map type
var risp = utils.startActivitiProcess(
	appId, //String
	processDefinitionId, //String
	params, //Map
	processVariables //Map
);
```
{% endcode %}

Details

| Argument            | Description                                                                                                                                                                                                             |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appId               | \[String]                                                                                                                                                                                                               |
| processDefinitionId | \[String]                                                                                                                                                                                                               |
| params              | \[Map] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |
| processVariables    | \[Map]                                                                                                                                                                                                                  |

***

## unzipFile

Unzip the specified zip file in the specified folder, always in the server file system.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.unzipFile(
	zipDirId, //Long
	zipFileName, //String
	serverFileSystemDir //String
);
```
{% endcode %}

Details

| Argument            | Description |
| ------------------- | ----------- |
| zipDirId            | \[Long]     |
| zipFileName         | \[String]   |
| serverFileSystemDir | \[String]   |

***

## updateBigQueryObject

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Long type
var risp = utils.updateBigQueryObject(
	datasetName, //String
	tableName, //String
	obj, //Map
	pks //String[]
);
```
{% endcode %}

Details

| Argument    | Description                     |
| ----------- | ------------------------------- |
| datasetName | \[String]                       |
| tableName   | \[String] String: name of table |
| obj         | \[Map]                          |
| pks         | \[String\[]]                    |

***

## updateCard

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Map type
var risp = utils.updateCard(
	dataModelId, //Long
	panelId, //Long
	vo //Map
);
```
{% endcode %}

Details

| Argument    | Description                                                      |
| ----------- | ---------------------------------------------------------------- |
| dataModelId | \[Long] data model id, used to compare the attribute value types |
| panelId     | \[Long]                                                          |
| vo          | \[Map]                                                           |

***

## updateCards

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Map[] type
var risp = utils.updateCards(
	dataModelId, //Long
	panelId, //Long
	vos //Map[]
);
```
{% endcode %}

Details

| Argument    | Description                                                      |
| ----------- | ---------------------------------------------------------------- |
| dataModelId | \[Long] data model id, used to compare the attribute value types |
| panelId     | \[Long]                                                          |
| vos         | \[Map\[]]                                                        |

***

## updateFileInCMS

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.updateFileInCMS(
	uuid, //String
	path //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| uuid     | \[String]   |
| path     | \[String]   |

***

## updateFileInCMS

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.updateFileInCMS(
	uuid, //String
	sourceDirId, //Long
	fileName //String
);
```
{% endcode %}

Details

| Argument    | Description         |
| ----------- | ------------------- |
| uuid        | \[String]           |
| sourceDirId | \[Long]             |
| fileName    | \[String] file name |

***

## updateGoogleContact

Updates a contact in the list, personal or shared, based on the `shared` flag.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Contact type
var risp = utils.updateGoogleContact(
	contactId, //String
	name, //String
	surname, //String
	email, //String
	phone, //String
	shared //Boolean
);
```
{% endcode %}

Details

| Argument  | Description |
| --------- | ----------- |
| contactId | \[String]   |
| name      | \[String]   |
| surname   | \[String]   |
| email     | \[String]   |
| phone     | \[String]   |
| shared    | \[Boolean]  |

***

## updateGoogleDriveFile

Generic method to update Google Drive file

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.updateGoogleDriveFile(
	userId, //String
	fileId, //String
	title, //String
	description, //String
	mimeType //String
);
```
{% endcode %}

Details

| Argument    | Description                                                                                                                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId      | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| fileId      | \[String] id of Google file                                                                                                                                                                                              |
| title       | \[String]                                                                                                                                                                                                                |
| description | \[String]                                                                                                                                                                                                                |
| mimeType    | \[String]                                                                                                                                                                                                                |

***

## updateGoogleDriveFile

Generic method to update Google Drive file

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.updateGoogleDriveFile(
	fileId, //String
	title, //String
	description, //String
	mimeType //String
);
```
{% endcode %}

Details

| Argument    | Description                 |
| ----------- | --------------------------- |
| fileId      | \[String] id of Google file |
| title       | \[String]                   |
| description | \[String]                   |
| mimeType    | \[String]                   |

***

## updateGoogleDriveFileFromFS

Update Google Drive file from a server file system path in the current user Drive

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.updateGoogleDriveFileFromFS(
	userId, //String
	fileId, //String
	fsPath, //String
	deleteFsFile, //boolean
	newRevision //boolean
);
```
{% endcode %}

Details

| Argument     | Description                                                                                                                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId       | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| fileId       | \[String] id of Google file                                                                                                                                                                                              |
| fsPath       | \[String]                                                                                                                                                                                                                |
| deleteFsFile | \[boolean] deleteFsFile if at the end of the upload the file must be deleted from file system                                                                                                                            |
| newRevision  | \[boolean]                                                                                                                                                                                                               |

***

## updateGoogleDriveFileFromFS

Update Google Drive file from a server file system path in the current user Drive

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.updateGoogleDriveFileFromFS(
	fileId, //String
	fsPath, //String
	deleteFsFile, //boolean
	newRevision //boolean
);
```
{% endcode %}

Details

| Argument     | Description                                                                                   |
| ------------ | --------------------------------------------------------------------------------------------- |
| fileId       | \[String] id of Google file                                                                   |
| fsPath       | \[String]                                                                                     |
| deleteFsFile | \[boolean] deleteFsFile if at the end of the upload the file must be deleted from file system |
| newRevision  | \[boolean]                                                                                    |

***

## updateObjectOnBigQuery

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.updateObjectOnBigQuery(
	obj, //Map
	dataModelId, //Long
	interruptExecution //Boolean
);
```
{% endcode %}

Details

| Argument           | Description                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| obj                | \[Map]                                                                                                                                                                    |
| dataModelId        | \[Long] data model id, used to compare the attribute value types                                                                                                          |
| interruptExecution | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |

***

## updateObjectOnGoogleDatastore

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.updateObjectOnGoogleDatastore(
	obj, //Map
	dataModelId, //Long
	interruptExecution //Boolean
);
```
{% endcode %}

Details

| Argument           | Description                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| obj                | \[Map]                                                                                                                                                                    |
| dataModelId        | \[Long] data model id, used to compare the attribute value types                                                                                                          |
| interruptExecution | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |

***

## updateObjectOnGoogleSpanner

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.updateObjectOnGoogleSpanner(
	obj, //Map
	dataModelId, //Long
	interruptExecution //Boolean
);
```
{% endcode %}

Details

| Argument           | Description                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| obj                | \[Map]                                                                                                                                                                    |
| dataModelId        | \[Long] data model id, used to compare the attribute value types                                                                                                          |
| interruptExecution | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |

***

## updateObjectOnMongoDb

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Map type
var risp = utils.updateObjectOnMongoDb(
	obj, //Map
	dataModelId, //Long
	interruptExecution //Boolean
);
```
{% endcode %}

Details

| Argument           | Description                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| obj                | \[Map]                                                                                                                                                                    |
| dataModelId        | \[Long] data model id, used to compare the attribute value types                                                                                                          |
| interruptExecution | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |

***

## updateObjectsOnBigQuery

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.updateObjectsOnBigQuery(
	objs, //Map[]
	dataModelId, //Long
	interruptExecution //Boolean
);
```
{% endcode %}

Details

| Argument           | Description                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objs               | \[Map\[]]                                                                                                                                                                 |
| dataModelId        | \[Long] data model id, used to compare the attribute value types                                                                                                          |
| interruptExecution | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |

***

## updateObjectsOnGoogleDatastore

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.updateObjectsOnGoogleDatastore(
	objs, //Map[]
	dataModelId, //Long
	interruptExecution //Boolean
);
```
{% endcode %}

Details

| Argument           | Description                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objs               | \[Map\[]]                                                                                                                                                                 |
| dataModelId        | \[Long] data model id, used to compare the attribute value types                                                                                                          |
| interruptExecution | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |

***

## updateObjectsOnGoogleDatastoreWitSettings

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.updateObjectsOnGoogleDatastoreWitSettings(
	objs, //Map[]
	dataModelId, //Long
	interruptExecution, //Boolean
	settings //Map
);
```
{% endcode %}

Details

| Argument           | Description                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objs               | \[Map\[]]                                                                                                                                                                 |
| dataModelId        | \[Long] data model id, used to compare the attribute value types                                                                                                          |
| interruptExecution | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |
| settings           | \[Map]                                                                                                                                                                    |

***

## updateObjectsOnGoogleDatastoreWithSettings

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.updateObjectsOnGoogleDatastoreWithSettings(
	objs, //Map[]
	dataModelId, //Long
	interruptExecution, //Boolean
	settings //Map
);
```
{% endcode %}

Details

| Argument           | Description                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objs               | \[Map\[]]                                                                                                                                                                 |
| dataModelId        | \[Long] data model id, used to compare the attribute value types                                                                                                          |
| interruptExecution | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |
| settings           | \[Map]                                                                                                                                                                    |

***

## updateObjectsOnGoogleSpanner

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.updateObjectsOnGoogleSpanner(
	objs, //Map[]
	dataModelId, //Long
	interruptExecution //Boolean
);
```
{% endcode %}

Details

| Argument           | Description                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objs               | \[Map\[]]                                                                                                                                                                 |
| dataModelId        | \[Long] data model id, used to compare the attribute value types                                                                                                          |
| interruptExecution | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |

***

## updateRangeGoogleSheet

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Integer type
var risp = utils.updateRangeGoogleSheet(
	userId, //String
	spreadsheetId, //String
	range, //String
	valueInputOption, //String
	vos //Object[][]
);
```
{% endcode %}

Details

| Argument         | Description                                                                                                                                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId           | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| spreadsheetId    | \[String] Id of Google SpreadSheet                                                                                                                                                                                       |
| range            | \[String]                                                                                                                                                                                                                |
| valueInputOption | \[String]                                                                                                                                                                                                                |
| vos              | \[Object\[]\[]]                                                                                                                                                                                                          |

***

## updateSheets

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.updateSheets(
	userId, //String
	spreadsheetId, //String
	areas //Map>
);
```
{% endcode %}

Details

| Argument      | Description                                                                                                                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId        | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| spreadsheetId | \[String] Id of Google SpreadSheet                                                                                                                                                                                       |
| areas         | \[Map>]                                                                                                                                                                                                                  |

***

## updateSheets

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.updateSheets(
	spreadsheetId, //String
	areas //Map>
);
```
{% endcode %}

Details

| Argument      | Description                        |
| ------------- | ---------------------------------- |
| spreadsheetId | \[String] Id of Google SpreadSheet |
| areas         | \[Map>]                            |

***

## uploadAndRenameGoogleDriveFileFromFS

Upload file to Google Drive from a server file system path in the current user Drive and specify optionally a different name to use

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.uploadAndRenameGoogleDriveFileFromFS(
	fsPath, //String
	parentId, //String
	fileName, //String
	deleteFsFile //boolean
);
```
{% endcode %}

Details

| Argument     | Description                                                                                                                |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- |
| fsPath       | \[String]                                                                                                                  |
| parentId     | \[String] parentId the id of parent folder in Drive where to put the file. Can be null, in this case uploads to Drive root |
| fileName     | \[String] file name                                                                                                        |
| deleteFsFile | \[boolean] deleteFsFile if at the end of the upload the file must be deleted from file system                              |

***

## uploadAndRenameGoogleDriveFileFromFS

Upload file to Google Drive from a server file system path in the current user Drive and specify optionally a different name to use

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.uploadAndRenameGoogleDriveFileFromFS(
	userId, //String
	fsPath, //String
	parentId, //String
	fileName, //String
	deleteFsFile //boolean
);
```
{% endcode %}

Details

| Argument     | Description                                                                                                                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId       | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| fsPath       | \[String]                                                                                                                                                                                                                |
| parentId     | \[String] parentId the id of parent folder in Drive where to put the file. Can be null, in this case uploads to Drive root                                                                                               |
| fileName     | \[String] file name                                                                                                                                                                                                      |
| deleteFsFile | \[boolean] deleteFsFile if at the end of the upload the file must be deleted from file system                                                                                                                            |

***

## uploadAndRenameGoogleDriveFileInNamedFolderFromFS

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.uploadAndRenameGoogleDriveFileInNamedFolderFromFS(
	fsPath, //String
	baseFolderId, //String
	folderName, //String
	createFolderIfNotExists, //Boolean
	fileName, //String
	deleteFsFile //boolean
);
```
{% endcode %}

Details

| Argument                | Description                                                                         |
| ----------------------- | ----------------------------------------------------------------------------------- |
| fsPath                  | \[String]                                                                           |
| baseFolderId            | \[String]                                                                           |
| folderName              | \[String]                                                                           |
| createFolderIfNotExists | \[Boolean] true if you want create the directory when it not exist, false otherwise |
| fileName                | \[String] file name                                                                 |
| deleteFsFile            | \[boolean]                                                                          |

***

## uploadAndRenameGoogleDriveFileInNamedFolderFromFS

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.uploadAndRenameGoogleDriveFileInNamedFolderFromFS(
	userId, //String
	fsPath, //String
	baseFolderId, //String
	folderName, //String
	createFolderIfNotExists, //Boolean
	fileName, //String
	deleteFsFile //boolean
);
```
{% endcode %}

Details

| Argument                | Description                                                                                                                                                                                                              |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId                  | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| fsPath                  | \[String]                                                                                                                                                                                                                |
| baseFolderId            | \[String]                                                                                                                                                                                                                |
| folderName              | \[String]                                                                                                                                                                                                                |
| createFolderIfNotExists | \[Boolean] true if you want create the directory when it not exist, false otherwise                                                                                                                                      |
| fileName                | \[String] file name                                                                                                                                                                                                      |
| deleteFsFile            | \[boolean]                                                                                                                                                                                                               |

***

## uploadArchiflowDocument

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Boolean type
var risp = utils.uploadArchiflowDocument(
	dirId, //Long
	fileNameSrc, //String
	cardId, //String
	fileName, //String
	documentTitle, //String
	additionalSettings //Map
);
```
{% endcode %}

Details

| Argument           | Description                                        |
| ------------------ | -------------------------------------------------- |
| dirId              | \[Long] dir id used to find or write or read files |
| fileNameSrc        | \[String]                                          |
| cardId             | \[String]                                          |
| fileName           | \[String] file name                                |
| documentTitle      | \[String]                                          |
| additionalSettings | \[Map]                                             |

***

## uploadGoogleCloudStorageObjectFromFS

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.uploadGoogleCloudStorageObjectFromFS(
	fsPath, //String
	bucketName, //String
	objectName, //String
	deleteFsFile //Boolean
);
```
{% endcode %}

Details

| Argument     | Description |
| ------------ | ----------- |
| fsPath       | \[String]   |
| bucketName   | \[String]   |
| objectName   | \[String]   |
| deleteFsFile | \[Boolean]  |

***

## uploadGoogleCloudStorageObjectFromString

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.uploadGoogleCloudStorageObjectFromString(
	textContent, //String
	bucketName, //String
	objectName, //String
	contentType //String
);
```
{% endcode %}

Details

| Argument    | Description |
| ----------- | ----------- |
| textContent | \[String]   |
| bucketName  | \[String]   |
| objectName  | \[String]   |
| contentType | \[String]   |

***

## uploadGoogleCloudStoragePublicObjectFromFS

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.uploadGoogleCloudStoragePublicObjectFromFS(
	fsPath, //String
	bucketName, //String
	objectName, //String
	deleteFsFile //Boolean
);
```
{% endcode %}

Details

| Argument     | Description |
| ------------ | ----------- |
| fsPath       | \[String]   |
| bucketName   | \[String]   |
| objectName   | \[String]   |
| deleteFsFile | \[Boolean]  |

***

## uploadGoogleCloudStoragePublicObjectFromString

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.uploadGoogleCloudStoragePublicObjectFromString(
	textContent, //String
	bucketName, //String
	objectName, //String
	contentType //String
);
```
{% endcode %}

Details

| Argument    | Description |
| ----------- | ----------- |
| textContent | \[String]   |
| bucketName  | \[String]   |
| objectName  | \[String]   |
| contentType | \[String]   |

***

## uploadGoogleDriveFileFromFS

Upload file to Google Drive from a server file system path in the current user Drive

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.uploadGoogleDriveFileFromFS(
	fsPath, //String
	parentId, //String
	deleteFsFile //boolean
);
```
{% endcode %}

Details

| Argument     | Description                                                                                                                |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- |
| fsPath       | \[String]                                                                                                                  |
| parentId     | \[String] parentId the id of parent folder in Drive where to put the file. Can be null, in this case uploads to Drive root |
| deleteFsFile | \[boolean] deleteFsFile if at the end of the upload the file must be deleted from file system                              |

***

## uploadGoogleDriveFileFromFS

Upload file to Google Drive from a server file system path in the current user Drive

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.uploadGoogleDriveFileFromFS(
	userId, //String
	fsPath, //String
	parentId, //String
	deleteFsFile //boolean
);
```
{% endcode %}

Details

| Argument     | Description                                                                                                                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId       | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| fsPath       | \[String]                                                                                                                                                                                                                |
| parentId     | \[String] parentId the id of parent folder in Drive where to put the file. Can be null, in this case uploads to Drive root                                                                                               |
| deleteFsFile | \[boolean] deleteFsFile if at the end of the upload the file must be deleted from file system                                                                                                                            |

***

## uploadGoogleDriveFileInNamedFolderFromFS

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.uploadGoogleDriveFileInNamedFolderFromFS(
	fsPath, //String
	baseFolderId, //String
	folderName, //String
	createFolderIfNotExists, //Boolean
	deleteFsFile //boolean
);
```
{% endcode %}

Details

| Argument                | Description                                                                         |
| ----------------------- | ----------------------------------------------------------------------------------- |
| fsPath                  | \[String]                                                                           |
| baseFolderId            | \[String]                                                                           |
| folderName              | \[String]                                                                           |
| createFolderIfNotExists | \[Boolean] true if you want create the directory when it not exist, false otherwise |
| deleteFsFile            | \[boolean]                                                                          |

***

## uploadGoogleDriveFileInNamedFolderFromFS

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return File type
var risp = utils.uploadGoogleDriveFileInNamedFolderFromFS(
	userId, //String
	fsPath, //String
	baseFolderId, //String
	folderName, //String
	createFolderIfNotExists, //Boolean
	deleteFsFile //boolean
);
```
{% endcode %}

Details

| Argument                | Description                                                                                                                                                                                                              |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| userId                  | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| fsPath                  | \[String]                                                                                                                                                                                                                |
| baseFolderId            | \[String]                                                                                                                                                                                                                |
| folderName              | \[String]                                                                                                                                                                                                                |
| createFolderIfNotExists | \[Boolean] true if you want create the directory when it not exist, false otherwise                                                                                                                                      |
| deleteFsFile            | \[boolean]                                                                                                                                                                                                               |

***

## upsertObjectOnGoogleDatastore

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.upsertObjectOnGoogleDatastore(
	obj, //Map
	dataModelId, //Long
	interruptExecution //Boolean
);
```
{% endcode %}

Details

| Argument           | Description                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| obj                | \[Map]                                                                                                                                                                    |
| dataModelId        | \[Long] data model id, used to compare the attribute value types                                                                                                          |
| interruptExecution | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |

***

## upsertObjectsOnGoogleDatastore

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.upsertObjectsOnGoogleDatastore(
	objs, //Map[]
	dataModelId, //Long
	interruptExecution //Boolean
);
```
{% endcode %}

Details

| Argument           | Description                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objs               | \[Map\[]]                                                                                                                                                                 |
| dataModelId        | \[Long] data model id, used to compare the attribute value types                                                                                                          |
| interruptExecution | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |

***

## upsertObjectsOnGoogleDatastoreWithSettings

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.upsertObjectsOnGoogleDatastoreWithSettings(
	objs, //Map[]
	dataModelId, //Long
	interruptExecution, //Boolean
	settings //Map
);
```
{% endcode %}

Details

| Argument           | Description                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objs               | \[Map\[]]                                                                                                                                                                 |
| dataModelId        | \[Long] data model id, used to compare the attribute value types                                                                                                          |
| interruptExecution | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |
| settings           | \[Map]                                                                                                                                                                    |

***

## validateAlexaRequest

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.validateAlexaRequest(
	signingCertificateChainUrl, //String
	baseEncoded64Signature, //String
	requestBody //String
);
```
{% endcode %}

Details

| Argument                   | Description |
| -------------------------- | ----------- |
| signingCertificateChainUrl | \[String]   |
| baseEncoded64Signature     | \[String]   |
| requestBody                | \[String]   |

***
