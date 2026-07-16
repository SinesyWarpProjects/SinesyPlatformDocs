# Function JSS

## addApplUserParameter

Adds one or more application-level user parameters for a specific user. Creates `Prm40ApplUserPar` records associated with the current application.

Syntax
```javascript
//return ListResponse type
var risp = utils.addApplUserParameter(
	companyId, //String
	siteId, //Long
	userCodeId, //String
	parameters //Map[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| companyId | String | the company identifier | 
| siteId | Long | the site identifier | 
| userCodeId | String | the user code to associate parameters with | 
| parameters | Map[] | an array of Maps, each representing a parameter to add. Expected keys: _(details below)_ | 

#### `parameters`

an array of Maps, each representing a parameter to add. Expected keys:
- `"codeId"` (String) — the parameter code identifier (required)
- `"value"` (String) — the parameter value (required)
- `"description"` (String) — an optional description for the parameter
- `"note"` (String) — an optional note for the parameter

> ✅ **Returns**
>
> a `ListResponse` containing the inserted `Prm40ApplUserPar` records, or `null` if an error occurs

> ⚠️ **Throws**
>
> - `Throwable` if a server communication error occurs


---

## addAttribute

Add an attribute (e.g. "member of") to the entry identified by "filterDN".

Syntax
```javascript
//return int type
var risp = utils.addAttribute(
	host, //String
	port, //Integer
	filterDN, //String
	ldapUsername, //String
	ldapPassword, //String
	attributeNameToAdd, //String
	attributeValueToAdd //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| host | String | LDAP host | 
| port | Integer | LDAP port (optional: if not specified, 389 will be used) | 
| filterDN | String | base DN to apply as a filter | 
| ldapUsername | String | username to use to authenticate to the LDAP server | 
| ldapPassword | String | password to use to authenticate to the LDAP server | 
| attributeNameToAdd | String | attribute name to add to every entry matching the search criteria | 
| attributeValueToAdd | String | attribute value to add to every LDAP entry matching the search criteria. | 

> ✅ **Returns**
>
> attributeValueToAdd attribute value to add to every entry matching the search criteria


---

## addBackgroundToPdf2

Placeholder method for adding a watermark/background text to an existing PDF document. **Note:** This method is currently a no-op (implementation is commented out). Use `String, String, Map)` instead for a working implementation.

Syntax
```javascript
utils.addBackgroundToPdf2(
	dirId, //Long
	pdfFile, //String
	background //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dirId | Long | the platform directory ID containing the PDF file | 
| pdfFile | String | the PDF file name (relative to the directory path) | 
| background | String | the watermark text to overlay on each page | 

> ⚠️ **Throws**
>
> - `Throwable` if loading the PDF file fails


---

## addBackgroundToPdf

Adds a semi-transparent watermark text as a foreground overlay to every page of an existing PDF document. The watermark is centered horizontally and vertically on the page. The font size is auto-calculated based on page width and text length, unless explicitly set in the settings map. The resulting document is saved to the same or a different file depending on the "fileName" setting.

Syntax
```javascript
utils.addBackgroundToPdf(
	dirId, //Long
	pdfFile, //String
	background, //String
	settings //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dirId | Long | the platform directory ID containing the PDF file, resolved via `getDirectoryPath()` | 
| pdfFile | String | the PDF file name (relative to the directory path) | 
| background | String | the watermark/overlay text to render on each page | 
| settings | Map | optional configuration map. Supported keys: _(details below)_ | 

#### `settings`

optional configuration map. Supported keys:
- **"red"** (`Number`) — red component of text color, 0-255 (default: 200)
- **"green"** (`Number`) — green component of text color, 0-255 (default: 200)
- **"blue"** (`Number`) — blue component of text color, 0-255 (default: 200)
- **"fontName"** (`String`) — font for the watermark text (default: "Helvetica-Bold"). Allowed values: "Courier", "Courier-Bold", "Courier-BoldOblique", "Courier-Oblique", "Helvetica", "Helvetica-Bold", "Helvetica-BoldOblique", "Helvetica-Oblique", "Symbol", "Times-Bold", "Times-BoldItalic", "Times-Italic", "Times-Roman", "ZapfDingbats"
- **"fontSize"** (`Number`) — font size in points (default: pageWidth / text length)
- **"fileName"** (`String`) — output file name for the watermarked PDF (default: same as input `pdfFile`, overwriting it)

> ⚠️ **Throws**
>
> - `Throwable` if the PDF file cannot be loaded, overlay creation fails, or saving fails


---

## addBarcodeToPDFFile

Adds a barcode image to the current page of an already opened PDF file at the specified coordinates. The barcode is rendered as a bitmap image (converted to JPEG internally) and drawn onto the PDF page. If no page has been added yet, one is created automatically via `addPageToPDFFile`.

Syntax
```javascript
utils.addBarcodeToPDFFile(
	uuid, //String
	x, //int
	y, //int
	barcodeString, //String
	barcodeType, //String
	settings //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| uuid | String | the output stream identifier returned by `Long, Map)` | 
| x | int | X coordinate in points (from left to right) where the barcode will be placed | 
| y | int | Y coordinate in points (from bottom to top) where the barcode will be placed | 
| barcodeString | String | the data/text to encode in the barcode | 
| barcodeType | String | the barcode symbology. Supported values (case-insensitive): "Code128", "Code39", "Interleaved2Of5", "Ean8", "Upca", "pdf417" | 
| settings | Map | configuration map for barcode rendering. Supported keys: _(details below)_ | 

#### `settings`

configuration map for barcode rendering. Supported keys:
- **"dpi"** (`Number`) — resolution in dots per inch for barcode rendering (default: 150)
- **"fontName"** (`String`) — font name for the human-readable text below/above the barcode
- **"fontSize"** (`Number`) — font size for the human-readable text
- **"textPosition"** (`String`) — position of human-readable text. Allowed values: "NONE" (no text), "TOP", "BOTTOM"
- **"width"** (`Number`) — forced width in points for the barcode image on the PDF (default: actual barcode bitmap width)
- **"height"** (`Number`) — forced height in points for the barcode image on the PDF (default: actual barcode bitmap height)

> ⚠️ **Throws**
>
> - `Throwable` if barcode generation or PDF writing fails
- `RuntimeException` if the PDF file has not been opened (uuid not found), or if an unsupported barcode type is specified


---

## addCompanyRelation

Adds one or more subject relations for a user within a company. Looks up the user by company/site/userCode, then creates `Sub38SubRelation` entries linking the user's subject to the specified company subject with the given relation types.

Syntax
```javascript
//return ListResponse type
var risp = utils.addCompanyRelation(
	companyId, //String
	siteId, //Long
	companySubjectId, //String
	userCodeId, //String
	relations //Map[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| companyId | String | the company identifier | 
| siteId | Long | the site identifier | 
| companySubjectId | String | the parent subject identifier (company subject) to relate to | 
| userCodeId | String | the user code (will be uppercased) whose subject is being related | 
| relations | Map[] | an array of Maps, each representing a relation to add. Expected keys: _(details below)_ | 

#### `relations`

an array of Maps, each representing a relation to add. Expected keys:
- `"relationSubId"` (String) — the relation sub-type identifier (SUB39)

> ✅ **Returns**
>
> a `ListResponse` containing the inserted `Sub38SubRelation` records, or `null` if an error occurs

> ⚠️ **Throws**
>
> - `Throwable` if a server communication error occurs


---

## addCustomApplUserVarsWithTimeout

Add a custom parameter to the user session.

Syntax
```javascript
utils.addCustomApplUserVarsWithTimeout(
	code, //String
	value, //String
	seconds //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| code | String | custom session-variable key to create or overwrite. | 
| value | String | value to associate with the custom session-variable key. | 
| seconds | Long | lifetime in seconds after which the custom variable expires automatically. | 


---

## addCustomApplUserVars

Add a custom parameter to the user session.

Syntax
```javascript
utils.addCustomApplUserVars(
	code, //String
	value //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| code | String | custom session-variable key to create or overwrite. | 
| value | String | value to associate with the custom session-variable key. | 


---

## addDate

Adds (or subtracts) a given time interval to a date expressed in milliseconds.

Syntax
```javascript
//return Date type
var risp = utils.addDate(
	currentTimeMillis, //Long
	field, //String
	amount //Number
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| currentTimeMillis | Long | the starting date expressed as a timestamp in milliseconds (epoch) | 
| field | String | the time field to operate on; allowed values: `"DAY"`, `"MONTH"`, `"YEAR"`, `"HOUR"`, `"MINUTE"`, `"SECOND"`, `"MILLISECOND"` | 
| amount | Number | the amount to add (positive) or subtract (negative) | 

> ✅ **Returns**
>
> the new date resulting from the operation

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## addDate

Adds (or subtracts) a given time interval to a date expressed in milliseconds.

Syntax
```javascript
//return Date type
var risp = utils.addDate(
	field, //String
	amount //Number
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| field | String | the time field to operate on; allowed values: `"DAY"`, `"MONTH"`, `"YEAR"`, `"HOUR"`, `"MINUTE"`, `"SECOND"`, `"MILLISECOND"` | 
| amount | Number | the amount to add (positive) or subtract (negative) | 

> ✅ **Returns**
>
> the new date resulting from the operation

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## addDate

Adds (or subtracts) a given time interval to a date expressed in milliseconds.

Syntax
```javascript
//return Date type
var risp = utils.addDate(
	date, //String
	format, //String
	field, //String
	amount //Number
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| date | String | the starting date expressed as a string | 
| format | String | the format of the input string (e.g. "yyyy-MM-dd'T'HH:mm:ss"); if `null` the default ISO format is used | 
| field | String | the time field to operate on; allowed values: `"DAY"`, `"MONTH"`, `"YEAR"`, `"HOUR"`, `"MINUTE"`, `"SECOND"`, `"MILLISECOND"` | 
| amount | Number | the amount to add (positive) or subtract (negative) | 

> ✅ **Returns**
>
> the new date resulting from the operation

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## addImageToPDFFile

Adds an image from a local file to the current page of an already opened PDF file at the specified coordinates. Supported image formats: PNG, JPG/JPEG, and TIF/TIFF. If no page has been added yet, one is created automatically via `addPageToPDFFile`. For PNG files, the image is internally converted to JPEG (via a temporary file) before embedding.

Syntax
```javascript
utils.addImageToPDFFile(
	uuid, //String
	x, //int
	y, //int
	imgPath, //String
	width, //int
	height //int
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| uuid | String | the output stream identifier returned by `Long, Map)` | 
| x | int | X coordinate in points (from left to right) where the image will be placed | 
| y | int | Y coordinate in points (from bottom to top) where the image will be placed | 
| imgPath | String | absolute path to the image file on the server file system | 
| width | int | desired width in points for the image on the PDF page | 
| height | int | desired height in points for the image on the PDF page | 

> ⚠️ **Throws**
>
> - `Throwable` if the image cannot be read or PDF writing fails
- `RuntimeException` if the PDF file has not been opened (uuid not found), or if the image format is not supported (not png/jpg/jpeg/tif/tiff)


---

## addLineToPDFFile

Adds a line of text to the current page of an already opened PDF file using sequential layout. Text is placed at the current cursor position (left margin, current Y position) and the cursor advances downward by the configured line height. When the cursor reaches the bottom margin, a new page is automatically created. If no page has been added yet, one is created automatically via `addPageToPDFFile`.

Syntax
```javascript
utils.addLineToPDFFile(
	uuid, //String
	line, //String
	settings //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| uuid | String | the output stream identifier returned by `Long, Map)` | 
| line | String | the text content to write on the current line | 
| settings | Map | currently unused by this method (reserved for future extensions); font and layout settings are taken from the Map passed to `Long, Map)` | 

> ⚠️ **Throws**
>
> - `Throwable` if writing to the PDF fails
- `RuntimeException` if the PDF file has not been opened (uuid not found)


---

## addMembersToChatGroup

Adds members to an existing chat group. Retrieves the current group from the server, appends new members (avoiding duplicates), and saves the updated group via the ChatManager singleton.

Syntax
```javascript
utils.addMembersToChatGroup(
	groupId, //String
	myPhoneNumber, //String
	contactNames, //String>
	contactPhoneNumbers //String>
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| groupId | String | the unique identifier of the chat group | 
| myPhoneNumber | String | the phone number of the current user (used for logging) | 
| contactNames | String> | list of display names for the contacts to add | 
| contactPhoneNumbers | String> | list of phone numbers for the contacts to add (parallel to contactNames) | 

> ⚠️ **Throws**
>
> - `Throwable` in case of server communication errors


---

## addPageToPDFFile

Adds a new page to an already opened PDF file and sets it as the current page for content writing. Applies the page size, orientation, margins, and font settings from the `settings` Map originally passed to `Long, Map)`. A new `PDPageContentStream` is opened for the page. The previous content stream (if any) is closed. Every 50 pages, an incremental save is performed to flush content to disk and free memory.

Syntax
```javascript
utils.addPageToPDFFile(
	uuid //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| uuid | String | the output stream identifier returned by `Long, Map)` | 

> ⚠️ **Throws**
>
> - `Throwable` if writing to the PDF fails
- `RuntimeException` if the PDF file has not been opened (uuid not found)


---

## addResponseHeader

Add an HTTP response header to the web service response.

Syntax
```javascript
utils.addResponseHeader(
	headerName, //String
	headerValue //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| headerName | String | header name | 
| headerValue | String | header value | 


---

## addSessionAttribute

Add an HTTP response header to the web service response.

Syntax
```javascript
utils.addSessionAttribute(
	attrinuteName, //String
	value //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| attrinuteName | String | name of the session attribute to add to the current web-service response context. | 
| value | String | value to store for the specified session attribute. | 


---

## addUserRoleForApplication

Adds one or more roles to an existing user for a specific application (not necessarily the current one).

Syntax
```javascript
//return Prm01User type
var risp = utils.addUserRoleForApplication(
	appId, //String
	companyId, //String
	siteId, //Long
	userCodeId, //String
	roles //Map[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| appId | String | the target application identifier | 
| companyId | String | the company identifier | 
| siteId | Long | the site identifier | 
| userCodeId | String | the user code identifier (will be converted to uppercase) | 
| roles | Map[] | an array of Maps defining roles to assign. Each Map must contain: _(details below)_ | 

#### `roles`

an array of Maps defining roles to assign. Each Map must contain:
- `"roleId"` (String) — the role identifier
- `"siteId"` (Number) — the site ID for the role
- `"startDate"` (java.util.Date) — role validity start date
- `"endDate"` (java.util.Date, optional) — role validity end date

> ✅ **Returns**
>
> the `Prm01User` object if roles were added successfully, or `null` on error

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## addUserRole

Adds one or more roles to an existing user for the current application. Retrieves the user's existing roles and appends the new ones without removing any.

Syntax
```javascript
//return Prm01User type
var risp = utils.addUserRole(
	companyId, //String
	siteId, //Long
	userCodeId, //String
	roles //Map[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| companyId | String | the company identifier | 
| siteId | Long | the site identifier | 
| userCodeId | String | the user code identifier (will be converted to uppercase) | 
| roles | Map[] | an array of Maps defining roles to assign. Each Map must contain: _(details below)_ | 

#### `roles`

an array of Maps defining roles to assign. Each Map must contain:
- `"roleId"` (String) — the role identifier
- `"siteId"` (Number) — the site ID for the role
- `"startDate"` (java.util.Date) — role validity start date
- `"endDate"` (java.util.Date, optional) — role validity end date

> ✅ **Returns**
>
> the `Prm01User` object if roles were added successfully, or `null` on error

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## applicationExportBackup

Performs a full application export backup, including metadata and context files. The backup can be stored either locally (in the specified directory) or remotely (via FTP). Optionally manages backup rotation by deleting older backups beyond the specified threshold.

Syntax
```javascript
//return boolean type
var risp = utils.applicationExportBackup(
	toDirId, //Long
	ftpHost, //String
	ftpPort, //Long
	ftpUseSSL, //String
	ftpUsername, //String
	ftpPassword, //String
	ftpDestination, //String
	availbaleBackup //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| toDirId | Long | directory identifier for local backup storage | 
| ftpHost | String | (optional) FTP server host; if empty, backup is stored locally | 
| ftpPort | Long | (optional) FTP server port | 
| ftpUseSSL | String | (optional) "Y" to use SSL for FTP connection | 
| ftpUsername | String | (optional) FTP username | 
| ftpPassword | String | (optional) FTP password | 
| ftpDestination | String | (optional) FTP destination folder | 
| availbaleBackup | Long | (optional) maximum number of backup files to retain; older ones are deleted | 

> ✅ **Returns**
>
> `true` if the export completed successfully, `false` otherwise

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## applicationMetadataImport

Imports application metadata from an XML file stored in the specified directory. Validates the XML against the platform XSD schema before importing.

Syntax
```javascript
//return boolean type
var risp = utils.applicationMetadataImport(
	fromDirId, //Long
	fileName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fromDirId | Long | directory identifier where the XML metadata file is located | 
| fileName | String | name of the XML file to import | 

> ✅ **Returns**
>
> `true` if the import was completed successfully

> ⚠️ **Throws**
>
> - `Throwable` in case of validation, I/O, or server communication errors


---

## backupDirFiles

Performs a backup of all files in a directory, compressing them into ZIP archives and optionally uploading them to an FTP server. Manages backup rotation by removing old archives.

Syntax
```javascript
//return boolean type
var risp = utils.backupDirFiles(
	baseDirId, //Long
	toDirId, //Long
	ftpHost, //String
	ftpPort, //Long
	ftpUseSSL, //String
	ftpUsername, //String
	ftpPassword, //String
	ftpDestination, //String
	suffixZipFile, //String
	availbaleBackup //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| baseDirId | Long | source directory identifier containing files to backup | 
| toDirId | Long | destination directory identifier for local backup storage | 
| ftpHost | String | (optional) FTP server host; if empty/null, backup is stored locally | 
| ftpPort | Long | (optional) FTP server port | 
| ftpUseSSL | String | (optional) "Y" to use SSL for FTP connection | 
| ftpUsername | String | (optional) FTP username | 
| ftpPassword | String | (optional) FTP password | 
| ftpDestination | String | (optional) FTP destination folder | 
| suffixZipFile | String | (optional) prefix/suffix to add to generated ZIP file names | 
| availbaleBackup | Long | (optional) maximum number of backup files to retain; older ones are deleted | 

> ✅ **Returns**
>
> `true` if the backup was completed successfully, `false` on error


---

## blockingWaitAllElements

BLOCKING Wait for termination of all elements enqueued and identified by the specified element ids.

Syntax
```javascript
//return String type
var risp = utils.blockingWaitAllElements(
	timeout, //Long
	elementIdsStr //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| timeout | Long | max waiting secs before interrupting method and get a transaction id back | 
| elementIdsStr | String[] | queue element identifiers to wait for, expressed as strings. | 


---

## callBusinessComponent

Invoke a business component by its component ID, executing it as if it were called via HTTP request. The business component can fill in either a grid or a form panel. All request parameters from the current server-side JS business component are forwarded automatically.

Syntax
```javascript
//return String type
var risp = utils.callBusinessComponent(
	compId, //Long
	additionalReqParams, //Map
	decodedReqParams, //Map
	decodedFilterNames //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| compId | Long | the business component ID to invoke | 
| additionalReqParams | Map | (optional: can be null); a Map<String, String> of additional request parameters to inject. Keys are parameter names, values are parameter values. These supplement (and override) the parameters from the original HTTP request. Common keys include any parameter expected by the target business component (e.g. filter values, pagination parameters like "startPos", "blockSize") | 
| decodedReqParams | Map | (optional: can be null); a Map<String, String> used to rename request parameter names. Keys are the original parameter names as requested by the business component; values are the replacement parameter names to look up from the original request. This allows mapping parameters from one context to another without changing the source | 
| decodedFilterNames | Map | (optional: can be null); a Map<String, String> used to rename filter/sort field names. Keys are the original field names found in "quickFilterNames", "filterNames", or "sort" request parameters; values are replacement field names. This is useful when the target business component uses different column names than those expected by the calling context | 

> ✅ **Returns**
>
> the JSON response string produced by the business component execution

> ⚠️ **Throws**
>
> - `Throwable` if the business component execution fails


---

## camelToSnake

Converts a camelCase or mixed-case string to snake_case format.

Syntax
```javascript
//return String type
var risp = utils.camelToSnake(
	str, //String
	toUpperCase //boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| str | String | the text to convert (e.g., "abcDEF") | 
| toUpperCase | boolean | `true` to produce uppercase snake_case (e.g., "ABC_DEF"), `false` for lowercase (e.g., "abc_d_e_f") | 

> ✅ **Returns**
>
> the converted snake_case string


---

## camel

Convert a table.field name to an attribute name, using the camel format. Example: TAB.FIELD_NAME -> fieldName

Syntax
```javascript
//return String type
var risp = utils.camel(
	fieldName, //String
	firstCharUpper //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fieldName | String | table.fieldname | 
| firstCharUpper | Boolean | flag used to define if the first letter of the converted string must be set as uppercase | 

> ✅ **Returns**
>
> attribute name representation of the specified database field name


---

## checkCellsWithMetadataForImport

Validates that the Excel cells referenced by a Value Import configuration contain valid metadata. Checks whether the cell coordinates defined in the import mapping actually exist and are accessible in the specified Excel file.

Syntax
```javascript
//return String type
var risp = utils.checkCellsWithMetadataForImport(
	directoryId, //Long
	fileName, //String
	valueImportId //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| directoryId | Long | the platform directory identifier where the Excel file is located | 
| fileName | String | the name of the Excel file to check | 
| valueImportId | Long | the Value Import configuration identifier whose cell mappings are to be validated | 

> ✅ **Returns**
>
> a JSON string with structure `\{ "success": true/false, "errors": [...] `\}; when `success` is false, the `errors` array contains objects describing each validation failure

> ⚠️ **Throws**
>
> - `Throwable` if a server error occurs during validation


---

## checkFunctionId

This method will fire an exception in case the specified functionName is not enabled for the current logged user.

Syntax
```javascript
utils.checkFunctionId(
	functionId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| functionId | String | function name to check out | 


---

## checkRoleId

This method will fire an exception in case the specified role id is not bounded for the current logged user.

Syntax
```javascript
utils.checkRoleId(
	roleId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| roleId | String | role id to check out | 


---

## clearWritingCache

Clears the server-side writing cache for a specific table on the given datasource. This forces subsequent write operations to bypass any cached metadata for the specified table.

Syntax
```javascript
utils.clearWritingCache(
	datasourceId, //Long
	table //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| datasourceId | Long | the platform datasource identifier | 
| table | String | the table name whose writing cache should be invalidated | 


---

## closeCSVFile

Close a CSV file, previously opened.

Syntax
```javascript
utils.closeCSVFile(
	uuid //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| uuid | String | output stream identifier, related to a CSV file already opended; this id is returned by the "openCSVFile" method | 

> ⚠️ **Throws**
>
> - `Throwable` in case the CSV file has not been opened or has already closed


---

## closePDFFile

Closes a previously opened PDF file, flushing all remaining content to disk. This is the final step in the PDF generation lifecycle: the content stream is closed, the document is saved (incrementally if in overwrite mode, full save otherwise), and the internal descriptor is removed from the tracking map. After this method is called, the uuid is no longer valid for any PDF operations.

Syntax
```javascript
utils.closePDFFile(
	uuid //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| uuid | String | the output stream identifier returned by `Long, Map)` | 

> ⚠️ **Throws**
>
> - `Throwable` if closing or saving the document fails
- `RuntimeException` if the PDF file has not been opened (uuid not found)


---

## closeTextFile

Close a text file, previously opened.

Syntax
```javascript
utils.closeTextFile(
	uuid //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| uuid | String | output stream identifier, related to a text file already opened; this id is returned by the "openTextFile" method | 

> ⚠️ **Throws**
>
> - `Throwable` in case the text file has not been opened or has already closed


---

## convertDateToSqlDate

Converts a `Date` to a `Date`.

Syntax
```javascript
//return Date type
var risp = utils.convertDateToSqlDate(
	date //Date
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| date | Date | the date to convert | 

> ✅ **Returns**
>
> the equivalent `Date`


---

## convertDateToString

Converts a `Date` to its string representation using the specified format. If format is `null`, the ISO format `"yyyy-MM-dd'T'HH:mm:ss"` is used.

Syntax
```javascript
//return String type
var risp = utils.convertDateToString(
	date, //Date
	format //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| date | Date | the date to convert | 
| format | String | the output format pattern (e.g. "dd/MM/yyyy"); if `null`, ISO format is used | 

> ✅ **Returns**
>
> the formatted date string


---

## convertDateToString

Converts a `Date` to its string representation using the specified format. If format is `null`, the ISO format `"yyyy-MM-dd'T'HH:mm:ss"` is used.

Syntax
```javascript
//return Map type
var risp = utils.convertDateToString(
	vo //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| vo | Map | a Map potentially containing NativeDate objects as values; may be `null` | 

> ✅ **Returns**
>
> the formatted date string


---

## convertDateToTimestamp

Converts a `Date` to a `Timestamp`.

Syntax
```javascript
//return Timestamp type
var risp = utils.convertDateToTimestamp(
	date //Date
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| date | Date | the date to convert | 

> ✅ **Returns**
>
> the equivalent `Timestamp`


---

## convertSecondToHoursMinutesSeconds

Converts a number of seconds into a formatted time string "HH:MM:SS".

Syntax
```javascript
//return String type
var risp = utils.convertSecondToHoursMinutesSeconds(
	seconds //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| seconds | Long | the total number of seconds to convert | 

> ✅ **Returns**
>
> the formatted time string (e.g. "01:30:45")


---

## convertStringToDate

Converts a string representing a date in the specified format to a `Date` object. Internally delegates to `String, String, Number)` adding 0 days.

Syntax
```javascript
//return Date type
var risp = utils.convertStringToDate(
	dateAsString, //String
	format //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dateAsString | String | the string representing the date | 
| format | String | the format of the string (e.g. "yyyy-MM-dd", "dd/MM/yyyy HH:mm:ss") | 

> ✅ **Returns**
>
> the `Date` object resulting from parsing

> ⚠️ **Throws**
>
> - `Throwable` in case of parsing errors


---

## convertStringToNumber

Convert a string representing a number to a number.

Syntax
```javascript
//return Number type
var risp = utils.convertStringToNumber(
	number //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| number | String | the string must have the righr format: int.dec No grouping symbols are allowed and the decimal symbol, if included, must be the period . | 

> ✅ **Returns**
>
> converted number

> ⚠️ **Throws**
>
> - `Exception` in case the input string is not a number or a number expressed with the right format


---

## convertStringToUTCDate

Converts a date string to a `Date` in UTC timezone. Uses the format "yyyy-MM-dd HH:mm:ss".

Syntax
```javascript
//return Date type
var risp = utils.convertStringToUTCDate(
	date //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| date | String | the date string to parse (e.g. "2024-01-15 10:30:00") | 

> ✅ **Returns**
>
> the parsed Date object in UTC timezone

> ⚠️ **Throws**
>
> - `Throwable` in case of parsing errors


---

## convertUTCStringToDate

Converts a UTC date string to a `Date` object. Automatically detects whether the separator between date and time is 'T' or a space. If the string is longer than 19 characters, it is truncated to the first 19 characters. The parsing is performed using UTC timezone.

Syntax
```javascript
//return Date type
var risp = utils.convertUTCStringToDate(
	utcDateAsString //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| utcDateAsString | String | a date string in UTC format (e.g. "2024-01-15 10:30:00" or "2024-01-15T10:30:00") | 

> ✅ **Returns**
>
> the parsed `Date` in UTC timezone

> ⚠️ **Throws**
>
> - `Throwable` in case of parsing errors


---

## convertUTCStringToTimeZoneDate

Converts a UTC date string to a `Date` adjusted by the specified timezone offset.

Syntax
```javascript
//return Date type
var risp = utils.convertUTCStringToTimeZoneDate(
	utcDateAsString, //String
	hrs //int
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| utcDateAsString | String | a date string in UTC format (e.g. "2024-01-15T10:30:00") | 
| hrs | int | timezone offset in hours to add to the UTC date (note: internally multiplied by 86400000ms, so this effectively adds days, not hours — likely a design quirk) | 

> ✅ **Returns**
>
> the adjusted `Date`

> ⚠️ **Throws**
>
> - `Throwable` in case of parsing errors


---

## convertXMLToHTML

Convert the specified XML file to HTML, using the specified XSD document to apply the XSLT transformation.

Syntax
```javascript
//return boolean type
var risp = utils.convertXMLToHTML(
	xmlDirId, //Long
	xmlFileName, //String
	xslDirId, //Long
	xslFileName, //String
	htmlDirId, //Long
	htmlFileName, //String
	namespaceAware, //Boolean
	validating //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| xmlDirId | Long | directory id where the XML data file is located | 
| xmlFileName | String | XML data file | 
| xslDirId | Long | directory id where the XSL data file is located | 
| xslFileName | String | XSL stylesheet file | 
| htmlDirId | Long | directory id where the HTML file to generate will be saved | 
| htmlFileName | String | HTML file to generate | 
| namespaceAware | Boolean | true to create a namespace-aware XML parser before applying the XSL transformation. | 
| validating | Boolean | true to enable XML validation in the parser before transformation. | 


---

## copyCompanyId

Duplicates a company by creating a new company ID based on an existing one. Reads SQL statements from the file `auth4ws_new_company.sql` and executes them to replicate the company data. The new corporate name is set to "-".

Syntax
```javascript
//return boolean type
var risp = utils.copyCompanyId(
	startingCompanyId, //String
	newCompanyId, //String
	newCorporateName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| startingCompanyId | String | the source company ID to duplicate | 
| newCompanyId | String | the new company ID value | 
| newCorporateName | String | the corporate name for the new company | 

> ✅ **Returns**
>
> `true` if the duplication completed successfully, `false` otherwise


---

## copyCompanyId [Deprecated]

Duplicates a company by creating a new company ID based on an existing one. Reads SQL statements from the file `auth4ws_new_company.sql` and executes them to replicate the company data. The new corporate name is set to "-".

Syntax
```javascript
//return boolean type
var risp = utils.copyCompanyId(
	startingCompanyId, //String
	newCompanyId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| startingCompanyId | String | the source company ID to duplicate | 
| newCompanyId | String | the new company ID value | 

> ✅ **Returns**
>
> `true` if the duplication completed successfully, `false` otherwise


---

## copyDataFromBorderTable

Copy data from a border table to a final table, where all FKs have been already set in the border table. It is possible either to INSERT all input records or UPDATE them. Update is possible only if the PKs for the final table are already available in the border table. In case of insert, he PK can be either input fields or a UUID calculated on the fly or a counter reckoned thorugh a counter table. In the latter case, records in the counter table must be already defined in the PROG_ID table used to calculate the next counter

Syntax
```javascript
//return Long type
var risp = utils.copyDataFromBorderTable(
	settings //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| settings | Map | \{ srcDatasourceId: [Long] datasource id of from table fromTable: [String] name of origin table fromTableFilter: [String] fromFK: [String] fromLoadedFieldName: [String] errorFieldName: [String] containsErrorsField: [String] operation: [String] (default "INSERT") defaultFields: [Map] defaultInLineFields: [Map] mappingFields: [Map] destDatasourceId: [Long] datasource id of to table toTable: [String] name of destination table toTableFilter: [String] filter used to check if a SINGLE record exists in a destination table idAsNum: [String] idAsUuid: [String] progIdValueField: [String] progIdTable: [String] progIdIncField: [String] progIdWhere: [String] commitSize: [Long] (default 1000) \} | 

> ✅ **Returns**
>
> in case of error return a number of errors, else the total number of record elaborated

> ⚠️ **Throws**
>
> - `Throwable`


---

## copyFile

Copy the source file to the destination file. Since "destFile" contains a file name too, the source file can be renamed when copied.

Syntax
```javascript
//return boolean type
var risp = utils.copyFile(
	srcFile, //String
	destFile, //String
	replaceExistingFile, //Boolean
	deleteSourceFile //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| srcFile | String | absolute path + file name | 
| destFile | String | absolute file + file name | 
| replaceExistingFile | Boolean | flag used to replace an already existing destination file; if false and the destination exists, the copy is aborted. | 
| deleteSourceFile | Boolean | flag used to delete the source file, once the file has been copied to the destination path | 

> ✅ **Returns**
>
> `true` if the file has been copied successfully, `false` otherwise

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## copyFile

Copy the source file to the destination file. Since "destFile" contains a file name too, the source file can be renamed when copied.

Syntax
```javascript
utils.copyFile(
	inBaseDir, //String
	inFileName, //String
	destPathFileName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| inBaseDir | String | base dir where the file is stored (not required in case of GFS) | 
| inFileName | String | file name (uuid in case of GFS) | 
| destPathFileName | String | absolute path + file name where the source file must be copied | 

> ✅ **Returns**
>
> `true` if the file has been copied successfully, `false` otherwise

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## copyImportRowsFromFile

Duplicate an already existing import data in table configuration, starting from its import id.

Syntax
```javascript
//return Long type
var risp = utils.copyImportRowsFromFile(
	importId, //Long
	newDescription //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| importId | Long | already existing import data definition to duplicate | 
| newDescription | String | new description for the duplicated import | 

> ✅ **Returns**
>
> a new import id

> ⚠️ **Throws**
>
> - `Throwable` in case of errors (e.g. the passed import id does not exist)


---

## countRowsOfCSVFile

Counts the total number of rows in a CSV file. This is an alias for `countRowsOfTextFile` since CSV files are text files.

Syntax
```javascript
//return Long type
var risp = utils.countRowsOfCSVFile(
	filePath //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| filePath | String | the absolute path to the CSV file | 

> ✅ **Returns**
>
> the number of lines in the file

> ⚠️ **Throws**
>
> - `Throwable` if the file cannot be read or does not exist


---

## countRowsOfTextFile

Counts the total number of lines in a text file using a buffered reader stream.

Syntax
```javascript
//return Long type
var risp = utils.countRowsOfTextFile(
	filePath //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| filePath | String | the absolute path to the text file | 

> ✅ **Returns**
>
> the number of lines in the file

> ⚠️ **Throws**
>
> - `Throwable` if the file cannot be read or does not exist


---

## createAllowedLinkWithRtk

Creates a token to use when invoking a server-side JavaScript action, including an RTK (encoded credentials). This is a convenience overload that delegates to `Long, String, String)` with no note.

Syntax
```javascript
//return String type
var risp = utils.createAllowedLinkWithRtk(
	expirationDays, //Long
	maxTimes, //Long
	rtk //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| expirationDays | Long | number of days after which this token expires; 0 or `null` for no expiration | 
| maxTimes | Long | maximum number of times this token can be used before expiring | 
| rtk | String | Base64-encoded string containing companyId, siteId, username, and password | 

> ✅ **Returns**
>
> the generated token string

> ⚠️ **Throws**
>
> - `Throwable` if a server communication error occurs


---

## createAllowedLink

Creates a token to use when invoking a server-side JavaScript action without authentication. This is a convenience overload that delegates to `Long, String, String)` with no RTK and no note.

Syntax
```javascript
//return String type
var risp = utils.createAllowedLink(
	expirationDays, //Long
	maxTimes, //Long
	rtk, //String
	note //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| expirationDays | Long | number of days after which this token expires; 0 or `null` for no expiration | 
| maxTimes | Long | maximum number of times this token can be used before expiring | 
| rtk | String | companyId, siteId, username and password in base64 | 
| note | String | description of token | 

> ✅ **Returns**
>
> the generated token string

> ⚠️ **Throws**
>
> - `Throwable` if a server communication error occurs


---

## createAllowedLink

Creates a token to use when invoking a server-side JavaScript action without authentication. This is a convenience overload that delegates to `Long, String, String)` with no RTK and no note.

Syntax
```javascript
//return String type
var risp = utils.createAllowedLink(
	expirationDays, //Long
	maxTimes //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| expirationDays | Long | number of days after which this token expires; 0 or `null` for no expiration | 
| maxTimes | Long | maximum number of times this token can be used before expiring | 

> ✅ **Returns**
>
> the generated token string

> ⚠️ **Throws**
>
> - `Throwable` if a server communication error occurs


---

## createAllowedUrl

Create a link to include for instance in an email, with the autologin and parameters, in order to invoke a JS server-side action.

Syntax
```javascript
//return String type
var risp = utils.createAllowedUrl(
	baseUrl, //String
	actionId, //Long
	aName, //String
	aValue, //String
	rName, //String
	rValue, //String
	params, //String
	expirationDays, //Long
	maxTimes, //Long
	message //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| baseUrl | String | e.g. `http://host:port/platform/` | 
| actionId | Long | identifier of the server-side JavaScript action that the generated allowed URL must invoke. | 
| aName | String | query-string parameter name used by approve.jsp to carry the positive/accept value. | 
| aValue | String | query-string value paired with aName for the positive/accept branch. | 
| rName | String | query-string parameter name used by approve.jsp to carry the reject/alternative value. | 
| rValue | String | query-string value paired with rName for the reject/alternative branch. | 
| params | String | additional query-string fragment to append to the generated URL, already formatted as name=value pairs joined by &. | 
| expirationDays | Long | number of days after which the generated auth token expires; values less than or equal to zero mean no expiration. | 
| maxTimes | Long | maximum number of times the generated link/token can be used. | 
| message | String | message text appended to the generated approve.jsp URL and typically shown to the user. | 

> ✅ **Returns**
>
> URL composed of the base url + the additional part which allows to invoke and access a server-side js action


---

## createCSVFileFromSQLQuery

Creates a CSV file from the result of a SQL query. This is a convenience overload that delegates to the full version with `charset` set to `null`.

Syntax
```javascript
//return String type
var risp = utils.createCSVFileFromSQLQuery(
	fileName, //String
	overwrite, //Boolean
	directoryId, //Long
	sep, //String
	languageId, //String
	printTitles, //Boolean
	fileAppend, //Boolean
	formatColumns, //String[]
	datasourceId, //Long
	sqlQuery, //String
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileName | String | CSV file name to create | 
| overwrite | Boolean | if `true`, overwrites the file if it already exists | 
| directoryId | Long | directory identifier where the CSV file will be stored | 
| sep | String | column separator character (e.g. ";" or ",") | 
| languageId | String | language ID used for formatting numbers/dates | 
| printTitles | Boolean | if `true`, prints column headers as the first row | 
| fileAppend | Boolean | if `true`, appends content to an existing file | 
| formatColumns | String[] | array of format patterns for each column (e.g. "0.00" for decimals); can be null | 
| datasourceId | Long | optional data source identifier; if `null`, the default is used | 
| sqlQuery | String | the SQL SELECT query to execute | 
| pars | Object[] | bind variable values for the SQL query placeholders (?) | 

> ✅ **Returns**
>
> an error message in case of errors, or empty string if the CSV file was created successfully

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## createCSVFileFromSQLQuery

Creates a CSV file from the result of a SQL query. This is a convenience overload that delegates to the full version with `charset` set to `null`.

Syntax
```javascript
//return String type
var risp = utils.createCSVFileFromSQLQuery(
	fileName, //String
	overwrite, //Boolean
	directoryId, //Long
	sep, //String
	languageId, //String
	printTitles, //Boolean
	fileAppend, //Boolean
	charset, //String
	formatColumns, //String[]
	datasourceId, //Long
	sqlQuery, //String
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileName | String | CSV file name to create | 
| overwrite | Boolean | if `true`, overwrites the file if it already exists | 
| directoryId | Long | directory identifier where the CSV file will be stored | 
| sep | String | column separator character (e.g. ";" or ",") | 
| languageId | String | language ID used for formatting numbers/dates | 
| printTitles | Boolean | if `true`, prints column headers as the first row | 
| fileAppend | Boolean | if `true`, appends content to an existing file | 
| charset | String | (optional) character encoding for the output file (e.g. "UTF-8"); if `null`, default encoding is used | 
| formatColumns | String[] | array of format patterns for each column (e.g. "0.00" for decimals); can be null | 
| datasourceId | Long | optional data source identifier; if `null`, the default is used | 
| sqlQuery | String | the SQL SELECT query to execute | 
| pars | Object[] | bind variable values for the SQL query placeholders (?) | 

> ✅ **Returns**
>
> an error message in case of errors, or empty string if the CSV file was created successfully

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## createCSVFile

Create a csv file

Syntax
```javascript
//return String type
var risp = utils.createCSVFile(
	fileName, //String
	overwrite, //Boolean
	directoryId, //Long
	data, //List
	sep, //String
	languageId, //String
	exportAttributes, //String[]
	exportColumns, //String[]
	formatColumns, //String[]
	printTitles, //boolean
	fileAppend //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileName | String | file name; it can includes a subpath to append to the base path specified through directoryId | 
| overwrite | Boolean | `true` to overwrite the file content if already exists, `false` to ignore this operation and returns false as result | 
| directoryId | Long | directory id directory identifier, used to define the absolute path, in the central server, where the file will be stored; if null, there must be one only entry for this application | 
| data | List | list of data for csv | 
| sep | String | separator of values | 
| languageId | String | language for translation | 
| exportAttributes | String[] | attributes of export columns | 
| exportColumns | String[] | title of columns | 
| formatColumns | String[] | optional array of format patterns (e.g. date or number format) applied to each column during export; null entries mean no formatting for that column | 
| printTitles | boolean | `true` to print column titles as the first row in the CSV file, `false` to omit them | 
| fileAppend | Boolean | `true` if you want append data on existing file | 

> ✅ **Returns**
>
> a message error, in case of errors, or "" if the CSV file has been created correctly


---

## createCSVFile

Create a csv file

Syntax
```javascript
//return String type
var risp = utils.createCSVFile(
	fileName, //String
	overwrite, //Boolean
	directoryId, //Long
	data, //List
	sep, //String
	languageId, //String
	exportAttributes, //String[]
	exportColumns, //String[]
	formatColumns, //String[]
	printTitles //boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileName | String | file name; it can includes a subpath to append to the base path specified through directoryId | 
| overwrite | Boolean | `true` to overwrite the file content if already exists, `false` to ignore this operation and returns false as result | 
| directoryId | Long | directory id directory identifier, used to define the absolute path, in the central server, where the file will be stored; if null, there must be one only entry for this application | 
| data | List | list of data for csv | 
| sep | String | separator of values | 
| languageId | String | language for translation | 
| exportAttributes | String[] | attributes of export columns | 
| exportColumns | String[] | title of columns | 
| formatColumns | String[] | optional array of format patterns (e.g. date or number format) applied to each column during export; null entries mean no formatting for that column | 
| printTitles | boolean | `true` to print column titles as the first row in the CSV file, `false` to omit them | 

> ✅ **Returns**
>
> a message error, in case of errors, or "" if the CSV file has been created correctly


---

## createChatContact

Create a contact (person) in the chat.

Syntax
```javascript
//return Con89ChatContact type
var risp = utils.createChatContact(
	person //Con89ChatContact
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| person | Con89ChatContact | chat contact descriptor to create; it should contain myPhoneNumber plus the contact data to persist, such as contactType, contactPhoneNumber/contactName for a single contact, or groupId/contactPhoneNumbers/contactNames for a group. | 


---

## createChatGroup

Create a new chat group and add a few contacts to it.

Syntax
```javascript
//return Con89ChatContact type
var risp = utils.createChatGroup(
	groupName, //String
	myPhoneNumber, //String
	contactNames, //String>
	contactPhoneNumbers //String>
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| groupName | String | group name | 
| myPhoneNumber | String | phone number to start with | 
| contactNames | String> | display names of the contacts to include in the new group, in the same positional order as contactPhoneNumbers. | 
| contactPhoneNumbers | String> | list of contacts to add | 


---

## createDbTableMetadata



Syntax
```javascript
//return Long type
var risp = utils.createDbTableMetadata(
	datasourceId, //Long
	tableName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| datasourceId | Long | num value; it can be null and used to specify a different db to use with the sql statement | 
| tableName | String | String: name of table | 

> ⚠️ **Throws**
>
> - `Throwable`


---

## createEntry

Create a new entry identified by the entry name + baaseDN

Syntax
```javascript
//return String type
var risp = utils.createEntry(
	host, //String
	port, //Integer
	ldapUsername, //String
	ldapPassword, //String
	baseDN, //String
	entryName, //String
	entryType, //String
	entryDescription, //String
	attributeNamesValues //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| host | String | LDAP host | 
| port | Integer | LDAP port (optional: if not specified, 389 will be used) | 
| ldapUsername | String | username to use to authenticate to the LDAP server | 
| ldapPassword | String | password to use to authenticate to the LDAP server | 
| baseDN | String | base DN to apply as a filter | 
| entryName | String | new entry to create within the baseDN | 
| entryType | String | type of entry, e.g. "group" | 
| entryDescription | String | entry description; can be null | 
| attributeNamesValues | String[] | list of attributename,attributevalue,... | 

> ✅ **Returns**
>
> DN related to the entry just created


---

## createFTPDirectories

Create the specified folders in to the FTP server.

Syntax
```javascript
//return boolean type
var risp = utils.createFTPDirectories(
	protocol, //String
	host, //String
	port, //Integer
	useSSL, //Boolean
	username, //String
	password, //String
	directories //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| protocol | String | FTP protocol type to use for the connection, for example FTP, FTPS, or SFTP. | 
| host | String | FTP server host | 
| port | Integer | FTP server port | 
| useSSL | Boolean | flag used to open a secure connection with the FTP server | 
| username | String | username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| password | String | password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| directories | String | to create in the FTP server | 

> ✅ **Returns**
>
> `true` if the folders has been created in the FTP server correctly


---

## createGroup

Create a new group (a new entry) identified by the group name + the folderDN

Syntax
```javascript
//return String type
var risp = utils.createGroup(
	host, //String
	port, //Integer
	ldapUsername, //String
	ldapPassword, //String
	baseDN, //String
	folderDN, //String
	groupName, //String
	additionalAttributeNamesValues //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| host | String | LDAP host | 
| port | Integer | LDAP port (optional: if not specified, 389 will be used) | 
| ldapUsername | String | username to use to authenticate to the LDAP server | 
| ldapPassword | String | password to use to authenticate to the LDAP server | 
| baseDN | String | base DN | 
| folderDN | String | DN where to create the group | 
| groupName | String | name of the LDAP group to create inside folderDN/baseDN. | 
| additionalAttributeNamesValues | String[] | list of attributename=attributevalue separated by a comma (,) | 

> ✅ **Returns**
>
> DN related to the entry just created


---

## createRoleForApplication

Creates a new role for a specific application.

Syntax
```javascript
//return Prm02Role type
var risp = utils.createRoleForApplication(
	appId, //String
	companyId, //String
	siteId, //Long
	roleId, //String
	description //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| appId | String | the target application identifier | 
| companyId | String | the company identifier | 
| siteId | Long | the site identifier | 
| roleId | String | the unique role identifier | 
| description | String | the role description (label) | 

> ✅ **Returns**
>
> the created `Prm02Role` object

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## createRole

Creates a new role for the current application.

Syntax
```javascript
//return Prm02Role type
var risp = utils.createRole(
	companyId, //String
	siteId, //Long
	roleId, //String
	description //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| companyId | String | the company identifier | 
| siteId | Long | the site identifier | 
| roleId | String | the unique role identifier | 
| description | String | the role description (label) | 

> ✅ **Returns**
>
> the created `Prm02Role` object

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## createTextFile

Create a text file and fill in with the passed content.

Syntax
```javascript
//return boolean type
var risp = utils.createTextFile(
	fileName, //String
	fileContent, //String
	overwrite, //Boolean
	directoryId, //Long
	charset //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileName | String | file name; it can includes a subpath to append to the base path specified through directoryId | 
| fileContent | String | text content to save | 
| overwrite | Boolean | `true` to overwrite the file content if already exists, `false` to ignore this operation and returns false as result | 
| directoryId | Long | directory id directory identifier, used to define the absolute path, in the central server, where the file will be stored; if null, there must be one only entry for this application | 
| charset | String | optional character encoding to use when writing the file (e.g. "UTF-8", "ISO-8859-1"); if null or empty, the platform default charset is used | 

> ✅ **Returns**
>
> `true` if the operation has been successfully completed, `false` otherwise


---

## createTextFile

Create a text file and fill in with the passed content.

Syntax
```javascript
//return boolean type
var risp = utils.createTextFile(
	fileName, //String
	fileContent, //String
	overwrite, //Boolean
	directoryId //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileName | String | file name; it can includes a subpath to append to the base path specified through directoryId | 
| fileContent | String | text content to save | 
| overwrite | Boolean | `true` to overwrite the file content if already exists, `false` to ignore this operation and returns false as result | 
| directoryId | Long | directory id directory identifier, used to define the absolute path, in the central server, where the file will be stored; if null, there must be one only entry for this application | 

> ✅ **Returns**
>
> `true` if the operation has been successfully completed, `false` otherwise


---

## createUser

Creates a new user in the platform with the specified credentials and optional additional attributes and roles.

Syntax
```javascript
//return Prm01User type
var risp = utils.createUser(
	companyId, //String
	siteId, //Long
	userCodeId, //String
	description, //String
	password, //String
	languageId, //String
	user, //Map
	roles //Map[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| companyId | String | the company identifier for the new user | 
| siteId | Long | the site identifier for the new user | 
| userCodeId | String | the user code identifier (will be converted to uppercase) | 
| description | String | a descriptive label for the user | 
| password | String | the user's password (will be encrypted if the platform is configured for password encryption) | 
| languageId | String | the language identifier for the user | 
| user | Map | (optional) a Map of additional user attributes to set; keys are attribute names (e.g. "email", "firstName", "lastName", "telephone") that map to setter methods of `Prm01User` via reflection. If `null` or empty, default values are applied. | 
| roles | Map[] | (optional) an array of Maps defining roles to assign to the user. Each Map must contain: _(details below)_ | 

#### `roles`

(optional) an array of Maps defining roles to assign to the user. Each Map must contain:
- `"roleId"` (String) — the role identifier
- `"siteId"` (Number) — the site ID for the role
- `"startDate"` (java.util.Date) — role validity start date
- `"endDate"` (java.util.Date, optional) — role validity end date

> ✅ **Returns**
>
> the created `Prm01User` object, or `null` on error

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## createValueImports

Creates a new Value Import configuration for importing data from an Excel file into a database table. A Value Import defines the mapping between Excel cell coordinates and database table fields.

Syntax
```javascript
//return Long type
var risp = utils.createValueImports(
	dbTableId, //Long
	directoryId, //Long
	fileName, //String
	description, //String
	note, //String
	inputData, //String
	breakOnColumnsEmpty, //Long
	breakOnRowsEmpty //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dbTableId | Long | the database table identifier to import data into (required) | 
| directoryId | Long | the platform directory identifier where the Excel source file is located (required) | 
| fileName | String | the Excel file name to use as source (required) | 
| description | String | an optional textual description for this import configuration | 
| note | String | an optional note associated with this import configuration | 
| inputData | String | JSON-formatted text defining the cell-to-field mapping (required) | 
| breakOnColumnsEmpty | Long | the number of consecutive empty columns that signal end of data; defaults to 5 if null | 
| breakOnRowsEmpty | Long | the number of consecutive empty rows that signal end of data; defaults to 5 if null | 

> ✅ **Returns**
>
> the newly created Value Import identifier (Long)

> ⚠️ **Throws**
>
> - `Throwable` if a server error occurs during creation


---

## debugAll

return all variables names+values, as a JSON string

Syntax
```javascript
//return String type
var risp = utils.debugAll();
```

> ✅ **Returns**
>
> all variables names+values, as a JSON string


---

## debugVariable

Extract the variable value defined withing this action.

Syntax
```javascript
//return String type
var risp = utils.debugVariable(
	variableName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| variableName | String | name of the JavaScript variable to inspect; dotted notation such as parent.child is supported for nested maps. | 

> ✅ **Returns**
>
> variable name=value as a string


---

## debug

Logs a message at DEBUG level. Shorthand for `log(msg, "DEBUG")`.

Syntax
```javascript
utils.debug(
	msg //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| msg | String | the log message text @see #log(String, String) | 


---

## decodeBase64

Decodes a Base64-encoded string into its original UTF-8 text representation.

Syntax
```javascript
//return String type
var risp = utils.decodeBase64(
	plainText //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| plainText | String | the Base64-encoded string to decode | 

> ✅ **Returns**
>
> the decoded UTF-8 string


---

## decodeEncToken

Decript a token.

Syntax
```javascript
//return String type
var risp = utils.decodeEncToken(
	encToken //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| encToken | String | encrypted token text to decrypt. | 

> ✅ **Returns**
>
> decripted token


---

## decodeFile

Decrypts a file stored in a platform directory. The source file is downloaded from the file management system, decrypted using the platform's decoding algorithm, and the resulting decrypted file is uploaded back to the same directory.

Syntax
```javascript
//return Boolean type
var risp = utils.decodeFile(
	sorgDirId, //Long
	sorgFileName, //String
	destFileName, //String
	removeSorgFile //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sorgDirId | Long | the platform directory ID where the encrypted source file is located | 
| sorgFileName | String | the name of the encrypted source file to decrypt (may include a relative sub-path) | 
| destFileName | String | the name for the decrypted output file | 
| removeSorgFile | Boolean | if `true`, the original encrypted file is deleted after decryption | 

> ✅ **Returns**
>
> `true` if the operation completes successfully, or `null` if the directory ID is invalid

> ⚠️ **Throws**
>
> - `Throwable` if a file access, I/O, or decryption error occurs


---

## decodePassword

Decript a password.

Syntax
```javascript
//return String type
var risp = utils.decodePassword(
	encriptedPassword //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| encriptedPassword | String | encrypted password text previously produced by the platform encoder. | 

> ✅ **Returns**
>
> decripted password


---

## deleteApplUserParameter

Deletes one or more application-level user parameters for a specific user. Removes `Prm40ApplUserPar` records identified by the given code IDs.

Syntax
```javascript
//return ListResponse type
var risp = utils.deleteApplUserParameter(
	companyId, //String
	siteId, //Long
	userCodeId, //String
	parameters //Map[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| companyId | String | the company identifier | 
| siteId | Long | the site identifier | 
| userCodeId | String | the user code whose parameters are being deleted | 
| parameters | Map[] | an array of Maps, each representing a parameter to delete. Expected keys: _(details below)_ | 

#### `parameters`

an array of Maps, each representing a parameter to delete. Expected keys:
- `"codeId"` (String) — the parameter code identifier to delete (required)

> ✅ **Returns**
>
> a `ListResponse` containing the result of the delete operation, or `null` if an error occurs

> ⚠️ **Throws**
>
> - `Throwable` if a server communication error occurs


---

## deleteCompanyRelation

Deletes one or more subject relations for a user within a company. Looks up the user by company/site/userCode, then removes the `Sub38SubRelation` entries linking the user's subject to the specified company subject for the given relation types.

Syntax
```javascript
//return ListResponse type
var risp = utils.deleteCompanyRelation(
	companyId, //String
	siteId, //Long
	companySubjectId, //String
	userCodeId, //String
	relations //Map[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| companyId | String | the company identifier | 
| siteId | Long | the site identifier | 
| companySubjectId | String | the parent subject identifier (company subject) the relation is with | 
| userCodeId | String | the user code (will be uppercased) whose subject relations are being removed | 
| relations | Map[] | an array of Maps, each representing a relation to delete. Expected keys: _(details below)_ | 

#### `relations`

an array of Maps, each representing a relation to delete. Expected keys:
- `"relationSubId"` (String) — the relation sub-type identifier (SUB39)

> ✅ **Returns**
>
> a `ListResponse` containing the result of the delete operation, or `null` if an error occurs

> ⚠️ **Throws**
>
> - `Throwable` if a server communication error occurs


---

## deleteFTPDirectory

Deletes a remote directory on an FTP/SFTP server. If the directory is not empty and `forceIsNotEmpty` is `true`, all contents are recursively removed before deleting the directory.

Syntax
```javascript
//return boolean type
var risp = utils.deleteFTPDirectory(
	protocol, //String
	host, //String
	port, //Integer
	useSSL, //Boolean
	username, //String
	password, //String
	remoteDir, //String
	forceIsNotEmpty, //Boolean
	sessionTimeout //Integer
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| protocol | String | the FTP protocol type (e.g. "FTP", "FTPS", "SFTP") | 
| host | String | FTP server host | 
| port | Integer | FTP server port | 
| useSSL | Boolean | flag used to open a secure connection with the FTP server | 
| username | String | username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| password | String | password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| remoteDir | String | the remote directory path to remove | 
| forceIsNotEmpty | Boolean | if `true`, forces deletion even when the directory contains files or subdirectories | 
| sessionTimeout | Integer | seconds of timeout for the FTP session | 

> ✅ **Returns**
>
> `true` if the directory was deleted successfully, `false` if an error occurred

> ⚠️ **Throws**
>
> - `Throwable` declared but internally caught; errors are silently handled returning `false`


---

## deleteFTPFile [Deprecated]

Delete a remote file stored in a folder of the FTP server.

Syntax
```javascript
//return boolean type
var risp = utils.deleteFTPFile(
	host, //String
	port, //Integer
	useSSL, //Boolean
	username, //String
	password, //String
	remoteDir, //String
	fileName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| host | String | FTP server host | 
| port | Integer | FTP server port | 
| useSSL | Boolean | flag used to open a secure connection with the FTP server | 
| username | String | username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| password | String | password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| remoteDir | String | folder in the FTP server to read | 
| fileName | String | file to delete | 


---

## deleteFTPFile

Delete a remote file stored in a folder of the FTP server.

Syntax
```javascript
//return boolean type
var risp = utils.deleteFTPFile(
	protocol, //String
	host, //String
	port, //Integer
	useSSL, //Boolean
	username, //String
	password, //String
	remoteDir, //String
	fileName, //String
	sessionTimeout //Integer
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| protocol | String | FTP protocol type to use for the connection, for example FTP, FTPS, or SFTP. | 
| host | String | FTP server host | 
| port | Integer | FTP server port | 
| useSSL | Boolean | flag used to open a secure connection with the FTP server | 
| username | String | username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| password | String | password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| remoteDir | String | folder in the FTP server to read | 
| fileName | String | file to delete | 
| sessionTimeout | Integer | seconds of timeout session | 


---

## deleteFTPFile

Delete a remote file stored in a folder of the FTP server.

Syntax
```javascript
//return boolean type
var risp = utils.deleteFTPFile(
	protocol, //String
	host, //String
	port, //Integer
	useSSL, //Boolean
	username, //String
	password, //String
	remoteDir, //String
	fileName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| protocol | String | FTP protocol type to use for the connection, for example FTP, FTPS, or SFTP. | 
| host | String | FTP server host | 
| port | Integer | FTP server port | 
| useSSL | Boolean | flag used to open a secure connection with the FTP server | 
| username | String | username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| password | String | password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| remoteDir | String | folder in the FTP server to read | 
| fileName | String | file to delete | 


---

## deleteMappedObject

Execute an DELETE SQL statement into the specified table, starting from the javascript NEUTRAL object passed as argument, containing many more attributes, not all related to such a table. The right attributes to take into account from the neutral object will be selected using the mapping defined to the specified data model and table name. All object attributes will be converted to database fields (uncamel format); example: productCode -> PRODUCT_CODE A pks set is also needed in order to generate the right WHERE clause

Syntax
```javascript
//return boolean type
var risp = utils.deleteMappedObject(
	neutralObject, //Map
	dataModelId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	pks //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| neutralObject | Map | javascript object to insert into the specified table | 
| dataModelId | Long | data model id, which MUST have MAPPER type, containing the mapping needed to extract the right attributes | 
| separatedTransaction | Boolean | flag used to define if this query has to be perfomed in a separated transaction | 
| interruptExecution | Boolean | flag used to defined if the whole server side transation must be interruped and rollbacked in case of errors | 
| pks | String[] | attribute names, expressed in camelCase, that compose the primary key/WHERE clause used to identify the record to delete. | 

> ✅ **Returns**
>
> `true` if the record has been successfully deleted

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## deleteMappedObject

Execute an DELETE SQL statement into the specified table, starting from the javascript NEUTRAL object passed as argument, containing many more attributes, not all related to such a table. The right attributes to take into account from the neutral object will be selected using the mapping defined to the specified data model and table name. All object attributes will be converted to database fields (uncamel format); example: productCode -> PRODUCT_CODE A pks set is also needed in order to generate the right WHERE clause

Syntax
```javascript
//return boolean type
var risp = utils.deleteMappedObject(
	neutralObject, //Map
	tableName, //String
	dataModelId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	pks //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| neutralObject | Map | javascript object to insert into the specified table | 
| tableName | String | table name which must be defined as a writable object | 
| dataModelId | Long | data model id, which MUST have MAPPER type, containing the mapping needed to extract the right attributes | 
| separatedTransaction | Boolean | flag used to define if this query has to be perfomed in a separated transaction | 
| interruptExecution | Boolean | flag used to defined if the whole server side transation must be interruped and rollbacked in case of errors | 
| pks | String[] | attribute names, expressed in camelCase, that compose the primary key/WHERE clause used to identify the record to delete. | 

> ✅ **Returns**
>
> `true` if the record has been successfully deleted

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## deleteMessages

Delete a list of messages in the email server.

Syntax
```javascript
//return Boolean type
var risp = utils.deleteMessages(
	server, //String
	port, //Integer
	username, //String
	password, //String
	protocol, //String
	useTLS, //Boolean
	messageIdsToDelete, //String[]
	messageNumbersToDelete, //Integer[]
	folderName, //String
	trashName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| server | String | server host | 
| port | Integer | server port | 
| username | String | username to use when accessing the email server | 
| password | String | password to use when accessing the email server | 
| protocol | String | protocol to use when connecting to the email server | 
| useTLS | Boolean | flag used to enabled the TLS mode | 
| messageIdsToDelete | String[] | list of message ids found in the email server, filtered according to the specified filter values | 
| messageNumbersToDelete | Integer[] | list of message numbers found in the email server, filtered according to the specified filter values | 
| folderName | String | name of the folder where the messages to delete are located | 
| trashName | String | trash name. If not found, the list of folders will be logged out | 

> ✅ **Returns**
>
> `true` if delete has been completed successfully, `false otherwise


---

## deleteMessages

Delete a list of messages in the email server.

Syntax
```javascript
//return Boolean type
var risp = utils.deleteMessages(
	server, //String
	port, //Integer
	username, //String
	password, //String
	protocol, //String
	useTLS, //Boolean
	messagesToDelete, //String[]
	startSendDateFilter, //Date
	endSendDateFilter, //Date
	startReceiveDateFilter, //Date
	endReceiveDateFilter, //Date
	folderName, //String
	trashName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| server | String | server host | 
| port | Integer | server port | 
| username | String | username to use when accessing the email server | 
| password | String | password to use when accessing the email server | 
| protocol | String | protocol to use when connecting to the email server | 
| useTLS | Boolean | flag used to enabled the TLS mode | 
| messagesToDelete | String[] | list of message identifiers to delete before applying the date-based folder/trash logic. | 
| startSendDateFilter | Date | optional parameter; if not null, messages to read will be filtered by sending date: only the ones next or equal to this date wil be returned | 
| endSendDateFilter | Date | optional parameter; if not null, messages to read will be filtered by sending date: only the ones previous or equal to this date wil be returned | 
| startReceiveDateFilter | Date | optional parameter; if not null, messages to read will be filtered by receiving date: only the ones next or equal to this date wil be returned | 
| endReceiveDateFilter | Date | optional parameter; if not null, messages to read will be filtered by receiving date: only the ones previous or equal to this date wil be returned | 
| folderName | String | name of the folder where the messages to delete are located | 
| trashName | String | trash name. If not found, the list of folders will be logged out | 

> ✅ **Returns**
>
> `true` if delete has been completed successfully, `false otherwise


---

## deleteObject

Execute a DELETE SQL statement into the specified table, starting from the javascript object passed as argument. All object attributes will be converted to database fields (uncamel format); example: productCode -> PRODUCT_CODE

Syntax
```javascript
//return boolean type
var risp = utils.deleteObject(
	obj, //Map
	tableName, //String
	dataSourceId, //Long
	separatedTransaction, //Boolean
	interruptExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| obj | Map | javascript object whose keys are attribute names in camelCase and whose values identify the record to delete; in practice it should contain the table primary-key attributes and any additional fields required by the delete logic. | 
| tableName | String | table name which must be defined as a writable object (iut must have a data mode) | 
| dataSourceId | Long | optional data source id | 
| separatedTransaction | Boolean | flag used to define if this query has to be perfomed in a separated transaction | 
| interruptExecution | Boolean | flag used to defined if the whole server side transation must be interruped and rollbacked in case of errors | 

> ✅ **Returns**
>
> `true` if the record has been successfully deleted

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## deleteValueImport

Physically deletes all data associated with a Value Import configuration, including the import header, cell mappings, and any related metadata.

Syntax
```javascript
//return String type
var risp = utils.deleteValueImport(
	valueImportId //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| valueImportId | Long | the identifier of the Value Import to delete | 

> ✅ **Returns**
>
> a result string indicating the outcome of the deletion

> ⚠️ **Throws**
>
> - `Throwable` if a server error occurs during deletion


---

## dequeueProcess

Remove the specified process instance from the queue.

Syntax
```javascript
//return boolean type
var risp = utils.dequeueProcess(
	queueName, //String
	progressive //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| queueName | String | name of the queue containing the process to remove. | 
| progressive | Long | progressive identifier of the queued process instance to remove. | 

> ✅ **Returns**
>
> `false` if the process has been already terminated or does not exist


---

## disableValueImport

Logically deletes (disables) a Value Import configuration by marking its header as inactive. The import data is retained but the configuration is no longer usable until re-enabled.

Syntax
```javascript
//return String type
var risp = utils.disableValueImport(
	valueImportId //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| valueImportId | Long | the identifier of the Value Import to disable | 

> ✅ **Returns**
>
> a result string indicating the outcome of the operation

> ⚠️ **Throws**
>
> - `Throwable` if a server error occurs during the disable operation


---

## duplicateBlobInPRM17

Duplicate the BLOB content (ACTIVATION_KEY) in PRM17_APPLICATIONS from one company to another.

Syntax
```javascript
//return Integer type
var risp = utils.duplicateBlobInPRM17(
	appId, //String
	fromCompanyId, //String
	toCompanyId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| appId | String | application identifier used to locate the PRM17 record | 
| fromCompanyId | String | source company identifier from which the BLOB is read | 
| toCompanyId | String | target company identifier where the BLOB will be written | 

> ✅ **Returns**
>
> number of processed (updated) rows

> ⚠️ **Throws**
>
> - `Throwable` in case of database or I/O errors


---

## duplicateValueImports

Duplicates an existing Value Import configuration, optionally overriding the source file and metadata. Creates a new Value Import based on an existing one, preserving cell-to-field mappings.

Syntax
```javascript
//return String type
var risp = utils.duplicateValueImports(
	valueImportId, //Long
	directoryId, //Long
	fileName, //String
	description, //String
	note, //String
	inputData, //String
	breakOnColumnsEmpty, //Long
	breakOnRowsEmpty, //Long
	ignoreSheet //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| valueImportId | Long | the identifier of the existing Value Import to duplicate (required) | 
| directoryId | Long | optional platform directory identifier; if null, keeps the original directory | 
| fileName | String | optional new file name; if null, keeps the original file reference | 
| description | String | optional new description; if null, keeps the original description | 
| note | String | optional new note; if null, keeps the original note | 
| inputData | String | JSON-formatted text defining the cell-to-field mapping (required) | 
| breakOnColumnsEmpty | Long | the number of consecutive empty columns that signal end of data; defaults to 5 if null | 
| breakOnRowsEmpty | Long | the number of consecutive empty rows that signal end of data; defaults to 5 if null | 
| ignoreSheet | Boolean | if true, skips sheet comparison with the previous mapping and removes stale references | 

> ✅ **Returns**
>
> a JSON string with the result of the duplication operation

> ⚠️ **Throws**
>
> - `Throwable` if a server error occurs or the source Value Import does not exist


---

## duplicateValueImports

Duplicates an existing Value Import configuration, optionally overriding the source file and metadata. Creates a new Value Import based on an existing one, preserving cell-to-field mappings.

Syntax
```javascript
//return String type
var risp = utils.duplicateValueImports(
	valueImportId, //Long
	directoryId, //Long
	fileName, //String
	description, //String
	note, //String
	inputData, //String
	breakOnColumnsEmpty, //Long
	breakOnRowsEmpty //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| valueImportId | Long | the identifier of the existing Value Import to duplicate (required) | 
| directoryId | Long | optional platform directory identifier; if null, keeps the original directory | 
| fileName | String | optional new file name; if null, keeps the original file reference | 
| description | String | optional new description; if null, keeps the original description | 
| note | String | optional new note; if null, keeps the original note | 
| inputData | String | JSON-formatted text defining the cell-to-field mapping (required) | 
| breakOnColumnsEmpty | Long | the number of consecutive empty columns that signal end of data; defaults to 5 if null | 
| breakOnRowsEmpty | Long | the number of consecutive empty rows that signal end of data; defaults to 5 if null | 

> ✅ **Returns**
>
> a JSON string with the result of the duplication operation

> ⚠️ **Throws**
>
> - `Throwable` if a server error occurs or the source Value Import does not exist


---

## encodeFile

Encrypts a file stored in a platform directory. The source file is downloaded from the file management system, encrypted using the platform's encoding algorithm, and the resulting encrypted file is uploaded back to the same directory.

Syntax
```javascript
//return Boolean type
var risp = utils.encodeFile(
	sorgDirId, //Long
	sorgFileName, //String
	destFileName, //String
	removeSorgFile //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sorgDirId | Long | the platform directory ID where the source file is located | 
| sorgFileName | String | the name of the source file to encrypt (may include a relative sub-path) | 
| destFileName | String | the name for the encrypted output file | 
| removeSorgFile | Boolean | if `true`, the original source file is deleted after encryption | 

> ✅ **Returns**
>
> `true` if the operation completes successfully, or `null` if the directory ID is invalid

> ⚠️ **Throws**
>
> - `Throwable` if a file access, I/O, or encryption error occurs


---

## encodePassword

Encript a password.

Syntax
```javascript
//return String type
var risp = utils.encodePassword(
	password //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| password | String | plain-text password to encrypt using the platform utility encoder. | 


---

## enqueueActionWithNoteAsString



Syntax
```javascript
//return String type
var risp = utils.enqueueActionWithNoteAsString(
	queueName, //String
	actionId, //Long
	params, //Map
	priority, //String
	processWaitTime, //Long
	logExecution, //Boolean
	note, //String
	maxRetries //Integer
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| queueName | String | optional queue name; if null or empty, the default queue is used. | 
| actionId | Long | server-side JavaScript action identifier to enqueue. | 
| params | Map | map passed to the queued action as its input object; supported keys include queueTimeout, actionIdWhenFinished, actionIdWhenTimeout, maxNumberRetries, waitTimespan, and actionIdWhenError. | 
| priority | String | optional queue priority used to sort processes inside the queue. | 
| processWaitTime | Long | optional delay in seconds before the queued process becomes eligible for execution. | 
| logExecution | Boolean | true to write execution details into LOG60_LOGS. | 
| note | String | optional note stored together with the queued process entry. | 
| maxRetries | Integer | optional maximum retry count stored with the queued request when retry handling is enabled. | 

> ✅ **Returns**
>
> the element id is returned as a String


---

## enqueueActionWithNote

Add a server-side JS action as a process to a specific queue.

Syntax
```javascript
//return Long type
var risp = utils.enqueueActionWithNote(
	queueName, //String
	actionId, //Long
	params, //Map
	priority, //String
	processWaitTime, //Long
	logExecution, //Boolean
	note //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| queueName | String | optional: queue name; if not specified, the process will be enqueued in the DEFAULT queue | 
| actionId | Long | server-side JS action id | 
| params | Map | map of parameters to pass to the action (as "vo" argument); if it is filled and there is an attribute named "queueTimeout", then its value, expressed in minutes, will be used to force its termination if it is filled and there is an attribute named "actionIdWhenFinished", then the specified server-side js action will be automatically invoked at the end of the process if it is filled and there is an attribute named "actionIdWhenTimeout", then the specified server-side js action will be automatically invoked in case the process has timeouted if it is filled and there are 2 attributes named "maxNumberRetries" and "waitTimespan", then the current action will be re-enqueued with a wait of "waitTimespan" seconds and it will retry for up to "maxNumberRetries" times if it is filled and there is an attribute named "actionIdWhenError", then the specified server-side js action will be automatically invoked if the action fires and error (and terminates); this event is postponed in case "maxNumberRetries" and "waitTimespan" have been filled | 
| priority | String | optional; if specified, processes within the same queue will be sorted according to the priority rather than to the enqueing time | 
| processWaitTime | Long | optional; if specified, the process will not be started before that time, expressed in seconds | 
| logExecution | Boolean | `true` to log in LOG60_LOGS the execution of the process | 
| note | String | optional textual note to associate with the enqueued process, useful for debugging or auditing purposes | 

> ✅ **Returns**
>
> null in case of errors, the queue's element identifier within the queue


---

## enqueueAction

Add a server-side JS action as a process to a specific queue.

Syntax
```javascript
//return Long type
var risp = utils.enqueueAction(
	queueName, //String
	actionId, //Long
	params, //Map
	priority, //String
	processWaitTime, //Long
	logExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| queueName | String | optional: queue name; if not specified, the process will be enqueued in the DEFAULT queue | 
| actionId | Long | server-side JS action id | 
| params | Map | map of parameters to pass to the action (as "vo" argument); if it is filled and there is an attribute named "queueTimeout", then its value, expressed in minutes, will be used to force its termination. | 
| priority | String | optional; if specified, processes within the same queue will be sorted according to the priority rathe than to the enqueing time | 
| processWaitTime | Long | optional; if specified, the process will not be started before that time, expressed in seconds | 
| logExecution | Boolean | `true` to log in LOG60_LOGS the execution of the process | 

> ✅ **Returns**
>
> null in case of errors, the queue's element identifier within the queue


---

## enqueueActionsFromSqlQuery

Executes the specified SQL query on the given datasource and, for each resulting record, enqueues the specified action in the named queue, passing the record data as input.

Syntax
```javascript
utils.enqueueActionsFromSqlQuery(
	queueName, //String
	payload, //String
	actionId, //Long
	datasourceId, //Long
	sqlQuery, //String
	params //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| queueName | String | the name of the queue where actions will be enqueued | 
| payload | String | an optional payload string to include with each enqueued action | 
| actionId | Long | the server-side action identifier to execute for each record | 
| datasourceId | Long | the platform datasource identifier to execute the SQL query against | 
| sqlQuery | String | the SQL SELECT query to execute; each result row triggers an action enqueue | 
| params | Object[] | optional bind parameters for the SQL query (positional placeholders) | 

> ⚠️ **Throws**
>
> - `Throwable` if the query execution or enqueue operation fails


---

## enqueueShellCommand

Add shell command as a process to a specific queue.

Syntax
```javascript
//return Long type
var risp = utils.enqueueShellCommand(
	queueName, //String
	cmd, //String
	priority, //String
	processWaitTime, //Long
	logExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| queueName | String | optional: queue name; if not specified, the process will be enqueued in the DEFAULT queue | 
| cmd | String | shell command to execute | 
| priority | String | optional; if specified, processes within the same queue will be sorted according to the priority rathe than to the enqueing time | 
| processWaitTime | Long | optional; if specified, the process will not be started before that time, expressed in seconds | 
| logExecution | Boolean | `true` to log in LOG60_LOGS the execution of the process | 

> ✅ **Returns**
>
> null in case of errors, the queue's element identifier within the queue


---

## enqueueWebService

Add a web service invocation as a process to a specific queue.

Syntax
```javascript
//return Long type
var risp = utils.enqueueWebService(
	queueName, //String
	url, //String
	params, //Map
	priority, //String
	processWaitTime, //Long
	logExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| queueName | String | optional: queue name; if not specified, the process will be enqueued in the DEFAULT queue | 
| url | String | URI of the web service to call | 
| params | Map | map of parameters to pass to the action (as "vo" argument) | 
| priority | String | optional; if specified, processes within the same queue will be sorted according to the priority rathe than to the enqueing time | 
| processWaitTime | Long | optional; if specified, the process will not be started before that time, expressed in seconds | 
| logExecution | Boolean | `true` to log in LOG60_LOGS the execution of the process | 

> ✅ **Returns**
>
> null in case of errors, the queue's element identifier within the queue


---

## error

Logs a message at ERROR level. Shorthand for `log(msg, "ERROR")`.

Syntax
```javascript
utils.error(
	msg //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| msg | String | the log message text @see #log(String, String) | 


---

## executeMappedQueryWithCallback

Starting from a MAPPER type data model, execute a SQL query automatically generated, starting from the SELECT and FROM clauses defined through a mapping to a specific data source id (inherited at application level), combined with the WHERE, ORDER BY, GROUP BY and HAVING clauses specified here. A JavaScript callback function is invoked for each row read from the result set, allowing row-by-row processing without loading the entire result set into memory.

Syntax
```javascript
function callbackFunName(data) \{
	
\}

utils.executeMappedQueryWithCallback(
	callbackFunName, //String
	where, //String
	groupBy, //String
	having, //String
	orderBy, //String
	dataModelId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| callbackFunName | String | the name of the JavaScript callback function to invoke for each row; the function receives a JSON object representing one result row | 
| where | String | optional argument: if filled in, it represents the WHERE condition to append to the base SQL query (DO NOT specify the WHERE keyword) | 
| groupBy | String | optional argument: if filled in, it represents the GROUP BY condition to append to the base SQL query (DO NOT specify the GROUP BY keyword) | 
| having | String | optional argument: if filled in, it represents the HAVING condition to append to the base SQL query (DO NOT specify the HAVING keyword) | 
| orderBy | String | optional argument: if filled in, it represents the ORDER BY condition to append to the base SQL query (DO NOT specify the ORDER BY keyword) | 
| dataModelId | Long | required data model id, which must have a MAPPER type | 
| separatedTransaction | Boolean | if `true`, the query is executed in a new, independent transaction; if `false`, it participates in the current transaction | 
| interruptExecution | Boolean | if `true`, a SQL error will interrupt the entire server-side action execution; if `false`, the error is logged but execution continues | 
| pars | Object[] | optional bind parameters for the SQL query, corresponding to `?` placeholders in the SQL string, in positional order | 

> ⚠️ **Throws**
>
> - `Throwable` if a database error occurs, or if the callback function throws a `RuntimeException` (which will interrupt the entire row processing)
- `RuntimeException` if the specified `dataModelId` is invalid or does not reference a MAPPER type data model


---

## executeMappedQuery

Starting from a MAPPER type data model, execute a SQL query automatically generated, starting from the SELECT and FROM clauses defined through a mapping to a specific data source id (inherited at application level), combined with the WHERE, ORDER BY, GROUP BY and HAVING clauses specified here. This method returns the WHOLE result set, expressed as a JSON list of objects.

Syntax
```javascript
//return String type
var risp = utils.executeMappedQuery(
	where, //String
	groupBy, //String
	having, //String
	orderBy, //String
	dataModelId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| where | String | optional argument: if filled in, it represents the WHERE condition to append to the base SQL query (DO NOT specify the WHERE keyword) | 
| groupBy | String | optional argument: if filled in, it represents the GROUP BY condition to append to the base SQL query (DO NOT specify the GROUP BY keyword) | 
| having | String | optional argument: if filled in, it represents the HAVING condition to append to the base SQL query (DO NOT specify the HAVING keyword) | 
| orderBy | String | optional argument: if filled in, it represents the ORDER BY condition to append to the base SQL query (DO NOT specify the ORDER BY keyword) | 
| dataModelId | Long | required data model id, which must have a MAPPER type | 
| separatedTransaction | Boolean | if `true`, the query is executed in a new, independent transaction; if `false`, it participates in the current transaction | 
| interruptExecution | Boolean | if `true`, a SQL error will interrupt the entire server-side action execution; if `false`, the error is logged but execution continues | 
| pars | Object[] | optional bind parameters for the SQL query, corresponding to `?` placeholders in the SQL string, in positional order | 

> ✅ **Returns**
>
> a JSON string representing the entire result set as an array of objects

> ⚠️ **Throws**
>
> - `Throwable` if a database error occurs and `interruptExecution` is `true`
- `RuntimeException` if the specified `dataModelId` is invalid or does not reference a MAPPER type data model


---

## executeQueryReplaceVariables

Execute a SQL SELECT query on the specified data source, after replacing platform variables within the SQL string that match the given prefix, and return the entire result set as a JSON string.

Syntax
```javascript
//return String type
var risp = utils.executeQueryReplaceVariables(
	sql, //String
	variablePrefix, //String
	dataStoreId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sql | String | the SQL SELECT query to execute, potentially containing platform variables | 
| variablePrefix | String | the prefix used to identify variables within the SQL string that should be replaced with their runtime values (e.g., `":"` for `:VARIABLE_NAME`) | 
| dataStoreId | Long | the data source id identifying the target database schema; if null, the default data source is used | 
| separatedTransaction | Boolean | if `true`, the query is executed in a new, independent transaction; if `false`, it participates in the current transaction | 
| interruptExecution | Boolean | if `true`, a SQL error will interrupt the entire server-side action execution; if `false`, the error is logged but execution continues | 
| pars | Object[] | optional bind parameters for the SQL query, corresponding to `?` placeholders in the SQL string, in positional order | 

> ✅ **Returns**
>
> a JSON string representing the result set as an array of objects

> ⚠️ **Throws**
>
> - `Throwable` if a database error occurs and `interruptExecution` is `true`


---

## executeQueryWithAlias

Execute a SQL SELECT query on the specified data source and return the result set as a JSON string, using column aliases defined by the given data model. When a `dataModelId` is provided, the result columns are renamed according to the alias mappings configured in that data model.

Syntax
```javascript
//return String type
var risp = utils.executeQueryWithAlias(
	sql, //String
	dataStoreId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	dataModelId, //Long
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sql | String | the SQL SELECT query to execute | 
| dataStoreId | Long | the data source id identifying the target database schema; if null, the default data source is used | 
| separatedTransaction | Boolean | if `true`, the query is executed in a new, independent transaction; if `false`, it participates in the current transaction | 
| interruptExecution | Boolean | if `true`, a SQL error will interrupt the entire server-side action execution; if `false`, the error is logged but execution continues | 
| dataModelId | Long | optional data model id used to resolve column aliases; if null, column names from the result set metadata are used as-is | 
| pars | Object[] | optional bind parameters for the SQL query, corresponding to `?` placeholders in the SQL string, in positional order | 

> ✅ **Returns**
>
> a JSON string representing the result set as an array of objects, with column names potentially aliased according to the specified data model

> ⚠️ **Throws**
>
> - `Throwable` if a database error occurs and `interruptExecution` is `true`


---

## executeQueryWithCallback

Execute a SQL SELECT query on the specified data source and invoke a JavaScript callback function for each row read from the result set. This approach avoids loading the entire result set into memory, making it suitable for processing large data sets row by row. The specified callback function must accept a single argument: a JavaScript object representing the current row, with column names as property keys. The callback is evaluated using either the Rhino engine (`cx.evaluateString`) or the JSR-223 ScriptEngine, depending on which is available.

Syntax
```javascript
function callbackFunName(data) \{
	
\}

utils.executeQueryWithCallback(
	callbackFunName, //String
	sql, //String
	dataStoreId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| callbackFunName | String | the name of the JavaScript callback function to invoke for each row; the function receives a JSON object representing one result row | 
| sql | String | the SQL SELECT query to execute | 
| dataStoreId | Long | the data source id identifying the target database schema; if null, the default data source is used | 
| separatedTransaction | Boolean | if `true`, the query is executed in a new, independent transaction; if `false`, it participates in the current transaction | 
| interruptExecution | Boolean | if `true`, a SQL error will interrupt the entire server-side action execution; if `false`, the error is logged but execution continues | 
| pars | Object[] | optional bind parameters for the SQL query, corresponding to `?` placeholders in the SQL string, in positional order | 

> ⚠️ **Throws**
>
> - `Throwable` if a database error occurs, or if the callback function throws a `RuntimeException` (which will interrupt the entire row processing)


---

## executeQuery

Execute a SQL SELECT query on the specified data source and return the entire result set as a JSON string. The result is a JSON array of objects, where each object represents a row with column names as keys.

Syntax
```javascript
//return String type
var risp = utils.executeQuery(
	sql, //String
	dataStoreId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sql | String | the SQL SELECT query to execute | 
| dataStoreId | Long | the data source id identifying the target database schema; if null, the default data source is used | 
| separatedTransaction | Boolean | if `true`, the query is executed in a new, independent transaction; if `false`, it participates in the current transaction | 
| interruptExecution | Boolean | if `true`, a SQL error will interrupt the entire server-side action execution; if `false`, the error is logged but execution continues | 
| pars | Object[] | optional bind parameters for the SQL query, corresponding to `?` placeholders in the SQL string, in positional order | 

> ✅ **Returns**
>
> a JSON string representing the result set as an array of objects (e.g., `[\{"COL1":"val1","COL2":123`, ...]\})

> ⚠️ **Throws**
>
> - `Throwable` if a database error occurs and `interruptExecution` is `true`


---

## executeShellCommand

Execute a command on the shell. Optionally, a list of arguments can be passed to the command.

Syntax
```javascript
//return String type
var risp = utils.executeShellCommand(
	command, //String
	arguments //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| command | String | command to execute; it must include the absolute path to the command and must end with a .sh or .bat with no spaces within | 
| arguments | String[] | zero or more String type arguments; [] otherwise | 

> ✅ **Returns**
>
> the exit code produced by the command execution


---

## executeSqlBatch

Execute a batch SQL operation that reads rows from a source query and writes them to a destination table using either INSERT, UPDATE, or UPDATE-with-INSERT-fallback (upsert) logic. The operation processes rows in configurable block sizes (default 10,000) and commits after each block, making it suitable for large data transfers between tables or databases. **Behavior when `updateSql` is specified:** Execute batch updates for N rows (where N = blockSize, default 10,000) Commit the batch For rows where update affected 0 records (record not found), execute insertSql if specified Continue until the end of the result set **Behavior when only `insertSql` is specified:** Execute batch inserts for N rows (where N = blockSize, default 10,000) Commit the batch Continue until the end of the result set

Syntax
```javascript
//return Long type
var risp = utils.executeSqlBatch(
	settings //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| settings | Map | a Map containing the batch configuration with the following expected keys: _(details below)_ | 

#### `settings`

a Map containing the batch configuration with the following expected keys:
- **`"selectSql"`** (`String`, **required**) — the SQL SELECT query to read source data. Fields in the SELECT must be in the same positional order as `?` placeholders in insertSql/updateSql.
- **`"srcDataStoreId"`** (`Number`, optional) — the data source id for the source query; if null, the default data source is used.
- **`"selectParameters"`** (`List`, optional) — bind parameters for the selectSql query, in positional order.
- **`"insertSql"`** (`String`, conditionally required) — the INSERT statement to execute for each source row. Required if `updateSql` is not specified. The number of `?` placeholders must match the number of columns in selectSql.
- **`"updateSql"`** (`String`, conditionally required) — the UPDATE statement to execute for each source row. Either `insertSql` or `updateSql` (or both) must be specified. The SET clause placeholders (`?`) must match the SELECT columns in order, followed by additional `?` for the WHERE clause (pk fields).
- **`"destDataStoreId"`** (`Number`, optional) — the data source id for the destination INSERT/UPDATE; if null, the default data source is used.
- **`"blockSize"`** (`Number`, optional) — the number of rows to batch before committing; defaults to 10,000 if not specified or if value is <= 0.
- **`"pk"`** (`List`, conditionally required) — list of column names (or aliases) from the SELECT clause that form the primary key, used to build the WHERE condition for updates. Required when `updateSql` is specified.**Example (insert only):** `\{ selectSql: "SELECT CUSTOMER_ID,CORPORATE_NAME FROM CUSTOMERS WHERE STATUS=?", selectParameters: ["E"], insertSql: "INSERT INTO CLIENTS(CLIENT_ID,CORP_NAME,CREATE_USER,CREATE_DATE,STATUS,ROW_VERSION) VALUES(?,?,'BATCH',NOW(),'E',1)" ` \} **Example (upsert — update with insert fallback):** `\{ selectSql: "SELECT CUSTOMER_ID,CORPORATE_NAME FROM CUSTOMERS WHERE STATUS=?", selectParameters: ["E"], updateSql: "UPDATE CLIENTS SET CLIENT_ID=?,CORP_NAME=? WHERE ID_CLIENT=?", insertSql: "INSERT INTO CLIENTS(CLIENT_ID,CORP_NAME) VALUES(?,?)", pk: ["CUSTOMER_ID"] ` \} Note: SELECT fields MUST be in the same positional order as `?` variables in updateSql/insertSql. For updateSql, the pk columns are appended as additional `?` parameters after the SET columns.

> ✅ **Returns**
>
> the total number of rows processed (inserted + updated)

> ⚠️ **Throws**
>
> - `Exception` if a database error occurs, if required settings keys are missing, or if the datasource id is invalid/not enabled
- `RuntimeException` if `"selectSql"` is missing, if neither `"insertSql"` nor `"updateSql"` is specified, or if `"updateSql"` is specified without `"pk"`


---

## executeSqlFile

Execute a series of SQL statements, stored in the specified file.

Syntax
```javascript
//return Integer type
var risp = utils.executeSqlFile(
	sqlFile, //String
	dataStoreId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sqlFile | String | absolute path + file name, related to the SQL script to execute | 
| dataStoreId | Long | optional datastore identifier to use when executing the SQL statements | 
| separatedTransaction | Boolean | flag used to define if the SQL statements must be executed in a separated transaction | 
| interruptExecution | Boolean | flag used to define if the JS action has to be interrupted and a rollback performed, in case of errors | 
| pars | Object[] | parameters required by the statements, included between square brackets [] | 

> ✅ **Returns**
>
> number of processed statements


---

## executeSqlNoLog

Execute a SQL DML statement (INSERT, UPDATE, DELETE) on the specified data source, without logging the SQL statement to the platform logger. This variant is useful for high-frequency operations where logging would produce excessive output.

Syntax
```javascript
//return Integer type
var risp = utils.executeSqlNoLog(
	sql, //String
	dataStoreId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sql | String | the SQL DML statement to execute (INSERT, UPDATE, DELETE) | 
| dataStoreId | Long | the data source id identifying the target database schema; if null, the default data source is used | 
| separatedTransaction | Boolean | if `true`, the statement is executed in a new, independent transaction; if `false`, it participates in the current transaction | 
| interruptExecution | Boolean | if `true`, a SQL error will interrupt the entire server-side action execution; if `false`, the error is logged but execution continues | 
| pars | Object[] | optional bind parameters for the SQL statement, corresponding to `?` placeholders in the SQL string, in positional order | 

> ✅ **Returns**
>
> the number of rows affected by the DML statement

> ⚠️ **Throws**
>
> - `Throwable` if a database error occurs and `interruptExecution` is `true`


---

## executeSqlReplaceVariables

Execute a SQL DML statement (INSERT, UPDATE, DELETE) on the specified data source, after replacing platform variables within the SQL string that match the given prefix. Variables in the SQL are identified by the prefix and substituted with their runtime values before execution. The SQL statement is logged.

Syntax
```javascript
//return Integer type
var risp = utils.executeSqlReplaceVariables(
	sql, //String
	variablePrefix, //String
	dataStoreId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sql | String | the SQL DML statement to execute, potentially containing platform variables | 
| variablePrefix | String | the prefix used to identify variables within the SQL string that should be replaced with their runtime values (e.g., `":"` for `:VARIABLE_NAME`) | 
| dataStoreId | Long | the data source id identifying the target database schema; if null, the default data source is used | 
| separatedTransaction | Boolean | if `true`, the statement is executed in a new, independent transaction; if `false`, it participates in the current transaction | 
| interruptExecution | Boolean | if `true`, a SQL error will interrupt the entire server-side action execution; if `false`, the error is logged but execution continues | 
| pars | Object[] | optional bind parameters for the SQL statement, corresponding to `?` placeholders in the SQL string, in positional order | 

> ✅ **Returns**
>
> the number of rows affected by the DML statement

> ⚠️ **Throws**
>
> - `Throwable` if a database error occurs and `interruptExecution` is `true`


---

## executeSql

Execute a SQL DML statement (INSERT, UPDATE, DELETE) on the specified data source. The SQL statement is logged to the platform logger.

Syntax
```javascript
//return Integer type
var risp = utils.executeSql(
	sql, //String
	dataStoreId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sql | String | the SQL DML statement to execute (INSERT, UPDATE, DELETE) | 
| dataStoreId | Long | the data source id identifying the target database schema; if null, the default data source is used | 
| separatedTransaction | Boolean | if `true`, the statement is executed in a new, independent transaction (via `ServerProxyFactory.getServerProxy().serverCall()`) that is committed/rolled back independently of the caller's transaction; if `false`, the statement participates in the current transaction using a local `WAGJsUtilsBean` instance | 
| interruptExecution | Boolean | if `true`, a SQL error will interrupt the entire server-side action execution and trigger a rollback; if `false`, the error is logged but execution continues | 
| pars | Object[] | optional bind parameters for the SQL statement, corresponding to `?` placeholders in the SQL string, in positional order | 

> ✅ **Returns**
>
> the number of rows affected by the DML statement

> ⚠️ **Throws**
>
> - `Throwable` if a database error occurs and `interruptExecution` is `true`


---

## executeStoredFunction

Execute a stored function (or stored procedure) on the specified data source and return its result as a string. This is typically used to invoke database-level functions that return a scalar value.

Syntax
```javascript
//return String type
var risp = utils.executeStoredFunction(
	sql, //String
	dataStoreId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sql | String | the SQL statement to call the stored function (e.g., `"\{ ? = call my_function(?, ?) `"\}) | 
| dataStoreId | Long | the data source id identifying the target database schema; if null, the default data source is used | 
| separatedTransaction | Boolean | if `true`, the call is executed in a new, independent transaction; if `false`, it participates in the current transaction | 
| interruptExecution | Boolean | if `true`, a SQL error will interrupt the entire server-side action execution; if `false`, the error is logged but execution continues | 
| pars | Object[] | optional bind parameters for the stored function call, corresponding to `?` placeholders in the SQL string, in positional order | 

> ✅ **Returns**
>
> the string representation of the value returned by the stored function

> ⚠️ **Throws**
>
> - `Throwable` if a database error occurs and `interruptExecution` is `true`


---

## executeValueImportFunction

Evaluates a formula-like function expression using pre-fetched cell values from an Excel file. Supports nested function calls such as `sum(...)`, `cellValue(...)`, and can reference cells across multiple sheets.

Syntax
```javascript
//return Object type
var risp = utils.executeValueImportFunction(
	function, //String
	sheetName, //String
	values //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| function | String | the function expression to evaluate, e.g., `"sum(sum(cellValue(\"E4\"), cellValue(\"E8\")), cellValue(\"Sheet1!E9\"))"` | 
| sheetName | String | optional default sheet name context; when cell references in the function do not include a sheet prefix, this value is used (e.g., "Sheet1") | 
| values | Map | a Map of pre-fetched cell values where keys are cell references in the format `"SheetName!CellRef"` (e.g., `"Sheet1!E4"`) and values are the corresponding cell contents (Number, String, etc.) | 

> ✅ **Returns**
>
> the computed result of the function evaluation

> ⚠️ **Throws**
>
> - `Throwable` if the function expression is invalid or a server error occurs


---

## existUser

Checks if a user exists in the system for the given company, site, and user code.

Syntax
```javascript
//return Prm01User type
var risp = utils.existUser(
	companyId, //String
	siteId, //Long
	userCodeId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| companyId | String | the company identifier | 
| siteId | Long | the site identifier | 
| userCodeId | String | the user code identifier (will be converted to uppercase) | 

> ✅ **Returns**
>
> the `Prm01User` object if the user exists, or `null` if not found or on error


---

## exportFromExcelFile

Exports specific areas from a source Excel file into a new destination Excel file. Allows selective extraction of defined cell ranges (areas) from one workbook to another.

Syntax
```javascript
//return boolean type
var risp = utils.exportFromExcelFile(
	sourceDirId, //Long
	sourceFileName, //String
	destDirId, //Long
	destFileName, //String
	areas //List
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sourceDirId | Long | the platform directory identifier where the source Excel file is located | 
| sourceFileName | String | the name of the source Excel file | 
| destDirId | Long | the platform directory identifier where the destination file will be created | 
| destFileName | String | the name of the destination Excel file to create | 
| areas | List | a list of area definitions specifying the cell ranges to export | 

> ✅ **Returns**
>
> true if the export completed successfully

> ⚠️ **Throws**
>
> - `Throwable` if a server error occurs during export


---

## fileExists

Check for file existence in the local file system.

Syntax
```javascript
//return boolean type
var risp = utils.fileExists(
	filePath //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| filePath | String |  | 


---

## findTagsByNames

Scroll all input nodes and for each create a js object whose attributes are the subtags having the specified tagNames.

Syntax
```javascript
//return Map[] type
var risp = utils.findTagsByNames(
	nodes, //Map[]
	tagNames //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| nodes | Map[] | nodes to analyze | 
| tagNames | String[] | list of tag names to compare with each subtag of each node Example: nodes = XY...... getTagValues(nodes,["firstname","lastname"]) will return js objects having this structure: \{ firstname: "X", lastname: "Y" \}, \{...\} | 


---

## findTagsByPath

Search for the specified path.

Syntax
```javascript
//return Map[] type
var risp = utils.findTagsByPath(
	xmlDoc, //Map[]
	path //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| xmlDoc | Map[] | XML document parsed through parseXML method | 
| path | String | a tags path, expressed as tag1/tag2/tag3... | 

> ✅ **Returns**
>
> all occurrences matching the specified path


---

## forceCompanyId

Force the company id to use in UserInfo.

Syntax
```javascript
utils.forceCompanyId(
	companyId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| companyId | String |  | 


---

## forceStartProcess

Force the starting of the specified enqueued process.

Syntax
```javascript
//return boolean type
var risp = utils.forceStartProcess(
	queueName, //String
	progressive //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| queueName | String | name of the queue containing the process to start immediately. | 
| progressive | Long | progressive identifier of the queued process instance to force-start. | 

> ✅ **Returns**
>
> `false` if the process has been already terminated or does not exist


---

## formatNumber

Formats a numeric value to a string representation with configurable grouping and decimal settings.

Syntax
```javascript
//return String type
var risp = utils.formatNumber(
	value, //Number
	grouping, //Boolean
	groupingSymbol, //String
	decimals, //Number
	decimalSymbol //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| value | Number | the numeric value to format; if `null`, returns `null` | 
| grouping | Boolean | if `true`, thousands grouping is applied | 
| groupingSymbol | String | the character to use as thousands separator (e.g. "." or ",") | 
| decimals | Number | the number of decimal places to display | 
| decimalSymbol | String | the character to use as decimal separator (e.g. "." or ",") | 

> ✅ **Returns**
>
> the formatted number as a string, or `null` if value is `null`


---

## forwardEmail

Forward the specified email.

Syntax
```javascript
//return Boolean type
var risp = utils.forwardEmail(
	server, //String
	port, //Integer
	username, //String
	password, //String
	protocol, //String
	useTLS, //Boolean
	to, //String
	subject, //String
	text, //String
	messageId, //String
	smtpHost, //String
	smtpPort, //String
	smtpProtocol, //String
	smtpUsername, //String
	smtpPassword //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| server | String | server host | 
| port | Integer | server port | 
| username | String | username to use when accessing the email server | 
| password | String | password to use when accessing the email server | 
| protocol | String | protocol to use when connecting to the email server | 
| useTLS | Boolean | flag used to enabled the TLS mode | 
| to | String | destination address | 
| subject | String | optional: subject to add to the original subject | 
| text | String | optional: text to include to the original body | 
| messageId | String | email message identifier to forward | 
| smtpHost | String | SMTP server host used to send the forwarded email. | 
| smtpPort | String | SMTP server port used to send the forwarded email. | 
| smtpProtocol | String | SMTP transport protocol to use for the forwarded email, for example smtp or smtps. | 
| smtpUsername | String | SMTP username used for authenticated forwarding. | 
| smtpPassword | String | SMTP password paired with smtpUsername for authenticated forwarding. | 

> ✅ **Returns**
>
> `true` if the email messages has been forwarded successfully, `false` otherwise

> ⚠️ **Throws**
>
> - `Exception`


---

## generateXML

Convert a JavaScript object into an XML document, mapping attribute names to XML tags and attribute values to tag content. The result is saved to a file in the specified directory.

Syntax
```javascript
utils.generateXML(
	jsonObj, //Map
	header, //String
	rootNode, //String
	dirId, //Long
	fileName, //String
	attrMapping, //String>
	listMapping, //Map
	settings //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| jsonObj | Map | the JavaScript object to convert to XML | 
| header | String | XML header declaration (e.g. `""`); can be null | 
| rootNode | String | the root XML tag name (e.g. `""`) | 
| dirId | Long | platform directory ID where the XML file will be saved | 
| fileName | String | the file name to use for the generated XML document | 
| attrMapping | String> | (optional: can be null); a Map<String, String> defining custom attribute-to-tag name mappings. Keys are JavaScript attribute names, values are the XML tag names to use instead. If no mapping is found for an attribute, the attribute name is used as-is for the tag | 
| listMapping | Map | (optional: can be null); a Map<String, String> defining how list (array) attributes are wrapped in XML. Keys are attribute names that contain arrays; values are the XML tag name to use for each element in the list | 
| settings | Map | configuration map (CANNOT be null). Supported keys: _(details below)_ | 

#### `settings`

configuration map (CANNOT be null). Supported keys:
- **"toUpperCase"** (Boolean) — if true, converts attribute names to upper case when creating XML tags (default: false)
- **"xsd"** (String) — relative path within the web context to an .xsd file; used to determine tag order based on the sequence defined in the schema
- **"xsdValidation"** (Boolean) — if true and "xsd" is specified, validates the generated XML against the schema (default: false)
- **"tabSpaces"** (Integer) — number of spaces for each indentation level of nested tags (default: 2)
- **"dateFormat"** (String) — date format pattern for Date objects (default: "yyyy-MM-dd")
- **"decimalFormat"** (String) — numeric format pattern for numbers (default: "#.00")
- **"attributesToConvertToDate"** (String[]) — array of attribute names whose values should be converted from JSON date format ("yyyy-MM-dd HH:mm:ss" or "yyyy-MM-dd") to the format specified in "dateFormat"
- **"tagSequence"** (Map<String, String[]>) — for each parent tag, an ordered list of child tags defining their output sequence. Example: `\{ "TAG1": ["TAG2","TAG3"], "TAG2": ["TAG4","TAG5"] `\}**Note:** either "tagSequence" or "xsd" must be specified to ensure correct tag ordering.

> ⚠️ **Throws**
>
> - `Throwable` if directory resolution fails, file I/O errors occur, or XSD validation fails


---

## getAllFilterParams

return an array of filter values in the same order as the WHERE clause conditions generated by `getAllFilterWhere`, suitable for use as PreparedStatement bind parameters

Syntax
```javascript
//return Object[] type
var risp = utils.getAllFilterParams();
```

> ✅ **Returns**
>
> an array of filter values in the same order as the WHERE clause conditions generated by `getAllFilterWhere`, suitable for use as PreparedStatement bind parameters


---

## getAllFilterWhere

Builds a SQL WHERE clause fragment for ALL active filter conditions using decoded field mappings. Uses the decode fields previously registered via `setDecodeField()` to map attribute names to table-qualified column names. The table parameter is prepended to the field names. Supports UPPER() wrapping when the filter is configured for case-insensitive matching. Example: given `table = "TMP"` and decoded fields for ITEM_CODE and BARCODE, the result would be `"UPPER(TMP.ITEM_CODE) like ? AND TMP.BARCODE = ?"`.

Syntax
```javascript
//return String type
var risp = utils.getAllFilterWhere(
	table //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| table | String | the table alias or name to prefix to decoded field names | 

> ✅ **Returns**
>
> a SQL WHERE clause fragment with `?` placeholders for all matching decoded filter fields, or an empty string if no matching filters are active


---

## getBasePath

return absolute path of WEB-INF/classes folder of Platform application

Syntax
```javascript
//return String type
var risp = utils.getBasePath();
```

> ✅ **Returns**
>
> absolute path of WEB-INF/classes folder of Platform application


---

## getBinaryContentWithSettings

Execute an HTTP(s) connection and fetch the result as binary content, saving it to a local file. This variant accepts a settings Map to provide additional configuration such as custom HTTP headers.

Syntax
```javascript
utils.getBinaryContentWithSettings(
	toFile, //String
	uri, //String
	replaceVariables, //boolean
	httpMethod, //String
	contentType, //String
	requestBody, //String
	user, //String
	pwd, //String
	settings //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| toFile | String | absolute path including the file name, where the binary HTTP response will be saved | 
| uri | String | URI, expressed as http:// or https:// with or without variables, expressed as :XXX | 
| replaceVariables | boolean | flag used to replace variables within the URI (variables are expressed as :XXX) | 
| httpMethod | String | (optional: can be null); if specified, it defines the HTTP method: GET, POST | 
| contentType | String | (optional: can be null); if specified, it defines the content type request (e.g. application/json) | 
| requestBody | String | (optional: can be null); if specified, it defines the request body, expressed as a String (e.g. JSON or XML content) | 
| user | String | (optional: can be null); if specified, it defines the username for BASIC authentication | 
| pwd | String | (optional: can be null); if specified, it defines the password for BASIC authentication | 
| settings | Map | (optional: can be null); additional settings map. Supported keys: _(details below)_ | 

#### `settings`

(optional: can be null); additional settings map. Supported keys:
- **"headers"** (Map<String, String>) — custom HTTP request headers as key-value pairs

> ⚠️ **Throws**
>
> - `Exception` in case of connection, I/O, or authentication errors


---

## getBinaryContent

Execute an HTTP(s) connection and fetch the result, expresses as a binary content

Syntax
```javascript
utils.getBinaryContent(
	toFile, //String
	uri, //String
	replaceVariables, //boolean
	httpMethod, //String
	contentType, //String
	requestBody, //String
	user, //String
	pwd //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| toFile | String | absolute path including the file name, related to the local binary file to create and fill in with the result of this HTTP request | 
| uri | String | URI, expressed as http:// or https:// with or without variables, expressed as :XXX | 
| replaceVariables | boolean | flag used to replace variables within the uri (variables are expressed as :XXX) | 
| httpMethod | String | (optional: can be null); if specified, it defines the HTTP method: GET, POST | 
| contentType | String | (optional: can be null); if specified, it defines the content type request (e.g. application/json) | 
| requestBody | String | (optional: can be null); if specified, it defines the request body, expressed as a String (e.g. a JSON or XML content) | 
| user | String | (optional: can be null); if specified, it defines the username for a BASIC authentication | 
| pwd | String | (optional: can be null); if specified, it defines the password for a BASIC authentication | 

> ✅ **Returns**
>
> the HTTP response, expressed as a binary content

> ⚠️ **Throws**
>
> - `Exception`


---

## getBinaryContent

Execute an HTTP(s) connection and fetch the result, expresses as a binary content

Syntax
```javascript
utils.getBinaryContent(
	toFile, //String
	uri, //String
	replaceVariables, //boolean
	httpMethod, //String
	settings //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| toFile | String | absolute path including the file name, related to the local binary file to create and fill in with the result of this HTTP request | 
| uri | String | URI, expressed as http:// or https:// with or without variables, expressed as :XXX | 
| replaceVariables | boolean | flag used to replace variables within the uri (variables are expressed as :XXX) | 
| httpMethod | String | (optional: can be null); if specified, it defines the HTTP method: GET, POST | 
| settings | Map | map containing HTTP request configuration. Supported keys: _(details below)_ | 

#### `settings`

map containing HTTP request configuration. Supported keys:
- **"contentType"** (String) — the Content-Type header value (e.g. "application/json")
- **"requestBody"** (String or byte[]) — the request body; can also be loaded from a file via "fromFile"
- **"user"** (String) — username for HTTP BASIC authentication
- **"pwd"** (String) — password for HTTP BASIC authentication
- **"headers"** (Map<String, String>) — additional HTTP request headers
- **"fromFile"** (String) — absolute path to a local file whose content will be used as requestBody (binary)
- **"log"** (Boolean) — if false, suppresses request/response logging
- **"timeout"** (Number) — connection and socket timeout in seconds

> ✅ **Returns**
>
> the HTTP response, expressed as a binary content

> ⚠️ **Throws**
>
> - `Exception`


---

## getBlobAsBase64

Retrieves the content of a BLOB field as a Base64-encoded string.

Syntax
```javascript
//return String type
var risp = utils.getBlobAsBase64(
	datastoreId, //Long
	sql, //String
	params //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| datastoreId | Long | optional data source identifier; if `null`, the default is used | 
| sql | String | SQL SELECT query that retrieves a single BLOB column | 
| params | Object[] | bind variable values for the SQL query placeholders | 

> ✅ **Returns**
>
> the BLOB content encoded as a Base64 string

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## getByteDimensionOfString

Calculates the byte size of a string using the platform's default charset encoding.

Syntax
```javascript
//return long type
var risp = utils.getByteDimensionOfString(
	s //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| s | String | the string whose byte size is to be calculated | 

> ✅ **Returns**
>
> the number of bytes the string occupies when encoded with the default charset


---

## getCachedProgressive

Retrieves the next progressive value using an in-memory cache to reduce database lock contention. When a progressives table is accessed concurrently at a very high rate, direct database updates for each increment cause locks and poor performance. This method caches a range of progressive values in memory, returning the next cached value without touching the database until the range is exhausted. Only when the cached range is consumed does it perform a database UPDATE to reserve the next range. If the record does not exist in the progressives table, it is automatically inserted with the specified initial value and fields.

Syntax
```javascript
//return Long type
var risp = utils.getCachedProgressive(
	settings //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| settings | Map | a Map containing the progressive configuration with the following expected keys: _(details below)_ | 

#### `settings`

a Map containing the progressive configuration with the following expected keys:
- **datasourceId** (Number, optional): data source identifier for the progressives table; if null, the default data source is used
- **tableName** (String, required): name of the progressives table
- **pkFields** (List<String>, required): list of field names composing the primary key
- **pkValues** (List, required): list of values for the PK fields (same order as pkFields)
- **updateFields** (List<String>, required): additional fields to update when incrementing the current value (e.g., USER_ID_UPDATE, LAST_UPDATE)
- **updateValues** (List, required): values for the additional update fields
- **currentValueField** (String, required): field name in the progressives table containing the current value
- **incrementValue** (Number, required): how much to increase the current value on each database update (defines the size of the cached range)
- **initialValue** (Number, required): initial value to set when inserting a new record because it was not found
- **insertFields** (List<String>, optional): list of fields to populate when inserting a new record (do NOT include currentValueField)
- **insertValues** (List, optional): values for the insert fields**Example:** `var settings = \{ datasourceId: null, tableName: "INI21_GLOBAL_SEQUENCES", pkFields: ["TABLE_NAME","FIELD_NAME"], pkValues: ["AAAA","PROG_ID"], updateFields: ["USER_ID_UPDATE","LAST_UPDATE"], updateValues: [userInfo.username, utils.getCurrentDateAndTime()], currentValueField: "CURRENT_VALUE", incrementValue: 2, initialValue: utils.getInitialValue(), insertFields: ["INITIAL_VALUE","INCREMENT_VALUE","IS_CYCLE","MAX_NUMBER","USER_ID_CREATE","CREATE_DATE","ROW_VERSION","STATUS"], insertValues: [utils.getInitialValue(), 2, "F", null, userInfo.username, utils.getCurrentDateAndTime(), 0, "E"] `; \}

> ✅ **Returns**
>
> the next progressive value (Long)

> ⚠️ **Throws**
>
> - `Throwable` if required settings keys are missing (tableName, pkFields, pkValues, updateFields, updateValues, currentValueField, incrementValue) or a database error occurs


---

## getCatalog

Retrieves the database catalog name for the specified datasource. Opens a direct JDBC connection to the datasource and returns the catalog name.

Syntax
```javascript
//return String type
var risp = utils.getCatalog(
	datasourceId //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| datasourceId | Long | the platform datasource identifier to connect to | 

> ✅ **Returns**
>
> the catalog name associated with the JDBC connection, or `null` if not available

> ⚠️ **Throws**
>
> - `Throwable` if a connection or database access error occurs


---

## getCellsValue

Retrieves cell values and evaluates functions from an Excel (xlsx) file. Supports direct cell coordinate lookups and custom formula-like functions (e.g., sum, cellValue).

Syntax
```javascript
//return Map type
var risp = utils.getCellsValue(
	directoryId, //Long
	fileName, //String
	coordinates, //List
	functions //List
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| directoryId | Long | the platform directory identifier where the Excel file is located | 
| fileName | String | the name of the xlsx file to read | 
| coordinates | List | a list of objects specifying cell coordinates to read, each with structure: `\{ sheetName: "Sheet1", cellCoordinate: "A3" `\} | 
| functions | List | a list of objects specifying functions to evaluate, each with structure: `\{ sheetName: "Sheet1", function: "sum(cellValue(\"E4\"), cellValue(\"E8\"))" `\} | 

> ✅ **Returns**
>
> a Map where keys are cell references in the format `"SheetName!CellRef"` (e.g., "Sheet1!A3") and values are the corresponding cell values (including intermediate values needed for function evaluation)

> ⚠️ **Throws**
>
> - `Throwable` if the file cannot be read or a processing error occurs


---

## getCertMessageFromPdf

Extracts the digital certificate message from a signed PDF file. The source PDF is read from the directory identified by `srcDirectoryId`, the certificate is extracted via the `CertBean.getCertMessageFromPdf` remote call, and the resulting document (without signature) is saved to the directory identified by `destDirectoryId`.

Syntax
```javascript
//return Map type
var risp = utils.getCertMessageFromPdf(
	srcDirectoryId, //Long
	destDirectoryId, //Long
	fileName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| srcDirectoryId | Long | directory identifier where the source PDF is located | 
| destDirectoryId | Long | directory identifier where the output document will be saved | 
| fileName | String | the PDF file name (used in both source and destination directories) | 

> ✅ **Returns**
>
> a Map containing the certificate message details extracted from the PDF

> ⚠️ **Throws**
>
> - `Throwable` in case of I/O or server communication errors


---

## getCertMessage

Read the specified file from the source directory and extract signed data and the embedded document. The embedded document is then saved in the destination directory.

Syntax
```javascript
//return Map type
var risp = utils.getCertMessage(
	srcDirectoryId, //Long
	destDirectoryId, //Long
	fileName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| srcDirectoryId | Long | id used to identify a source folder in the server file system where the file to read has been stored | 
| destDirectoryId | Long | id used to identify the destination folder where the extracted embedded document will be saved. | 
| fileName | String | file name inside the specified folder | 

> ✅ **Returns**
>
> signed data and the embedded document

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## getCertMessage

Read the specified file from the source directory and extract signed data and the embedded document. The embedded document is then saved in the destination directory.

Syntax
```javascript
//return Map type
var risp = utils.getCertMessage(
	srcFileName, //String
	destFolder //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| srcFileName | String | path + file name to analyze | 
| destFolder | String | destination folder; if not specified, the srcFolder will be used | 

> ✅ **Returns**
>
> signed data and the embedded document

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## getColumnsInQuery
Syntax
```javascript
//return String type
var risp = utils.getColumnsInQuery(
	datastoreId, //Long
	query //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| datastoreId | Long |  | 
| query | String |  | 


---

## getColumnsInTable
Syntax
```javascript
//return String type
var risp = utils.getColumnsInTable(
	datastoreId, //Long
	tableName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| datastoreId | Long |  | 
| tableName | String | String: name of table | 


---

## getCompanyApplParameter

Retrieves an application-specific parameter value for the given company and site.

Syntax
```javascript
//return String type
var risp = utils.getCompanyApplParameter(
	companyId, //String
	siteId, //Long
	paramId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| companyId | String | the company identifier | 
| siteId | Long | the site identifier | 
| paramId | String | the parameter code identifier | 

> ✅ **Returns**
>
> the parameter value as a String, or `null` if not found

> ⚠️ **Throws**
>
> - `Throwable` in case of server communication errors


---

## getConversationFromTag

Get the whole conversation (list of messages), starting from a tag included at some point in the conversation.

Syntax
```javascript
//return Con60Logs[] type
var risp = utils.getConversationFromTag(
	messageTag //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| messageTag | String | tag used to locate the conversation and return all messages belonging to it. | 


---

## getConversation

Get the whole conversation (list of messages), starting from the conversation id.

Syntax
```javascript
//return Con60Logs[] type
var risp = utils.getConversation(
	conversationId //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| conversationId | Long | conversation identifier whose full message history must be retrieved. | 


---

## getCount

Gets the current count for the specified column in the given table and increments it by the given value. Useful for managing custom counters with filter conditions.

Syntax
```javascript
//return Long type
var risp = utils.getCount(
	tableName, //String
	valueColumnName, //String
	incrementValue, //String
	where, //String
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	dataSourceId //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| tableName | String | table name containing the counter | 
| valueColumnName | String | column name that holds the counter value | 
| incrementValue | String | increment value to apply to the counter | 
| where | String | SQL WHERE clause to filter the counter record (e.g. "COMPANY_ID='00000'") | 
| separatedTransaction | Boolean | if `true`, the operation is executed in a separate transaction | 
| interruptExecution | Boolean | if `true`, on error the execution is interrupted with rollback | 
| dataSourceId | Long | data source identifier to use; if `null`, the default one is used | 

> ✅ **Returns**
>
> the updated counter value

> ⚠️ **Throws**
>
> - `Throwable` in case of errors during the operation


---

## getCount

Gets the current count for the specified column in the given table and increments it by the given value. Useful for managing custom counters with filter conditions.

Syntax
```javascript
//return Long type
var risp = utils.getCount(
	tableName, //String
	valueColumnName, //String
	incrementValue, //String
	where, //String
	separatedTransaction, //Boolean
	interruptExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| tableName | String | table name containing the counter | 
| valueColumnName | String | column name that holds the counter value | 
| incrementValue | String | increment value to apply to the counter | 
| where | String | SQL WHERE clause to filter the counter record (e.g. "COMPANY_ID='00000'") | 
| separatedTransaction | Boolean | if `true`, the operation is executed in a separate transaction | 
| interruptExecution | Boolean | if `true`, on error the execution is interrupted with rollback | 

> ✅ **Returns**
>
> the updated counter value

> ⚠️ **Throws**
>
> - `Throwable` in case of errors during the operation


---

## getCsvContent

Read up to the specified number of rows, starting from the specified index (0..x) from the csv file stored in the specified path and get back the content of a specific folder.

Syntax
```javascript
//return Map[] type
var risp = utils.getCsvContent(
	sep, //String
	dirId, //String
	fileName, //String
	startRow, //Integer
	blockSize, //Integer
	removeEmptyValues, //Boolean
	attributeNames //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sep | String | tokens separator: ; or , | 
| dirId | String | path identifier | 
| fileName | String | name of the csv file | 
| startRow | Integer | row index; if null it is the first row, i.e. 0 | 
| blockSize | Integer | max number of rows to read, if available; if null it is set to 10000 | 
| removeEmptyValues | Boolean | true to remove all empty values from the list; false to mantain them | 
| attributeNames | String[] | attribute names assigned to each CSV column from left to right when building the returned row maps. | 

> ✅ **Returns**
>
> a list of js objects, where each object is expressed as a set of couples ; a 0 length list in case of no more rows available @parsm attributeNames, list of attributes, assigned to each column, starting from leftmost column to the right


---

## getCurrentDateAndTime

return the current timestamp @throws Throwable in case of errors

Syntax
```javascript
//return Timestamp type
var risp = utils.getCurrentDateAndTime();
```

> ✅ **Returns**
>
> the current timestamp

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## getCurrentDate

return the current date/time as a `Date` @throws Throwable in case of errors

Syntax
```javascript
//return Date type
var risp = utils.getCurrentDate();
```

> ✅ **Returns**
>
> the current date/time as a `Date`

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## getCurrentTime

return the current time @throws Throwable in case of errors

Syntax
```javascript
//return Time type
var risp = utils.getCurrentTime();
```

> ✅ **Returns**
>
> the current time

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## getCustomApplUserVars

Get a custom parameter from the user session.

Syntax
```javascript
//return String type
var risp = utils.getCustomApplUserVars(
	code //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| code | String | custom session-variable key whose value must be returned. | 


---

## getCustomResource

Retrieves a custom translated resource string for the given entry key from the application-specific translations (stored in CON32 table and custom .properties files). Unlike `getResource` which uses the standard i18n bundle, this method looks up application-specific custom translations that can be configured per application instance.

Syntax
```javascript
//return String type
var risp = utils.getCustomResource(
	entry //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| entry | String | the resource key to look up | 

> ✅ **Returns**
>
> the custom translated string, or the entry key itself if no custom translation is found or if the internal state is not available


---

## getDataModelAttrTypes



Syntax
```javascript
//return String type
var risp = utils.getDataModelAttrTypes(
	dataModelId //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dataModelId | Long | data model id, used to compare the attribute value types | 

> ✅ **Returns**
>
> json containing a list of : [\{ "attrName": "...", "attrType": "..."\},...]


---

## getDataStoreId



Syntax
```javascript
//return Long type
var risp = utils.getDataStoreId(
	dataStoreId //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dataStoreId | Long | data store id to use (probably) | 

> ✅ **Returns**
>
> real data store id to use, according to a specific routing rule


---

## getDirectoryPath



Syntax
```javascript
//return String type
var risp = utils.getDirectoryPath(
	directoryId //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| directoryId | Long | directory identifier | 

> ✅ **Returns**
>
> path path defined for the specified id; null if the specified id does not exist


---

## getDriverNameDefaultConnection

return driver name related to the default database connection

Syntax
```javascript
//return String type
var risp = utils.getDriverNameDefaultConnection();
```

> ✅ **Returns**
>
> driver name related to the default database connection


---

## getEmailsWithSettings

Read a list of messages from the email server.

Syntax
```javascript
//return Object type
var risp = utils.getEmailsWithSettings(
	server, //String
	port, //Integer
	username, //String
	password, //String
	protocol, //String
	useTLS, //Boolean
	maxMessagesToRead, //Integer
	notReadFilter, //Boolean
	startSendDateFilter, //Date
	endSendDateFilter, //Date
	startReceiveDateFilter, //Date
	endReceiveDateFilter, //Date
	fromAddressFilter, //String
	subjectFilter, //String
	bodyFilter, //String
	withAttachments, //Boolean
	attachmentsPath, //String
	folderName, //String
	moveToFolderOnceRead, //String
	setAsSeen, //Boolean
	deleteEmailWhenRead, //Boolean
	debug, //Boolean
	settings //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| server | String | server host | 
| port | Integer | server port | 
| username | String | username to use when accessing the email server | 
| password | String | password to use when accessing the email server | 
| protocol | String | protocol to use when connecting to the email server | 
| useTLS | Boolean | flag used to enabled the TLS mode | 
| maxMessagesToRead | Integer | maximum number of messages to read | 
| notReadFilter | Boolean | flag used to filter only messages not read yet | 
| startSendDateFilter | Date | optional parameter; if not null, messages to read will be filtered by sending date: only the ones next or equal to this date wil be returned | 
| endSendDateFilter | Date | optional parameter; if not null, messages to read will be filtered by sending date: only the ones previous or equal to this date wil be returned | 
| startReceiveDateFilter | Date | optional parameter; if not null, messages to read will be filtered by receiving date: only the ones next or equal to this date wil be returned | 
| endReceiveDateFilter | Date | optional parameter; if not null, messages to read will be filtered by receiving date: only the ones previous or equal to this date wil be returned | 
| fromAddressFilter | String | optional parameter; if not null, messages to read will be filtered by the "from address" specified | 
| subjectFilter | String | optional parameter; if not null, messages to read will be filtered and only the ones containing this value in their object will be returned | 
| bodyFilter | String | optional parameter; if not null, messages to read will be filtered and only the ones containing this value in their body content will be returned | 
| withAttachments | Boolean | optional parameter; if not null, messages to read will be filtered and only the ones having at least one attachment will be returned | 
| attachmentsPath | String | absolute path where saving attachments | 
| folderName | String | folder to read; e.g. INBOX; if not specified, it will be set to INBOX | 
| moveToFolderOnceRead | String | move to the specified folder each message, once read; can be null | 
| setAsSeen | Boolean | flag used to mark as "SEEN" a message just read | 
| deleteEmailWhenRead | Boolean | flag used to delete the email message once read | 
| debug | Boolean | flag used to debug the communication with the server | 
| settings | Map | optional additional mail-reader settings forwarded unchanged to ReceiveEmailBean as a HashMap copy; use it for provider-specific JavaMail/store properties or other mailbox-reading options supported by that bean. | 

> ✅ **Returns**
>
> list of messages found in the email server, filtered according to the specified filter values Attributes contained in each message of the list: id - email identified, used to delete an email message later from - from email addresss message - email body subject - email subject mimeType - e.g. "text/plain" or "text/html" list attachments - list of absolute paths where the attachments have been saved


---

## getEmails

Read a list of messages from the email server.

Syntax
```javascript
//return Object type
var risp = utils.getEmails(
	server, //String
	port, //Integer
	username, //String
	password, //String
	protocol, //String
	useTLS, //Boolean
	maxMessagesToRead, //Integer
	notReadFilter, //Boolean
	startDateFilter, //Date
	fromAddressFilter, //String
	subjectFilter, //String
	bodyFilter, //String
	withAttachments, //Boolean
	attachmentsPath, //String
	folderName, //String
	moveToFolderOnceRead, //String
	setAsSeen, //Boolean
	deleteEmailWhenRead, //Boolean
	debug //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| server | String | server host | 
| port | Integer | server port | 
| username | String | username to use when accessing the email server | 
| password | String | password to use when accessing the email server | 
| protocol | String | protocol to use when connecting to the email server | 
| useTLS | Boolean | flag used to enabled the TLS mode | 
| maxMessagesToRead | Integer | maximum number of messages to read | 
| notReadFilter | Boolean | flag used to filter only messages not read yet | 
| startDateFilter | Date | optional parameter; if not null, messages to read will be filtered by send date: only the ones next or equal to this date wil be returned | 
| fromAddressFilter | String | optional parameter; if not null, messages to read will be filtered by the "from address" specified | 
| subjectFilter | String | optional parameter; if not null, messages to read will be filtered and only the ones containing this value in their object will be returned | 
| bodyFilter | String | optional parameter; if not null, messages to read will be filtered and only the ones containing this value in their body content will be returned | 
| withAttachments | Boolean | optional parameter; if not null, messages to read will be filtered and only the ones having at least one attachment will be returned | 
| attachmentsPath | String | absolute path where saving attachments | 
| folderName | String | folder to read; e.g. INBOX; if not specified, it will be set to INBOX | 
| moveToFolderOnceRead | String | move to the specified folder each message, once read; can be null | 
| setAsSeen | Boolean | flag used to mark as "SEEN" a message just read | 
| deleteEmailWhenRead | Boolean | flag used to delete the email message once read | 
| debug | Boolean | flag used to debug the communication with the server | 

> ✅ **Returns**
>
> list of messages found in the email server, filtered according to the specified filter values Attributes contained in each message of the list: id - email identified, used to delete an email message later from - from email addresss message - email body subject - email subject mimeType - e.g. "text/plain" or "text/html" list attachments - list of absolute paths where the attachments have been saved


---

## getEmails

Read a list of messages from the email server.

Syntax
```javascript
//return Object type
var risp = utils.getEmails(
	server, //String
	port, //Integer
	username, //String
	password, //String
	protocol, //String
	useTLS, //Boolean
	maxMessagesToRead, //Integer
	notReadFilter, //Boolean
	startSendDateFilter, //Date
	endSendDateFilter, //Date
	startReceiveDateFilter, //Date
	endReceiveDateFilter, //Date
	fromAddressFilter, //String
	subjectFilter, //String
	bodyFilter, //String
	withAttachments, //Boolean
	attachmentsPath, //String
	folderName, //String
	moveToFolderOnceRead, //String
	setAsSeen, //Boolean
	deleteEmailWhenRead, //Boolean
	debug //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| server | String | server host | 
| port | Integer | server port | 
| username | String | username to use when accessing the email server | 
| password | String | password to use when accessing the email server | 
| protocol | String | protocol to use when connecting to the email server | 
| useTLS | Boolean | flag used to enabled the TLS mode | 
| maxMessagesToRead | Integer | maximum number of messages to read | 
| notReadFilter | Boolean | flag used to filter only messages not read yet | 
| startSendDateFilter | Date | optional parameter; if not null, messages to read will be filtered by sending date: only the ones next or equal to this date wil be returned | 
| endSendDateFilter | Date | optional parameter; if not null, messages to read will be filtered by sending date: only the ones previous or equal to this date wil be returned | 
| startReceiveDateFilter | Date | optional parameter; if not null, messages to read will be filtered by receiving date: only the ones next or equal to this date wil be returned | 
| endReceiveDateFilter | Date | optional parameter; if not null, messages to read will be filtered by receiving date: only the ones previous or equal to this date wil be returned | 
| fromAddressFilter | String | optional parameter; if not null, messages to read will be filtered by the "from address" specified | 
| subjectFilter | String | optional parameter; if not null, messages to read will be filtered and only the ones containing this value in their object will be returned | 
| bodyFilter | String | optional parameter; if not null, messages to read will be filtered and only the ones containing this value in their body content will be returned | 
| withAttachments | Boolean | optional parameter; if not null, messages to read will be filtered and only the ones having at least one attachment will be returned | 
| attachmentsPath | String | absolute path where saving attachments | 
| folderName | String | folder to read; e.g. INBOX; if not specified, it will be set to INBOX | 
| moveToFolderOnceRead | String | move to the specified folder each message, once read; can be null | 
| setAsSeen | Boolean | flag used to mark as "SEEN" a message just read | 
| deleteEmailWhenRead | Boolean | flag used to delete the email message once read | 
| debug | Boolean | flag used to debug the communication with the server | 

> ✅ **Returns**
>
> list of messages found in the email server, filtered according to the specified filter values Attributes contained in each message of the list: id - email identified, used to delete an email message later from - from email addresss message - email body subject - email subject mimeType - e.g. "text/plain" or "text/html" list attachments - list of absolute paths where the attachments have been saved


---

## getEncToken

Encript a token.

Syntax
```javascript
//return String type
var risp = utils.getEncToken(
	pars //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| pars | String[] | token parts to encrypt; the varargs elements are concatenated/processed by the utility to produce a single encrypted token | 

> ✅ **Returns**
>
> encripted token


---

## getEncodedRtk

Encodes the provided parameters into a Base64-encoded RTK (authentication token) string containing credentials information.

Syntax
```javascript
//return String type
var risp = utils.getEncodedRtk(
	pars //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| pars | String[] | variable arguments representing the parameters to encode (typically: companyId, siteId, username, password) | 

> ✅ **Returns**
>
> the Base64-encoded RTK string

> ⚠️ **Throws**
>
> - `Exception` in case of encoding errors


---

## getEntriesList

Get a list of records read from the LDAP server, where each record is expressed as a Javascript object.

Syntax
```javascript
//return Map[] type
var risp = utils.getEntriesList(
	host, //String
	port, //Integer
	baseDN, //String
	ldapUsername, //String
	ldapPassword, //String
	searchAttributes, //String
	attributesListToRead //String>
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| host | String | LDAP host | 
| port | Integer | LDAP port (optional: if not specified, 389 will be used) | 
| baseDN | String | base DN to apply as a filter | 
| ldapUsername | String | username to use to authenticate to the LDAP server | 
| ldapPassword | String | password to use to authenticate to the LDAP server | 
| searchAttributes | String | attributes to apply as a filter | 
| attributesListToRead | String> | list of attribute names to take into account when reading records from the LDAP server: these will be the only ones to use when creating the JSON result | 

> ✅ **Returns**
>
> list of records read from the LDAP server, where each record is expressed as a Javascript object


---

## getEnvironment

return the environment identifier string, or `null` if not configured

Syntax
```javascript
//return String type
var risp = utils.getEnvironment();
```

> ✅ **Returns**
>
> the environment identifier string, or `null` if not configured


---

## getExcelRowsBlock

Reads a block of rows from an Excel file (xls or xlsx) and returns them as an array of Maps. Each Map represents a row, with keys being the attribute names provided and values being the cell contents.

Syntax
```javascript
//return Map[] type
var risp = utils.getExcelRowsBlock(
	dirId, //Long
	fileName, //String
	sheetIndex, //Long
	fromRow, //Long
	toRow, //Long
	attributeNames //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dirId | Long | the platform directory identifier where the Excel file is located | 
| fileName | String | the name of the Excel file to read | 
| sheetIndex | Long | the 1-based sheet index to read from (1, 2, 3...); defaults to 1 if null | 
| fromRow | Long | the 1-based starting row number (1, 2, 3...); defaults to 1 if null | 
| toRow | Long | the 1-based ending row number (inclusive); defaults to fromRow + 10000 if null | 
| attributeNames | String[] | the names to assign to each column in the result Maps (positional mapping) | 

> ✅ **Returns**
>
> an array of Maps, one per row, where each Map has attribute names as keys and cell values as values

> ⚠️ **Throws**
>
> - `Throwable` if `toRow` is less than `fromRow`, if no attribute names are provided, or if a server/file error occurs


---

## getFileLength

Returns the length (in bytes) of the file identified by the given absolute path. If the file does not exist or is a directory, the return value is platform-dependent (typically 0L for non-existent files).

Syntax
```javascript
//return long type
var risp = utils.getFileLength(
	fileAbsolutePath //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileAbsolutePath | String | the absolute path to the file whose length is to be determined | 

> ✅ **Returns**
>
> the length of the file in bytes, or 0L if the file does not exist


---

## getFile [Deprecated]

Download a file from the FTP server and store it in the specified LOCAL folder.

Syntax
```javascript
//return boolean type
var risp = utils.getFile(
	host, //String
	port, //Integer
	useSSL, //Boolean
	username, //String
	password, //String
	ftpDir, //String
	ftpFileName, //String
	localFile //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| host | String | FTP server host | 
| port | Integer | FTP server port | 
| useSSL | Boolean | flag used to open a secure connection with the FTP server | 
| username | String | username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| password | String | password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| ftpDir | String | folder in the FTP server where the file to download resides | 
| ftpFileName | String | file name in the FTP sever to download | 
| localFile | String | folder+file name in the local file system where storing the downloaded file | 

> ✅ **Returns**
>
> `true` if the file stored within the FTP server has been downloaded correctly


---

## getFile

Download a file from the FTP server and store it in the specified LOCAL folder.

Syntax
```javascript
//return boolean type
var risp = utils.getFile(
	protocol, //String
	host, //String
	port, //Integer
	useSSL, //Boolean
	username, //String
	password, //String
	ftpDir, //String
	ftpFileName, //String
	localFile, //String
	sessionTimeout, //Integer
	charset //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| protocol | String | the FTP protocol type (e.g. "FTP", "FTPS", "SFTP") | 
| host | String | FTP server host | 
| port | Integer | FTP server port | 
| useSSL | Boolean | flag used to open a secure connection with the FTP server | 
| username | String | username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| password | String | password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| ftpDir | String | folder in the FTP server where the file to download resides | 
| ftpFileName | String | file name in the FTP sever to download | 
| localFile | String | folder+file name in the local file system where storing the downloaded file | 
| sessionTimeout | Integer | seconds of timeout for the FTP session (nullable) | 
| charset | String | charset to use when writing the local file (e.g. "UTF-8", "ISO-8859-1") | 

> ✅ **Returns**
>
> `true` if the file stored within the FTP server has been downloaded correctly


---

## getFile

Download a file from the FTP server and store it in the specified LOCAL folder.

Syntax
```javascript
//return boolean type
var risp = utils.getFile(
	protocol, //String
	host, //String
	port, //Integer
	useSSL, //Boolean
	username, //String
	password, //String
	ftpDir, //String
	ftpFileName, //String
	localFile, //String
	sessionTimeout //Integer
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| protocol | String | the FTP protocol type (e.g. "FTP", "FTPS", "SFTP") | 
| host | String | FTP server host | 
| port | Integer | FTP server port | 
| useSSL | Boolean | flag used to open a secure connection with the FTP server | 
| username | String | username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| password | String | password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| ftpDir | String | folder in the FTP server where the file to download resides | 
| ftpFileName | String | file name in the FTP sever to download | 
| localFile | String | folder+file name in the local file system where storing the downloaded file | 
| sessionTimeout | Integer | seconds of timeout for the FTP session (nullable) | 

> ✅ **Returns**
>
> `true` if the file stored within the FTP server has been downloaded correctly


---

## getFile

Download a file from the FTP server and store it in the specified LOCAL folder.

Syntax
```javascript
//return boolean type
var risp = utils.getFile(
	protocol, //String
	host, //String
	port, //Integer
	useSSL, //Boolean
	username, //String
	password, //String
	ftpDir, //String
	ftpFileName, //String
	localFile //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| protocol | String | the FTP protocol type (e.g. "FTP", "FTPS", "SFTP") | 
| host | String | FTP server host | 
| port | Integer | FTP server port | 
| useSSL | Boolean | flag used to open a secure connection with the FTP server | 
| username | String | username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| password | String | password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| ftpDir | String | folder in the FTP server where the file to download resides | 
| ftpFileName | String | file name in the FTP sever to download | 
| localFile | String | folder+file name in the local file system where storing the downloaded file | 

> ✅ **Returns**
>
> `true` if the file stored within the FTP server has been downloaded correctly


---

## getFilesInPath



Syntax
```javascript
//return String[] type
var risp = utils.getFilesInPath(
	path //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| path | String | absolute path | 

> ✅ **Returns**
>
> list of file names in the specified path; directories are ignored


---

## getFiles

Get a folder content in the FTP server, filtered according to the specified filter.

Syntax
```javascript
//return String[] type
var risp = utils.getFiles(
	dirId //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dirId | Long | directory id | 

> ✅ **Returns**
>
> list of file names; subfolders will be ignored


---

## getFiles [Deprecated]

Get a folder content in the FTP server, filtered according to the specified filter.

Syntax
```javascript
//return String[] type
var risp = utils.getFiles(
	host, //String
	port, //Integer
	useSSL, //Boolean
	username, //String
	password, //String
	remoteDir, //String
	fileFilter //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| host | String | FTP server host | 
| port | Integer | FTP server port | 
| useSSL | Boolean | flag used to open a secure connection with the FTP server | 
| username | String | username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| password | String | password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| remoteDir | String | folder in the FTP server to read | 
| fileFilter | String | (optional) parameter to use to filter files to read (e.g. .jpg) | 

> ✅ **Returns**
>
> list of file names; subfolders will be ignored


---

## getFiles

Get a folder content in the FTP server, filtered according to the specified filter.

Syntax
```javascript
//return String[] type
var risp = utils.getFiles(
	protocol, //String
	host, //String
	port, //Integer
	useSSL, //Boolean
	username, //String
	password, //String
	remoteDir, //String
	fileFilter, //String
	sessionTimeout //Integer
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| protocol | String | FTP protocol type to use for the connection, for example FTP, FTPS, or SFTP. | 
| host | String | FTP server host | 
| port | Integer | FTP server port | 
| useSSL | Boolean | flag used to open a secure connection with the FTP server | 
| username | String | username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| password | String | password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| remoteDir | String | folder in the FTP server to read | 
| fileFilter | String | (optional) parameter to use to filter files to read (e.g. .jpg) | 
| sessionTimeout | Integer | seconds of timeout session | 

> ✅ **Returns**
>
> list of file names; subfolders will be ignored


---

## getFiles

Get a folder content in the FTP server, filtered according to the specified filter.

Syntax
```javascript
//return String[] type
var risp = utils.getFiles(
	protocol, //String
	host, //String
	port, //Integer
	useSSL, //Boolean
	username, //String
	password, //String
	remoteDir, //String
	fileFilter //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| protocol | String | FTP protocol type to use for the connection, for example FTP, FTPS, or SFTP. | 
| host | String | FTP server host | 
| port | Integer | FTP server port | 
| useSSL | Boolean | flag used to open a secure connection with the FTP server | 
| username | String | username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| password | String | password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| remoteDir | String | folder in the FTP server to read | 
| fileFilter | String | (optional) parameter to use to filter files to read (e.g. .jpg) | 

> ✅ **Returns**
>
> list of file names; subfolders will be ignored


---

## getFilterField

Builds a SQL WHERE clause fragment for a single filter attribute, mapping the attribute name to the specified database field name. If the filter is active for the given attribute, returns a clause like `"TMP.ITEM_CODE like ?"`. Example: given `attrName = "itemCode"` and `fieldName = "TMP.ITEM_CODE"`, the result would be `"TMP.ITEM_CODE like ?"` if the user has filtered on "itemCode".

Syntax
```javascript
//return String type
var risp = utils.getFilterField(
	attrName, //String
	fieldName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| attrName | String | the filter attribute name as defined in the grid/panel | 
| fieldName | String | the fully-qualified database column name to use in the WHERE clause | 

> ✅ **Returns**
>
> a SQL WHERE clause fragment with `?` placeholder, or an empty string if the filter is not active


---

## getFilterParam

Retrieves the filter parameter value for a single attribute from the current grid filter conditions. Returns the value the user entered for the specified filter attribute, suitable for use as a PreparedStatement bind parameter. Example: given `attrName = "itemCode"` and `fieldName = "TMP.ITEM_CODE"`, if the user filtered "itemCode" = "ABC", the result would be `"ABC"`. Numeric values are returned as BigDecimal when parseable.

Syntax
```javascript
//return Object type
var risp = utils.getFilterParam(
	attrName, //String
	fieldName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| attrName | String | the filter attribute name as defined in the grid/panel | 
| fieldName | String | the fully-qualified database column name (used for matching context) | 

> ✅ **Returns**
>
> the filter value (as BigDecimal if numeric, otherwise as-is), or null if no filter is active for this attribute


---

## getFilterParams

Extracts the filter parameter values corresponding to the active filter conditions, for use as bind parameters in a SQL WHERE clause generated by `getFilterWhere`. Only includes values for filters whose attribute names are present in the provided map. Example: given `attributes = \{ itemCode: "TMP.ITEM_CODE", barcode: "TMP.BARCODE" `\}, if the user has filtered "itemCode" = "ABC" and "barcode" = 2, the result would be `["ABC", 2]`.

Syntax
```javascript
//return Object[] type
var risp = utils.getFilterParams(
	attributes //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| attributes | Map | a Map where keys are the filter attribute names (as defined in the grid/panel) and values are the corresponding fully-qualified database column names | 

> ✅ **Returns**
>
> an array of filter values in the same order as the WHERE clause conditions, suitable for use as PreparedStatement bind parameters


---

## getFilterWhere

Builds a SQL WHERE clause fragment from the current grid filter conditions, mapping filter attribute names to the corresponding database table field names. Only includes filter clauses whose attribute names are present in the provided map. Example: given `attributes = \{ itemCode: "TMP.ITEM_CODE", barcode: "TMP.BARCODE" `\}, if the user has filtered on "itemCode" with a LIKE operator, the result would be `"TMP.ITEM_CODE like ? AND TMP.BARCODE = ?"`.

Syntax
```javascript
//return String type
var risp = utils.getFilterWhere(
	attributes //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| attributes | Map | a Map where keys are the filter attribute names (as defined in the grid/panel) and values are the corresponding fully-qualified database column names (e.g., `"TABLE.COLUMN_NAME"`) | 

> ✅ **Returns**
>
> a SQL WHERE clause fragment with `?` placeholders for parameter binding, or an empty string if no matching filters are active


---

## getHtmlElements

Fetches the HTML content from the specified URL and parses it into a Jsoup Document object. The returned Document can be used to navigate and extract elements using CSS selectors.

Syntax
```javascript
//return Document type
var risp = utils.getHtmlElements(
	url //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| url | String | the URL to fetch HTML content from (must be a valid HTTP or HTTPS URL) | 

> ✅ **Returns**
>
> the parsed `Document` representing the HTML structure, or `null` if the connection fails or an error occurs


---

## getHttpResponseCode

return the HTTP status code (default is 200)

Syntax
```javascript
//return int type
var risp = utils.getHttpResponseCode();
```

> ✅ **Returns**
>
> the HTTP status code (default is 200)


---

## getInitialValue

return initial value for counters

Syntax
```javascript
//return Long type
var risp = utils.getInitialValue();
```

> ✅ **Returns**
>
> initial value for counters


---

## getJSONList

Convert a list of javascript objects into its JSON representation: [...]

Syntax
```javascript
//return String type
var risp = utils.getJSONList(
	aux //Map[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| aux | Map[] | array of Map objects to convert to JSON format; each Map represents a JavaScript object and is serialized via `getJSONObject(Map)` | 

> ✅ **Returns**
>
> a JSON representation of a list of objects Note: this result is NOT compatible with an Ext.grid.GridPanel data protocol: see getListResponse instead


---

## getJSONObject [Deprecated]

Convert a javascript object to its JSON representation

Syntax
```javascript
//return String type
var risp = utils.getJSONObject(
	obj //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| obj | Map | javascript object to convert to its JSON representation | 

> ✅ **Returns**
>
> JSON representation


---

## getJSONString

Convert a javascript object to its JSON representation

Syntax
```javascript
//return String type
var risp = utils.getJSONString(
	obj //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| obj | Map | javascript object to convert to its JSON representation | 

> ✅ **Returns**
>
> JSON representation


---

## getLanguageIdFromEmail

Get language id for the user identified by the specified email.

Syntax
```javascript
//return String type
var risp = utils.getLanguageIdFromEmail(
	email //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| email | String | email to use when getting the user | 

> ✅ **Returns**
>
> language id linked to the user


---

## getLanguageIdFromUsername

Get language id for the user identified by the specified username.

Syntax
```javascript
//return String type
var risp = utils.getLanguageIdFromUsername(
	username //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| username | String | username to use when getting the user | 

> ✅ **Returns**
>
> language id linked to the user


---

## getListResponse

Convert a list of javascript objects into its JSON representation: [...] and embed it to a "Ext.grid.GridPanel like" data representation, based on "valueObjectList", "resultSetLength" and "moreRows" attributes.

Syntax
```javascript
//return String type
var risp = utils.getListResponse(
	list, //Map[]
	resultSetLength, //Number
	moreRows //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| list | Map[] | list of javascript objects to convert to JSON format | 
| resultSetLength | Number | list of objects (can be list.length) | 
| moreRows | Boolean | flag used to specify | 

> ✅ **Returns**
>
> a JSON content compatible with Ext grids


---

## getMappedPartialResultWithFieldsToInclude

Starting from a MAPPER type data model, execute a SQL query using a custom SELECT clause (passed as argument) combined with the FROM clause defined through the data model mapping, and the WHERE, ORDER BY, GROUP BY and HAVING clauses specified here. Unlike `getMappedPartialResultWithFieldsToOmit`, this method allows the caller to explicitly specify which fields to include in the SELECT rather than removing from the default set. This base SQL query is then enriched by adding filtering/sorting conditions defined through a `ListCommand` object coming from the HTTP request. The ListCommand also contains pagination settings.

Syntax
```javascript
//return String type
var risp = utils.getMappedPartialResultWithFieldsToInclude(
	select, //String
	where, //String
	groupBy, //String
	having, //String
	orderBy, //String
	dataModelId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	attributesMap, //String>
	totalCount, //Long
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| select | String | the custom SELECT clause to use instead of the data model's default (DO NOT include the SELECT keyword) | 
| where | String | optional argument: if filled in, it represents the WHERE condition to append to the base SQL query (DO NOT specify the WHERE keyword) | 
| groupBy | String | optional argument: if filled in, it represents the GROUP BY condition to append to the base SQL query (DO NOT specify the GROUP BY keyword) | 
| having | String | optional argument: if filled in, it represents the HAVING condition to append to the base SQL query (DO NOT specify the HAVING keyword) | 
| orderBy | String | optional argument: if filled in, it represents the ORDER BY condition to append to the base SQL query (DO NOT specify the ORDER BY keyword) | 
| dataModelId | Long | required data model id, which must have a MAPPER type | 
| separatedTransaction | Boolean | if `true`, the query is executed in a new, independent transaction; if `false`, it participates in the current transaction | 
| interruptExecution | Boolean | if `true`, a SQL error will interrupt the entire server-side action execution; if `false`, the error is logged but execution continues | 
| attributesMap | String> | a map of attribute name to SQL type (as String), used to override the default type detection for specific columns when building filter conditions; can be null | 
| totalCount | Long | if null, a COUNT() query is automatically executed; if provided, this value is used directly as the total row count, skipping the count query | 
| pars | Object[] | optional bind parameters for the SQL query (can be expressed as `[]` in JavaScript), corresponding to `?` placeholders in the SQL string, in positional order | 

> ✅ **Returns**
>
> a JSON string containing `"valueObjectList"` (array of row objects), `"moreRows"` (boolean indicating if more pages exist), and `"resultSetLength"` (total row count)

> ⚠️ **Throws**
>
> - `Throwable` if a database error occurs and `interruptExecution` is `true`
- `RuntimeException` if the specified `dataModelId` is invalid or does not reference a MAPPER type data model


---

## getMappedPartialResultWithFieldsToOmit

Starting from a MAPPER type data model, execute a SQL query automatically generated from the SELECT clause defined through the data model mapping, with specific fields removed according to the `fieldsToOmit` array, combined with the FROM clause from the mapping and the WHERE, ORDER BY, GROUP BY and HAVING clauses specified here. This base SQL query is then enriched by adding filtering/sorting conditions defined through a `ListCommand` object coming from the HTTP request. The ListCommand also contains pagination settings.

Syntax
```javascript
//return String type
var risp = utils.getMappedPartialResultWithFieldsToOmit(
	where, //String
	groupBy, //String
	having, //String
	orderBy, //String
	dataModelId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	attributesMap, //String>
	totalCount, //Long
	fieldsToOmit, //String[]
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| where | String | optional argument: if filled in, it represents the WHERE condition to append to the base SQL query (DO NOT specify the WHERE keyword) | 
| groupBy | String | optional argument: if filled in, it represents the GROUP BY condition to append to the base SQL query (DO NOT specify the GROUP BY keyword) | 
| having | String | optional argument: if filled in, it represents the HAVING condition to append to the base SQL query (DO NOT specify the HAVING keyword) | 
| orderBy | String | optional argument: if filled in, it represents the ORDER BY condition to append to the base SQL query (DO NOT specify the ORDER BY keyword) | 
| dataModelId | Long | required data model id, which must have a MAPPER type | 
| separatedTransaction | Boolean | if `true`, the query is executed in a new, independent transaction; if `false`, it participates in the current transaction | 
| interruptExecution | Boolean | if `true`, a SQL error will interrupt the entire server-side action execution; if `false`, the error is logged but execution continues | 
| attributesMap | String> | a map of attribute name to SQL type (as String), used to override the default type detection for specific columns when building filter conditions; can be null | 
| totalCount | Long | if null, a COUNT() query is automatically executed; if provided, this value is used directly as the total row count, skipping the count query | 
| fieldsToOmit | String[] | array of field names to remove from the data model's default SELECT clause; each entry must match exactly a column name/alias in the SELECT | 
| pars | Object[] | optional bind parameters for the SQL query (can be expressed as `[]` in JavaScript), corresponding to `?` placeholders in the SQL string, in positional order | 

> ✅ **Returns**
>
> a JSON string containing `"valueObjectList"` (array of row objects), `"moreRows"` (boolean indicating if more pages exist), and `"resultSetLength"` (total row count)

> ⚠️ **Throws**
>
> - `Throwable` if a database error occurs and `interruptExecution` is `true`
- `RuntimeException` if the specified `dataModelId` is invalid or does not reference a MAPPER type data model


---

## getMappedPartialResult

Starting from a MAPPER type data model, execute a SQL query automatically generated from the SELECT and FROM clauses defined through a mapping to a specific data source id (inherited at application level), combined with the WHERE, ORDER BY, GROUP BY and HAVING clauses specified here. This base SQL query is then enriched by adding filtering/sorting conditions defined through a `ListCommand` object coming from the HTTP request. The ListCommand also contains pagination settings. Mapped field aliases from the data model are automatically registered in the `decodedFields` map, allowing grid filter attributes to be correctly translated to actual table.field references.

Syntax
```javascript
//return String type
var risp = utils.getMappedPartialResult(
	where, //String
	groupBy, //String
	having, //String
	orderBy, //String
	dataModelId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	attributesMap, //String>
	totalCount, //Long
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| where | String | optional argument: if filled in, it represents the WHERE condition to append to the base SQL query (DO NOT specify the WHERE keyword) | 
| groupBy | String | optional argument: if filled in, it represents the GROUP BY condition to append to the base SQL query (DO NOT specify the GROUP BY keyword) | 
| having | String | optional argument: if filled in, it represents the HAVING condition to append to the base SQL query (DO NOT specify the HAVING keyword) | 
| orderBy | String | optional argument: if filled in, it represents the ORDER BY condition to append to the base SQL query (DO NOT specify the ORDER BY keyword) | 
| dataModelId | Long | required data model id, which must have a MAPPER type | 
| separatedTransaction | Boolean | if `true`, the query is executed in a new, independent transaction; if `false`, it participates in the current transaction | 
| interruptExecution | Boolean | if `true`, a SQL error will interrupt the entire server-side action execution; if `false`, the error is logged but execution continues | 
| attributesMap | String> | a map of attribute name to SQL type (as String), used to override the default type detection for specific columns when building filter conditions; can be null | 
| totalCount | Long | if null, a COUNT() query is automatically executed; if provided, this value is used directly as the total row count, skipping the count query | 
| pars | Object[] | optional bind parameters for the SQL query (can be expressed as `[]` in JavaScript), corresponding to `?` placeholders in the SQL string, in positional order | 

> ✅ **Returns**
>
> a JSON string containing `"valueObjectList"` (array of row objects), `"moreRows"` (boolean indicating if more pages exist), and `"resultSetLength"` (total row count)

> ⚠️ **Throws**
>
> - `Throwable` if a database error occurs and `interruptExecution` is `true`
- `RuntimeException` if the specified `dataModelId` is invalid or does not reference a MAPPER type data model


---

## getMimeType

Detects the MIME type of a file based on its file extension.

Syntax
```javascript
//return String type
var risp = utils.getMimeType(
	filename //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| filename | String | the file name or path to probe | 

> ✅ **Returns**
>
> the detected MIME type (e.g. "application/pdf", "image/png"), or `null` if unknown

> ⚠️ **Throws**
>
> - `IOException` in case of errors during MIME type detection


---

## getMultipleValuesList

Get a list of Strings, related to multiple attribute values, starting from a specified attribute name of a specific entry read from the LDAP server.

Syntax
```javascript
//return String[] type
var risp = utils.getMultipleValuesList(
	host, //String
	port, //Integer
	baseDN, //String
	ldapUsername, //String
	ldapPassword, //String
	searchAttributes, //String
	attributeName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| host | String | LDAP host | 
| port | Integer | LDAP port (optional: if not specified, 389 will be used) | 
| baseDN | String | base DN to apply as a filter | 
| ldapUsername | String | username to use to authenticate to the LDAP server | 
| ldapPassword | String | password to use to authenticate to the LDAP server | 
| searchAttributes | String | attributes to apply as a filter | 
| attributeName | String | attribute name to read: each matching found will generate a row in the results list | 


---

## getObjectTime

Creates a `Time` object from the specified hours, minutes, and seconds.

Syntax
```javascript
//return Time type
var risp = utils.getObjectTime(
	hours, //int
	minutes, //int
	seconds //int
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| hours | int | the hour value (0-23) | 
| minutes | int | the minute value (0-59) | 
| seconds | int | the second value (0-59) | 

> ✅ **Returns**
>
> the constructed Time object

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## getPDFOrientation

Determines the orientation of the first page in the PDF document by comparing the page width and height from its media box.

Syntax
```javascript
//return String type
var risp = utils.getPDFOrientation(
	uuid //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| uuid | String | the output stream identifier returned by `Long, Map)` | 

> ✅ **Returns**
>
> "portrait" if height > width, "landscape" otherwise

> ⚠️ **Throws**
>
> - `Throwable` if the document cannot be accessed
- `RuntimeException` if the PDF file has not been opened (uuid not found)


---

## getPDFPageCount

Returns the total number of pages in the PDF document.

Syntax
```javascript
//return int type
var risp = utils.getPDFPageCount(
	uuid //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| uuid | String | the output stream identifier returned by `Long, Map)` | 

> ✅ **Returns**
>
> the total page count of the document

> ⚠️ **Throws**
>
> - `Throwable` if the document cannot be accessed
- `RuntimeException` if the PDF file has not been opened (uuid not found)


---

## getParameter



Syntax
```javascript
//return String type
var risp = utils.getParameter(
	paramName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| paramName | String | a string value representing a parameter named defined at installation level (CON44 table) or at application level (CON07 table). If none of them are defined, the parameter is searched in the user application parameters list. | 

> ✅ **Returns**
>
> the value defined for the specified parameter name or null if not found; if the parameter is found as an application parameter, that value is returned, otherwise it will be returned the value defined at installation level; If none of them are defined, the parameter is searched in the user application parameters list


---

## getPartialResultNoCount

Execute the specified SQL query and enrich it by adding filtering/sorting conditions defined through the `ListCommand` object, without executing an additional COUNT() query to determine the total result set length. Instead, the provided `totalCount` value is used directly. This variant improves performance when the total row count is already known or when counting is expensive.

Syntax
```javascript
//return String type
var risp = utils.getPartialResultNoCount(
	sql, //String
	dataStoreId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	totalCount, //Long
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sql | String | the base SQL SELECT query to which filtering/sorting/pagination will be applied | 
| dataStoreId | Long | the data source id identifying the target database schema; if null, the default data source is used | 
| separatedTransaction | Boolean | if `true`, the query is executed in a new, independent transaction; if `false`, it participates in the current transaction | 
| interruptExecution | Boolean | if `true`, a SQL error will interrupt the entire server-side action execution; if `false`, the error is logged but execution continues | 
| totalCount | Long | the pre-computed total row count to use in the response; avoids executing a COUNT() query | 
| pars | Object[] | optional bind parameters for the SQL query (can be expressed as `[]` in JavaScript), corresponding to `?` placeholders in the SQL string, in positional order | 

> ✅ **Returns**
>
> a JSON string containing `"valueObjectList"` (array of row objects), `"moreRows"` (boolean indicating if more pages exist), and `"resultSetLength"` (the provided totalCount)

> ⚠️ **Throws**
>
> - `Throwable` if a database error occurs and `interruptExecution` is `true`


---

## getPartialResultNoCount

Execute the specified SQL query and enrich it by adding filtering/sorting conditions defined through the `ListCommand` object, without executing an additional COUNT() query to determine the total result set length. Instead, the provided `totalCount` value is used directly. This variant improves performance when the total row count is already known or when counting is expensive.

Syntax
```javascript
//return String type
var risp = utils.getPartialResultNoCount(
	select, //String
	from, //String
	where, //String
	orderBy, //String
	groupBy, //String
	having, //String
	dataStoreId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	totalCount, //Long
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| select | String | SELECT clause to execute, without the FROM keyword. | 
| from | String | FROM clause, including tables, joins, and aliases. | 
| where | String | optional WHERE clause to apply before dynamic list-command filters are appended. | 
| orderBy | String | optional ORDER BY clause used as the base sorting before list-command sorting is applied. | 
| groupBy | String | optional GROUP BY clause. | 
| having | String | optional HAVING clause used together with groupBy. | 
| dataStoreId | Long | the data source id identifying the target database schema; if null, the default data source is used | 
| separatedTransaction | Boolean | if `true`, the query is executed in a new, independent transaction; if `false`, it participates in the current transaction | 
| interruptExecution | Boolean | if `true`, a SQL error will interrupt the entire server-side action execution; if `false`, the error is logged but execution continues | 
| totalCount | Long | the pre-computed total row count to use in the response; avoids executing a COUNT() query | 
| pars | Object[] | optional bind parameters for the SQL query (can be expressed as `[]` in JavaScript), corresponding to `?` placeholders in the SQL string, in positional order | 

> ✅ **Returns**
>
> a JSON string containing `"valueObjectList"` (array of row objects), `"moreRows"` (boolean indicating if more pages exist), and `"resultSetLength"` (the provided totalCount)

> ⚠️ **Throws**
>
> - `Throwable` if a database error occurs and `interruptExecution` is `true`


---

## getPartialResult

Execute the specified SQL query and enrich it by adding filtering/sorting conditions defined through the `ListCommand` object. The ListCommand contains pagination settings (page number, page size) as well as filter/sort criteria coming from the HTTP request (typically from a grid component). The decoded fields map (populated via `setDecodeField`) is applied to translate grid attribute names to actual table.field references in the generated WHERE/ORDER BY clauses.

Syntax
```javascript
//return String type
var risp = utils.getPartialResult(
	sql, //String
	dataStoreId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sql | String | the base SQL SELECT query to which filtering/sorting/pagination will be applied | 
| dataStoreId | Long | the data source id identifying the target database schema; if null, the default data source is used | 
| separatedTransaction | Boolean | if `true`, the query is executed in a new, independent transaction; if `false`, it participates in the current transaction | 
| interruptExecution | Boolean | if `true`, a SQL error will interrupt the entire server-side action execution; if `false`, the error is logged but execution continues | 
| pars | Object[] | optional bind parameters for the SQL query (can be expressed as `[]` in JavaScript), corresponding to `?` placeholders in the SQL string, in positional order | 

> ✅ **Returns**
>
> a JSON string containing `"valueObjectList"` (array of row objects), `"moreRows"` (boolean indicating if more pages exist), and `"resultSetLength"` (total row count)

> ⚠️ **Throws**
>
> - `Throwable` if a database error occurs and `interruptExecution` is `true`


---

## getPartialResult

Execute the specified SQL query and enrich it by adding filtering/sorting conditions defined through the `ListCommand` object. The ListCommand contains pagination settings (page number, page size) as well as filter/sort criteria coming from the HTTP request (typically from a grid component). The decoded fields map (populated via `setDecodeField`) is applied to translate grid attribute names to actual table.field references in the generated WHERE/ORDER BY clauses.

Syntax
```javascript
//return String type
var risp = utils.getPartialResult(
	sql, //String
	dataStoreId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	attributesMap, //String>
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sql | String | the base SQL SELECT query to which filtering/sorting/pagination will be applied | 
| dataStoreId | Long | the data source id identifying the target database schema; if null, the default data source is used | 
| separatedTransaction | Boolean | if `true`, the query is executed in a new, independent transaction; if `false`, it participates in the current transaction | 
| interruptExecution | Boolean | if `true`, a SQL error will interrupt the entire server-side action execution; if `false`, the error is logged but execution continues | 
| attributesMap | String> | a map of attribute name to SQL type (as String), used to override the default type detection for specific columns when building filter conditions (e.g., forcing a column to be treated as a date or numeric type) | 
| pars | Object[] | optional bind parameters for the SQL query (can be expressed as `[]` in JavaScript), corresponding to `?` placeholders in the SQL string, in positional order | 

> ✅ **Returns**
>
> a JSON string containing `"valueObjectList"` (array of row objects), `"moreRows"` (boolean indicating if more pages exist), and `"resultSetLength"` (total row count)

> ⚠️ **Throws**
>
> - `Throwable` if a database error occurs and `interruptExecution` is `true`


---

## getPartialResult

Execute the specified SQL query and enrich it by adding filtering/sorting conditions defined through the `ListCommand` object. The ListCommand contains pagination settings (page number, page size) as well as filter/sort criteria coming from the HTTP request (typically from a grid component). The decoded fields map (populated via `setDecodeField`) is applied to translate grid attribute names to actual table.field references in the generated WHERE/ORDER BY clauses.

Syntax
```javascript
//return String type
var risp = utils.getPartialResult(
	select, //String
	from, //String
	where, //String
	orderBy, //String
	groupBy, //String
	having, //String
	dataStoreId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| select | String | SELECT clause to execute, without the FROM keyword. | 
| from | String | FROM clause, including tables, joins, and aliases. | 
| where | String | optional WHERE clause to apply before dynamic list-command filters are appended. | 
| orderBy | String | optional ORDER BY clause used as the base sorting before list-command sorting is applied. | 
| groupBy | String | optional GROUP BY clause. | 
| having | String | optional HAVING clause used together with groupBy. | 
| dataStoreId | Long | the data source id identifying the target database schema; if null, the default data source is used | 
| separatedTransaction | Boolean | if `true`, the query is executed in a new, independent transaction; if `false`, it participates in the current transaction | 
| interruptExecution | Boolean | if `true`, a SQL error will interrupt the entire server-side action execution; if `false`, the error is logged but execution continues | 
| pars | Object[] | optional bind parameters for the SQL query (can be expressed as `[]` in JavaScript), corresponding to `?` placeholders in the SQL string, in positional order | 

> ✅ **Returns**
>
> a JSON string containing `"valueObjectList"` (array of row objects), `"moreRows"` (boolean indicating if more pages exist), and `"resultSetLength"` (total row count)

> ⚠️ **Throws**
>
> - `Throwable` if a database error occurs and `interruptExecution` is `true`


---

## getPrintServices

return an array of printer names available on the system

Syntax
```javascript
//return String[] type
var risp = utils.getPrintServices();
```

> ✅ **Returns**
>
> an array of printer names available on the system


---

## getProgressiveForApplicationId

Obtains the next progressive value for the specified column in the given table, using a different application ID than the current one.

Syntax
```javascript
//return Long type
var risp = utils.getProgressiveForApplicationId(
	appId, //String
	tableName, //String
	columnName, //String
	separatedTransaction, //Boolean
	interruptExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| appId | String | the application identifier for which to generate the progressive | 
| tableName | String | table name for which to generate the progressive | 
| columnName | String | column name associated with the progressive | 
| separatedTransaction | Boolean | if `true`, the operation is executed in a separate transaction | 
| interruptExecution | Boolean | if `true`, on error the execution is interrupted with rollback | 

> ✅ **Returns**
>
> the next progressive value

> ⚠️ **Throws**
>
> - `Throwable` in case of errors during progressive retrieval


---

## getProgressive

Obtains the next progressive value for the specified column in the given table. The progressive is generated via the `WAGJsUtilsBean.getProgressive` bean which atomically updates the counter in the platform's progressives table.

Syntax
```javascript
//return Long type
var risp = utils.getProgressive(
	tableName, //String
	columnName, //String
	separatedTransaction, //Boolean
	interruptExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| tableName | String | table name for which to generate the progressive | 
| columnName | String | column name associated with the progressive | 
| separatedTransaction | Boolean | if `true`, the operation is executed in a separate transaction (via remote call through `ServerProxyFactory`); if `false`, it is executed within the current transaction | 
| interruptExecution | Boolean | if `true`, on error the action execution is interrupted and a rollback is performed | 

> ✅ **Returns**
>
> the next progressive value

> ⚠️ **Throws**
>
> - `Throwable` in case of errors during progressive retrieval


---

## getQueryColumns

Retrieve the column metadata (names and types) from the given SQL query without fetching any data rows. Useful for inspecting the structure of a result set before executing the actual query.

Syntax
```javascript
//return String type
var risp = utils.getQueryColumns(
	sql, //String
	dataStoreId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	pars //Object[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| sql | String | the SQL SELECT query whose column metadata should be retrieved | 
| dataStoreId | Long | the data source id identifying the target database schema; if null, the default data source is used | 
| separatedTransaction | Boolean | if `true`, the query is executed in a new, independent transaction; if `false`, it participates in the current transaction | 
| interruptExecution | Boolean | if `true`, a SQL error will interrupt the entire server-side action execution; if `false`, the error is logged but execution continues | 
| pars | Object[] | optional bind parameters for the SQL query, corresponding to `?` placeholders in the SQL string, in positional order | 

> ✅ **Returns**
>
> a JSON string describing the columns of the query result set (column names and types)

> ⚠️ **Throws**
>
> - `Throwable` if a database error occurs and `interruptExecution` is `true`


---

## getRelation

Get the list of fields from the FK table to the PK table; each element of the list contains an object: the fk field, the pk field and the fk name. The result is expressed as a JSON string containing: [\{ "fkColumnName": "...", "pkColumnName": "...", "fkName": "..." \},...]

Syntax
```javascript
//return String type
var risp = utils.getRelation(
	dataStoreId, //Long
	fkTable, //String
	pkTable //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dataStoreId | Long | optional datastore identifier from which the relation metadata must be read. | 
| fkTable | String | name of the foreign-key table that contains the referencing columns. | 
| pkTable | String | name of the primary-key table referenced by fkTable. | 


---

## getResourceByLanguageId

Retrieves a translated resource string for the given entry key and a specific language. Unlike `getResource`, this method allows fetching translations for a language different from the current user's language. Translations are cached per language to avoid repeated lookups. The method combines translations from both .properties files (custom resources) and database-stored translations (CON32 table) via the WAGTranslationsBean.

Syntax
```javascript
//return String type
var risp = utils.getResourceByLanguageId(
	entry, //String
	languageId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| entry | String | the resource key to look up | 
| languageId | String | the ISO language identifier (e.g., "IT", "EN", "DE"); if null or empty, falls back to `getResource` | 

> ✅ **Returns**
>
> the translated string for the specified language, or the entry key itself if no translation is found


---

## getResource

Retrieves a translated resource string for the given entry key, using the current user's language. The resource is looked up from standard i18n property bundles loaded for the application.

Syntax
```javascript
//return String type
var risp = utils.getResource(
	entry //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| entry | String | the resource key to look up (e.g., "btn.save", "msg.error.required") | 

> ✅ **Returns**
>
> the translated string for the current user's language, or the entry key itself if not found


---

## getSchedNextActivationTime

Return the nex activation time of scheduled process

Syntax
```javascript
//return String type
var risp = utils.getSchedNextActivationTime(
	schedId //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| schedId | Long | of scheduled process | 

> ✅ **Returns**
>
> string date with format "dd/MM/yyyy HH:mm:ss.SSS"

> ⚠️ **Throws**
>
> - `Throwable`


---

## getSheetListFromExcelFile

Retrieves the list of sheet names from an Excel file (xls or xlsx).

Syntax
```javascript
//return String type
var risp = utils.getSheetListFromExcelFile(
	dirId, //Long
	fileName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dirId | Long | the platform directory identifier where the Excel file is located | 
| fileName | String | the name of the Excel file to inspect | 

> ✅ **Returns**
>
> a JSON-formatted string containing the list of sheet names in the workbook

> ⚠️ **Throws**
>
> - `Throwable` if the file cannot be read or a processing error occurs


---

## getSubstitutedText

Replaces variable placeholders in the given text with their corresponding values. Placeholders follow the pattern `:variableName` and are replaced first from the session-level variables (this.vars) and then from the user-supplied map. Example: given text `"SELECT FROM T WHERE COL1 = :myParam"` and myVariables containing `\{"myParam": "ABC"`\}, returns `"SELECT FROM T WHERE COL1 = ABC"`.

Syntax
```javascript
//return String type
var risp = utils.getSubstitutedText(
	text, //String
	myVariables //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| text | String | the text containing `:variableName` placeholders to be replaced | 
| myVariables | Map | a Map<String, Object> of user-defined variables where: _(details below)_ | 

#### `myVariables`

a Map<String, Object> of user-defined variables where:
- **keys** (String): variable names matching placeholders in the text (without the ":" prefix)
- **values** (Object): replacement values; `toString()` is called on non-null values, `null` values are replaced with an empty string

> ✅ **Returns**
>
> the text with all matching placeholders replaced by their corresponding values

> ⚠️ **Throws**
>
> - `Exception` if a regex replacement error occurs


---

## getTablesInDataStore
Syntax
```javascript
//return String type
var risp = utils.getTablesInDataStore(
	datastoreId //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| datastoreId | Long |  | 


---

## getTxtFileCharset

Detects and returns the character encoding of the specified text file. Uses the Mozilla Universal Charset Detector (juniversalchardet) to analyze the file content.

Syntax
```javascript
//return String type
var risp = utils.getTxtFileCharset(
	fileName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileName | String | the absolute path to the text file to analyze | 

> ✅ **Returns**
>
> the detected charset name (e.g. "WINDOWS-1252", "UTF-8", "ISO-8859-1")

> ⚠️ **Throws**
>
> - `Exception` if an I/O error occurs while reading the file
- `RuntimeException` if no encoding can be detected from the file content


---

## getUserRoles

Retrieves the list of roles assigned to a user for the current application.

Syntax
```javascript
//return ArrayList type
var risp = utils.getUserRoles(
	companyId, //String
	siteId, //Long
	userCodeId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| companyId | String | the company identifier | 
| siteId | Long | the site identifier | 
| userCodeId | String | the user code identifier (will be converted to uppercase) | 

> ✅ **Returns**
>
> a list of `UserRoleGrid` objects representing the user's assigned roles

> ⚠️ **Throws**
>
> - `Throwable` if the user is not found or a server communication error occurs


---

## getVariable



Syntax
```javascript
//return Object type
var risp = utils.getVariable(
	varName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| varName | String | name of the session/action variable to read from vars. | 

> ✅ **Returns**
>
> value of variable


---

## getWebContentWithHeadersAndCookies [Deprecated]

Executes an HTTP(s) connection with custom headers and cookies support, and fetches the result as a String. This is a convenience overload that builds a settings map and delegates to `Map)`.

Syntax
```javascript
//return String type
var risp = utils.getWebContentWithHeadersAndCookies(
	uri, //String
	replaceVariables, //boolean
	httpMethod, //String
	contentType, //String
	requestBody, //Object
	user, //String
	pwd, //String
	charSet, //String
	headers, //Map
	timeout, //Number
	cookie, //boolean
	dirId, //Long
	sendFileName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| uri | String | URI, expressed as http:// or https:// with or without variables expressed as :XXX | 
| replaceVariables | boolean | flag used to replace variables within the URI | 
| httpMethod | String | (optional: can be null); HTTP method: GET, POST, etc. | 
| contentType | String | (optional: can be null); content type request (e.g. application/json) | 
| requestBody | Object | (optional: can be null); request body as a String | 
| user | String | (optional: can be null); username for BASIC authentication | 
| pwd | String | (optional: can be null); password for BASIC authentication | 
| charSet | String | (optional: can be null); character set for the response encoding | 
| headers | Map | (optional: can be null); custom HTTP headers as key-value pairs | 
| timeout | Number | (optional: can be null); connection timeout in milliseconds | 
| cookie | boolean | true to reuse the instance cookie list for this request; false to perform the call without sending/storing cookies. | 
| dirId | Long | (optional: can be null) | 
| sendFileName | String | (optional: can be null) | 

> ✅ **Returns**
>
> the HTTP response as a String

> ⚠️ **Throws**
>
> - `Exception` in case of connection or I/O errors


---

## getWebContentWithHeadersAndCookies

Executes an HTTP(s) connection with custom headers and cookies support, and fetches the result as a String. This is a convenience overload that builds a settings map and delegates to `Map)`.

Syntax
```javascript
//return String type
var risp = utils.getWebContentWithHeadersAndCookies(
	uri, //String
	replaceVariables, //boolean
	httpMethod, //String
	contentType, //String
	requestBody, //String
	user, //String
	pwd, //String
	charSet, //String
	headers, //Map
	timeout //Number
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| uri | String | URI, expressed as http:// or https:// with or without variables expressed as :XXX | 
| replaceVariables | boolean | flag used to replace variables within the URI | 
| httpMethod | String | (optional: can be null); HTTP method: GET, POST, etc. | 
| contentType | String | (optional: can be null); content type request (e.g. application/json) | 
| requestBody | String | (optional: can be null); request body as a String | 
| user | String | (optional: can be null); username for BASIC authentication | 
| pwd | String | (optional: can be null); password for BASIC authentication | 
| charSet | String | (optional: can be null); character set for the response encoding | 
| headers | Map | (optional: can be null); custom HTTP headers as key-value pairs | 
| timeout | Number | (optional: can be null); connection timeout in milliseconds | 

> ✅ **Returns**
>
> the HTTP response as a String

> ⚠️ **Throws**
>
> - `Exception` in case of connection or I/O errors


---

## getWebContentWithHeaders [Deprecated]

Execute an HTTP(s) connection and fetch the result, expresses as a String (e.g. a JSON or XML result content)

Syntax
```javascript
//return String type
var risp = utils.getWebContentWithHeaders(
	uri, //String
	replaceVariables, //boolean
	httpMethod, //String
	contentType, //String
	requestBody, //String
	user, //String
	pwd, //String
	charSet, //String
	headers //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| uri | String | URI, expressed as http:// or https:// with or without variables, expressed as :XXX | 
| replaceVariables | boolean | flag used to replace variables within the uri (variables are expressed as :XXX) | 
| httpMethod | String | (optional: can be null); if specified, it defines the HTTP method: GET, POST | 
| contentType | String | (optional: can be null); if specified, it defines the content type request (e.g. application/json) | 
| requestBody | String | (optional: can be null); if specified, it defines the request body, expressed as a String (e.g. a JSON or XML content) | 
| user | String | (optional: can be null); if specified, it defines the username for a BASIC authentication | 
| pwd | String | (optional: can be null); if specified, it defines the password for a BASIC authentication | 
| charSet | String | optional character set to use for request/response handling, for example UTF-8. | 
| headers | Map | optional custom HTTP headers to send with the request; keys are header names and values are header values. | 

> ✅ **Returns**
>
> the HTTP response, expressed as a String (e.g. a JSON or XML result)

> ⚠️ **Throws**
>
> - `Exception`


---

## getWebContentWithSettings [Deprecated]

Execute an HTTP(s) connection and fetch the result as a String (e.g. JSON or XML content). This variant accepts additional settings for fine-grained control over HTTP behavior.

Syntax
```javascript
//return String type
var risp = utils.getWebContentWithSettings(
	uri, //String
	replaceVariables, //boolean
	httpMethod, //String
	contentType, //String
	requestBody, //String
	user, //String
	pwd, //String
	charSet, //String
	headers, //Map
	timeout, //Number
	additionalSettings //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| uri | String | URI, expressed as http:// or https:// with or without variables expressed as :XXX | 
| replaceVariables | boolean | flag used to replace variables within the URI (variables are expressed as :XXX) | 
| httpMethod | String | (optional: can be null); if specified, defines the HTTP method: GET, POST, PUT, DELETE | 
| contentType | String | (optional: can be null); if specified, defines the content type (e.g. application/json) | 
| requestBody | String | (optional: can be null); if specified, defines the request body as a String | 
| user | String | (optional: can be null); username for BASIC authentication | 
| pwd | String | (optional: can be null); password for BASIC authentication | 
| charSet | String | (optional: can be null); character encoding for request/response (e.g. "UTF-8") | 
| headers | Map | (optional: can be null); custom HTTP request headers as key-value pairs | 
| timeout | Number | (optional: can be null); connection and socket timeout in seconds | 
| additionalSettings | Map | (optional: can be null); extra configuration map with supported keys: _(details below)_ | 

#### `additionalSettings`

(optional: can be null); extra configuration map with supported keys:
- **"log"** (Boolean) — if `false`, suppresses HTTP request/response logging (default: true)
- **"enableSNIExtension"** (String "true"/"false") — controls HTTPS SNI extension behavior

> ✅ **Returns**
>
> the HTTP response as a String (e.g. JSON or XML)

> ⚠️ **Throws**
>
> - `Exception` in case of connection or I/O errors


---

## getWebContent [Deprecated]

Executes an HTTP(s) connection and fetches the result as a String (e.g. JSON or XML content). This is a convenience overload that builds a settings map and delegates to `Map)`.

Syntax
```javascript
//return String type
var risp = utils.getWebContent(
	uri, //String
	replaceVariables, //boolean
	httpMethod, //String
	contentType, //String
	requestBody, //String
	user, //String
	pwd //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| uri | String | URI, expressed as http:// or https:// with or without variables expressed as :XXX | 
| replaceVariables | boolean | flag used to replace variables within the URI (variables are expressed as :XXX) | 
| httpMethod | String | (optional: can be null); if specified, defines the HTTP method: GET, POST | 
| contentType | String | (optional: can be null); if specified, defines the content type request (e.g. application/json) | 
| requestBody | String | (optional: can be null); if specified, defines the request body as a String (e.g. JSON or XML content) | 
| user | String | (optional: can be null); if specified, defines the username for BASIC authentication | 
| pwd | String | (optional: can be null); if specified, defines the password for BASIC authentication | 

> ✅ **Returns**
>
> the HTTP response as a String (e.g. JSON or XML result)

> ⚠️ **Throws**
>
> - `Exception` in case of connection or I/O errors


---

## getWebContent

Executes an HTTP(s) connection and fetches the result as a String (e.g. JSON or XML content). This is a convenience overload that builds a settings map and delegates to `Map)`.

Syntax
```javascript
//return String type
var risp = utils.getWebContent(
	uri, //String
	settings //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| uri | String | URI, expressed as http:// or https:// with or without variables expressed as :XXX | 
| settings | Map | a Map containing the following expected keys: _(details below)_ | 

#### `settings`

a Map containing the following expected keys:
- **replaceVariables** (Boolean, optional, default true): if true, replaces `:XXX` variable placeholders in the URI with session variable values
- **httpMethod** (String, optional, default "GET"): the HTTP method (GET, POST, PUT, DELETE, PATCH)
- **contentType** (String, optional): the Content-Type header value (e.g. "application/json", "multipart/form-data")
- **requestBody** (String or byte[], optional): the request body; can be a String (JSON/XML) or byte[] for binary content
- **user** (String, optional): username for HTTP BASIC authentication
- **pwd** (String, optional): password for HTTP BASIC authentication
- **charSet** (String, optional, default "UTF-8"): character encoding for request and response
- **headers** (Map<String, Object>, optional): additional HTTP request headers as key-value pairs
- **timeout** (Number, optional): connection and socket timeout in seconds
- **cookie** (Boolean, optional, default false): if true, attaches the instance-level cookie list to the request
- **dirId** (Long/Number, optional): platform directory ID from which to read a file as the request body (used when requestBody is null)
- **sendFileName** (String, optional): file name within the directory identified by `dirId` to use as binary request body
- **log** (Boolean, optional, default true): if false, suppresses request/response logging
- **additionalSettings** (Map, optional): extra settings forwarded to WAGUtils; may contain:
  - **enableSNIExtension** (String "true"/"false"): controls HTTPS SNI extension behavior
- **appAnalysis** (Boolean, optional, default true): if true, enables application-level request analysis
- **responseWithHeaders** (Boolean, optional, default false): if true, includes response headers in the returned content
- **multiPartRequestBody** (String, optional): JSON string containing additional fields for a multipart/form-data request
- **multiPartFileAttributeName** (String, optional): the attribute name for the file part in a multipart request

> ✅ **Returns**
>
> the HTTP response as a String (e.g. JSON or XML result)

> ⚠️ **Throws**
>
> - `Exception` in case of connection or I/O errors


---

## getWindowPanelsNavigateTree

Retrieves the navigation tree structure for all panels in a window, expressed as a JSON string.

Syntax
```javascript
//return String type
var risp = utils.getWindowPanelsNavigateTree(
	windowId, //Long
	treeTranslation, //String
	excludedProperties //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| windowId | Long | the window identifier | 
| treeTranslation | String | if "Y", includes translated labels in the tree | 
| excludedProperties | String[] | (optional) list of property names to exclude from the tree output | 

> ✅ **Returns**
>
> a JSON string representing the window's panel navigation tree

> ⚠️ **Throws**
>
> - `Throwable` in case of server communication errors


---

## getXlsContentWithEncoding

Reads the content of an XLS file with a specified character encoding. Delegates to `WAGXlsUtils#getXlsContentWithEncoding`.

Syntax
```javascript
//return Map[] type
var risp = utils.getXlsContentWithEncoding(
	dirId, //String
	fileName, //String
	encoding, //String
	sheetIndex, //int
	fromRow, //int
	attributeNames //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dirId | String | directory identifier where the XLS file is located | 
| fileName | String | name of the XLS file | 
| encoding | String | character encoding to use when reading the file (e.g. "UTF-8", "ISO-8859-1") | 
| sheetIndex | int | sheet index inside the spreadsheet, starting from 0 | 
| fromRow | int | row index from which to start reading (first row has index 0) | 
| attributeNames | String[] | list of attribute names assigned to each column, from left to right | 

> ✅ **Returns**
>
> an array of Maps, where each Map represents a row with attribute name keys and cell values

> ⚠️ **Throws**
>
> - `Throwable` in case of I/O or parsing errors


---

## getXlsContent

Read up to 10000 rows x 1000 columns from the xls file stored in the specified path and get back the content of a specific folder.

Syntax
```javascript
//return Map[] type
var risp = utils.getXlsContent(
	dirId, //String
	fileName, //String
	sheetIndex, //int
	fromRow, //int
	attributeNames //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dirId | String | path identifier | 
| fileName | String | name of the xls file | 
| sheetIndex | int | sheet index inside the spreadsheet, starting from 0 | 
| fromRow | int | the content will be read starting from the specified row index (the first row has index 0) | 
| attributeNames | String[] | attribute names assigned to each spreadsheet column from left to right when building the returned row maps. | 

> ✅ **Returns**
>
> a list of js objects, where each object is expressed as a set of couples @parsm attributeNames, list of attributes, assigned to each column, starting from leftmost column to the right


---

## importCellsFromExcelFile

Imports cell data from an Excel file using a predefined value import configuration. The import configuration determines how cells are mapped to database fields.

Syntax
```javascript
//return boolean type
var risp = utils.importCellsFromExcelFile(
	directoryId, //Long
	fileName, //String
	valueImportId, //Long
	fieldsData, //Map
	inputData, //Map
	separatedTransaction //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| directoryId | Long | directory identifier where the Excel file is located | 
| fileName | String | name of the Excel file to import | 
| valueImportId | Long | the value import configuration identifier (defines cell-to-field mappings) | 
| fieldsData | Map | a Map of additional field data to merge during import; keys are field names, values are the data to assign | 
| inputData | Map | a Map of input parameters for the import process; keys are parameter names, values are parameter values | 
| separatedTransaction | Boolean | if `true`, the import is executed in a separate transaction | 

> ✅ **Returns**
>
> `true` if the import completed successfully

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## importRowsFromFile

Import rows from xls, xlsx and csv file

Syntax
```javascript
//return String type
var risp = utils.importRowsFromFile(
	dirId, //Long
	fileName, //String
	importId, //Long
	insert, //boolean
	maxErrors, //Long
	maxRowErrors, //Long
	inputData, //Map
	destErrorsFileDirId, //Long
	destErrorsFileName, //String
	rollbackIfErrors, //boolean
	async, //boolean
	sheetTitle //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dirId | Long | directory identifier where the source import file is stored. | 
| fileName | String | name of the xls/xlsx/csv file to import. | 
| importId | Long | identifier of the import-to-grid configuration that defines field mappings and validation rules. | 
| insert | boolean | true to perform insert-only processing; false to allow insert-or-update behavior. | 
| maxErrors | Long | maximum number of row-level validation errors allowed before stopping; null means no limit. | 
| maxRowErrors | Long | maximum number of rows containing errors allowed before stopping; null means no limit. | 
| inputData | Map | optional fixed field values to inject during import; keys are destination field names and values are the fixed values to apply. | 
| destErrorsFileDirId | Long | optional directory identifier where the generated error file must be saved. | 
| destErrorsFileName | String | optional file name to use for the generated error report. | 
| rollbackIfErrors | boolean | true to rollback the whole import when errors occur; false to commit successful rows and still return/report the errors. | 
| async | boolean | true to execute the import asynchronously; false to run it synchronously. | 
| sheetTitle | String | optional worksheet title to read when the source file is an Excel workbook. | 

> ⚠️ **Throws**
>
> - `Throwable`


---

## importRowsFromFile

Import rows from xls, xlsx and csv file

Syntax
```javascript
//return String type
var risp = utils.importRowsFromFile(
	dirId, //Long
	fileName, //String
	importId, //Long
	insert, //boolean
	maxErrors, //Long
	maxRowErrors, //Long
	inputData, //Map
	destErrorsFileDirId, //Long
	destErrorsFileName, //String
	rollbackIfErrors, //boolean
	async //boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dirId | Long | directory identifier where the source import file is stored. | 
| fileName | String | name of the xls/xlsx/csv file to import. | 
| importId | Long | identifier of the import-to-grid configuration that defines field mappings and validation rules. | 
| insert | boolean | true to perform insert-only processing; false to allow insert-or-update behavior. | 
| maxErrors | Long | maximum number of row-level validation errors allowed before stopping; null means no limit. | 
| maxRowErrors | Long | maximum number of rows containing errors allowed before stopping; null means no limit. | 
| inputData | Map | optional fixed field values to inject during import; keys are destination field names and values are the fixed values to apply. | 
| destErrorsFileDirId | Long | optional directory identifier where the generated error file must be saved. | 
| destErrorsFileName | String | optional file name to use for the generated error report. | 
| rollbackIfErrors | boolean | true to rollback the whole import when errors occur; false to commit successful rows and still return/report the errors. | 
| async | boolean | true to execute the import asynchronously; false to run it synchronously. | 

> ⚠️ **Throws**
>
> - `Throwable`


---

## importSubFolderInWebContext

Save in CON119 the content of the specified subfolder of the web context for the specified app id, then zip it, in order to use it later, when starting the Platform service on another node.

Syntax
```javascript
utils.importSubFolderInWebContext(
	appId, //String
	subfolderName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| appId | String | application identifier whose web-context subfolder must be exported into CON119. | 
| subfolderName | String | name of the web-context subfolder to zip and import. | 


---

## info

Logs a message at INFO level. Shorthand for `log(msg, "INFO")`.

Syntax
```javascript
utils.info(
	msg //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| msg | String | the log message text @see #log(String, String) | 


---

## insertMappedObject

Execute an INSERT SQL statement into the specified table, starting from the javascript NEUTRAL object passed as argument, containing many more attributes, not all related to such a table. The right attributes to take into account from the neutral object will be selected using the mapping defined to the specifie data model and table name. All object attributes will be converted to database fields (uncamel format); example: productCode -> PRODUCT_CODE

Syntax
```javascript
//return boolean type
var risp = utils.insertMappedObject(
	neutralObject, //Map
	dataModelId, //Long
	additionalAttributes, //Map
	separatedTransaction, //Boolean
	interruptExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| neutralObject | Map | javascript object to insert into the specified table | 
| dataModelId | Long | data model id, which MUST have MAPPER type, containing the mapping needed to extract the right attributes | 
| additionalAttributes | Map | can be null; if specified, contains additional to include the object under construction, used to generate the SQL instruction | 
| separatedTransaction | Boolean | flag used to define if this query has to be performed in a separated transaction | 
| interruptExecution | Boolean | flag used to defined if the whole server side transaction must be interrupted and rollbacked in case of errors | 

> ✅ **Returns**
>
> `true` if the record has been successfully inserted

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## insertMappedObject

Execute an INSERT SQL statement into the specified table, starting from the javascript NEUTRAL object passed as argument, containing many more attributes, not all related to such a table. The right attributes to take into account from the neutral object will be selected using the mapping defined to the specifie data model and table name. All object attributes will be converted to database fields (uncamel format); example: productCode -> PRODUCT_CODE

Syntax
```javascript
//return boolean type
var risp = utils.insertMappedObject(
	neutralObject, //Map
	tableName, //String
	dataModelId, //Long
	additionalAttributes, //Map
	separatedTransaction, //Boolean
	interruptExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| neutralObject | Map | javascript object to insert into the specified table | 
| tableName | String | table name which must be defined as a writable object | 
| dataModelId | Long | data model id, which MUST have MAPPER type, containing the mapping needed to extract the right attributes | 
| additionalAttributes | Map | can be null; if specified, contains additional to include the object under construction, used to generate the SQL instruction | 
| separatedTransaction | Boolean | flag used to define if this query has to be performed in a separated transaction | 
| interruptExecution | Boolean | flag used to defined if the whole server side transaction must be interrupted and rollbacked in case of errors | 

> ✅ **Returns**
>
> `true` if the record has been successfully inserted

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## insertObject

Execute an INSERT SQL statement into the specified table, starting from the javascript object passed as argument. All object attributes will be converted to database fields (uncamel format); example: productCode -> PRODUCT_CODE

Syntax
```javascript
//return boolean type
var risp = utils.insertObject(
	obj, //Map
	tableName, //String
	dataSourceId, //Long
	separatedTransaction, //Boolean
	interruptExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| obj | Map | javascript object to insert into the specified table | 
| tableName | String | table name which must be defined as a writable object (it MUST have a data model defined for that table) | 
| dataSourceId | Long | optional data source id | 
| separatedTransaction | Boolean | flag used to define if this query has to be performed in a separated transaction | 
| interruptExecution | Boolean | flag used to defined if the whole server side transaction must be interrupted and rollbacked in case of errors | 

> ✅ **Returns**
>
> `true` if the record has been successfully inserted

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## isExceededRowsOfCSVFile

Checks whether a CSV file exceeds a specified row count limit. This is an alias for `int)` since CSV files are text files.

Syntax
```javascript
//return boolean type
var risp = utils.isExceededRowsOfCSVFile(
	filePath, //String
	limit //int
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| filePath | String | the absolute path to the CSV file | 
| limit | int | the maximum number of rows allowed | 

> ✅ **Returns**
>
> `true` if the file has more rows than the specified limit, `false` otherwise

> ⚠️ **Throws**
>
> - `Throwable` if the file cannot be read or does not exist


---

## isExceededRowsOfTextFile

Checks whether a text file exceeds a specified row count limit without reading the entire file. Uses stream limiting to efficiently short-circuit as soon as the limit is exceeded.

Syntax
```javascript
//return boolean type
var risp = utils.isExceededRowsOfTextFile(
	filePath, //String
	limit //int
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| filePath | String | the absolute path to the text file | 
| limit | int | the maximum number of rows allowed | 

> ✅ **Returns**
>
> `true` if the file has more rows than the specified limit, `false` otherwise

> ⚠️ **Throws**
>
> - `Throwable` if the file cannot be read or does not exist


---

## isOffLine

return `true` if a device ID is set (indicating offline/mobile mode), `false` otherwise

Syntax
```javascript
//return boolean type
var risp = utils.isOffLine();
```

> ✅ **Returns**
>
> `true` if a device ID is set (indicating offline/mobile mode), `false` otherwise


---

## lPad

Left-pads a string with the specified character to the given total length.

Syntax
```javascript
//return String type
var risp = utils.lPad(
	value, //String
	fillChar, //char
	length //int
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| value | String | the string to pad | 
| fillChar | char | the character to use for padding | 
| length | int | the desired total length of the resulting string | 

> ✅ **Returns**
>
> the left-padded string


---

## lTrim

Removes leading whitespace characters from the input string (left trim). Whitespace is defined by `Character#isWhitespace`.

Syntax
```javascript
//return String type
var risp = utils.lTrim(
	text //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| text | String | the string to left-trim; may be `null` or empty | 

> ✅ **Returns**
>
> the left-trimmed string, or the original value if `null` or empty


---

## loadPDFFont

Loads an external TrueType font from a file and registers it with the PDF document under the given alias. The font can then be referenced by alias in `int, int, String, Map)` via the "fontName" key in the settings Map.

Syntax
```javascript
utils.loadPDFFont(
	uuid, //String
	fontAlias, //String
	fontFileName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| uuid | String | the output stream identifier returned by `Long, Map)` | 
| fontAlias | String | a short alias name to reference the font in subsequent operations (e.g., "DejaVuSans") | 
| fontFileName | String | the absolute path to the TrueType font file (.ttf) on the server file system | 

> ⚠️ **Throws**
>
> - `Throwable` if the font file cannot be loaded
- `RuntimeException` if the PDF file has not been opened (uuid not found)


---

## logInCon60

Logs a message into the platform's CON60 logging table.

Syntax
```javascript
utils.logInCon60(
	logType, //String
	msg, //String
	messageTag //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| logType | String | the log type (e.g. "ERROR", "INFO", "DEBUG") | 
| msg | String | the message to log | 
| messageTag | String | an optional tag to categorize the log entry | 


---

## logServiceElaborationTag

Fill in the specified tag (1..5) with the specified value.

Syntax
```javascript
utils.logServiceElaborationTag(
	tagNumber, //Long
	tagValue //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| tagNumber | Long | 1..5 tag index | 
| tagValue | String | tag value | 

> ⚠️ **Throws**
>
> - `Throwable`


---

## logServiceElaboration

Append a message into the linked monitored service and send notification.

Syntax
```javascript
utils.logServiceElaboration(
	logType, //String
	logMessage, //String
	messageCode, //String
	fileName, //String
	sendNotification //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| logType | String | FATAL, ERROR, INFO, DEBUG, FINEST | 
| logMessage | String | message to log | 
| messageCode | String | (optional) application code for log | 
| fileName | String | (optional) set if you processed a file | 
| sendNotification | Boolean | true if you want send notify | 


---

## logServiceElaboration

Append a message into the linked monitored service and send notification.

Syntax
```javascript
utils.logServiceElaboration(
	logType, //String
	logMessage, //String
	messageCode, //String
	fileName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| logType | String | FATAL, ERROR, INFO, DEBUG, FINEST | 
| logMessage | String | message to log | 
| messageCode | String | (optional) application code for log | 
| fileName | String | (optional) set if you processed a file | 


---

## logServiceFileElaboration

Logs a file elaboration event for the linked monitored service. This is a convenience overload that delegates to the full version with `note` set to `null`.

Syntax
```javascript
utils.logServiceFileElaboration(
	operation, //String
	elaborated, //Boolean
	fileName, //String
	directoryId, //Long
	backupFilename, //String
	backupDirectoryId, //Long
	note //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| operation | String | the operation type performed on the file (e.g. "READ", "WRITE", "IMPORT") | 
| elaborated | Boolean | `true` if the file was successfully elaborated | 
| fileName | String | the name of the file that was processed | 
| directoryId | Long | directory identifier where the processed file is located | 
| backupFilename | String | (optional) backup file name if the file was backed up | 
| backupDirectoryId | Long | (optional) directory identifier for the backup location | 
| note | String | (optional) additional note or description for the log entry | 

> ⚠️ **Throws**
>
> - `Throwable` in case of server communication errors


---

## logServiceFileElaboration

Logs a file elaboration event for the linked monitored service. This is a convenience overload that delegates to the full version with `note` set to `null`.

Syntax
```javascript
utils.logServiceFileElaboration(
	operation, //String
	elaborated, //Boolean
	fileName, //String
	directoryId, //Long
	backupFilename, //String
	backupDirectoryId //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| operation | String | the operation type performed on the file (e.g. "READ", "WRITE", "IMPORT") | 
| elaborated | Boolean | `true` if the file was successfully elaborated | 
| fileName | String | the name of the file that was processed | 
| directoryId | Long | directory identifier where the processed file is located | 
| backupFilename | String | (optional) backup file name if the file was backed up | 
| backupDirectoryId | Long | (optional) directory identifier for the backup location | 

> ⚠️ **Throws**
>
> - `Throwable` in case of server communication errors


---

## logServiceFileElaboration

Logs a file elaboration event for the linked monitored service. This is a convenience overload that delegates to the full version with `note` set to `null`.

Syntax
```javascript
utils.logServiceFileElaboration(
	operation, //String
	state, //String
	fileName, //String
	directoryId, //Long
	backupFilename, //String
	backupDirectoryId, //Long
	note //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| operation | String | the operation type performed on the file (e.g. "READ", "WRITE", "IMPORT") | 
| state | String | the elaboration state as a string (e.g. "OK", "ERROR", "SKIPPED") | 
| fileName | String | the name of the file that was processed | 
| directoryId | Long | directory identifier where the processed file is located | 
| backupFilename | String | (optional) backup file name if the file was backed up | 
| backupDirectoryId | Long | (optional) directory identifier for the backup location | 
| note | String | (optional) additional note or description for the log entry | 

> ⚠️ **Throws**
>
> - `Throwable` in case of server communication errors


---

## log

Logs a message at the specified log level. The message is enriched with thread and action identifiers. If the current action is associated with a monitored service, the log entry is also persisted to the service elaboration logs table (CON122) for auditing purposes.

Syntax
```javascript
utils.log(
	msg, //String
	logType //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| msg | String | the log message text | 
| logType | String | the log level: "ERROR", "WARN", "INFO", or "DEBUG" (case-insensitive); if `null` or unrecognized, defaults to DEBUG level @implNote The message is prefixed with the current thread name/id and action id before logging. If a monitored service is configured for the current action (CON120), the log is additionally persisted via `WAGServiceElaborationLogsBean.insertRecord()` through ServerProxy. | 


---

## mapClobFieldToTable

Reads a source table containing raw CSV data stored in a CLOB field and loads a destination table by distributing (mapping) the CLOB content to individual columns. Supports: Copying fields as-is from the source table to the destination table Filling destination fields with default constant values Distributing (splitting) the CLOB field content by separator into mapped destination fields Additionally executes data validations on each mapped field: Mandatory check Field type validation (TEXT, INT, DEC, DATE) and format Field length validation Enumeration validation In case of invalid data, errors are saved back to the source table record (in the error fields). The destination table is always cleared first using the provided `deleteFilter`.

Syntax
```javascript
//return String type
var risp = utils.mapClobFieldToTable(
	settings //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| settings | Map | a Map containing the following expected keys: _(details below)_ | 

#### `settings`

a Map containing the following expected keys:
- **srcTableName** (String, required): name of the source table containing the CLOB data
- **srcFilter** (String, optional): SQL WHERE clause to filter source rows
- **srcRowId** (String, optional): row identifier field in the source table
- **srcDatasourceId** (Number, optional): data source identifier for the source table connection
- **destTableName** (String, required): name of the destination table to load
- **destFilter** (String, optional): SQL WHERE filter for the destination table
- **destDatasourceId** (Number, optional): data source identifier for the destination table connection
- **clobFieldName** (String, required): name of the CLOB column in the source table
- **separator** (String, required): field separator character used to split the CLOB content
- **uniqueKeys** (String, optional): comma-separated list of fields representing a unique key
- **errorFieldName** (String, optional): field name in source table to store validation error details
- **containsErrorsField** (String, optional): field name in source table for error flag ("Y"/"N")
- **asIsFields** (Map<String, String>, optional): map of source field names to destination field names that should be copied as-is from the source record
- **defaultFields** (Map<String, Object>, optional): map of destination field names to constant default values to insert in every row
- **mappedFields** (List<Map>, optional): ordered list of field mapping definitions, each Map containing:
  - **fieldName** (String): destination column name
  - **fieldType** (String): data type — "TEXT", "INT", "DEC", or "DATE"
  - **mandatory** (Boolean): whether a value is required
  - **mapped** (Boolean): if false, the positional CLOB field is skipped (not inserted)
  - **decSeparator** (String, default "."): decimal separator for DEC fields
  - **dateFormat** (String, default "yyyy-MM-dd"): date format pattern for DATE fields
  - **fieldInt** (Number): max integer digits for INT/DEC validation
  - **fieldDec** (Number): max decimal digits for DEC validation
  - **fieldLength** (Number): max character length for TEXT validation
  - **enumeration** (String): comma-separated list of allowed values
- **deleteFilter** (String, optional): SQL WHERE clause used to clear destination table before loading
- **commitSize** (Number, optional, default 1000): number of rows per batch commit

> ✅ **Returns**
>
> a JSON string containing the processing result or error details

> ⚠️ **Throws**
>
> - `Throwable` if a database or I/O error occurs


---

## markMessagesAsSeen

Marks email messages as seen (read) on the mail server.

Syntax
```javascript
//return Boolean type
var risp = utils.markMessagesAsSeen(
	server, //String
	port, //Integer
	username, //String
	password, //String
	protocol, //String
	useTLS, //Boolean
	messageIds, //String[]
	folderName, //String
	setAsSeen, //Boolean
	debug //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| server | String | mail server host | 
| port | Integer | mail server port | 
| username | String | username for authentication | 
| password | String | password for authentication | 
| protocol | String | mail protocol (e.g. "imap", "imaps") | 
| useTLS | Boolean | if `true`, uses TLS encryption | 
| messageIds | String[] | array of message IDs to mark as seen | 
| folderName | String | folder name where the messages are located | 
| setAsSeen | Boolean | if `true`, marks messages as seen; if `false`, marks as unseen | 
| debug | Boolean | if `true`, enables debug logging | 

> ✅ **Returns**
>
> `true` if the messages were marked successfully

> ⚠️ **Throws**
>
> - `Throwable` in case of mail server communication errors


---

## md5

Computes the MD5 hash of the given text.

Syntax
```javascript
//return String type
var risp = utils.md5(
	text //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| text | String | the input string to hash | 

> ✅ **Returns**
>
> the MD5 hash as an uppercase hexadecimal string

> ⚠️ **Throws**
>
> - `Exception` in case of hashing errors


---

## mergePdfs

Merges multiple PDF files into a single destination PDF file. If the destination file already exists, it is deleted before merging. The order of pages in the output follows the order of the input files array.

Syntax
```javascript
utils.mergePdfs(
	destinationFile, //String
	files //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| destinationFile | String | the absolute path of the merged output PDF file | 
| files | String[] | one or more absolute paths to PDF files to merge, in the desired order | 

> ⚠️ **Throws**
>
> - `Exception` if any source file cannot be read or the merge operation fails


---

## mkdir

Creates the specified directory in the local file system, including any necessary intermediate directories.

Syntax
```javascript
utils.mkdir(
	path //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| path | String | absolute path of the directory to create | 

> ⚠️ **Throws**
>
> - `Throwable` in case of errors during creation


---

## moveMessages

Moves email messages from one folder to another on the mail server.

Syntax
```javascript
//return Boolean type
var risp = utils.moveMessages(
	server, //String
	port, //Integer
	username, //String
	password, //String
	protocol, //String
	useTLS, //Boolean
	messageIds, //String[]
	folderName, //String
	moveToFolder, //String
	setAsSeen, //Boolean
	debug //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| server | String | mail server host | 
| port | Integer | mail server port | 
| username | String | username for authentication | 
| password | String | password for authentication | 
| protocol | String | mail protocol (e.g. "imap", "imaps") | 
| useTLS | Boolean | if `true`, uses TLS encryption | 
| messageIds | String[] | array of message IDs to move | 
| folderName | String | source folder name | 
| moveToFolder | String | destination folder name | 
| setAsSeen | Boolean | if `true`, marks messages as seen after moving | 
| debug | Boolean | if `true`, enables debug logging | 

> ✅ **Returns**
>
> `true` if the messages were moved successfully

> ⚠️ **Throws**
>
> - `Throwable` in case of mail server communication errors


---

## movePDFPage

Moves the internal cursor to an existing page in the PDF document, allowing content to be appended to a previously created page. The current content stream is closed and a new one is opened in append mode for the target page.

Syntax
```javascript
utils.movePDFPage(
	uuid, //String
	page //int
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| uuid | String | the output stream identifier returned by `Long, Map)` | 
| page | int | zero-based page index to navigate to | 

> ⚠️ **Throws**
>
> - `Throwable` if the page does not exist or stream operations fail
- `RuntimeException` if the PDF file has not been opened (uuid not found)


---

## numberToText

Converts a number to its textual representation (e.g., 123.45 to "one hundred twenty-three point forty-five"), respecting the specified language and decimal formatting options.

Syntax
```javascript
//return String type
var risp = utils.numberToText(
	num, //Number
	decimals, //Number
	languageId, //String
	showDecimals, //Boolean
	sep //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| num | Number | the number to convert to text | 
| decimals | Number | the number of decimal places to round to before conversion | 
| languageId | String | the language identifier for the text representation (e.g., "IT", "EN") | 
| showDecimals | Boolean | if `true`, includes the decimal part in the text output; if `false`, only the integer part is converted | 
| sep | String | the separator text between the integer and decimal parts (e.g., "/", "and") | 

> ✅ **Returns**
>
> the textual representation of the number in the specified language

> ⚠️ **Throws**
>
> - `Throwable` if the server-side conversion fails


---

## openCSVFile

Open a CSV file, in order to write rows into it, using the "writeToCSVFile" method. Finally, the CSV file must be closed, using "closeCSVFile" method.

Syntax
```javascript
//return String type
var risp = utils.openCSVFile(
	fileName, //String
	overwrite, //Boolean
	directoryId, //Long
	sep, //String
	fileAppend, //Boolean
	attributesToWrite, //String[]
	formatters //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileName | String | CSV filename | 
| overwrite | Boolean | flag true\|false, used to define whether the file must be overridden or not, in case it already exists. | 
| directoryId | Long | dir id, related to a path in the server file system | 
| sep | String | CSV field separator; allowed values are: , or ; | 
| fileAppend | Boolean | flag true\|false, used to define whether content must be added at the end of the already existing CSV file | 
| attributesToWrite | String[] | list of attributes to write in the row, coming from the json row | 
| formatters | String[] | list of formatters to use for each attributes, in order to convert a number to a text (e.g. "0" or "0.00", etc.) return file identifier, to pass forward to "writeToCSVFile" and "closeCSVFile" methods, in order to work with the already opened output stream | 


---

## openPDFFile

Opens a new PDF file for writing content. This is the entry point for the PDF generation lifecycle: `openPDFFile` → `addPageToPDFFile`/`addLineToPDFFile`/`setLineToPDFFile`/`addImageToPDFFile`/`addBarcodeToPDFFile` → `closePDFFile`. The method creates the file on disk, initializes an Apache PDFBox `PDDocument`, and returns a UUID that must be passed to all subsequent PDF operations. The document uses incremental saving to limit memory usage. If the file already exists, it is overwritten by default (controlled via the "overwriteFile" setting).

Syntax
```javascript
//return String type
var risp = utils.openPDFFile(
	fileName, //String
	directoryId, //Long
	settings //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileName | String | the PDF file name (may include subdirectories relative to the directory path). Leading "/" is stripped; must not contain "../" patterns (path traversal protection) | 
| directoryId | Long | the platform directory ID, resolved to a server file system path via `getDirectoryPath()` | 
| settings | Map | optional configuration map. Supported keys: _(details below)_ | 

#### `settings`

optional configuration map. Supported keys:
- **"size"** (`String`) — page size. Allowed values: "A0", "A1", "A2", "A3", "A4" (default), "A5", "A6", "LETTER"
- **"orientation"** (`String`) — page orientation. Allowed values: "portrait" (default), "landscape"
- **"fontName"** (`String`) — default font for pages. Allowed values: "Courier" (default), "Courier-Bold", "Courier-BoldOblique", "Courier-Oblique", "Helvetica", "Helvetica-Bold", "Helvetica-BoldOblique", "Helvetica-Oblique", "Symbol", "Times-Bold", "Times-BoldItalic", "Times-Italic", "Times-Roman", "ZapfDingbats"
- **"fontSize"** (`Number`) — default font size in points (default: 10)
- **"top"** (`Number`) — top margin in points (default: 20)
- **"left"** (`Number`) — left margin in points (default: 20)
- **"bottom"** (`Number`) — bottom margin in points (default: 20)
- **"height"** (`Number`) — line height in points (default: 10)
- **"overwriteFile"** (`Boolean`) — if `false`, loads and appends to an existing file instead of overwriting it (default: `true`)

> ✅ **Returns**
>
> a UUID string identifying the opened PDF output stream; pass this to all subsequent PDF methods

> ⚠️ **Throws**
>
> - `Throwable` if the directory cannot be resolved or the file cannot be created/loaded
- `RuntimeException` if the file path contains "../" (path traversal attempt)


---

## openTextFile

Open a text file, in order to write rows into it, using the "writeToTextFile" method. Finally, the text file must be closed, using "closeTextFile" method.

Syntax
```javascript
//return String type
var risp = utils.openTextFile(
	fileName, //String
	overwrite, //Boolean
	directoryId, //Long
	fileAppend, //Boolean
	charset //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileName | String | text filename | 
| overwrite | Boolean | flag true\|false, used to define whether the file must be overridden or not, in case it already exists. | 
| directoryId | Long | dir id, related to a path in the server file system | 
| fileAppend | Boolean | flag true\|false, used to define whether content must be added at the end of the already existing text file return file identifier, to pass forward to "writeToTextFile" and "closeTextFile" methods, in order to work with the already opened output stream | 
| charset | String | optional character set used when creating/appending the text file; if null, UTF-8 is used. | 


---

## openTextFile

Open a text file, in order to write rows into it, using the "writeToTextFile" method. Finally, the text file must be closed, using "closeTextFile" method.

Syntax
```javascript
//return String type
var risp = utils.openTextFile(
	fileName, //String
	overwrite, //Boolean
	directoryId, //Long
	fileAppend //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileName | String | text filename | 
| overwrite | Boolean | flag true\|false, used to define whether the file must be overridden or not, in case it already exists. | 
| directoryId | Long | dir id, related to a path in the server file system | 
| fileAppend | Boolean | flag true\|false, used to define whether content must be added at the end of the already existing text file return file identifier, to pass forward to "writeToTextFile" and "closeTextFile" methods, in order to work with the already opened output stream | 


---

## parseJSON

Parses a JSON string into a Java object. If the string starts with "\{", it is parsed into a Map. If it starts with "[", it is parsed into a List.

Syntax
```javascript
//return Object type
var risp = utils.parseJSON(
	json //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| json | String | the JSON string to parse | 

> ✅ **Returns**
>
> a Map (for JSON objects) or a List (for JSON arrays)

> ⚠️ **Throws**
>
> - `RuntimeException` if the string is not valid JSON (doesn't start with "\{" or "[")


---

## parseXML

Parse a simple XML document and generate a Javascript "compatible" representation, expressed using lists and js objects, where each js object has special attributes named: "tagName", "tagValue" and "subTags". The document (list of tags) is expressed as a list of js objects, where each js object can have a list of subtags and attributes, expressed object's attributes. The js object always contains special entries named "tagName", "subTags" and optionally "tagValue" if there is tag value.

Syntax
```javascript
//return Map[] type
var risp = utils.parseXML(
	xmlDocument //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| xmlDocument | String |  | 

> ✅ **Returns**
>
> XML representation, expressed as a list of Javascript objects


---

## printDocument

Generate a report starting from a .jasper report template and print it directly to the specified printer.

Syntax
```javascript
//return String type
var risp = utils.printDocument(
	printerName, //String
	copies, //int
	mediaSize, //Integer
	printParams, //Object>
	reportName, //String
	dirReports, //String
	datastoreId, //Long
	reportFormat, //String
	reportParams //Object>
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| printerName | String | printer identifier; it can be retrieved by calling "getPrintServices" js method | 
| copies | int | number of copies to print | 
| mediaSize | Integer | paper size, expressed as a number between 0 and 10 (i.e. A0...A10); can be null | 
| printParams | Object> | parameters to pass to the printer | 
| reportName | String | .jasper report name | 
| dirReports | String | optional folder where the .jasper file is located; this relative path is always contained within the subolder /reports/ | 
| datastoreId | Long | optional data source id used by the .jasper template to read data from the database | 
| reportFormat | String | report format to use when creating the report; e.g. PDF | 
| reportParams | Object> | input parameters required by the report template | 

> ✅ **Returns**
>
> error message, in case of errors; "Report printed." if the generation has been successfully completed


---

## protectPdf

Applies password-based protection and access restrictions to a PDF document. The protected PDF cannot be printed or modified by users who open it with the restriction password. The owner password grants full access for removing restrictions. If `fullPathDst` is `null`, the source file is overwritten with the protected version.

Syntax
```javascript
utils.protectPdf(
	passwordRestriction, //String
	passwordOwner, //String
	fullPathSrc, //String
	fullPathDst //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| passwordRestriction | String | the user password required to open the document (restricts access) | 
| passwordOwner | String | the owner password granting full control (can remove restrictions) | 
| fullPathSrc | String | absolute path to the source PDF file to protect | 
| fullPathDst | String | absolute path for the protected output file; if `null`, the source file is overwritten | 

> ⚠️ **Throws**
>
> - `Exception` if the PDF cannot be loaded, encrypted, or saved


---

## rPad

Right-pads a string with the specified character to the given total length.

Syntax
```javascript
//return String type
var risp = utils.rPad(
	value, //String
	fillChar, //char
	length //int
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| value | String | the string to pad | 
| fillChar | char | the character to use for padding | 
| length | int | the desired total length of the resulting string | 

> ✅ **Returns**
>
> the right-padded string


---

## rTrim

Removes trailing whitespace characters from the input string (right trim). Whitespace is defined by `Character#isWhitespace`.

Syntax
```javascript
//return String type
var risp = utils.rTrim(
	text //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| text | String | the string to right-trim; may be `null` or empty | 

> ✅ **Returns**
>
> the right-trimmed string, or the original value if `null` or empty


---

## readBase64File

Read a local file and convert it to BASE 64 text format.

Syntax
```javascript
//return String type
var risp = utils.readBase64File(
	filePath //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| filePath | String | path + file name to read | 

> ✅ **Returns**
>
> BASE64 representation of the specified file


---

## readCSVFileAndWriteToTable

Read a CSV file stored in the server file system and insert each row as a record in a database table.

Syntax
```javascript
//return long type
var risp = utils.readCSVFileAndWriteToTable(
	fileName, //String
	directoryId, //Long
	sep, //String
	skipFirstRow, //Boolean
	datastoreId, //Long
	tableName, //String
	defaultFieldNames, //Map
	csvFields, //Map[]
	limitRows, //Integer
	throwIfExceededRows //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileName | String | CSV file name, stored in the specified directory | 
| directoryId | Long | directory identifier, related to a folder in the server file system | 
| sep | String | CSV separator; allowed values are: , and ; | 
| skipFirstRow | Boolean | flag true\|false used to define whether the first row in the CSV file must be ignored (e.g. in case of a first row containing the column headers) | 
| datastoreId | Long | optional datastore identifier where the generated INSERT statements must be executed. | 
| tableName | String | table name where saving records | 
| defaultFieldNames | Map | map containing fieldname+default value, to include in the record INSERT, if not included in the CSV file | 
| csvFields | Map[] | list of fields contained in the CSV file and for each, properties about its usage; properties are defined according to this structure: \{ fieldName: "...", trim: true\|false, convertToSqlDate: "yyyy-MM-dd", convertToSqlTimestamp: "yyyy-MM-ddHH:mm:ss" \} | 
| limitRows | Integer | maximum number of row to read (default -1 no limit) | 
| throwIfExceededRows | Boolean | flag true\|false indicating whether the action execution must be interrupted in case of exceeded rows \{ fieldName: "...", trim: true\|false, convertToSqlDate: "yyyy-MM-dd", convertToSqlTimestamp: "yyyy-MM-ddHH:mm:ss" \} | 

> ✅ **Returns**
>
> number of processed records An INSERT is composed by including fieldNames+defaultFieldNames.


---

## readCSVFileAndWriteToTable

Read a CSV file stored in the server file system and insert each row as a record in a database table.

Syntax
```javascript
//return long type
var risp = utils.readCSVFileAndWriteToTable(
	fileName, //String
	directoryId, //Long
	sep, //String
	skipFirstRow, //Boolean
	datastoreId, //Long
	tableName, //String
	defaultFieldNames, //Map
	csvFields //Map[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileName | String | CSV file name, stored in the specified directory | 
| directoryId | Long | directory identifier, related to a folder in the server file system | 
| sep | String | CSV separator; allowed values are: , and ; | 
| skipFirstRow | Boolean | flag true\|false used to define whether the first row in the CSV file must be ignored (e.g. in case of a first row containing the column headers) | 
| datastoreId | Long | optional datastore identifier where the generated INSERT statements must be executed. | 
| tableName | String | table name where saving records | 
| defaultFieldNames | Map | map containing fieldname+default value, to include in the record INSERT, if not included in the CSV file | 
| csvFields | Map[] | list of fields contained in the CSV file and for each, properties about its usage; properties are defined according to this structure: \{ fieldName: "...", trim: true\|false, convertToSqlDate: "yyyy-MM-dd", convertToSqlTimestamp: "yyyy-MM-ddHH:mm:ss" \} | 

> ✅ **Returns**
>
> number of processed records An INSERT is composed by including fieldNames+defaultFieldNames.


---

## readCSVFile

Read a CSV file stored in the server file system and invoke the callback function" for each row. When invoking the callback function, a js object will be passed to it as an argument, containing the current row read from the CSV file.

Syntax
```javascript
function callbackFunName(data) \{
	
\}

utils.readCSVFile(
	fileName, //String
	directoryId, //Long
	sep, //String
	skipFirstRow, //Boolean
	callbackFunName, //String
	attributeNames, //String[]
	charSet, //String
	limitRows, //int
	throwIfExceededRows //boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileName | String | CSV file name, stored in the specified directory | 
| directoryId | Long | directory identifier, related to a folder in the server file system | 
| sep | String | CSV separator; allowed values are: , and ; | 
| skipFirstRow | Boolean | flag true\|false used to define whether the first row in the CSV file must be ignored (e.g. in case of a first row containing the column headers) | 
| callbackFunName | String | callback function name to invoke for each row; such a function must have a single argument, which will have the js object related to a row in the CSV file | 
| attributeNames | String[] | list of attribute names, to use for each column in the CSV file | 
| charSet | String | character set used to decode the CSV file content; if null, UTF-8 is used. | 
| limitRows | int | maximum number of row to read (default -1 no limit) | 
| throwIfExceededRows | boolean | flag true\|false indicating whether the action execution must be interrupted in case of exceeded rows | 


---

## readCSVFile

Read a CSV file stored in the server file system and invoke the callback function" for each row. When invoking the callback function, a js object will be passed to it as an argument, containing the current row read from the CSV file.

Syntax
```javascript
function callbackFunName(data) \{
	
\}

utils.readCSVFile(
	fileName, //String
	directoryId, //Long
	sep, //String
	skipFirstRow, //Boolean
	callbackFunName, //String
	attributeNames, //String[]
	charSet //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileName | String | CSV file name, stored in the specified directory | 
| directoryId | Long | directory identifier, related to a folder in the server file system | 
| sep | String | CSV separator; allowed values are: , and ; | 
| skipFirstRow | Boolean | flag true\|false used to define whether the first row in the CSV file must be ignored (e.g. in case of a first row containing the column headers) | 
| callbackFunName | String | callback function name to invoke for each row; such a function must have a single argument, which will have the js object related to a row in the CSV file | 
| attributeNames | String[] | list of attribute names, to use for each column in the CSV file | 
| charSet | String | character set used to decode the CSV file content; if null, UTF-8 is used. | 


---

## readCSVFile

Read a CSV file stored in the server file system and invoke the callback function" for each row. When invoking the callback function, a js object will be passed to it as an argument, containing the current row read from the CSV file.

Syntax
```javascript
function callbackFunName(data) \{
	
\}

utils.readCSVFile(
	fileName, //String
	directoryId, //Long
	sep, //String
	skipFirstRow, //Boolean
	callbackFunName, //String
	attributeNames //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileName | String | CSV file name, stored in the specified directory | 
| directoryId | Long | directory identifier, related to a folder in the server file system | 
| sep | String | CSV separator; allowed values are: , and ; | 
| skipFirstRow | Boolean | flag true\|false used to define whether the first row in the CSV file must be ignored (e.g. in case of a first row containing the column headers) | 
| callbackFunName | String | callback function name to invoke for each row; such a function must have a single argument, which will have the js object related to a row in the CSV file | 
| attributeNames | String[] | list of attribute names, to use for each column in the CSV file | 


---

## readCsvAndLoadTable

Reads a CSV file from a platform directory and bulk-loads its rows into a database table. Each row of the CSV is stored as-is in a CLOB field. Optionally, a numeric row ID or a UUID can be generated for each row, and additional constant fields can be inserted. The target table is always cleared first using the provided `deleteFilter` before loading new data. Data is committed in batches controlled by `commitSize`.

Syntax
```javascript
utils.readCsvAndLoadTable(
	settings //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| settings | Map | a Map containing the following expected keys: _(details below)_ | 

#### `settings`

a Map containing the following expected keys:
- **srcDirId** (Number, required): platform directory ID where the CSV source file is located
- **srcFileName** (String, required): name of the CSV file to read
- **charSet** (String, optional, default "UTF-8"): character encoding of the source file
- **idAsNum** (String, optional): column name for an auto-incremented numeric row ID; if set, a sequential Long is assigned to each row
- **idAsUuid** (String, optional): column name for a UUID row identifier; if set, a random UUID is assigned to each row
- **additionalFields** (Map<String, Object>, optional): map of extra column names to constant values to insert in every row
- **headers** (Boolean, optional): if `true`, the first row of the CSV file is skipped (treated as a header row)
- **datasourceId** (Number, optional): data source identifier for the target database connection; if null, the default connection is used
- **tableName** (String, required): name of the target database table
- **clobFieldName** (String, required): name of the CLOB column where the raw CSV row will be stored
- **deleteFilter** (String, optional): SQL WHERE clause used to clear existing rows before loading (e.g. "COMPANY_ID = 'ABC'")
- **commitSize** (Number, optional, default 1000): number of rows per batch commit
- **separator** (String, optional): field separator character (used only for multi-line row detection)
- **expectedFields** (Number, optional): expected number of fields per row; if a row has fewer fields than this, the next line is appended (multi-line row handling)
- **newline** (Boolean, optional, default true): when concatenating multi-line rows, if `true` inserts a newline character between parts; if `false` concatenates directly

> ⚠️ **Throws**
>
> - `Throwable` if a database error, file access error, or I/O error occurs


---

## readTextFile

Read a local file having text format.

Syntax
```javascript
function callbackFunName(data) \{
	
\}

utils.readTextFile(
	fileName, //String
	directoryId, //Long
	callbackFunName, //String
	charSet, //String
	limitRows, //int
	throwIfExceededRows //boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileName | String | text file name, stored in the specified directory | 
| directoryId | Long | directory identifier, related to a folder in the server file system | 
| callbackFunName | String | callback function name to invoke for each row; such a function must have a single argument, which will have the content of the current line (a text string) | 
| charSet | String | charset to use when reading a text file | 
| limitRows | int | maximum number of row to read (default -1 no limit) | 
| throwIfExceededRows | boolean | flag true\|false indicating whether the action execution must be interrupted in case of exceeded rows | 


---

## readTextFile

Read a local file having text format.

Syntax
```javascript
function callbackFunName(data) \{
	
\}

utils.readTextFile(
	fileName, //String
	directoryId, //Long
	callbackFunName, //String
	charSet //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileName | String | text file name, stored in the specified directory | 
| directoryId | Long | directory identifier, related to a folder in the server file system | 
| callbackFunName | String | callback function name to invoke for each row; such a function must have a single argument, which will have the content of the current line (a text string) | 
| charSet | String | charset to use when reading a text file | 


---

## readTextFile

Read a local file having text format.

Syntax
```javascript
function callbackFunName(data) \{
	
\}

utils.readTextFile(
	fileName, //String
	directoryId, //Long
	callbackFunName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fileName | String | text file name, stored in the specified directory | 
| directoryId | Long | directory identifier, related to a folder in the server file system | 
| callbackFunName | String | callback function name to invoke for each row; such a function must have a single argument, which will have the content of the current line (a text string) | 


---

## readTextFile

Read a local file having text format.

Syntax
```javascript
function callbackFunName(data) \{
	
\}

utils.readTextFile(
	fullPathName, //String
	callbackFunName, //String
	charSet, //String
	limitRows, //int
	throwIfExceededRows //boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fullPathName | String | path+filenae in the server file system | 
| callbackFunName | String | callback function name to invoke for each row; such a function must have a single argument, which will have the content of the current line (a text string) | 
| charSet | String | charset to use when reading a text file | 
| limitRows | int | maximum number of row to read (default -1 no limit) | 
| throwIfExceededRows | boolean | flag true\|false indicating whether the action execution must be interrupted in case of exceeded rows | 


---

## readTextFile

Read a local file having text format.

Syntax
```javascript
function callbackFunName(data) \{
	
\}

utils.readTextFile(
	fullPathName, //String
	callbackFunName, //String
	charSet //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fullPathName | String | path+filenae in the server file system | 
| callbackFunName | String | callback function name to invoke for each row; such a function must have a single argument, which will have the content of the current line (a text string) | 
| charSet | String | charset to use when reading a text file | 


---

## readTextFile

Read a local file having text format.

Syntax
```javascript
//return String type
var risp = utils.readTextFile(
	filePath, //String
	charSet //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| filePath | String | path + file name to read | 
| charSet | String | charset to use when reading a text file | 


---

## readTextFile

Read a local file having text format.

Syntax
```javascript
//return String type
var risp = utils.readTextFile(
	filePath //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| filePath | String | path + file name to read | 


---

## removeAttribute

Remove an attribute (e.g. "memberOf") from the entry identified by "filterDN".

Syntax
```javascript
//return int type
var risp = utils.removeAttribute(
	host, //String
	port, //Integer
	filterDN, //String
	ldapUsername, //String
	ldapPassword, //String
	attributeNameToRemove, //String
	attributeValueToRemove //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| host | String | LDAP host | 
| port | Integer | LDAP port (optional: if not specified, 389 will be used) | 
| filterDN | String | base DN to apply as a filter | 
| ldapUsername | String | username to use to authenticate to the LDAP server | 
| ldapPassword | String | password to use to authenticate to the LDAP server | 
| attributeNameToRemove | String | attribute name to remove from every entry matching the search criteria | 
| attributeValueToRemove | String | attribute value to remove from every entry matching the search criteria | 

> ✅ **Returns**
>
> number of entries found and updated


---

## removeCustomApplUserVars

Remove a custom parameter from the user session.

Syntax
```javascript
utils.removeCustomApplUserVars(
	code //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| code | String | custom session-variable key to remove from the user session. | 


---

## removeLinkedDevices

Remove current subdevice from Signal server.

Syntax
```javascript
utils.removeLinkedDevices();
```


---

## removeMembersFromChatGroup

Removes members from an existing chat group. Retrieves the current group from the server, removes the specified members, and saves the updated group via the ChatManager singleton.

Syntax
```javascript
utils.removeMembersFromChatGroup(
	groupId, //String
	myPhoneNumber, //String
	contactPhoneNumbers //String>
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| groupId | String | the unique identifier of the chat group | 
| myPhoneNumber | String | the phone number of the current user (kept in the group if not null) | 
| contactPhoneNumbers | String> | list of phone numbers of the contacts to remove | 

> ⚠️ **Throws**
>
> - `Throwable` in case of server communication errors


---

## removeSlashesForDatabaseField

Convert a javascript object as a JSON string, containing escape characters for each " symbol, soi that it can be saved in a database field and re-read later in a compatible format for JSON.parse(); Example: stringifyForDatabaseField(\{ \"text\": \"AB\\\\C\" \}) -> "\{ "text": "AB\\C" \}"

Syntax
```javascript
//return String type
var risp = utils.removeSlashesForDatabaseField(
	json //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| json | String | JSON string previously escaped for database storage, whose escape slashes must be normalized when reading it back. | 


---

## removeSlashesForJSON

Convert a javascript object as a JSON string, containing escape characters for each " symbol, soi that it can be saved in a database field and re-read later in a compatible format for JSON.parse(); Example: removeSlashesForJSON(\{ \"text\": \"AB\\\\C\" \}) -> "\{ "text": "AB\\C" \}"

Syntax
```javascript
//return String type
var risp = utils.removeSlashesForJSON(
	json //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| json | String | JSON string previously escaped for storage, whose escape slashes must be normalized for JSON.parse compatibility. | 


---

## removeTime

Removes the time component (hours, minutes, seconds, milliseconds) from a date, returning a date with time set to 00:00:00.000.

Syntax
```javascript
//return Date type
var risp = utils.removeTime(
	date //Date
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| date | Date | the date from which to remove the time component | 

> ✅ **Returns**
>
> a new `Date` instance with the same date but time zeroed out


---

## renameFTPFile [Deprecated]

Rename or move file of the FTP server

Syntax
```javascript
//return boolean type
var risp = utils.renameFTPFile(
	host, //String
	port, //Integer
	useSSL, //Boolean
	username, //String
	password, //String
	fromFileName, //String
	toFileName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| host | String | FTP server host | 
| port | Integer | FTP server port | 
| useSSL | Boolean | flag used to open a secure connection with the FTP server | 
| username | String | username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| password | String | password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| fromFileName | String | absolute path of old file | 
| toFileName | String | absolute path of new file | 

> ⚠️ **Throws**
>
> - `Exception`


---

## renameFTPFile

Rename or move file of the FTP server

Syntax
```javascript
//return boolean type
var risp = utils.renameFTPFile(
	protocol, //String
	host, //String
	port, //Integer
	useSSL, //Boolean
	username, //String
	password, //String
	fromFileName, //String
	toFileName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| protocol | String | FTP protocol type to use for the connection, for example FTP, FTPS, or SFTP. | 
| host | String | FTP server host | 
| port | Integer | FTP server port | 
| useSSL | Boolean | flag used to open a secure connection with the FTP server | 
| username | String | username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| password | String | password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| fromFileName | String | absolute path of old file | 
| toFileName | String | absolute path of new file | 

> ⚠️ **Throws**
>
> - `Exception`


---

## renameFile

Rename the specified file, stored in the local file system.

Syntax
```javascript
//return boolean type
var risp = utils.renameFile(
	directoryId, //Long
	oldFileName, //String
	newFileName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| directoryId | Long | path on the local file system, where the original file is located | 
| oldFileName | String | old file name | 
| newFileName | String | new file name Fire an exception if the original file does not exist or the destination file already exists | 

> ✅ **Returns**
>
> `true` if the renamoing operation was successful, `false` otherwise


---

## replaceAll

Replace all occurrences of the specified pattern within "text" with the new value.

Syntax
```javascript
//return String type
var risp = utils.replaceAll(
	text, //String
	pattern, //String
	changedValue //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| text | String | text to analyze | 
| pattern | String | pattern to search for | 
| changedValue | String | value that replaces all occurrences of the pattern | 

> ✅ **Returns**
>
> new text where all occurrences of "pattern" have been replaced with "changedValue"


---

## resume

Resumes the execution of a previously suspended server-side JavaScript action. Sets the internal flag to allow the suspended thread to exit its wait loop. @see #suspend() @see #suspend(String)

Syntax
```javascript
utils.resume();
```


---

## round

Rounds a number to the specified number of decimal places using HALF_UP rounding mode.

Syntax
```javascript
//return Number type
var risp = utils.round(
	num, //Number
	decimals //int
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| num | Number | the number to round; may be `null` | 
| decimals | int | the number of decimal places to retain | 

> ✅ **Returns**
>
> the rounded number as a BigDecimal, or `null` if the input is null

> ⚠️ **Throws**
>
> - `Throwable` never thrown under normal operation


---

## saveBlob

Load a binary file into a database field identified by "blobField" attribute in the table identified by "tableName" for an already existing record having the primary key identified by Array "pkNames" and values "pkValues". The file to load into the BLOB field is retrieved starting from the specified dirId + filename

Syntax
```javascript
//return Integer type
var risp = utils.saveBlob(
	settings //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| settings | Map | javascript object having the following structure \{ tableName: "...", blobField: "...", pkNames: ["..",...], pkValues: ["..",...], datastoreId: xyz, dirId: xyz, blobFileName: "..." \} | 

> ✅ **Returns**
>
> number of processed (updated) rows


---

## saveDocument

Generate a report starting from a .jasper report template and save it to the server file system, in the specified path.

Syntax
```javascript
//return String type
var risp = utils.saveDocument(
	reportName, //String
	dirReports, //String
	datastoreId, //Long
	compId, //Long
	reportFormat, //String
	reportParams, //Object>
	savePath //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| reportName | String | .jasper report name | 
| dirReports | String | optional folder where the .jasper file is located; this relative path is always contained within the subolder /reports/ | 
| datastoreId | Long | optional data source id used by the .jasper template to read data from the database | 
| compId | Long | optional value: business component id to use to fill in the report | 
| reportFormat | String | report format to use when creating the report; e.g. PDF | 
| reportParams | Object> | input parameters required by the report template | 
| savePath | String | path where the generated report will be saved; it must includes the file name | 

> ✅ **Returns**
>
> error message, in case of errors; "" if the generation has been successfully completed


---

## saveEml

Save the specified messages in EML format in the local file system, within the path specified through directoryId. In case of message id not valid, the corresponding saving is skipped and the method would get back all invalid message ids.

Syntax
```javascript
//return String[] type
var risp = utils.saveEml(
	server, //String
	port, //Integer
	username, //String
	password, //String
	protocol, //String
	useTLS, //Boolean
	folderName, //String
	messageIds, //String[]
	fileNames, //String[]
	directoryId //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| server | String | server host | 
| port | Integer | server port | 
| username | String | username to use when accessing the email server | 
| password | String | password to use when accessing the email server | 
| protocol | String | protocol to use when connecting to the email server | 
| useTLS | Boolean | flag used to enabled the TLS mode | 
| folderName | String | name of the folder where the messages to delete are located | 
| messageIds | String[] | list of message ids related to messages to save in EML format | 
| fileNames | String[] | file names used to save the messages in EML format with such a name, one for each message id, in the same order | 
| directoryId | Long | dir id used to figure out where saving files | 

> ✅ **Returns**
>
> list of message ids not valid


---

## saveGridExportInCSV

Export data defined starting from a grid and save it to the file system, in CSV format. Data is filtered according to the account specified.

Syntax
```javascript
//return Boolean type
var risp = utils.saveGridExportInCSV(
	appId, //String
	companyId, //String
	siteId, //Long
	username, //String
	password, //String
	platformBaseUrl, //String
	functionId, //String
	panelId, //Long
	filters, //List
	orders, //List
	attributes, //List
	titles, //List
	title, //String
	toFile //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| appId | String | application id | 
| companyId | String | company id | 
| siteId | Long | site id | 
| username | String | username | 
| password | String | password | 
| platformBaseUrl | String | local URL to the 4WS.Platform web application (e.g. http://localhost:8080/platform) | 
| functionId | String | function id, related to the grid linked to the export | 
| panelId | Long | grid identifier | 
| filters | List | list of tuples [attr,op,value], related to filters to apply to the base enquiry | 
| orders | List | list of tuples [attr,ASC/DESC], related to sorting conditions to apply to the base enquiry | 
| attributes | List | list of attributes, representing the whole columns | 
| titles | List | column headers | 
| title | String | export file | 
| toFile | String | absolute path, including the file name (.csv), where saving the exported data | 


---

## saveGridExportInExtendedCSV

Export data defined starting from a grid and save it to the file system, in CSV format where columns linked to combos are decoded by exctrating descriptions instead of the real code. Data is filtered according to the account specified.

Syntax
```javascript
//return Boolean type
var risp = utils.saveGridExportInExtendedCSV(
	appId, //String
	companyId, //String
	siteId, //Long
	username, //String
	password, //String
	platformBaseUrl, //String
	functionId, //String
	panelId, //Long
	filters, //List
	orders, //List
	attributes, //List
	titles, //List
	title, //String
	toFile //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| appId | String | application id | 
| companyId | String | company id | 
| siteId | Long | site id | 
| username | String | username | 
| password | String | password | 
| platformBaseUrl | String | local URL to the 4WS.Platform web application (e.g. http://localhost:8080/platform) | 
| functionId | String | function id, related to the grid linked to the export | 
| panelId | Long | grid identifier | 
| filters | List | list of tuples [attr,op,value], related to filters to apply to the base enquiry | 
| orders | List | list of tuples [attr,ASC/DESC], related to sorting conditions to apply to the base enquiry | 
| attributes | List | list of attributes, representing the whole columns | 
| titles | List | column headers | 
| title | String | export file | 
| toFile | String | absolute path, including the file name (.csv), where saving the exported data | 


---

## sendAlertEmailFromTemplateWithConversationAndSMTPSettings

Send an ALERT email to the specified destinations, starting from the specified templateId. Usernames are required for "from" and "destinations" arguments, which are both optionals. This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email. When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertEmailFromTemplateWithConversationAndSMTPSettings(
	from, //String
	templateId, //Number
	destinations, //String
	priority, //String
	isHtmlContent, //boolean
	jsObj, //Map
	conversationId, //Long
	messageTag, //String
	smtpHost, //String
	smtpPort, //String
	protocol, //String
	smtpUsername, //String
	smtpPassword, //String
	useTLS, //String
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| from | String | optional sender username; if null, the current user or the template-defined sender is used. | 
| templateId | Number | identifier of the CON52 template/button configuration used to resolve email subject and body. | 
| destinations | String | comma-separated destination usernames whose email addresses are resolved by the platform. | 
| priority | String | email priority stored in the alert log; if null, the platform default priority is used. | 
| isHtmlContent | boolean | true to send the resolved template body as HTML; false for plain text. | 
| jsObj | Map | map of template variables used for :PLACEHOLDER replacement; top-level entries become variables with the same name, nested maps become dotted variables such as parent.child, and PRINT_VARS="Y" enables variable logging before sending. | 
| conversationId | Long | optional conversation identifier used to correlate the email with an existing conversation. | 
| messageTag | String | optional tag stored with the generated alert/email log entry. | 
| smtpHost | String | SMTP server host used to send the email. | 
| smtpPort | String | SMTP server port; if empty, the mail subsystem default is used. | 
| protocol | String | mail transport protocol, typically smtp or smtps. | 
| smtpUsername | String | SMTP username used for authenticated mail sessions; can be null for anonymous delivery. | 
| smtpPassword | String | SMTP password paired with smtpUsername. | 
| useTLS | String | TLS mode flag passed to the mail sender: E enables STARTTLS, F forces it, any other value leaves it disabled. | 
| filesToAttach | String[] | additional attachment file paths to include in the email. | 


---

## sendAlertEmailFromTemplateWithConversationAndSMTPSettings

Send an ALERT email to the specified destinations, starting from the specified templateId. Usernames are required for "from" and "destinations" arguments, which are both optionals. This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email. When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertEmailFromTemplateWithConversationAndSMTPSettings(
	from, //String
	templateId, //Number
	destinations, //String
	carbonCopy, //String
	blindCarbonCopy, //String
	priority, //String
	isHtmlContent, //boolean
	jsObj, //Map
	conversationId, //Long
	messageTag, //String
	smtpHost, //String
	smtpPort, //String
	protocol, //String
	smtpUsername, //String
	smtpPassword, //String
	useTLS, //String
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| from | String | optional sender username; if null, the current user or the template-defined sender is used. | 
| templateId | Number | identifier of the CON52 template/button configuration used to resolve email subject and body. | 
| destinations | String | comma-separated destination usernames whose email addresses are resolved by the platform. | 
| carbonCopy | String | optional comma-separated CC recipients. | 
| blindCarbonCopy | String | optional comma-separated BCC recipients. | 
| priority | String | email priority stored in the alert log; if null, the platform default priority is used. | 
| isHtmlContent | boolean | true to send the resolved template body as HTML; false for plain text. | 
| jsObj | Map | map of template variables used for :PLACEHOLDER replacement; top-level entries become variables with the same name, nested maps become dotted variables such as parent.child, and PRINT_VARS="Y" enables variable logging before sending. | 
| conversationId | Long | optional conversation identifier used to correlate the email with an existing conversation. | 
| messageTag | String | optional tag stored with the generated alert/email log entry. | 
| smtpHost | String | SMTP server host used to send the email. | 
| smtpPort | String | SMTP server port; if empty, the mail subsystem default is used. | 
| protocol | String | mail transport protocol, typically smtp or smtps. | 
| smtpUsername | String | SMTP username used for authenticated mail sessions; can be null for anonymous delivery. | 
| smtpPassword | String | SMTP password paired with smtpUsername. | 
| useTLS | String | TLS mode flag passed to the mail sender: E enables STARTTLS, F forces it, any other value leaves it disabled. | 
| filesToAttach | String[] | additional attachment file paths to include in the email. | 


---

## sendAlertEmailFromTemplateWithConversationAndSMTPSettings

Send an ALERT email to the specified destinations, starting from the specified templateId. Usernames are required for "from" and "destinations" arguments, which are both optionals. This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email. When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertEmailFromTemplateWithConversationAndSMTPSettings(
	from, //String
	templateId, //Number
	destinations, //String
	carbonCopy, //String
	blindCarbonCopy, //String
	priority, //String
	isHtmlContent, //boolean
	jsObj, //Map
	conversationId, //Long
	messageTag, //String
	smtpHost, //String
	smtpPort, //String
	protocol, //String
	smtpUsername, //String
	smtpPassword, //String
	useTLS, //String
	dirId, //Long
	fileName, //String
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| from | String | optional sender username; if null, the current user or the template-defined sender is used. | 
| templateId | Number | identifier of the CON52 template/button configuration used to resolve email subject and body. | 
| destinations | String | comma-separated destination usernames whose email addresses are resolved by the platform. | 
| carbonCopy | String | optional comma-separated CC recipients. | 
| blindCarbonCopy | String | optional comma-separated BCC recipients. | 
| priority | String | email priority stored in the alert log; if null, the platform default priority is used. | 
| isHtmlContent | boolean | true to send the resolved template body as HTML; false for plain text. | 
| jsObj | Map | map of template variables used for :PLACEHOLDER replacement; top-level entries become variables with the same name, nested maps become dotted variables such as parent.child, and PRINT_VARS="Y" enables variable logging before sending. | 
| conversationId | Long | optional conversation identifier used to correlate the email with an existing conversation. | 
| messageTag | String | optional tag stored with the generated alert/email log entry. | 
| smtpHost | String | SMTP server host used to send the email. | 
| smtpPort | String | SMTP server port; if empty, the mail subsystem default is used. | 
| protocol | String | mail transport protocol, typically smtp or smtps. | 
| smtpUsername | String | SMTP username used for authenticated mail sessions; can be null for anonymous delivery. | 
| smtpPassword | String | SMTP password paired with smtpUsername. | 
| useTLS | String | TLS mode flag passed to the mail sender: E enables STARTTLS, F forces it, any other value leaves it disabled. | 
| dirId | Long | optional directory identifier where the generated EML message must be saved after sending. | 
| fileName | String | optional file name to use when saving the generated EML into dirId. | 
| filesToAttach | String[] | additional attachment file paths to include in the email. | 


---

## sendAlertEmailFromTemplateWithConversation

Send an ALERT email to the specified destinations, starting from the specified templateId. Usernames are required for "from" and "destinations" arguments, which are both optionals. This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email. When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertEmailFromTemplateWithConversation(
	from, //String
	templateId, //Number
	destinations, //String
	priority, //String
	isHtmlContent, //boolean
	jsObj, //Map
	conversationId, //Long
	messageTag, //String
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| from | String | optional sender username; if null, the current user or the template-defined sender is used. | 
| templateId | Number | identifier of the CON52 template/button configuration used to resolve email subject and body. | 
| destinations | String | comma-separated destination usernames whose email addresses are resolved by the platform. | 
| priority | String | email priority stored in the alert log; if null, the platform default priority is used. | 
| isHtmlContent | boolean | true to send the resolved template body as HTML; false for plain text. | 
| jsObj | Map | map of template variables used for :PLACEHOLDER replacement; top-level entries become variables with the same name, nested maps become dotted variables such as parent.child, and PRINT_VARS="Y" enables variable logging before sending. | 
| conversationId | Long | optional conversation identifier used to correlate the email with an existing conversation. | 
| messageTag | String | optional tag stored with the generated alert/email log entry. | 
| filesToAttach | String[] | additional attachment file paths to include in the email. | 

> ✅ **Returns**
>
> true if the email was sent successfully, false otherwise


---

## sendAlertEmailFromTemplateWithConversation

Send an ALERT email to the specified destinations, starting from the specified templateId. Usernames are required for "from" and "destinations" arguments, which are both optionals. This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email. When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertEmailFromTemplateWithConversation(
	from, //String
	templateId, //Number
	destinations, //String
	carbonCopy, //String
	blindCarbonCopy, //String
	priority, //String
	isHtmlContent, //boolean
	jsObj, //Map
	conversationId, //Long
	messageTag, //String
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| from | String | optional sender username; if null, the current user or the template-defined sender is used. | 
| templateId | Number | identifier of the CON52 template/button configuration used to resolve email subject and body. | 
| destinations | String | comma-separated destination usernames whose email addresses are resolved by the platform. | 
| carbonCopy | String | optional comma-separated CC recipients. | 
| blindCarbonCopy | String | optional comma-separated BCC recipients. | 
| priority | String | email priority stored in the alert log; if null, the platform default priority is used. | 
| isHtmlContent | boolean | true to send the resolved template body as HTML; false for plain text. | 
| jsObj | Map | map of template variables used for :PLACEHOLDER replacement; top-level entries become variables with the same name, nested maps become dotted variables such as parent.child, and PRINT_VARS="Y" enables variable logging before sending. | 
| conversationId | Long | optional conversation identifier used to correlate the email with an existing conversation. | 
| messageTag | String | optional tag stored with the generated alert/email log entry. | 
| filesToAttach | String[] | additional attachment file paths to include in the email. | 

> ✅ **Returns**
>
> true if the email was sent successfully, false otherwise


---

## sendAlertEmailFromTemplateWithConversation

Send an ALERT email to the specified destinations, starting from the specified templateId. Usernames are required for "from" and "destinations" arguments, which are both optionals. This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email. When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertEmailFromTemplateWithConversation(
	from, //String
	templateId, //Number
	destinations, //String
	carbonCopy, //String
	blindCarbonCopy, //String
	priority, //String
	isHtmlContent, //boolean
	jsObj, //Map
	conversationId, //Long
	messageTag, //String
	dirId, //Long
	fileName, //String
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| from | String | optional sender username; if null, the current user or the template-defined sender is used. | 
| templateId | Number | identifier of the CON52 template/button configuration used to resolve email subject and body. | 
| destinations | String | comma-separated destination usernames whose email addresses are resolved by the platform. | 
| carbonCopy | String | optional comma-separated CC recipients. | 
| blindCarbonCopy | String | optional comma-separated BCC recipients. | 
| priority | String | email priority stored in the alert log; if null, the platform default priority is used. | 
| isHtmlContent | boolean | true to send the resolved template body as HTML; false for plain text. | 
| jsObj | Map | map of template variables used for :PLACEHOLDER replacement; top-level entries become variables with the same name, nested maps become dotted variables such as parent.child, and PRINT_VARS="Y" enables variable logging before sending. | 
| conversationId | Long | optional conversation identifier used to correlate the email with an existing conversation. | 
| messageTag | String | optional tag stored with the generated alert/email log entry. | 
| dirId | Long | (optional: can be null); directory ID for an additional attachment file | 
| fileName | String | (optional: can be null); file name within dirId to attach | 
| filesToAttach | String[] | additional attachment file paths to include in the email. | 

> ✅ **Returns**
>
> true if the email was sent successfully, false otherwise


---

## sendAlertEmailFromTemplateWithEmailAddressesWithConversationAndSMTPSettings

Send an ALERT email to the specified destinations, starting from the specified templateId. Email addresses are required for "from" and "destinations" arguments, which are both optionals. This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email. When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertEmailFromTemplateWithEmailAddressesWithConversationAndSMTPSettings(
	fromEmail, //String
	templateId, //Number
	destinationsEmail, //String
	priority, //String
	isHtmlContent, //boolean
	jsObj, //Map
	conversationId, //Long
	messageTag, //String
	smtpHost, //String
	smtpPort, //String
	protocol, //String
	smtpUsername, //String
	smtpPassword, //String
	useTLS, //String
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fromEmail | String | optional sender email address; if null, the template-defined sender or current user email is used. | 
| templateId | Number | identifier of the CON52 template/button configuration used to resolve email subject and body. | 
| destinationsEmail | String | comma-separated destination email addresses used directly without username resolution. | 
| priority | String | email priority stored in the alert log; if null, the platform default priority is used. | 
| isHtmlContent | boolean | true to send the resolved template body as HTML; false for plain text. | 
| jsObj | Map | map of template variables used for :PLACEHOLDER replacement; top-level entries become variables with the same name, nested maps become dotted variables such as parent.child, and PRINT_VARS="Y" enables variable logging before sending. | 
| conversationId | Long | optional conversation identifier used to correlate the email with an existing conversation. | 
| messageTag | String | optional tag stored with the generated alert/email log entry. | 
| smtpHost | String | SMTP server host used to send the email. | 
| smtpPort | String | SMTP server port; if empty, the mail subsystem default is used. | 
| protocol | String | mail transport protocol, typically smtp or smtps. | 
| smtpUsername | String | SMTP username used for authenticated mail sessions; can be null for anonymous delivery. | 
| smtpPassword | String | SMTP password paired with smtpUsername. | 
| useTLS | String | TLS mode flag passed to the mail sender: E enables STARTTLS, F forces it, any other value leaves it disabled. | 
| filesToAttach | String[] | additional attachment file paths to include in the email. | 


---

## sendAlertEmailFromTemplateWithEmailAddressesWithConversationAndSMTPSettings

Send an ALERT email to the specified destinations, starting from the specified templateId. Email addresses are required for "from" and "destinations" arguments, which are both optionals. This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email. When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertEmailFromTemplateWithEmailAddressesWithConversationAndSMTPSettings(
	fromEmail, //String
	templateId, //Number
	destinationsEmail, //String
	carbonCopy, //String
	blindCarbonCopy, //String
	priority, //String
	isHtmlContent, //boolean
	jsObj, //Map
	conversationId, //Long
	messageTag, //String
	smtpHost, //String
	smtpPort, //String
	protocol, //String
	smtpUsername, //String
	smtpPassword, //String
	useTLS, //String
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fromEmail | String | optional sender email address; if null, the template-defined sender or current user email is used. | 
| templateId | Number | identifier of the CON52 template/button configuration used to resolve email subject and body. | 
| destinationsEmail | String | comma-separated destination email addresses used directly without username resolution. | 
| carbonCopy | String | optional comma-separated CC recipients. | 
| blindCarbonCopy | String | optional comma-separated BCC recipients. | 
| priority | String | email priority stored in the alert log; if null, the platform default priority is used. | 
| isHtmlContent | boolean | true to send the resolved template body as HTML; false for plain text. | 
| jsObj | Map | map of template variables used for :PLACEHOLDER replacement; top-level entries become variables with the same name, nested maps become dotted variables such as parent.child, and PRINT_VARS="Y" enables variable logging before sending. | 
| conversationId | Long | optional conversation identifier used to correlate the email with an existing conversation. | 
| messageTag | String | optional tag stored with the generated alert/email log entry. | 
| smtpHost | String | SMTP server host used to send the email. | 
| smtpPort | String | SMTP server port; if empty, the mail subsystem default is used. | 
| protocol | String | mail transport protocol, typically smtp or smtps. | 
| smtpUsername | String | SMTP username used for authenticated mail sessions; can be null for anonymous delivery. | 
| smtpPassword | String | SMTP password paired with smtpUsername. | 
| useTLS | String | TLS mode flag passed to the mail sender: E enables STARTTLS, F forces it, any other value leaves it disabled. | 
| filesToAttach | String[] | additional attachment file paths to include in the email. | 


---

## sendAlertEmailFromTemplateWithEmailAddressesWithConversationAndSMTPSettings

Send an ALERT email to the specified destinations, starting from the specified templateId. Email addresses are required for "from" and "destinations" arguments, which are both optionals. This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email. When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertEmailFromTemplateWithEmailAddressesWithConversationAndSMTPSettings(
	fromEmail, //String
	templateId, //Number
	destinationsEmail, //String
	carbonCopy, //String
	blindCarbonCopy, //String
	priority, //String
	isHtmlContent, //boolean
	jsObj, //Map
	conversationId, //Long
	messageTag, //String
	smtpHost, //String
	smtpPort, //String
	protocol, //String
	smtpUsername, //String
	smtpPassword, //String
	useTLS, //String
	dirId, //Long
	fileName, //String
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fromEmail | String | optional sender email address; if null, the template-defined sender or current user email is used. | 
| templateId | Number | identifier of the CON52 template/button configuration used to resolve email subject and body. | 
| destinationsEmail | String | comma-separated destination email addresses used directly without username resolution. | 
| carbonCopy | String | optional comma-separated CC recipients. | 
| blindCarbonCopy | String | optional comma-separated BCC recipients. | 
| priority | String | email priority stored in the alert log; if null, the platform default priority is used. | 
| isHtmlContent | boolean | true to send the resolved template body as HTML; false for plain text. | 
| jsObj | Map | map of template variables used for :PLACEHOLDER replacement; top-level entries become variables with the same name, nested maps become dotted variables such as parent.child, and PRINT_VARS="Y" enables variable logging before sending. | 
| conversationId | Long | optional conversation identifier used to correlate the email with an existing conversation. | 
| messageTag | String | optional tag stored with the generated alert/email log entry. | 
| smtpHost | String | SMTP server host used to send the email. | 
| smtpPort | String | SMTP server port; if empty, the mail subsystem default is used. | 
| protocol | String | mail transport protocol, typically smtp or smtps. | 
| smtpUsername | String | SMTP username used for authenticated mail sessions; can be null for anonymous delivery. | 
| smtpPassword | String | SMTP password paired with smtpUsername. | 
| useTLS | String | TLS mode flag passed to the mail sender: E enables STARTTLS, F forces it, any other value leaves it disabled. | 
| dirId | Long | optional directory identifier where the generated EML message must be saved after sending. | 
| fileName | String | optional file name to use when saving the generated EML into dirId. | 
| filesToAttach | String[] | additional attachment file paths to include in the email. | 


---

## sendAlertEmailFromTemplateWithEmailAddressesWithConversation

Send an ALERT email to the specified destinations, starting from the specified templateId. Email addresses are required for "from" and "destinations" arguments, which are both optionals. This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email. When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertEmailFromTemplateWithEmailAddressesWithConversation(
	fromEmail, //String
	templateId, //Number
	destinationsEmail, //String
	priority, //String
	isHtmlContent, //boolean
	jsObj, //Map
	conversationId, //Long
	messageTag, //String
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fromEmail | String | optional sender email address; if null, the template-defined sender or current user email is used. | 
| templateId | Number | identifier of the CON52 template/button configuration used to resolve email subject and body. | 
| destinationsEmail | String | comma-separated destination email addresses used directly without username resolution. | 
| priority | String | email priority stored in the alert log; if null, the platform default priority is used. | 
| isHtmlContent | boolean | true to send the resolved template body as HTML; false for plain text. | 
| jsObj | Map | map of template variables used for :PLACEHOLDER replacement; top-level entries become variables with the same name, nested maps become dotted variables such as parent.child, and PRINT_VARS="Y" enables variable logging before sending. | 
| conversationId | Long | optional conversation identifier used to correlate the email with an existing conversation. | 
| messageTag | String | optional tag stored with the generated alert/email log entry. | 
| filesToAttach | String[] | additional attachment file paths to include in the email. | 

> ✅ **Returns**
>
> true if the email was sent successfully, false otherwise


---

## sendAlertEmailFromTemplateWithEmailAddressesWithConversation

Send an ALERT email to the specified destinations, starting from the specified templateId. Email addresses are required for "from" and "destinations" arguments, which are both optionals. This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email. When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertEmailFromTemplateWithEmailAddressesWithConversation(
	fromEmail, //String
	templateId, //Number
	destinationsEmail, //String
	carbonCopy, //String
	blindCarbonCopy, //String
	priority, //String
	isHtmlContent, //boolean
	jsObj, //Map
	conversationId, //Long
	messageTag, //String
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fromEmail | String | optional sender email address; if null, the template-defined sender or current user email is used. | 
| templateId | Number | identifier of the CON52 template/button configuration used to resolve email subject and body. | 
| destinationsEmail | String | comma-separated destination email addresses used directly without username resolution. | 
| carbonCopy | String | optional comma-separated CC recipients. | 
| blindCarbonCopy | String | optional comma-separated BCC recipients. | 
| priority | String | email priority stored in the alert log; if null, the platform default priority is used. | 
| isHtmlContent | boolean | true to send the resolved template body as HTML; false for plain text. | 
| jsObj | Map | map of template variables used for :PLACEHOLDER replacement; top-level entries become variables with the same name, nested maps become dotted variables such as parent.child, and PRINT_VARS="Y" enables variable logging before sending. | 
| conversationId | Long | optional conversation identifier used to correlate the email with an existing conversation. | 
| messageTag | String | optional tag stored with the generated alert/email log entry. | 
| filesToAttach | String[] | additional attachment file paths to include in the email. | 

> ✅ **Returns**
>
> true if the email was sent successfully, false otherwise


---

## sendAlertEmailFromTemplateWithEmailAddressesWithConversation

Send an ALERT email to the specified destinations, starting from the specified templateId. Email addresses are required for "from" and "destinations" arguments, which are both optionals. This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email. When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertEmailFromTemplateWithEmailAddressesWithConversation(
	fromEmail, //String
	templateId, //Number
	destinationsEmail, //String
	carbonCopy, //String
	blindCarbonCopy, //String
	priority, //String
	isHtmlContent, //boolean
	jsObj, //Map
	conversationId, //Long
	messageTag, //String
	dirId, //Long
	fileName, //String
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fromEmail | String | optional sender email address; if null, the template-defined sender or current user email is used. | 
| templateId | Number | identifier of the CON52 template/button configuration used to resolve email subject and body. | 
| destinationsEmail | String | comma-separated destination email addresses used directly without username resolution. | 
| carbonCopy | String | optional comma-separated CC recipients. | 
| blindCarbonCopy | String | optional comma-separated BCC recipients. | 
| priority | String | email priority stored in the alert log; if null, the platform default priority is used. | 
| isHtmlContent | boolean | true to send the resolved template body as HTML; false for plain text. | 
| jsObj | Map | map of template variables used for :PLACEHOLDER replacement; top-level entries become variables with the same name, nested maps become dotted variables such as parent.child, and PRINT_VARS="Y" enables variable logging before sending. | 
| conversationId | Long | optional conversation identifier used to correlate the email with an existing conversation. | 
| messageTag | String | optional tag stored with the generated alert/email log entry. | 
| dirId | Long | (optional: can be null); directory ID for an additional attachment file | 
| fileName | String | (optional: can be null); file name within dirId to attach | 
| filesToAttach | String[] | additional attachment file paths to include in the email. | 

> ✅ **Returns**
>
> true if the email was sent successfully, false otherwise


---

## sendAlertEmailFromTemplateWithEmailAddressesWithSMTPSettings

Send an ALERT email to the specified destinations, starting from the specified templateId. Email addresses are required for "from" and "destinations" arguments, which are both optionals. This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email. When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertEmailFromTemplateWithEmailAddressesWithSMTPSettings(
	fromEmail, //String
	templateId, //Number
	destinationsEmail, //String
	priority, //String
	isHtmlContent, //boolean
	jsObj, //Map
	smtpHost, //String
	smtpPort, //String
	protocol, //String
	smtpUsername, //String
	smtpPassword, //String
	useTLS, //String
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fromEmail | String | optional sender email address; if null, the template-defined sender or current user email is used. | 
| templateId | Number | identifier of the CON52 template/button configuration used to resolve email subject and body. | 
| destinationsEmail | String | comma-separated destination email addresses used directly without username resolution. | 
| priority | String | email priority stored in the alert log; if null, the platform default priority is used. | 
| isHtmlContent | boolean | true to send the resolved template body as HTML; false for plain text. | 
| jsObj | Map | map of template variables used for :PLACEHOLDER replacement; top-level entries become variables with the same name, nested maps become dotted variables such as parent.child, and PRINT_VARS="Y" enables variable logging before sending. | 
| smtpHost | String | SMTP server host used to send the email. | 
| smtpPort | String | SMTP server port; if empty, the mail subsystem default is used. | 
| protocol | String | mail transport protocol, typically smtp or smtps. | 
| smtpUsername | String | SMTP username used for authenticated mail sessions; can be null for anonymous delivery. | 
| smtpPassword | String | SMTP password paired with smtpUsername. | 
| useTLS | String | TLS mode flag passed to the mail sender: E enables STARTTLS, F forces it, any other value leaves it disabled. | 
| filesToAttach | String[] | additional attachment file paths to include in the email. | 


---

## sendAlertEmailFromTemplateWithEmailAddressesWithSMTPSettings

Send an ALERT email to the specified destinations, starting from the specified templateId. Email addresses are required for "from" and "destinations" arguments, which are both optionals. This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email. When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertEmailFromTemplateWithEmailAddressesWithSMTPSettings(
	fromEmail, //String
	templateId, //Number
	destinationsEmail, //String
	priority, //String
	isHtmlContent, //boolean
	jsObj, //Map
	smtpHost, //String
	smtpPort, //String
	protocol, //String
	smtpUsername, //String
	smtpPassword, //String
	useTLS, //String
	dirId, //Long
	fileName, //String
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fromEmail | String | optional sender email address; if null, the template-defined sender or current user email is used. | 
| templateId | Number | identifier of the CON52 template/button configuration used to resolve email subject and body. | 
| destinationsEmail | String | comma-separated destination email addresses used directly without username resolution. | 
| priority | String | email priority stored in the alert log; if null, the platform default priority is used. | 
| isHtmlContent | boolean | true to send the resolved template body as HTML; false for plain text. | 
| jsObj | Map | map of template variables used for :PLACEHOLDER replacement; top-level entries become variables with the same name, nested maps become dotted variables such as parent.child, and PRINT_VARS="Y" enables variable logging before sending. | 
| smtpHost | String | SMTP server host used to send the email. | 
| smtpPort | String | SMTP server port; if empty, the mail subsystem default is used. | 
| protocol | String | mail transport protocol, typically smtp or smtps. | 
| smtpUsername | String | SMTP username used for authenticated mail sessions; can be null for anonymous delivery. | 
| smtpPassword | String | SMTP password paired with smtpUsername. | 
| useTLS | String | TLS mode flag passed to the mail sender: E enables STARTTLS, F forces it, any other value leaves it disabled. | 
| dirId | Long | optional directory identifier where the generated EML message must be saved after sending. | 
| fileName | String | optional file name to use when saving the generated EML into dirId. | 
| filesToAttach | String[] | additional attachment file paths to include in the email. | 


---

## sendAlertEmailFromTemplateWithEmailAddresses

Send an ALERT email to the specified destinations, starting from the specified templateId. Email addresses are required for "from" and "destinations" arguments, which are both optionals. This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email. When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertEmailFromTemplateWithEmailAddresses(
	fromEmail, //String
	templateId, //Number
	destinationsEmail, //String
	priority, //String
	isHtmlContent, //boolean
	jsObj, //Map
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fromEmail | String | optional sender email address; if null, the template-defined sender or current user email is used. | 
| templateId | Number | identifier of the CON52 template/button configuration used to resolve email subject and body. | 
| destinationsEmail | String | comma-separated destination email addresses used directly without username resolution. | 
| priority | String | email priority stored in the alert log; if null, the platform default priority is used. | 
| isHtmlContent | boolean | true to send the resolved template body as HTML; false for plain text. | 
| jsObj | Map | map of template variables used for :PLACEHOLDER replacement; top-level entries become variables with the same name, nested maps become dotted variables such as parent.child, and PRINT_VARS="Y" enables variable logging before sending. | 
| filesToAttach | String[] | additional attachment file paths to include in the email. | 


---

## sendAlertEmailFromTemplateWithEmailAddresses

Send an ALERT email to the specified destinations, starting from the specified templateId. Email addresses are required for "from" and "destinations" arguments, which are both optionals. This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email. When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertEmailFromTemplateWithEmailAddresses(
	fromEmail, //String
	templateId, //Number
	destinationsEmail, //String
	priority, //String
	isHtmlContent, //boolean
	jsObj, //Map
	dirId, //Long
	fileName, //String
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fromEmail | String | optional sender email address; if null, the template-defined sender or current user email is used. | 
| templateId | Number | identifier of the CON52 template/button configuration used to resolve email subject and body. | 
| destinationsEmail | String | comma-separated destination email addresses used directly without username resolution. | 
| priority | String | email priority stored in the alert log; if null, the platform default priority is used. | 
| isHtmlContent | boolean | true to send the resolved template body as HTML; false for plain text. | 
| jsObj | Map | map of template variables used for :PLACEHOLDER replacement; top-level entries become variables with the same name, nested maps become dotted variables such as parent.child, and PRINT_VARS="Y" enables variable logging before sending. | 
| dirId | Long | optional directory identifier where the generated EML message must be saved after sending. | 
| fileName | String | optional file name to use when saving the generated EML into dirId. | 
| filesToAttach | String[] | additional attachment file paths to include in the email. | 


---

## sendAlertEmailFromTemplate

Send an ALERT email to the specified destinations, starting from the specified templateId. Usernames are required for "from" and "destinations" arguments, which are both optionals. This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email. When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertEmailFromTemplate(
	from, //String
	templateId, //Number
	destinations, //String
	priority, //String
	isHtmlContent, //boolean
	jsObj, //Map
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| from | String | optional sender username; if null, the current user or the template-defined sender is used. | 
| templateId | Number | identifier of the CON52 template/button configuration used to resolve email subject and body. | 
| destinations | String | comma-separated destination usernames whose email addresses are resolved by the platform. | 
| priority | String | email priority stored in the alert log; if null, the platform default priority is used. | 
| isHtmlContent | boolean | true to send the resolved template body as HTML; false for plain text. | 
| jsObj | Map | map of template variables used for :PLACEHOLDER replacement; top-level entries become variables with the same name, nested maps become dotted variables such as parent.child, and PRINT_VARS="Y" enables variable logging before sending. | 
| filesToAttach | String[] | additional attachment file paths to include in the email. | 


---

## sendAlertEmailFromTemplate

Send an ALERT email to the specified destinations, starting from the specified templateId. Usernames are required for "from" and "destinations" arguments, which are both optionals. This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email. When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertEmailFromTemplate(
	from, //String
	templateId, //Number
	destinations, //String
	carbonCopy, //String
	blindCarbonCopy, //String
	priority, //String
	isHtmlContent, //boolean
	jsObj, //Map
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| from | String | optional sender username; if null, the current user or the template-defined sender is used. | 
| templateId | Number | identifier of the CON52 template/button configuration used to resolve email subject and body. | 
| destinations | String | comma-separated destination usernames whose email addresses are resolved by the platform. | 
| carbonCopy | String | optional comma-separated CC recipients. | 
| blindCarbonCopy | String | optional comma-separated BCC recipients. | 
| priority | String | email priority stored in the alert log; if null, the platform default priority is used. | 
| isHtmlContent | boolean | true to send the resolved template body as HTML; false for plain text. | 
| jsObj | Map | map of template variables used for :PLACEHOLDER replacement; top-level entries become variables with the same name, nested maps become dotted variables such as parent.child, and PRINT_VARS="Y" enables variable logging before sending. | 
| filesToAttach | String[] | additional attachment file paths to include in the email. | 


---

## sendAlertEmailFromTemplate

Send an ALERT email to the specified destinations, starting from the specified templateId. Usernames are required for "from" and "destinations" arguments, which are both optionals. This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email. When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertEmailFromTemplate(
	from, //String
	templateId, //Number
	destinations, //String
	carbonCopy, //String
	blindCarbonCopy, //String
	priority, //String
	isHtmlContent, //boolean
	jsObj, //Map
	dirId, //Long
	fileName, //String
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| from | String | optional sender username; if null, the current user or the template-defined sender is used. | 
| templateId | Number | identifier of the CON52 template/button configuration used to resolve email subject and body. | 
| destinations | String | comma-separated destination usernames whose email addresses are resolved by the platform. | 
| carbonCopy | String | optional comma-separated CC recipients. | 
| blindCarbonCopy | String | optional comma-separated BCC recipients. | 
| priority | String | email priority stored in the alert log; if null, the platform default priority is used. | 
| isHtmlContent | boolean | true to send the resolved template body as HTML; false for plain text. | 
| jsObj | Map | map of template variables used for :PLACEHOLDER replacement; top-level entries become variables with the same name, nested maps become dotted variables such as parent.child, and PRINT_VARS="Y" enables variable logging before sending. | 
| dirId | Long | optional directory identifier where the generated EML message must be saved after sending. | 
| fileName | String | optional file name to use when saving the generated EML into dirId. | 
| filesToAttach | String[] | additional attachment file paths to include in the email. | 


---

## sendAlertEmailWithConversation

Send an ALERT email to the specified destinations. Usernames are required for "from" and "destinations" arguments.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertEmailWithConversation(
	from, //String
	subject, //String
	message, //String
	destinations, //String
	priority, //String
	isHtmlContent, //boolean
	returnReceipt, //boolean
	conversationId, //Long
	messageTag, //String
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| from | String | sender username; if null, the current user is used and its email address is resolved automatically. | 
| subject | String | email subject stored in the alert log and used for the outgoing email. | 
| message | String | email body content. | 
| destinations | String | comma-separated list of destination usernames whose email addresses will be resolved by the platform. | 
| priority | String | email priority stored in the alert log; if null, the platform default priority is used. | 
| isHtmlContent | boolean | true to send the message body as HTML; false to send it as plain text. | 
| returnReceipt | boolean | true to request a read receipt from recipients. | 
| conversationId | Long | optional conversation identifier used to correlate the email alert with an existing conversation. | 
| messageTag | String | optional tag stored with the generated alert/email log entry. | 
| filesToAttach | String[] | absolute server paths of additional files to attach to the outgoing email. | 


---

## sendAlertEmailWithConversation

Send an ALERT email to the specified destinations. Usernames are required for "from" and "destinations" arguments.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertEmailWithConversation(
	from, //String
	subject, //String
	message, //String
	destinations, //String
	carbonCopy, //String
	blindCarbonCopy, //String
	priority, //String
	isHtmlContent, //boolean
	returnReceipt, //boolean
	conversationId, //Long
	messageTag, //String
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| from | String | sender username; if null, the current user is used and its email address is resolved automatically. | 
| subject | String | email subject stored in the alert log and used for the outgoing email. | 
| message | String | email body content. | 
| destinations | String | comma-separated list of destination usernames whose email addresses will be resolved by the platform. | 
| carbonCopy | String | optional comma-separated CC recipients passed directly to the outgoing email. | 
| blindCarbonCopy | String | optional comma-separated BCC recipients passed directly to the outgoing email. | 
| priority | String | email priority stored in the alert log; if null, the platform default priority is used. | 
| isHtmlContent | boolean | true to send the message body as HTML; false to send it as plain text. | 
| returnReceipt | boolean | true to request a read receipt from recipients. | 
| conversationId | Long | optional conversation identifier used to correlate the email alert with an existing conversation. | 
| messageTag | String | optional tag stored with the generated alert/email log entry. | 
| filesToAttach | String[] | absolute server paths of additional files to attach to the outgoing email. | 


---

## sendAlertEmailWithConversation

Send an ALERT email to the specified destinations. Usernames are required for "from" and "destinations" arguments.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertEmailWithConversation(
	from, //String
	subject, //String
	message, //String
	destinations, //String
	carbonCopy, //String
	blindCarbonCopy, //String
	priority, //String
	isHtmlContent, //boolean
	returnReceipt, //boolean
	conversationId, //Long
	messageTag, //String
	dirId, //Long
	fileName, //String
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| from | String | sender username; if null, the current user is used and its email address is resolved automatically. | 
| subject | String | email subject stored in the alert log and used for the outgoing email. | 
| message | String | email body content. | 
| destinations | String | comma-separated list of destination usernames whose email addresses will be resolved by the platform. | 
| carbonCopy | String | optional comma-separated CC recipients passed directly to the outgoing email. | 
| blindCarbonCopy | String | optional comma-separated BCC recipients passed directly to the outgoing email. | 
| priority | String | email priority stored in the alert log; if null, the platform default priority is used. | 
| isHtmlContent | boolean | true to send the message body as HTML; false to send it as plain text. | 
| returnReceipt | boolean | true to request a read receipt from recipients. | 
| conversationId | Long | optional conversation identifier used to correlate the email alert with an existing conversation. | 
| messageTag | String | optional tag stored with the generated alert/email log entry. | 
| dirId | Long | optional directory identifier where the generated EML message must be saved after sending. | 
| fileName | String | optional file name to use when saving the generated EML into dirId. | 
| filesToAttach | String[] | absolute server paths of additional files to attach to the outgoing email. | 


---

## sendAlertEmailWithEmailAddressesWithConversation

Send an ALERT email to the specified destinations. Email addresses are required for "from" and "destinations" arguments.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertEmailWithEmailAddressesWithConversation(
	fromEmail, //String
	subject, //String
	message, //String
	destinationsEmail, //String
	priority, //String
	isHtmlContent, //boolean
	returnReceipt, //boolean
	conversationId, //Long
	messageTag, //String
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fromEmail | String | sender email address; if null, the current user email is used. | 
| subject | String | email subject stored in the alert log and used for the outgoing email. | 
| message | String | email body content. | 
| destinationsEmail | String | comma-separated list of destination email addresses used directly without username resolution. | 
| priority | String | email priority stored in the alert log; if null, the platform default priority is used. | 
| isHtmlContent | boolean | true to send the message body as HTML; false to send it as plain text. | 
| returnReceipt | boolean | true to request a read receipt from recipients. | 
| conversationId | Long | optional conversation identifier used to correlate the email alert with an existing conversation. | 
| messageTag | String | optional tag stored with the generated alert/email log entry. | 
| filesToAttach | String[] | absolute server paths of additional files to attach to the outgoing email. | 


---

## sendAlertEmailWithEmailAddressesWithConversation

Send an ALERT email to the specified destinations. Email addresses are required for "from" and "destinations" arguments.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertEmailWithEmailAddressesWithConversation(
	fromEmail, //String
	subject, //String
	message, //String
	destinationsEmail, //String
	carbonCopy, //String
	blindCarbonCopy, //String
	priority, //String
	isHtmlContent, //boolean
	returnReceipt, //boolean
	conversationId, //Long
	messageTag, //String
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fromEmail | String | sender email address; if null, the current user email is used. | 
| subject | String | email subject stored in the alert log and used for the outgoing email. | 
| message | String | email body content. | 
| destinationsEmail | String | comma-separated list of destination email addresses used directly without username resolution. | 
| carbonCopy | String | optional comma-separated CC recipients passed directly to the outgoing email. | 
| blindCarbonCopy | String | optional comma-separated BCC recipients passed directly to the outgoing email. | 
| priority | String | email priority stored in the alert log; if null, the platform default priority is used. | 
| isHtmlContent | boolean | true to send the message body as HTML; false to send it as plain text. | 
| returnReceipt | boolean | true to request a read receipt from recipients. | 
| conversationId | Long | optional conversation identifier used to correlate the email alert with an existing conversation. | 
| messageTag | String | optional tag stored with the generated alert/email log entry. | 
| filesToAttach | String[] | absolute server paths of additional files to attach to the outgoing email. | 


---

## sendAlertEmailWithEmailAddresses

Send an ALERT email to the specified destinations. Email addresses are required for "from" and "destinations" arguments.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertEmailWithEmailAddresses(
	fromEmail, //String
	subject, //String
	message, //String
	destinationsEmail, //String
	priority, //String
	isHtmlContent, //boolean
	returnReceipt, //boolean
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| fromEmail | String | sender email address; if null, the current user email is used. | 
| subject | String | email subject stored in the alert log and used for the outgoing email. | 
| message | String | email body content. | 
| destinationsEmail | String | comma-separated list of destination email addresses used directly without username resolution. | 
| priority | String | email priority stored in the alert log; if null, the platform default priority is used. | 
| isHtmlContent | boolean | true to send the message body as HTML; false to send it as plain text. | 
| returnReceipt | boolean | true to request a read receipt from recipients. | 
| filesToAttach | String[] | absolute server paths of additional files to attach to the outgoing email. | 


---

## sendAlertEmail

Send an ALERT email to the specified destinations. Usernames are required for "from" and "destinations" arguments.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertEmail(
	from, //String
	subject, //String
	message, //String
	destinations, //String
	priority, //String
	isHtmlContent, //boolean
	returnReceipt, //boolean
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| from | String | sender username; if null, the current user is used and its email address is resolved automatically. | 
| subject | String | email subject stored in the alert log and used for the outgoing email. | 
| message | String | email body content. | 
| destinations | String | comma-separated list of destination usernames whose email addresses will be resolved by the platform. | 
| priority | String | email priority stored in the alert log; if null, the platform default priority is used. | 
| isHtmlContent | boolean | true to send the message body as HTML; false to send it as plain text. | 
| returnReceipt | boolean | true to request a read receipt from recipients. | 
| filesToAttach | String[] | absolute server paths of additional files to attach to the outgoing email. | 


---

## sendAlertEmail

Send an ALERT email to the specified destinations. Usernames are required for "from" and "destinations" arguments.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertEmail(
	from, //String
	subject, //String
	message, //String
	destinations, //String
	carbonCopy, //String
	blindCarbonCopy, //String
	priority, //String
	isHtmlContent, //boolean
	returnReceipt, //boolean
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| from | String | sender username; if null, the current user is used and its email address is resolved automatically. | 
| subject | String | email subject stored in the alert log and used for the outgoing email. | 
| message | String | email body content. | 
| destinations | String | comma-separated list of destination usernames whose email addresses will be resolved by the platform. | 
| carbonCopy | String | optional comma-separated CC recipients passed directly to the outgoing email. | 
| blindCarbonCopy | String | optional comma-separated BCC recipients passed directly to the outgoing email. | 
| priority | String | email priority stored in the alert log; if null, the platform default priority is used. | 
| isHtmlContent | boolean | true to send the message body as HTML; false to send it as plain text. | 
| returnReceipt | boolean | true to request a read receipt from recipients. | 
| filesToAttach | String[] | absolute server paths of additional files to attach to the outgoing email. | 


---

## sendAlertMessage

Sends an ALERT message to the specified destinations. This is a convenience overload that delegates to `String, String, String, Long, String)` with no conversationId and no messageTag.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertMessage(
	from, //String
	message, //String
	siteId, //Long
	destination, //String
	priority, //String
	conversationId, //Long
	messageTag //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| from | String | sender username; if `null`, the current user's username is used | 
| message | String | the message content to send | 
| siteId | Long | target site identifier used to route the alert within a specific site context. | 
| destination | String | destination username that must receive the alert inside the specified site. | 
| priority | String | message priority; if `null`, normal priority is used | 
| conversationId | Long | optional conversation identifier used to group the alert inside an existing thread. | 
| messageTag | String | optional tag stored with the alert for later conversation lookups or client-side routing. | 

> ✅ **Returns**
>
> `true` if the message was sent successfully


---

## sendAlertMessage

Sends an ALERT message to the specified destinations. This is a convenience overload that delegates to `String, String, String, Long, String)` with no conversationId and no messageTag.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertMessage(
	from, //String
	message, //String
	destinations, //String
	priority, //String
	conversationId, //Long
	messageTag //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| from | String | sender username; if `null`, the current user's username is used | 
| message | String | the message content to send | 
| destinations | String | comma-separated list of destination usernames | 
| priority | String | message priority; if `null`, normal priority is used | 
| conversationId | Long | optional conversation identifier used to group the alert inside an existing thread. | 
| messageTag | String | optional tag stored with the alert for later conversation lookups or client-side routing. | 

> ✅ **Returns**
>
> `true` if the message was sent successfully


---

## sendAlertMessage

Sends an ALERT message to the specified destinations. This is a convenience overload that delegates to `String, String, String, Long, String)` with no conversationId and no messageTag.

Syntax
```javascript
//return boolean type
var risp = utils.sendAlertMessage(
	from, //String
	message, //String
	destinations, //String
	priority //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| from | String | sender username; if `null`, the current user's username is used | 
| message | String | the message content to send | 
| destinations | String | comma-separated list of destination usernames | 
| priority | String | message priority; if `null`, normal priority is used | 

> ✅ **Returns**
>
> `true` if the message was sent successfully


---

## sendChatMessage

Send a CHAT message to the specified destinations.

Syntax
```javascript
//return boolean type
var risp = utils.sendChatMessage(
	from, //String
	message, //String
	destinations, //String
	priority, //String
	conversationId, //Long
	messageTag //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| from | String | sender username; if null, the current logged user is used. | 
| message | String | message text/body to send through the collaboration log channel. | 
| destinations | String | comma-separated list of destination usernames. | 
| priority | String | message priority; if null, the platform normal priority is used. | 
| conversationId | Long | optional conversation identifier used to group the message inside an existing thread. | 
| messageTag | String | optional tag stored with the message for later conversation lookups or client-side routing. | 


---

## sendChatMessage

Send a CHAT message to the specified destinations.

Syntax
```javascript
//return boolean type
var risp = utils.sendChatMessage(
	from, //String
	message, //String
	destinations, //String
	priority //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| from | String | sender username; if null, the current logged user is used. | 
| message | String | message text/body to send through the collaboration log channel. | 
| destinations | String | comma-separated list of destination usernames. | 
| priority | String | message priority; if null, the platform normal priority is used. | 


---

## sendEmailWithMessageTemplateWithSettings

Send an email to the specified destinations, starting from the specified template. When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax
```javascript
//return boolean type
var risp = utils.sendEmailWithMessageTemplateWithSettings(
	subject, //String
	messageTemplate, //String
	jsObj, //Map
	from, //String
	to, //String
	cc, //String
	bcc, //String
	priority, //String
	isHtmlContent, //Boolean
	returnReceipt, //Boolean
	smtpHost, //String
	smtpPort, //String
	protocol, //String
	smtpUsername, //String
	smtpPassword, //String
	useTLS, //String
	zipFiles, //Boolean
	additionalSettings, //Map
	dirId, //Long
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| subject | String | email subject used together with the message template. | 
| messageTemplate | String | email body template; variables expressed as :NAME are replaced using values from jsObj/vars before sending. | 
| jsObj | Map | map of template variables used for :PLACEHOLDER replacement; top-level entries become variables with the same name, nested maps become dotted variables such as parent.child, and PRINT_VARS="Y" enables variable logging before sending. | 
| from | String | sender email address to use when sending the message. | 
| to | String | comma-separated destination email addresses. | 
| cc | String | comma-separated carbon-copy email addresses. | 
| bcc | String | comma-separated blind-carbon-copy email addresses. | 
| priority | String | email priority to associate with the generated alert/log entry. | 
| isHtmlContent | Boolean | true to send the resolved template body as HTML; false for plain text. | 
| returnReceipt | Boolean | true to request a read receipt from recipients. | 
| smtpHost | String | SMTP server host used to send the email. | 
| smtpPort | String | SMTP server port; if empty, the mail subsystem default is used. | 
| protocol | String | mail transport protocol, typically smtp or smtps. | 
| smtpUsername | String | SMTP username used for authenticated mail sessions; can be null for anonymous delivery. | 
| smtpPassword | String | SMTP password paired with smtpUsername. | 
| useTLS | String | TLS mode flag passed to the mail sender: E enables STARTTLS, F forces it, any other value leaves it disabled. | 
| zipFiles | Boolean | true to compress attachments into a single ZIP before sending. | 
| additionalSettings | Map | can be null; if specified, it contains additional settings helpful for additional tasks. Content of additionalSettings: \{ elmDirId = elmFileName: "filename.elm" \} | 
| dirId | Long | optional platform directory identifier used to resolve attachment names from filesToAttach. | 
| filesToAttach | String[] | attachment names/paths to send; when dirId is provided they are read from that directory, otherwise they are treated as absolute paths. | 


---

## sendEmailWithMessageTemplate

Send an email to the specified destinations, starting from the specified template. When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax
```javascript
//return boolean type
var risp = utils.sendEmailWithMessageTemplate(
	subject, //String
	messageTemplate, //String
	jsObj, //Map
	from, //String
	to, //String
	cc, //String
	bcc, //String
	priority, //String
	isHtmlContent, //Boolean
	returnReceipt, //Boolean
	smtpHost, //String
	smtpPort, //String
	protocol, //String
	smtpUsername, //String
	smtpPassword, //String
	useTLS, //String
	zipFiles, //Boolean
	dirId, //Long
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| subject | String | email subject used together with the message template. | 
| messageTemplate | String | email body template; variables expressed as :NAME are replaced using values from jsObj/vars before sending. | 
| jsObj | Map | map of template variables used for :PLACEHOLDER replacement; top-level entries become variables with the same name, nested maps become dotted variables such as parent.child, and PRINT_VARS="Y" enables variable logging before sending. | 
| from | String | sender email address to use when sending the message. | 
| to | String | comma-separated destination email addresses. | 
| cc | String | comma-separated carbon-copy email addresses. | 
| bcc | String | comma-separated blind-carbon-copy email addresses. | 
| priority | String | email priority to associate with the generated alert/log entry. | 
| isHtmlContent | Boolean | true to send the resolved template body as HTML; false for plain text. | 
| returnReceipt | Boolean | true to request a read receipt from recipients. | 
| smtpHost | String | SMTP server host used to send the email. | 
| smtpPort | String | SMTP server port; if empty, the mail subsystem default is used. | 
| protocol | String | mail transport protocol, typically smtp or smtps. | 
| smtpUsername | String | SMTP username used for authenticated mail sessions; can be null for anonymous delivery. | 
| smtpPassword | String | SMTP password paired with smtpUsername. | 
| useTLS | String | TLS mode flag passed to the mail sender: E enables STARTTLS, F forces it, any other value leaves it disabled. | 
| zipFiles | Boolean | true to compress attachments into a single ZIP before sending. | 
| dirId | Long | optional platform directory identifier used to resolve attachment names from filesToAttach. | 
| filesToAttach | String[] | attachment names/paths to send; when dirId is provided they are read from that directory, otherwise they are treated as absolute paths. | 


---

## sendEmailWithSMTPSettings

Send an email.

Syntax
```javascript
utils.sendEmailWithSMTPSettings(
	from, //String
	to, //String
	cc, //String
	bcc, //String
	subject, //String
	body, //String
	isHtmlContent, //Boolean
	returnReceipt, //Boolean
	zipFiles, //Boolean
	deleteFilesAfterSending, //Boolean
	smtpHost, //String
	smtpPort, //String
	protocol, //String
	smtpUsername, //String
	smtpPassword, //String
	useTLS, //String
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| from | String | (optional, can be null) a string representing the email address to use as the "from address" to send the email | 
| to | String | a string composed of one or more email addresses, separated by a comma (,) | 
| cc | String | (carbon copy addresses) a string composed of one or more email addresses, separated by a comma (,) | 
| bcc | String | (hidden addresses) a string composed of one or more email addresses, separated by a comma (,) | 
| subject | String | a string representing the email title | 
| body | String | the email body content | 
| isHtmlContent | Boolean | a boolean flag used to define if the body content is in HTML format or not | 
| returnReceipt | Boolean | a boolean flag used to request a return receipt to the destinators | 
| zipFiles | Boolean | a boolean flag used to compress all files to attach in a unique zip file and send it, in order to reduce the email size | 
| deleteFilesAfterSending | Boolean | a boolean flag used to optionally delete files to attach, after sending the email | 
| smtpHost | String | SMTP server host used to send the email. | 
| smtpPort | String | SMTP server port; if empty, the mail subsystem default is used. | 
| protocol | String | mail transport protocol, typically smtp or smtps. | 
| smtpUsername | String | SMTP username used for authenticated mail sessions; can be null for anonymous delivery. | 
| smtpPassword | String | SMTP password paired with smtpUsername. | 
| useTLS | String | TLS mode flag passed to the mail sender: E enables STARTTLS, F forces it, any other value leaves it disabled. | 
| filesToAttach | String[] | a list of files to attach, separated by a comma; use [] to not include files; each file must include the absolute path | 

> ⚠️ **Throws**
>
> - `Throwable` in case of errors when sending the email (e.g. attachment file not found)


---

## sendEmailWithSMTPSettings

Send an email.

Syntax
```javascript
utils.sendEmailWithSMTPSettings(
	from, //String
	to, //String
	cc, //String
	bcc, //String
	subject, //String
	body, //String
	isHtmlContent, //Boolean
	returnReceipt, //Boolean
	zipFiles, //Boolean
	deleteFilesAfterSending, //Boolean
	smtpHost, //String
	smtpPort, //String
	protocol, //String
	smtpUsername, //String
	smtpPassword, //String
	useTLS, //String
	dirId, //Long
	fileName, //String
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| from | String | (optional, can be null) a string representing the email address to use as the "from address" to send the email | 
| to | String | a string composed of one or more email addresses, separated by a comma (,) | 
| cc | String | (carbon copy addresses) a string composed of one or more email addresses, separated by a comma (,) | 
| bcc | String | (hidden addresses) a string composed of one or more email addresses, separated by a comma (,) | 
| subject | String | a string representing the email title | 
| body | String | the email body content | 
| isHtmlContent | Boolean | a boolean flag used to define if the body content is in HTML format or not | 
| returnReceipt | Boolean | a boolean flag used to request a return receipt to the destinators | 
| zipFiles | Boolean | a boolean flag used to compress all files to attach in a unique zip file and send it, in order to reduce the email size | 
| deleteFilesAfterSending | Boolean | a boolean flag used to optionally delete files to attach, after sending the email | 
| smtpHost | String | SMTP server host used to send the email. | 
| smtpPort | String | SMTP server port; if empty, the mail subsystem default is used. | 
| protocol | String | mail transport protocol, typically smtp or smtps. | 
| smtpUsername | String | SMTP username used for authenticated mail sessions; can be null for anonymous delivery. | 
| smtpPassword | String | SMTP password paired with smtpUsername. | 
| useTLS | String | TLS mode flag passed to the mail sender: E enables STARTTLS, F forces it, any other value leaves it disabled. | 
| dirId | Long | optional directory identifier where the generated EML message must be saved after sending. | 
| fileName | String | optional file name to use when saving the generated EML into dirId. | 
| filesToAttach | String[] | a list of files to attach, separated by a comma; use [] to not include files; each file must include the absolute path | 

> ⚠️ **Throws**
>
> - `Throwable` in case of errors when sending the email (e.g. attachment file not found)


---

## sendEmailWithSettings

Send an email, by using the specified SMTP server and settings.

Syntax
```javascript
utils.sendEmailWithSettings(
	smtpHost, //String
	smtpPort, //String
	useTLS, //String
	protocol, //String
	smtpUsername, //String
	smtpPassword, //String
	from, //String
	to, //String
	cc, //String
	bcc, //String
	subject, //String
	body, //String
	isHtmlContent, //Boolean
	returnReceipt, //Boolean
	zipFiles, //Boolean
	deleteFilesAfterSending, //Boolean
	settings, //HashMap
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| smtpHost | String | SMTP host | 
| smtpPort | String | SMTP port | 
| useTLS | String | TLS mode flag passed to the mail sender: E enables STARTTLS, F forces it, any other value leaves it disabled. | 
| protocol | String | SMTP/SMTPS | 
| smtpUsername | String | SMTP username | 
| smtpPassword | String | SMTP password | 
| from | String | (optional, can be null) a string representing the email address to use as the "from address" to send the email | 
| to | String | a string composed of one or more email addresses, separated by a comma (,) | 
| cc | String | (carbon copy addresses) a string composed of one or more email addresses, separated by a comma (,) | 
| bcc | String | (hidden addresses) a string composed of one or more email addresses, separated by a comma (,) | 
| subject | String | a string representing the email title | 
| body | String | the email body content | 
| isHtmlContent | Boolean | a boolean flag used to define if the body content is in HTML format or not | 
| returnReceipt | Boolean | a boolean flag used to request a return receipt to the destinators | 
| zipFiles | Boolean | a boolean flag used to compress all files to attach in a unique zip file and send it, in order to reduce the email size | 
| deleteFilesAfterSending | Boolean | a boolean flag used to optionally delete files to attach, after sending the email | 
| settings | HashMap | optional additional JavaMail properties merged into the SMTP session before sending; keys and values must match JavaMail property names such as mail.smtp.ssl.trust or mail.smtp.starttls.required. | 
| filesToAttach | String[] | a list of files to attach, separated by a comma; use [] to not include files; each file must include the absolute path | 

> ⚠️ **Throws**
>
> - `Throwable` in case of errors when sending the email (e.g. attachment file not found) @parram useTLS flag Y/N used to define weather TLS must be used


---

## sendEmailWithTemplate

Send an email to the specified destinations, starting from the specified template. When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax
```javascript
//return boolean type
var risp = utils.sendEmailWithTemplate(
	subject, //String
	templateId, //Long
	jsObj, //Map
	from, //String
	to, //String
	cc, //String
	bcc, //String
	priority, //String
	isHtmlContent, //Boolean
	returnReceipt, //Boolean
	zipFiles, //Boolean
	dirId, //Long
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| subject | String | default email subject to use before applying template overrides; it can be replaced by the template subject defined in CON52. | 
| templateId | Long | identifier of the CON52 email template/button configuration from which subject, body, sender, recipients, and receipt options are loaded. | 
| jsObj | Map | map of template variables used for :PLACEHOLDER replacement; top-level entries become variables with the same name, nested maps become dotted variables such as parent.child, and PRINT_VARS="Y" enables variable logging before sending. | 
| from | String | default sender email address; it can be overridden by the template definition. | 
| to | String | default comma-separated recipient email addresses; it can be overridden by the template definition. | 
| cc | String | default comma-separated carbon-copy email addresses; it can be overridden by the template definition. | 
| bcc | String | default comma-separated blind-carbon-copy email addresses; it can be overridden by the template definition. | 
| priority | String | email priority to store in the alert log entry; if null, the platform default priority is used. | 
| isHtmlContent | Boolean | true to send the resolved template body as HTML; false to send it as plain text. | 
| returnReceipt | Boolean | default read-receipt flag; it can be overridden by the template setting. | 
| zipFiles | Boolean | true to compress the attachments into a single ZIP before sending. | 
| dirId | Long | optional platform directory identifier used to resolve attachment names from filesToAttach. | 
| filesToAttach | String[] | attachment names/paths to include in the email; when dirId is set they are treated as file names inside that platform directory, otherwise they are interpreted as absolute server paths. | 


---

## sendEmail

Send an email.

Syntax
```javascript
//return Message type
var risp = utils.sendEmail(
	from, //String
	to, //String
	cc, //String
	bcc, //String
	subject, //String
	body, //String
	isHtmlContent, //Boolean
	returnReceipt, //Boolean
	zipFiles, //Boolean
	deleteFilesAfterSending, //Boolean
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| from | String | (optional, can be null) a string representing the email address to use as the "from address" to send the email | 
| to | String | a string composed of one or more email addresses, separated by a comma (,) | 
| cc | String | (carbon copy addresses) a string composed of one or more email addresses, separated by a comma (,) | 
| bcc | String | (hidden addresses) a string composed of one or more email addresses, separated by a comma (,) | 
| subject | String | a string representing the email title | 
| body | String | the email body content | 
| isHtmlContent | Boolean | a boolean flag used to define if the body content is in HTML format or not | 
| returnReceipt | Boolean | a boolean flag used to request a return receipt to the destinators | 
| zipFiles | Boolean | a boolean flag used to compress all files to attach in a unique zip file and send it, in order to reduce the email size | 
| deleteFilesAfterSending | Boolean | a boolean flag used to optionally delete files to attach, after sending the email | 
| filesToAttach | String[] | a list of files to attach, separated by a comma; use [] to not include files; each file must include the absolute path | 

> ⚠️ **Throws**
>
> - `Throwable` in case of errors when sending the email (e.g. attachment file not found)


---

## sendEmail

Send an email.

Syntax
```javascript
//return Message type
var risp = utils.sendEmail(
	from, //String
	to, //String
	cc, //String
	bcc, //String
	subject, //String
	body, //String
	isHtmlContent, //Boolean
	returnReceipt, //Boolean
	zipFiles, //Boolean
	deleteFilesAfterSending, //Boolean
	dirId, //Long
	fileName, //String
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| from | String | (optional, can be null) a string representing the email address to use as the "from address" to send the email | 
| to | String | a string composed of one or more email addresses, separated by a comma (,) | 
| cc | String | (carbon copy addresses) a string composed of one or more email addresses, separated by a comma (,) | 
| bcc | String | (hidden addresses) a string composed of one or more email addresses, separated by a comma (,) | 
| subject | String | a string representing the email title | 
| body | String | the email body content | 
| isHtmlContent | Boolean | a boolean flag used to define if the body content is in HTML format or not | 
| returnReceipt | Boolean | a boolean flag used to request a return receipt to the destinators | 
| zipFiles | Boolean | a boolean flag used to compress all files to attach in a unique zip file and send it, in order to reduce the email size | 
| deleteFilesAfterSending | Boolean | a boolean flag used to optionally delete files to attach, after sending the email | 
| dirId | Long | optional directory identifier where the generated EML message must be saved after sending; use null to skip EML persistence. | 
| fileName | String | optional file name to use when saving the generated EML into dirId; ignored when dirId is null or empty. | 
| filesToAttach | String[] | a list of files to attach, separated by a comma; use [] to not include files; each file must include the absolute path | 

> ⚠️ **Throws**
>
> - `Throwable` in case of errors when sending the email (e.g. attachment file not found)


---

## sendEmail

Send an email.

Syntax
```javascript
utils.sendEmail(
	smtpHost, //String
	smtpPort, //String
	useTLS, //String
	protocol, //String
	smtpUsername, //String
	smtpPassword, //String
	from, //String
	to, //String
	cc, //String
	bcc, //String
	subject, //String
	body, //String
	isHtmlContent, //Boolean
	returnReceipt, //Boolean
	zipFiles, //Boolean
	deleteFilesAfterSending, //Boolean
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| smtpHost | String | SMTP host | 
| smtpPort | String | SMTP port | 
| useTLS | String | TLS mode flag passed to the mail sender: E enables STARTTLS, F forces it, any other value leaves it disabled. | 
| protocol | String | SMTP/SMTPS | 
| smtpUsername | String | SMTP username | 
| smtpPassword | String | SMTP password | 
| from | String | (optional, can be null) a string representing the email address to use as the "from address" to send the email | 
| to | String | a string composed of one or more email addresses, separated by a comma (,) | 
| cc | String | (carbon copy addresses) a string composed of one or more email addresses, separated by a comma (,) | 
| bcc | String | (hidden addresses) a string composed of one or more email addresses, separated by a comma (,) | 
| subject | String | a string representing the email title | 
| body | String | the email body content | 
| isHtmlContent | Boolean | a boolean flag used to define if the body content is in HTML format or not | 
| returnReceipt | Boolean | a boolean flag used to request a return receipt to the destinators | 
| zipFiles | Boolean | a boolean flag used to compress all files to attach in a unique zip file and send it, in order to reduce the email size | 
| deleteFilesAfterSending | Boolean | a boolean flag used to optionally delete files to attach, after sending the email | 
| filesToAttach | String[] | a list of files to attach, separated by a comma; use [] to not include files; each file must include the absolute path | 

> ⚠️ **Throws**
>
> - `Throwable` in case of errors when sending the email (e.g. attachment file not found)


---

## sendFile [Deprecated]

Send a single file to the FTP server and store it in the specified folder with the specified name.

Syntax
```javascript
//return boolean type
var risp = utils.sendFile(
	host, //String
	port, //Integer
	useSSL, //Boolean
	username, //String
	password, //String
	destFile, //String
	directoryId, //Long
	fileName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| host | String | FTP server host | 
| port | Integer | FTP server port | 
| useSSL | Boolean | flag used to open a secure connection with the FTP server | 
| username | String | username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| password | String | password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| destFile | String | folder in the FTP server + destination file name where storing the file | 
| directoryId | Long | directory id directory identifier, used to define the absolute path, in the central server, where the file will be stored; if null, there must be one only entry for this application | 
| fileName | String | file name; it can includes a subpath to append to the base path specified through directoryId | 

> ✅ **Returns**
>
> `true` if the file has been stored within the FTP server correctly


---

## sendFile [Deprecated]

Send a single file to the FTP server and store it in the specified folder with the specified name.

Syntax
```javascript
//return boolean type
var risp = utils.sendFile(
	host, //String
	port, //Integer
	useSSL, //Boolean
	username, //String
	password, //String
	destFile, //String
	sourceFile //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| host | String | FTP server host | 
| port | Integer | FTP server port | 
| useSSL | Boolean | flag used to open a secure connection with the FTP server | 
| username | String | username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| password | String | password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| destFile | String | folder in the FTP server + destination file name where storing the file | 
| sourceFile | String | absolute path in the server file system + file name, related to the file to read | 

> ✅ **Returns**
>
> `true` if the file has been stored within the FTP server correctly


---

## sendFile

Send a single file to the FTP server and store it in the specified folder with the specified name.

Syntax
```javascript
//return boolean type
var risp = utils.sendFile(
	protocol, //String
	host, //String
	port, //Integer
	useSSL, //Boolean
	username, //String
	password, //String
	destFile, //String
	directoryId, //Long
	fileName, //String
	sessionTimeout //Integer
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| protocol | String | the FTP protocol type (e.g. "FTP", "FTPS", "SFTP") | 
| host | String | FTP server host | 
| port | Integer | FTP server port | 
| useSSL | Boolean | flag used to open a secure connection with the FTP server | 
| username | String | username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| password | String | password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| destFile | String | folder in the FTP server + destination file name where storing the file | 
| directoryId | Long | directory id directory identifier, used to define the absolute path, in the central server, where the file will be stored; if null, there must be one only entry for this application | 
| fileName | String | file name; it can includes a subpath to append to the base path specified through directoryId | 
| sessionTimeout | Integer | seconds of timeout for the FTP session (nullable) | 

> ✅ **Returns**
>
> `true` if the file has been stored within the FTP server correctly


---

## sendFile

Send a single file to the FTP server and store it in the specified folder with the specified name.

Syntax
```javascript
//return boolean type
var risp = utils.sendFile(
	protocol, //String
	host, //String
	port, //Integer
	useSSL, //Boolean
	username, //String
	password, //String
	destFile, //String
	directoryId, //Long
	fileName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| protocol | String | the FTP protocol type (e.g. "FTP", "FTPS", "SFTP") | 
| host | String | FTP server host | 
| port | Integer | FTP server port | 
| useSSL | Boolean | flag used to open a secure connection with the FTP server | 
| username | String | username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| password | String | password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| destFile | String | folder in the FTP server + destination file name where storing the file | 
| directoryId | Long | directory id directory identifier, used to define the absolute path, in the central server, where the file will be stored; if null, there must be one only entry for this application | 
| fileName | String | file name; it can includes a subpath to append to the base path specified through directoryId | 

> ✅ **Returns**
>
> `true` if the file has been stored within the FTP server correctly


---

## sendFile

Send a single file to the FTP server and store it in the specified folder with the specified name.

Syntax
```javascript
//return boolean type
var risp = utils.sendFile(
	protocol, //String
	host, //String
	port, //Integer
	useSSL, //Boolean
	username, //String
	password, //String
	destFile, //String
	sourceFile, //String
	sessionTimeout //Integer
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| protocol | String | the FTP protocol type (e.g. "FTP", "FTPS", "SFTP") | 
| host | String | FTP server host | 
| port | Integer | FTP server port | 
| useSSL | Boolean | flag used to open a secure connection with the FTP server | 
| username | String | username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| password | String | password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| destFile | String | folder in the FTP server + destination file name where storing the file | 
| sourceFile | String | absolute path in the server file system + file name, related to the file to read | 
| sessionTimeout | Integer | seconds of timeout for the FTP session (nullable) | 

> ✅ **Returns**
>
> `true` if the file has been stored within the FTP server correctly


---

## sendFile

Send a single file to the FTP server and store it in the specified folder with the specified name.

Syntax
```javascript
//return boolean type
var risp = utils.sendFile(
	protocol, //String
	host, //String
	port, //Integer
	useSSL, //Boolean
	username, //String
	password, //String
	destFile, //String
	sourceFile //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| protocol | String | the FTP protocol type (e.g. "FTP", "FTPS", "SFTP") | 
| host | String | FTP server host | 
| port | Integer | FTP server port | 
| useSSL | Boolean | flag used to open a secure connection with the FTP server | 
| username | String | username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| password | String | password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| destFile | String | folder in the FTP server + destination file name where storing the file | 
| sourceFile | String | absolute path in the server file system + file name, related to the file to read | 

> ✅ **Returns**
>
> `true` if the file has been stored within the FTP server correctly


---

## sendFiles [Deprecated]

Send one or more files to the FTP server and store them in the specified folder.

Syntax
```javascript
//return boolean type
var risp = utils.sendFiles(
	host, //String
	port, //Integer
	useSSL, //Boolean
	username, //String
	password, //String
	toDir, //String
	filePaths //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| host | String | FTP server host | 
| port | Integer | FTP server port | 
| useSSL | Boolean | flag used to open a secure connection with the FTP server | 
| username | String | username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| password | String | password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| toDir | String | folder in the FTP server where storing the file | 
| filePaths | String[] | list of absolute paths in the server file system + file names | 

> ✅ **Returns**
>
> `true` if the file has been stored within the FTP server correctly


---

## sendFiles

Send one or more files to the FTP server and store them in the specified folder.

Syntax
```javascript
//return boolean type
var risp = utils.sendFiles(
	protocol, //String
	host, //String
	port, //Integer
	useSSL, //Boolean
	username, //String
	password, //String
	toDir, //String
	filePaths //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| protocol | String | FTP protocol type to use for the connection, for example FTP, FTPS, or SFTP. | 
| host | String | FTP server host | 
| port | Integer | FTP server port | 
| useSSL | Boolean | flag used to open a secure connection with the FTP server | 
| username | String | username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| password | String | password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| toDir | String | folder in the FTP server where storing the file | 
| filePaths | String[] | list of absolute paths in the server file system + file names | 

> ✅ **Returns**
>
> `true` if the file has been stored within the FTP server correctly


---

## sendFiles

Send one or more files to the FTP server and store them in the specified folder.

Syntax
```javascript
//return boolean type
var risp = utils.sendFiles(
	protocol, //String
	host, //String
	port, //Integer
	useSSL, //Boolean
	username, //String
	password, //String
	toDir, //String
	sessionTimeout, //Integer
	filePaths //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| protocol | String | FTP protocol type to use for the connection, for example FTP, FTPS, or SFTP. | 
| host | String | FTP server host | 
| port | Integer | FTP server port | 
| useSSL | Boolean | flag used to open a secure connection with the FTP server | 
| username | String | username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| password | String | password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) | 
| toDir | String | folder in the FTP server where storing the file | 
| sessionTimeout | Integer | seconds of timeout session | 
| filePaths | String[] | list of absolute paths in the server file system + file names | 

> ✅ **Returns**
>
> `true` if the file has been stored within the FTP server correctly


---

## sendGmail

Send an email using GMail APIs.

Syntax
```javascript
//return EmailMessage type
var risp = utils.sendGmail(
	from, //String
	to, //String
	cc, //String
	bcc, //String
	subject, //String
	body, //String
	isHtmlContent, //Boolean
	returnReceipt, //Boolean
	zipFiles, //Boolean
	deleteFilesAfterSending, //Boolean
	filesToAttach //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| from | String | (optional, can be null) a string representing the email address to use as the "from address" to send the email | 
| to | String | a string composed of one or more email addresses, separated by a comma (,) | 
| cc | String | (carbon copy addresses) a string composed of one or more email addresses, separated by a comma (,) | 
| bcc | String | (hidden addresses) a string composed of one or more email addresses, separated by a comma (,) | 
| subject | String | a string representing the email title | 
| body | String | the email body content | 
| isHtmlContent | Boolean | a boolean flag used to define if the body content is in HTML format or not | 
| returnReceipt | Boolean | a boolean flag used to request a return receipt to the destinators | 
| zipFiles | Boolean | a boolean flag used to compress all files to attach in a unique zip file and send it, in order to reduce the email size | 
| deleteFilesAfterSending | Boolean | a boolean flag used to optionally delete files to attach, after sending the email | 
| filesToAttach | String[] | a list of files to attach, separated by a comma; use [] to not include files; each file must include the absolute path | 

> ⚠️ **Throws**
>
> - `Throwable` in case of errors when sending the email (e.g. attachment file not found)


---

## sendJavascriptMessage

Send a JavaScript message to the specified destinations, which will be forwarded to a client-side JavaScript callback function. The message is delivered via the platform's alert/notification system.

Syntax
```javascript
//return boolean type
var risp = utils.sendJavascriptMessage(
	from, //String
	obj, //Map
	siteId, //Long
	destination, //String
	functionName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| from | String | username of the sender (optional: can be null, defaults to the current user) | 
| obj | Map | a Map<String, Object> representing the JavaScript object to send as the message payload. Keys and values are arbitrary and application-specific — they are serialized to JSON and passed to the client-side callback function. Can be null (empty message body) | 
| siteId | Long | the site ID to target for message delivery | 
| destination | String | the destination username | 
| functionName | String | the client-side JavaScript function name that will be invoked on the recipients' browser with the deserialized message object as argument | 

> ✅ **Returns**
>
> always returns true (message is enqueued regardless of delivery success)


---

## sendJavascriptMessage

Send a JavaScript message to the specified destinations, which will be forwarded to a client-side JavaScript callback function. The message is delivered via the platform's alert/notification system.

Syntax
```javascript
//return boolean type
var risp = utils.sendJavascriptMessage(
	from, //String
	obj, //Map
	destinations, //String
	functionName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| from | String | username of the sender (optional: can be null, defaults to the current user) | 
| obj | Map | a Map<String, Object> representing the JavaScript object to send as the message payload. Keys and values are arbitrary and application-specific — they are serialized to JSON and passed to the client-side callback function. Can be null (empty message body) | 
| destinations | String | comma-separated list of destination usernames | 
| functionName | String | the client-side JavaScript function name that will be invoked on the recipients' browser with the deserialized message object as argument | 

> ✅ **Returns**
>
> always returns true (message is enqueued regardless of delivery success)


---

## setApplicationId

Overrides the application ID in the current user session. For security reasons, this operation is only allowed when the current application is "DESIGNER" (i.e., the user is a developer in App Designer).

Syntax
```javascript
utils.setApplicationId(
	appId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| appId | String | the new application ID to set | 


---

## setAttributeValue

Set the value for the specified attribute name, related to the input object.

Syntax
```javascript
utils.setAttributeValue(
	attributeName, //String
	value //Object
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| attributeName | String | attribute name contained in the input object | 
| value | Object | value to set | 


---

## setCompanyId

Set company id to use in UserInfo. The companyId setting is allowed ONLY IF the current companyId value is undefined, as in case of an action invoked by a queue.

Syntax
```javascript
utils.setCompanyId(
	companyId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| companyId | String |  | 


---

## setContentType

Sets the content type for the HTTP response of the current web service call.

Syntax
```javascript
utils.setContentType(
	contentType //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| contentType | String | the MIME content type (e.g. "application/json", "text/xml") | 


---

## setContextValue

Set a variabile in the js context.

Syntax
```javascript
utils.setContextValue(
	varName, //String
	varValue //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| varName | String | JavaScript context variable name to set; dotted notation can be used to target nested map properties. | 
| varValue | String | string value to assign to the specified JavaScript context variable. | 


---

## setDecodeField

Set the corresponding table.field name for the specified attribute, coming from the grid, included in the filtering/sorting conditions.

Syntax
```javascript
utils.setDecodeField(
	attributeName, //String
	fieldName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| attributeName | String | attribute name to decode | 
| fieldName | String | table.field name to use instead of the attribute | 


---

## setDecodeOperator

Override the default SQL operator used for filtering on the specified attribute in the filtering conditions generated by `getPartialResult` and related methods. Works in conjunction with `String)` and `Boolean)`.

Syntax
```javascript
utils.setDecodeOperator(
	attributeName, //String
	operator //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| attributeName | String | the grid attribute name whose operator should be overridden | 
| operator | String | the SQL operator to use (e.g., "=", "LIKE", ">", "<", "IN", "IS NULL") | 


---

## setDecodeUpperCase

Set whether the filtering condition for the specified attribute should apply UPPER() to the field value, enabling case-insensitive comparisons in the filtering conditions generated by `getPartialResult` and related methods. Works in conjunction with `String)` and `String)`.

Syntax
```javascript
utils.setDecodeUpperCase(
	attributeName, //String
	uppercase //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| attributeName | String | the grid attribute name whose case sensitivity should be configured | 
| uppercase | Boolean | if `true`, applies UPPER() to the field for case-insensitive matching; if `false`, uses the field value as-is | 


---

## setElaborationState

Set the final elaboration state for the linked monitored service.

Syntax
```javascript
utils.setElaborationState(
	elaborationState, //String
	result //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| elaborationState | String | final monitored-service state to persist, for example OK or KO. | 
| result | String | result text/details to store together with the final elaboration state. | 


---

## setHttpResponseCode

Sets the HTTP response code for the current web service response.

Syntax
```javascript
utils.setHttpResponseCode(
	httpResponseCode //int
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| httpResponseCode | int | the HTTP status code (e.g. 200, 404, 500) | 


---

## setImagesInXls

Open an already existing xls file and save an image within a cell, starting from an image from the file system. By and large, a list of images can be saved.

Syntax
```javascript
utils.setImagesInXls(
	dirId, //Long
	srcFileName, //String
	destFileName, //String
	sheetName, //String
	images //Map>
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dirId | Long | path identifier | 
| srcFileName | String | name of the existing source Excel file to read from the specified directory. | 
| destFileName | String | name of the destination Excel file to create/update with the injected images. | 
| sheetName | String | folder inside the spreadsheet | 
| images | Map> | list of objects having the following content: \{ x: 0, y: 0, w: 10, h: 1000, imagePath: "/opt/a.jpg" \} Allowed image formats are: png and jpg | 


---

## setLineToPDFFile

Writes a line of text at an absolute position (x, y) on the current page of an already opened PDF file. Unlike `String, Map)`, this method does not advance a cursor or trigger automatic pagination — it places text exactly where specified. If no page has been added yet, one is created automatically via `addPageToPDFFile`. The Euro sign (€, U+20AC) is automatically converted to its WinAnsi encoding equivalent.

Syntax
```javascript
utils.setLineToPDFFile(
	uuid, //String
	x, //int
	y, //int
	line, //String
	settings //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| uuid | String | the output stream identifier returned by `Long, Map)` | 
| x | int | X coordinate in points (from left to right) | 
| y | int | Y coordinate in points (from bottom to top; 0 is the bottom of the page) | 
| line | String | the text content to write | 
| settings | Map | configuration map for font rendering. Supported keys: _(details below)_ | 

#### `settings`

configuration map for font rendering. Supported keys:
- **"fontName"** (`String`) — font alias (loaded via `String, String)`) or a standard PDF font name (e.g., "Courier", "Helvetica-Bold", "Times-Roman"). If the alias is not found among loaded fonts, it falls back to a standard PDType1Font.
- **"fontSize"** (`Number`) — font size in points (default: 10)

> ⚠️ **Throws**
>
> - `Throwable` if writing to the PDF fails
- `RuntimeException` if the PDF file has not been opened (uuid not found)


---

## setPassword

Overrides the password in the current internal state.

Syntax
```javascript
utils.setPassword(
	pwd //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| pwd | String | the new password to set | 


---

## setReturnValue

Sets the return value to be sent back to the client after the server-side action completes. If the value is a String, it is stored as-is.

Syntax
```javascript
utils.setReturnValue(
	returnValue //Object
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| returnValue | Object | the value to return to the client; can be any object type (String, Map, List, etc.) | 


---

## setSiteId

Overrides the site ID in the current user session. Updates both the `UserInfo` object (via reflection) and the session variable `SITE_ID`.

Syntax
```javascript
utils.setSiteId(
	siteId //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| siteId | Long | the new site ID to set @implNote Uses reflection to invoke `UserInfo.setSiteId(Long)` since the method may not be available at compile time on all UserInfo implementations. | 


---

## setUsername

Overrides the username in the current user session.

Syntax
```javascript
utils.setUsername(
	username //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| username | String | the new username to set | 


---

## setVariable

Set the value for the specified attribute name, related to the input object.

Syntax
```javascript
utils.setVariable(
	attributeName, //String
	value //Object
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| attributeName | String | attribute name contained in the input object | 
| value | Object | value to set | 


---

## sha256

Computes the SHA-256 hash of the given text.

Syntax
```javascript
//return String type
var risp = utils.sha256(
	text //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| text | String | the input string to hash | 

> ✅ **Returns**
>
> the SHA-256 hash as an uppercase hexadecimal string

> ⚠️ **Throws**
>
> - `Exception` in case of hashing errors


---

## startThreadedAction

Enqueue a server-side JavaScript action for asynchronous execution in a separate thread. The action is identified by its ID and will be executed after an optional delay.

Syntax
```javascript
utils.startThreadedAction(
	actionId, //Long
	waitTime, //Long
	args //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| actionId | Long | the platform action ID to execute (must exist in the application's action map) | 
| waitTime | Long | milliseconds to wait before starting the action execution. If greater than 0, the thread sleeps before execution. If less than 0, the action is executed synchronously (in the current thread). If 0 or null, the action starts immediately in a new thread | 
| args | Map | a Map<String, Object> of parameters to pass to the action. These become the "vo" (value object) input parameters available inside the target action. Keys are parameter names, values are the corresponding parameter values. The map is shallow-copied before the thread starts, so modifications after this call do not affect the enqueued action @implNote The action is executed via `WAGExecuteJsBean.processAction` server call in a new thread. The current platform transaction ID is propagated to the spawned action via headers. If waitTime is negative, `Thread.run()` is called instead of `Thread.start()`, causing synchronous execution in the current thread. | 


---

## stringifyForDatabaseField

Convert a javascript object as a JSON string, containing escape characters for each " symbol, soi that it can be saved in a database field and re-read later in a compatible format for JSON.parse(); Example: stringifyForDatabaseField(\{ text: "ABC" \}) -> "\{ \"text\": \"ABC\" \}"

Syntax
```javascript
//return String type
var risp = utils.stringifyForDatabaseField(
	obj //Object
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| obj | Object | javascript object to convert | 


---

## stringify

Serializes any Java object to its JSON string representation using Gson. Supports special floating point values and formats dates as "yyyy-MM-dd HH:mm:ss".

Syntax
```javascript
//return String type
var risp = utils.stringify(
	o //Object
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| o | Object | the object to serialize | 

> ✅ **Returns**
>
> the JSON string representation


---

## suspend

Suspends the execution of the current server-side JavaScript action. The action is put into a suspended state and can be resumed later via `resume`. This overload uses an empty suspending identifier. @throws Throwable if the action cannot be suspended (e.g. business components cannot be suspended) @see #suspend(String)

Syntax
```javascript
utils.suspend();
```

> ⚠️ **Throws**
>
> - `Throwable` if the action cannot be suspended (e.g. business components cannot be suspended)


---

## suspend

Suspends the execution of the current server-side JavaScript action. The action is put into a suspended state and can be resumed later via `resume`. This overload uses an empty suspending identifier. @throws Throwable if the action cannot be suspended (e.g. business components cannot be suspended) @see #suspend(String)

Syntax
```javascript
utils.suspend(
	suspendingId //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| suspendingId | String | an identifier for this suspension, useful for tracking multiple suspended actions | 

> ⚠️ **Throws**
>
> - `Throwable` if the action cannot be suspended (e.g. business components cannot be suspended)


---

## terminateElaborationState

Set the final state for the linked monitored service. Optionally, append a message.

Syntax
```javascript
utils.terminateElaborationState(
	elaborationState, //String
	result, //String
	logType, //String
	logMessage, //String
	messageCode //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| elaborationState | String | final monitored-service state to persist, for example OK or KO. | 
| result | String | result text/details to store together with the final elaboration state. | 
| logType | String | optional log type to append after closing the elaboration, for example INFO, WARN, or ERROR. | 
| logMessage | String | optional log message to append after closing the elaboration. | 
| messageCode | String | optional message code associated with the appended elaboration log entry. | 


---

## textToInt

Parses a string to a Long integer value, trimming leading and trailing whitespace.

Syntax
```javascript
//return Long type
var risp = utils.textToInt(
	text //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| text | String | the string to parse; may be `null` or blank | 

> ✅ **Returns**
>
> the parsed Long value, or `null` if the input is null or blank

> ⚠️ **Throws**
>
> - `Throwable` if the text cannot be parsed as a valid integer (NumberFormatException)


---

## trim

Trim method used by Javascript actions

Syntax
```javascript
//return String type
var risp = utils.trim(
	text //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| text | String | text value to trim; if null, null is returned. | 


---

## uncamel

Convert an attribute name to a database field name representation. Example: fieldName -> FIELD_NAME

Syntax
```javascript
//return String type
var risp = utils.uncamel(
	attributeName //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| attributeName | String | table.fieldname | 

> ✅ **Returns**
>
> representation of the specified attribute name as a database field name


---

## unzip

Extracts a ZIP archive to the specified output directory.

Syntax
```javascript
//return String type
var risp = utils.unzip(
	directoryId, //Long
	zipFile, //String
	directoryIdOut, //Long
	deleteZipFile //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| directoryId | Long | directory identifier where the ZIP file is located | 
| zipFile | String | name of the ZIP file to extract (relative to the directory) | 
| directoryIdOut | Long | directory identifier where the extracted files will be placed | 
| deleteZipFile | Boolean | if `true`, the ZIP file is deleted after extraction | 

> ✅ **Returns**
>
> an error message in case of errors, or an empty string on success

> ⚠️ **Throws**
>
> - `Throwable` in case of I/O errors


---

## updateApplUserParameter

Updates one or more application-level user parameters for a specific user. For each parameter, attempts to fetch the existing record; if not found, creates a new one. Only updates `description` and `note` fields when they are explicitly present in the Map.

Syntax
```javascript
//return ListResponse type
var risp = utils.updateApplUserParameter(
	companyId, //String
	siteId, //Long
	userCodeId, //String
	parameters //Map[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| companyId | String | the company identifier | 
| siteId | Long | the site identifier | 
| userCodeId | String | the user code whose parameters are being updated | 
| parameters | Map[] | an array of Maps, each representing a parameter to update. Expected keys: _(details below)_ | 

#### `parameters`

an array of Maps, each representing a parameter to update. Expected keys:
- `"codeId"` (String) — the parameter code identifier (required, used for lookup)
- `"value"` (String) — the new parameter value (required)
- `"description"` (String) — optional; updates description only if key is present
- `"note"` (String) — optional; updates note only if key is present

> ✅ **Returns**
>
> a `ListResponse` containing the updated `Prm40ApplUserPar` records, or `null` if an error occurs

> ⚠️ **Throws**
>
> - `Throwable` if a server communication error occurs


---

## updateDbTableMetadata

Updates the metadata cache for the specified database table. Forces a refresh of the table's structural metadata (columns, types, constraints) in the platform.

Syntax
```javascript
utils.updateDbTableMetadata(
	dbTableId //Long
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| dbTableId | Long | the database table identifier whose metadata should be refreshed | 

> ⚠️ **Throws**
>
> - `Throwable` if a server communication or database error occurs


---

## updateMappedObject

Execute an UPDATE SQL statement into the specified table, starting from the javascript NEUTRAL object passed as argument, containing many more attributes, not all related to such a table. The right attributes to take into account from the neutral object will be selected using the mapping defined to the specified data model and table name. All object attributes will be converted to database fields (uncamel format); example: productCode -> PRODUCT_CODE It is possible to force a '' value to null It is possible to force all not specified attributes to null A pks set is also needed in order to generate the right WHERE clause

Syntax
```javascript
//return boolean type
var risp = utils.updateMappedObject(
	neutralObject, //Map
	emptyAsNull, //Boolean
	forceAttributesToNull, //Boolean
	dataModelId, //Long
	additionalAttributes, //Map
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	pks //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| neutralObject | Map | javascript object to insert into the specified table | 
| emptyAsNull | Boolean | true to convert empty-string values extracted from neutralObject into SQL NULL values. | 
| forceAttributesToNull | Boolean | true to force writable attributes not present in neutralObject/additionalAttributes to NULL during the update. | 
| dataModelId | Long | data model id, which MUST have MAPPER type, containing the mapping needed to extract the right attributes | 
| additionalAttributes | Map | can be null; if specified, contains additional to include the object under construction, used to generate the SQL instruction | 
| separatedTransaction | Boolean | flag used to define if this query has to be performed in a separated transaction | 
| interruptExecution | Boolean | flag used to defined if the whole server side transaction must be interrupted and rollbacked in case of errors | 
| pks | String[] | attribute names, expressed in camelCase, that compose the primary key/WHERE clause used to identify the record to update. | 

> ✅ **Returns**
>
> `true` if the record has been successfully updated

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## updateMappedObject

Execute an UPDATE SQL statement into the specified table, starting from the javascript NEUTRAL object passed as argument, containing many more attributes, not all related to such a table. The right attributes to take into account from the neutral object will be selected using the mapping defined to the specified data model and table name. All object attributes will be converted to database fields (uncamel format); example: productCode -> PRODUCT_CODE It is possible to force a '' value to null It is possible to force all not specified attributes to null A pks set is also needed in order to generate the right WHERE clause

Syntax
```javascript
//return boolean type
var risp = utils.updateMappedObject(
	neutralObject, //Map
	emptyAsNull, //Boolean
	forceAttributesToNull, //Boolean
	tableName, //String
	dataModelId, //Long
	additionalAttributes, //Map
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	pks //String[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| neutralObject | Map | javascript object to insert into the specified table | 
| emptyAsNull | Boolean | true to convert empty-string values extracted from neutralObject into SQL NULL values. | 
| forceAttributesToNull | Boolean | true to force writable attributes not present in neutralObject/additionalAttributes to NULL during the update. | 
| tableName | String | table name which must be defined as a writable object | 
| dataModelId | Long | data model id, which MUST have MAPPER type, containing the mapping needed to extract the right attributes | 
| additionalAttributes | Map | can be null; if specified, contains additional to include the object under construction, used to generate the SQL instruction | 
| separatedTransaction | Boolean | flag used to define if this query has to be performed in a separated transaction | 
| interruptExecution | Boolean | flag used to defined if the whole server side transaction must be interrupted and rollbacked in case of errors | 
| pks | String[] | attribute names, expressed in camelCase, that compose the primary key/WHERE clause used to identify the record to update. | 

> ✅ **Returns**
>
> `true` if the record has been successfully updated

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## updateObject

Execute an UPDATE SQL statement into the specified table, starting from the javascript object passed as argument. All object attributes will be converted to database fields (uncamel format); example: productCode -> PRODUCT_CODE It is possible to force a '' value to null It is possible to force all not specified attributes to null

Syntax
```javascript
//return boolean type
var risp = utils.updateObject(
	obj, //Map
	emptyAsNull, //Boolean
	forceAttributesToNull, //Boolean
	tableName, //String
	dataSourceId, //Long
	separatedTransaction, //Boolean
	interruptExecution //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| obj | Map | javascript object to update into the specified table | 
| emptyAsNull | Boolean | flag used to force an empty '' attribute value to a null value | 
| forceAttributesToNull | Boolean | flag uded to force all not specified attributes to null | 
| tableName | String | table name which must be defined as a writable object (iut must have a data mode) | 
| dataSourceId | Long | optional data source id | 
| separatedTransaction | Boolean | flag used to define if this query has to be perfomed in a separated transaction | 
| interruptExecution | Boolean | flag used to defined if the whole server side transation must be interruped and rollbacked in case of errors | 

> ✅ **Returns**
>
> `true` if the record has been successfully updated

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## updatePeopleData

Updates the personal data (people record) associated with an existing user. Retrieves the user, finds the associated `Sub01People` record via the subject ID, and applies attribute updates from the provided Map.

Syntax
```javascript
//return Sub01People type
var risp = utils.updatePeopleData(
	companyId, //String
	siteId, //Long
	userCodeId, //String
	data //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| companyId | String | the company identifier | 
| siteId | Long | the site identifier | 
| userCodeId | String | the user code identifier (will be converted to uppercase) | 
| data | Map | a Map of people attributes to update; keys are attribute names (e.g. "name", "surname", "address", "city") that map to setter methods of `Sub01People` via reflection | 

> ✅ **Returns**
>
> the updated `Sub01People` object, or `null` on error

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## updateUserRole

Updates roles for an existing user. This is an alias for `Long, String, Map[])`.

Syntax
```javascript
//return Prm01User type
var risp = utils.updateUserRole(
	companyId, //String
	siteId, //Long
	userCodeId, //String
	roles //Map[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| companyId | String | the company identifier | 
| siteId | Long | the site identifier | 
| userCodeId | String | the user code identifier (will be converted to uppercase) | 
| roles | Map[] | an array of Maps defining the complete set of roles; see `addUserRole` for Map structure | 

> ✅ **Returns**
>
> the `Prm01User` object if roles were updated successfully, or `null` on error

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## updateUser

Updates an existing user's language and additional attributes. Retrieves the user by primary key, updates the language passport record if changed, and applies any additional attribute values from the provided Map.

Syntax
```javascript
//return Prm01User type
var risp = utils.updateUser(
	companyId, //String
	siteId, //Long
	userCodeId, //String
	languageId, //String
	user //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| companyId | String | the company identifier | 
| siteId | Long | the site identifier | 
| userCodeId | String | the user code identifier (will be converted to uppercase) | 
| languageId | String | the new language ID to set; if empty or unchanged, no language update occurs | 
| user | Map | (optional) a Map of user attributes to update; keys are attribute names (e.g. "email", "firstName", "lastName") that map to setter methods of `Prm01User` via reflection | 

> ✅ **Returns**
>
> the updated `Prm01User` object, or `null` on error

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## userRoleActive

Checks whether a specific role is currently active for a user on the given date.

Syntax
```javascript
//return boolean type
var risp = utils.userRoleActive(
	companyId, //String
	siteId, //Long
	userCodeId, //String
	roleId, //String
	activeDate //Date
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| companyId | String | the company identifier | 
| siteId | Long | the site identifier | 
| userCodeId | String | the user code identifier | 
| roleId | String | the role identifier to check | 
| activeDate | Date | the date on which to verify role activity | 

> ✅ **Returns**
>
> `true` if the role is active for the user on the given date, `false` otherwise

> ⚠️ **Throws**
>
> - `Throwable` in case of errors


---

## validateCode

Validates (decodes) a field value from a source (border) table by looking it up in a reference table, and writes the found foreign key back into the source table. Used in ETL pipelines to resolve code values (e.g., item codes, VAT codes) against master data tables. The method automatically selects the optimal validation strategy based on the number of distinct values to validate: Fewer than 1000 distinct codes: uses multiple individual UPDATE statements 1000+ distinct codes: uses a single UPDATE with JOIN (MySQL) or subquery (generic) When validation fails (code not found in reference table), error information is written back to the source table's error fields.

Syntax
```javascript
utils.validateCode(
	settings //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| settings | Map | a Map containing the following expected keys: _(details below)_ | 

#### `settings`

a Map containing the following expected keys:
- **srcDatasourceId** (Number, optional): data source id for the source table connection
- **destDatasourceId** (Number, optional): data source id for the reference (lookup) table connection
- **fromTable** (String, required): name of the source (border) table containing codes to validate
- **fromTableFilter** (String, optional): SQL WHERE clause to filter source records
- **fromRowId** (String, optional): row identifier field in the source table (used in JOIN-based updates)
- **fromFieldCode** (String, required): comma-separated field name(s) in the source table containing the code value(s) to decode
- **fromFK** (String, required): foreign key field in the source table where the resolved key will be written
- **toTable** (String, required): name of the reference (master) table to look up codes
- **toTableFilter** (String, optional): SQL WHERE clause to filter reference table records
- **toFieldCode** (String, required): comma-separated field name(s) in the reference table to match against fromFieldCode
- **toFK** (String, required): primary key field in the reference table to retrieve as the resolved value
- **errorFieldName** (String, optional): field name in source table to store error details (JSON array)
- **containsErrorsField** (String, optional): field name in source table for error flag ("Y"/"N")
- **commitSize** (Number, optional, default 1000): number of rows per batch commit
- **forceOneUpdate** (Boolean, optional): if true, forces the single-UPDATE strategy regardless of row count
- **useJoin** (Boolean, optional): if true and on MySQL, uses JOIN syntax for the single-UPDATE strategy; otherwise uses a correlated subquery

> ⚠️ **Throws**
>
> - `Throwable` if a database error occurs or required settings are missing


---

## waitAllElements

Wait for termination of all elements enqueued and identified by the specified element ids. After that, execute the specified actionId in the specified queue.

Syntax
```javascript
utils.waitAllElements(
	queueName, //String
	actionId, //Long
	elementIds //Long[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| queueName | String | name of the queue that must receive the follow-up action once all elements have completed. | 
| actionId | Long | server-side action identifier to enqueue after all specified elements have terminated. | 
| elementIds | Long[] | queue element identifiers to wait for before triggering actionId. | 


---

## waitAnyElement

Wait for termination of at least one of the elements enqueued and identified by the specified element ids. After that, execute the specified actionId in the specified queue.

Syntax
```javascript
utils.waitAnyElement(
	queueName, //String
	actionId, //Long
	elementIds //Long[]
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| queueName | String | name of the queue that must receive the follow-up action once any specified element has completed. | 
| actionId | Long | server-side action identifier to enqueue after the first specified element has terminated. | 
| elementIds | Long[] | queue element identifiers to monitor. | 


---

## warn

Logs a message at WARN level. Shorthand for `log(msg, "WARN")`.

Syntax
```javascript
utils.warn(
	msg //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| msg | String | the log message text @see #log(String, String) | 


---

## writeBase64File

Write to the local file system the file content passed as argument.

Syntax
```javascript
utils.writeBase64File(
	filePath, //String
	base64Content //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| filePath | String | path + file name to create | 
| base64Content | String | file content, expressed in BASE 64. | 


---

## writeToCSVFile

Add a row to an already opened CSV file.

Syntax
```javascript
utils.writeToCSVFile(
	uuid, //String
	obj, //Map
	rowSeparator //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| uuid | String | output stream identifier, related to a CSV file already opended; this id is returned by the "openCSVFile" method | 
| obj | Map | a record, containing data to save into the row to write | 
| rowSeparator | String | optional custom row separator string appended after each row; if null, the system default line separator is used | 

> ⚠️ **Throws**
>
> - `Throwable` in case the CSV file has not been opened


---

## writeToCSVFile

Add a row to an already opened CSV file.

Syntax
```javascript
utils.writeToCSVFile(
	uuid, //String
	obj //Map
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| uuid | String | output stream identifier, related to a CSV file already opended; this id is returned by the "openCSVFile" method | 
| obj | Map | a record, containing data to save into the row to write | 

> ⚠️ **Throws**
>
> - `Throwable` in case the CSV file has not been opened


---

## writeToTextFile

Add a row to an already opened text file. NO additional CR characters are automatically added to the row: it is up to the programmer to add them, if needed.

Syntax
```javascript
utils.writeToTextFile(
	uuid, //String
	text //String
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| uuid | String | output stream identifier, related to a CSV file already opended; this id is returned by the "openCSVFile" method | 
| text | String | text to append to the already opened file; line separators are not added automatically. | 

> ⚠️ **Throws**
>
> - `Throwable` in case the text file has not been opened


---

## zipFiles

Create a zip file containing the list of passed files.

Syntax
```javascript
//return boolean type
var risp = utils.zipFiles(
	baseDirId, //Long
	zipFile, //String
	deleteFilesAfterZip //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| baseDirId | Long | directory identifier whose content must be zipped recursively. | 
| zipFile | String | zip file to create, including the absolute path | 
| deleteFilesAfterZip | Boolean | flag used to decide if deleting all input files after the zip creation | 

> ✅ **Returns**
>
> `true` if the zip file has been created successfully, `false` otherwise


---

## zipFiles

Create a zip file containing the list of passed files.

Syntax
```javascript
//return boolean type
var risp = utils.zipFiles(
	baseDir, //String
	files, //String[]
	zipFile, //String
	deleteFilesAfterZip //Boolean
);
```

Details

| Argument | Type | Description | 
| -- | -- | -- | 
| baseDir | String | base dir used to calculate the entry in the zip (i.e. a relative path + file name) | 
| files | String[] | files to zip (each including an absolute path) | 
| zipFile | String | zip file to create, including the absolute path | 
| deleteFilesAfterZip | Boolean | flag used to decide if deleting all input files after the zip creation | 

> ✅ **Returns**
>
> `true` if the zip file has been created successfully, `false` otherwise


---


