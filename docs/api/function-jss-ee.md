# Function JSS EE

## addFileToMobileDevices

Register a file (store it in CON55 and if needed in CON54 as well) so that it can be linked to all the registered devices or only to devices linked to the specified username.

Syntax
```javascript
utils.addFileToMobileDevices(
	fullPathName, //String
	fileName, //String
	username //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fullPathName | String | absolute path, in the central server, where the file is stored; it must include the file name too | 
| fileName | String | file name, without the path | 
| username | String | it can be null: if so, the file is linked to all registered devices; if this argument is not empty, then the file is linked to all devices binded to this username | 


---

## addGoogleCalendarEventWithConference

Creates an event in the specified Google Calendar with a conference (video meeting) link. Similar to `addGoogleCalendarEventWithSettings` but also attaches a conference solution (e.g., Google Meet) to the event.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| serviceAccountEmail | String | the Google service account email for authentication; if `null`, falls back to the platform default | 
| privateKeyString | String | the PEM-encoded private key; if `null`, falls back to the platform default | 
| userId | String | the Google user email to impersonate; if `null`, uses the current user's email | 
| title | String | the event title/summary | 
| beginDate | Date | the event start date and time | 
| endDate | Date | the event end date and time | 
| description | String | the event description body (HTML supported); may be `null` | 
| location | String | the event location string; may be `null` | 
| calendarId | String | the target calendar ID (usually an email); if `null`, defaults to `userId` | 
| type | String | the conference solution type; allowed values: `"eventHangout"`, `"eventNamedHangout"`, `"hangoutsMeet"` | 
| creatorEmail | String | the email of the event creator/organizer; may be `null` | 
| attendeeEmails | String[] | varargs list of attendee email addresses to invite | 

> ✅ **Returns**
>
> the created `CalendarEvent` with its assigned Google Calendar event ID and conference data

> ⚠️ **Throws**
>
> - `Throwable` if the Google Calendar API call fails


---

## addGoogleCalendarEventWithSettings

Creates an event in the specified Google Calendar with full settings (excluding conference). Allows explicit service account credentials, a target calendar, description, location, creator, and attendee list. Does not create a conference link.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| serviceAccountEmail | String | the Google service account email for authentication; if `null`, falls back to the platform default | 
| privateKeyString | String | the PEM-encoded private key; if `null`, falls back to the platform default | 
| userId | String | the Google user email to impersonate; if `null`, uses the current user's email | 
| title | String | the event title/summary | 
| beginDate | Date | the event start date and time | 
| endDate | Date | the event end date and time | 
| description | String | the event description body (HTML supported); may be `null` | 
| location | String | the event location string; may be `null` | 
| calendarId | String | the target calendar ID (usually an email); if `null`, defaults to `userId` | 
| creatorEmail | String | the email of the event creator/organizer; may be `null` | 
| attendeeEmails | String[] | varargs list of attendee email addresses to invite | 

> ✅ **Returns**
>
> the created `CalendarEvent` with its assigned Google Calendar event ID

> ⚠️ **Throws**
>
> - `Throwable` if the Google Calendar API call fails


---

## addGoogleCalendarEvent

Creates a simple event in the main user calendar using platform-default credentials. This is the simplest overload: it uses the service account email, private key, and user email from the platform's internal state. The event is created in the user's primary calendar with only a title and time range.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| serviceAccountEmail | String | the Google service account email for authentication; if `null`, falls back to the platform default | 
| privateKeyString | String | the PEM-encoded private key; if `null`, falls back to the platform default | 
| userId | String | the Google user email to impersonate; if `null`, uses the current user's email | 
| title | String | the event title/summary displayed in the calendar | 
| beginDate | Date | the event start date and time | 
| endDate | Date | the event end date and time | 
| description | String | the event description body (HTML supported); may be `null` | 
| location | String | the event location string; may be `null` | 
| calendarId | String | the target calendar ID (usually an email); if `null`, defaults to `userId` | 
| creatorEmail | String | the email of the event creator/organizer; may be `null` | 
| optionals | Map | a Map containing optional event settings: _(details below)_ | 
| attendeeEmails | String[] | varargs list of attendee email addresses to invite | 

#### `optionals`

a Map containing optional event settings:
- `"type"` - conference type: `"eventHangout"`, `"eventNamedHangout"`, or `"hangoutsMeet"`
- `"id"` - custom event ID to assign
- `"iCalUID"` - iCalendar UID for interoperability with other calendar systems
- `"reminders"` - a `List>` of reminder overrides, each map containing `"method"` (email/popup) and `"minutes"`

> ✅ **Returns**
>
> the created `CalendarEvent` with its assigned Google Calendar event ID

> ⚠️ **Throws**
>
> - `Throwable` if the Google Calendar API call fails


---

## addGoogleCalendarEvent

Creates a simple event in the main user calendar using platform-default credentials. This is the simplest overload: it uses the service account email, private key, and user email from the platform's internal state. The event is created in the user's primary calendar with only a title and time range.

Syntax
```javascript
//return CalendarEvent type
var risp = utils.addGoogleCalendarEvent(
	title, //String
	beginDate, //Date
	endDate //Date
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| title | String | the event title/summary displayed in the calendar | 
| beginDate | Date | the event start date and time | 
| endDate | Date | the event end date and time | 

> ✅ **Returns**
>
> the created `CalendarEvent` with its assigned Google Calendar event ID

> ⚠️ **Throws**
>
> - `Throwable` if the Google Calendar API call fails


---

## addGoogleContact

Creates a new Google Contact in the user's personal contact list or the domain shared contact list. When `shared` is `true`, the contact is added to the domain's Global Address List (GAL), visible to all domain users. Otherwise, it is added to the current user's personal contacts.

Syntax
```javascript
//return Contact type
var risp = utils.addGoogleContact(
	name, //String
	surname, //String
	email, //String
	phone, //String
	shared //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| name | String | the contact's first name | 
| surname | String | the contact's last name | 
| email | String | the contact's email address | 
| phone | String | the contact's phone number | 
| shared | Boolean | if `true`, adds the contact to the domain shared list; if `false` or `null`, adds to the user's personal list | 

> ✅ **Returns**
>
> the created `Contact` object with server-assigned ID and metadata

> ⚠️ **Throws**
>
> - `Throwable` if the Google Contacts API call fails or authentication fails


---

## addGoogleDriveFileProperty

Adds a custom property to a Google Drive file or folder, operating as the current user. Properties are key-value metadata pairs attached to Drive files. Public properties are visible to all users who have access to the file; private properties are only visible to the application that created them.

Syntax
```javascript
utils.addGoogleDriveFileProperty(
	userId, //String
	fileId, //String
	key, //String
	value, //String
	visibility //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate via domain-wide delegation | 
| fileId | String | the Google Drive file or folder ID | 
| key | String | the property name (key) | 
| value | String | the property value | 
| visibility | String | the property visibility: `"PUBLIC"` (visible to all apps) or `"PRIVATE"` (visible only to this app) | 

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## addGoogleDriveFileProperty

Adds a custom property to a Google Drive file or folder, operating as the current user. Properties are key-value metadata pairs attached to Drive files. Public properties are visible to all users who have access to the file; private properties are only visible to the application that created them.

Syntax
```javascript
utils.addGoogleDriveFileProperty(
	fileId, //String
	key, //String
	value, //String
	visibility //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileId | String | the Google Drive file or folder ID | 
| key | String | the property name (key) | 
| value | String | the property value | 
| visibility | String | the property visibility: `"PUBLIC"` (visible to all apps) or `"PRIVATE"` (visible only to this app) | 

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## addISO8601

Add an ISO 8601 duration/period to a given date.

Syntax
```javascript
//return Date type
var risp = utils.addISO8601(
	dt, //Date
	period //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dt | Date | the base date to add the period to | 
| period | String | an ISO 8601 period string (e.g. "P1Y2M3DT4H5M6S") | 

> ✅ **Returns**
>
> the resulting date after adding the period

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## addNotificationsAllEvents

Adds reminder notifications to all events in the specified Google Calendar. Iterates over all events in the target calendar and applies the given reminder overrides. Useful for bulk-updating notification settings across an entire calendar.

Syntax
```javascript
utils.addNotificationsAllEvents(
	serviceAccountEmail, //String
	privateKeyString, //String
	userId, //String
	calendarId, //String
	reminders //String>>
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| serviceAccountEmail | String | the Google service account email for authentication; if `null`, falls back to the platform default | 
| privateKeyString | String | the PEM-encoded private key; if `null`, falls back to the platform default | 
| userId | String | the Google user email to impersonate; if `null`, uses the current user's email | 
| calendarId | String | the target calendar ID whose events will receive the reminders | 
| reminders | String>> | a list of reminder overrides; each map should contain: _(details below)_ | 

#### `reminders`

a list of reminder overrides; each map should contain:
- `"method"` - the reminder method (`"email"` or `"popup"`)
- `"minutes"` - minutes before the event to trigger the reminder

> ⚠️ **Throws**
>
> - `Throwable` if the Google Calendar API call fails
- `Exception` if `userId` (after fallback) is null or empty


---

## addPermissionsToGoogleDriveFolder

Adds permissions to a Google Drive folder and its contents, operating as the current user. Allows specifying different roles for files and folders within the target folder. For example, folders can be read-only while files are read/write. The operation can be applied recursively through the entire folder tree or only to the first level. Notifications with a custom message can be sent to affected users.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate via domain-wide delegation | 
| folderId | String | the Google Drive folder ID to which permissions are applied | 
| type | String | the grantee type: `"user"`, `"group"`, `"domain"`, or `"default"` | 
| value | String | the email address or domain name of the grantee | 
| fileRole | String | the role for files: `"reader"`, `"writer"`, or `"owner"` | 
| folderRole | String | the role for folders: `"reader"`, `"writer"`, or `"owner"` | 
| additionalRoles | String> | additional capabilities (e.g., `"commenter"`); may be `null` | 
| updateBaseFolder | Boolean | if `true`, also updates permissions on the base folder itself | 
| recursive | Boolean | if `true`, applies permissions recursively to all nested subfolders; if `false`, only applies to the first level inside the folder | 
| sendNotifications | Boolean | if `true`, sends notification emails to the affected users | 
| message | String | a custom message to include in the notification email; may be `null` | 

> ✅ **Returns**
>
> a `File` representing the folder with updated permissions

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## addPermissionsToGoogleDriveFolder

Adds permissions to a Google Drive folder and its contents, operating as the current user. Allows specifying different roles for files and folders within the target folder. For example, folders can be read-only while files are read/write. The operation can be applied recursively through the entire folder tree or only to the first level. Notifications with a custom message can be sent to affected users.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| folderId | String | the Google Drive folder ID to which permissions are applied | 
| type | String | the grantee type: `"user"`, `"group"`, `"domain"`, or `"default"` | 
| value | String | the email address or domain name of the grantee | 
| fileRole | String | the role for files: `"reader"`, `"writer"`, or `"owner"` | 
| folderRole | String | the role for folders: `"reader"`, `"writer"`, or `"owner"` | 
| additionalRoles | String> | additional capabilities (e.g., `"commenter"`); may be `null` | 
| updateBaseFolder | Boolean | if `true`, also updates permissions on the base folder itself | 
| recursive | Boolean | if `true`, applies permissions recursively to all nested subfolders; if `false`, only applies to the first level inside the folder | 
| sendNotifications | Boolean | if `true`, sends notification emails to the affected users | 
| message | String | a custom message to include in the notification email; may be `null` | 

> ✅ **Returns**
>
> a `File` representing the folder with updated permissions

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## addValueInCache

Add a value to the shared web cache, with no expiration time for that variable.

Syntax
```javascript
utils.addValueInCache(
	varName, //String
	value, //Object
	expirationTime //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| varName | String | variable name | 
| value | Object | value to store | 
| expirationTime | Long | expiration time, expressed in minutes | 

> ⚠️ **Throws**
>
> - `Exception` in case of overflow in the max number of values which can be stored in the cache (1000 values)


---

## addValueInCache

Add a value to the shared web cache, with no expiration time for that variable.

Syntax
```javascript
utils.addValueInCache(
	varName, //String
	value //Object
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| varName | String | variable name | 
| value | Object | value to store | 

> ⚠️ **Throws**
>
> - `Exception` in case of overflow in the max number of values which can be stored in the cache (1000 values)


---

## analyzeEntities

Find named entities (proper nouns, common nouns, etc.) in the provided text using Google Cloud Natural Language API. Returns a JSON string with each entity's name, type, salience, and mentions.

Syntax
```javascript
//return String type
var risp = utils.analyzeEntities(
	text, //String
	encodingType, //String
	htmlText //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| text | String | the text content to analyze | 
| encodingType | String | the encoding type for calculating offsets (e.g. "UTF8", "UTF16", "UTF32", "NONE") | 
| htmlText | Boolean | `true` if the text is HTML content, `false` for plain text | 

> ✅ **Returns**
>
> a JSON string containing the entity analysis result

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## analyzeEntitySentiment

Analyze the sentiment associated with each entity mentioned in the provided text using Google Cloud Natural Language API. Returns a JSON string with entities, their types, salience, and per-entity sentiment.

Syntax
```javascript
//return String type
var risp = utils.analyzeEntitySentiment(
	text, //String
	encodingType, //String
	htmlText //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| text | String | the text content to analyze | 
| encodingType | String | the encoding type for calculating offsets (e.g. "UTF8", "UTF16", "UTF32", "NONE") | 
| htmlText | Boolean | `true` if the text is HTML content, `false` for plain text | 

> ✅ **Returns**
>
> a JSON string containing the entity sentiment analysis result

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## analyzeSentiment

Analyze the sentiment of the provided text using Google Cloud Natural Language API. Returns a JSON string with the overall document sentiment score and magnitude, plus sentence-level sentiment details.

Syntax
```javascript
//return String type
var risp = utils.analyzeSentiment(
	text, //String
	encodingType, //String
	htmlText //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| text | String | the text content to analyze | 
| encodingType | String | the encoding type for calculating offsets (e.g. "UTF8", "UTF16", "UTF32", "NONE") | 
| htmlText | Boolean | `true` if the text is HTML content, `false` for plain text | 

> ✅ **Returns**
>
> a JSON string containing the sentiment analysis result

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## analyzeSyntax

Analyze the syntax of the provided text using Google Cloud Natural Language API. Returns a JSON string with tokenized sentences and part-of-speech tagging, morphology, and dependency parse trees.

Syntax
```javascript
//return String type
var risp = utils.analyzeSyntax(
	text, //String
	encodingType, //String
	htmlText //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| text | String | the text content to analyze | 
| encodingType | String | the encoding type for calculating offsets (e.g. "UTF8", "UTF16", "UTF32", "NONE") | 
| htmlText | Boolean | `true` if the text is HTML content, `false` for plain text | 

> ✅ **Returns**
>
> a JSON string containing the syntax analysis result

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## appendRangeGoogleSheet

Append rows of data to a Google Sheet after the last row with data in the specified range.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the user email for Google Sheets authentication (domain-wide delegation) | 
| spreadsheetId | String | the Google Spreadsheet ID | 
| range | String | the A1 notation range to determine where to append (e.g., "Sheet1!A:D") | 
| valueInputOption | String | how the input data should be interpreted: RAW or USER_ENTERED | 
| insertDataOption | String | how the input data should be inserted: OVERWRITE or INSERT_ROWS | 
| vos | Object[][] | two-dimensional array of values to append (rows x columns) | 

> ✅ **Returns**
>
> the number of rows appended

> ⚠️ **Throws**
>
> - `Throwable` in case of Google API errors or authentication failures


---

## backupEntitiesInGCS

Export from Datastore the specified list of entities and save them within the GCS bucket identified by the dir id

Syntax
```javascript
//return String type
var risp = utils.backupEntitiesInGCS(
	entityNames, //String[]
	directoryId //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| entityNames | String[] | list of entities to export | 
| directoryId | Long | identifier for a GCS bucket | 

> ✅ **Returns**
>
> fully-qualified URIs that point to your data in Google Cloud Storage, where data has been exported


---

## bulkDeleteOnGoogleDatastore

Executes a bulk delete of all Google Datastore entities matching a GQL query. Every entity returned by the GQL query is permanently deleted from Datastore. Use with caution as this operation is irreversible.

Syntax
```javascript
utils.bulkDeleteOnGoogleDatastore(
	gql //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| gql | String | the GQL query selecting entities to delete (e.g., `"SELECT FROM MyKind WHERE status = 'ARCHIVED'"`) | 

> ⚠️ **Throws**
>
> - `Throwable` if the Datastore API call fails or authentication fails


---

## bulkImportFromDSToBigQuery

Import multiple records as a streaming. return errors during import, expressed as a JSON map; null if there are NOT errors IMPORTANT NOTE: this records are read only: they cannot neither be updated or deleted.

Syntax
```javascript
utils.bulkImportFromDSToBigQuery(
	gql, //String
	datastoreDataModelId, //Long
	location, //String
	bigQueryTable, //String
	interruptExecution, //boolean
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| gql | String | the GQL query to execute against the Datastore to retrieve source records | 
| datastoreDataModelId | Long | the platform data model ID defining the Datastore entity structure | 
| location | String | the BigQuery dataset location (e.g. "US", "EU") | 
| bigQueryTable | String | the destination BigQuery table name | 
| interruptExecution | boolean | if `true`, exceptions are propagated to the caller; if `false`, errors are logged and execution continues | 
| pars | Object[] | values related to bind variables included in the GQL query as ?1, ?2, etc. | 

> ⚠️ **Throws**
>
> - `Throwable` if the import fails and `interruptExecution` is `true`


---

## bulkImportFromDSToSpanner

Import multiple records as a streaming. return errors during import, expressed as a JSON map; null if there are NOT errors

Syntax
```javascript
utils.bulkImportFromDSToSpanner(
	gql, //String
	datastoreDataModelId, //Long
	interruptExecution, //boolean
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| gql | String |  | 
| datastoreDataModelId | Long |  | 
| interruptExecution | boolean | boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue | 
| pars | Object[] | this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use []); these additional parameters represent values which replace ? symbols in the sql query. | 


---

## bulkImportFromFTP

Import all files found in the location identified by sourceDirId and load them into the location identified by destDirId. If backupDirId is not null, input files are also moved (removed from the source folder) to the location identified by backupDirId. If backupDirId is null, input files are simply deleted from the source folder. In the same source location a .csv file could be found: if it exists and the "csvFileName" argument has been specified, then it will be used to read metadata to map for each indexed file. In order to use this csv file, the following conditions must be satisfied: - the first row in the csv file must contain the attribute names to use when loading its content in the table's fields (attributes not found in the datamode/table will be ignored and a warning message will be logged) - one of the csv fields must be related to the corresponding file name; such field must be specified as this method argument The csv file will be deleted after its processing (optionally moved along with the files in the backup destination, if specified)

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| host | String |  | 
| port | Integer |  | 
| useSSL | Boolean |  | 
| username | String | username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. | 
| password | String |  | 
| remoteDir | String |  | 
| fileFilter | String |  | 
| destDirId | Long | destination location for files to read (to move) | 
| backupDirId | Long | optional parameter: if specified, input files are not only copied to the destination dir but also here, before being deleted from the source location | 
| dataSourceId | Long | data source identified, where the specified "tableName" is defined | 
| tableName | String | table name where files will be indexed (the uuid + destDirId); a datamodel MUST have been defined for such a table | 
| csvFileName | String | file name for the csv to process along with files | 
| csvFileNameField | String | field name in the first row of the csv file, related to file names, which allows to map each row in the csv with the corresponding file | 
| csvUniqueIdField | String | (optional) field name in the first row of the csv file, related to a value which identifies uniquelly a row/file in the file: it will be used when updating files already indexed; if not specified the "csvFileNameField" property will be used instead | 
| csvSep | String | ; or , symbol | 
| defaultValues | Object> | collection of attribute names + default values, to set in case the metadata does not provide a value for these attributes; :XXX variables are supported | 
| mappingCsvToFields | String> | collection of attribute names defined as first row in csv vs field name in the table name (optional) | 
| nullString | String | string value representing a null value; e.g. NULL (optional) | 
| skipWithErrors | Boolean | `true` to undo any insert in case of errors | 
| skipFileNotInCSV | Boolean | `true` to skip file loading if the same file was not found in the CSV file | 
| beforeInsertActionId | Long | (optional) action id to execute before inserting a csv row: the "vo" js variable will be passed to the action to get access to the row; a return false would skip the row inserting | 
| afterInsertActionId | Long | (optional) action id to execute just after inserting a csv row: the "vo" js variable will be passed to the action to get access to the row | 

> ✅ **Returns**
>
> list of files skipped because of some error


---

## bulkImport

Import all files found in the location identified by sourceDirId and load them into the location identified by destDirId. If backupDirId is not null, input files are also moved (removed from the source folder) to the location identified by backupDirId. If backupDirId is null, input files are simply deleted from the source folder. In the same source location a .csv file could be found: if it exists and the "csvFileName" argument has been specified, then it will be used to read metadata to map for each indexed file. In order to use this csv file, the following conditions must be satisfied: - the first row in the csv file must contain the attribute names to use when loading its content in the table's fields (attributes not found in the datamode/table will be ignored and a warning message will be logged) - one of the csv fields must be related to the corresponding file name; such field must be specified as this method argument The csv file will be deleted after its processing (optionally moved along with the files in the backup destination, if specified)

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sourceDirId | Long | source location for files to import | 
| destDirId | Long | destination location for files to read (to move) | 
| backupDirId | Long | optional parameter: if specified, input files are not only copied to the destination dir but also here, before being deleted from the source location | 
| dataSourceId | Long | data source identified, where the specified "tableName" is defined | 
| tableName | String | table name where files will be indexed (the uuid + destDirId); a datamodel MUST have been defined for such a table | 
| csvFileName | String | file name for the csv to process along with files | 
| csvFileNameField | String | field name in the first row of the csv file, related to file names, which allows to map each row in the csv with the corresponding file | 
| csvUniqueIdField | String | (optional) field name in the first row of the csv file, related to a value which identifies uniquelly a row/file in the file: it will be used when updating files already indexed; if not specified the "csvFileNameField" property will be used instead | 
| csvSep | String | ; or , symbol | 
| defaultValues | Object> | collection of attribute names + default values, to set in case the metadata does not provide a value for these attributes; :XXX variables are supported | 
| mapping | String> |  | 
| nullString | String | string value representing a null value; e.g. NULL (optional) | 
| skipWithErrors | Boolean | `true` to undo any insert in case of errors | 
| skipFileNotInCSV | Boolean | `true` to skip file loading if the same file was not found in the CSV file | 
| beforeInsertActionId | Long | (optional) action id to execute before inserting a csv row: the "vo" js variable will be passed to the action to get access to the row; a return false would skip the row inserting | 
| afterInsertActionId | Long | (optional) action id to execute just after inserting a csv row: the "vo" js variable will be passed to the action to get access to the row | 

> ✅ **Returns**
>
> list of files skipped because of some error


---

## bulkUpdateOnGoogleDatastore

Executes a bulk update on Google Datastore entities matching a GQL query. For each entity returned by the GQL query, updates its attributes with the values specified in `attributesToSet` and removes the attributes specified in `attributesToRemove`. This is useful for mass data migrations or bulk field updates.

Syntax
```javascript
utils.bulkUpdateOnGoogleDatastore(
	gql, //String
	attributesToSet, //Map
	attributesToRemove, //Map
	actionId //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| gql | String | the GQL query selecting entities to update (e.g., `"SELECT FROM MyKind WHERE status = 'PENDING'"`) | 
| attributesToSet | Map | a `Map` of attribute name/value pairs to set on each matching entity; pass `null` or empty map if no attributes need to be set | 
| attributesToRemove | Map | a `Map` of attribute names to remove from each matching entity; the values in this map are ignored; pass `null` or empty map if no attributes need to be removed | 
| actionId | Long | the platform action ID associated with this bulk operation (used for auditing/logging); may be `null` | 

> ⚠️ **Throws**
>
> - `Throwable` if the Datastore API call fails or authentication fails


---

## callGaeAction

Invoke a server-side JavaScript action on a Google App Engine (GAE) instance. The action is executed by sending the current internal state, user info, and value object to the GAE endpoint. Supports both synchronous and asynchronous execution.

Syntax
```javascript
//return String type
var risp = utils.callGaeAction(
	actionId, //Long
	async //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| actionId | Long | the identifier of the server-side JS action to execute on GAE | 
| async | Boolean | if `true`, the request is sent asynchronously in a separate thread and the method immediately returns `{ "success": true `}; if `false`, waits for the GAE response | 

> ✅ **Returns**
>
> a JSON string with the GAE response; when async, returns `{ "success": true `}

> ⚠️ **Throws**
>
> - `Exception` in case of errors (only in synchronous mode)


---

## checkGoogleSSOToken

Verifies a Google SSO (Single Sign-On) ID token and returns the authentication result. Validates the token against the configured Google client ID. If valid, extracts the user email from the token payload and applies the platform's user format pattern to derive the platform username.

Syntax
```javascript
//return String type
var risp = utils.checkGoogleSSOToken(
	ssoAuthToken //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| ssoAuthToken | String | the Google ID token string received from the client-side authentication | 

> ✅ **Returns**
>
> a JSON string representing an `SSOResult` object with fields: `success` (boolean), `username` (String, if successful), `message` (String, error description if unsuccessful), `authType` (String, "GOOGLE" if successful)


---

## classifyText

Classify the provided text into content categories using Google Cloud Natural Language API. Returns a JSON string with a list of content categories and their confidence scores.

Syntax
```javascript
//return String type
var risp = utils.classifyText(
	text, //String
	htmlText //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| text | String | the text content to classify (must be at least 20 words) | 
| htmlText | Boolean | `true` if the text is HTML content, `false` for plain text | 

> ✅ **Returns**
>
> a JSON string containing the text classification result

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## clearAllDatastoreEntities

Clear up the internal cache used to get Datastore entities, for ALL entities.

Syntax
```javascript
utils.clearAllDatastoreEntities();
```


---

## clearCache

Invoke GAE instance and ask for clearing up a list of variable names from the MemCache.

Syntax
```javascript
//return String type
var risp = utils.clearCache(
	varNames, //String
	keys //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| varNames | String | a varName or many variable names separated by a comma (e.g. "MOTPROM,MOTPROM_BANCHES") | 
| keys | String | optional: can be null; a key within or many keys, separated by a comma; if specified, the cached entry related to varName must be a map and such a map inside the cache will not be removed completely, but only the entries related to the specified keys | 


---

## clearCache

Invoke GAE instance and ask for clearing up a list of variable names from the MemCache.

Syntax
```javascript
//return String type
var risp = utils.clearCache(
	varNames //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| varNames | String | a varName or many variable names separated by a comma (e.g. "MOTPROM,MOTPROM_BANCHES") | 


---

## clearDatastoreEntities

Clear up the internal cache used to get a Datastore entity, starting from the specified entity name.

Syntax
```javascript
utils.clearDatastoreEntities(
	entityName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| entityName | String | entity name, expressed in camel case | 


---

## clearRangeGoogleSheet

Clear all values from the specified range in a Google Sheet, leaving formatting intact.

Syntax
```javascript
//return String type
var risp = utils.clearRangeGoogleSheet(
	userId, //String
	spreadsheetId, //String
	range //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the user email for Google Sheets authentication (domain-wide delegation) | 
| spreadsheetId | String | the Google Spreadsheet ID | 
| range | String | the A1 notation range to clear (e.g., "Sheet1!A1:D10") | 

> ✅ **Returns**
>
> a JSON string with the clear operation response

> ⚠️ **Throws**
>
> - `Throwable` in case of Google API errors or authentication failures


---

## closeActivitiTask

Complete (close) an Activiti task by its task instance ID, passing optional process variables.

Syntax
```javascript
//return String type
var risp = utils.closeActivitiTask(
	processInstanceId, //String
	taskDefinitionKey, //String
	assignee, //String
	map //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| processInstanceId | String | the process instance ID | 
| taskDefinitionKey | String | the task definition key identifying the task within the process | 
| assignee | String | the expected task assignee (validated before completion) | 
| map | Map | a `Map` of process variables to set when completing the task; keys are variable names (String), values are variable values (any serializable type) | 

> ✅ **Returns**
>
> a JSON string with the completion result

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## closeActivitiTask

Complete (close) an Activiti task by its task instance ID, passing optional process variables.

Syntax
```javascript
//return String type
var risp = utils.closeActivitiTask(
	taskInstanceId, //String
	map //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| taskInstanceId | String | the task instance ID to complete | 
| map | Map | a `Map` of process variables to set when completing the task; keys are variable names (String), values are variable values (any serializable type) | 

> ✅ **Returns**
>
> a JSON string with the completion result

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## completeActivitiTask

Find and complete the current pending task for a given Activiti process instance. This method performs two REST operations: Retrieves the list of candidate tasks for the current user, filtered by the company-specific process definition key prefix (`SIN + companyId`) Completes the matching task by posting an "action": "complete" request with the supplied process variables Variable names are automatically converted from camelCase to underscore notation.

Syntax
```javascript
//return Map type
var risp = utils.completeActivitiTask(
	processInstanceId, //String
	params, //Map
	processVariables //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| processInstanceId | String | the runtime process instance ID whose pending task should be completed | 
| params | Map | configuration map; may contain keys: _(details below)_ | 
| processVariables | Map | a map of variable names to values to pass when completing the task; string values are escaped for JSON; all values are serialized as strings | 

#### `params`

configuration map; may contain keys:
- `ACTIVITI_BASE_REST_URL` — fallback base URL for the Activiti REST service

> ✅ **Returns**
>
> a Map containing: `success` (Boolean) — `true` if the task was found and completed `msg` (String) — error message or "process instance id not found" when no matching task exists


---

## convertDocxToOtherFormat

Convert a docx file to another format supported by LibreOffice and save it to the file system. File conversion is be carried out through the LibreOffice Portable conv tool (which must be previously installed) LIBREOFFICE_PATH common parameter must have been defined, then convert the document using LibreOffice portable version (which must be available on the server)

Syntax
```javascript
utils.convertDocxToOtherFormat(
	docxFile, //String
	newFile, //String
	deleteDocxFile, //Boolean
	format //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| docxFile | String | source file, in docx format | 
| newFile | String | new file, in the specified format | 
| deleteDocxFile | Boolean | flag used to automatically delete the source file, when the converted file has been created | 
| format | String | output format; supported values should be: pdf, odt, txt, txt:Text, csv, html, html:XHTML | 

> ⚠️ **Throws**
>
> - `Throwable` if conversion fails or if LibreOffice is not configured/available


---

## convertDocxToPdf

Convert a docx file to a pdf file and save it to the file system. File conversion can be carried out in three alternative ways: - if CLOUD_CONVERT_API_KEY common parameter has been defined, then try to use this service to convert from docx to pdf - if LIBREOFFICE_PATH common parameter has been defined, then convert the document using LibreOffice portable version (which must be available on the server) - otherwise, convert using org.apache.poi.hwpf In case no more "minutes" are available with cloud conv web service, then use the second alternative to convert the file.

Syntax
```javascript
utils.convertDocxToPdf(
	docxFile, //String
	pdfFile, //String
	deleteDocxFile //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| docxFile | String | source file, in docx format | 
| pdfFile | String | new file, in pdf format | 
| deleteDocxFile | Boolean | flag used to automatically delete the source file, when the pdf file has been created | 

> ⚠️ **Throws**
>
> - `Throwable` if conversion fails through all available methods


---

## convertHtmlToImage

Read the HTML content and convert it to an image and save the image to the server file system.

Syntax
```javascript
utils.convertHtmlToImage(
	html, //String
	imagePath //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| html | String | HTML content to read | 
| imagePath | String | absolute path + image file name where saving the image; supported format: png | 

> ⚠️ **Throws**
>
> - `Throwable` an exception in case of errors.


---

## convertISO8601

Convert an ISO 8601 duration/period string to a human-readable format.

Syntax
```javascript
//return String type
var risp = utils.convertISO8601(
	period //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| period | String | an ISO 8601 period string (e.g. "P1Y2M3DT4H5M6S") | 

> ✅ **Returns**
>
> the converted string representation

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## convertListWithMapper

Convert a JSON having this format: { valueObjectList: [...], moreRows: true|false } this another JSON string having the same format but different content for the list of objects, which will be converted according to the mapper.

Syntax
```javascript
//return String type
var risp = utils.convertListWithMapper(
	json, //String
	settings //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| json | String | the JSON string to convert | 
| settings | Map | optional settings `Map`; supported keys: _(details below)_ | 

#### `settings`

optional settings `Map`; supported keys:
- `"compId"` (`Number`) — business component ID to use for the mapper definition; if not specified, the current action ID is used
- `"dataStoreId"` (`Number`) — data store ID to use for resolving mapped fields; if not specified, the one from the business component is usedPass `null` to use defaults.


---

## convertObjectWithMapper

Convert a JSON having this format: { attributesOfASingleObject } this another JSON string having the same format but different content for the object, which will be converted according to the mapper.

Syntax
```javascript
//return String type
var risp = utils.convertObjectWithMapper(
	json, //String
	settings //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| json | String | the JSON string to convert | 
| settings | Map | optional settings `Map`; supported keys: _(details below)_ | 

#### `settings`

optional settings `Map`; supported keys:
- `"compId"` (`Number`) — business component ID to use for the mapper definition; if not specified, the current action ID is used
- `"dataStoreId"` (`Number`) — data store ID to use for resolving mapped fields; if not specified, the one from the business component is usedPass `null` to use defaults.


---

## convertPdfToImage

Convert the PDF file stored in the folder identified by pdfDirId to an image, which will be stored in the folder identified by imgDirId, with an image format defined by "imgExtension".

Syntax
```javascript
//return String type
var risp = utils.convertPdfToImage(
	pdfDirId, //Long
	pdfFileName, //String
	imgDirId, //Long
	imgExtension, //String
	scale //Float
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| pdfDirId | Long | folder identifier, where the input PDF file is already stored | 
| pdfFileName | String | PDF file name, stored in the folder identified by pdfDirId | 
| imgDirId | Long | folder identifier, where the image will be saved | 
| imgExtension | String | image format; allowed formats: png | 
| scale | Float | positive number <= 1.0, used to define how much to reduce the PDF; e.g. 0.3; the more is reduced, the smaller the image is | 

> ✅ **Returns**
>
> image name


---

## convertTifToJpg

Convert a TIF image (big image) stored in the folder identified by tifDirId to a jpeg image, which will be stored in the folder identified by jpgDirId, with te specified compression factor.

Syntax
```javascript
utils.convertTifToJpg(
	tifDirId, //Long
	tifFileName, //String
	jpgDirId, //Long
	jpgFileName, //String
	compressionFactor //Float
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| tifDirId | Long | folder identifier, where the input PDF file is already stored | 
| tifFileName | String | PDF file name, stored in the folder identified by pdfDirId | 
| jpgDirId | Long | folder identifier, where the image will be saved | 
| jpgFileName | String | jpeg file name to create | 
| compressionFactor | Float | compression factor to use when saving the jpeg image; e.g. 0.5; allowed values: 0.1-1.0 where 1.0 = 100% (high quality) | 


---

## convertUrlToImage

Read the specified URL and convert the HTML content to an image and save it to the server file system.

Syntax
```javascript
utils.convertUrlToImage(
	url, //String
	imagePath //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| url | String | URL to read, related to HTML content | 
| imagePath | String | absolute path + image file name where saving the image; supported format: png | 

> ⚠️ **Throws**
>
> - `Throwable` exception in case of errors.


---

## copyGoogleCloudStorageObject

Copies an object and its metadata to a new destination within the same region and bucket type. Both source and destination buckets must have the same location and storage class. For cross-region or cross-type copies, use `rewriteGoogleCloudStorageObject` instead. When bucket versioning is enabled, a specific version can be copied.

Syntax
```javascript
//return File type
var risp = utils.copyGoogleCloudStorageObject(
	sourceBucketName, //String
	sourceObjectName, //String
	sourceObjectVersion, //Long
	destinationBucketName, //String
	destinationObjectName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sourceBucketName | String | the name of the bucket containing the source object | 
| sourceObjectName | String | the full path/name of the source object to copy | 
| sourceObjectVersion | Long | the generation number of the specific version to copy; pass `null` to copy the latest (live) version | 
| destinationBucketName | String | the name of the destination bucket | 
| destinationObjectName | String | the full path/name for the copied object in the destination bucket | 

> ✅ **Returns**
>
> a `File` representing the newly created copy

> ⚠️ **Throws**
>
> - `Throwable` if the GCS API call fails, authentication fails, or the source object does not exist


---

## copyGoogleSheet

Copy a sheet from one Google Spreadsheet to another.

Syntax
```javascript
//return String type
var risp = utils.copyGoogleSheet(
	userId, //String
	spreadsheetId, //String
	sheetId, //Integer
	destinationSpreadsheetId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the user email for Google Sheets authentication (domain-wide delegation) | 
| spreadsheetId | String | the source Google Spreadsheet ID | 
| sheetId | Integer | the sheet ID to copy | 
| destinationSpreadsheetId | String | the target Google Spreadsheet ID where the sheet will be copied | 

> ✅ **Returns**
>
> a JSON string with the copied sheet's metadata in the destination spreadsheet

> ⚠️ **Throws**
>
> - `Throwable` in case of Google API errors or authentication failures


---

## createBigQueryDataset

Create a new dataset in Google BigQuery.

Syntax
```javascript
utils.createBigQueryDataset(
	datasetName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| datasetName | String | the name of the dataset to create | 

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## createBigQueryTableFromDatastoreEntities

Export from Datastore the specified list of entities, save them within the GCS bucket identified by the dir id and create corresponding tables on BigQuery.

Syntax
```javascript
utils.createBigQueryTableFromDatastoreEntities(
	entityNames, //String[]
	directoryId, //Long
	datasetName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| entityNames | String[] | list of entities to export | 
| directoryId | Long | identifier for a GCS bucket | 
| datasetName | String | BigQuery dataset where creating tables | 


---

## createBigQueryTable

Create a new table in the specified dataset of Google BigQuery.

Syntax
```javascript
utils.createBigQueryTable(
	datasetName, //String
	tableName, //String
	columns //Map>
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| datasetName | String | the name of the dataset where the table will be created | 
| tableName | String | the name of the table to create | 
| columns | Map> | a list of column definitions; each Map should contain column metadata (e.g. field name, type, mode) | 

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## createConDbForCurrentUser

Create in advance a con.db mobile database for the specified mobile user.

Syntax
```javascript
utils.createConDbForCurrentUser(
	companyId, //String
	siteId, //Long
	username //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| companyId | String |  | 
| siteId | Long |  | 
| username | String | username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. | 


---

## createCsvFromFTPFolders

Create a CSV file and save it with the specified csvFileName in the base dir identified by dirId. The CSV content contains a row for each file found within folders in the specified FTP server. The CSV contains a first line with the list of column names, which are: folderAttributes fileNameAttributes fileName

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dirId | Long | base dir where saving the CSV file | 
| ftpProtocol | String |  | 
| ftpHost | String |  | 
| ftpPort | Integer |  | 
| useSSL | Boolean |  | 
| ftpUsername | String |  | 
| ftpPassword | String |  | 
| ftpBaseDir | String |  | 
| csvFileName | String | CSV file name to create | 
| csvSeparator | String | character to use to separate fields (e.g. "," or ";") | 
| fileNameAttributes | String | the parts composing the file name, separated with each other by "fileNameSeparator" | 
| fileNameSeparator | String | the character to use for separing attributes in the file name (e.g. "_") | 
| folderAttributes | String[] | list of attributes identifying the folders containing a file | 


---

## createCsvFromFolders

Create a CSV file and save it with the specified csvFileName in the base dir identified by destDirId. The CSV content contains a row for each file found within the folder (and subfolder) identified by dirId. The CSV contains a first line with the list of column names, which are: folderAttributes fileNameAttributes fileName

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dirId | Long | base dir where searching for files | 
| destDirId | Long | base dir where saving the CSV foile | 
| csvFileName | String | CSV file name to create | 
| csvSeparator | String | character to use to separate fields (e.g. "," or ";") | 
| fileNameAttributes | String | the parts composing the file name, separated with each other by "fileNameSeparator" | 
| fileNameSeparator | String | the character to use for separing attributes in the file name (e.g. "_") | 
| folderAttributes | String[] | list of attributes identifying the folders containing a file | 


---

## createCsvFromSqlQuery

Extract data starting from the specified SQL query and save it into a CSV file, then upload it in the specified directory in the Google Cloud Storage, with the specified name.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sql | String | SQL query to execute; field names specified in the SELECT clause will be used as column headers in the first row, in case includeHeaders is set to true | 
| dataSourceId | Long | optional data source id to use when executing the SQL query | 
| includeRowNum | Boolean | flag true/false, used to specify a first additional column on the left, related to the line number (1 ,2, 3, 4...) | 
| replaceNullWith | String | optional value to use instead of null, when a value in the SELECT clause is null | 
| fromRow | Long | optional if not specified, starts reading the query content from the first row, otherwise starts from the specified index (1...) | 
| maxRowsToRead | Long | if not specified, read the whole query content (starting from the specified "fromRow"), otherwise read only the specified amount of rows | 
| firstRow | String | first row to add, if not null | 
| sep | String | field separator: , or ; | 
| dirId | Long | directory identifier | 
| fileName | String | CSV file name to store inside the specified directory | 

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## createGoogleCloudStorageBucket

Creates a new bucket in the specified Google Cloud project and location, with an optional storage class. Bucket names must be globally unique across all Google Cloud projects. Once created, the bucket is available for storing objects using the flat namespace model (bucket/object path).

Syntax
```javascript
//return FileContainer type
var risp = utils.createGoogleCloudStorageBucket(
	project, //String
	bucketName, //String
	bucketLocation, //String
	storageClass //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| project | String | the Google Cloud project ID that will own the bucket | 
| bucketName | String | the globally unique name for the new bucket | 
| bucketLocation | String | the geographic location for the bucket; multi-region values: `"US"`, `"EU"`, `"ASIA"`; single regions also supported (e.g., `"us-central1"`). See Bucket Locations | 
| storageClass | String | the storage class for objects in the bucket; valid values: `"STANDARD"`, `"NEARLINE"`, `"DURABLE_REDUCED_AVAILABILITY"`; pass `null` to use the default (`STANDARD`). See Storage Classes | 

> ✅ **Returns**
>
> a `FileContainer` representing the newly created bucket with its metadata

> ⚠️ **Throws**
>
> - `Throwable` if the GCS API call fails, authentication fails, or the bucket name is already taken


---

## createGoogleDriveFolder

Creates a new folder in the current user's Google Drive.

Syntax
```javascript
//return File type
var risp = utils.createGoogleDriveFolder(
	userId, //String
	folderName, //String
	parents, //String>
	description //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate via domain-wide delegation | 
| folderName | String | the name for the new folder | 
| parents | String> | a list of parent folder IDs under which to create the folder; pass `null` or empty to create at the Drive root | 
| description | String | an optional description for the folder; may be `null` | 

> ✅ **Returns**
>
> a `File` representing the newly created folder

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## createGoogleDriveFolder

Creates a new folder in the current user's Google Drive.

Syntax
```javascript
//return File type
var risp = utils.createGoogleDriveFolder(
	folderName, //String
	parents, //String>
	description //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| folderName | String | the name for the new folder | 
| parents | String> | a list of parent folder IDs under which to create the folder; pass `null` or empty to create at the Drive root | 
| description | String | an optional description for the folder; may be `null` | 

> ✅ **Returns**
>
> a `File` representing the newly created folder

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## createGoogleSheets

Add new sheets (tabs) to an existing Google Spreadsheet.

Syntax
```javascript
//return String type
var risp = utils.createGoogleSheets(
	userId, //String
	spreadsheetId, //String
	sheets //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the user email for Google Sheets authentication (domain-wide delegation) | 
| spreadsheetId | String | the Google Spreadsheet ID to add sheets to | 
| sheets | String[] | array of sheet names to create | 

> ✅ **Returns**
>
> a JSON array string with metadata for each created sheet

> ⚠️ **Throws**
>
> - `Throwable` in case of Google API errors or authentication failures


---

## createGoogleSpreadsheets

Create a new Google Spreadsheet with the specified title and sheet names.

Syntax
```javascript
//return String type
var risp = utils.createGoogleSpreadsheets(
	userId, //String
	spreadsheetTitle, //String
	sheets //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the user email for Google Sheets authentication (domain-wide delegation) | 
| spreadsheetTitle | String | the title for the new spreadsheet | 
| sheets | String[] | array of sheet names to create within the spreadsheet | 

> ✅ **Returns**
>
> a JSON string representing the created spreadsheet metadata (including spreadsheetId)

> ⚠️ **Throws**
>
> - `Throwable` in case of Google API errors or authentication failures


---

## createJWT

Create a JWT token, starting from thew shared key and subject.

Syntax
```javascript
//return String type
var risp = utils.createJWT(
	sharedKey, //String
	id, //String
	issuer, //String
	subject, //String
	ttlMillis, //Long
	dataToSend //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sharedKey | String | mandatory: the shared key to use when creating/decoding JWT | 
| id | String |  | 
| issuer | String | optional | 
| subject | String | optional | 
| ttlMillis | Long | optional: expiration for the token, expressed in ms: how many ms to wait before expiring | 
| dataToSend | Map | optional: key-value for attributes to add in jwt token | 


---

## createJWT

Create a JWT token, starting from thew shared key and subject.

Syntax
```javascript
//return String type
var risp = utils.createJWT(
	sharedKey, //String
	id, //String
	issuer, //String
	subject, //String
	ttlMillis //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sharedKey | String | mandatory: the shared key to use when creating/decoding JWT | 
| id | String |  | 
| issuer | String | optional | 
| subject | String | optional | 
| ttlMillis | Long | optional: expiration for the token, expressed in ms: how many ms to wait before expiring | 


---

## createStripeCustomer

Define a customer in Stripe Payments

Syntax
```javascript
//return String type
var risp = utils.createStripeCustomer(
	apiKey, //String
	customerData //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| apiKey | String |  | 
| customerData | Map | optional; can be null; allowed values: name, email, phone, description | 

> ✅ **Returns**
>
> customer id, used in "prepareStripePayment" and "executeStripePayment" methods


---

## createTablesFromDatastoreBackup

Create and populate BigQuery tables from a Datastore backup.

Syntax
```javascript
utils.createTablesFromDatastoreBackup(
	entityNames, //String[]
	gcsURI, //String
	datasetName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| entityNames | String[] | list of entities to export | 
| gcsURI | String | fully-qualified URIs that point to your data in Google Cloud Storage, where data has been exported | 
| datasetName | String | BigQuery dataset where creating tables | 


---

## createXLSXFileFromSQLQuery

Create an XLSX (Excel) file from a SQL query result and save it to the specified output directory. Supports template-based generation, header/column formatting, grouping, and additional settings.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| templateDirectoryId | Long | the directory ID containing the Excel template file; can be `null` if no template is used | 
| templateFileName | String | the template file name; can be `null` if no template is used | 
| sheetName | String | the name of the sheet to write data into | 
| outDirectoryId | Long | the directory ID where the output file will be saved | 
| outFileName | String | the name of the output XLSX file | 
| formatHeaderColumns | Map[] | optional array of Maps defining header column formatting (font, color, alignment, etc.) | 
| formatColumns | Map[] | optional array of Maps defining data column formatting | 
| grouping | Map | optional Map defining row grouping/subtotal settings | 
| additionalSettings | Map | optional Map with additional export settings | 
| datastoreId | Long | the data source ID to use when executing the SQL query; can be `null` for default | 
| sqlQuery | String | the SQL query to execute | 
| pars | Object[] | optional bind parameters for the query | 

> ✅ **Returns**
>
> the number of rows exported

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## createXlsContent

Create (or overwrite) and xls file, to save in the specified path and fill it with the specified content.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dirId | Long | path identifier | 
| fileName | String | name of the xls file | 
| sheetName | String | name of sheet in xls, xlsx or Google Spreadsheet file | 
| sheetIndex | Integer |  | 
| fromRow | Integer | the content will be read starting from the specified row index (the first row has index 0) @parsm attributeNames, list of attributes, assigned to each column, starting from leftmost column to the right | 
| vos | Object>[] |  | 
| attributeNames | String[] |  | 


---

## decodeJWT

Decodes a JWT (JSON Web Token) string and returns its standard claims as a JSON string. This is a convenience overload that extracts only the standard claims (id, issuer, subject, expiration) without any additional custom attributes.

Syntax
```javascript
//return String type
var risp = utils.decodeJWT(
	sharedKey, //String
	jwt, //String
	attributes //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sharedKey | String | the Base64-encoded shared secret key used to verify the JWT signature | 
| jwt | String | the compact serialized JWT string to decode | 
| attributes | String[] | optional array of custom claim names to extract from the token; pass `null` or empty array to extract only standard claims | 

> ✅ **Returns**
>
> a JSON string containing the decoded claims: `id`, `issuer`, `subject`, `exp` (formatted as "yyyy-MM-dd HH:mm:ss")

> ⚠️ **Throws**
>
> - `Throwable` if the JWT signature verification or parsing fails


---

## decodeJWT

Decodes a JWT (JSON Web Token) string and returns its standard claims as a JSON string. This is a convenience overload that extracts only the standard claims (id, issuer, subject, expiration) without any additional custom attributes.

Syntax
```javascript
//return String type
var risp = utils.decodeJWT(
	sharedKey, //String
	jwt //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sharedKey | String | the Base64-encoded shared secret key used to verify the JWT signature | 
| jwt | String | the compact serialized JWT string to decode | 

> ✅ **Returns**
>
> a JSON string containing the decoded claims: `id`, `issuer`, `subject`, `exp` (formatted as "yyyy-MM-dd HH:mm:ss")

> ⚠️ **Throws**
>
> - `Throwable` if the JWT signature verification or parsing fails


---

## decrValueFromRedis

Atomically decrements the integer value stored at the specified Redis key by one. If the key does not exist, it is initialized to 0 before performing the decrement.

Syntax
```javascript
//return long type
var risp = utils.decrValueFromRedis(
	key //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| key | String | the Redis key whose value to decrement | 

> ✅ **Returns**
>
> the new value after the decrement

> ⚠️ **Throws**
>
> - `Throwable` if the Redis operation fails


---

## deleteAllGoogleCalendarEventWithSettings

Deletes all events from the specified Google Calendar. Removes every event in the target calendar. Use with caution as this operation is irreversible.

Syntax
```javascript
utils.deleteAllGoogleCalendarEventWithSettings(
	serviceAccountEmail, //String
	privateKeyString, //String
	userId, //String
	calendarId, //String
	fromDate //Date
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| serviceAccountEmail | String | the Google service account email for authentication; if `null`, falls back to the platform default | 
| privateKeyString | String | the PEM-encoded private key; if `null`, falls back to the platform default | 
| userId | String | the Google user email to impersonate; if `null`, uses the current user's email | 
| calendarId | String | the target calendar ID from which to delete all events | 
| fromDate | Date | the minimum date from which events will be deleted (inclusive) | 

> ⚠️ **Throws**
>
> - `Throwable` if the Google Calendar API call fails
- `Exception` if `userId` (after fallback) is null or empty


---

## deleteAllGoogleCalendarEventWithSettings

Deletes all events from the specified Google Calendar. Removes every event in the target calendar. Use with caution as this operation is irreversible.

Syntax
```javascript
utils.deleteAllGoogleCalendarEventWithSettings(
	serviceAccountEmail, //String
	privateKeyString, //String
	userId, //String
	calendarId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| serviceAccountEmail | String | the Google service account email for authentication; if `null`, falls back to the platform default | 
| privateKeyString | String | the PEM-encoded private key; if `null`, falls back to the platform default | 
| userId | String | the Google user email to impersonate; if `null`, uses the current user's email | 
| calendarId | String | the target calendar ID from which to delete all events | 

> ⚠️ **Throws**
>
> - `Throwable` if the Google Calendar API call fails
- `Exception` if `userId` (after fallback) is null or empty


---

## deleteBigQueryDataset

Delete an existing dataset from Google BigQuery.

Syntax
```javascript
utils.deleteBigQueryDataset(
	datasetName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| datasetName | String | the name of the dataset to delete | 

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## deleteBigQueryObject

Delete a single object from a BigQuery table by constructing a DELETE DML statement using the provided Map values for the specified primary key columns. Map keys are converted from camelCase to UPPER_SNAKE_CASE column names.

Syntax
```javascript
//return Long type
var risp = utils.deleteBigQueryObject(
	datasetName, //String
	tableName, //String
	obj, //Map
	pks //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| datasetName | String | the BigQuery dataset name | 
| tableName | String | the name of the table to delete from | 
| obj | Map | a Map containing at least the primary key field values needed to identify the record to delete | 
| pks | String[] | varargs list of primary key column names (in UPPER_SNAKE_CASE) used to build the WHERE clause | 

> ✅ **Returns**
>
> the number of rows deleted

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## deleteBigQueryTable

Delete an existing table from the specified dataset in Google BigQuery.

Syntax
```javascript
utils.deleteBigQueryTable(
	datasetName, //String
	tableName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| datasetName | String | the name of the dataset containing the table | 
| tableName | String | the name of the table to delete | 

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## deleteCard

Delete a card from Archiflow.

Syntax
```javascript
//return Map type
var risp = utils.deleteCard(
	dataModelId, //Long
	panelId, //Long
	vo //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dataModelId | Long | the data model identifier defining the card structure | 
| panelId | Long | the panel identifier used for field resolution | 
| vo | Map | a Map representing the card to delete (must contain the card identifier) | 

> ✅ **Returns**
>
> a Map representing the deleted card

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## deleteCards

Delete multiple cards from Archiflow in a single operation.

Syntax
```javascript
//return Map[] type
var risp = utils.deleteCards(
	dataModelId, //Long
	panelId, //Long
	vos //Map[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dataModelId | Long | the data model identifier defining the card structure | 
| panelId | Long | the panel identifier used for field resolution | 
| vos | Map[] | an array of Maps, each representing a card to delete (must contain card identifiers) | 

> ✅ **Returns**
>
> an array of Maps representing the deleted cards

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## deleteDir

Delete a sub-folder and all its contents within the specified base directory. The sub-folder and all files/directories inside it are removed recursively.

Syntax
```javascript
//return Boolean type
var risp = utils.deleteDir(
	dirId, //Long
	subFolder //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dirId | Long | base directory identifier | 
| subFolder | String | relative sub-folder path to delete; must not be null or empty | 

> ✅ **Returns**
>
> `Boolean.TRUE` upon completion, or `false` if subFolder is null/empty

> ⚠️ **Throws**
>
> - `Throwable` in case of directory resolution or I/O errors


---

## deleteFileFromCMS

Remove a single file from the embedded CMS.

Syntax
```javascript
utils.deleteFileFromCMS(
	uuid //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| uuid | String | file identifier | 


---

## deleteFiles

Delete files in the specified directory matching the given criteria. Empty directories are NOT removed.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dirId | Long | directory identifier to search in | 
| subFolder | Boolean | if `true`, search and delete recursively into sub-folders | 
| operator | String | filter operator for file name matching: `"startsWith"`, `"endsWith"`, `"equals"`, or `null`/empty to delete all files | 
| fileName | String | the file name pattern to match against (used with the operator) | 
| caseSensitive | Boolean | if `true`, file name matching is case-sensitive | 
| removeEmptyDir | Boolean | if `true`, also remove directories that become empty after file deletion | 

> ✅ **Returns**
>
> `Boolean.TRUE` upon completion

> ⚠️ **Throws**
>
> - `Throwable` in case of directory resolution or I/O errors


---

## deleteFiles

Delete files in the specified directory matching the given criteria. Empty directories are NOT removed.

Syntax
```javascript
//return Boolean type
var risp = utils.deleteFiles(
	dirId, //Long
	subFolder, //Boolean
	operator, //String
	fileName, //String
	caseSensitive //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dirId | Long | directory identifier to search in | 
| subFolder | Boolean | if `true`, search and delete recursively into sub-folders | 
| operator | String | filter operator for file name matching: `"startsWith"`, `"endsWith"`, `"equals"`, or `null`/empty to delete all files | 
| fileName | String | the file name pattern to match against (used with the operator) | 
| caseSensitive | Boolean | if `true`, file name matching is case-sensitive | 

> ✅ **Returns**
>
> `Boolean.TRUE` upon completion

> ⚠️ **Throws**
>
> - `Throwable` in case of directory resolution or I/O errors


---

## deleteGoogleCalendarEventWithSettings

Deletes an event from the user's primary Google Calendar with explicit credentials. The calendar used is the user's primary calendar (identified by `userId`).

Syntax
```javascript
utils.deleteGoogleCalendarEventWithSettings(
	serviceAccountEmail, //String
	privateKeyString, //String
	userId, //String
	calendarId, //String
	calendarEventId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| serviceAccountEmail | String | the Google service account email for authentication; if `null`, falls back to the platform default | 
| privateKeyString | String | the PEM-encoded private key; if `null`, falls back to the platform default | 
| userId | String | the Google user email to impersonate; if `null`, uses the current user's email | 
| calendarId | String | the target calendar ID from which to delete the event | 
| calendarEventId | String | the Google Calendar event ID to delete | 

> ⚠️ **Throws**
>
> - `Throwable` if the Google Calendar API call fails
- `Exception` if `userId` (after fallback) is null or empty


---

## deleteGoogleCalendarEventWithSettings

Deletes an event from the user's primary Google Calendar with explicit credentials. The calendar used is the user's primary calendar (identified by `userId`).

Syntax
```javascript
utils.deleteGoogleCalendarEventWithSettings(
	serviceAccountEmail, //String
	privateKeyString, //String
	userId, //String
	calendarEventId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| serviceAccountEmail | String | the Google service account email for authentication; if `null`, falls back to the platform default | 
| privateKeyString | String | the PEM-encoded private key; if `null`, falls back to the platform default | 
| userId | String | the Google user email to impersonate; if `null`, uses the current user's email | 
| calendarEventId | String | the Google Calendar event ID to delete | 

> ⚠️ **Throws**
>
> - `Throwable` if the Google Calendar API call fails
- `Exception` if `userId` (after fallback) is null or empty


---

## deleteGoogleCalendarEvent

Deletes an event from the user's primary Google Calendar using platform-default credentials.

Syntax
```javascript
utils.deleteGoogleCalendarEvent(
	calendarEventId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| calendarEventId | String | the Google Calendar event ID to delete | 

> ⚠️ **Throws**
>
> - `Throwable` if the Google Calendar API call fails
- `Exception` if the user email is null or empty


---

## deleteGoogleCloudStorageBucket

Deletes a Google Cloud Storage bucket. The bucket must be empty before it can be deleted.

Syntax
```javascript
//return FileContainer type
var risp = utils.deleteGoogleCloudStorageBucket(
	bucketName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| bucketName | String | the name of the GCS bucket to delete | 

> ✅ **Returns**
>
> a `FileContainer` representing the deleted bucket metadata

> ⚠️ **Throws**
>
> - `Throwable` if the Google Cloud Storage API call fails or authentication fails


---

## deleteGoogleCloudStorageObject

Deletes an object and its metadata from a Google Cloud Storage bucket.

Syntax
```javascript
//return File type
var risp = utils.deleteGoogleCloudStorageObject(
	bucketName, //String
	objectName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| bucketName | String | the name of the GCS bucket containing the object | 
| objectName | String | the name (path) of the object to delete within the bucket | 

> ✅ **Returns**
>
> a `File` representing the deleted object metadata

> ⚠️ **Throws**
>
> - `Throwable` if the Google Cloud Storage API call fails or authentication fails


---

## deleteGoogleContact

Deletes a Google Contact from the user's personal or domain shared contact list.

Syntax
```javascript
utils.deleteGoogleContact(
	contactId, //String
	shared //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| contactId | String | the unique identifier of the contact to delete | 
| shared | Boolean | if `true`, deletes from the domain shared list; if `false` or `null`, deletes from the user's personal list | 

> ⚠️ **Throws**
>
> - `Throwable` if the Google Contacts API call fails or authentication fails
- `Exception` if the current user's email is `null` or empty


---

## deleteGoogleDriveFileProperty

Deletes a custom property from a Google Drive file or folder, operating as the current user.

Syntax
```javascript
utils.deleteGoogleDriveFileProperty(
	userId, //String
	fileId, //String
	key //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate via domain-wide delegation | 
| fileId | String | the Google Drive file or folder ID | 
| key | String | the property name (key) to delete | 

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## deleteGoogleDriveFileProperty

Deletes a custom property from a Google Drive file or folder, operating as the current user.

Syntax
```javascript
utils.deleteGoogleDriveFileProperty(
	fileId, //String
	key //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileId | String | the Google Drive file or folder ID | 
| key | String | the property name (key) to delete | 

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## deleteGoogleDriveFile

Deletes a file or folder from the current user's Google Drive.

Syntax
```javascript
//return File type
var risp = utils.deleteGoogleDriveFile(
	fileId, //String
	skipTrash //boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileId | String | the Google Drive file or folder ID to delete | 
| skipTrash | boolean | if `true`, permanently deletes the file (bypasses trash); if `false`, moves the file to trash (recoverable) | 

> ✅ **Returns**
>
> a `File` representing the deleted file metadata

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## deleteGoogleDriveFile

Deletes a file or folder from the current user's Google Drive.

Syntax
```javascript
//return File type
var risp = utils.deleteGoogleDriveFile(
	userId, //String
	fileId, //String
	skipTrash //boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate via domain-wide delegation | 
| fileId | String | the Google Drive file or folder ID to delete | 
| skipTrash | boolean | if `true`, permanently deletes the file (bypasses trash); if `false`, moves the file to trash (recoverable) | 

> ✅ **Returns**
>
> a `File` representing the deleted file metadata

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## deleteGoogleSheets

Delete sheets (tabs) from an existing Google Spreadsheet by their sheet IDs.

Syntax
```javascript
//return String type
var risp = utils.deleteGoogleSheets(
	userId, //String
	spreadsheetId, //String
	sheetIds //Integer[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the user email for Google Sheets authentication (domain-wide delegation) | 
| spreadsheetId | String | the Google Spreadsheet ID | 
| sheetIds | Integer[] | array of sheet IDs (numeric identifiers) to delete | 

> ✅ **Returns**
>
> a JSON string with the batch update response

> ⚠️ **Throws**
>
> - `Throwable` in case of Google API errors or authentication failures


---

## deleteObjectOnBigQuery

Deletes a single record from a Google BigQuery table. The object must contain at least the primary key fields to identify the record. Values are automatically converted to match BigQuery column types.

Syntax
```javascript
//return boolean type
var risp = utils.deleteObjectOnBigQuery(
	obj, //Map
	dataModelId, //Long
	interruptExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| obj | Map | a `Map` representing the record to delete; keys are attribute names, values are field values; must include PK attribute(s) | 
| dataModelId | Long | the platform data model ID that defines the BigQuery table structure | 
| interruptExecution | Boolean | if `true`, exceptions are propagated to the caller; if `false`, errors are logged and the method returns `false` | 

> ✅ **Returns**
>
> `true` if the delete was successful, `false` if an error occurred and `interruptExecution` is `false`

> ⚠️ **Throws**
>
> - `Throwable` if the delete fails and `interruptExecution` is `true`


---

## deleteObjectOnGoogleDatastore

Deletes a single entity from Google Datastore. The entity is identified by its primary key (PK) attribute included in the `obj` map. After a successful delete, both the partial result cache and entity cache for this Kind are automatically cleared.

Syntax
```javascript
//return boolean type
var risp = utils.deleteObjectOnGoogleDatastore(
	obj, //Map
	dataModelId, //Long
	interruptExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| obj | Map | a `Map` representing the entity to delete; keys are attribute names (camelCase as defined in the data model), values are the corresponding field values; must include primary key attribute(s) to identify the entity | 
| dataModelId | Long | the platform data model ID that defines the entity structure | 
| interruptExecution | Boolean | if `true`, exceptions are re-thrown; if `false`, errors are logged and the method returns `false` | 

> ✅ **Returns**
>
> `true` if the delete succeeded, `false` if it failed and `interruptExecution` is `false`

> ⚠️ **Throws**
>
> - `Throwable` if the delete fails and `interruptExecution` is `true`


---

## deleteObjectOnGoogleSpanner

Deletes a single record from a Google Cloud Spanner table. The object must contain at least the primary key fields to identify the record to delete.

Syntax
```javascript
//return boolean type
var risp = utils.deleteObjectOnGoogleSpanner(
	obj, //Map
	dataModelId, //Long
	interruptExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| obj | Map | a `Map` representing the record to delete; keys are attribute names (camelCase as defined in the data model), values are the field values; must include primary key attribute(s) | 
| dataModelId | Long | the platform data model ID that defines the table structure and field mappings | 
| interruptExecution | Boolean | if `true`, exceptions are propagated to the caller; if `false`, errors are logged and the method returns `false` | 

> ✅ **Returns**
>
> `true` if the delete was successful, `false` if an error occurred and `interruptExecution` is `false`

> ⚠️ **Throws**
>
> - `Throwable` if the delete fails and `interruptExecution` is `true`


---

## deleteObjectOnMongoDb

Deletes a single document from a MongoDB collection. The target collection is determined by the specified data model. The document to delete is identified by its primary key fields (as defined in the data model). The provided Map must contain the primary key field(s) whose values will be used to locate and delete the document.

Syntax
```javascript
//return boolean type
var risp = utils.deleteObjectOnMongoDb(
	obj, //Map
	dataModelId, //Long
	interruptExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| obj | Map | a `Map` containing at minimum the primary key attribute name/value pairs for identifying the document to delete (camelCase attribute names) | 
| dataModelId | Long | the platform data model ID that defines the MongoDB collection and document structure | 
| interruptExecution | Boolean | if `true`, exceptions are re-thrown to the caller; if `false`, errors are logged and `true` is still returned | 

> ✅ **Returns**
>
> `true` always (if no exception is thrown)

> ⚠️ **Throws**
>
> - `Throwable` if the delete fails and `interruptExecution` is `true`


---

## deleteProcessInstance

Delete a process instance from the Activiti BPM engine.

Syntax
```javascript
utils.deleteProcessInstance(
	processInstanceId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| processInstanceId | String | the ID of the process instance to delete | 

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## deleteValueFromRedis

Deletes a value from Redis by key.

Syntax
```javascript
utils.deleteValueFromRedis(
	key //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| key | String | the Redis key to remove | 

> ⚠️ **Throws**
>
> - `Throwable` if the Redis operation fails


---

## downloadArchiflowDocument

Download a document from an Archiflow card and save it to a platform directory. The document content is retrieved as Base64, decoded, and then uploaded to the target directory.

Syntax
```javascript
//return Map type
var risp = utils.downloadArchiflowDocument(
	dirId, //Long
	fileName, //String
	cardId, //String
	additionalSettings //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dirId | Long | the platform directory ID where the file will be saved | 
| fileName | String | the target file name for the downloaded document | 
| cardId | String | the Archiflow card ID whose document will be downloaded | 
| additionalSettings | Map | optional Map with extra settings for the download | 

> ✅ **Returns**
>
> a Map containing the document metadata, including a "Content" key with the Base64-encoded file content

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## downloadFileFromGoogleDrive

Downloads a file from Google Drive and saves it to the server's local file system. If a file already exists at the target path, it is overwritten.

Syntax
```javascript
utils.downloadFileFromGoogleDrive(
	userId, //String
	fileId, //String
	localPath, //String
	fileName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate via domain-wide delegation | 
| fileId | String | the Google Drive file ID to download | 
| localPath | String | the absolute directory path on the server where the file will be saved (must end with a path separator) | 
| fileName | String | the file name to use when saving locally | 

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails, authentication fails, or the file cannot be written to the local file system


---

## downloadGoogleCloudStorageObject

Downloads an object from Google Cloud Storage and saves it to the server's local file system. Retrieves the object's binary content as a stream and writes it to the specified destination path. If a file already exists at that path, it is overwritten.

Syntax
```javascript
utils.downloadGoogleCloudStorageObject(
	bucketName, //String
	objectName, //String
	destPath //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| bucketName | String | the name of the bucket containing the object | 
| objectName | String | the full path/name of the object to download within the bucket | 
| destPath | String | the absolute file path (including file name) on the server where the object will be saved | 

> ⚠️ **Throws**
>
> - `Throwable` if the GCS API call fails, authentication fails, the object does not exist, or the file cannot be written to the local file system


---

## duplicateGoogleDriveFile

Duplicates a single file in Google Drive and copies it to a destination folder with a new name. The destination folder must already exist. Permissions can optionally be copied from the source file to the duplicate.

Syntax
```javascript
//return File type
var risp = utils.duplicateGoogleDriveFile(
	userId, //String
	sourceFileId, //String
	destinationFolderId, //String
	newFileName, //String
	copyPermissions //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate via domain-wide delegation | 
| sourceFileId | String | the Google Drive file ID to duplicate | 
| destinationFolderId | String | the folder ID where the copy will be placed | 
| newFileName | String | the name for the duplicated file | 
| copyPermissions | Boolean | if `true`, copies permissions from the source file to the duplicate | 

> ✅ **Returns**
>
> a `File` representing the duplicated file

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## duplicateGoogleDriveFolderAndContents

Duplicates a folder and all its contents in the current user's Google Drive. Creates a new folder named `newFolderName` under `destinationFolderId`, then recursively copies all files and subfolders from the source folder. An optional title prefix is prepended to every duplicated resource name.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sourceFolderId | String | the Google Drive folder ID to duplicate | 
| newFolderName | String | the name for the new (duplicated) folder | 
| newFolderDescription | String | the description for the new folder; may be `null` | 
| destinationFolderId | String | the folder ID where the new folder will be created; can be `"root"` for the Drive root | 
| titlePrefix | String | a prefix to prepend to the title of every duplicated resource; pass `null` or empty to skip | 
| copyPermissions | Boolean | if `true`, copies permissions from source to duplicated resources | 

> ✅ **Returns**
>
> a `File` representing the newly created root folder

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## duplicateGoogleDriveFolderAndContents

Duplicates a folder and all its contents in the current user's Google Drive. Creates a new folder named `newFolderName` under `destinationFolderId`, then recursively copies all files and subfolders from the source folder. An optional title prefix is prepended to every duplicated resource name.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate via domain-wide delegation | 
| sourceFolderId | String | the Google Drive folder ID to duplicate | 
| newFolderName | String | the name for the new (duplicated) folder | 
| newFolderDescription | String | the description for the new folder; may be `null` | 
| destinationFolderId | String | the folder ID where the new folder will be created; can be `"root"` for the Drive root | 
| titlePrefix | String | a prefix to prepend to the title of every duplicated resource; pass `null` or empty to skip | 
| copyPermissions | Boolean | if `true`, copies permissions from source to duplicated resources | 

> ✅ **Returns**
>
> a `File` representing the newly created root folder

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## duplicateGoogleSheet

Duplicate a sheet within the same Google Spreadsheet.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the user email for Google Sheets authentication (domain-wide delegation) | 
| spreadsheetId | String | the Google Spreadsheet ID | 
| sourceSheetId | Integer | the sheet ID of the source sheet to duplicate | 
| insertSheetIndex | Integer | the zero-based index where the new sheet should be inserted | 
| newSheetId | Integer | the desired sheet ID for the new sheet (or null for auto-assign) | 
| newSheetName | String | the name for the duplicated sheet | 

> ✅ **Returns**
>
> a JSON string with the duplicated sheet's metadata

> ⚠️ **Throws**
>
> - `Throwable` in case of Google API errors or authentication failures


---

## encodeJWT

Encodes a map of claims into a JWT (JSON Web Token) string using the RS512 algorithm with HMAC signing. Each entry in the provided map is added as a custom claim to the JWT. The token is automatically assigned an issue time and a unique JWT ID (UUID). No expiration is set.

Syntax
```javascript
//return String type
var risp = utils.encodeJWT(
	dataToSend, //Map
	sharedKey //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dataToSend | Map | a `Map` of custom claims to embed in the JWT token; keys are `String` claim names, values are the corresponding claim values (any serializable object supported by the JWT library) | 
| sharedKey | String | the shared secret key used for HMAC signing of the token | 

> ✅ **Returns**
>
> the compact serialized JWT string

> ⚠️ **Throws**
>
> - `Throwable` if signing or serialization fails


---

## enqueueGaeAction

Add a server-side JS action as a process to a specific queue.

Syntax
```javascript
//return String type
var risp = utils.enqueueGaeAction(
	queueName, //String
	actionId, //Long
	params //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| queueName | String | optional: queue name; if not specified, the process will be enqueued in the DEFAULT queue | 
| actionId | Long | server-side JS action id | 
| params | Map | a `Map` of parameters passed to the action as the "vo" argument; keys are parameter names (String), values are parameter values; if it contains an entry with key `"queueTimeout"`, its value (in minutes) will be used to force termination of the action after that time | 

> ✅ **Returns**
>
> null in case of errors, the queue's element identifier within the queue


---

## enqueueMessageOnPubSub

Publish a message on a Google Cloud Pub/Sub topic. This method is only available in Platform for GAE and always throws `UnsupportedOperationException` in this implementation.

Syntax
```javascript
//return String type
var risp = utils.enqueueMessageOnPubSub(
	topic, //String
	region, //String
	message, //String
	orderingKey //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| topic | String | the Pub/Sub topic name | 
| region | String | the GCP region for the topic | 
| message | String | the message payload to publish | 
| orderingKey | String | optional ordering key for message ordering | 

> ✅ **Returns**
>
> the published message ID

> ⚠️ **Throws**
>
> - `Throwable` always throws `UnsupportedOperationException`


---

## enquiryTasks

Query Activiti tasks based on the provided filter parameters.

Syntax
```javascript
//return String type
var risp = utils.enquiryTasks(
	pars //HashMap
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| pars | HashMap | a `Map` of filter parameters for the task query; supported keys: _(details below)_ | 

#### `pars`

a `Map` of filter parameters for the task query; supported keys:
- `"assignee"` (String) — filter by task assignee username
- `"candidateUser"` (String) — filter by candidate user
- `"processInstanceId"` (String) — filter by process instance ID
- `"taskDefinitionKey"` (String) — filter by task definition key
- `"processDefinitionKey"` (String) — filter by process definition key

> ✅ **Returns**
>
> a JSON string containing the matching tasks in the format `{ valueObjectList: [...], moreRows: true|false `}

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## executeActionSameTransaction

Execute synchronously a server-side JS action. The same SQL transaction is used for this action.

Syntax
```javascript
//return String type
var risp = utils.executeActionSameTransaction(
	actionId, //Long
	vo, //Map
	params, //Map
	headers //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| actionId | Long | server-side JS action id | 
| vo | Map | a `Map` of input values passed to the action as the "vo" argument; keys are attribute names, values are the corresponding data | 
| params | Map | a `Map` of additional parameters passed to the action; keys are parameter names, values are parameter values | 
| headers | Map | a `Map` of HTTP headers to forward to the action execution context; keys are header names (String), values are header values (String); can be `null` (an empty map is used internally) | 

> ✅ **Returns**
>
> JSON response, returned by the invoked action


---

## executeAction

Execute synchronously a server-side JS action. A new SQL transaction is created for this action.

Syntax
```javascript
//return String type
var risp = utils.executeAction(
	actionId, //Long
	vo, //Map
	params, //Map
	headers //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| actionId | Long | server-side JS action id | 
| vo | Map | a `Map` of input values passed to the action as the "vo" argument; keys are attribute names, values are the corresponding data | 
| params | Map | a `Map` of additional parameters passed to the action; keys are parameter names, values are parameter values | 
| headers | Map | a `Map` of HTTP headers to forward to the action execution context; keys are header names (String), values are header values (String) | 

> ✅ **Returns**
>
> JSON response, returned by the invoked action


---

## executeAllExports

Execute all exports, in the order specified by exportOrder field.

Syntax
```javascript
//return long type
var risp = utils.executeAllExports(
	queryType, //String
	paramValues //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| queryType | String | can be null: if set to null, the main query will be used, otherwise, it can be the initial query ("I" value) | 
| paramValues | Map | optional `Map` of parameter values required by the export definitions; keys are parameter names (String), values are the corresponding values; these are merged with session variables and used as bind variables in the export queries | 

> ✅ **Returns**
>
> total number of exported records


---

## executeBigQueryDmlStatement

Execute a DML (Data Manipulation Language) statement on Google BigQuery. Supports INSERT, UPDATE, DELETE, and MERGE statements.

Syntax
```javascript
//return Long type
var risp = utils.executeBigQueryDmlStatement(
	datasetName, //String
	sql, //String
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| datasetName | String | the BigQuery dataset name for the operation | 
| sql | String | the DML SQL statement to execute | 
| pars | Object[] | bind parameters for the SQL statement | 

> ✅ **Returns**
>
> the number of rows affected by the DML statement

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## executeBigQuerySaveOnLocalTable

Execute a SQL query on Google BigQuery and save the result set into a local database table.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| datastoreId | Long | the local data source identifier where the result will be stored | 
| localTableName | String | the local table name where data will be inserted | 
| defaultFieldNames | Map | a Map of default field name mappings (BigQuery column to local column) | 
| csvFields | Map[] | an array of Maps defining CSV field mappings for the import; each Map may contain field metadata such as name, type, format | 
| defaultDataset | String | the default BigQuery dataset for unqualified table references in the query | 
| sqlQuery | String | the SQL query to execute on BigQuery | 
| params | Object[] | optional bind parameters for the query | 

> ✅ **Returns**
>
> the number of rows saved to the local table

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## executeBigQuerySaveOnTable

Execute the specified SQL query on Google BigQuery and save the result into a new BigQuery table, created automatically in the destination dataset.

Syntax
```javascript
utils.executeBigQuerySaveOnTable(
	destinationDataset, //String
	destinationTable, //String
	defaultDataset, //String
	sqlQuery, //String
	params //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| destinationDataset | String | the dataset where the destination table will be created | 
| destinationTable | String | the name of the destination table to store query results | 
| defaultDataset | String | the default dataset for unqualified table references in the query | 
| sqlQuery | String | the SQL query to execute on BigQuery | 
| params | Object[] | optional bind parameters for the query | 

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## executeBigQueryWithCallback

Execute the specified SQL query on Google BigQuery and process each result row via a callback function. Each row is passed to the callback as a JSON-serialized list of values.

Syntax
```javascript
function processRowFunName(data) {
	
}

utils.executeBigQueryWithCallback(
	processRowFunName, //String
	defaultDataset, //String
	sqlQuery, //String
	params //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| processRowFunName | String | the name of a JavaScript function to invoke for each result row; the function receives a JSON array string representing the row values | 
| defaultDataset | String | the default dataset to use for unqualified table references in the query | 
| sqlQuery | String | the SQL query to execute on BigQuery | 
| params | Object[] | optional bind parameters for the query | 

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## executeBigQueryWithObjectCallback

Execute the specified SQL query on Google BigQuery and process each result row via a callback function. Each row is passed to the callback as a JSON-serialized Map (object with named fields).

Syntax
```javascript
function processRowFunName(data) {
	
}

utils.executeBigQueryWithObjectCallback(
	processRowFunName, //String
	defaultDataset, //String
	sqlQuery, //String
	params //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| processRowFunName | String | the name of a JavaScript function to invoke for each result row; the function receives a JSON object string representing the row as key-value pairs | 
| defaultDataset | String | the default dataset to use for unqualified table references in the query | 
| sqlQuery | String | the SQL query to execute on BigQuery | 
| params | Object[] | optional bind parameters for the query | 

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## executeCachedQueryOnGoogleDatastoreWithSetting

Executes a GQL query on Google Datastore with result caching and join-like settings. Results are cached in memory up to `maxCachedEntities` entries. The cache can be cleared using `clearDatastoreEntities`. The `settings` parameter supports two join-emulation modes: **secondaryObjects** — inject a cached secondary entity into a specified attribute: `{ secondaryObjects: [ { name: "...", // attribute name in main object for injected secondary object objectName: "...", // secondary entity Kind (alternative: use dataModelId) dataModelId: "...", // data model ID identifying the secondary entity fkName: "...", // FK attribute name in main object linking to secondary entity compositeFkName: [{value:"..."`, {variable:"..."},...], // composite FK parts where: "...", // optional: manual WHERE clause with :XXX bind vars longResultSet: true|false // optional: true if secondary result is too large to cache entirely } ] } } **secondaryAttributes** — inject multiple attributes from a cached secondary entity: `{ secondaryAttributes: [ { mapping: { "mainAttr1": "secondaryAttr1", "mainAttr2": "secondaryAttr2" `, objectName: "...", dataModelId: "...", fkName: "...", compositeFkName: [...], where: "...", longResultSet: true|false } ] } }

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| maxCachedEntities | int | maximum number of distinct query results to cache; set to 0 to disable caching | 
| sql | String | the GQL query to execute (e.g., `"SELECT FROM MyKind WHERE field = ?1"`) | 
| dataModelId | Long | the platform data model ID that defines the entity structure (Kind, fields, types) | 
| interruptExecution | Boolean | if `true`, exceptions are re-thrown to the caller; if `false`, errors are logged and `null` may be returned | 
| settings | Map | a `Map` with join-emulation settings (see above); pass `null` for no joins | 
| pars | Object[] | bind variable values for placeholders in the GQL query (`?1`, `?2`, etc.) | 

> ✅ **Returns**
>
> a JSON string with structure `{ valueObjectList: [...], moreRows: true|false `}, or the cached result if available; `null` if execution fails and `interruptExecution` is `false`

> ⚠️ **Throws**
>
> - `Throwable` if the query fails and `interruptExecution` is `true`


---

## executeCachedQueryOnGoogleDatastore

Executes a GQL query on Google Datastore with result caching. Results are cached in memory up to `maxCachedEntities` entries, keyed by the GQL query and its bind parameters. Subsequent calls with the same query and parameters will return the cached result without hitting Datastore. The cache can be cleared using `clearDatastoreEntities`. Delegates to `String, Long, Boolean, Map, Object...)` with `null` settings.

Syntax
```javascript
//return String type
var risp = utils.executeCachedQueryOnGoogleDatastore(
	maxCachedEntities, //int
	sql, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| maxCachedEntities | int | maximum number of distinct query results to cache; set to 0 to disable caching | 
| sql | String | the GQL query to execute (e.g., `"SELECT FROM MyKind WHERE field = ?1"`) | 
| dataModelId | Long | the platform data model ID that defines the entity structure (Kind, fields, types) | 
| interruptExecution | Boolean | if `true`, exceptions are re-thrown to the caller; if `false`, errors are logged and `null` may be returned | 
| pars | Object[] | bind variable values for placeholders in the GQL query (`?1`, `?2`, etc.) | 

> ✅ **Returns**
>
> a JSON string with structure `{ valueObjectList: [...], moreRows: true|false `}, or the cached result if available; `null` if execution fails and `interruptExecution` is `false`

> ⚠️ **Throws**
>
> - `Throwable` if the query fails and `interruptExecution` is `true`


---

## executeExport

Execute an export, starting from the exportId (identifier of the export definition) and the query type.

Syntax
```javascript
//return long type
var risp = utils.executeExport(
	exportId, //Long
	queryType, //String
	paramValues //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| exportId | Long | identifier of the export definition | 
| queryType | String | can be null: if set to null, the main query will be used, otherwise, it can be the initial query ("I" value) | 
| paramValues | Map | optional `Map` of parameter values required by the export definition; keys are parameter names (String), values are the corresponding values; these are merged with session variables and used as bind variables in the export queries | 

> ✅ **Returns**
>
> number of exported records


---

## executeExportsInGroup

Execute a group of exports, starting from the group name and the query type: all export definitions belonging to the same group name will be executed, in the order specified by exportOrder field.

Syntax
```javascript
//return long type
var risp = utils.executeExportsInGroup(
	groupName, //String
	queryType, //String
	paramValues //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| groupName | String | identifier for a group of export definitions | 
| queryType | String | can be null: if set to null, the main query will be used, otherwise, it can be the initial query ("I" value) | 
| paramValues | Map | optional `Map` of parameter values required by the export definitions; keys are parameter names (String), values are the corresponding values; these are merged with session variables and used as bind variables in the export queries | 

> ✅ **Returns**
>
> total number of exported records


---

## executeQueryOnBigQueryWithSettings

Execute the specified GQL query and apply automatically filtering/sorting conditions coming from the UI.

Syntax
```javascript
//return String type
var risp = utils.executeQueryOnBigQueryWithSettings(
	sql, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	map, //Map
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sql | String | query to execute; can be `null` if the query is built from the `map` parameter | 
| dataModelId | Long | data model id containing the object structure to retrieve | 
| interruptExecution | Boolean | fire an exception in case of errors on execution | 
| map | Map | optional settings `Map`; when `sql` is `null`, the query is built from the following keys: _(details below)_ | 
| pars | Object[] | values related to bind variables included in the query as ?1, ?2, etc. | 

#### `map`

optional settings `Map`; when `sql` is `null`, the query is built from the following keys:
- `"select"` (String, mandatory) — the SELECT clause
- `"from"` (String, mandatory) — the FROM clause
- `"where"` (String, optional) — the WHERE clause
- `"groupBy"` (String, optional) — the GROUP BY clause
- `"having"` (String, optional) — the HAVING clause
- `"orderBy"` (String, optional) — the ORDER BY clausePass `null` only if `sql` is provided.

> ✅ **Returns**
>
> a JSON string containing the following object { valueObjectList: [...], moreRows: true|false }

> ⚠️ **Throws**
>
> - `Throwable` in case of errors, if interruptExecution has been set to true


---

## executeQueryOnBigQuery

Execute the specified GQL query and apply automatically filtering/sorting conditions coming from the UI.

Syntax
```javascript
//return String type
var risp = utils.executeQueryOnBigQuery(
	sql, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sql | String | query to execute, expressed in GQL | 
| dataModelId | Long | data model id containing the object structure to retrieve | 
| interruptExecution | Boolean | fire an exception in case of errors on execution | 
| pars | Object[] | values related to bind variables included in the GQL query as ?1, ?2, etc. | 

> ✅ **Returns**
>
> a JSON string containing the following object { valueObjectList: [...], moreRows: true|false }

> ⚠️ **Throws**
>
> - `Throwable` in case of errors, if interruptExecution has been set to true


---

## executeQueryOnGoogleDatastoreWithSettings

Execute the specified GQL query and apply automatically filtering/sorting conditions coming from the UI. Additionally, use the settings argument to apply additional join conditions: 1) inject a cached secondary object in to the specified attribute; required settings: { secondaryObjects: [ { name: "...", // attribute name in the main object, where jnjecting the retrieved secondary object objectName: "...", // secondary object; you can use dataModelId instead dataModelId: "...", // data model id which identifies the secondary object fkName: "...", // attribute name in the main object, representing the linking condition (FK) with the secondary object compositeFkName: [{ value: "..." }, variable: "...", ...], list of values/variables composing the fk where: "...", // optional: alternative to the previous one and used to manually specify the WHERE condition to get ONE entity from the secondary object; it can contains binding variables expressed as :XXX where XXX is the uncamel of the main object's attribute name longResultSet: true|false // optional: true if the secondary result is long and consequently cannot be read at all, false if there are a few records for the secondary query } ] } 2) inject multiple attributes starting from a cached secondary object in to the specified attribute; required settings: { secondaryAttributes: [ { mapping: { "mainAttrName1": "secondaryAttrName1", // attribute name in the main object, where jnjecting the corresponding attribute fethed from retrieved secondary object "mainAttrName2": "secondaryAttrName2", ... }, objectName: "...", // secondary object; you can use dataModelId instead dataModelId: "...", // data model id which identifies the secondary object fkName: "...", // attribute name in the main object, representing the linking condition (FK) with the secondary object compositeFkName: [{ value: "..." }, variable: "...", ...], list of values/variables composing the fk where: "...", // optional: alternative to the previous one and used to manually specify the WHERE condition to get ONE entity from the secondary object; it can contains binding variables expressed as :XXX where XXX is the uncamel of the main object's attribute name longResultSet: true|false // optional: true if the secondary result is long and consequently cannot be read at all, false if there are a few records for the secondary query } ] } }

Syntax
```javascript
//return String type
var risp = utils.executeQueryOnGoogleDatastoreWithSettings(
	sql, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	settings, //Map
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sql | String | query to execute, expressed in GQL | 
| dataModelId | Long | data model id containing the object structure to retrieve | 
| interruptExecution | Boolean | fire an exception in case of errors on execution | 
| settings | Map | additional settings, used to emulate join conditions | 
| pars | Object[] | values related to bind variables included in the GQL query as ?1, ?2, etc. | 

> ✅ **Returns**
>
> a JSON string containing the following object { valueObjectList: [...], moreRows: true|false }

> ⚠️ **Throws**
>
> - `Throwable` in case of errors, if interruptExecution has been set to true


---

## executeQueryOnGoogleDatastore

Execute the specified GQL query and apply automatically filtering/sorting conditions coming from the UI.

Syntax
```javascript
//return String type
var risp = utils.executeQueryOnGoogleDatastore(
	sql, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sql | String | query to execute, expressed in GQL | 
| dataModelId | Long | data model id containing the object structure to retrieve | 
| interruptExecution | Boolean | fire an exception in case of errors on execution | 
| pars | Object[] | values related to bind variables included in the GQL query as ?1, ?2, etc. | 

> ✅ **Returns**
>
> a JSON string containing the following object { valueObjectList: [...], moreRows: true|false }

> ⚠️ **Throws**
>
> - `Throwable` in case of errors, if interruptExecution has been set to true


---

## executeQueryOnGoogleSpannerWithSettings

Execute the specified GQL query and apply automatically filtering/sorting conditions coming from the UI. Additionally, use the settings argument to apply additional join conditions: 1) inject a cached secondary object in to the specified attribute; required settings: { secondaryObjects: [ { name: "...", // attribute name in the main object, where jnjecting the retrieved secondary object objectName: "...", // secondary object; you can use dataModelId instead dataModelId: "...", // data model id which identifies the secondary object fkName: "...", // attribute name in the main object, representing the linking condition (FK) with the secondary object compositeFkName: [{ value: "..." }, variable: "...", ...], list of values/variables composing the fk where: "...", // optional: alternative to the previous one and used to manually specify the WHERE condition to get ONE entity from the secondary object; it can contains binding variables expressed as :XXX where XXX is the uncamel of the main object's attribute name longResultSet: true|false // optional: true if the secondary result is long and consequently cannot be read at all, false if there are a few records for the secondary query } ] } 2) inject multiple attributes starting from a cached secondary object in to the specified attribute; required settings: { secondaryAttributes: [ { mapping: { "mainAttrName1": "secondaryAttrName1", // attribute name in the main object, where jnjecting the corresponding attribute fethed from retrieved secondary object "mainAttrName2": "secondaryAttrName2", ... }, objectName: "...", // secondary object; you can use dataModelId instead dataModelId: "...", // data model id which identifies the secondary object fkName: "...", // attribute name in the main object, representing the linking condition (FK) with the secondary object compositeFkName: [{ value: "..." }, variable: "...", ...], list of values/variables composing the fk where: "...", // optional: alternative to the previous one and used to manually specify the WHERE condition to get ONE entity from the secondary object; it can contains binding variables expressed as :XXX where XXX is the uncamel of the main object's attribute name longResultSet: true|false // optional: true if the secondary result is long and consequently cannot be read at all, false if there are a few records for the secondary query } ] } }

Syntax
```javascript
//return String type
var risp = utils.executeQueryOnGoogleSpannerWithSettings(
	sql, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	settings, //Map
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sql | String | query to execute, expressed in GQL | 
| dataModelId | Long | data model id containing the object structure to retrieve | 
| interruptExecution | Boolean | fire an exception in case of errors on execution | 
| settings | Map | additional settings, used to emulate join conditions | 
| pars | Object[] | values related to bind variables included in the GQL query as ?1, ?2, etc. | 

> ✅ **Returns**
>
> a JSON string containing the following object { valueObjectList: [...], moreRows: true|false }

> ⚠️ **Throws**
>
> - `Throwable` in case of errors, if interruptExecution has been set to true


---

## executeQueryOnGoogleSpanner

Execute the specified GQL query and apply automatically filtering/sorting conditions coming from the UI.

Syntax
```javascript
//return String type
var risp = utils.executeQueryOnGoogleSpanner(
	sql, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sql | String | query to execute, expressed in GQL | 
| dataModelId | Long | data model id containing the object structure to retrieve | 
| interruptExecution | Boolean | fire an exception in case of errors on execution | 
| pars | Object[] | values related to bind variables included in the GQL query as ?1, ?2, etc. | 

> ✅ **Returns**
>
> a JSON string containing the following object { valueObjectList: [...], moreRows: true|false }

> ⚠️ **Throws**
>
> - `Throwable` in case of errors, if interruptExecution has been set to true


---

## executeQueryOnMongoDb

Executes a query on a MongoDB collection and returns all matching documents as a JSON string. The collection to query is determined by the data model's table name. An optional WHERE clause (expressed as a MongoDB filter condition) can be provided to restrict the result set. This method retrieves up to 10,000 documents and does NOT apply UI filtering/sorting conditions. The `where` parameter is preprocessed: if it is wrapped in square brackets, the brackets are stripped before building the query.

Syntax
```javascript
//return String type
var risp = utils.executeQueryOnMongoDb(
	where, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| where | String | a MongoDB filter condition string (e.g. `"{ age: { $gt: 25 ` }"}), or `null`/empty to retrieve all documents in the collection | 
| dataModelId | Long | the platform data model ID defining the collection structure and field mappings | 
| interruptExecution | Boolean | if `true`, exceptions are re-thrown to the caller; if `false`, errors are logged and an empty/partial result is returned | 
| pars | Object[] | bind parameter values for placeholders in the WHERE clause | 

> ✅ **Returns**
>
> a JSON string representing the list of matching documents, rendered via `JSONListRenderer`

> ⚠️ **Throws**
>
> - `Throwable` if the query fails and `interruptExecution` is `true`


---

## executeSpannerDdl

Executes one or more DDL (Data Definition Language) statements on Google Cloud Spanner. Typical DDL operations include CREATE TABLE, ALTER TABLE, DROP TABLE, and CREATE INDEX. The statements are executed sequentially against the Spanner database configured in the platform.

Syntax
```javascript
//return String type
var risp = utils.executeSpannerDdl(
	scripts //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| scripts | String[] | an array of DDL SQL statements to execute | 

> ✅ **Returns**
>
> a result string from the Spanner DDL execution (typically operation metadata or status)

> ⚠️ **Throws**
>
> - `Throwable` if the DDL execution fails


---

## executeSpannerSql

Executes a DML (Data Manipulation Language) SQL statement on Google Cloud Spanner. Suitable for INSERT, UPDATE, or DELETE statements that do not return result sets. The statement is executed against the Spanner database configured in the platform.

Syntax
```javascript
utils.executeSpannerSql(
	sql //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sql | String | the DML SQL statement to execute | 

> ⚠️ **Throws**
>
> - `Throwable` if the SQL execution fails


---

## executeStripePayment

return payment intent id

Syntax
```javascript
//return String type
var risp = utils.executeStripePayment(
	apiKey, //String
	priceWithCents, //Long
	currency, //String
	customerId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| apiKey | String |  | 
| priceWithCents | Long |  | 
| currency | String |  | 
| customerId | String |  | 

> ✅ **Returns**
>
> payment intent id


---

## exportFromExcelFileToGSheet

Exports data from an Excel file to a Google Sheets spreadsheet using the platform-configured user email. This is a convenience overload that delegates to `Long, String, String, List)` using the current user's email.

Syntax
```javascript
//return boolean type
var risp = utils.exportFromExcelFileToGSheet(
	sourceDirId, //Long
	sourceFileName, //String
	spreadsheetId, //String
	areas //List
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sourceDirId | Long | the platform directory ID where the source Excel file is located | 
| sourceFileName | String | the name of the Excel file to read from | 
| spreadsheetId | String | the Google Sheets spreadsheet ID to write data into | 
| areas | List | a `List` of area definitions specifying which ranges to export; each element describes a sheet range and data mapping | 

> ✅ **Returns**
>
> `true` if the export completed successfully, `false` otherwise

> ⚠️ **Throws**
>
> - `Throwable` if the Google Sheets service initialization or export operation fails


---

## exportFromExcelFileToGSheet

Exports data from an Excel file to a Google Sheets spreadsheet using the platform-configured user email. This is a convenience overload that delegates to `Long, String, String, List)` using the current user's email.

Syntax
```javascript
//return boolean type
var risp = utils.exportFromExcelFileToGSheet(
	userId, //String
	sourceDirId, //Long
	sourceFileName, //String
	spreadsheetId, //String
	areas //List
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate for the Sheets API call | 
| sourceDirId | Long | the platform directory ID where the source Excel file is located | 
| sourceFileName | String | the name of the Excel file to read from | 
| spreadsheetId | String | the Google Sheets spreadsheet ID to write data into | 
| areas | List | a `List` of area definitions specifying which ranges to export; each element describes a sheet range and data mapping | 

> ✅ **Returns**
>
> `true` if the export completed successfully, `false` otherwise

> ⚠️ **Throws**
>
> - `Throwable` if the Google Sheets service initialization or export operation fails


---

## exportUsersToDatastore

Export PRM01_USERS users to Google Datastore Users entity (Platform for GAE)

Syntax
```javascript
utils.exportUsersToDatastore();
```


---

## exportUsersToDatastore

Export PRM01_USERS users to Google Datastore Users entity (Platform for GAE)

Syntax
```javascript
utils.exportUsersToDatastore(
	companyId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| companyId | String |  | 


---

## extractBigQueryData

Extract data from the specified BigQuery table to a Google Cloud Storage file. You can export up to 1 GB of table data to a single file. If you are exporting more than 1 GB of data, use a wildcard to export the data into multiple files. When you export data to multiple files, the size of the files will vary. You cannot export nested and repeated data in CSV format. Nested and repeated data is supported for Avro and JSON exports. You cannot export data from multiple tables in a single export job. Examples for gcsUrl: gs://my-bucket/file-name.json gs://my-bucket/file-name-.json gs://my-bucket/path-component- /file-name.json

Syntax
```javascript
utils.extractBigQueryData(
	datasetName, //String
	tableName, //String
	format, //String
	gcsUrl, //String
	deleteTableAfterExport, //Boolean
	exportHeaders //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| datasetName | String |  | 
| tableName | String | String: name of table | 
| format | String | export format; supported values: CSV (with comma separator),JSON,Avro | 
| gcsUrl | String | Google Cloud Storage URI | 
| deleteTableAfterExport | Boolean |  | 
| exportHeaders | Boolean |  | 


---

## forceMobileDeviceUpdates

Force all data to be sent again for one device, in terms of updates.

Syntax
```javascript
//return String type
var risp = utils.forceMobileDeviceUpdates(
	deviceId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| deviceId | String |  | 

> ⚠️ **Throws**
>
> - `Throwable`


---

## generateDocx

Create a .docx file starting from a template and save it to the specified absolute path

Syntax
```javascript
//return String type
var risp = utils.generateDocx(
	reportId, //Long
	args, //Object>
	langId, //String
	path, //String
	fileName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| reportId | Long | long value representing a specific report template in CON66 | 
| args | Object> | a `Map` of binding parameters used to populate the report template queries; keys are attribute names (String), values are the corresponding attribute values (String, Number, Date, etc.) used as bind variables in the queries connected to the report | 
| langId | String | (optional) language that identify the template to use; can be null | 
| path | String | the absolute path where saving the document (it must not include the file name) | 
| fileName | String | (optional) the name to use when creating the file; may be null: in that case, a dynamic name will be assigned automatically | 

> ✅ **Returns**
>
> the name of the file just generated

> ⚠️ **Throws**
>
> - `Throwable` in case of problems when generating the docx file


---

## generateGCPAuthToken

Generates or retrieves a GCP authorization URL/token for the specified user and scopes, with a redirect URI for the OAuth2 flow. This is a convenience overload that does not force token regeneration.

Syntax
```javascript
//return String type
var risp = utils.generateGCPAuthToken(
	user, //String
	serviceAccountEmail, //String
	privateKeyString, //String
	redirectUri, //String
	_scopes //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| user | String | the Google user email; if `null`, the current session user is used | 
| serviceAccountEmail | String | the service account email; if `null`, the platform default is used | 
| privateKeyString | String | the PEM-encoded private key; if `null`, the platform default is used | 
| redirectUri | String | the OAuth2 redirect URI for the authorization flow | 
| _scopes | String[] | one or more OAuth2 scopes to request | 

> ✅ **Returns**
>
> a JSON string containing the authorization URL or token information

> ⚠️ **Throws**
>
> - `Throwable` if the token generation or authorization URL creation fails


---

## generateGCPAuthToken

Generates or retrieves a GCP authorization URL/token for the specified user and scopes, with a redirect URI for the OAuth2 flow. This is a convenience overload that does not force token regeneration.

Syntax
```javascript
//return String type
var risp = utils.generateGCPAuthToken(
	user, //String
	serviceAccountEmail, //String
	privateKeyString, //String
	redirectUri, //String
	forceToken, //Boolean
	_scopes //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| user | String | the Google user email; if `null`, the current session user is used | 
| serviceAccountEmail | String | the service account email; if `null`, the platform default is used | 
| privateKeyString | String | the PEM-encoded private key; if `null`, the platform default is used | 
| redirectUri | String | the OAuth2 redirect URI for the authorization flow | 
| forceToken | Boolean | if `true`, forces a new token to be generated even if a cached one exists | 
| _scopes | String[] | one or more OAuth2 scopes to request | 

> ✅ **Returns**
>
> a JSON string containing the authorization URL or token information

> ⚠️ **Throws**
>
> - `Throwable` if the token generation or authorization URL creation fails


---

## getActivitiLastVersionProcessId

Get the latest deployed version process definition ID for a given Activiti process.

Syntax
```javascript
//return String type
var risp = utils.getActivitiLastVersionProcessId(
	id //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| id | String | the process definition key | 

> ✅ **Returns**
>
> the process definition ID of the latest deployed version

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## getActivitiProcessAsJson

Get a JSON representation of the specified process id

Syntax
```javascript
//return String type
var risp = utils.getActivitiProcessAsJson(
	id, //String
	includeSubProcesses, //Boolean
	tasksDueDates //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| id | String | process id | 
| includeSubProcesses | Boolean | flag used to define whether including subprocesses as well | 
| tasksDueDates | Map | a `Map` of task due dates; keys are composite identifiers in the format `"processId.taskId"` (String), values are due dates as either an ISO format String or a String in `"yyyy-MM-ddHH:mm:ss"` format | 

> ✅ **Returns**
>
> JSON string

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## getActivitiProcessInstancesVariables

Get ALL variables of a process instance in Activiti BPM.

Syntax
```javascript
//return String type
var risp = utils.getActivitiProcessInstancesVariables(
	processInstanceId, //String
	processDefinitionId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| processInstanceId | String | id of the process instance | 
| processDefinitionId | String | process id | 

> ✅ **Returns**
>
> a JSON string having the following format: { "valueObjectList": [{ "name":"RUOLO", "type":"string", "value":"1", "scope":"local", "translate":"Ruolo" }, { "name":"UTENTE", "type":"string", "value":"ADMIN", "scope":"local", "translate":"Utente" } ] }

> ⚠️ **Throws**
>
> - `fire` an exception in case of errors


---

## getActivitiUserAssignedTasks

Get all Activiti tasks assigned to a specific user, optionally filtered by process instance and task definition key.

Syntax
```javascript
//return String type
var risp = utils.getActivitiUserAssignedTasks(
	assignee, //String
	processInstanceId, //String
	taskDefinitionKey //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| assignee | String | the username of the task assignee | 
| processInstanceId | String | optional process instance ID filter; can be `null` | 
| taskDefinitionKey | String | optional task definition key filter; can be `null` | 

> ✅ **Returns**
>
> a JSON string containing the matching tasks in the format `{ valueObjectList: [...], moreRows: true|false `}

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## getActivitiUserCandidateTasks

Get all Activiti tasks where the specified user is a candidate, optionally filtered by process instance and task definition key.

Syntax
```javascript
//return String type
var risp = utils.getActivitiUserCandidateTasks(
	candidate, //String
	processInstanceId, //String
	taskDefinitionKey //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| candidate | String | the username of the candidate user | 
| processInstanceId | String | optional process instance ID filter; can be `null` | 
| taskDefinitionKey | String | optional task definition key filter; can be `null` | 

> ✅ **Returns**
>
> a JSON string containing the matching tasks in the format `{ valueObjectList: [...], moreRows: true|false `}

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## getAlfrescoDocument

Extract a file from the Alfresco document repository and save it to the local file system. Retrieves the binary content of a document identified by its Alfresco node UUID, then writes it to the specified destination directory using the document's original file name. The destination directory is created if it does not exist.

Syntax
```javascript
//return boolean type
var risp = utils.getAlfrescoDocument(
	id, //String
	fileName, //String
	destPath //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| id | String | the Alfresco node UUID (unique identifier for the document in the repository) | 
| fileName | String | the file name used to locate the document in Alfresco | 
| destPath | String | the absolute directory path where the file will be saved; must NOT include the file name (the original name from Alfresco is used) | 

> ✅ **Returns**
>
> `true` if the document was found and saved successfully; `false` if the document was not found in Alfresco or the current edition is not Enterprise

> ⚠️ **Throws**
>
> - `Throwable` if the server call fails or an I/O error occurs while writing the file


---

## getAlfrescoWebScript

Execute an Alfresco web script and return the response as a String. Convenience overload that uses UTF-8 as the character encoding. Delegates to `boolean, String, String, String)`.

Syntax
```javascript
//return String type
var risp = utils.getAlfrescoWebScript(
	uri, //String
	replaceVariables, //boolean
	httpMethod, //String
	bodyRequest, //String
	charSet //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| uri | String | the web script URI path (e.g. "service/api/sites"), optionally containing platform variables expressed as `:VARIABLE_NAME` | 
| replaceVariables | boolean | if `true`, platform variables in the URI (expressed as `:XXX`) are resolved before making the request | 
| httpMethod | String | the HTTP method to use (e.g. "GET", "POST", "PUT", "DELETE"); if `null`, defaults to "GET" | 
| bodyRequest | String | the request body content (typically JSON); may be `null` for GET requests | 
| charSet | String | the character encoding to use for reading the response (e.g. "UTF-8", "ISO-8859-1") | 

> ✅ **Returns**
>
> the HTTP response body as a String (typically JSON or XML from the web script)

> ⚠️ **Throws**
>
> - `Exception` if authentication fails, the web script returns an error, or a network error occurs


---

## getAlfrescoWebScript

Execute an Alfresco web script and return the response as a String. Convenience overload that uses UTF-8 as the character encoding. Delegates to `boolean, String, String, String)`.

Syntax
```javascript
//return String type
var risp = utils.getAlfrescoWebScript(
	uri, //String
	replaceVariables, //boolean
	httpMethod, //String
	bodyRequest //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| uri | String | the web script URI path (e.g. "service/api/sites"), optionally containing platform variables expressed as `:VARIABLE_NAME` | 
| replaceVariables | boolean | if `true`, platform variables in the URI (expressed as `:XXX`) are resolved before making the request | 
| httpMethod | String | the HTTP method to use (e.g. "GET", "POST", "PUT", "DELETE"); if `null`, defaults to "GET" | 
| bodyRequest | String | the request body content (typically JSON); may be `null` for GET requests | 

> ✅ **Returns**
>
> the HTTP response body as a String (typically JSON or XML from the web script)

> ⚠️ **Throws**
>
> - `Exception` if authentication fails, the web script returns an error, or a network error occurs


---

## getBigQueryDataset

return the default BigQuery dataset name, or `null` if not set

Syntax
```javascript
//return String type
var risp = utils.getBigQueryDataset();
```

> ✅ **Returns**
>
> the default BigQuery dataset name, or `null` if not set


---

## getButtonsAuthorizationOfUser

return a map with: functionId --> [insertEnabled, editEnabled, deleteEnabled]

Syntax
```javascript
//return Map type
var risp = utils.getButtonsAuthorizationOfUser();
```

> ✅ **Returns**
>
> a map with: functionId --> [insertEnabled, editEnabled, deleteEnabled]


---

## getCustomApplFromCookie

Retrieves the custom application user variables from a session stored in Redis, identified by the given key, and returns them as a JSON string.

Syntax
```javascript
//return String type
var risp = utils.getCustomApplFromCookie(
	key //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| key | String | the Redis session key used to look up the internal state | 

> ✅ **Returns**
>
> a JSON string representation of the custom application user variables map


---

## getDetailOnArchiflow

Retrieve the detail of a single Archiflow card by its card ID.

Syntax
```javascript
//return String type
var risp = utils.getDetailOnArchiflow(
	dataModelId, //Long
	cardId, //String
	additionalSettings //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dataModelId | Long | the data model identifier defining the object structure | 
| cardId | String | the unique Archiflow card identifier | 
| additionalSettings | Map | optional Map with extra settings for the Archiflow query | 

> ✅ **Returns**
>
> a JSON string containing the card detail

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## getElementFromQueueByNote

Retrieve a queue element by its note attribute and namespace. This method is only available in Platform for GAE and always throws `UnsupportedOperationException` in this implementation.

Syntax
```javascript
//return String type
var risp = utils.getElementFromQueueByNote(
	note, //String
	namespace //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| note | String | the note value to search for in the queue | 
| namespace | String | the namespace to search within | 

> ✅ **Returns**
>
> the queue element matching the given note

> ⚠️ **Throws**
>
> - `Exception` always throws `UnsupportedOperationException`


---

## getEntitiesAsJSON

Retrieves multiple entities from Google Datastore by their keys and returns them as a JSON array. Convenience wrapper around `Object[])` that serializes the result to a JSON string. Dates are formatted as `"yyyy-MM-dd HH:mm:ss"`.

Syntax
```javascript
//return String type
var risp = utils.getEntitiesAsJSON(
	entityName, //String
	entityKeys //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| entityName | String | the Datastore Kind name (entity type), expressed in camelCase | 
| entityKeys | Object[] | an array of entity keys to retrieve; each key is typically a `String` or `Long` | 

> ✅ **Returns**
>
> a JSON array string representing the retrieved entities (e.g., `[{...`, {...}]})

> ⚠️ **Throws**
>
> - `Throwable` if the Datastore API call fails or authentication fails


---

## getEntities

Retrieves multiple entities from Google Datastore by their keys in a single batch call. Each returned `Map` contains attribute name/value pairs for the corresponding entity. The order of returned entities matches the order of the provided keys.

Syntax
```javascript
//return Map[] type
var risp = utils.getEntities(
	entityName, //String
	entityKeys //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| entityName | String | the Datastore Kind name (entity type), expressed in camelCase | 
| entityKeys | Object[] | an array of entity keys to retrieve; each key is typically a `String` or `Long` | 

> ✅ **Returns**
>
> an array of `Map` objects, one per entity found; entries may be `null` if an entity with the given key does not exist

> ⚠️ **Throws**
>
> - `Throwable` if the Datastore API call fails or authentication fails


---

## getEntityAsJSON

Get an entity, starting from its key.

Syntax
```javascript
//return String type
var risp = utils.getEntityAsJSON(
	entityName, //String
	key, //Object
	maxCachedEntities, //int
	expirationTime //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| entityName | String | entity name, expressed in camel case | 
| key | Object | entity key, usually a String | 
| maxCachedEntities | int | max number of entities read from this method which will be stored in cached, instead of being retrieved from datastore; the cache can be cleared up, by using "clearDatastoreEntities" method | 
| expirationTime | Long | expiration time, expressed in minutes | 

> ✅ **Returns**
>
> object containing the entity attribute values; null if there is not en entity having the specified key


---

## getEntityAsJSON

Get an entity, starting from its key.

Syntax
```javascript
//return String type
var risp = utils.getEntityAsJSON(
	entityName, //String
	key, //Object
	maxCachedEntities //int
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| entityName | String | entity name, expressed in camel case | 
| key | Object | entity key, usually a String | 
| maxCachedEntities | int | max number of entities read from this method which will be stored in cached, instead of being retrieved from datastore; the cache can be cleared up, by using "clearDatastoreEntities" method | 

> ✅ **Returns**
>
> object containing the entity attribute values; null if there is not en entity having the specified key


---

## getEntity

Get an entity, starting from its key.

Syntax
```javascript
//return Map type
var risp = utils.getEntity(
	entityName, //String
	key, //Object
	maxCachedEntities, //int
	expirationTime //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| entityName | String | entity name, expressed in camel case | 
| key | Object | entity key, usually a String | 
| maxCachedEntities | int | max number of entities read from this method which will be stored in cached, instead of being retrieved from datastore; the cache can be cleared up, by using "clearDatastoreEntities" method | 
| expirationTime | Long | expiration time, expressed in minutes | 

> ✅ **Returns**
>
> object containing the entity attribute values; null if there is not en entity having the specified key


---

## getEntity

Get an entity, starting from its key.

Syntax
```javascript
//return Map type
var risp = utils.getEntity(
	entityName, //String
	key, //Object
	maxCachedEntities //int
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| entityName | String | entity name, expressed in camel case | 
| key | Object | entity key, usually a String | 
| maxCachedEntities | int | max number of entities read from this method which will be stored in cached, instead of being retrieved from datastore; the cache can be cleared up, by using "clearDatastoreEntities" method | 

> ✅ **Returns**
>
> object containing the entity attribute values; null if there is not en entity having the specified key


---

## getFunctionAuthorizationOfUser

Get the buttons authorization of user for a functionId. If the user doesn't has an authorizations the map is empty.

Syntax
```javascript
//return Map type
var risp = utils.getFunctionAuthorizationOfUser(
	functionId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| functionId | String |  | 

> ✅ **Returns**
>
> a map with: functionId --> [insertEnabled, editEnabled, deleteEnabled]


---

## getGCPAuthToken

Get an auth token for GCP, starting from the specified service account + key and user

Syntax
```javascript
//return String type
var risp = utils.getGCPAuthToken(
	user, //String
	serviceAccountEmail, //String
	privateKeyString, //String
	_scopes //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| user | String |  | 
| serviceAccountEmail | String |  | 
| privateKeyString | String |  | 
| _scopes | String[] |  | 


---

## getGoogleCalendarAccessToken

Obtains an OAuth 2.0 access token for the Google Calendar API on behalf of the specified user. This token can be used for direct REST API calls to Google Calendar outside the platform's abstraction layer (e.g., from client-side JavaScript or external integrations).

Syntax
```javascript
//return String type
var risp = utils.getGoogleCalendarAccessToken(
	serviceAccountEmail, //String
	privateKeyString, //String
	userId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| serviceAccountEmail | String | the Google service account email used for authentication; if `null`, falls back to `internalState.getGoogleServiceAccountEmail()` | 
| privateKeyString | String | the PEM-encoded private key associated with the service account; if `null`, falls back to `internalState.getGooglePrivateKeyString()` | 
| userId | String | the Google user email to impersonate (calendar owner) via domain-wide delegation | 

> ✅ **Returns**
>
> the OAuth 2.0 access token as a String

> ⚠️ **Throws**
>
> - `Throwable` if the server proxy call fails
- `Exception` if authentication fails


---

## getGoogleCloudStorageBucketVersioning

Checks whether object versioning is enabled for the specified bucket. When versioning is enabled, GCS retains previous versions of objects when they are overwritten or deleted, allowing recovery of earlier object states.

Syntax
```javascript
//return Boolean type
var risp = utils.getGoogleCloudStorageBucketVersioning(
	bucketName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| bucketName | String | the name of the bucket to check | 

> ✅ **Returns**
>
> `true` if object versioning is enabled, `false` otherwise

> ⚠️ **Throws**
>
> - `Throwable` if the GCS API call fails, authentication fails, or the bucket does not exist


---

## getGoogleCloudStorageBucket

Retrieves metadata for an existing Google Cloud Storage bucket. Returns bucket properties such as location, storage class, versioning status, lifecycle rules, and access control configuration.

Syntax
```javascript
//return FileContainer type
var risp = utils.getGoogleCloudStorageBucket(
	bucketName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| bucketName | String | the name of the bucket to retrieve information for | 

> ✅ **Returns**
>
> a `FileContainer` representing the bucket and its metadata

> ⚠️ **Throws**
>
> - `Throwable` if the GCS API call fails, authentication fails, or the bucket does not exist


---

## getGoogleCloudStorageObjectVersions

Retrieves the version history for a specific object in a Google Cloud Storage bucket. Requires object versioning to be enabled on the bucket. Returns all retained versions of the specified object, including archived (non-current) versions.

Syntax
```javascript
//return List type
var risp = utils.getGoogleCloudStorageObjectVersions(
	bucketName, //String
	objectName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| bucketName | String | the name of the bucket containing the object | 
| objectName | String | the full path/name of the object within the bucket | 

> ✅ **Returns**
>
> a `List` of `FileVersion` instances representing all available versions, ordered by generation (newest first)

> ⚠️ **Throws**
>
> - `Throwable` if the GCS API call fails, authentication fails, or the object does not exist


---

## getGoogleCloudStorageObject

Retrieves metadata for a specific object stored in a Google Cloud Storage bucket. Returns object properties including name, size, content type, creation time, and other metadata. Does not download the object's content data.

Syntax
```javascript
//return File type
var risp = utils.getGoogleCloudStorageObject(
	bucketName, //String
	objectName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| bucketName | String | the name of the bucket containing the object | 
| objectName | String | the full path/name of the object within the bucket (e.g., `"folder/file.txt"`) | 

> ✅ **Returns**
>
> a `File` containing the object metadata

> ⚠️ **Throws**
>
> - `Throwable` if the GCS API call fails, authentication fails, or the object does not exist


---

## getGoogleCloudStorageSignedURL

Generates a signed URL for accessing a Google Cloud Storage object without authentication. Signed URLs allow time-limited access to a GCS object without requiring the requester to have a Google account or API credentials. Useful for providing temporary download or upload links to external clients.

Syntax
```javascript
//return String type
var risp = utils.getGoogleCloudStorageSignedURL(
	verb, //String
	expiration, //Long
	bucketName, //String
	objectName, //String
	mime //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| verb | String | the HTTP verb for the signed URL (e.g., `"GET"` for download, `"PUT"` for upload) | 
| expiration | Long | the expiration time as a Unix epoch timestamp in seconds; the URL becomes invalid after this time | 
| bucketName | String | the name of the bucket containing the object | 
| objectName | String | the full path/name of the object within the bucket | 
| mime | String | the expected content type of the object (e.g., `"application/pdf"`); must match the Content-Type header in the eventual request | 

> ✅ **Returns**
>
> the signed URL string that grants temporary access to the object

> ⚠️ **Throws**
>
> - `Throwable` if the signing operation fails, the private key is invalid, or the server call fails


---

## getGoogleContactsFiltered

Retrieves a paginated, filtered list of contacts from the current user's personal Google Contacts. When `splitEmails` is `true`, each email address of a contact generates a separate `Contact` object in the result list, so the returned list size may exceed the actual number of contacts.

Syntax
```javascript
//return List type
var risp = utils.getGoogleContactsFiltered(
	pages, //Integer
	maxPageResults, //Integer
	searchString, //String
	splitEmails //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| pages | Integer | the number of pages to retrieve; each page contains up to `maxPageResults` entries | 
| maxPageResults | Integer | the maximum number of contacts per page | 
| searchString | String | a filter string to match against contact names or email addresses; pass `null` or empty to retrieve all contacts | 
| splitEmails | Boolean | if `true`, returns one `Contact` per email address (a multi-email contact produces multiple results); if `false` or `null`, returns one entry per contact | 

> ✅ **Returns**
>
> a list of `Contact` objects matching the filter criteria

> ⚠️ **Throws**
>
> - `Throwable` if the Google Contacts API call fails or authentication fails


---

## getGoogleDomainContactsFiltered

Retrieves a filtered list of contacts from the Google Workspace domain's Global Address List (GAL) using the Google Admin SDK Directory API. Searches the domain-wide shared contacts (not individual user contacts). Results can be filtered by a query string and sorted. Note that each contact may have multiple email addresses, so the returned list size may differ from the actual number of unique contacts.

Syntax
```javascript
//return List type
var risp = utils.getGoogleDomainContactsFiltered(
	pages, //Integer
	maxPageResults, //Integer
	query, //String
	orderBy, //String
	sortOrder //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| pages | Integer | the number of pages to retrieve; pass `null` to load all pages | 
| maxPageResults | Integer | the maximum number of contacts to return per page; pass `null` for the API default | 
| query | String | a search string to filter contacts (searches name, email, etc.); pass `null` or empty for no filtering | 
| orderBy | String | the field to sort results by (e.g., `"email"`, `"givenName"`, `"familyName"`); pass `null` for default ordering | 
| sortOrder | String | the sort direction: `"ASCENDING"` or `"DESCENDING"`; pass `null` for default | 

> ✅ **Returns**
>
> a `List` of `Contact` objects matching the filter criteria

> ⚠️ **Throws**
>
> - `Throwable` if the Directory API call fails, authentication fails, or the user lacks admin privileges


---

## getGoogleDriveFileDownloadURL

Returns the direct download URL for a Google Drive file. The URL can be used to download the file content without additional authentication (depending on sharing settings).

Syntax
```javascript
//return String type
var risp = utils.getGoogleDriveFileDownloadURL(
	fileId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileId | String | the Google Drive file ID | 

> ✅ **Returns**
>
> the download URL as a string

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails


---

## getGoogleDriveFileInfo

Retrieves the metadata of a file stored in Google Drive, accessible by the current user. Returns file information including title, MIME type, size, parents, permissions, and other metadata.

Syntax
```javascript
//return File type
var risp = utils.getGoogleDriveFileInfo(
	userId, //String
	fileId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate via domain-wide delegation | 
| fileId | String | the Google Drive file ID | 

> ✅ **Returns**
>
> a `File` containing the file's metadata

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## getGoogleDriveFileInfo

Retrieves the metadata of a file stored in Google Drive, accessible by the current user. Returns file information including title, MIME type, size, parents, permissions, and other metadata.

Syntax
```javascript
//return File type
var risp = utils.getGoogleDriveFileInfo(
	fileId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileId | String | the Google Drive file ID | 

> ✅ **Returns**
>
> a `File` containing the file's metadata

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## getGoogleDriveFileOpenURL

Returns the URL to open a Google Drive file in its native editor (Docs, Sheets, etc.). The URL opens the file in the appropriate Google web application for viewing or editing.

Syntax
```javascript
//return String type
var risp = utils.getGoogleDriveFileOpenURL(
	fileId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileId | String | the Google Drive file ID | 

> ✅ **Returns**
>
> the open/edit URL as a string

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails


---

## getGoogleDriveFileProperty

Retrieves the value of a custom property from a Google Drive file or folder, operating as the current user.

Syntax
```javascript
//return String type
var risp = utils.getGoogleDriveFileProperty(
	userId, //String
	fileId, //String
	key, //String
	visibility //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate via domain-wide delegation | 
| fileId | String | the Google Drive file or folder ID | 
| key | String | the property name (key) to retrieve | 
| visibility | String | the property visibility scope: `"PUBLIC"` or `"PRIVATE"` | 

> ✅ **Returns**
>
> the property value, or `null` if not found

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## getGoogleDriveFileProperty

Retrieves the value of a custom property from a Google Drive file or folder, operating as the current user.

Syntax
```javascript
//return String type
var risp = utils.getGoogleDriveFileProperty(
	fileId, //String
	key, //String
	visibility //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileId | String | the Google Drive file or folder ID | 
| key | String | the property name (key) to retrieve | 
| visibility | String | the property visibility scope: `"PUBLIC"` or `"PRIVATE"` | 

> ✅ **Returns**
>
> the property value, or `null` if not found

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## getGoogleDriveFileRevisions

Retrieves the revision history of a file in the current user's Google Drive. Each revision represents a version of the file that was saved.

Syntax
```javascript
//return List type
var risp = utils.getGoogleDriveFileRevisions(
	userId, //String
	fileId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate via domain-wide delegation | 
| fileId | String | the Google Drive file ID | 

> ✅ **Returns**
>
> a list of `FileVersion` objects representing the file's revisions

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## getGoogleDriveFileRevisions

Retrieves the revision history of a file in the current user's Google Drive. Each revision represents a version of the file that was saved.

Syntax
```javascript
//return List type
var risp = utils.getGoogleDriveFileRevisions(
	fileId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileId | String | the Google Drive file ID | 

> ✅ **Returns**
>
> a list of `FileVersion` objects representing the file's revisions

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## getGoogleDriveFolderContentsIds

Lists file IDs within a Google Drive folder for the current user. Similar to `String, Boolean)` but returns only the file IDs instead of full file metadata objects.

Syntax
```javascript
//return List type
var risp = utils.getGoogleDriveFolderContentsIds(
	folderId, //String
	query, //String
	trashed //boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| folderId | String | the Google Drive folder ID to list contents of | 
| query | String | an optional Google Drive API query string to filter results; pass `null` to retrieve all contents | 
| trashed | boolean | if `true`, includes trashed files in the results; if `false`, only non-trashed files are returned | 

> ✅ **Returns**
>
> a list of Google Drive file ID strings

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## getGoogleDriveFolderContentsIds

Lists file IDs within a Google Drive folder for the current user. Similar to `String, Boolean)` but returns only the file IDs instead of full file metadata objects.

Syntax
```javascript
//return List type
var risp = utils.getGoogleDriveFolderContentsIds(
	userId, //String
	folderId, //String
	query, //String
	trashed //boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate via domain-wide delegation | 
| folderId | String | the Google Drive folder ID to list contents of | 
| query | String | an optional Google Drive API query string to filter results; pass `null` to retrieve all contents | 
| trashed | boolean | if `true`, includes trashed files in the results; if `false`, only non-trashed files are returned | 

> ✅ **Returns**
>
> a list of Google Drive file ID strings

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## getGoogleDriveFolderContents

Lists files and subfolders within a Google Drive folder for the current user. An optional query filter can be specified using Google Drive API query syntax (e.g., `"name contains 'report'"`, `"mimeType = 'application/pdf'"`). Trashed files can optionally be included in the results.

Syntax
```javascript
//return List type
var risp = utils.getGoogleDriveFolderContents(
	folderId, //String
	query, //String
	trashed //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| folderId | String | the Google Drive folder ID to list contents of | 
| query | String | an optional Google Drive API query string to filter results; pass `null` to retrieve all contents | 
| trashed | Boolean | if `true`, includes trashed files in the results; if `false` or `null`, only non-trashed files are returned | 

> ✅ **Returns**
>
> a list of `File` objects representing the folder contents

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## getGoogleDriveFolderContents

Lists files and subfolders within a Google Drive folder for the current user. An optional query filter can be specified using Google Drive API query syntax (e.g., `"name contains 'report'"`, `"mimeType = 'application/pdf'"`). Trashed files can optionally be included in the results.

Syntax
```javascript
//return List type
var risp = utils.getGoogleDriveFolderContents(
	userId, //String
	folderId, //String
	query, //String
	trashed //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate via domain-wide delegation | 
| folderId | String | the Google Drive folder ID to list contents of | 
| query | String | an optional Google Drive API query string to filter results; pass `null` to retrieve all contents | 
| trashed | Boolean | if `true`, includes trashed files in the results; if `false` or `null`, only non-trashed files are returned | 

> ✅ **Returns**
>
> a list of `File` objects representing the folder contents

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## getGoogleOAuth2AccessToken

Obtains a Google OAuth2 access token for the specified project and scopes. Uses service account credentials stored in application parameters (CON44 or CON07) with keys named `GOOGLE_SERVACC_EMAIL_` and `GOOGLE_SERVACC_KEY_` (project ID in uppercase). The returned token can be used in HTTP Authorization headers for Google API calls.

Syntax
```javascript
//return String type
var risp = utils.getGoogleOAuth2AccessToken(
	scopes //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| scopes | String[] | one or more OAuth2 scope URLs that define the permissions requested (e.g., `"https://www.googleapis.com/auth/cloud-platform"`) | 

> ✅ **Returns**
>
> the OAuth2 access token string, or `null` if `projectId` is empty, scopes are empty, or the service account credentials are not configured

> ⚠️ **Throws**
>
> - `Throwable` if the OAuth2 token request fails or the server call fails


---

## getGoogleOAuth2AccessToken

Obtains a Google OAuth2 access token for the specified project and scopes. Uses service account credentials stored in application parameters (CON44 or CON07) with keys named `GOOGLE_SERVACC_EMAIL_` and `GOOGLE_SERVACC_KEY_` (project ID in uppercase). The returned token can be used in HTTP Authorization headers for Google API calls.

Syntax
```javascript
//return String type
var risp = utils.getGoogleOAuth2AccessToken(
	projectId, //String
	scopes //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| projectId | String | the Google Cloud project ID; used to look up the corresponding service account credentials in application parameters | 
| scopes | String[] | one or more OAuth2 scope URLs that define the permissions requested (e.g., `"https://www.googleapis.com/auth/cloud-platform"`) | 

> ✅ **Returns**
>
> the OAuth2 access token string, or `null` if `projectId` is empty, scopes are empty, or the service account credentials are not configured

> ⚠️ **Throws**
>
> - `Throwable` if the OAuth2 token request fails or the server call fails


---

## getGoogleOAuth2AccessToken

Obtains a Google OAuth2 access token for the specified project and scopes. Uses service account credentials stored in application parameters (CON44 or CON07) with keys named `GOOGLE_SERVACC_EMAIL_` and `GOOGLE_SERVACC_KEY_` (project ID in uppercase). The returned token can be used in HTTP Authorization headers for Google API calls.

Syntax
```javascript
//return String type
var risp = utils.getGoogleOAuth2AccessToken(
	projectId, //String
	serviceAccountEmail, //String
	privateKeyString, //String
	scopes //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| projectId | String | the Google Cloud project ID; used to look up the corresponding service account credentials in application parameters | 
| serviceAccountEmail | String | the service account email address (e.g., `"myapp@project-id.iam.gserviceaccount.com"`) | 
| privateKeyString | String | the Base64-encoded PKCS12 private key for the service account | 
| scopes | String[] | one or more OAuth2 scope URLs that define the permissions requested (e.g., `"https://www.googleapis.com/auth/cloud-platform"`) | 

> ✅ **Returns**
>
> the OAuth2 access token string, or `null` if `projectId` is empty, scopes are empty, or the service account credentials are not configured

> ⚠️ **Throws**
>
> - `Throwable` if the OAuth2 token request fails or the server call fails


---

## getGoogleSharedContactsFiltered

Retrieves a paginated, filtered list of contacts from the Google Workspace domain's shared contact list (Global Address List / GAL). Shared contacts are domain-level contacts visible to all users in the organization. When `splitEmails` is `true`, each email address of a contact generates a separate `Contact` object in the result list.

Syntax
```javascript
//return List type
var risp = utils.getGoogleSharedContactsFiltered(
	pages, //Integer
	maxPageResults, //Integer
	searchString, //String
	splitEmails //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| pages | Integer | the number of pages to retrieve; each page contains up to `maxPageResults` entries | 
| maxPageResults | Integer | the maximum number of contacts per page | 
| searchString | String | a filter string to match against contact names or email addresses; pass `null` or empty to retrieve all shared contacts | 
| splitEmails | Boolean | if `true`, returns one `Contact` per email address; if `false` or `null`, returns one entry per contact | 

> ✅ **Returns**
>
> a list of `Contact` objects from the domain's shared contact list

> ⚠️ **Throws**
>
> - `Throwable` if the Google Contacts API call fails or authentication fails
- `Exception` if the current user's email is `null` or empty


---

## getGoogleSheetData

Read data from a Google Sheet range and return it as a JSON string, mapping columns to a data model's fields. Each row becomes a JSON object with attribute names taken from the specified data model.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the user email for Google Sheets authentication (domain-wide delegation) | 
| dataModelId | Long | the Platform data model id whose field definitions are used as JSON attribute names | 
| spreadsheetId | String | the Google Spreadsheet ID | 
| range | String | the A1 notation range to read (e.g., "Sheet1!A1:D10") | 
| valueRenderOption | String | how values should be rendered: FORMATTED_VALUE, UNFORMATTED_VALUE, or FORMULA | 
| dateTimeRenderOption | String | how dates should be rendered: SERIAL_NUMBER or FORMATTED_STRING | 

> ✅ **Returns**
>
> a JSON array string where each element is an object with fields from the data model

> ⚠️ **Throws**
>
> - `Throwable` in case of Google API errors or authentication failures


---

## getGoogleSheetData

Read data from a Google Sheet range and return it as a JSON string, mapping columns to a data model's fields. Each row becomes a JSON object with attribute names taken from the specified data model.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the user email for Google Sheets authentication (domain-wide delegation) | 
| dataModelId | Long | the Platform data model id whose field definitions are used as JSON attribute names | 
| spreadsheetId | String | the Google Spreadsheet ID | 
| range | String> | the A1 notation range to read (e.g., "Sheet1!A1:D10") | 
| valueRenderOption | String | how values should be rendered: FORMATTED_VALUE, UNFORMATTED_VALUE, or FORMULA | 
| dateTimeRenderOption | String | how dates should be rendered: SERIAL_NUMBER or FORMATTED_STRING | 

> ✅ **Returns**
>
> a JSON array string where each element is an object with fields from the data model

> ⚠️ **Throws**
>
> - `Throwable` in case of Google API errors or authentication failures


---

## getGoogleSheetData

Read data from a Google Sheet range and return it as a JSON string, mapping columns to a data model's fields. Each row becomes a JSON object with attribute names taken from the specified data model.

Syntax
```javascript
//return String type
var risp = utils.getGoogleSheetData(
	userId, //String
	spreadsheetId, //String
	range, //String
	valueRenderOption, //String
	dateTimeRenderOption //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the user email for Google Sheets authentication (domain-wide delegation) | 
| spreadsheetId | String | the Google Spreadsheet ID | 
| range | String | the A1 notation range to read (e.g., "Sheet1!A1:D10") | 
| valueRenderOption | String | how values should be rendered: FORMATTED_VALUE, UNFORMATTED_VALUE, or FORMULA | 
| dateTimeRenderOption | String | how dates should be rendered: SERIAL_NUMBER or FORMATTED_STRING | 

> ✅ **Returns**
>
> a JSON array string where each element is an object with fields from the data model

> ⚠️ **Throws**
>
> - `Throwable` in case of Google API errors or authentication failures


---

## getGoogleSheetData

Read data from a Google Sheet range and return it as a JSON string, mapping columns to a data model's fields. Each row becomes a JSON object with attribute names taken from the specified data model.

Syntax
```javascript
//return String type
var risp = utils.getGoogleSheetData(
	userId, //String
	spreadsheetId, //String
	range, //String>
	valueRenderOption, //String
	dateTimeRenderOption //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the user email for Google Sheets authentication (domain-wide delegation) | 
| spreadsheetId | String | the Google Spreadsheet ID | 
| range | String> | the A1 notation range to read (e.g., "Sheet1!A1:D10") | 
| valueRenderOption | String | how values should be rendered: FORMATTED_VALUE, UNFORMATTED_VALUE, or FORMULA | 
| dateTimeRenderOption | String | how dates should be rendered: SERIAL_NUMBER or FORMATTED_STRING | 

> ✅ **Returns**
>
> a JSON array string where each element is an object with fields from the data model

> ⚠️ **Throws**
>
> - `Throwable` in case of Google API errors or authentication failures


---

## getGoogleSheets

Retrieves the list of sheets (tabs) in a Google Sheets spreadsheet using the platform-configured user.

Syntax
```javascript
//return String type
var risp = utils.getGoogleSheets(
	userId, //String
	spreadsheetId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate for the Sheets API call | 
| spreadsheetId | String | the Google Sheets spreadsheet ID | 

> ✅ **Returns**
>
> a JSON string representing a list of sheet metadata objects (name, index, etc.)

> ⚠️ **Throws**
>
> - `Throwable` if the Google Sheets service initialization or API call fails


---

## getGoogleSheets

Retrieves the list of sheets (tabs) in a Google Sheets spreadsheet using the platform-configured user.

Syntax
```javascript
//return String type
var risp = utils.getGoogleSheets(
	spreadsheetId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| spreadsheetId | String | the Google Sheets spreadsheet ID | 

> ✅ **Returns**
>
> a JSON string representing a list of sheet metadata objects (name, index, etc.)

> ⚠️ **Throws**
>
> - `Throwable` if the Google Sheets service initialization or API call fails


---

## getGroupMembers

Retrieves the members of a Google Contacts group.

Syntax
```javascript
//return String type
var risp = utils.getGroupMembers(
	userId, //String
	groupId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate for the Contacts API call; must not be null or empty | 
| groupId | String | the Google Contacts group ID whose members to retrieve | 

> ✅ **Returns**
>
> a JSON string containing the list of group members

> ⚠️ **Throws**
>
> - `Throwable` if the user email is null/empty or the API call fails
- `Exception` if `userId` is null or empty


---

## getInfoFiles

Retrieve information about files in the specified directory, optionally filtering by file name pattern. The returned list contains a map for each matching file with keys: `"path"` - the directory path containing the file (String) `"name"` - the file name (String) `"dimension"` - the file size in bytes (long) `"lastModified"` - the last modification timestamp (java.sql.Timestamp)

Syntax
```javascript
//return ArrayList type
var risp = utils.getInfoFiles(
	dirId, //Long
	subFolder, //Boolean
	operator, //String
	fileName, //String
	caseSensitive //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dirId | Long | directory identifier to search in | 
| subFolder | Boolean | if `true`, search recursively into sub-folders | 
| operator | String | filter operator for file name matching: `"startsWith"`, `"endsWith"`, `"equals"`, or `null`/empty to include all files | 
| fileName | String | the file name pattern to match against (used with the operator) | 
| caseSensitive | Boolean | if `true`, file name matching is case-sensitive | 

> ✅ **Returns**
>
> a list of maps, each representing a matching file with its metadata

> ⚠️ **Throws**
>
> - `Throwable` in case of directory resolution or I/O errors


---

## getInternalCacheKeyCount

return always returns 0 in this implementation

Syntax
```javascript
//return int type
var risp = utils.getInternalCacheKeyCount();
```

> ✅ **Returns**
>
> always returns 0 in this implementation


---

## getInternalCacheKeys

Returns the internal cache keys for the specified namespace. This is a no-op stub for non-AppEngine environments.

Syntax
```javascript
//return String type
var risp = utils.getInternalCacheKeys(
	namespace //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| namespace | String | the cache namespace to query | 

> ✅ **Returns**
>
> always returns an empty string in this implementation


---

## getInternalCacheMetadataSize

Returns the metadata size (in bytes) of the internal cache for the specified namespace and application. This is a no-op stub for non-AppEngine environments.

Syntax
```javascript
//return long type
var risp = utils.getInternalCacheMetadataSize(
	namespace, //String
	appId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| namespace | String | the cache namespace | 
| appId | String | the application identifier | 

> ✅ **Returns**
>
> always returns 0L in this implementation


---

## getInternalCacheSize

return always returns 0L in this implementation

Syntax
```javascript
//return long type
var risp = utils.getInternalCacheSize();
```

> ✅ **Returns**
>
> always returns 0L in this implementation


---

## getInvolvedNotAssignedTasks

Get tasks where the specified user is involved but not directly assigned. Useful for finding tasks in candidate groups or with involvement history.

Syntax
```javascript
//return String type
var risp = utils.getInvolvedNotAssignedTasks(
	pars, //HashMap
	username //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| pars | HashMap | a `Map` of additional filter parameters for the task query; supported keys are the same as `enquiryTasks`: `"assignee"`, `"candidateUser"`, `"processInstanceId"`, `"taskDefinitionKey"`, `"processDefinitionKey"` | 
| username | String | the username to check for involvement | 

> ✅ **Returns**
>
> a JSON string containing the matching tasks

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## getKeysFromCache

Retrieve all cache keys that start with the specified prefix from the shared web cache.

Syntax
```javascript
//return String[] type
var risp = utils.getKeysFromCache(
	keyPrefix //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| keyPrefix | String | the prefix to filter cache keys by | 

> ✅ **Returns**
>
> an array of matching cache key names, or an empty array if none match


---

## getLastSynchronizationDevice

return the start date of the last synchronization, or a Timestamp representing epoch (0) if no synchronization history exists @throws Throwable in case of server communication errors

Syntax
```javascript
//return Timestamp type
var risp = utils.getLastSynchronizationDevice();
```

> ✅ **Returns**
>
> the start date of the last synchronization, or a Timestamp representing epoch (0) if no synchronization history exists

> ⚠️ **Throws**
>
> - `Throwable` in case of server communication errors


---

## getModifiedPks

Retrieve the list of primary key values for records that have been modified in the specified table within the given date range, as recorded by the audit log system.

Syntax
```javascript
//return ArrayList type
var risp = utils.getModifiedPks(
	tableName, //String
	field, //String
	changedStardDate, //Date
	changedEndDate //Date
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| tableName | String | the database table name to query the audit log for | 
| field | String | the field name to filter by in the audit log (e.g., the modified column) | 
| changedStardDate | Date | the start date of the modification period (inclusive) | 
| changedEndDate | Date | the end date of the modification period (inclusive) | 

> ✅ **Returns**
>
> a list of primary key values (as strings) for records modified in the specified period

> ⚠️ **Throws**
>
> - `Throwable` in case of server communication errors


---

## getOAuth2AccessToken

Exchanges an OAuth2 authorization code for an access token.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| clientId | String | the OAuth2 client ID | 
| clientSecret | String | the OAuth2 client secret | 
| callback | String | the callback URL (must match the one used in the authorization request) | 
| scope | String | the OAuth2 scope(s) requested | 
| accessTokenEndpoint | String | the provider's token endpoint URL | 
| authorizationBaseUrl | String | the provider's authorization endpoint base URL | 
| code | String | the authorization code received from the provider after user consent | 

> ✅ **Returns**
>
> the access token string

> ⚠️ **Throws**
>
> - `Exception` if the token exchange fails


---

## getOAuth2AuthorizationUrl

Generates an OAuth2 authorization URL for the specified provider configuration. The returned URL should be opened in a browser to allow the user to grant access. After authorization, the provider will redirect to the specified callback URL with an authorization code.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| clientId | String | the OAuth2 client ID | 
| clientSecret | String | the OAuth2 client secret | 
| callback | String | the callback URL where the provider will redirect after authorization | 
| scope | String | the OAuth2 scope(s) to request (space-separated) | 
| accessTokenEndpoint | String | the provider's token endpoint URL | 
| authorizationBaseUrl | String | the provider's authorization endpoint base URL | 

> ✅ **Returns**
>
> the fully-formed authorization URL to redirect the user to

> ⚠️ **Throws**
>
> - `Exception` if the URL generation fails


---

## getPartialResultOnArchiflow

Archiflow method to read a block of data, where filters come from the UI + the ones specified through the "filters" argument.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dataModelId | Long | the data model identifier defining the object structure | 
| filters | Map[] | optional array of filter Maps to apply in addition to UI filters | 
| archiveIds | Integer[] | array of Archiflow archive IDs to search within | 
| cardsWithAttachedDoc | Boolean | if `true`, only returns cards that have attached documents | 
| searchTypes | Integer | search type flags for Archiflow | 
| additionalSettings | Map | optional Map with extra settings for the Archiflow query | 

> ✅ **Returns**
>
> a JSON string: `{ valueObjectList: [...], moreRows: true|false, resultSetLength: num `}

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## getPartialResultOnBigQueryWithSettings

Execute the specified GQL query and apply automatically filtering/sorting conditions coming from the UI.

Syntax
```javascript
//return String type
var risp = utils.getPartialResultOnBigQueryWithSettings(
	sql, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	settings, //Map
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sql | String | query to execute; can be `null` if the query is built from the `settings` parameter | 
| dataModelId | Long | data model id containing the object structure to retrieve | 
| interruptExecution | Boolean | fire an exception in case of errors on execution | 
| settings | Map | optional settings `Map`; when `sql` is `null`, the query is built from the following keys: _(details below)_ | 
| pars | Object[] | values related to bind variables included in the query as ?1, ?2, etc. | 

#### `settings`

optional settings `Map`; when `sql` is `null`, the query is built from the following keys:
- `"select"` (String, mandatory) — the SELECT clause
- `"from"` (String, mandatory) — the FROM clause
- `"where"` (String, optional) — the WHERE clause
- `"groupBy"` (String, optional) — the GROUP BY clause
- `"having"` (String, optional) — the HAVING clause
- `"orderBy"` (String, optional) — the ORDER BY clause
Additionally supports:
- `"count"` (Boolean) — if `true`, also computes the total result set count
- `"cacheCount"` (Boolean) — if `true`, caches the count result to avoid re-computation on subsequent paginated queriesPass `null` only if `sql` is provided.

> ✅ **Returns**
>
> a JSON string containing the following object { valueObjectList: [...], moreRows: true|false }

> ⚠️ **Throws**
>
> - `Throwable` in case of errors, if interruptExecution has been set to true


---

## getPartialResultOnBigQuery

Execute the specified GQL query and apply automatically filtering/sorting conditions coming from the UI.

Syntax
```javascript
//return String type
var risp = utils.getPartialResultOnBigQuery(
	sql, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sql | String | query to execute, expressed in GQL | 
| dataModelId | Long | data model id containing the object structure to retrieve | 
| interruptExecution | Boolean | fire an exception in case of errors on execution | 
| pars | Object[] | values related to bind variables included in the GQL query as ?1, ?2, etc. | 

> ✅ **Returns**
>
> a JSON string containing the following object { valueObjectList: [...], moreRows: true|false }

> ⚠️ **Throws**
>
> - `Throwable` in case of errors, if interruptExecution has been set to true


---

## getPartialResultOnGoogleDatastoreWithSettings

Execute the specified GQL query and apply automatically filtering/sorting conditions coming from the UI. Additionally, use the settings argument to apply additional join conditions: 1) inject a cached secondary object in to the specified attribute; required settings: { secondaryObjects: [ { name: "...", // attribute name in the main object, where jnjecting the retrieved secondary object objectName: "...", // secondary object; you can use dataModelId instead dataModelId: "...", // data model id which identifies the secondary object fkName: "...", // attribute name in the main object, representing the linking condition (FK) with the secondary object compositeFkName: [{ value: "..." }, variable: "...", ...], list of values/variables composing the fk where: "...", // optional: alternative to the previous one and used to manually specify the WHERE condition to get ONE entity from the secondary object; it can contains binding variables expressed as :XXX where XXX is the uncamel of the main object's attribute name longResultSet: true|false // optional: true if the secondary result is long and consequently cannot be read at all, false if there are a few records for the secondary query } ] } 2) inject multiple attributes starting from a cached secondary object in to the specified attribute; required settings: { secondaryAttributes: [ { mapping: { "mainAttrName1": "secondaryAttrName1", // attribute name in the main object, where jnjecting the corresponding attribute fethed from retrieved secondary object "mainAttrName2": "secondaryAttrName2", ... }, objectName: "...", // secondary object; you can use dataModelId instead dataModelId: "...", // data model id which identifies the secondary object fkName: "...", // attribute name in the main object, representing the linking condition (FK) with the secondary object compositeFkName: [{ value: "..." }, variable: "...", ...], list of values/variables composing the fk where: "...", // optional: alternative to the previous one and used to manually specify the WHERE condition to get ONE entity from the secondary object; it can contains binding variables expressed as :XXX where XXX is the uncamel of the main object's attribute name longResultSet: true|false // optional: true if the secondary result is long and consequently cannot be read at all, false if there are a few records for the secondary query } ] } 3) specify "main" filtering conditions, i.e. list of alternative sets of attributes actually applied to GQL; all other filtering conditions will be applied applicatively, not through DS NOTE: these properties are taken into account ONLY IF all result set has been retrieved (no data pagination) { mainFilteringConditions: [ "attr1,attr2", "attr2,attr4,...", ... ] } 4) sorting conditions passed through the UI will be applied applicatively, instead of through DS,. ONLY IF the whole result set has been retrieved (no data pagination) AND mainFilteringConditions has been specified

Syntax
```javascript
//return String type
var risp = utils.getPartialResultOnGoogleDatastoreWithSettings(
	sql, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	settings, //Map
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sql | String | query to execute, expressed in GQL | 
| dataModelId | Long | data model id containing the object structure to retrieve | 
| interruptExecution | Boolean | fire an exception in case of errors on execution | 
| settings | Map | optional settings `Map`; supported keys: _(details below)_ | 
| pars | Object[] | values related to bind variables included in the GQL query as ?1, ?2, etc. | 

#### `settings`

optional settings `Map`; supported keys:
- `"mainFilteringConditions"` (`List` of `String`) — list of comma-separated attribute names identifying the primary filtering conditions applied on Datastore; conditions not in this list are applied in-memory after retrieval, enabling more complex filtering
- `"maxCachedEntities"` (`Number`) — maximum number of entities to cache in memory for subsequent queries
- `"expirationTime"` (`Number`) — cache expiration time in seconds; used together with `"maxCachedEntities"`Pass `null` for default behavior (no in-memory filtering, no caching).

> ✅ **Returns**
>
> a JSON string containing the following object { valueObjectList: [...], moreRows: true|false }

> ⚠️ **Throws**
>
> - `Throwable` in case of errors, if interruptExecution has been set to true


---

## getPartialResultOnGoogleDatastore

Execute the specified GQL query and apply automatically filtering/sorting conditions coming from the UI.

Syntax
```javascript
//return String type
var risp = utils.getPartialResultOnGoogleDatastore(
	sql, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sql | String | query to execute, expressed in GQL | 
| dataModelId | Long | data model id containing the object structure to retrieve | 
| interruptExecution | Boolean | fire an exception in case of errors on execution | 
| pars | Object[] | values related to bind variables included in the GQL query as ?1, ?2, etc. | 

> ✅ **Returns**
>
> a JSON string containing the following object { valueObjectList: [...], moreRows: true|false }

> ⚠️ **Throws**
>
> - `Throwable` in case of errors, if interruptExecution has been set to true


---

## getPartialResultOnGoogleSpannerWithSettings

Execute the specified GQL query and apply automatically filtering/sorting conditions coming from the UI. Additionally, use the settings argument to apply additional join conditions: 1) inject a cached secondary object in to the specified attribute; required settings: { secondaryObjects: [ { name: "...", // attribute name in the main object, where jnjecting the retrieved secondary object objectName: "...", // secondary object; you can use dataModelId instead dataModelId: "...", // data model id which identifies the secondary object fkName: "...", // attribute name in the main object, representing the linking condition (FK) with the secondary object compositeFkName: [{ value: "..." }, variable: "...", ...], list of values/variables composing the fk where: "...", // optional: alternative to the previous one and used to manually specify the WHERE condition to get ONE entity from the secondary object; it can contains binding variables expressed as :XXX where XXX is the uncamel of the main object's attribute name longResultSet: true|false // optional: true if the secondary result is long and consequently cannot be read at all, false if there are a few records for the secondary query } ] } 2) inject multiple attributes starting from a cached secondary object in to the specified attribute; required settings: { secondaryAttributes: [ { mapping: { "mainAttrName1": "secondaryAttrName1", // attribute name in the main object, where jnjecting the corresponding attribute fethed from retrieved secondary object "mainAttrName2": "secondaryAttrName2", ... }, objectName: "...", // secondary object; you can use dataModelId instead dataModelId: "...", // data model id which identifies the secondary object fkName: "...", // attribute name in the main object, representing the linking condition (FK) with the secondary object compositeFkName: [{ value: "..." }, variable: "...", ...], list of values/variables composing the fk where: "...", // optional: alternative to the previous one and used to manually specify the WHERE condition to get ONE entity from the secondary object; it can contains binding variables expressed as :XXX where XXX is the uncamel of the main object's attribute name longResultSet: true|false // optional: true if the secondary result is long and consequently cannot be read at all, false if there are a few records for the secondary query } ] } }

Syntax
```javascript
//return String type
var risp = utils.getPartialResultOnGoogleSpannerWithSettings(
	sql, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	settings, //Map
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sql | String | query to execute, expressed in GQL | 
| dataModelId | Long | data model id containing the object structure to retrieve | 
| interruptExecution | Boolean | fire an exception in case of errors on execution | 
| settings | Map | additional settings, used to emulate join conditions | 
| pars | Object[] | values related to bind variables included in the GQL query as ?1, ?2, etc. | 

> ✅ **Returns**
>
> a JSON string containing the following object { valueObjectList: [...], moreRows: true|false }

> ⚠️ **Throws**
>
> - `Throwable` in case of errors, if interruptExecution has been set to true


---

## getPartialResultOnGoogleSpanner

Execute the specified GQL query and apply automatically filtering/sorting conditions coming from the UI.

Syntax
```javascript
//return String type
var risp = utils.getPartialResultOnGoogleSpanner(
	sql, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sql | String | query to execute, expressed in GQL | 
| dataModelId | Long | data model id containing the object structure to retrieve | 
| interruptExecution | Boolean | fire an exception in case of errors on execution | 
| pars | Object[] | values related to bind variables included in the GQL query as ?1, ?2, etc. | 

> ✅ **Returns**
>
> a JSON string containing the following object { valueObjectList: [...], moreRows: true|false }

> ⚠️ **Throws**
>
> - `Throwable` in case of errors, if interruptExecution has been set to true


---

## getPartialResultOnMongoDb

Executes a paginated query on a MongoDB collection, automatically applying UI filtering and sorting conditions. Unlike `Long, Boolean, Object...)`, this method integrates with the platform's list controller (`lc`) to apply: Pagination via `startIndex` and `blockSize` from the current request context Filter conditions coming from the grid/UI (merged with the provided WHERE clause) Logical delete filtering (if enabled on the data model) Order-by clauses from the UI sorting controls The `where` parameter is preprocessed: if wrapped in square brackets, the brackets are stripped.

Syntax
```javascript
//return String type
var risp = utils.getPartialResultOnMongoDb(
	where, //String
	dataModelId, //Long
	interruptExecution, //Boolean
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| where | String | a MongoDB filter condition string (e.g. `"{ status: 'active' `"}), or `null`/empty to apply only UI-generated filters | 
| dataModelId | Long | the platform data model ID defining the collection structure and field mappings | 
| interruptExecution | Boolean | if `true`, exceptions are re-thrown to the caller; if `false`, errors are logged and an empty/partial result is returned | 
| pars | Object[] | bind parameter values for placeholders in the WHERE clause | 

> ✅ **Returns**
>
> a JSON string containing the paginated result set with documents matching all applied conditions

> ⚠️ **Throws**
>
> - `Throwable` if the query fails and `interruptExecution` is `true`


---

## getProcessDefinition

Retrieve the latest version of a specific Activiti process definition as a JSON string. Fetches all process definitions matching the given ID/key from the Activiti repository, then filters to keep only the highest version for each key. Returns the JSON representation of the first matching definition, or `null` if no definitions are found.

Syntax
```javascript
//return String type
var risp = utils.getProcessDefinition(
	processDefinitionId, //String
	params //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| processDefinitionId | String | the process definition key to look up (matched against the Activiti key field) | 
| params | Map | configuration map; may contain keys: _(details below)_ | 

#### `params`

configuration map; may contain keys:
- `ACTIVITI_BASE_REST_URL` — fallback base URL for the Activiti REST service
- `companyId` — overrides the current session company ID
- `username` — overrides the current session username for authentication
- `password` — overrides the current session password for authentication

> ✅ **Returns**
>
> a JSON string representing the latest version of the process definition, or `null` if not found

> ⚠️ **Throws**
>
> - `Throwable` if the REST call fails or the response cannot be parsed


---

## getShortUrl

Generate a short URL.

Syntax
```javascript
//return String type
var risp = utils.getShortUrl(
	realUrl //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| realUrl | String | the real URL to shorten | 

> ✅ **Returns**
>
> a shorter URL (a redirect alias)


---

## getUUID

return a randomly generated UUID in the standard string format (e.g. "550e8400-e29b-41d4-a716-446655440000")

Syntax
```javascript
//return String type
var risp = utils.getUUID();
```

> ✅ **Returns**
>
> a randomly generated UUID in the standard string format (e.g. "550e8400-e29b-41d4-a716-446655440000")


---

## getValueFromRedis

Retrieves a value from Redis by key.

Syntax
```javascript
//return Object type
var risp = utils.getValueFromRedis(
	key //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| key | String | the Redis key to look up | 

> ✅ **Returns**
>
> the stored value, or `null` if the key does not exist

> ⚠️ **Throws**
>
> - `Throwable` if the Redis operation fails


---

## getValueInCache

Fetch a value from the shared web cache.

Syntax
```javascript
//return Object type
var risp = utils.getValueInCache(
	varName, //String
	alternativeFunctionName, //String
	expirationTime //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| varName | String | variable name | 
| alternativeFunctionName | String | name for a js function previously defined and to invoke, in case the value was not found in cache | 
| expirationTime | Long |  | 

> ✅ **Returns**
>
> if the variable is stored in cache, it returns the corresponding value, otherwise an exception will be fired


---

## getValueInCache

Fetch a value from the shared web cache.

Syntax
```javascript
//return Object type
var risp = utils.getValueInCache(
	varName, //String
	alternativeFunctionName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| varName | String | variable name | 
| alternativeFunctionName | String | name for a js function previously defined and to invoke, in case the value was not found in cache | 

> ✅ **Returns**
>
> if the variable is stored in cache, it returns the corresponding value, otherwise an exception will be fired


---

## getValueInCache

Fetch a value from the shared web cache.

Syntax
```javascript
//return Object type
var risp = utils.getValueInCache(
	varName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| varName | String | variable name | 

> ✅ **Returns**
>
> if the variable is stored in cache, it returns the corresponding value, otherwise an exception will be fired


---

## getWaitingElementsInQueue

Retrieves the waiting elements in a queue. This is a no-op stub for non-AppEngine environments.

Syntax
```javascript
//return String type
var risp = utils.getWaitingElementsInQueue(
	queueName, //String
	companyId, //String
	note, //String
	namespace //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| queueName | String | the name of the queue | 
| companyId | String | the company identifier | 
| note | String | optional note filter | 
| namespace | String | the namespace | 

> ✅ **Returns**
>
> always returns "[]" (empty JSON array) in this implementation


---

## getWebContentWithNTLM



Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| url | String |  | 
| contentType | String |  | 
| httpMethod | String | (optional: can be null); if specified, it defines the HTTP method: GET, POST, PATCH, PUT, DELETE | 
| bodyRequest | String |  | 
| username | String | username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. | 
| password | String |  | 
| workstation | String |  | 
| domain | String |  | 
| settings | Map | { connectionTimeout: 60, // integer and optional; default: 60 secs headers: { "Header-Name": "Header-Value", ... } // optional; additional HTTP headers to include in the request } | 


---

## importBigQueryDataFromGCS

Import a text file stored in GCS to a BigTable table.

Syntax
```javascript
utils.importBigQueryDataFromGCS(
	datasetName, //String
	tableName, //String
	format, //String
	sourceUri, //String
	encoding, //String
	separator //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| datasetName | String |  | 
| tableName | String | String: name of table | 
| format | String | export format; supported values: CSV,JSON | 
| sourceUri | String | file path on GCS Examples for gcsUrl: gs://my-bucket/file-name.json gs://my-bucket/file-name-.json gs:/ When you load CSV or JSON data, values in DATE columns must use the dash (-) separator and the date must be in the following format: YYYY-MM-DD (year-month-day). When you load JSON or CSV data, values in TIMESTAMP columns must use a dash (-) separator for the date portion of the timestamp, and the date must be in the following format: YYYY-MM-DD (year-month-day). The hh:mm:ss (hour-minute-second) portion of the timestamp must use a colon (:) separator. | 
| encoding | String |  | 
| separator | String |  | 


---

## importBigQueryDataFromLocalDatasource

Import a text file stored in the server file system to a BigTable table.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| datasetName | String |  | 
| tableName | String | String: name of table | 
| location | String | GCS location; allowed values: EU, US; see: https://cloud.google.com/bigquery/docs/locations#specifying_your_location | 
| format | String | export format; supported values: CSV,JSON | 
| csvPath | String | absolute path + filename, related to a server-side file | 
| encoding | String |  | 
| separator | String |  | 
| maxBadRecords | Integer |  | 
| truncate | Boolean |  | 
| deleteSrcFileAfterImport | Boolean |  | 

> ✅ **Returns**
>
> imported rows When you load CSV or JSON data, values in DATE columns must use the dash (-) separator and the date must be in the following format: YYYY-MM-DD (year-month-day). When you load JSON or CSV data, values in TIMESTAMP columns must use a dash (-) separator for the date portion of the timestamp, and the date must be in the following format: YYYY-MM-DD (year-month-day). The hh:mm:ss (hour-minute-second) portion of the timestamp must use a colon (:) separator.


---

## importBigQueryThroughStreaming

Import a single record as a streaming. return errors during import, expressed as a JSON map; null if there are NOT errors

Syntax
```javascript
//return String type
var risp = utils.importBigQueryThroughStreaming(
	datasetName, //String
	tableName, //String
	objectsForBQ //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| datasetName | String |  | 
| tableName | String | String: name of table | 
| objectsForBQ | Object[] |  | 


---

## importBigQueryThroughWriteableStreaming

Import records into a BigQuery table using the Storage Write API (writeable streaming). This is a higher-throughput alternative to the legacy streaming insert.

Syntax
```javascript
utils.importBigQueryThroughWriteableStreaming(
	datasetName, //String
	tableName, //String
	records //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| datasetName | String | the BigQuery dataset name | 
| tableName | String | the name of the destination table | 
| records | Object[] | array of record objects to import into the table | 

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## importDataFromGCSWithSchema

Import a text file stored in GCS to a BigTable table.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| datasetName | String |  | 
| tableName | String | String: name of table | 
| format | String | export format; supported values: CSV,JSON | 
| sourceUri | String | file path on GCS Examples for gcsUrl: gs://my-bucket/file-name.json gs://my-bucket/file-name-.json gs:/ When you load CSV or JSON data, values in DATE columns must use the dash (-) separator and the date must be in the following format: YYYY-MM-DD (year-month-day). When you load JSON or CSV data, values in TIMESTAMP columns must use a dash (-) separator for the date portion of the timestamp, and the date must be in the following format: YYYY-MM-DD (year-month-day). The hh:mm:ss (hour-minute-second) portion of the timestamp must use a colon (:) separator. | 
| encoding | String |  | 
| separator | String |  | 
| cols | String[] |  | 


---

## importDataInCloudSQL

Import data into a CloudSQL instance

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| instance | String | Cloud SQL instance ID. This does not include the project ID | 
| bucketPath | String | GCS backet name + subpath + filename, expressed as gs://bucket/blabla | 
| dbSchema | String |  | 
| dataSourceId | Long | num value; it can be null and used to specify a different db to use with the sql statement | 
| tablename | String | table where importing data | 
| where | String | String: where condition for query | 
| columns | String[] | table fields @patam dbSchema database schema containing the specified table where data must be imported | 


---

## importDataInCloudSQL

Import data into a CloudSQL instance

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| instance | String | Cloud SQL instance ID. This does not include the project ID | 
| bucketPath | String | GCS backet name + subpath + filename, expressed as gs://bucket/blabla | 
| dbSchema | String |  | 
| dataSourceId | Long | num value; it can be null and used to specify a different db to use with the sql statement | 
| tablename | String | table where importing data | 
| where | String | String: where condition for query | 
| timeout | Integer | expressed in seconds; the method will be blocked until the natural ending of the process or until the timeout, if expessed; if not expressed the max time is 500 secs | 
| columns | String[] | table fields @patam dbSchema database schema containing the specified table where data must be imported | 


---

## importFileInCMS

Import into the embedded CMS a single file found in the location identified by sourceDirId and load it into the location identified by destDirId. The file in the original position will not be removed.

Syntax
```javascript
//return String type
var risp = utils.importFileInCMS(
	sourceDirId, //Long
	fileName, //String
	destDirId, //Long
	dataSourceId, //Long
	tableName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sourceDirId | Long | source location for the file to import | 
| fileName | String | file name to import, located in sourceDirId | 
| destDirId | Long | destination location for the file to import | 
| dataSourceId | Long | data source identified, where the specified "tableName" is defined | 
| tableName | String | table name for which a datamodel MUST have been defined for such a table: it is used to figure out whether the file is versioned or not (defined at model level) | 

> ✅ **Returns**
>
> UUID related to the file uploaded


---

## importFileInCMS

Import into the embedded CMS a single file found in the location identified by sourceDirId and load it into the location identified by destDirId. The file in the original position will not be removed.

Syntax
```javascript
//return String type
var risp = utils.importFileInCMS(
	path, //String
	destDirId, //Long
	dataSourceId, //Long
	tableName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| path | String | abs path + file name, related to the file to import | 
| destDirId | Long | destination location for the file to import | 
| dataSourceId | Long | data source identified, where the specified "tableName" is defined | 
| tableName | String | table name for which a datamodel MUST have been defined for such a table: it is used to figure out whether the file is versioned or not (defined at model level) | 

> ✅ **Returns**
>
> UUID related to the file uploaded


---

## importMultipleDataFromLocalDatasource

Import a text file stored in the server file system to a BigTable table.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| datasetName | String |  | 
| tableNames | String[] |  | 
| location | String | GCS location; allowed values: EU, US; see: https://cloud.google.com/bigquery/docs/locations#specifying_your_location | 
| format | String | export format; supported values: CSV,JSON | 
| dirPath | String |  | 
| csvFiles | String[] |  | 
| encoding | String |  | 
| separator | String |  | 
| maxBadRecords | Integer |  | 
| truncate | Boolean |  | 
| deleteSrcFileAfterImport | Boolean |  | 

> ✅ **Returns**
>
> imported rows When you load CSV or JSON data, values in DATE columns must use the dash (-) separator and the date must be in the following format: YYYY-MM-DD (year-month-day). When you load JSON or CSV data, values in TIMESTAMP columns must use a dash (-) separator for the date portion of the timestamp, and the date must be in the following format: YYYY-MM-DD (year-month-day). The hh:mm:ss (hour-minute-second) portion of the timestamp must use a colon (:) separator.


---

## incrValueFromRedis

Atomically increments the integer value stored at the specified Redis key by one. If the key does not exist, it is initialized to 0 before performing the increment.

Syntax
```javascript
//return long type
var risp = utils.incrValueFromRedis(
	key //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| key | String | the Redis key whose value to increment | 

> ✅ **Returns**
>
> the new value after the increment

> ⚠️ **Throws**
>
> - `Throwable` if the Redis operation fails


---

## insertBigQueryObject

Insert a single object into a BigQuery table by constructing an INSERT DML statement from the provided Map keys and values. Map keys are converted from camelCase to UPPER_SNAKE_CASE column names.

Syntax
```javascript
//return Long type
var risp = utils.insertBigQueryObject(
	datasetName, //String
	tableName, //String
	obj //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| datasetName | String | the BigQuery dataset name | 
| tableName | String | the name of the destination table | 
| obj | Map | a Map representing the record to insert; keys are camelCase field names, values are the corresponding column values | 

> ✅ **Returns**
>
> the number of rows inserted (typically 1)

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## insertCard

Insert a new card into an Archiflow archive.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dataModelId | Long | the data model identifier defining the card structure | 
| panelId | Long | the panel identifier used for field resolution | 
| vo | Map | a Map representing the card data to insert | 
| archiveId | Integer | the Archiflow archive ID where the card will be stored | 
| additionalSettings | Map | optional Map with extra settings for the operation | 
| actionId | Long | optional server-side action ID to execute after card insertion | 

> ✅ **Returns**
>
> a Map representing the inserted card with generated fields populated

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## insertCard

Insert a new card into an Archiflow archive.

Syntax
```javascript
//return Map type
var risp = utils.insertCard(
	dataModelId, //Long
	panelId, //Long
	vo, //Map
	archiveId, //Integer
	additionalSettings //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dataModelId | Long | the data model identifier defining the card structure | 
| panelId | Long | the panel identifier used for field resolution | 
| vo | Map | a Map representing the card data to insert | 
| archiveId | Integer | the Archiflow archive ID where the card will be stored | 
| additionalSettings | Map | optional Map with extra settings for the operation | 

> ✅ **Returns**
>
> a Map representing the inserted card with generated fields populated

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## insertCards

Insert multiple cards into an Archiflow archive in a single operation.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dataModelId | Long | the data model identifier defining the card structure | 
| panelId | Long | the panel identifier used for field resolution | 
| vos | Map[] | an array of Maps, each representing a card to insert | 
| archiveId | Integer | the Archiflow archive ID where the cards will be stored | 
| additionalSettings | Map | optional Map with extra settings for the operation | 
| actionId | Long | optional server-side action ID to execute after cards insertion | 

> ✅ **Returns**
>
> an array of Maps representing the inserted cards with generated fields populated

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## insertCards

Insert multiple cards into an Archiflow archive in a single operation.

Syntax
```javascript
//return Map[] type
var risp = utils.insertCards(
	dataModelId, //Long
	panelId, //Long
	vos, //Map[]
	archiveId, //Integer
	additionalSettings //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dataModelId | Long | the data model identifier defining the card structure | 
| panelId | Long | the panel identifier used for field resolution | 
| vos | Map[] | an array of Maps, each representing a card to insert | 
| archiveId | Integer | the Archiflow archive ID where the cards will be stored | 
| additionalSettings | Map | optional Map with extra settings for the operation | 

> ✅ **Returns**
>
> an array of Maps representing the inserted cards with generated fields populated

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## insertObjectOnGoogleDatastore

Inserts a single entity into Google Datastore. The entity structure (Kind, fields, types) is determined by the specified data model. After a successful insert, both the partial result cache and the entity cache for this Kind are automatically cleared.

Syntax
```javascript
//return boolean type
var risp = utils.insertObjectOnGoogleDatastore(
	obj, //Map
	dataModelId, //Long
	interruptExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| obj | Map | a `Map` containing attribute name/value pairs for the entity to insert; attribute names must match the data model field definitions (camelCase) | 
| dataModelId | Long | the platform data model ID that defines the entity structure | 
| interruptExecution | Boolean | if `true`, exceptions are re-thrown; if `false`, errors are logged and the method returns `false` | 

> ✅ **Returns**
>
> `true` if the insert succeeded, `false` if it failed and `interruptExecution` is `false`

> ⚠️ **Throws**
>
> - `Throwable` if the insert fails and `interruptExecution` is `true`


---

## insertObjectOnGoogleSpanner

Inserts a single record into a Google Cloud Spanner table. The object to insert is represented as a Map whose keys are the attribute names defined in the data model and whose values are the corresponding field values. The data model metadata is used to resolve field names, types, and indexes.

Syntax
```javascript
//return boolean type
var risp = utils.insertObjectOnGoogleSpanner(
	obj, //Map
	dataModelId, //Long
	interruptExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| obj | Map | a `Map` representing the record to insert; keys are attribute names (camelCase as defined in the data model), values are the field values matching the expected types (String, Integer, BigDecimal, Date, etc.) | 
| dataModelId | Long | the platform data model ID that defines the table structure and field mappings | 
| interruptExecution | Boolean | if `true`, exceptions are propagated to the caller; if `false`, errors are logged and the method returns `false` | 

> ✅ **Returns**
>
> `true` if the insert was successful, `false` if an error occurred and `interruptExecution` is `false`

> ⚠️ **Throws**
>
> - `Throwable` if the insert fails and `interruptExecution` is `true`


---

## insertObjectOnMongoDb

Inserts a single document into a MongoDB collection. The target collection and document structure are determined by the specified data model. The provided Map is used as the document body, with keys matching the data model attribute names. After a successful insert, the original map is returned (potentially enriched with server-generated fields such as `_id`).

Syntax
```javascript
//return Map type
var risp = utils.insertObjectOnMongoDb(
	obj, //Map
	dataModelId, //Long
	interruptExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| obj | Map | a `Map` containing attribute name/value pairs for the document to insert; keys must match the data model field definitions (camelCase attribute names) | 
| dataModelId | Long | the platform data model ID that defines the MongoDB collection and document structure | 
| interruptExecution | Boolean | if `true`, exceptions are re-thrown to the caller; if `false`, errors are logged and the original map is still returned | 

> ✅ **Returns**
>
> the input `obj` Map (may be enriched with generated fields after insert)

> ⚠️ **Throws**
>
> - `Throwable` if the insert fails and `interruptExecution` is `true`


---

## insertObjectsOnBigQuery

Inserts multiple records into a Google BigQuery table. Each map in the array represents one row. Values are automatically converted to match the expected BigQuery column types as defined in the platform data model: Integer types: BigDecimal/Double/Float values are converted to int Decimal types: Integer/Long values are converted to BigDecimal Null values are wrapped in appropriate `QueryParameterValue` instances

Syntax
```javascript
//return boolean type
var risp = utils.insertObjectsOnBigQuery(
	objs, //Map[]
	dataModelId, //Long
	interruptExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| objs | Map[] | an array of `Map` objects, each representing a row to insert; keys are attribute names (camelCase as defined in the data model), values are the field values (String, Number, Date, etc.) | 
| dataModelId | Long | the platform data model ID that defines the BigQuery table structure | 
| interruptExecution | Boolean | if `true`, exceptions are propagated to the caller; if `false`, errors are logged and the method returns `false` | 

> ✅ **Returns**
>
> `true` if all inserts were successful, `false` if an error occurred and `interruptExecution` is `false`

> ⚠️ **Throws**
>
> - `Throwable` if the insert fails and `interruptExecution` is `true`


---

## insertObjectsOnGoogleDatastoreWithSettings

Inserts multiple entities into Google Datastore with configurable settings. Supports two modes depending on the `settings` map: If `settings` contains `"useTransaction": false`, entities are inserted without a Datastore transaction for improved performance (no-transaction batch insert). Otherwise, entities are inserted within a transaction using the standard `insertUpdateRecords` server call. After a successful insert, both the partial result cache and entity cache for this Kind are automatically cleared.

Syntax
```javascript
//return boolean type
var risp = utils.insertObjectsOnGoogleDatastoreWithSettings(
	objs, //Map[]
	dataModelId, //Long
	interruptExecution, //Boolean
	settings //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| objs | Map[] | an array of `Map` objects, each representing an entity to insert; keys are attribute names (camelCase as defined in the data model), values are the corresponding field values (String, Number, Date, etc.) | 
| dataModelId | Long | the platform data model ID that defines the entity structure | 
| interruptExecution | Boolean | if `true`, exceptions are re-thrown; if `false`, errors are logged and the method returns `false` | 
| settings | Map | optional settings `Map`; supported keys: _(details below)_ | 

#### `settings`

optional settings `Map`; supported keys:
- `"useTransaction"` (`Boolean`) — set to `false` to skip transaction wrapping for faster bulk insertsPass `null` for default transactional behavior.

> ✅ **Returns**
>
> `true` if all inserts succeeded, `false` if any failed and `interruptExecution` is `false`

> ⚠️ **Throws**
>
> - `Throwable` if any insert fails and `interruptExecution` is `true`


---

## insertObjectsOnGoogleDatastore

Inserts multiple entities into Google Datastore in a single batch operation. Convenience overload that delegates to `Long, Boolean, Map)` with `null` settings (uses transactional insert by default).

Syntax
```javascript
//return boolean type
var risp = utils.insertObjectsOnGoogleDatastore(
	objs, //Map[]
	dataModelId, //Long
	interruptExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| objs | Map[] | an array of `Map` objects, each containing attribute name/value pairs for an entity to insert | 
| dataModelId | Long | the platform data model ID that defines the entity structure | 
| interruptExecution | Boolean | if `true`, exceptions are re-thrown; if `false`, errors are logged and the method returns `false` | 

> ✅ **Returns**
>
> `true` if all inserts succeeded, `false` if any failed and `interruptExecution` is `false`

> ⚠️ **Throws**
>
> - `Throwable` if any insert fails and `interruptExecution` is `true`


---

## insertObjectsOnGoogleSpanner

Inserts multiple records into a Google Cloud Spanner table in a single batch operation. Each element in the array is a Map representing one record. The data model metadata is used to resolve field names, types, and indexes.

Syntax
```javascript
//return boolean type
var risp = utils.insertObjectsOnGoogleSpanner(
	objs, //Map[]
	dataModelId, //Long
	interruptExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| objs | Map[] | an array of `Map` objects, each representing a record to insert; keys are attribute names (camelCase as defined in the data model), values are the corresponding field values | 
| dataModelId | Long | the platform data model ID that defines the table structure and field mappings | 
| interruptExecution | Boolean | if `true`, exceptions are propagated to the caller; if `false`, errors are logged and the method returns `false` | 

> ✅ **Returns**
>
> `true` if all inserts were successful, `false` if an error occurred and `interruptExecution` is `false`

> ⚠️ **Throws**
>
> - `Throwable` if the batch insert fails and `interruptExecution` is `true`


---

## invalidateAllCache

Remove all values from the cache.

Syntax
```javascript
utils.invalidateAllCache(
	varName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| varName | String |  | 


---

## invalidateAll

Remove all values from the cache.

Syntax
```javascript
utils.invalidateAll();
```


---

## listGoogleCloudStorageObjects

Retrieves a paginated list of objects stored in a Google Cloud Storage bucket, optionally filtered by a prefix and delimiter. Use the prefix to simulate folder-like browsing (e.g., `"images/"` lists only objects whose names start with that prefix). The delimiter (typically `"/"`) groups results by common prefixes, enabling hierarchical navigation in GCS's flat namespace. Pagination is controlled via `maxPageResults` and `nextPageToken`. Use the token from the previous response to fetch the next page.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| bucketName | String | the name of the bucket to list objects from | 
| maxPageResults | Long | the maximum number of objects to return per page; pass `null` to use the API default | 
| pages | Integer | the number of pages to load in a single call; pass `null` to load all pages | 
| nextPageToken | String | a token from a previous response to continue pagination; pass `null` to start from the beginning | 
| prefix | String | an object name prefix to filter results (e.g., `"folder/"`); pass `null` for no prefix filtering | 
| delimiter | String | a delimiter to use for grouping object names (typically `"/"`); pass `null` for no grouping | 

> ✅ **Returns**
>
> a `GooglePaginatedList` of `File` objects with a next page token if more results are available

> ⚠️ **Throws**
>
> - `Throwable` if the GCS API call fails or authentication fails


---

## listGoogleCloudStorageObjects

Retrieves a paginated list of objects stored in a Google Cloud Storage bucket, optionally filtered by a prefix and delimiter. Use the prefix to simulate folder-like browsing (e.g., `"images/"` lists only objects whose names start with that prefix). The delimiter (typically `"/"`) groups results by common prefixes, enabling hierarchical navigation in GCS's flat namespace. Pagination is controlled via `maxPageResults` and `nextPageToken`. Use the token from the previous response to fetch the next page.

Syntax
```javascript
//return List type
var risp = utils.listGoogleCloudStorageObjects(
	bucketName, //String
	prefix, //String
	delimiter //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| bucketName | String | the name of the bucket to list objects from | 
| prefix | String | an object name prefix to filter results (e.g., `"folder/"`); pass `null` for no prefix filtering | 
| delimiter | String | a delimiter to use for grouping object names (typically `"/"`); pass `null` for no grouping | 

> ✅ **Returns**
>
> a `GooglePaginatedList` of `File` objects with a next page token if more results are available

> ⚠️ **Throws**
>
> - `Throwable` if the GCS API call fails or authentication fails


---

## matchTensorFlowCsvResults

Read a CSV file stored in Google Cloud Storage and save its content in a temporary table, having the structure: APPLICATION_ID,ENV,TOPIC,PROGRESSIVE,RECORD_ID,PREDICTION, where records already exists and must be updated.

Syntax
```javascript
//return String type
var risp = utils.matchTensorFlowCsvResults(
	dirId, //Long
	dataSourceId, //Long
	tableName, //String
	jsObj //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dirId | Long | directory identifier related to a bucket name in the Google Cloud Storage, where saving the CSV file | 
| dataSourceId | Long | optional data source id to use when writing the CSV content to a tmp or specified) table | 
| tableName | String | tmp table, created on the fly or an already existing one | 
| jsObj | Map | response returned by the callback | 

> ✅ **Returns**
>
> table name just created or the one specified as argument

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## maybeStartProcess

Check if the process is already running: only if it is not, then start it.

Syntax
```javascript
//return String type
var risp = utils.maybeStartProcess(
	schedId, //Long
	forceRunning, //Boolean
	startNextProcesses //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| schedId | Long | scheduler id (PK of CON48_SCHED_PROCESS) | 
| forceRunning | Boolean | to force process executing, independently of the fact it is already running | 
| startNextProcesses | Boolean | to auto-start also the children processed and not only the current one | 

> ✅ **Returns**
>
> { success: true|false, errorCode: "...", exitCode: "...", exitMessage: "..." } success = true if the process has been started correctly; in this case, "exitCode" and "exitMessage" will contain the result provided bt the process at the end of the execution success = false, if case of errors: - errorCode = "ALREADY_RUNNING" if the process is already running - errorCode = "NOT_FOUND" if the specified process does not exist


---

## mergeDocx

Starting from a list of already existing docx files, stored in the same location, merge them and product a new one.

Syntax
```javascript
utils.mergeDocx(
	srcDirId, //Long
	docxNames, //String[]
	destDirId, //Long
	mergedDocxName, //String
	deleteFilesAfterMerge //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| srcDirId | Long | directory id where all source docx files are located | 
| docxNames | String[] | list of file names, related to docx files to merge; they must NOT contain the absolute path | 
| destDirId | Long | directory id where the new merged docx file will be stored | 
| mergedDocxName | String | new docx file to generate, created by merging all source docx files | 
| deleteFilesAfterMerge | Boolean | flag used to delete automatically (or not) the source docx files | 

> ⚠️ **Throws**
>
> - `Throwable` if merging fails (e.g. source files not found, destination not writable)


---

## mergeObjectOnGoogleDatastore

Performs a merge (partial update) of an entity in Google Datastore. Fetches the current entity from Datastore using the PK value from `attributesToSet`, then overlays only the provided attributes while preserving all other existing attributes. Attributes listed in `attributesToSetToNull` are explicitly removed from the entity. This is useful when you only need to update a few fields without overwriting the entire entity. After a successful merge, both the partial result cache and entity cache are cleared.

Syntax
```javascript
//return boolean type
var risp = utils.mergeObjectOnGoogleDatastore(
	attributesToSet, //Map
	attributesToSetToNull, //String[]
	dataModelId, //Long
	interruptExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| attributesToSet | Map | a `Map` containing the attributes to set/update; keys are attribute names (camelCase as defined in the data model), values are the new field values (String, Number, Date, etc.); must include the PK attribute(s) to identify the entity | 
| attributesToSetToNull | String[] | an array of attribute names to explicitly remove (set to null) from the entity; pass `null` if no attributes should be removed | 
| dataModelId | Long | the platform data model ID that defines the entity structure | 
| interruptExecution | Boolean | if `true`, exceptions are re-thrown; if `false`, errors are logged and the method returns `false` | 

> ✅ **Returns**
>
> `true` if the merge succeeded, `false` if it failed and `interruptExecution` is `false`

> ⚠️ **Throws**
>
> - `Throwable` if the merge fails and `interruptExecution` is `true`


---

## mergeObjectOnGoogleSpanner

Starting from the PK included in the passed obj, fetch the current content of the entity from the Datastore and re-fill the attributes passed forward, with the ones included in obj. The others remain as they are.

Syntax
```javascript
//return boolean type
var risp = utils.mergeObjectOnGoogleSpanner(
	attributesToSet, //Map
	attributesToSetToNull, //String[]
	dataModelId, //Long
	interruptExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| attributesToSet | Map | attribute to set | 
| attributesToSetToNull | String[] | list of attributes to remove | 
| dataModelId | Long | data model id, used to compare the attribute value types | 
| interruptExecution | Boolean | boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue | 


---

## modifyGoogleCalendarEventWithSettings

Modifies an existing event in the user's primary Google Calendar with full settings. Uses platform-default credentials (service account, private key, user email from internal state). The event is identified by its Google Calendar event ID and all provided fields are updated.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| calendarEventId | String | the Google Calendar event ID to modify | 
| title | String | the new event title/summary | 
| beginDate | Date | the new event start date and time | 
| endDate | Date | the new event end date and time | 
| description | String | the new event description body; may be `null` to leave unchanged | 
| location | String | the new event location string; may be `null` to leave unchanged | 
| creatorEmail | String | the email of the event creator/organizer; may be `null` | 
| attendeeEmails | String[] | varargs list of attendee email addresses; replaces existing attendees if provided | 

> ✅ **Returns**
>
> the updated `CalendarEvent` as returned by the Google Calendar API

> ⚠️ **Throws**
>
> - `Throwable` if the Google Calendar API call fails
- `Exception` if the user email is null or empty, or if the API returns `null`


---

## modifyGoogleCalendarEvent

Modifies an existing event in the user's primary Google Calendar using platform-default credentials. Only updates title and time range. For updating description, location, or attendees, use `modifyGoogleCalendarEventWithSettings`.

Syntax
```javascript
//return CalendarEvent type
var risp = utils.modifyGoogleCalendarEvent(
	calendarEventId, //String
	title, //String
	beginDate, //Date
	endDate //Date
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| calendarEventId | String | the Google Calendar event ID to modify | 
| title | String | the new event title/summary | 
| beginDate | Date | the new event start date and time | 
| endDate | Date | the new event end date and time | 

> ✅ **Returns**
>
> the updated `CalendarEvent` as returned by the Google Calendar API

> ⚠️ **Throws**
>
> - `Throwable` if the Google Calendar API call fails


---

## modifyGoogleDriveFileParents

Modifies the parent folders of a file in the current user's Google Drive. Allows adding and/or removing parent folders simultaneously, effectively moving a file between folders or placing it in multiple folders.

Syntax
```javascript
//return File type
var risp = utils.modifyGoogleDriveFileParents(
	userId, //String
	fileId, //String
	parentsToAdd, //String
	parentsToRemove //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate via domain-wide delegation | 
| fileId | String | the Google Drive file ID to modify | 
| parentsToAdd | String | a comma-separated list of folder IDs to add as parents; pass `null` or empty to skip adding | 
| parentsToRemove | String | a comma-separated list of folder IDs to remove as parents; pass `null` or empty to skip removing | 

> ✅ **Returns**
>
> a `File` representing the file with updated parents

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## modifyGoogleDriveFileParents

Modifies the parent folders of a file in the current user's Google Drive. Allows adding and/or removing parent folders simultaneously, effectively moving a file between folders or placing it in multiple folders.

Syntax
```javascript
//return File type
var risp = utils.modifyGoogleDriveFileParents(
	fileId, //String
	parentsToAdd, //String
	parentsToRemove //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileId | String | the Google Drive file ID to modify | 
| parentsToAdd | String | a comma-separated list of folder IDs to add as parents; pass `null` or empty to skip adding | 
| parentsToRemove | String | a comma-separated list of folder IDs to remove as parents; pass `null` or empty to skip removing | 

> ✅ **Returns**
>
> a `File` representing the file with updated parents

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## moveGoogleDriveFile

Moves a file to new parent folder(s) in the current user's Google Drive. The file is removed from its current parent(s) and placed under the specified new parents.

Syntax
```javascript
//return File type
var risp = utils.moveGoogleDriveFile(
	fileId, //String
	newParent, //String
	addToRevision //boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileId | String | the Google Drive file ID to move | 
| newParent | String | the destination folder ID | 
| addToRevision | boolean | if `true` and a homonymous file exists in the destination, merges as a new revision; if `false`, moves without merging | 

> ✅ **Returns**
>
> a `File` representing the moved file

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## moveGoogleDriveFile

Moves a file to new parent folder(s) in the current user's Google Drive. The file is removed from its current parent(s) and placed under the specified new parents.

Syntax
```javascript
//return File type
var risp = utils.moveGoogleDriveFile(
	userId, //String
	fileId, //String
	newParent, //String
	addToRevision //boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate via domain-wide delegation | 
| fileId | String | the Google Drive file ID to move | 
| newParent | String | the destination folder ID | 
| addToRevision | boolean | if `true` and a homonymous file exists in the destination, merges as a new revision; if `false`, moves without merging | 

> ✅ **Returns**
>
> a `File` representing the moved file

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## moveGoogleDriveFile

Moves a file to new parent folder(s) in the current user's Google Drive. The file is removed from its current parent(s) and placed under the specified new parents.

Syntax
```javascript
//return File type
var risp = utils.moveGoogleDriveFile(
	userId, //String
	fileId, //String
	newParents //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate via domain-wide delegation | 
| fileId | String | the Google Drive file ID to move | 
| newParents | String | a comma-separated list of destination folder IDs | 

> ✅ **Returns**
>
> a `File` representing the moved file

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## moveGoogleDriveFile

Moves a file to new parent folder(s) in the current user's Google Drive. The file is removed from its current parent(s) and placed under the specified new parents.

Syntax
```javascript
//return File type
var risp = utils.moveGoogleDriveFile(
	fileId, //String
	newParents //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileId | String | the Google Drive file ID to move | 
| newParents | String | a comma-separated list of destination folder IDs | 

> ✅ **Returns**
>
> a `File` representing the moved file

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## patchGoogleDriveFileProperty

Updates (patches) a custom property value on a Google Drive file or folder, operating as the current user. Unlike `addGoogleDriveFileProperty`, this method updates an existing property's value without removing other properties.

Syntax
```javascript
utils.patchGoogleDriveFileProperty(
	userId, //String
	fileId, //String
	key, //String
	value, //String
	visibility //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate via domain-wide delegation | 
| fileId | String | the Google Drive file or folder ID | 
| key | String | the property name (key) to update | 
| value | String | the new property value | 
| visibility | String | the property visibility: `"PUBLIC"` or `"PRIVATE"` | 

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## patchGoogleDriveFileProperty

Updates (patches) a custom property value on a Google Drive file or folder, operating as the current user. Unlike `addGoogleDriveFileProperty`, this method updates an existing property's value without removing other properties.

Syntax
```javascript
utils.patchGoogleDriveFileProperty(
	fileId, //String
	key, //String
	value, //String
	visibility //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileId | String | the Google Drive file or folder ID | 
| key | String | the property name (key) to update | 
| value | String | the new property value | 
| visibility | String | the property visibility: `"PUBLIC"` or `"PRIVATE"` | 

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## popElement

Removes an element from a queue by UUID. This is a no-op stub for non-AppEngine environments.

Syntax
```javascript
utils.popElement(
	queueName, //String
	uuid, //String
	namespace //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| queueName | String | the name of the queue | 
| uuid | String | the unique identifier of the element to remove | 
| namespace | String | the namespace | 

> ⚠️ **Throws**
>
> - `Exception` if the operation fails


---

## popValueFromRedis

Removes and returns the first element from a Redis list (LPOP operation).

Syntax
```javascript
//return String type
var risp = utils.popValueFromRedis(
	key //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| key | String | the Redis key identifying the list | 

> ✅ **Returns**
>
> the first element of the list, or `null` if the list is empty or does not exist

> ⚠️ **Throws**
>
> - `Throwable` if the Redis operation fails


---

## prepareStripePayment

return a JSON string to pass back for the UI, in order to correctly setup the payment form with the right price

Syntax
```javascript
//return String type
var risp = utils.prepareStripePayment(
	apiKey, //String
	publicKey, //String
	priceWithCents, //Long
	currency, //String
	customerId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| apiKey | String |  | 
| publicKey | String |  | 
| priceWithCents | Long |  | 
| currency | String |  | 
| customerId | String |  | 

> ✅ **Returns**
>
> a JSON string to pass back for the UI, in order to correctly setup the payment form with the right price


---

## pushValuesToRedis

Appends one or more values to the end of a Redis list (RPUSH operation). If the key does not exist, a new list is created.

Syntax
```javascript
utils.pushValuesToRedis(
	key, //String
	values //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| key | String | the Redis key identifying the list | 
| values | String[] | one or more string values to append to the list | 

> ⚠️ **Throws**
>
> - `Throwable` if the Redis operation fails


---

## recoverGoogleDriveFile

Recovers a file from the current user's Google Drive trash. Restores a previously trashed file back to its original location.

Syntax
```javascript
//return File type
var risp = utils.recoverGoogleDriveFile(
	userId, //String
	fileId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate via domain-wide delegation | 
| fileId | String | the Google Drive file ID to recover from trash | 

> ✅ **Returns**
>
> a `File` representing the recovered file

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## recoverGoogleDriveFile

Recovers a file from the current user's Google Drive trash. Restores a previously trashed file back to its original location.

Syntax
```javascript
//return File type
var risp = utils.recoverGoogleDriveFile(
	fileId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileId | String | the Google Drive file ID to recover from trash | 

> ✅ **Returns**
>
> a `File` representing the recovered file

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## reinsertElements

Reinserts elements into a processing queue. This operation is only supported on Google App Engine environments.

Syntax
```javascript
//return int type
var risp = utils.reinsertElements(
	companyId, //String
	actionId, //Long
	queueName, //String
	status, //String
	id //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| companyId | String | the company identifier | 
| actionId | Long | the action ID associated with the queue elements | 
| queueName | String | the name of the queue | 
| status | String | the status filter for elements to reinsert | 
| id | String | optional specific element ID to reinsert; if `null`, all matching elements are reinserted | 

> ✅ **Returns**
>
> the number of elements reinserted

> ⚠️ **Throws**
>
> - `Throwable` always throws `UnsupportedOperationException` in this implementation


---

## removeGoogleDriveFilePermissions

Remove one permission on a file for user

Syntax
```javascript
utils.removeGoogleDriveFilePermissions(
	userId, //String
	fileId, //String
	emailUser //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. | 
| fileId | String | id of Google file | 
| emailUser | String |  | 

> ⚠️ **Throws**
>
> - `Throwable`


---

## removeGoogleDriveFilePermissions

Remove one permission on a file for user

Syntax
```javascript
utils.removeGoogleDriveFilePermissions(
	fileId, //String
	emailUser //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileId | String | id of Google file | 
| emailUser | String |  | 

> ⚠️ **Throws**
>
> - `Throwable`


---

## removeValueInCache

Remove a value from the shared web cache.

Syntax
```javascript
utils.removeValueInCache(
	varName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| varName | String | variable name | 


---

## removeValuesFromCache

Remove multiple values from cache: the one whose key starts with the specified pattern.

Syntax
```javascript
utils.removeValuesFromCache(
	keyPrefix //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| keyPrefix | String | key radix used to filter values to remove | 


---

## rewriteGoogleCloudStorageObject

Copies an object and its metadata to a new destination, supporting cross-region and cross-storage-class transfers. Unlike `copyGoogleCloudStorageObject`, this method uses the GCS "rewrite" operation which handles objects between different regions or storage classes. It may require multiple requests for large objects (handled internally by the server bean). When bucket versioning is enabled, a specific version can be rewritten.

Syntax
```javascript
//return File type
var risp = utils.rewriteGoogleCloudStorageObject(
	sourceBucketName, //String
	sourceObjectName, //String
	sourceObjectVersion, //Long
	destinationBucketName, //String
	destinationObjectName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sourceBucketName | String | the name of the bucket containing the source object | 
| sourceObjectName | String | the full path/name of the source object | 
| sourceObjectVersion | Long | the generation number of the specific version to rewrite; pass `null` to rewrite the latest (live) version | 
| destinationBucketName | String | the name of the destination bucket (can be a different region/class) | 
| destinationObjectName | String | the full path/name for the object in the destination bucket | 

> ✅ **Returns**
>
> a `File` representing the newly created object at the destination

> ⚠️ **Throws**
>
> - `Throwable` if the GCS API call fails, authentication fails, or the source object does not exist


---

## scaleJpgFile

Scale jpg file

Syntax
```javascript
utils.scaleJpgFile(
	srcJpgDirId, //Long
	srcJpgFileName, //String
	destDirId, //Long
	destFileName, //String
	scale //Double
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| srcJpgDirId | Long | folder identifier, where the input JPG file is already stored | 
| srcJpgFileName | String | TIFF file name, stored in the folder identified by pdfDirId | 
| destDirId | Long | folder identifier, where the image will be saved | 
| destFileName | String | jpeg/png file name to create | 
| scale | Double | factor to use for calculate new dimension | 

> ⚠️ **Throws**
>
> - `Throwable`


---

## scaleJpgFile

Scale jpg file

Syntax
```javascript
utils.scaleJpgFile(
	srcJpgDirId, //Long
	srcJpgFileName, //String
	destDirId, //Long
	destFileName, //String
	maxWidth, //Long
	maxHeight //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| srcJpgDirId | Long | folder identifier, where the input JPG file is already stored | 
| srcJpgFileName | String | TIFF file name, stored in the folder identified by pdfDirId | 
| destDirId | Long | folder identifier, where the image will be saved | 
| destFileName | String | jpeg/png file name to create | 
| maxWidth | Long | maximum allowed width in pixels; the image will be scaled down if wider (0 means no width constraint) | 
| maxHeight | Long | maximum allowed height in pixels; the image will be scaled down if taller (0 means no height constraint) | 

> ⚠️ **Throws**
>
> - `Throwable`


---

## searchInGoogleDrive

Searches for files in the current user's Google Drive with pagination support. Supports filtering by folder, query, and trash status. Results are paginated and can be iterated using the next page token returned in the result.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| maxPageResults | Integer | the maximum number of results per page; if `null`, uses the API default | 
| pages | Integer | the number of pages to load; if `null`, loads all pages | 
| nextPageToken | String | a page token from a previous call to continue pagination; if `null`, starts from the first page | 
| folderId | String | the folder ID to search within (non-recursive unless `recursive` is `true`); pass `null` to search across the entire Drive | 
| recursive | Boolean | if `true`, searches recursively within the folder and its subfolders | 
| query | String | a Google Drive API query string to filter results (e.g., `"name contains 'report'"`, `"mimeType = 'application/pdf'"`); pass `null` for no additional filtering | 
| trashed | Boolean | if `true`, includes trashed files; if `false` or `null`, excludes them | 

> ✅ **Returns**
>
> a `GooglePaginatedList` containing the matching files and a next page token if available

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## searchInGoogleDrive

Searches for files in the current user's Google Drive with pagination support. Supports filtering by folder, query, and trash status. Results are paginated and can be iterated using the next page token returned in the result.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate via domain-wide delegation | 
| maxPageResults | Integer | the maximum number of results per page; if `null`, uses the API default | 
| pages | Integer | the number of pages to load; if `null`, loads all pages | 
| nextPageToken | String | a page token from a previous call to continue pagination; if `null`, starts from the first page | 
| folderId | String | the folder ID to search within (non-recursive unless `recursive` is `true`); pass `null` to search across the entire Drive | 
| recursive | Boolean | if `true`, searches recursively within the folder and its subfolders | 
| query | String | a Google Drive API query string to filter results (e.g., `"name contains 'report'"`, `"mimeType = 'application/pdf'"`); pass `null` for no additional filtering | 
| trashed | Boolean | if `true`, includes trashed files; if `false` or `null`, excludes them | 

> ✅ **Returns**
>
> a `GooglePaginatedList` containing the matching files and a next page token if available

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## sendOAuth2Request

Sends an authenticated HTTP request to an OAuth2-protected resource. Uses the provided access token to authenticate the request to the specified URL and returns the response body.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| clientId | String | the OAuth2 client ID | 
| clientSecret | String | the OAuth2 client secret | 
| callback | String | the callback URL | 
| scope | String | the OAuth2 scope(s) | 
| accessTokenEndpoint | String | the provider's token endpoint URL | 
| authorizationBaseUrl | String | the provider's authorization endpoint base URL | 
| accessToken | String | the OAuth2 access token to use for authentication | 
| requestUrl | String | the URL of the protected resource to request | 

> ✅ **Returns**
>
> the response body as a string

> ⚠️ **Throws**
>
> - `Exception` if the HTTP request fails


---

## sendPushNotificationWithOptions

Send a Push notification to all devices linked to the specified user code ids, with additional customization options. For each user, all registered devices (with a valid Firebase ID) will receive the notification. The Firebase Cloud Messaging (FCM) HTTP v1 API is used.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| appId | String | application identifier | 
| userCodeIds | String[] | list of user code ids to send the notification to | 
| title | String | push notification title | 
| shortMessage | String | push notification body text (mandatory) | 
| actionId | Long | action id to invoke on the mobile device when the user taps the notification | 
| json | String | JSON payload to pass to the mobile action | 
| badgeNr | Long | badge number for iOS devices (optional; defaults to 1 if not specified) | 
| rootOptions | Map | additional root-level options to merge into the FCM message (e.g., android, webpush, apns configs); can be null | 
| dataOptions | Map | additional key-value pairs to merge into the data payload; can be null | 
| notificationOptions | Map | additional key-value pairs to merge into the notification object; can be null | 

> ✅ **Returns**
>
> a JSON array string with the FCM response for each device notification sent, or null if Firebase is not configured

> ⚠️ **Throws**
>
> - `Throwable` in case of server communication or Firebase API errors


---

## sendPushNotification

Send a Push message to all devices identified by their deviceIds, starting from the list of linked user code ids. The generated Push message to send is expressed in JSON format and composed of the specified info.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| appId | String |  | 
| userCodeIds | String[] | list of user code ids; they will be used to get the corresponding device ids and send to them the Push message | 
| title | String | Push message title | 
| shortMessage | String | Push message text (mandatory) | 
| actionId | Long | action id to invoke in the mobile device when the end user presses on the notification or on the message shown inside the app | 
| json | String | text expressed in JSON format to pass to the action | 
| badgeNr | Long | (only for iOS and optional: if not specified, it is set to 1); used to show the nr of unread messages on the app icon on Apple Devices This method will fire an exception in case of errors. | 


---

## sendSinglePushNotification

Send a Push notification to a single device identified by its Firebase registration token. Uses Firebase Cloud Messaging (FCM) HTTP v1 API. If the firebaseId is null/empty, sends to the "news" topic instead.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| appId | String | application identifier | 
| firebaseId | String | the Firebase registration token of the target device; if null/empty, message is sent to the "news" topic | 
| title | String | push notification title | 
| shortMessage | String | push notification body text | 
| actionId | Long | action id to invoke on the mobile device when the user taps the notification | 
| json | String | JSON payload to pass to the mobile action | 
| badgeNr | Long | badge number for iOS devices (optional) | 
| rootOptions | Map | additional root-level options to merge into the FCM message (e.g., android, webpush, apns configs); can be null | 
| dataOptions | Map | additional key-value pairs to merge into the data payload; can be null | 
| notificationOptions | Map | additional key-value pairs to merge into the notification object; can be null | 

> ✅ **Returns**
>
> a JSON string with the FCM API response

> ⚠️ **Throws**
>
> - `Throwable` in case of Firebase API or authentication errors


---

## sendSmsMessage

Send an SMS message through some carrier.

Syntax
```javascript
//return String type
var risp = utils.sendSmsMessage(
	fromPhoneNr, //String
	toPhoneNr, //String
	text, //String
	logMessage //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fromPhoneNr | String | phone number used to identify the starting device | 
| toPhoneNr | String | phone number where the message will be sent | 
| text | String | text message to send | 
| logMessage | Boolean |  | 

> ✅ **Returns**
>
> outcome, expressed as a JSON string, containing: { "success": true } if the operation has been completed successfully, { "success": false, "message": "..." } otherwise Important note: an SMS provider must be configured first. Two alternatives are allowed: - Twilio web service; you have to configure two parameters: TWILIO_ACCOUNT_ID and TWILIO_AUTH_TOKEN - an email gateway can be used; in that case, you have to configure the SMS_SMTP_xxx parameters and the phone numbers must be expressed appropriately Pay attention to the phone number format, with should always include the international prefix: e.g. +0039....


---

## sendTensorFlowCsvFromCsv

Execute the following steps: - upload the csv file received in input into GCS - insert a record for each line in the csv into the specified table, in order to index progressive+row id (if fieldName has been specified) - send a request to a TensorFlow web installation with the specified json content and wait for an answer at the specified callback.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| csvFilePath | String | absolute path + csv file name to read and upload on GCS; this file will be deleted after being upload on the cloud | 
| includeFirstRow | Boolean | flag used to include or not a first row at the bebgnning of the csv file: false if the csv file already contains it | 
| includeRowNum | Boolean | flag used to include or not a first column with the progressive: false if the csv file already contains it | 
| resultValuesNr | int | list of integer result values | 
| dirId | Long | directory identifier related to a bucket name in the Google Cloud Storage, where saving the CSV file | 
| topic | String | model name | 
| cmd | String | operation to execute: training/testing/prediction | 
| pkIndex | Long |  | 
| jsObj | Map | javascript object containing all required by TensorFlow to process the request | 

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## sendTensorFlowCsvFromSqlQuery

Execute the following steps: - extract data starting from the specified SQL query - save it into a CSV file, automatically named like: "appid_env_topic_cmd.csv" - upload it in the specified bucket on Google Cloud Storage, with the specified name - send a request to a TensorFlow web installation with the specified json content and wait for an answer at the specified callback. Optionally, if fieldName has been filled, create a temp table or use the one specified by tableName, and save for each record read its row id (e.g the pk), identified by fieldName. Such a table must the following structure: APPLICATION_ID,ENV,TOPIC,PROGRESSIVE,RECORD_ID,PREDICTION where PREDICTION is not set atm, but only when receiving a prediction from TernsorFlow

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sql | String | SQL query to execute; field names specified in the SELECT clause will be used as column headers in the first row, in case includeHeaders is set to true | 
| dataSourceId | Long | optional data source id to use when executing the SQL query | 
| fromRow | Long | optional if not specified, starts reading the query content from the first row, otherwise starts from the specified index (1...) | 
| maxRowsToRead | Long | if not specified, read the whole query content (starting from the specified "fromRow"), otherwise read only the specified amount of rows | 
| fieldName | String | optional field name to use, identifying a record, used to save data coming from the SQL query (helpful for predictions) | 
| resultValuesNr | Integer | list of integer result values | 
| dirId | Long | directory identifier related to a bucket name in the Google Cloud Storage, where saving the CSV file | 
| fileName | String | file name | 
| jsObj | Map | javascript object containing all required by TensorFlow to process the request | 

> ✅ **Returns**
>
> UUID identifier for the request sent to the TensorFlow web installation

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## sendWhatsappMessage

WHATSAPP

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| accountId | String | the Twilio account SID used for authentication | 
| secretKey | String | the Twilio auth token (secret key) | 
| fromNr | String | the sender's WhatsApp-enabled phone number | 
| toNumber | String | the recipient's phone number (e.g. "+393331234567"); if no "+" prefix is present, "+39" is automatically prepended | 
| message | String | the text body of the WhatsApp message | 
| bucketName | String | the Google Cloud Storage bucket name containing the media file; pass `null` to send a text-only message | 
| fileName | String | the object name within the bucket to attach; pass `null` to send a text-only message | 

> ✅ **Returns**
>
> the JSON response body from the Twilio Messages API

> ⚠️ **Throws**
>
> - `Throwable` if the HTTP call to Twilio fails
- `RuntimeException` if the sender phone number is not configured in the platform


---

## sendWhatsappMessage

WHATSAPP

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| accountId | String | the Twilio account SID used for authentication | 
| secretKey | String | the Twilio auth token (secret key) | 
| fromNr | String | the sender's WhatsApp-enabled phone number | 
| toNumber | String | the recipient's phone number (e.g. "+393331234567"); if no "+" prefix is present, "+39" is automatically prepended | 
| message | String | the text body of the WhatsApp message | 
| publicUrl | String | optional publicly accessible URL of a media file to attach; pass `null` to send a text-only message | 

> ✅ **Returns**
>
> the JSON response body from the Twilio Messages API

> ⚠️ **Throws**
>
> - `Throwable` if the HTTP call to Twilio fails
- `RuntimeException` if the sender phone number is not configured in the platform


---

## sendWhatsappMessage

WHATSAPP

Syntax
```javascript
//return String type
var risp = utils.sendWhatsappMessage(
	toNumber, //String
	message, //String
	bucketName, //String
	fileName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| toNumber | String | the recipient's phone number (e.g. "+393331234567"); if no "+" prefix is present, "+39" is automatically prepended | 
| message | String | the text body of the WhatsApp message | 
| bucketName | String | the Google Cloud Storage bucket name containing the media file; pass `null` to send a text-only message | 
| fileName | String | the object name within the bucket to attach; pass `null` to send a text-only message | 

> ✅ **Returns**
>
> the JSON response body from the Twilio Messages API

> ⚠️ **Throws**
>
> - `Throwable` if the HTTP call to Twilio fails
- `RuntimeException` if the sender phone number is not configured in the platform


---

## sendWhatsappMessage

WHATSAPP

Syntax
```javascript
//return String type
var risp = utils.sendWhatsappMessage(
	toNumber, //String
	message, //String
	publicUrl //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| toNumber | String | the recipient's phone number (e.g. "+393331234567"); if no "+" prefix is present, "+39" is automatically prepended | 
| message | String | the text body of the WhatsApp message | 
| publicUrl | String | optional publicly accessible URL of a media file to attach; pass `null` to send a text-only message | 

> ✅ **Returns**
>
> the JSON response body from the Twilio Messages API

> ⚠️ **Throws**
>
> - `Throwable` if the HTTP call to Twilio fails
- `RuntimeException` if the sender phone number is not configured in the platform


---

## setBigQueryDataset

Set the default BigQuery dataset name to use for subsequent BigQuery operations.

Syntax
```javascript
utils.setBigQueryDataset(
	bigQueryDataset //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| bigQueryDataset | String | the BigQuery dataset name to set as default | 


---

## setBlockSize

Sets the block size (page size) for paginated query results. Affects subsequent query executions to return at most N rows per page.

Syntax
```javascript
utils.setBlockSize(
	blockSize //int
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| blockSize | int | the maximum number of rows to return per page | 


---

## setDatasetId

Set dataset id for the Google Datastore. Helpful in case of statelss ws

Syntax
```javascript
utils.setDatasetId(
	datasetId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| datasetId | String |  | 


---

## setDatastoreNamespace

Set the Google Datastore namespace for subsequent Datastore operations.

Syntax
```javascript
utils.setDatastoreNamespace(
	namespace //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| namespace | String | the Datastore namespace to use | 


---

## setGoogleClientId

Set the Google OAuth2 Client ID for the current session. Useful in stateless web service scenarios where Google credentials need to be configured programmatically.

Syntax
```javascript
utils.setGoogleClientId(
	id //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| id | String | the Google OAuth2 Client ID | 


---

## setGoogleClientSecret

Set the Google OAuth2 Client Secret for the current session. Useful in stateless web service scenarios where Google credentials need to be configured programmatically.

Syntax
```javascript
utils.setGoogleClientSecret(
	pwd //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| pwd | String | the Google OAuth2 Client Secret | 


---

## setGoogleCloudStorageBucketVersioning

Enables or disables object versioning for the specified bucket. When versioning is enabled, GCS retains previous versions of objects when they are overwritten or deleted. Disabling versioning stops creating new versions but does not delete existing archived versions.

Syntax
```javascript
//return FileContainer type
var risp = utils.setGoogleCloudStorageBucketVersioning(
	bucketName, //String
	versioning //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| bucketName | String | the name of the bucket to configure | 
| versioning | Boolean | `true` to enable object versioning, `false` to disable it | 

> ✅ **Returns**
>
> a `FileContainer` representing the updated bucket with its metadata

> ⚠️ **Throws**
>
> - `Throwable` if the GCS API call fails, authentication fails, or the bucket does not exist


---

## setGoogleDriveFileAttributes

Sets attributes (metadata) on a Google Drive file or folder for the current user.

Syntax
```javascript
utils.setGoogleDriveFileAttributes(
	userId, //String
	fileId, //String
	fileAttributes //FileAttributes
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate via domain-wide delegation | 
| fileId | String | the Google Drive file or folder ID | 
| fileAttributes | FileAttributes | the `FileAttributes` object containing the metadata to set | 

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## setGoogleDriveFileAttributes

Sets attributes (metadata) on a Google Drive file or folder for the current user.

Syntax
```javascript
utils.setGoogleDriveFileAttributes(
	fileId, //String
	fileAttributes //FileAttributes
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileId | String | the Google Drive file or folder ID | 
| fileAttributes | FileAttributes | the `FileAttributes` object containing the metadata to set | 

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## setGoogleDriveFilePermissions

Sets permissions on a Google Drive file or folder for the current user. Grants the specified role to a user, group, domain, or anyone. A notification email with an optional message can be sent to the grantee.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate via domain-wide delegation | 
| fileId | String | the Google Drive file or folder ID | 
| type | String | the grantee type: `"user"`, `"group"`, `"domain"`, or `"default"` | 
| value | String | the email address or domain name of the grantee | 
| role | String | the role to grant: `"reader"`, `"writer"`, or `"owner"` | 
| additionalRoles | String> | additional capabilities (e.g., `"commenter"`); may be `null` | 
| sendNotifications | boolean | if `true`, sends a notification email to the grantee | 
| message | String | a custom message to include in the notification email; may be `null` | 

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## setGoogleDriveFilePermissions

Sets permissions on a Google Drive file or folder for the current user. Grants the specified role to a user, group, domain, or anyone. A notification email with an optional message can be sent to the grantee.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileId | String | the Google Drive file or folder ID | 
| type | String | the grantee type: `"user"`, `"group"`, `"domain"`, or `"default"` | 
| value | String | the email address or domain name of the grantee | 
| role | String | the role to grant: `"reader"`, `"writer"`, or `"owner"` | 
| additionalRoles | String> | additional capabilities (e.g., `"commenter"`); may be `null` | 
| sendNotifications | boolean | if `true`, sends a notification email to the grantee | 
| message | String | a custom message to include in the notification email; may be `null` | 

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## setGooglePrivateKeyString

Set the Google private key string (PEM-encoded) for the current session. Useful in stateless web service scenarios where Google credentials need to be configured programmatically.

Syntax
```javascript
utils.setGooglePrivateKeyString(
	key //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| key | String | the Google private key string (base64-encoded or PEM format) | 


---

## setGoogleServiceAccountEmail

Set the Google service account email for the current session. Useful in stateless web service scenarios where Google credentials need to be configured programmatically.

Syntax
```javascript
utils.setGoogleServiceAccountEmail(
	email //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| email | String | the Google service account email address | 


---

## setGoogleTokenResponse

Set the Google OAuth2 token response (JSON) for the current session. Useful in stateless web service scenarios where Google credentials need to be configured programmatically.

Syntax
```javascript
utils.setGoogleTokenResponse(
	token //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| token | String | the Google OAuth2 token response as a JSON string | 


---

## setPublicLink

Sets or removes public read access for an object in a Google Cloud Storage bucket. When public access is enabled, the object can be accessed via its public URL (`https://storage.googleapis.com//`) without authentication.

Syntax
```javascript
utils.setPublicLink(
	bucketName, //String
	objectName, //String
	publicLink //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| bucketName | String | the name of the bucket containing the object | 
| objectName | String | the full path/name of the object within the bucket | 
| publicLink | Boolean | if `true`, makes the object publicly readable; if `false`, removes public access | 

> ⚠️ **Throws**
>
> - `Throwable` if the GCS API call fails, authentication fails, or the object does not exist


---

## setStartIndex

Sets the start index (offset) for paginated query results. Affects subsequent query executions to skip the first N rows.

Syntax
```javascript
utils.setStartIndex(
	startIndex //int
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| startIndex | int | the zero-based start index for result pagination | 


---

## setTaskAssignee

Assign a task to a specific user in the Activiti BPM engine.

Syntax
```javascript
utils.setTaskAssignee(
	taskId, //String
	assignee //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| taskId | String | the task instance ID | 
| assignee | String | the username to assign the task to | 

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## setValueInRedis

Stores a value in Redis with no expiration timeout.

Syntax
```javascript
utils.setValueInRedis(
	key, //String
	value, //Object
	timeout //Integer
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| key | String | the Redis key under which to store the value | 
| value | Object | the value to store (will be serialized) | 
| timeout | Integer | the expiration timeout in seconds; after this time the key will be automatically removed | 

> ⚠️ **Throws**
>
> - `Throwable` if the Redis operation fails


---

## setValueInRedis

Stores a value in Redis with no expiration timeout.

Syntax
```javascript
utils.setValueInRedis(
	key, //String
	value //Object
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| key | String | the Redis key under which to store the value | 
| value | Object | the value to store (will be serialized) | 

> ⚠️ **Throws**
>
> - `Throwable` if the Redis operation fails


---

## sharedContatctsSync

Triggers the domain shared contacts synchronization process for all configured applications. This initiates a background sync that updates the shared contact list across all platform applications that have contact synchronization configured. @throws Throwable if the synchronization process fails to start or encounters an error @implNote Invokes `ServerProxyFactory.getServerProxy().serverCall("WAGContactsSynchronizerBean", "doSync")`.

Syntax
```javascript
utils.sharedContatctsSync();
```

> ⚠️ **Throws**
>
> - `Throwable` if the synchronization process fails to start or encounters an error


---

## startActivitiProcess

Start a new Activiti process instance for the given BPMN 2.0 process definition. Sends a POST request to the Activiti REST API to create a new process instance, passing the provided process variables as initial execution context. Variable names are automatically converted from camelCase to underscore notation.

Syntax
```javascript
//return Map type
var risp = utils.startActivitiProcess(
	appId, //String
	processDefinitionId, //String
	params, //Map
	processVariables //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| appId | String | the application identifier (currently unused in the REST call but reserved for multi-app context) | 
| processDefinitionId | String | the unique identifier of the BPMN 2.0 process definition to instantiate (e.g. "SIN00000_myProcess:1:12345") | 
| params | Map | configuration map; may contain keys: _(details below)_ | 
| processVariables | Map | a map of variable names to values to set on the newly created process instance; all values are serialized as strings in the REST payload | 

#### `params`

configuration map; may contain keys:
- `username` — overrides the current session username for Activiti authentication
- `password` — overrides the current session password for Activiti authentication
- `ACTIVITI_BASE_REST_URL` — fallback base URL for the Activiti REST service

> ✅ **Returns**
>
> a Map containing: `success` (Boolean) — `true` if the process was started successfully `id` (String) — the runtime process instance ID (only when success is true) `msg` (String) — error message (only when success is false)


---

## unzipFile

Unzip the specified zip file in the specified folder, always in the server file system.

Syntax
```javascript
utils.unzipFile(
	zipDirId, //Long
	zipFileName, //String
	serverFileSystemDir //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| zipDirId | Long |  | 
| zipFileName | String |  | 
| serverFileSystemDir | String |  | 


---

## updateBigQueryObject

Update a single object in a BigQuery table by constructing an UPDATE DML statement from the provided Map keys and values. Map keys are converted from camelCase to UPPER_SNAKE_CASE column names. The WHERE clause is built using the specified primary key columns.

Syntax
```javascript
//return Long type
var risp = utils.updateBigQueryObject(
	datasetName, //String
	tableName, //String
	obj, //Map
	pks //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| datasetName | String | the BigQuery dataset name | 
| tableName | String | the name of the table to update | 
| obj | Map | a Map representing the record to update; keys are camelCase field names, values are the new column values (including PK values for the WHERE clause) | 
| pks | String[] | varargs list of primary key column names (in UPPER_SNAKE_CASE) used to build the WHERE clause | 

> ✅ **Returns**
>
> the number of rows updated

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## updateCard

Update an existing card in Archiflow.

Syntax
```javascript
//return Map type
var risp = utils.updateCard(
	dataModelId, //Long
	panelId, //Long
	vo //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dataModelId | Long | the data model identifier defining the card structure | 
| panelId | Long | the panel identifier used for field resolution | 
| vo | Map | a Map representing the card data to update (must contain the card identifier) | 

> ✅ **Returns**
>
> a Map representing the updated card

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## updateCards

Update multiple existing cards in Archiflow in a single operation.

Syntax
```javascript
//return Map[] type
var risp = utils.updateCards(
	dataModelId, //Long
	panelId, //Long
	vos //Map[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dataModelId | Long | the data model identifier defining the card structure | 
| panelId | Long | the panel identifier used for field resolution | 
| vos | Map[] | an array of Maps, each representing a card to update (must contain card identifiers) | 

> ✅ **Returns**
>
> an array of Maps representing the updated cards

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## updateFileInCMS

Import into the embedded CMS a single file found in the location identified by sourceDirId and load it into the location identified by destDirId, by replacing the previous one. The file in the original position will not be removed.

Syntax
```javascript
utils.updateFileInCMS(
	uuid, //String
	sourceDirId, //Long
	fileName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| uuid | String | unique identifier for the already existing file, which will be replaced by the current one | 
| sourceDirId | Long | source location for the file to import | 
| fileName | String | file name to import, located in sourceDirId | 


---

## updateFileInCMS

Import into the embedded CMS a single file found in the location identified by sourceDirId and load it into the location identified by destDirId, by replacing the previous one. The file in the original position will not be removed.

Syntax
```javascript
utils.updateFileInCMS(
	uuid, //String
	path //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| uuid | String | unique identifier for the already existing file, which will be replaced by the current one | 
| path | String | abs path + file name, related to the file to import | 


---

## updateGoogleContact

Updates an existing Google Contact in the user's personal or domain shared contact list. Replaces the contact's name, surname, email, and phone with the provided values. When `shared` is `true`, operates on the domain's Global Address List.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| contactId | String | the unique identifier of the contact to update | 
| name | String | the new first name for the contact | 
| surname | String | the new last name for the contact | 
| email | String | the new email address for the contact | 
| phone | String | the new phone number for the contact | 
| shared | Boolean | if `true`, updates in the domain shared list; if `false` or `null`, updates in the user's personal list | 

> ✅ **Returns**
>
> the updated `Contact` object

> ⚠️ **Throws**
>
> - `Throwable` if the Google Contacts API call fails or authentication fails
- `Exception` if the current user's email is `null` or empty


---

## updateGoogleDriveFileFromFS

Updates a Google Drive file's content from a server file system path, operating as the current user. Reads the file from the server's local file system and uploads it as the new content for the specified Drive file.

Syntax
```javascript
//return File type
var risp = utils.updateGoogleDriveFileFromFS(
	fileId, //String
	fsPath, //String
	deleteFsFile, //boolean
	newRevision //boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileId | String | the Google Drive file ID to update | 
| fsPath | String | the absolute path to the source file on the server's file system | 
| deleteFsFile | boolean | if `true`, deletes the local file after successful upload | 
| newRevision | boolean | if `true`, creates a new revision in Drive's version history; if `false`, overwrites the current revision | 

> ✅ **Returns**
>
> a `File` representing the updated Drive file

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails, authentication fails, or the local file cannot be read


---

## updateGoogleDriveFileFromFS

Updates a Google Drive file's content from a server file system path, operating as the current user. Reads the file from the server's local file system and uploads it as the new content for the specified Drive file.

Syntax
```javascript
//return File type
var risp = utils.updateGoogleDriveFileFromFS(
	userId, //String
	fileId, //String
	fsPath, //String
	deleteFsFile, //boolean
	newRevision //boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate via domain-wide delegation | 
| fileId | String | the Google Drive file ID to update | 
| fsPath | String | the absolute path to the source file on the server's file system | 
| deleteFsFile | boolean | if `true`, deletes the local file after successful upload | 
| newRevision | boolean | if `true`, creates a new revision in Drive's version history; if `false`, overwrites the current revision | 

> ✅ **Returns**
>
> a `File` representing the updated Drive file

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails, authentication fails, or the local file cannot be read


---

## updateGoogleDriveFile

Updates metadata (title, description, MIME type) of a Google Drive file for the specified user. Only updates the file's metadata fields; does not modify the file content.

Syntax
```javascript
//return File type
var risp = utils.updateGoogleDriveFile(
	userId, //String
	fileId, //String
	title, //String
	description, //String
	mimeType //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate via domain-wide delegation | 
| fileId | String | the Google Drive file ID to update | 
| title | String | the new title/name for the file | 
| description | String | the new description for the file; may be `null` | 
| mimeType | String | the new MIME type for the file; may be `null` | 

> ✅ **Returns**
>
> a `File` representing the updated file

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## updateGoogleDriveFile

Updates metadata (title, description, MIME type) of a Google Drive file for the specified user. Only updates the file's metadata fields; does not modify the file content.

Syntax
```javascript
//return File type
var risp = utils.updateGoogleDriveFile(
	fileId, //String
	title, //String
	description, //String
	mimeType //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileId | String | the Google Drive file ID to update | 
| title | String | the new title/name for the file | 
| description | String | the new description for the file; may be `null` | 
| mimeType | String | the new MIME type for the file; may be `null` | 

> ✅ **Returns**
>
> a `File` representing the updated file

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails or authentication fails


---

## updateObjectOnBigQuery

Updates a single record in a Google BigQuery table. The object must contain all fields including primary key fields. Values are automatically converted to match BigQuery column types (same conversion rules as `insertObjectsOnBigQuery`).

Syntax
```javascript
//return boolean type
var risp = utils.updateObjectOnBigQuery(
	obj, //Map
	dataModelId, //Long
	interruptExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| obj | Map | a `Map` representing the record to update; keys are attribute names (camelCase as defined in the data model), values are the field values; must include primary key attribute(s) | 
| dataModelId | Long | the platform data model ID that defines the BigQuery table structure | 
| interruptExecution | Boolean | if `true`, exceptions are propagated to the caller; if `false`, errors are logged and the method returns `false` | 

> ✅ **Returns**
>
> `true` if the update was successful, `false` if an error occurred and `interruptExecution` is `false`

> ⚠️ **Throws**
>
> - `Throwable` if the update fails and `interruptExecution` is `true`


---

## updateObjectOnGoogleDatastore

Updates a single entity in Google Datastore. The entity is identified by its primary key (PK) attribute included in the `obj` map. All attributes in the map are written to Datastore, fully replacing the existing entity content. After a successful update, both the partial result cache and entity cache for this Kind are automatically cleared.

Syntax
```javascript
//return boolean type
var risp = utils.updateObjectOnGoogleDatastore(
	obj, //Map
	dataModelId, //Long
	interruptExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| obj | Map | a `Map` representing the entity to update; keys are attribute names (camelCase as defined in the data model), values are the corresponding field values; must include primary key attribute(s) | 
| dataModelId | Long | the platform data model ID that defines the entity structure | 
| interruptExecution | Boolean | if `true`, exceptions are re-thrown; if `false`, errors are logged and the method returns `false` | 

> ✅ **Returns**
>
> `true` if the update succeeded, `false` if it failed and `interruptExecution` is `false`

> ⚠️ **Throws**
>
> - `Throwable` if the update fails and `interruptExecution` is `true`


---

## updateObjectOnGoogleSpanner

Updates a single record in a Google Cloud Spanner table. The object must contain all fields including the primary key fields, which are used to locate the record to update. Non-PK fields will be overwritten with the provided values.

Syntax
```javascript
//return boolean type
var risp = utils.updateObjectOnGoogleSpanner(
	obj, //Map
	dataModelId, //Long
	interruptExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| obj | Map | a `Map` representing the record to update; keys are attribute names (camelCase as defined in the data model), values are the field values; must include primary key attribute(s) | 
| dataModelId | Long | the platform data model ID that defines the table structure and field mappings | 
| interruptExecution | Boolean | if `true`, exceptions are propagated to the caller; if `false`, errors are logged and the method returns `false` | 

> ✅ **Returns**
>
> `true` if the update was successful, `false` if an error occurred and `interruptExecution` is `false`

> ⚠️ **Throws**
>
> - `Throwable` if the update fails and `interruptExecution` is `true`


---

## updateObjectOnMongoDb

Updates a single document in a MongoDB collection. The target collection is determined by the specified data model. The document to update is identified by its primary key fields (as defined in the data model). The provided Map must contain both the primary key field(s) for identification and all fields to update.

Syntax
```javascript
//return Map type
var risp = utils.updateObjectOnMongoDb(
	obj, //Map
	dataModelId, //Long
	interruptExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| obj | Map | a `Map` containing attribute name/value pairs for the document to update; must include the primary key field(s) for document identification, plus all fields that should be updated (camelCase attribute names) | 
| dataModelId | Long | the platform data model ID that defines the MongoDB collection and document structure | 
| interruptExecution | Boolean | if `true`, exceptions are re-thrown to the caller; if `false`, errors are logged and the original map is still returned | 

> ✅ **Returns**
>
> the input `obj` Map

> ⚠️ **Throws**
>
> - `Throwable` if the update fails and `interruptExecution` is `true`


---

## updateObjectsOnBigQuery

Updates multiple records in a Google BigQuery table. Each map in the array must contain all fields including primary key fields. Values are automatically converted to match BigQuery column types.

Syntax
```javascript
//return boolean type
var risp = utils.updateObjectsOnBigQuery(
	objs, //Map[]
	dataModelId, //Long
	interruptExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| objs | Map[] | an array of `Map` objects, each representing a record to update; keys are attribute names, values are field values; each must include PK attribute(s) | 
| dataModelId | Long | the platform data model ID that defines the BigQuery table structure | 
| interruptExecution | Boolean | if `true`, exceptions are propagated to the caller; if `false`, errors are logged and the method returns `false` | 

> ✅ **Returns**
>
> `true` if all updates were successful, `false` if an error occurred and `interruptExecution` is `false`

> ⚠️ **Throws**
>
> - `Throwable` if the batch update fails and `interruptExecution` is `true`


---

## updateObjectsOnGoogleDatastoreWitSettings

Updates multiple entities in Google Datastore with configurable settings (implementation). Supports two modes depending on the `settings` map: If `settings` contains `"useTransaction": false` AND `"skipReading": true`, entities are upserted without a Datastore transaction for improved performance. Otherwise, entities are updated within a transaction using the standard `insertUpdateRecords` server call, which reads each entity before writing. After a successful update, both the partial result cache and entity cache for this Kind are automatically cleared.

Syntax
```javascript
//return boolean type
var risp = utils.updateObjectsOnGoogleDatastoreWitSettings(
	objs, //Map[]
	dataModelId, //Long
	interruptExecution, //Boolean
	settings //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| objs | Map[] | an array of `Map` objects, each containing attribute name/value pairs for an entity to update; each must include the PK attribute(s) | 
| dataModelId | Long | the platform data model ID that defines the entity structure | 
| interruptExecution | Boolean | if `true`, exceptions are re-thrown; if `false`, errors are logged and the method returns `false` | 
| settings | Map | optional settings `Map`; supported keys: _(details below)_ | 

#### `settings`

optional settings `Map`; supported keys:
- `"useTransaction"` (`Boolean`) — set to `false` to skip transaction wrapping
- `"skipReading"` (`Boolean`) — set to `true` to skip reading the existing entity before writing (requires `useTransaction=false`); uses upsert semanticsPass `null` for default transactional behavior.

> ✅ **Returns**
>
> `true` if all updates succeeded, `false` if any failed and `interruptExecution` is `false`

> ⚠️ **Throws**
>
> - `Throwable` if any update fails and `interruptExecution` is `true`


---

## updateObjectsOnGoogleDatastoreWithSettings

Updates multiple entities in Google Datastore with configurable settings. Delegates to `Long, Boolean, Map)`.

Syntax
```javascript
//return boolean type
var risp = utils.updateObjectsOnGoogleDatastoreWithSettings(
	objs, //Map[]
	dataModelId, //Long
	interruptExecution, //Boolean
	settings //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| objs | Map[] | an array of `Map` objects, each containing attribute name/value pairs for an entity to update; each must include the PK attribute(s) | 
| dataModelId | Long | the platform data model ID that defines the entity structure | 
| interruptExecution | Boolean | if `true`, exceptions are re-thrown; if `false`, errors are logged and the method returns `false` | 
| settings | Map | optional settings `Map` (see `Long, Boolean, Map)` for supported keys); pass `null` for default behavior | 

> ✅ **Returns**
>
> `true` if all updates succeeded, `false` if any failed and `interruptExecution` is `false`

> ⚠️ **Throws**
>
> - `Throwable` if any update fails and `interruptExecution` is `true`


---

## updateObjectsOnGoogleDatastore

Updates multiple entities in Google Datastore in a single batch operation. Convenience overload that delegates to `Long, Boolean, Map)` with `null` settings (uses transactional update by default).

Syntax
```javascript
//return boolean type
var risp = utils.updateObjectsOnGoogleDatastore(
	objs, //Map[]
	dataModelId, //Long
	interruptExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| objs | Map[] | an array of `Map` objects, each containing attribute name/value pairs for an entity to update; each must include the PK attribute(s) | 
| dataModelId | Long | the platform data model ID that defines the entity structure | 
| interruptExecution | Boolean | if `true`, exceptions are re-thrown; if `false`, errors are logged and the method returns `false` | 

> ✅ **Returns**
>
> `true` if all updates succeeded, `false` if any failed and `interruptExecution` is `false`

> ⚠️ **Throws**
>
> - `Throwable` if any update fails and `interruptExecution` is `true`


---

## updateObjectsOnGoogleSpanner

Updates multiple records in a Google Cloud Spanner table in a single batch operation. Each element in the array must contain all fields including primary key fields.

Syntax
```javascript
//return boolean type
var risp = utils.updateObjectsOnGoogleSpanner(
	objs, //Map[]
	dataModelId, //Long
	interruptExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| objs | Map[] | an array of `Map` objects, each representing a record to update; keys are attribute names (camelCase as defined in the data model), values are the field values; each map must include primary key attribute(s) | 
| dataModelId | Long | the platform data model ID that defines the table structure and field mappings | 
| interruptExecution | Boolean | if `true`, exceptions are propagated to the caller; if `false`, errors are logged and the method returns `false` | 

> ✅ **Returns**
>
> `true` if all updates were successful, `false` if an error occurred and `interruptExecution` is `false`

> ⚠️ **Throws**
>
> - `Throwable` if the batch update fails and `interruptExecution` is `true`


---

## updateRangeGoogleSheet

Update (overwrite) a range of cells in a Google Sheet with the specified values.

Syntax
```javascript
//return Integer type
var risp = utils.updateRangeGoogleSheet(
	userId, //String
	spreadsheetId, //String
	range, //String
	valueInputOption, //String
	vos //Object[][]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the user email for Google Sheets authentication (domain-wide delegation) | 
| spreadsheetId | String | the Google Spreadsheet ID | 
| range | String | the A1 notation range to update (e.g., "Sheet1!A1:D10") | 
| valueInputOption | String | how the input data should be interpreted: RAW or USER_ENTERED | 
| vos | Object[][] | two-dimensional array of values to write (rows x columns) | 

> ✅ **Returns**
>
> the number of cells updated

> ⚠️ **Throws**
>
> - `Throwable` in case of Google API errors or authentication failures


---

## updateSheets

Updates cell values in a Google Sheets spreadsheet using the platform-configured user. This is a convenience overload that delegates to `String, List)` using the current user's email.

Syntax
```javascript
utils.updateSheets(
	userId, //String
	spreadsheetId, //String
	areas //Map>
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate for the Sheets API call | 
| spreadsheetId | String | the Google Sheets spreadsheet ID | 
| areas | Map> | a `List` of `Map` objects, each defining a range to update. Expected keys for each map: _(details below)_ | 

#### `areas`

a `List` of `Map` objects, each defining a range to update. Expected keys for each map:
- `"coordinate"` (String) — the sheet range in A1 notation (e.g. "Sheet1!A1:B2")
- `"majorDimension"` (String, optional) — "ROWS" (default) or "COLUMNS"
- `"value"` (Object) — the data to write; can be a single value, a List/NativeArray of values (one row), or a nested List/NativeArray of lists (matrix)

> ⚠️ **Throws**
>
> - `Throwable` if the Google Sheets service initialization or update operation fails


---

## updateSheets

Updates cell values in a Google Sheets spreadsheet using the platform-configured user. This is a convenience overload that delegates to `String, List)` using the current user's email.

Syntax
```javascript
utils.updateSheets(
	spreadsheetId, //String
	areas //Map>
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| spreadsheetId | String | the Google Sheets spreadsheet ID | 
| areas | Map> | a `List` of `Map` objects, each defining a range to update. Expected keys for each map: _(details below)_ | 

#### `areas`

a `List` of `Map` objects, each defining a range to update. Expected keys for each map:
- `"coordinate"` (String) — the sheet range in A1 notation (e.g. "Sheet1!A1:B2")
- `"majorDimension"` (String, optional) — "ROWS" (default) or "COLUMNS"
- `"value"` (Object) — the data to write; can be a single value, a List/NativeArray of values (one row), or a nested List/NativeArray of lists (matrix)

> ⚠️ **Throws**
>
> - `Throwable` if the Google Sheets service initialization or update operation fails


---

## uploadAndRenameGoogleDriveFileFromFS

Uploads a file from the server's file system to the current user's Google Drive, optionally renaming it. If `fileName` is provided, the uploaded file will use that name instead of the original file system name.

Syntax
```javascript
//return File type
var risp = utils.uploadAndRenameGoogleDriveFileFromFS(
	fsPath, //String
	parentId, //String
	fileName, //String
	deleteFsFile //boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fsPath | String | the absolute path to the source file on the server's file system | 
| parentId | String | the Google Drive folder ID to upload into; pass `null` to upload to the Drive root | 
| fileName | String | the name to use for the uploaded file in Drive; if `null` or empty, uses the original file name | 
| deleteFsFile | boolean | if `true`, deletes the local file after successful upload | 

> ✅ **Returns**
>
> a `File` representing the uploaded Drive file

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails, authentication fails, or the local file cannot be read


---

## uploadAndRenameGoogleDriveFileFromFS

Uploads a file from the server's file system to the current user's Google Drive, optionally renaming it. If `fileName` is provided, the uploaded file will use that name instead of the original file system name.

Syntax
```javascript
//return File type
var risp = utils.uploadAndRenameGoogleDriveFileFromFS(
	userId, //String
	fsPath, //String
	parentId, //String
	fileName, //String
	deleteFsFile //boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate via domain-wide delegation | 
| fsPath | String | the absolute path to the source file on the server's file system | 
| parentId | String | the Google Drive folder ID to upload into; pass `null` to upload to the Drive root | 
| fileName | String | the name to use for the uploaded file in Drive; if `null` or empty, uses the original file name | 
| deleteFsFile | boolean | if `true`, deletes the local file after successful upload | 

> ✅ **Returns**
>
> a `File` representing the uploaded Drive file

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails, authentication fails, or the local file cannot be read


---

## uploadAndRenameGoogleDriveFileInNamedFolderFromFS

Uploads a file from the server's file system to the current user's Google Drive into a named subfolder, optionally renaming the file. Looks for a folder named `folderName` inside `baseFolderId`. If the folder does not exist and `createFolderIfNotExists` is `true`, it is created automatically.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fsPath | String | the absolute path to the source file on the server's file system | 
| baseFolderId | String | the Google Drive folder ID containing the target named folder | 
| folderName | String | the name of the subfolder within `baseFolderId` to upload into | 
| createFolderIfNotExists | Boolean | if `true`, creates the named folder if it does not exist | 
| fileName | String | the name to use for the uploaded file; if `null` or empty, uses the original file name | 
| deleteFsFile | boolean | if `true`, deletes the local file after successful upload | 

> ✅ **Returns**
>
> a `File` representing the uploaded Drive file

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails, authentication fails, or the local file cannot be read


---

## uploadAndRenameGoogleDriveFileInNamedFolderFromFS

Uploads a file from the server's file system to the current user's Google Drive into a named subfolder, optionally renaming the file. Looks for a folder named `folderName` inside `baseFolderId`. If the folder does not exist and `createFolderIfNotExists` is `true`, it is created automatically.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate via domain-wide delegation | 
| fsPath | String | the absolute path to the source file on the server's file system | 
| baseFolderId | String | the Google Drive folder ID containing the target named folder | 
| folderName | String | the name of the subfolder within `baseFolderId` to upload into | 
| createFolderIfNotExists | Boolean | if `true`, creates the named folder if it does not exist | 
| fileName | String | the name to use for the uploaded file; if `null` or empty, uses the original file name | 
| deleteFsFile | boolean | if `true`, deletes the local file after successful upload | 

> ✅ **Returns**
>
> a `File` representing the uploaded Drive file

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails, authentication fails, or the local file cannot be read


---

## uploadArchiflowDocument

Upload a document file from a platform directory and attach it to an Archiflow card.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dirId | Long | the platform directory ID where the source file is stored | 
| fileNameSrc | String | the source file name to upload from the directory | 
| cardId | String | the Archiflow card ID to attach the document to | 
| fileName | String | the target file name for the uploaded document | 
| documentTitle | String | the title to assign to the document in Archiflow | 
| additionalSettings | Map | optional Map with extra settings for the upload | 

> ✅ **Returns**
>
> `true` if the upload succeeded

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## uploadGoogleCloudStorageObjectFromFS

Uploads a file from the server's local file system to a Google Cloud Storage bucket as a private object. The MIME type is automatically determined from the file extension. The object will not be publicly accessible (private ACL).

Syntax
```javascript
//return File type
var risp = utils.uploadGoogleCloudStorageObjectFromFS(
	fsPath, //String
	bucketName, //String
	objectName, //String
	deleteFsFile //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fsPath | String | the absolute path to the source file on the server's file system | 
| bucketName | String | the name of the destination bucket | 
| objectName | String | the full path/name for the object within the bucket | 
| deleteFsFile | Boolean | if `true`, deletes the local file after successful upload | 

> ✅ **Returns**
>
> a `File` representing the uploaded object with its metadata

> ⚠️ **Throws**
>
> - `Throwable` if the GCS API call fails, authentication fails, or the local file cannot be read


---

## uploadGoogleCloudStorageObjectFromString

Uploads a text string as a private object to a Google Cloud Storage bucket. The text is encoded as UTF-8 before upload. Useful for storing JSON, XML, CSV, or other text-based content directly without writing to the local file system first.

Syntax
```javascript
//return File type
var risp = utils.uploadGoogleCloudStorageObjectFromString(
	textContent, //String
	bucketName, //String
	objectName, //String
	contentType //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| textContent | String | the text content to upload | 
| bucketName | String | the name of the destination bucket | 
| objectName | String | the full path/name for the object within the bucket | 
| contentType | String | the MIME type of the content (e.g., `"application/json"`, `"text/csv"`) | 

> ✅ **Returns**
>
> a `File` representing the uploaded object with its metadata

> ⚠️ **Throws**
>
> - `Throwable` if the GCS API call fails, authentication fails, or the encoding fails


---

## uploadGoogleCloudStoragePublicObjectFromFS

Uploads a file from the server's local file system to a Google Cloud Storage bucket as a publicly accessible object. The MIME type is automatically determined from the file extension. The object will be made publicly readable, allowing access via a public URL without authentication.

Syntax
```javascript
//return File type
var risp = utils.uploadGoogleCloudStoragePublicObjectFromFS(
	fsPath, //String
	bucketName, //String
	objectName, //String
	deleteFsFile //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fsPath | String | the absolute path to the source file on the server's file system | 
| bucketName | String | the name of the destination bucket | 
| objectName | String | the full path/name for the object within the bucket | 
| deleteFsFile | Boolean | if `true`, deletes the local file after successful upload | 

> ✅ **Returns**
>
> a `File` representing the uploaded object with its metadata

> ⚠️ **Throws**
>
> - `Throwable` if the GCS API call fails, authentication fails, or the local file cannot be read


---

## uploadGoogleCloudStoragePublicObjectFromString

Uploads a text string as a publicly accessible object to a Google Cloud Storage bucket. The text is encoded as UTF-8 before upload. The object will be made publicly readable, allowing access via a public URL without authentication.

Syntax
```javascript
//return File type
var risp = utils.uploadGoogleCloudStoragePublicObjectFromString(
	textContent, //String
	bucketName, //String
	objectName, //String
	contentType //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| textContent | String | the text content to upload | 
| bucketName | String | the name of the destination bucket | 
| objectName | String | the full path/name for the object within the bucket | 
| contentType | String | the MIME type of the content (e.g., `"application/json"`, `"text/csv"`) | 

> ✅ **Returns**
>
> a `File` representing the uploaded object with its metadata

> ⚠️ **Throws**
>
> - `Throwable` if the GCS API call fails, authentication fails, or the encoding fails


---

## uploadGoogleDriveFileFromFS

Uploads a file from the server's file system to the current user's Google Drive.

Syntax
```javascript
//return File type
var risp = utils.uploadGoogleDriveFileFromFS(
	fsPath, //String
	parentId, //String
	deleteFsFile //boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fsPath | String | the absolute path to the source file on the server's file system | 
| parentId | String | the Google Drive folder ID to upload into; pass `null` to upload to the Drive root | 
| deleteFsFile | boolean | if `true`, deletes the local file after successful upload | 

> ✅ **Returns**
>
> a `File` representing the uploaded Drive file

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails, authentication fails, or the local file cannot be read


---

## uploadGoogleDriveFileFromFS

Uploads a file from the server's file system to the current user's Google Drive.

Syntax
```javascript
//return File type
var risp = utils.uploadGoogleDriveFileFromFS(
	userId, //String
	fsPath, //String
	parentId, //String
	deleteFsFile //boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate via domain-wide delegation | 
| fsPath | String | the absolute path to the source file on the server's file system | 
| parentId | String | the Google Drive folder ID to upload into; pass `null` to upload to the Drive root | 
| deleteFsFile | boolean | if `true`, deletes the local file after successful upload | 

> ✅ **Returns**
>
> a `File` representing the uploaded Drive file

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails, authentication fails, or the local file cannot be read


---

## uploadGoogleDriveFileInNamedFolderFromFS

Uploads a file from the server's file system to the current user's Google Drive into a named subfolder. Looks for a folder named `folderName` inside `baseFolderId`. If the folder does not exist and `createFolderIfNotExists` is `true`, it is created automatically. The uploaded file retains its original file system name.

Syntax
```javascript
//return File type
var risp = utils.uploadGoogleDriveFileInNamedFolderFromFS(
	fsPath, //String
	baseFolderId, //String
	folderName, //String
	createFolderIfNotExists, //Boolean
	deleteFsFile //boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fsPath | String | the absolute path to the source file on the server's file system | 
| baseFolderId | String | the Google Drive folder ID containing the target named folder | 
| folderName | String | the name of the subfolder within `baseFolderId` to upload into | 
| createFolderIfNotExists | Boolean | if `true`, creates the named folder if it does not exist | 
| deleteFsFile | boolean | if `true`, deletes the local file after successful upload | 

> ✅ **Returns**
>
> a `File` representing the uploaded Drive file

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails, authentication fails, or the local file cannot be read


---

## uploadGoogleDriveFileInNamedFolderFromFS

Uploads a file from the server's file system to the current user's Google Drive into a named subfolder. Looks for a folder named `folderName` inside `baseFolderId`. If the folder does not exist and `createFolderIfNotExists` is `true`, it is created automatically. The uploaded file retains its original file system name.

Syntax
```javascript
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

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| userId | String | the Google user email to impersonate via domain-wide delegation | 
| fsPath | String | the absolute path to the source file on the server's file system | 
| baseFolderId | String | the Google Drive folder ID containing the target named folder | 
| folderName | String | the name of the subfolder within `baseFolderId` to upload into | 
| createFolderIfNotExists | Boolean | if `true`, creates the named folder if it does not exist | 
| deleteFsFile | boolean | if `true`, deletes the local file after successful upload | 

> ✅ **Returns**
>
> a `File` representing the uploaded Drive file

> ⚠️ **Throws**
>
> - `Throwable` if the Google Drive API call fails, authentication fails, or the local file cannot be read


---

## upsertObjectOnGoogleDatastore

Upserts (inserts or updates) a single object on Google Cloud Datastore. This is a convenience overload that wraps the single object into an array and delegates to `Long, Boolean)`.

Syntax
```javascript
//return boolean type
var risp = utils.upsertObjectOnGoogleDatastore(
	obj, //Map
	dataModelId, //Long
	interruptExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| obj | Map | a `Map` representing the entity to upsert; keys are attribute names (camelCase), values are field values | 
| dataModelId | Long | the platform data model ID defining the Datastore entity structure | 
| interruptExecution | Boolean | if `true`, exceptions are propagated; if `false`, errors are logged and the method returns `false` | 

> ✅ **Returns**
>
> `true` if the upsert was successful, `false` otherwise

> ⚠️ **Throws**
>
> - `Throwable` if the operation fails and `interruptExecution` is `true`


---

## upsertObjectsOnGoogleDatastoreWithSettings

Upserts (inserts or updates) multiple objects on Google Cloud Datastore with optional settings. For each entity, if a record with the same key already exists it is updated; otherwise a new entity is created. After a successful operation, the related entity cache is cleared.

Syntax
```javascript
//return boolean type
var risp = utils.upsertObjectsOnGoogleDatastoreWithSettings(
	objs, //Map[]
	dataModelId, //Long
	interruptExecution, //Boolean
	settings //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| objs | Map[] | an array of `Map` objects, each representing an entity to upsert; keys are attribute names (camelCase as defined in the data model), values are the corresponding field values (String, Number, Date, etc.) | 
| dataModelId | Long | the platform data model ID defining the Datastore entity structure | 
| interruptExecution | Boolean | if `true`, exceptions are propagated; if `false`, errors are logged and the method returns `false` | 
| settings | Map | optional additional settings map; pass `null` for defaults. Supported settings are implementation-specific and passed directly to `GoogleDatastoreBean.upsertRecords` | 

> ✅ **Returns**
>
> `true` if all upserts were successful, `false` otherwise

> ⚠️ **Throws**
>
> - `Throwable` if the operation fails and `interruptExecution` is `true`


---

## upsertObjectsOnGoogleDatastore

Upserts (inserts or updates) multiple objects on Google Cloud Datastore. This is a convenience overload without additional settings. Delegates to `Long, Boolean, Map)`.

Syntax
```javascript
//return boolean type
var risp = utils.upsertObjectsOnGoogleDatastore(
	objs, //Map[]
	dataModelId, //Long
	interruptExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| objs | Map[] | an array of `Map` objects, each representing an entity to upsert; keys are attribute names (camelCase), values are field values | 
| dataModelId | Long | the platform data model ID defining the Datastore entity structure | 
| interruptExecution | Boolean | if `true`, exceptions are propagated; if `false`, errors are logged and the method returns `false` | 

> ✅ **Returns**
>
> `true` if all upserts were successful, `false` otherwise

> ⚠️ **Throws**
>
> - `Throwable` if the operation fails and `interruptExecution` is `true`


---

## validateAlexaRequest

Validate an Amazon Alexa Smart Home or Custom Skill request by verifying the request signature against the signing certificate.

Syntax
```javascript
//return boolean type
var risp = utils.validateAlexaRequest(
	signingCertificateChainUrl, //String
	baseEncoded64Signature, //String
	requestBody //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| signingCertificateChainUrl | String | the URL of the signing certificate chain | 
| baseEncoded64Signature | String | the Base64-encoded signature from the Alexa request | 
| requestBody | String | the raw HTTP request body | 

> ✅ **Returns**
>
> `true` if the request signature is valid, `false` otherwise


---