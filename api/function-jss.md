# Function JSS

## addApplUserParameter

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return ListResponse type
var risp = utils.addApplUserParameter(
	companyId, //String
	siteId, //Long
	userCodeId, //String
	parameters //Map[]
);
```
{% endcode %}

Details

| Argument   | Description |
| ---------- | ----------- |
| companyId  | \[String]   |
| siteId     | \[Long]     |
| userCodeId | \[String]   |
| parameters | \[Map\[]]   |

***

## addAttribute

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument            | Description |
| ------------------- | ----------- |
| host                | \[String]   |
| port                | \[Integer]  |
| filterDN            | \[String]   |
| ldapUsername        | \[String]   |
| ldapPassword        | \[String]   |
| attributeNameToAdd  | \[String]   |
| attributeValueToAdd | \[String]   |

***

## addBackgroundToPdf

Add a text in the background to an already existing PDF document, for each page.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.addBackgroundToPdf(
	dirId, //Long
	pdfFile, //String
	background, //String
	settings //Map
);
```
{% endcode %}

Details

| Argument                                                                                                                                                                                                                                                                   | Description                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| dirId                                                                                                                                                                                                                                                                      | \[Long] dirId directory id for the already existing PDF file                                                           |
| pdfFile                                                                                                                                                                                                                                                                    | \[String] pdfFile PDF file name                                                                                        |
| background                                                                                                                                                                                                                                                                 | \[String] background text to include in each page for the already existing PDF file                                    |
| settings                                                                                                                                                                                                                                                                   | \[Map] settings { red: 200, green: 200, blue: 200, fontName: "Helvetica-Bold", fontSize: 50, fileName: "newfile.pdf" } |
| Allowed values for "fontName": "Courier-Bold", "Courier-BoldOblique", "Times-Roman", "Helvetica-Oblique", "Courier-Oblique", "Symbol", "Times-Italic", "Helvetica", "Helvetica-Bold", "Times-BoldItalic", "ZapfDingbats", "Times-Bold", "Helvetica-BoldOblique", "Courier" |                                                                                                                        |

***

## addBackgroundToPdf2

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.addBackgroundToPdf2(
	dirId, //Long
	pdfFile, //String
	background //String
);
```
{% endcode %}

Details

| Argument   | Description                                        |
| ---------- | -------------------------------------------------- |
| dirId      | \[Long] dir id used to find or write or read files |
| pdfFile    | \[String]                                          |
| background | \[String]                                          |

***

## addBarcodeToPDFFile

Add a barcode.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.addBarcodeToPDFFile(
	uuid, //String
	x, //int
	y, //int
	barcodeString, //String
	barcodeType, //String
	settings //Map
);
```
{% endcode %}

Details

| Argument      | Description                                                                                  |
| ------------- | -------------------------------------------------------------------------------------------- |
| uuid          | \[String] uuid document id                                                                   |
| x             | \[int] x X coordinate (from left to right)                                                   |
| y             | \[int] y Y coordinate (form bottom to top)                                                   |
| barcodeString | \[String] barcodeString barcode to render                                                    |
| barcodeType   | \[String] barcodeType supported values: Code128, Code39, Interleaved2Of5, Ean8, Upca, pdf417 |
| settings      | \[Map]                                                                                       |

***

## addCompanyRelation

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return ListResponse type
var risp = utils.addCompanyRelation(
	companyId, //String
	siteId, //Long
	companySubjectId, //String
	userCodeId, //String
	relations //Map[]
);
```
{% endcode %}

Details

| Argument         | Description |
| ---------------- | ----------- |
| companyId        | \[String]   |
| siteId           | \[Long]     |
| companySubjectId | \[String]   |
| userCodeId       | \[String]   |
| relations        | \[Map\[]]   |

***

## addCustomApplUserVars

Add a custom parameter to the user session.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.addCustomApplUserVars(
	code, //String
	value //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| code     | \[String]   |
| value    | \[String]   |

***

## addCustomApplUserVarsWithTimeout

Add a custom parameter to the user session.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.addCustomApplUserVarsWithTimeout(
	code, //String
	value, //String
	seconds //Long
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| code     | \[String]   |
| value    | \[String]   |
| seconds  | \[Long]     |

***

## addDate

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Date type
var risp = utils.addDate(
	currentTimeMillis, //Long
	field, //String
	amount //Number
);
```
{% endcode %}

Details

| Argument          | Description |
| ----------------- | ----------- |
| currentTimeMillis | \[Long]     |
| field             | \[String]   |
| amount            | \[Number]   |

***

## addDate

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Date type
var risp = utils.addDate(
	field, //String
	amount //Number
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| field    | \[String]   |
| amount   | \[Number]   |

***

## addDate

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Date type
var risp = utils.addDate(
	date, //String
	format, //String
	field, //String
	amount //Number
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| date     | \[String]   |
| format   | \[String]   |
| field    | \[String]   |
| amount   | \[Number]   |

***

## addImageToPDFFile

Add a local stored image.\
Supported types: png, jpg/jpeg and tif/tiff

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.addImageToPDFFile(
	uuid, //String
	x, //int
	y, //int
	imgPath, //String
	width, //int
	height //int
);
```
{% endcode %}

Details

| Argument | Description                                |
| -------- | ------------------------------------------ |
| uuid     | \[String] uuid document id                 |
| x        | \[int] x X coordinate (from left to right) |
| y        | \[int] y Y coordinate (form bottom to top) |
| imgPath  | \[String]                                  |
| width    | \[int]                                     |
| height   | \[int]                                     |

***

## addLineToPDFFile

Add a row to an already opened PDF file.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.addLineToPDFFile(
	uuid, //String
	line, //String
	settings //Map
);
```
{% endcode %}

Details

| Argument | Description                                                                                                                     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| uuid     | \[String] uuid output stream identifier, related to a PDF file already opended; this id is returned by the "openPDFFile" method |
| line     | \[String] line a row to add                                                                                                     |
| settings | \[Map]                                                                                                                          |

***

## addMembersToChatGroup

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.addMembersToChatGroup(
	groupId, //String
	myPhoneNumber, //String
	contactNames, //String>
	contactPhoneNumbers //String>
);
```
{% endcode %}

Details

| Argument            | Description |
| ------------------- | ----------- |
| groupId             | \[String]   |
| myPhoneNumber       | \[String]   |
| contactNames        | \[String>]  |
| contactPhoneNumbers | \[String>]  |

***

## addPageToPDFFile

Add a new page to an already opened PDF file.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.addPageToPDFFile(
	uuid //String
);
```
{% endcode %}

Details

| Argument | Description                                                                                                                     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| uuid     | \[String] uuid output stream identifier, related to a PDF file already opended; this id is returned by the "openPDFFile" method |

***

## addResponseHeader

Add an HTTP response header to the web service response.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.addResponseHeader(
	headerName, //String
	headerValue //String
);
```
{% endcode %}

Details

| Argument    | Description                        |
| ----------- | ---------------------------------- |
| headerName  | \[String] headerName header name   |
| headerValue | \[String] headerValue header value |

***

## addSessionAttribute

Add an HTTP response header to the web service response.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.addSessionAttribute(
	attrinuteName, //String
	value //String
);
```
{% endcode %}

Details

| Argument      | Description |
| ------------- | ----------- |
| attrinuteName | \[String]   |
| value         | \[String]   |

***

## addUserRole

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Prm01User type
var risp = utils.addUserRole(
	companyId, //String
	siteId, //Long
	userCodeId, //String
	roles //Map[]
);
```
{% endcode %}

Details

| Argument   | Description |
| ---------- | ----------- |
| companyId  | \[String]   |
| siteId     | \[Long]     |
| userCodeId | \[String]   |
| roles      | \[Map\[]]   |

***

## addUserRoleForApplication

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Prm01User type
var risp = utils.addUserRoleForApplication(
	appId, //String
	companyId, //String
	siteId, //Long
	userCodeId, //String
	roles //Map[]
);
```
{% endcode %}

Details

| Argument   | Description |
| ---------- | ----------- |
| appId      | \[String]   |
| companyId  | \[String]   |
| siteId     | \[Long]     |
| userCodeId | \[String]   |
| roles      | \[Map\[]]   |

***

## applicationExportBackup

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument        | Description |
| --------------- | ----------- |
| toDirId         | \[Long]     |
| ftpHost         | \[String]   |
| ftpPort         | \[Long]     |
| ftpUseSSL       | \[String]   |
| ftpUsername     | \[String]   |
| ftpPassword     | \[String]   |
| ftpDestination  | \[String]   |
| availbaleBackup | \[Long]     |

***

## applicationMetadataImport

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.applicationMetadataImport(
	fromDirId, //Long
	fileName //String
);
```
{% endcode %}

Details

| Argument  | Description         |
| --------- | ------------------- |
| fromDirId | \[Long]             |
| fileName  | \[String] file name |

***

## backupDirFiles

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument        | Description                                        |
| --------------- | -------------------------------------------------- |
| baseDirId       | \[Long] dir id used to find or write or read files |
| toDirId         | \[Long]                                            |
| ftpHost         | \[String]                                          |
| ftpPort         | \[Long]                                            |
| ftpUseSSL       | \[String]                                          |
| ftpUsername     | \[String]                                          |
| ftpPassword     | \[String]                                          |
| ftpDestination  | \[String]                                          |
| suffixZipFile   | \[String]                                          |
| availbaleBackup | \[Long]                                            |

***

## blockingWaitAllElements

BLOCKING Wait for termination of all elements enqueued and identified by the specified element ids.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.blockingWaitAllElements(
	timeout, //Long
	elementIdsStr //String[]
);
```
{% endcode %}

Details

| Argument      | Description                                                                               |
| ------------- | ----------------------------------------------------------------------------------------- |
| timeout       | \[Long] timeout max waiting secs before interrupting method and get a transaction id back |
| elementIdsStr | \[String\[]]                                                                              |

***

## callBusinessComponent

Invoke a business component, starting from its component id.\
The b.c. can fill in either a grid or a form.\
Additional request parameters can be added to its input.\
All request parameters passed to the current server-side js b.c. are passwed forward, but optionally it is possible\
to rename some request parameters, through "decodedReqParams" map.\
It is also possible to replace quick filter conditions through the "decodedFilterNames" map.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.callBusinessComponent(
	compId, //Long
	additionalReqParams, //Map
	decodedReqParams, //Map
	decodedFilterNames //Map
);
```
{% endcode %}

Details

| Argument            | Description |
| ------------------- | ----------- |
| compId              | \[Long]     |
| additionalReqParams | \[Map]      |
| decodedReqParams    | \[Map]      |
| decodedFilterNames  | \[Map]      |

***

## camel

Convert a table.field name to an attribute name, using the camel format. Example: TAB.FIELD\_NAME -> fieldName

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.camel(
	fieldName, //String
	firstCharUpper //Boolean
);
```
{% endcode %}

Details

| Argument       | Description                                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------------------------ |
| fieldName      | \[String] fieldName table.fieldname                                                                                |
| firstCharUpper | \[Boolean] firstCharUpper flag used to define if the first letter of the converted string must be set as uppercase |

***

## camelToSnake

Convert string from camel mode to upper case

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.camelToSnake(
	str, //String
	toUpperCase //boolean
);
```
{% endcode %}

Details

| Argument                                                                                        | Description                                                                                    |
| ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| str                                                                                             | \[String] str is a text to convert                                                             |
| toUpperCase                                                                                     | \[boolean] toUpperCase true if you want a str in upper case else if you want str in lower case |
| Example: str = "abcDEF" --> "abc\_d\_e\_f" (toUpperCase=false) or "ABC\_DEF" (toUpperCase=true) |                                                                                                |

***

## checkCellsWithMetadataForImport

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.checkCellsWithMetadataForImport(
	directoryId, //Long
	fileName, //String
	valueImportId //Long
);
```
{% endcode %}

Details

| Argument      | Description                                        |
| ------------- | -------------------------------------------------- |
| directoryId   | \[Long] dir id used to find or write or read files |
| fileName      | \[String] file name                                |
| valueImportId | \[Long]                                            |

***

## checkFunctionId

This method will fire an exception in case the specified functionName is not enabled for the current logged user.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.checkFunctionId(
	functionId //String
);
```
{% endcode %}

Details

| Argument   | Description                                     |
| ---------- | ----------------------------------------------- |
| functionId | \[String] functionId function name to check out |

***

## checkRoleId

This method will fire an exception in case the specified role id is not bounded for the current logged user.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.checkRoleId(
	roleId //String
);
```
{% endcode %}

Details

| Argument | Description                           |
| -------- | ------------------------------------- |
| roleId   | \[String] roleId role id to check out |

***

## clearWritingCache

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.clearWritingCache(
	datasourceId, //Long
	table //String
);
```
{% endcode %}

Details

| Argument     | Description                                                                                        |
| ------------ | -------------------------------------------------------------------------------------------------- |
| datasourceId | \[Long] num value; it can be null and used to specify a different db to use with the sql statement |
| table        | \[String]                                                                                          |

***

## closeCSVFile

Close a CSV file, previously opened.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.closeCSVFile(
	uuid //String
);
```
{% endcode %}

Details

| Argument | Description                                                                                                                     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| uuid     | \[String] uuid output stream identifier, related to a CSV file already opended; this id is returned by the "openCSVFile" method |

***

## closePDFFile

Close a PDF file, previously opened.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.closePDFFile(
	uuid //String
);
```
{% endcode %}

Details

| Argument | Description                                                                                                                    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| uuid     | \[String] uuid output stream identifier, related to a PDF file already opened; this id is returned by the "openPDFFile" method |

***

## closeTextFile

Close a text file, previously opened.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.closeTextFile(
	uuid //String
);
```
{% endcode %}

Details

| Argument | Description                                                                                                                      |
| -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| uuid     | \[String] uuid output stream identifier, related to a text file already opened; this id is returned by the "openTextFile" method |

***

## convertDateToSqlDate

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Date type
var risp = utils.convertDateToSqlDate(
	date //Date
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| date     | \[Date]     |

***

## convertDateToString

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.convertDateToString(
	date, //Date
	format //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| date     | \[Date]     |
| format   | \[String]   |

***

## convertDateToString

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Map type
var risp = utils.convertDateToString(
	vo //Map
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| vo       | \[Map]      |

***

## convertDateToTimestamp

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Timestamp type
var risp = utils.convertDateToTimestamp(
	date //Date
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| date     | \[Date]     |

***

## convertSecondToHoursMinutesSeconds

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.convertSecondToHoursMinutesSeconds(
	seconds //Long
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| seconds  | \[Long]     |

***

## convertStringToDate

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Date type
var risp = utils.convertStringToDate(
	dateAsString, //String
	format //String
);
```
{% endcode %}

Details

| Argument     | Description |
| ------------ | ----------- |
| dateAsString | \[String]   |
| format       | \[String]   |

***

## convertStringToNumber

Convert a string representing a number to a number.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Number type
var risp = utils.convertStringToNumber(
	number //String
);
```
{% endcode %}

Details

| Argument | Description                                                                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| number   | \[String] number the string must have the righr format: int.dec No grouping symbols are allowed and the decimal symbol, if included, must be the period . |

***

## convertStringToUTCDate

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Date type
var risp = utils.convertStringToUTCDate(
	date //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| date     | \[String]   |

***

## convertUTCStringToDate

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Date type
var risp = utils.convertUTCStringToDate(
	utcDateAsString //String
);
```
{% endcode %}

Details

| Argument        | Description |
| --------------- | ----------- |
| utcDateAsString | \[String]   |

***

## convertUTCStringToTimeZoneDate

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Date type
var risp = utils.convertUTCStringToTimeZoneDate(
	utcDateAsString, //String
	hrs //int
);
```
{% endcode %}

Details

| Argument        | Description |
| --------------- | ----------- |
| utcDateAsString | \[String]   |
| hrs             | \[int]      |

***

## convertXMLToHTML

Convert the specified XML file to HTML, using the specified XSD document to apply the XSLT transformation.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument       | Description                                                                  |
| -------------- | ---------------------------------------------------------------------------- |
| xmlDirId       | \[Long] xmlDirId directory id where the XML data file is located             |
| xmlFileName    | \[String] xmlFileName XML data file                                          |
| xslDirId       | \[Long] xslDirId directory id where the XSL data file is located             |
| xslFileName    | \[String] xslFileName XSL stylesheet file                                    |
| htmlDirId      | \[Long] htmlDirId directory id where the HTML file to generate will be saved |
| htmlFileName   | \[String] htmlFileName HTML file to generate                                 |
| namespaceAware | \[Boolean]                                                                   |
| validating     | \[Boolean]                                                                   |

***

## copyCompanyId

Create a new companyId, starting from the one specified as argument.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.copyCompanyId(
	startingCompanyId, //String
	newCompanyId, //String
	newCorporateName //String
);
```
{% endcode %}

Details

| Argument          | Description                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------------------- |
| startingCompanyId | \[String] startingCompanyId company id to use when creating a new one, in order to duplicate its content |
| newCompanyId      | \[String] newCompanyId new company id value                                                              |
| newCorporateName  | \[String]                                                                                                |

***

## copyCompanyId \[Deprecated]

Create a new companyId, starting from the one specified as argument.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.copyCompanyId(
	startingCompanyId, //String
	newCompanyId //String
);
```
{% endcode %}

Details

| Argument          | Description                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------------------- |
| startingCompanyId | \[String] startingCompanyId company id to use when creating a new one, in order to duplicate its content |
| newCompanyId      | \[String] newCompanyId new company id value                                                              |

***

## copyDataFromBorderTable

Copy data from a border table to a final table, where all FKs have been already set in the border table.\
It is possible either to INSERT all input records or UPDATE them.\
Update is possible only if the PKs for the final table are already available in the border table.\
In case of insert, he PK can be either input fields or a UUID calculated on the fly or a counter reckoned thorugh a counter table.\
In the latter case, records in the counter table must be already defined in the PROG\_ID table used to calculate the next counter

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Long type
var risp = utils.copyDataFromBorderTable(
	settings //Map
);
```
{% endcode %}

Details

| Argument | Description       |
| -------- | ----------------- |
| settings | \[Map] settings { |

```
srcDatasourceId: [Long] datasource id of from table
fromTable: [String] name of origin table
fromTableFilter: [String]
fromFK: [String]
fromLoadedFieldName: [String]
errorFieldName: [String]
containsErrorsField: [String]
operation: [String] (default "INSERT")
defaultFields: [Map]
defaultInLineFields: [Map]
mappingFields: [Map]
destDatasourceId: [Long] datasource id of to table
toTable: [String] name of destination table
toTableFilter: [String] filter used to check if a SINGLE record exists in a destination table
idAsNum: [String]
idAsUuid: [String]
progIdValueField: [String]
progIdTable: [String]
progIdIncField: [String]
progIdWhere: [String]
commitSize: [Long] (default 1000)
```

} |

***

## copyFile

Copy the source file to the destination file.\
Since "destFile" contains a file name too, the source file can be renamed when copied.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.copyFile(
	srcFile, //String
	destFile, //String
	replaceExistingFile, //Boolean
	deleteSourceFile //Boolean
);
```
{% endcode %}

Details

| Argument            | Description                                                                                                            |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| srcFile             | \[String] srcFile absolute path + file name                                                                            |
| destFile            | \[String] destFile absolute file + file name                                                                           |
| replaceExistingFile | \[Boolean]                                                                                                             |
| deleteSourceFile    | \[Boolean] deleteSourceFile flag used to delete the source file, once the file has been copied to the destination path |

***

## copyFile

Copy the source file to the destination file.\
Since "destFile" contains a file name too, the source file can be renamed when copied.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.copyFile(
	inBaseDir, //String
	inFileName, //String
	destPathFileName //String
);
```
{% endcode %}

Details

| Argument         | Description                                                                               |
| ---------------- | ----------------------------------------------------------------------------------------- |
| inBaseDir        | \[String] inBaseDir base dir where the file is stored (not required in case of GFS)       |
| inFileName       | \[String] inFileName file name (uuid in case of GFS)                                      |
| destPathFileName | \[String] destPathFileName absolute path + file name where the source file must be copied |

***

## copyImportRowsFromFile

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Long type
var risp = utils.copyImportRowsFromFile(
	importId, //Long
	newDescription //String
);
```
{% endcode %}

Details

| Argument       | Description |
| -------------- | ----------- |
| importId       | \[Long]     |
| newDescription | \[String]   |

***

## countRowsOfCSVFile

Count rows of csf file

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Long type
var risp = utils.countRowsOfCSVFile(
	filePath //String
);
```
{% endcode %}

Details

| Argument | Description                |
| -------- | -------------------------- |
| filePath | \[String] filePath of file |

***

## countRowsOfTextFile

Count row of text file

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Long type
var risp = utils.countRowsOfTextFile(
	filePath //String
);
```
{% endcode %}

Details

| Argument | Description                |
| -------- | -------------------------- |
| filePath | \[String] filePath of file |

***

## createAllowedLink

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.createAllowedLink(
	expirationDays, //Long
	maxTimes, //Long
	rtk, //String
	note //String
);
```
{% endcode %}

Details

| Argument       | Description |
| -------------- | ----------- |
| expirationDays | \[Long]     |
| maxTimes       | \[Long]     |
| rtk            | \[String]   |
| note           | \[String]   |

***

## createAllowedLink

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.createAllowedLink(
	expirationDays, //Long
	maxTimes //Long
);
```
{% endcode %}

Details

| Argument       | Description |
| -------------- | ----------- |
| expirationDays | \[Long]     |
| maxTimes       | \[Long]     |

***

## createAllowedLinkWithRtk

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.createAllowedLinkWithRtk(
	expirationDays, //Long
	maxTimes, //Long
	rtk //String
);
```
{% endcode %}

Details

| Argument       | Description |
| -------------- | ----------- |
| expirationDays | \[Long]     |
| maxTimes       | \[Long]     |
| rtk            | \[String]   |

***

## createAllowedUrl

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument       | Description                                                                                                                                                                                                                |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| baseUrl        | \[String]                                                                                                                                                                                                                  |
| actionId       | \[Long]                                                                                                                                                                                                                    |
| aName          | \[String]                                                                                                                                                                                                                  |
| aValue         | \[String]                                                                                                                                                                                                                  |
| rName          | \[String]                                                                                                                                                                                                                  |
| rValue         | \[String]                                                                                                                                                                                                                  |
| params         | \[String] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |
| expirationDays | \[Long]                                                                                                                                                                                                                    |
| maxTimes       | \[Long]                                                                                                                                                                                                                    |
| message        | \[String]                                                                                                                                                                                                                  |

***

## createCSVFile

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument         | Description                                                                                                                 |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------- |
| fileName         | \[String] file name                                                                                                         |
| overwrite        | \[Boolean] true to overwrite the file content if already exists, false to ignore this operation and returns false as result |
| directoryId      | \[Long] dir id used to find or write or read files                                                                          |
| data             | \[List]                                                                                                                     |
| sep              | \[String]                                                                                                                   |
| languageId       | \[String] language to use for translations                                                                                  |
| exportAttributes | \[String\[]]                                                                                                                |
| exportColumns    | \[String\[]]                                                                                                                |
| formatColumns    | \[String\[]]                                                                                                                |
| printTitles      | \[boolean]                                                                                                                  |

***

## createCSVFile

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument         | Description                                                                                                                 |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------- |
| fileName         | \[String] file name                                                                                                         |
| overwrite        | \[Boolean] true to overwrite the file content if already exists, false to ignore this operation and returns false as result |
| directoryId      | \[Long] dir id used to find or write or read files                                                                          |
| data             | \[List]                                                                                                                     |
| sep              | \[String]                                                                                                                   |
| languageId       | \[String] language to use for translations                                                                                  |
| exportAttributes | \[String\[]]                                                                                                                |
| exportColumns    | \[String\[]]                                                                                                                |
| formatColumns    | \[String\[]]                                                                                                                |
| printTitles      | \[boolean]                                                                                                                  |
| fileAppend       | \[Boolean]                                                                                                                  |

***

## createCSVFileFromSQLQuery

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument      | Description                                                                                                                                                                                                                   |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fileName      | \[String] file name                                                                                                                                                                                                           |
| overwrite     | \[Boolean] true to overwrite the file content if already exists, false to ignore this operation and returns false as result                                                                                                   |
| directoryId   | \[Long] dir id used to find or write or read files                                                                                                                                                                            |
| sep           | \[String]                                                                                                                                                                                                                     |
| languageId    | \[String] language to use for translations                                                                                                                                                                                    |
| printTitles   | \[Boolean]                                                                                                                                                                                                                    |
| fileAppend    | \[Boolean]                                                                                                                                                                                                                    |
| formatColumns | \[String\[]]                                                                                                                                                                                                                  |
| datasourceId  | \[Long] num value; it can be null and used to specify a different db to use with the sql statement                                                                                                                            |
| sqlQuery      | \[String]                                                                                                                                                                                                                     |
| pars          | \[Object\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## createCSVFileFromSQLQuery

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument      | Description                                                                                                                                                                                                                   |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fileName      | \[String] file name                                                                                                                                                                                                           |
| overwrite     | \[Boolean] true to overwrite the file content if already exists, false to ignore this operation and returns false as result                                                                                                   |
| directoryId   | \[Long] dir id used to find or write or read files                                                                                                                                                                            |
| sep           | \[String]                                                                                                                                                                                                                     |
| languageId    | \[String] language to use for translations                                                                                                                                                                                    |
| printTitles   | \[Boolean]                                                                                                                                                                                                                    |
| fileAppend    | \[Boolean]                                                                                                                                                                                                                    |
| charset       | \[String]                                                                                                                                                                                                                     |
| formatColumns | \[String\[]]                                                                                                                                                                                                                  |
| datasourceId  | \[Long] num value; it can be null and used to specify a different db to use with the sql statement                                                                                                                            |
| sqlQuery      | \[String]                                                                                                                                                                                                                     |
| pars          | \[Object\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## createChatContact

Create a contact (person) in the chat.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Con89ChatContact type
var risp = utils.createChatContact(
	person //Con89ChatContact
);
```
{% endcode %}

Details

| Argument | Description         |
| -------- | ------------------- |
| person   | \[Con89ChatContact] |

***

## createChatGroup

Create a new chat group and add a few contacts to it.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Con89ChatContact type
var risp = utils.createChatGroup(
	groupName, //String
	myPhoneNumber, //String
	contactNames, //String>
	contactPhoneNumbers //String>
);
```
{% endcode %}

Details

| Argument            | Description                                            |
| ------------------- | ------------------------------------------------------ |
| groupName           | \[String] groupName group name                         |
| myPhoneNumber       | \[String] myPhoneNumber phone number to start with     |
| contactNames        | \[String>]                                             |
| contactPhoneNumbers | \[String>] contactPhoneNumbers list of contacts to add |

***

## createDbTableMetadata

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Long type
var risp = utils.createDbTableMetadata(
	datasourceId, //Long
	tableName //String
);
```
{% endcode %}

Details

| Argument     | Description                                                                                        |
| ------------ | -------------------------------------------------------------------------------------------------- |
| datasourceId | \[Long] num value; it can be null and used to specify a different db to use with the sql statement |
| tableName    | \[String] String: name of table                                                                    |

***

## createEntry

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument             | Description  |
| -------------------- | ------------ |
| host                 | \[String]    |
| port                 | \[Integer]   |
| ldapUsername         | \[String]    |
| ldapPassword         | \[String]    |
| baseDN               | \[String]    |
| entryName            | \[String]    |
| entryType            | \[String]    |
| entryDescription     | \[String]    |
| attributeNamesValues | \[String\[]] |

***

## createFTPDirectories

Create the specified folders in to the FTP server.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument    | Description                                                                                                                           |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| protocol    | \[String]                                                                                                                             |
| host        | \[String] host FTP server host                                                                                                        |
| port        | \[Integer] port FTP server port                                                                                                       |
| useSSL      | \[Boolean] useSSL flag used to open a secure connection with the FTP server                                                           |
| username    | \[String] username username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| password    | \[String] password password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| directories | \[String] directories to create in the FTP server                                                                                     |

***

## createGroup

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument                       | Description  |
| ------------------------------ | ------------ |
| host                           | \[String]    |
| port                           | \[Integer]   |
| ldapUsername                   | \[String]    |
| ldapPassword                   | \[String]    |
| baseDN                         | \[String]    |
| folderDN                       | \[String]    |
| groupName                      | \[String]    |
| additionalAttributeNamesValues | \[String\[]] |

***

## createRole

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Prm02Role type
var risp = utils.createRole(
	companyId, //String
	siteId, //Long
	roleId, //String
	description //String
);
```
{% endcode %}

Details

| Argument    | Description |
| ----------- | ----------- |
| companyId   | \[String]   |
| siteId      | \[Long]     |
| roleId      | \[String]   |
| description | \[String]   |

***

## createRoleForApplication

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Prm02Role type
var risp = utils.createRoleForApplication(
	appId, //String
	companyId, //String
	siteId, //Long
	roleId, //String
	description //String
);
```
{% endcode %}

Details

| Argument    | Description |
| ----------- | ----------- |
| appId       | \[String]   |
| companyId   | \[String]   |
| siteId      | \[Long]     |
| roleId      | \[String]   |
| description | \[String]   |

***

## createTextFile

Create a text file and fill in with the passed content.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.createTextFile(
	fileName, //String
	fileContent, //String
	overwrite, //Boolean
	directoryId //Long
);
```
{% endcode %}

Details

| Argument    | Description                                                                                                                                                                                               |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fileName    | \[String] fileName file name; it can includes a subpath to append to the base path specified through directoryId                                                                                          |
| fileContent | \[String] fileContent text content to save                                                                                                                                                                |
| overwrite   | \[Boolean] overwrite `true` to overwrite the file content if already exists, `false` to ignore this operation and returns false as result                                                                 |
| directoryId | \[Long] directoryId directory id directory identifier, used to define the absolute path, in the central server, where the file will be stored; if null, there must be one only entry for this application |

***

## createTextFile

Create a text file and fill in with the passed content.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.createTextFile(
	fileName, //String
	fileContent, //String
	overwrite, //Boolean
	directoryId, //Long
	charset //String
);
```
{% endcode %}

Details

| Argument    | Description                                                                                                                                                                                               |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fileName    | \[String] fileName file name; it can includes a subpath to append to the base path specified through directoryId                                                                                          |
| fileContent | \[String] fileContent text content to save                                                                                                                                                                |
| overwrite   | \[Boolean] overwrite `true` to overwrite the file content if already exists, `false` to ignore this operation and returns false as result                                                                 |
| directoryId | \[Long] directoryId directory id directory identifier, used to define the absolute path, in the central server, where the file will be stored; if null, there must be one only entry for this application |
| charset     | \[String]                                                                                                                                                                                                 |

***

## createUser

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument    | Description                                |
| ----------- | ------------------------------------------ |
| companyId   | \[String]                                  |
| siteId      | \[Long]                                    |
| userCodeId  | \[String]                                  |
| description | \[String]                                  |
| password    | \[String]                                  |
| languageId  | \[String] language to use for translations |
| user        | \[Map]                                     |
| roles       | \[Map\[]]                                  |

***

## createValueImports

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument            | Description                                        |
| ------------------- | -------------------------------------------------- |
| dbTableId           | \[Long]                                            |
| directoryId         | \[Long] dir id used to find or write or read files |
| fileName            | \[String] file name                                |
| description         | \[String]                                          |
| note                | \[String]                                          |
| inputData           | \[String]                                          |
| breakOnColumnsEmpty | \[Long]                                            |
| breakOnRowsEmpty    | \[Long]                                            |

***

## debug

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.debug(
	msg //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| msg      | \[String]   |

***

## debugAll

return all variables names+values, as a JSON string

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.debugAll();
```
{% endcode %}

***

## debugVariable

return variable name=value as a string

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.debugVariable(
	variableName //String
);
```
{% endcode %}

Details

| Argument     | Description |
| ------------ | ----------- |
| variableName | \[String]   |

***

## decodeBase64

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.decodeBase64(
	plainText //String
);
```
{% endcode %}

Details

| Argument  | Description                               |
| --------- | ----------------------------------------- |
| plainText | \[String] plainText plain text to convert |

***

## decodeEncToken

Decript a token.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.decodeEncToken(
	encToken //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| encToken | \[String]   |

***

## decodeFile

Decript a file.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Boolean type
var risp = utils.decodeFile(
	sorgDirId, //Long
	sorgFileName, //String
	destFileName, //String
	removeSorgFile //Boolean
);
```
{% endcode %}

Details

| Argument       | Description |
| -------------- | ----------- |
| sorgDirId      | \[Long]     |
| sorgFileName   | \[String]   |
| destFileName   | \[String]   |
| removeSorgFile | \[Boolean]  |

***

## decodePassword

Decript a password.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.decodePassword(
	encriptedPassword //String
);
```
{% endcode %}

Details

| Argument          | Description |
| ----------------- | ----------- |
| encriptedPassword | \[String]   |

***

## deleteApplUserParameter

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return ListResponse type
var risp = utils.deleteApplUserParameter(
	companyId, //String
	siteId, //Long
	userCodeId, //String
	parameters //Map[]
);
```
{% endcode %}

Details

| Argument   | Description |
| ---------- | ----------- |
| companyId  | \[String]   |
| siteId     | \[Long]     |
| userCodeId | \[String]   |
| parameters | \[Map\[]]   |

***

## deleteCompanyRelation

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return ListResponse type
var risp = utils.deleteCompanyRelation(
	companyId, //String
	siteId, //Long
	companySubjectId, //String
	userCodeId, //String
	relations //Map[]
);
```
{% endcode %}

Details

| Argument         | Description |
| ---------------- | ----------- |
| companyId        | \[String]   |
| siteId           | \[Long]     |
| companySubjectId | \[String]   |
| userCodeId       | \[String]   |
| relations        | \[Map\[]]   |

***

## deleteFTPDirectory

Delete a remote directory stored in a folder of the FTP server.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument        | Description                                                                                                                           |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| protocol        | \[String]                                                                                                                             |
| host            | \[String] host FTP server host                                                                                                        |
| port            | \[Integer] port FTP server port                                                                                                       |
| useSSL          | \[Boolean] useSSL flag used to open a secure connection with the FTP server                                                           |
| username        | \[String] username username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| password        | \[String] password password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| remoteDir       | \[String] remoteDir folder in the FTP server to remove                                                                                |
| forceIsNotEmpty | \[Boolean] forceIsNotEmpty if true force deletion of content                                                                          |
| sessionTimeout  | \[Integer] sessionTimeout seconds of timeout session                                                                                  |

***

## deleteFTPFile

Delete a remote file stored in a folder of the FTP server.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument       | Description                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| protocol       | \[String]                                                                                                                             |
| host           | \[String] host FTP server host                                                                                                        |
| port           | \[Integer] port FTP server port                                                                                                       |
| useSSL         | \[Boolean] useSSL flag used to open a secure connection with the FTP server                                                           |
| username       | \[String] username username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| password       | \[String] password password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| remoteDir      | \[String] remoteDir folder in the FTP server to read                                                                                  |
| fileName       | \[String] fileName file to delete                                                                                                     |
| sessionTimeout | \[Integer] sessionTimeout seconds of timeout session                                                                                  |

***

## deleteFTPFile

Delete a remote file stored in a folder of the FTP server.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument  | Description                                                                                                                           |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| protocol  | \[String]                                                                                                                             |
| host      | \[String] host FTP server host                                                                                                        |
| port      | \[Integer] port FTP server port                                                                                                       |
| useSSL    | \[Boolean] useSSL flag used to open a secure connection with the FTP server                                                           |
| username  | \[String] username username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| password  | \[String] password password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| remoteDir | \[String] remoteDir folder in the FTP server to read                                                                                  |
| fileName  | \[String] fileName file to delete                                                                                                     |

***

## deleteFTPFile \[Deprecated]

Delete a remote file stored in a folder of the FTP server.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument  | Description                                                                                                                           |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| host      | \[String] host FTP server host                                                                                                        |
| port      | \[Integer] port FTP server port                                                                                                       |
| useSSL    | \[Boolean] useSSL flag used to open a secure connection with the FTP server                                                           |
| username  | \[String] username username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| password  | \[String] password password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| remoteDir | \[String] remoteDir folder in the FTP server to read                                                                                  |
| fileName  | \[String] fileName file to delete                                                                                                     |

***

## deleteMappedObject

Execute an DELETE SQL statement into the specified table, starting from the javascript NEUTRAL object passed as argument,\
containing many more attributes, not all related to such a table.\
The right attributes to take into account from the neutral object will be selected using the mapping defined to the specified data model and table name.\
All object attributes will be converted to database fields (uncamel format); example: productCode -> PRODUCT\_CODE\
A pks set is also needed in order to generate the right WHERE clause

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument             | Description                                                                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| neutralObject        | \[Map] neutralObject javascript object to insert into the specified table                                                                  |
| tableName            | \[String] tableName table name which must be defined as a writable object                                                                  |
| dataModelId          | \[Long] dataModelId data model id, which MUST have MAPPER type, containing the mapping needed to extract the right attributes              |
| separatedTransaction | \[Boolean] separatedTransaction flag used to define if this query has to be perfomed in a separated transaction                            |
| interruptExecution   | \[Boolean] interruptExecution flag used to defined if the whole server side transation must be interruped and rollbacked in case of errors |
| pks                  | \[String\[]]                                                                                                                               |

***

## deleteMappedObject

Execute an DELETE SQL statement into the specified table, starting from the javascript NEUTRAL object passed as argument,\
containing many more attributes, not all related to such a table.\
The right attributes to take into account from the neutral object will be selected using the mapping defined to the specified data model and table name.\
All object attributes will be converted to database fields (uncamel format); example: productCode -> PRODUCT\_CODE\
A pks set is also needed in order to generate the right WHERE clause

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.deleteMappedObject(
	neutralObject, //Map
	dataModelId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	pks //String[]
);
```
{% endcode %}

Details

| Argument             | Description                                                                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| neutralObject        | \[Map] neutralObject javascript object to insert into the specified table                                                                  |
| dataModelId          | \[Long] dataModelId data model id, which MUST have MAPPER type, containing the mapping needed to extract the right attributes              |
| separatedTransaction | \[Boolean] separatedTransaction flag used to define if this query has to be perfomed in a separated transaction                            |
| interruptExecution   | \[Boolean] interruptExecution flag used to defined if the whole server side transation must be interruped and rollbacked in case of errors |
| pks                  | \[String\[]]                                                                                                                               |

***

## deleteMessages

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument               | Description                                                                                                                                                                                                              |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| server                 | \[String]                                                                                                                                                                                                                |
| port                   | \[Integer]                                                                                                                                                                                                               |
| username               | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| password               | \[String]                                                                                                                                                                                                                |
| protocol               | \[String]                                                                                                                                                                                                                |
| useTLS                 | \[Boolean] flag used to enabled the TLS mode                                                                                                                                                                             |
| messageIdsToDelete     | \[String\[]]                                                                                                                                                                                                             |
| messageNumbersToDelete | \[Integer\[]]                                                                                                                                                                                                            |
| folderName             | \[String]                                                                                                                                                                                                                |
| trashName              | \[String]                                                                                                                                                                                                                |

***

## deleteMessages

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument               | Description                                                                                                                                                                                                              |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| server                 | \[String]                                                                                                                                                                                                                |
| port                   | \[Integer]                                                                                                                                                                                                               |
| username               | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| password               | \[String]                                                                                                                                                                                                                |
| protocol               | \[String]                                                                                                                                                                                                                |
| useTLS                 | \[Boolean] flag used to enabled the TLS mode                                                                                                                                                                             |
| messagesToDelete       | \[String\[]]                                                                                                                                                                                                             |
| startSendDateFilter    | \[Date]                                                                                                                                                                                                                  |
| endSendDateFilter      | \[Date]                                                                                                                                                                                                                  |
| startReceiveDateFilter | \[Date]                                                                                                                                                                                                                  |
| endReceiveDateFilter   | \[Date]                                                                                                                                                                                                                  |
| folderName             | \[String]                                                                                                                                                                                                                |
| trashName              | \[String]                                                                                                                                                                                                                |

***

## deleteObject

Execute a DELETE SQL statement into the specified table, starting from the javascript object passed as argument.\
All object attributes will be converted to database fields (uncamel format); example: productCode -> PRODUCT\_CODE

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.deleteObject(
	obj, //Map
	tableName, //String
	dataSourceId, //Long
	separatedTransaction, //Boolean
	interruptExecution //Boolean
);
```
{% endcode %}

Details

| Argument             | Description                                                                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| obj                  | \[Map]                                                                                                                                     |
| tableName            | \[String] tableName table name which must be defined as a writable object (iut must have a data mode)                                      |
| dataSourceId         | \[Long] dataSourceId optional data source id                                                                                               |
| separatedTransaction | \[Boolean] separatedTransaction flag used to define if this query has to be perfomed in a separated transaction                            |
| interruptExecution   | \[Boolean] interruptExecution flag used to defined if the whole server side transation must be interruped and rollbacked in case of errors |

***

## deleteValueImport

Cancella fisicamente tutti i dati riguardanti l'import

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.deleteValueImport(
	valueImportId //Long
);
```
{% endcode %}

Details

| Argument      | Description |
| ------------- | ----------- |
| valueImportId | \[Long]     |

***

## dequeueProcess

return `false` if the process has been already terminated or does not exist

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.dequeueProcess(
	queueName, //String
	progressive //Long
);
```
{% endcode %}

Details

| Argument    | Description |
| ----------- | ----------- |
| queueName   | \[String]   |
| progressive | \[Long]     |

***

## disableValueImport

Cancella logicamente la testata dell'import

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.disableValueImport(
	valueImportId //Long
);
```
{% endcode %}

Details

| Argument      | Description |
| ------------- | ----------- |
| valueImportId | \[Long]     |

***

## duplicateBlobInPRM17

Load a binary file into a database field identified by "blobField" attribute in the table identified by "tableName"\
for an already existing record having the primary key identified by Array "pkNames" and values "pkValues".\
The file to load into the BLOB field is retrieved starting from the specified dirId + filename

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Integer type
var risp = utils.duplicateBlobInPRM17(
	appId, //String
	fromCompanyId, //String
	toCompanyId //String
);
```
{% endcode %}

Details

| Argument      | Description |
| ------------- | ----------- |
| appId         | \[String]   |
| fromCompanyId | \[String]   |
| toCompanyId   | \[String]   |

***

## duplicateValueImports

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument            | Description                                        |
| ------------------- | -------------------------------------------------- |
| valueImportId       | \[Long]                                            |
| directoryId         | \[Long] dir id used to find or write or read files |
| fileName            | \[String] file name                                |
| description         | \[String]                                          |
| note                | \[String]                                          |
| inputData           | \[String]                                          |
| breakOnColumnsEmpty | \[Long]                                            |
| breakOnRowsEmpty    | \[Long]                                            |

***

## duplicateValueImports

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument            | Description                                        |
| ------------------- | -------------------------------------------------- |
| valueImportId       | \[Long]                                            |
| directoryId         | \[Long] dir id used to find or write or read files |
| fileName            | \[String] file name                                |
| description         | \[String]                                          |
| note                | \[String]                                          |
| inputData           | \[String]                                          |
| breakOnColumnsEmpty | \[Long]                                            |
| breakOnRowsEmpty    | \[Long]                                            |
| ignoreSheet         | \[Boolean]                                         |

***

## encodeFile

Encript a file.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Boolean type
var risp = utils.encodeFile(
	sorgDirId, //Long
	sorgFileName, //String
	destFileName, //String
	removeSorgFile //Boolean
);
```
{% endcode %}

Details

| Argument       | Description |
| -------------- | ----------- |
| sorgDirId      | \[Long]     |
| sorgFileName   | \[String]   |
| destFileName   | \[String]   |
| removeSorgFile | \[Boolean]  |

***

## encodePassword

Encript a password.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.encodePassword(
	password //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| password | \[String]   |

***

## enqueueAction

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument        | Description                                                                                                                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| queueName       | \[String]                                                                                                                                                                                                               |
| actionId        | \[Long]                                                                                                                                                                                                                 |
| params          | \[Map] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |
| priority        | \[String]                                                                                                                                                                                                               |
| processWaitTime | \[Long]                                                                                                                                                                                                                 |
| logExecution    | \[Boolean]                                                                                                                                                                                                              |

***

## enqueueActionWithNote

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument        | Description                                                                                                                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| queueName       | \[String]                                                                                                                                                                                                               |
| actionId        | \[Long]                                                                                                                                                                                                                 |
| params          | \[Map] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |
| priority        | \[String]                                                                                                                                                                                                               |
| processWaitTime | \[Long]                                                                                                                                                                                                                 |
| logExecution    | \[Boolean]                                                                                                                                                                                                              |
| note            | \[String]                                                                                                                                                                                                               |

***

## enqueueActionWithNoteAsString

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument        | Description                                                                                                                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| queueName       | \[String]                                                                                                                                                                                                               |
| actionId        | \[Long]                                                                                                                                                                                                                 |
| params          | \[Map] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |
| priority        | \[String]                                                                                                                                                                                                               |
| processWaitTime | \[Long]                                                                                                                                                                                                                 |
| logExecution    | \[Boolean]                                                                                                                                                                                                              |
| note            | \[String]                                                                                                                                                                                                               |
| maxRetries      | \[Integer]                                                                                                                                                                                                              |

***

## enqueueActionsFromSqlQuery

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.enqueueActionsFromSqlQuery(
	queueName, //String
	payload, //String
	actionId, //Long
	datasourceId, //Long
	sqlQuery, //String
	params //Object[]
);
```
{% endcode %}

Details

| Argument     | Description                                                                                                                                                                                                                   |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| queueName    | \[String]                                                                                                                                                                                                                     |
| payload      | \[String]                                                                                                                                                                                                                     |
| actionId     | \[Long]                                                                                                                                                                                                                       |
| datasourceId | \[Long] num value; it can be null and used to specify a different db to use with the sql statement                                                                                                                            |
| sqlQuery     | \[String]                                                                                                                                                                                                                     |
| params       | \[Object\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## enqueueShellCommand

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Long type
var risp = utils.enqueueShellCommand(
	queueName, //String
	cmd, //String
	priority, //String
	processWaitTime, //Long
	logExecution //Boolean
);
```
{% endcode %}

Details

| Argument        | Description |
| --------------- | ----------- |
| queueName       | \[String]   |
| cmd             | \[String]   |
| priority        | \[String]   |
| processWaitTime | \[Long]     |
| logExecution    | \[Boolean]  |

***

## enqueueWebService

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument        | Description                                                                                                                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| queueName       | \[String]                                                                                                                                                                                                               |
| url             | \[String]                                                                                                                                                                                                               |
| params          | \[Map] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |
| priority        | \[String]                                                                                                                                                                                                               |
| processWaitTime | \[Long]                                                                                                                                                                                                                 |
| logExecution    | \[Boolean]                                                                                                                                                                                                              |

***

## error

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.error(
	msg //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| msg      | \[String]   |

***

## executeMappedQuery

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument             | Description                                                                                                                                                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| where                | \[String] String: where condition for query                                                                                                                                                                                   |
| groupBy              | \[String]                                                                                                                                                                                                                     |
| having               | \[String]                                                                                                                                                                                                                     |
| orderBy              | \[String]                                                                                                                                                                                                                     |
| dataModelId          | \[Long] data model id, used to compare the attribute value types                                                                                                                                                              |
| separatedTransaction | \[Boolean] boolean value; if true, the SQL instruction is executed on a separated transaction which is immediately committed (as for a REQUIRE\_NEW EJB directive)                                                            |
| interruptExecution   | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue                                                     |
| pars                 | \[Object\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## executeMappedQueryWithCallback

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
function callbackFunName(data) {
	
}

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
{% endcode %}

Details

| Argument             | Description                                                                                                                                                                                                                                       |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| callbackFunName      | \[String] string value: the name of a callback function, defined inside the action, which will be automatically invoked for each record read from the SQL query. This method must have an argument, which is a js object, representing the record |
| where                | \[String] String: where condition for query                                                                                                                                                                                                       |
| groupBy              | \[String]                                                                                                                                                                                                                                         |
| having               | \[String]                                                                                                                                                                                                                                         |
| orderBy              | \[String]                                                                                                                                                                                                                                         |
| dataModelId          | \[Long] data model id, used to compare the attribute value types                                                                                                                                                                                  |
| separatedTransaction | \[Boolean] boolean value; if true, the SQL instruction is executed on a separated transaction which is immediately committed (as for a REQUIRE\_NEW EJB directive)                                                                                |
| interruptExecution   | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue                                                                         |
| pars                 | \[Object\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query.                     |

***

## executeQuery

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.executeQuery(
	sql, //String
	dataStoreId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	pars //Object[]
);
```
{% endcode %}

Details

| Argument             | Description                                                                                                                                                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sql                  | \[String] string value: sql to execute; it can contain ?                                                                                                                                                                      |
| dataStoreId          | \[Long] num value; it can be null and used to specify a different db to use with the sql statement                                                                                                                            |
| separatedTransaction | \[Boolean] boolean value; if true, the SQL instruction is executed on a separated transaction which is immediately committed (as for a REQUIRE\_NEW EJB directive)                                                            |
| interruptExecution   | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue                                                     |
| pars                 | \[Object\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## executeQueryReplaceVariables

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument             | Description                                                                                                                                                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sql                  | \[String] string value: sql to execute; it can contain ?                                                                                                                                                                      |
| variablePrefix       | \[String]                                                                                                                                                                                                                     |
| dataStoreId          | \[Long] num value; it can be null and used to specify a different db to use with the sql statement                                                                                                                            |
| separatedTransaction | \[Boolean] boolean value; if true, the SQL instruction is executed on a separated transaction which is immediately committed (as for a REQUIRE\_NEW EJB directive)                                                            |
| interruptExecution   | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue                                                     |
| pars                 | \[Object\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## executeQueryWithAlias

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument             | Description                                                                                                                                                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sql                  | \[String] string value: sql to execute; it can contain ?                                                                                                                                                                      |
| dataStoreId          | \[Long] num value; it can be null and used to specify a different db to use with the sql statement                                                                                                                            |
| separatedTransaction | \[Boolean] boolean value; if true, the SQL instruction is executed on a separated transaction which is immediately committed (as for a REQUIRE\_NEW EJB directive)                                                            |
| interruptExecution   | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue                                                     |
| dataModelId          | \[Long] data model id, used to compare the attribute value types                                                                                                                                                              |
| pars                 | \[Object\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## executeQueryWithCallback

Execute a SQL query in the specified schema (data source) and invoke a callback function for each row read by the query.\
The specified callback function must have an argument which will receive a js object related to the record passed forward.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
function callbackFunName(data) {
	
}

utils.executeQueryWithCallback(
	callbackFunName, //String
	sql, //String
	dataStoreId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	pars //Object[]
);
```
{% endcode %}

Details

| Argument             | Description                                                                                       |
| -------------------- | ------------------------------------------------------------------------------------------------- |
| callbackFunName      | \[String] callbackFunName callback function name, invoked for each record read from the SQL query |
| sql                  | \[String] sql SQL query                                                                           |
| dataStoreId          | \[Long] dataStoreId data source id, representing a specific database schema                       |
| separatedTransaction | \[Boolean] separatedTransaction flag true                                                         |
| interruptExecution   | \[Boolean] interruptExecution flag true                                                           |
| pars                 | \[Object\[]] pars optional parameters required by the SQL query, each expressed by a ?            |

***

## executeShellCommand

Execute a command on the shell. Optionally, a list of arguments can be passed to the command.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.executeShellCommand(
	command, //String
	arguments //String[]
);
```
{% endcode %}

Details

| Argument  | Description                                                                                                                                  |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| command   | \[String] command command to execute; it must include the absolute path to the command and must end with a .sh or .bat with no spaces within |
| arguments | \[String\[]] arguments zero or more String type arguments; \[] otherwise                                                                     |

***

## executeSql

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Integer type
var risp = utils.executeSql(
	sql, //String
	dataStoreId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	pars //Object[]
);
```
{% endcode %}

Details

| Argument             | Description                                                                                                                                                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sql                  | \[String] string value: sql to execute; it can contain ?                                                                                                                                                                      |
| dataStoreId          | \[Long] num value; it can be null and used to specify a different db to use with the sql statement                                                                                                                            |
| separatedTransaction | \[Boolean] boolean value; if true, the SQL instruction is executed on a separated transaction which is immediately committed (as for a REQUIRE\_NEW EJB directive)                                                            |
| interruptExecution   | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue                                                     |
| pars                 | \[Object\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## executeSqlBatch

Execute once the specified SQL query and for each records read:

* if updateSql has been specified:
  * execute massively N updates, where N is 10k (or blockSize if specified)
  * execute a commit
  * if there are 0 records updated, only for those ones, execute the insertSql (if specified)
  * continue until the end of the result set
* otherwise, the insertSql must be specified, therefore:
  * execute massively N inserts, where N is 10k (or blockSize if specified)
  * execute a commit
  * continue until the end of the result set

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Long type
var risp = utils.executeSqlBatch(
	settings //Map
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| settings | \[Map]      |

***

## executeSqlFile

Execute a series of SQL statements, stored in the specified file.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Integer type
var risp = utils.executeSqlFile(
	sqlFile, //String
	dataStoreId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	pars //Object[]
);
```
{% endcode %}

Details

| Argument             | Description                                                                                                                          |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| sqlFile              | \[String] sqlFile absolute path + file name, related to the SQL script to execute                                                    |
| dataStoreId          | \[Long] dataStoreId optional datastore identifier to use when executing the SQL statements                                           |
| separatedTransaction | \[Boolean] separatedTransaction flag used to define if the SQL statements must be executed in a separated transaction                |
| interruptExecution   | \[Boolean] interruptExecution flag used to define if the JS action has to be interrupted and a rollback performed, in case of errors |
| pars                 | \[Object\[]] pars parameters required by the statements, included between square brackets \[]                                        |

***

## executeSqlNoLog

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Integer type
var risp = utils.executeSqlNoLog(
	sql, //String
	dataStoreId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	pars //Object[]
);
```
{% endcode %}

Details

| Argument             | Description                                                                                                                                                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sql                  | \[String] string value: sql to execute; it can contain ?                                                                                                                                                                      |
| dataStoreId          | \[Long] num value; it can be null and used to specify a different db to use with the sql statement                                                                                                                            |
| separatedTransaction | \[Boolean] boolean value; if true, the SQL instruction is executed on a separated transaction which is immediately committed (as for a REQUIRE\_NEW EJB directive)                                                            |
| interruptExecution   | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue                                                     |
| pars                 | \[Object\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## executeSqlReplaceVariables

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument             | Description                                                                                                                                                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sql                  | \[String] string value: sql to execute; it can contain ?                                                                                                                                                                      |
| variablePrefix       | \[String]                                                                                                                                                                                                                     |
| dataStoreId          | \[Long] num value; it can be null and used to specify a different db to use with the sql statement                                                                                                                            |
| separatedTransaction | \[Boolean] boolean value; if true, the SQL instruction is executed on a separated transaction which is immediately committed (as for a REQUIRE\_NEW EJB directive)                                                            |
| interruptExecution   | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue                                                     |
| pars                 | \[Object\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## executeStoredFunction

Starting from a MAPPER type data model, execute a SQL query automatically generated, starting from

* the SELECT clause passed as argument
* the FROM clause defined thorugh a mapping to a specific data source id (inherited at application level)
* the WHERE, ORDER BY, GROUP BY and HAVING clauses specified here\
  This base SQL query is then enriched, by adding filtering/sorting conditions defined through a ListCommand object coming from the HTTP request.\
  ListCommand class attribute can also contain pagination settings, read through the GetListResource class.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.executeStoredFunction(
	sql, //String
	dataStoreId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	pars //Object[]
);
```
{% endcode %}

Details

| Argument             | Description                                                                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| sql                  | \[String] string value: sql to execute; it can contain ?                                                                                   |
| dataStoreId          | \[Long] num value; it can be null and used to specify a different db to use with the sql statement                                         |
| separatedTransaction | \[Boolean] separatedTransaction flag used to define if this query has to be perfomed in a separated transaction                            |
| interruptExecution   | \[Boolean] interruptExecution flag used to defined if the whole server side transation must be interruped and roolbacked in case of errors |
| pars                 | \[Object\[]] pars optional (can be expressed as \[] in js) list of parameters binded to ? variables in the SQL query                       |

***

## executeValueImportFunction

Return a result of function from values map

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Object type
var risp = utils.executeValueImportFunction(
	function, //String
	sheetName, //String
	values //Map
);
```
{% endcode %}

Details

| Argument  | Description                                                                                           |
| --------- | ----------------------------------------------------------------------------------------------------- |
| function  | \[String] function example: "sum(sum(cellValue("E4"), cellValue("E8")), cellValue("FoglioProva!E9"))" |
| sheetName | \[String] name of sheet in xls, xlsx or Google Spreadsheet file                                       |
| values    | \[Map] values {"FoglioProva!E4": valueE4}, {"FoglioProva!E8": valueE8}, {"FoglioProva!E9": valueE9},  |

***

## existUser

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Prm01User type
var risp = utils.existUser(
	companyId, //String
	siteId, //Long
	userCodeId //String
);
```
{% endcode %}

Details

| Argument   | Description |
| ---------- | ----------- |
| companyId  | \[String]   |
| siteId     | \[Long]     |
| userCodeId | \[String]   |

***

## exportFromExcelFile

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.exportFromExcelFile(
	sourceDirId, //Long
	sourceFileName, //String
	destDirId, //Long
	destFileName, //String
	areas //List
);
```
{% endcode %}

Details

| Argument       | Description |
| -------------- | ----------- |
| sourceDirId    | \[Long]     |
| sourceFileName | \[String]   |
| destDirId      | \[Long]     |
| destFileName   | \[String]   |
| areas          | \[List]     |

***

## fileExists

Check for file existence in the local file system.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.fileExists(
	filePath //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| filePath | \[String]   |

***

## findTagsByNames

Scroll all input nodes and for each create a js object whose\
attributes are the subtags having the specified tagNames.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Map[] type
var risp = utils.findTagsByNames(
	nodes, //Map[]
	tagNames //String[]
);
```
{% endcode %}

Details

| Argument                                      | Description                                                                      |
| --------------------------------------------- | -------------------------------------------------------------------------------- |
| nodes                                         | \[Map\[]] nodes nodes to analyze                                                 |
| tagNames                                      | \[String\[]] tagNames list of tag names to compare with each subtag of each node |
| Example:                                      |                                                                                  |
| nodes = XY......                              |                                                                                  |
| getTagValues(nodes,\["firstname","lastname"]) |                                                                                  |
| will return js objects having this structure: |                                                                                  |
| { firstname: "X", lastname: "Y" }, {...}      |                                                                                  |

***

## findTagsByPath

Search for the specified path.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Map[] type
var risp = utils.findTagsByPath(
	xmlDoc, //Map[]
	path //String
);
```
{% endcode %}

Details

| Argument | Description                                                  |
| -------- | ------------------------------------------------------------ |
| xmlDoc   | \[Map\[]] xmlDoc XML document parsed through parseXML method |
| path     | \[String] path a tags path, expressed as tag1/tag2/tag3...   |

***

## forceCompanyId

Force the company id to use in UserInfo.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.forceCompanyId(
	companyId //String
);
```
{% endcode %}

Details

| Argument  | Description |
| --------- | ----------- |
| companyId | \[String]   |

***

## forceStartProcess

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.forceStartProcess(
	queueName, //String
	progressive //Long
);
```
{% endcode %}

Details

| Argument    | Description |
| ----------- | ----------- |
| queueName   | \[String]   |
| progressive | \[Long]     |

***

## formatNumber

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.formatNumber(
	value, //Number
	grouping, //Boolean
	groupingSymbol, //String
	decimals, //Number
	decimalSymbol //String
);
```
{% endcode %}

Details

| Argument       | Description |
| -------------- | ----------- |
| value          | \[Number]   |
| grouping       | \[Boolean]  |
| groupingSymbol | \[String]   |
| decimals       | \[Number]   |
| decimalSymbol  | \[String]   |

***

## forwardEmail

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument     | Description                                                                                                                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| server       | \[String]                                                                                                                                                                                                                |
| port         | \[Integer]                                                                                                                                                                                                               |
| username     | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| password     | \[String]                                                                                                                                                                                                                |
| protocol     | \[String]                                                                                                                                                                                                                |
| useTLS       | \[Boolean] flag used to enabled the TLS mode                                                                                                                                                                             |
| to           | \[String]                                                                                                                                                                                                                |
| subject      | \[String]                                                                                                                                                                                                                |
| text         | \[String]                                                                                                                                                                                                                |
| messageId    | \[String]                                                                                                                                                                                                                |
| smtpHost     | \[String]                                                                                                                                                                                                                |
| smtpPort     | \[String] port of SMTP server                                                                                                                                                                                            |
| smtpProtocol | \[String]                                                                                                                                                                                                                |
| smtpUsername | \[String] SMTP username for authentication                                                                                                                                                                               |
| smtpPassword | \[String]                                                                                                                                                                                                                |

***

## generateXML

Convert the specified javascript object into an XML document, having the same structure,\
i.e. attribute names are converted to tags and attribute values as tag values.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument    | Description                                                                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| jsonObj     | \[Map] jsonObj javascript object to convert                                                                                                       |
| header      | \[String] header string representing the XML header; can be null                                                                                  |
| rootNode    | \[String] rootNode string representing the root XML node, expressed as                                                                            |
| dirId       | \[Long] dirId directory id where saving the XML document                                                                                          |
| fileName    | \[String] fileName file name to use for the XML document to save                                                                                  |
| attrMapping | \[String>] attrMapping mapping between attribute names and tags, expressed as a javascript object; can be null                                    |
| listMapping | \[Map] listMapping mapping between an attribute having a list of values and the tag name to use to identify each element of the list; can be null |
| settings    | \[Map] settings additional settings; CANNOT be null                                                                                               |

***

## getAllFilterParams

return "\['ABC',2]"

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Object[] type
var risp = utils.getAllFilterParams();
```
{% endcode %}

***

## getAllFilterWhere

return " UPPER(TMP.ITEM\_CODE) like ? AND TMP.BARCODE = ? "

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getAllFilterWhere(
	table //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| table    | \[String]   |

***

## getBasePath

return absolute path of WEB-INF/classes folder of Platform application

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getBasePath();
```
{% endcode %}

***

## getBinaryContent

Execute an HTTP(s) connection and fetch the result, expresses as a binary content

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.getBinaryContent(
	toFile, //String
	uri, //String
	replaceVariables, //boolean
	httpMethod, //String
	settings //Map
);
```
{% endcode %}

Details

| Argument         | Description                                                                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| toFile           | \[String] toFile absolute path including the file name, related to the local binary file to create and fill in with the result of this HTTP request |
| uri              | \[String] uri URI, expressed as http:// or https:// with or without variables, expressed as :XXX                                                    |
| replaceVariables | \[boolean] replaceVariables flag used to replace variables within the uri (variables are expressed as :XXX)                                         |
| httpMethod       | \[String] httpMethod (optional: can be null); if specified, it defines the HTTP method: GET, POST                                                   |
| settings         | \[Map]                                                                                                                                              |

***

## getBinaryContent

Execute an HTTP(s) connection and fetch the result, expresses as a binary content

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument         | Description                                                                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| toFile           | \[String] toFile absolute path including the file name, related to the local binary file to create and fill in with the result of this HTTP request |
| uri              | \[String] uri URI, expressed as http:// or https:// with or without variables, expressed as :XXX                                                    |
| replaceVariables | \[boolean] replaceVariables flag used to replace variables within the uri (variables are expressed as :XXX)                                         |
| httpMethod       | \[String] httpMethod (optional: can be null); if specified, it defines the HTTP method: GET, POST                                                   |
| contentType      | \[String] contentType (optional: can be null); if specified, it defines the content type request (e.g. application/json)                            |
| requestBody      | \[String] requestBody (optional: can be null); if specified, it defines the request body, expressed as a String (e.g. a JSON or XML content)        |
| user             | \[String] user (optional: can be null); if specified, it defines the username for a BASIC authentication                                            |
| pwd              | \[String] pwd (optional: can be null); if specified, it defines the password for a BASIC authentication                                             |

***

## getBinaryContentWithSettings

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument         | Description                                                                                                |
| ---------------- | ---------------------------------------------------------------------------------------------------------- |
| toFile           | \[String]                                                                                                  |
| uri              | \[String]                                                                                                  |
| replaceVariables | \[boolean]                                                                                                 |
| httpMethod       | \[String] (optional: can be null); if specified, it defines the HTTP method: GET, POST, PATCH, PUT, DELETE |
| contentType      | \[String]                                                                                                  |
| requestBody      | \[String]                                                                                                  |
| user             | \[String]                                                                                                  |
| pwd              | \[String]                                                                                                  |
| settings         | \[Map]                                                                                                     |

***

## getBlobAsBase64

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getBlobAsBase64(
	datastoreId, //Long
	sql, //String
	params //Object[]
);
```
{% endcode %}

Details

| Argument    | Description                                                                                                                                                                                                                   |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| datastoreId | \[Long]                                                                                                                                                                                                                       |
| sql         | \[String] string value: sql to execute; it can contain ?                                                                                                                                                                      |
| params      | \[Object\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## getByteDimensionOfString

Calculate the dimension of string in byte

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return long type
var risp = utils.getByteDimensionOfString(
	s //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| s        | \[String]   |

***

## getCachedProgressive

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Long type
var risp = utils.getCachedProgressive(
	settings //Map
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| settings | \[Map]      |

***

## getCatalog

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getCatalog(
	datasourceId //Long
);
```
{% endcode %}

Details

| Argument     | Description                                                                                        |
| ------------ | -------------------------------------------------------------------------------------------------- |
| datasourceId | \[Long] num value; it can be null and used to specify a different db to use with the sql statement |

***

## getCellsValue

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Map type
var risp = utils.getCellsValue(
	directoryId, //Long
	fileName, //String
	coordinates, //List
	functions //List
);
```
{% endcode %}

Details

| Argument    | Description                                        |
| ----------- | -------------------------------------------------- |
| directoryId | \[Long] dir id used to find or write or read files |
| fileName    | \[String] file name                                |
| coordinates | \[List]                                            |
| functions   | \[List]                                            |

***

## getCertMessage

Read the specified file from the source directory and extract signed data and the embedded document.\
The embedded document is then saved in the destination directory.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Map type
var risp = utils.getCertMessage(
	srcDirectoryId, //Long
	destDirectoryId, //Long
	fileName //String
);
```
{% endcode %}

Details

| Argument        | Description                                                                                                                 |
| --------------- | --------------------------------------------------------------------------------------------------------------------------- |
| srcDirectoryId  | \[Long] srcDirectoryId id used to identify a source folder in the server file system where the file to read has been stored |
| destDirectoryId | \[Long]                                                                                                                     |
| fileName        | \[String] fileName file name inside the specified folder                                                                    |

***

## getCertMessage

Read the specified file from the source directory and extract signed data and the embedded document.\
The embedded document is then saved in the destination directory.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Map type
var risp = utils.getCertMessage(
	srcFileName, //String
	destFolder //String
);
```
{% endcode %}

Details

| Argument    | Description                                                                           |
| ----------- | ------------------------------------------------------------------------------------- |
| srcFileName | \[String] srcFileName path + file name to analyze                                     |
| destFolder  | \[String] destFolder destination folder; if not specified, the srcFolder will be used |

***

## getCertMessageFromPdf

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Map type
var risp = utils.getCertMessageFromPdf(
	srcDirectoryId, //Long
	destDirectoryId, //Long
	fileName //String
);
```
{% endcode %}

Details

| Argument        | Description         |
| --------------- | ------------------- |
| srcDirectoryId  | \[Long]             |
| destDirectoryId | \[Long]             |
| fileName        | \[String] file name |

***

## getColumnsInQuery

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getColumnsInQuery(
	datastoreId, //Long
	query //String
);
```
{% endcode %}

Details

| Argument    | Description |
| ----------- | ----------- |
| datastoreId | \[Long]     |
| query       | \[String]   |

***

## getColumnsInTable

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getColumnsInTable(
	datastoreId, //Long
	tableName //String
);
```
{% endcode %}

Details

| Argument    | Description                     |
| ----------- | ------------------------------- |
| datastoreId | \[Long]                         |
| tableName   | \[String] String: name of table |

***

## getCompanyApplParameter

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getCompanyApplParameter(
	companyId, //String
	siteId, //Long
	paramId //String
);
```
{% endcode %}

Details

| Argument  | Description |
| --------- | ----------- |
| companyId | \[String]   |
| siteId    | \[Long]     |
| paramId   | \[String]   |

***

## getConversation

Get the whole conversation (list of messages), starting from the conversation id.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Con60Logs[] type
var risp = utils.getConversation(
	conversationId //Long
);
```
{% endcode %}

Details

| Argument       | Description |
| -------------- | ----------- |
| conversationId | \[Long]     |

***

## getConversationFromTag

Get the whole conversation (list of messages), starting from a tag included at some point in the conversation.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Con60Logs[] type
var risp = utils.getConversationFromTag(
	messageTag //String
);
```
{% endcode %}

Details

| Argument   | Description |
| ---------- | ----------- |
| messageTag | \[String]   |

***

## getCount

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument             | Description                                                                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tableName            | \[String] String: name of table                                                                                                                                           |
| valueColumnName      | \[String] String: column name of field to calculating counter                                                                                                             |
| incrementValue       | \[String] String: increment value for counter                                                                                                                             |
| where                | \[String] String: where condition for query                                                                                                                               |
| separatedTransaction | \[Boolean] boolean value; if true, the SQL instruction is executed on a separated transaction which is immediately committed (as for a REQUIRE\_NEW EJB directive)        |
| interruptExecution   | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |
| dataSourceId         | \[Long] num value; it can be null and used to specify a different db to use with the sql statement                                                                        |

***

## getCount

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument             | Description                                                                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tableName            | \[String] String: name of table                                                                                                                                           |
| valueColumnName      | \[String] String: column name of field to calculating counter                                                                                                             |
| incrementValue       | \[String] String: increment value for counter                                                                                                                             |
| where                | \[String] String: where condition for query                                                                                                                               |
| separatedTransaction | \[Boolean] boolean value; if true, the SQL instruction is executed on a separated transaction which is immediately committed (as for a REQUIRE\_NEW EJB directive)        |
| interruptExecution   | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |

***

## getCsvContent

Read up to the specified number of rows, starting from the specified index (0..x) from the csv file stored in the specified path and get back the content of a specific folder.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument                                                                                                       | Description                                                                                       |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| sep                                                                                                            | \[String] sep tokens separator: ; or ,                                                            |
| dirId                                                                                                          | \[String] dirId path identifier                                                                   |
| fileName                                                                                                       | \[String] fileName name of the csv file                                                           |
| startRow                                                                                                       | \[Integer] startRow row index; if null it is the first row, i.e. 0                                |
| blockSize                                                                                                      | \[Integer] blockSize max number of rows to read, if available; if null it is set to 10000         |
| removeEmptyValues                                                                                              | \[Boolean] removeEmptyValues true to remove all empty values from the list; false to mantain them |
| @parsm attributeNames, list of attributes, assigned to each column, starting from leftmost column to the right |                                                                                                   |
| attributeNames                                                                                                 | \[String\[]]                                                                                      |

***

## getCurrentDate

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Date type
var risp = utils.getCurrentDate();
```
{% endcode %}

***

## getCurrentDateAndTime

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Timestamp type
var risp = utils.getCurrentDateAndTime();
```
{% endcode %}

***

## getCurrentTime

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Time type
var risp = utils.getCurrentTime();
```
{% endcode %}

***

## getCustomApplUserVars

Get a custom parameter from the user session.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getCustomApplUserVars(
	code //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| code     | \[String]   |

***

## getCustomResource

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getCustomResource(
	entry //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| entry    | \[String]   |

***

## getDataModelAttrTypes

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getDataModelAttrTypes(
	dataModelId //Long
);
```
{% endcode %}

Details

| Argument    | Description                                                                  |
| ----------- | ---------------------------------------------------------------------------- |
| dataModelId | \[Long] dataModelId data model id, used to compare the attribute value types |

***

## getDataStoreId

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Long type
var risp = utils.getDataStoreId(
	dataStoreId //Long
);
```
{% endcode %}

Details

| Argument    | Description                                         |
| ----------- | --------------------------------------------------- |
| dataStoreId | \[Long] dataStoreId data store id to use (probably) |

***

## getDirectoryPath

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getDirectoryPath(
	directoryId //Long
);
```
{% endcode %}

Details

| Argument    | Description                              |
| ----------- | ---------------------------------------- |
| directoryId | \[Long] directoryId directory identifier |

***

## getDriverNameDefaultConnection

return driver name related to the default database connection

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getDriverNameDefaultConnection();
```
{% endcode %}

***

## getEmails

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument             | Description                                                                                                                                                                                                              |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| server               | \[String]                                                                                                                                                                                                                |
| port                 | \[Integer]                                                                                                                                                                                                               |
| username             | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| password             | \[String]                                                                                                                                                                                                                |
| protocol             | \[String]                                                                                                                                                                                                                |
| useTLS               | \[Boolean] flag used to enabled the TLS mode                                                                                                                                                                             |
| maxMessagesToRead    | \[Integer]                                                                                                                                                                                                               |
| notReadFilter        | \[Boolean]                                                                                                                                                                                                               |
| startDateFilter      | \[Date]                                                                                                                                                                                                                  |
| fromAddressFilter    | \[String]                                                                                                                                                                                                                |
| subjectFilter        | \[String]                                                                                                                                                                                                                |
| bodyFilter           | \[String]                                                                                                                                                                                                                |
| withAttachments      | \[Boolean]                                                                                                                                                                                                               |
| attachmentsPath      | \[String]                                                                                                                                                                                                                |
| folderName           | \[String]                                                                                                                                                                                                                |
| moveToFolderOnceRead | \[String]                                                                                                                                                                                                                |
| setAsSeen            | \[Boolean]                                                                                                                                                                                                               |
| deleteEmailWhenRead  | \[Boolean]                                                                                                                                                                                                               |
| debug                | \[Boolean]                                                                                                                                                                                                               |

***

## getEmails

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument               | Description                                                                                                                                                                                                              |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| server                 | \[String]                                                                                                                                                                                                                |
| port                   | \[Integer]                                                                                                                                                                                                               |
| username               | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| password               | \[String]                                                                                                                                                                                                                |
| protocol               | \[String]                                                                                                                                                                                                                |
| useTLS                 | \[Boolean] flag used to enabled the TLS mode                                                                                                                                                                             |
| maxMessagesToRead      | \[Integer]                                                                                                                                                                                                               |
| notReadFilter          | \[Boolean]                                                                                                                                                                                                               |
| startSendDateFilter    | \[Date]                                                                                                                                                                                                                  |
| endSendDateFilter      | \[Date]                                                                                                                                                                                                                  |
| startReceiveDateFilter | \[Date]                                                                                                                                                                                                                  |
| endReceiveDateFilter   | \[Date]                                                                                                                                                                                                                  |
| fromAddressFilter      | \[String]                                                                                                                                                                                                                |
| subjectFilter          | \[String]                                                                                                                                                                                                                |
| bodyFilter             | \[String]                                                                                                                                                                                                                |
| withAttachments        | \[Boolean]                                                                                                                                                                                                               |
| attachmentsPath        | \[String]                                                                                                                                                                                                                |
| folderName             | \[String]                                                                                                                                                                                                                |
| moveToFolderOnceRead   | \[String]                                                                                                                                                                                                                |
| setAsSeen              | \[Boolean]                                                                                                                                                                                                               |
| deleteEmailWhenRead    | \[Boolean]                                                                                                                                                                                                               |
| debug                  | \[Boolean]                                                                                                                                                                                                               |

***

## getEmailsWithSettings

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument               | Description                                                                                                                                                                                                              |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| server                 | \[String]                                                                                                                                                                                                                |
| port                   | \[Integer]                                                                                                                                                                                                               |
| username               | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| password               | \[String]                                                                                                                                                                                                                |
| protocol               | \[String]                                                                                                                                                                                                                |
| useTLS                 | \[Boolean] flag used to enabled the TLS mode                                                                                                                                                                             |
| maxMessagesToRead      | \[Integer]                                                                                                                                                                                                               |
| notReadFilter          | \[Boolean]                                                                                                                                                                                                               |
| startSendDateFilter    | \[Date]                                                                                                                                                                                                                  |
| endSendDateFilter      | \[Date]                                                                                                                                                                                                                  |
| startReceiveDateFilter | \[Date]                                                                                                                                                                                                                  |
| endReceiveDateFilter   | \[Date]                                                                                                                                                                                                                  |
| fromAddressFilter      | \[String]                                                                                                                                                                                                                |
| subjectFilter          | \[String]                                                                                                                                                                                                                |
| bodyFilter             | \[String]                                                                                                                                                                                                                |
| withAttachments        | \[Boolean]                                                                                                                                                                                                               |
| attachmentsPath        | \[String]                                                                                                                                                                                                                |
| folderName             | \[String]                                                                                                                                                                                                                |
| moveToFolderOnceRead   | \[String]                                                                                                                                                                                                                |
| setAsSeen              | \[Boolean]                                                                                                                                                                                                               |
| deleteEmailWhenRead    | \[Boolean]                                                                                                                                                                                                               |
| debug                  | \[Boolean]                                                                                                                                                                                                               |
| settings               | \[Map]                                                                                                                                                                                                                   |

***

## getEncToken

Encript a token.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getEncToken(
	pars //String[]
);
```
{% endcode %}

Details

| Argument | Description                                                                                                                                                                                                                   |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pars     | \[String\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## getEncodedRtk

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getEncodedRtk(
	pars //String[]
);
```
{% endcode %}

Details

| Argument | Description                                                                                                                                                                                                                   |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pars     | \[String\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## getEntriesList

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument             | Description |
| -------------------- | ----------- |
| host                 | \[String]   |
| port                 | \[Integer]  |
| baseDN               | \[String]   |
| ldapUsername         | \[String]   |
| ldapPassword         | \[String]   |
| searchAttributes     | \[String]   |
| attributesListToRead | \[String>]  |

***

## getEnvironment

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getEnvironment();
```
{% endcode %}

***

## getExcelRowsBlock

Read a block of rows from xls or xlsx file

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument       | Description                                        |
| -------------- | -------------------------------------------------- |
| dirId          | \[Long] dir id used to find or write or read files |
| fileName       | \[String] file name                                |
| sheetIndex     | \[Long] sheetIndex (1, 2, 3...)                    |
| fromRow        | \[Long] fromRow (1, 2, 3...)                       |
| toRow          | \[Long]                                            |
| attributeNames | \[String\[]]                                       |

***

## getFile

Download a file from the FTP server and store it in the specified LOCAL folder.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument       | Description                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| protocol       | \[String]                                                                                                                             |
| host           | \[String] host FTP server host                                                                                                        |
| port           | \[Integer] port FTP server port                                                                                                       |
| useSSL         | \[Boolean] useSSL flag used to open a secure connection with the FTP server                                                           |
| username       | \[String] username username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| password       | \[String] password password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| ftpDir         | \[String] ftpDir folder in the FTP server where the file to download resides                                                          |
| ftpFileName    | \[String] ftpFileName file name in the FTP sever to download                                                                          |
| localFile      | \[String] localFile folder+file name in the local file system where storing the downloaded file                                       |
| sessionTimeout | \[Integer] sessionTimeout seconds of timeout session                                                                                  |
| charset        | \[String] charset charset to use when writing local file                                                                              |

***

## getFile

Download a file from the FTP server and store it in the specified LOCAL folder.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument       | Description                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| protocol       | \[String]                                                                                                                             |
| host           | \[String] host FTP server host                                                                                                        |
| port           | \[Integer] port FTP server port                                                                                                       |
| useSSL         | \[Boolean] useSSL flag used to open a secure connection with the FTP server                                                           |
| username       | \[String] username username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| password       | \[String] password password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| ftpDir         | \[String] ftpDir folder in the FTP server where the file to download resides                                                          |
| ftpFileName    | \[String] ftpFileName file name in the FTP sever to download                                                                          |
| localFile      | \[String] localFile folder+file name in the local file system where storing the downloaded file                                       |
| sessionTimeout | \[Integer] sessionTimeout seconds of timeout session                                                                                  |

***

## getFile

Download a file from the FTP server and store it in the specified LOCAL folder.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument    | Description                                                                                                                           |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| protocol    | \[String]                                                                                                                             |
| host        | \[String] host FTP server host                                                                                                        |
| port        | \[Integer] port FTP server port                                                                                                       |
| useSSL      | \[Boolean] useSSL flag used to open a secure connection with the FTP server                                                           |
| username    | \[String] username username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| password    | \[String] password password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| ftpDir      | \[String] ftpDir folder in the FTP server where the file to download resides                                                          |
| ftpFileName | \[String] ftpFileName file name in the FTP sever to download                                                                          |
| localFile   | \[String] localFile folder+file name in the local file system where storing the downloaded file                                       |

***

## getFile \[Deprecated]

Download a file from the FTP server and store it in the specified LOCAL folder.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument    | Description                                                                                                                           |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| host        | \[String] host FTP server host                                                                                                        |
| port        | \[Integer] port FTP server port                                                                                                       |
| useSSL      | \[Boolean] useSSL flag used to open a secure connection with the FTP server                                                           |
| username    | \[String] username username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| password    | \[String] password password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| ftpDir      | \[String] ftpDir folder in the FTP server where the file to download resides                                                          |
| ftpFileName | \[String] ftpFileName file name in the FTP sever to download                                                                          |
| localFile   | \[String] localFile folder+file name in the local file system where storing the downloaded file                                       |

***

## getFileLength

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return long type
var risp = utils.getFileLength(
	fileAbsolutePath //String
);
```
{% endcode %}

Details

| Argument         | Description |
| ---------------- | ----------- |
| fileAbsolutePath | \[String]   |

***

## getFiles

Get a folder content in the FTP server, filtered according to the specified filter.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument       | Description                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| protocol       | \[String]                                                                                                                             |
| host           | \[String] host FTP server host                                                                                                        |
| port           | \[Integer] port FTP server port                                                                                                       |
| useSSL         | \[Boolean] useSSL flag used to open a secure connection with the FTP server                                                           |
| username       | \[String] username username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| password       | \[String] password password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| remoteDir      | \[String] remoteDir folder in the FTP server to read                                                                                  |
| fileFilter     | \[String] fileFilter (optional) parameter to use to filter files to read (e.g. .jpg)                                                  |
| sessionTimeout | \[Integer] sessionTimeout seconds of timeout session                                                                                  |

***

## getFiles

Get a folder content in the FTP server, filtered according to the specified filter.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String[] type
var risp = utils.getFiles(
	dirId //Long
);
```
{% endcode %}

Details

| Argument | Description                |
| -------- | -------------------------- |
| dirId    | \[Long] dirId directory id |

***

## getFiles

Get a folder content in the FTP server, filtered according to the specified filter.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument   | Description                                                                                                                           |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| protocol   | \[String]                                                                                                                             |
| host       | \[String] host FTP server host                                                                                                        |
| port       | \[Integer] port FTP server port                                                                                                       |
| useSSL     | \[Boolean] useSSL flag used to open a secure connection with the FTP server                                                           |
| username   | \[String] username username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| password   | \[String] password password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| remoteDir  | \[String] remoteDir folder in the FTP server to read                                                                                  |
| fileFilter | \[String] fileFilter (optional) parameter to use to filter files to read (e.g. .jpg)                                                  |

***

## getFiles \[Deprecated]

Get a folder content in the FTP server, filtered according to the specified filter.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument   | Description                                                                                                                           |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| host       | \[String] host FTP server host                                                                                                        |
| port       | \[Integer] port FTP server port                                                                                                       |
| useSSL     | \[Boolean] useSSL flag used to open a secure connection with the FTP server                                                           |
| username   | \[String] username username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| password   | \[String] password password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| remoteDir  | \[String] remoteDir folder in the FTP server to read                                                                                  |
| fileFilter | \[String] fileFilter (optional) parameter to use to filter files to read (e.g. .jpg)                                                  |

***

## getFilesInPath

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String[] type
var risp = utils.getFilesInPath(
	path //String
);
```
{% endcode %}

Details

| Argument | Description                  |
| -------- | ---------------------------- |
| path     | \[String] path absolute path |

***

## getFilterField

return " TMP.ITEM\_CODE like ? "

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getFilterField(
	attrName, //String
	fieldName //String
);
```
{% endcode %}

Details

| Argument  | Description |
| --------- | ----------- |
| attrName  | \[String]   |
| fieldName | \[String]   |

***

## getFilterParam

return "ABC"

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Object type
var risp = utils.getFilterParam(
	attrName, //String
	fieldName //String
);
```
{% endcode %}

Details

| Argument  | Description |
| --------- | ----------- |
| attrName  | \[String]   |
| fieldName | \[String]   |

***

## getFilterParams

return "\['ABC',2]"

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Object[] type
var risp = utils.getFilterParams(
	attributes //Map
);
```
{% endcode %}

Details

| Argument   | Description |
| ---------- | ----------- |
| attributes | \[Map]      |

***

## getFilterWhere

return " TMP.ITEM\_CODE like ? AND TMP.BARCODE = ? "

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getFilterWhere(
	attributes //Map
);
```
{% endcode %}

Details

| Argument   | Description |
| ---------- | ----------- |
| attributes | \[Map]      |

***

## getHtmlElements

Returns the response html given a url

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Document type
var risp = utils.getHtmlElements(
	url //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| url      | \[String]   |

***

## getHttpResponseCode

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return int type
var risp = utils.getHttpResponseCode();
```
{% endcode %}

***

## getInitialValue

return initial value for counters

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Long type
var risp = utils.getInitialValue();
```
{% endcode %}

***

## getJSONList

Convert a list of javascript objects into its JSON representation: \[...]

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getJSONList(
	aux //Map[]
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| aux      | \[Map\[]]   |

***

## getJSONObject \[Deprecated]

Convert a javascript object to its JSON representation

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getJSONObject(
	obj //Map
);
```
{% endcode %}

Details

| Argument | Description                                                        |
| -------- | ------------------------------------------------------------------ |
| obj      | \[Map] obj javascript object to convert to its JSON representation |

***

## getJSONString

Convert a javascript object to its JSON representation

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getJSONString(
	obj //Map
);
```
{% endcode %}

Details

| Argument | Description                                                        |
| -------- | ------------------------------------------------------------------ |
| obj      | \[Map] obj javascript object to convert to its JSON representation |

***

## getLanguageIdFromEmail

Get language id for the user identified by the specified email.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getLanguageIdFromEmail(
	email //String
);
```
{% endcode %}

Details

| Argument | Description                                        |
| -------- | -------------------------------------------------- |
| email    | \[String] email email to use when getting the user |

***

## getLanguageIdFromUsername

Get language id for the user identified by the specified username.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getLanguageIdFromUsername(
	username //String
);
```
{% endcode %}

Details

| Argument | Description                                              |
| -------- | -------------------------------------------------------- |
| username | \[String] username username to use when getting the user |

***

## getListResponse

Convert a list of javascript objects into its JSON representation: \[...]\
and embed it to a "Ext.grid.GridPanel like" data representation,\
based on "valueObjectList", "resultSetLength" and "moreRows" attributes.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getListResponse(
	list, //Map[]
	resultSetLength, //Number
	moreRows //Boolean
);
```
{% endcode %}

Details

| Argument        | Description                                                         |
| --------------- | ------------------------------------------------------------------- |
| list            | \[Map\[]] list list of javascript objects to convert to JSON format |
| resultSetLength | \[Number] resultSetLength list of objects (can be list.length)      |
| moreRows        | \[Boolean] moreRows flag used to specify                            |

***

## getMappedPartialResult

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument             | Description                                                                                                                                                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| where                | \[String] String: where condition for query                                                                                                                                                                                   |
| groupBy              | \[String]                                                                                                                                                                                                                     |
| having               | \[String]                                                                                                                                                                                                                     |
| orderBy              | \[String]                                                                                                                                                                                                                     |
| dataModelId          | \[Long] data model id, used to compare the attribute value types                                                                                                                                                              |
| separatedTransaction | \[Boolean] boolean value; if true, the SQL instruction is executed on a separated transaction which is immediately committed (as for a REQUIRE\_NEW EJB directive)                                                            |
| interruptExecution   | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue                                                     |
| attributesMap        | \[String>]                                                                                                                                                                                                                    |
| totalCount           | \[Long]                                                                                                                                                                                                                       |
| pars                 | \[Object\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## getMappedPartialResultWithFieldsToInclude

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument             | Description                                                                                                                                                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| select               | \[String]                                                                                                                                                                                                                     |
| where                | \[String] String: where condition for query                                                                                                                                                                                   |
| groupBy              | \[String]                                                                                                                                                                                                                     |
| having               | \[String]                                                                                                                                                                                                                     |
| orderBy              | \[String]                                                                                                                                                                                                                     |
| dataModelId          | \[Long] data model id, used to compare the attribute value types                                                                                                                                                              |
| separatedTransaction | \[Boolean] boolean value; if true, the SQL instruction is executed on a separated transaction which is immediately committed (as for a REQUIRE\_NEW EJB directive)                                                            |
| interruptExecution   | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue                                                     |
| attributesMap        | \[String>]                                                                                                                                                                                                                    |
| totalCount           | \[Long]                                                                                                                                                                                                                       |
| pars                 | \[Object\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## getMappedPartialResultWithFieldsToOmit

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument             | Description                                                                                                                                                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| where                | \[String] String: where condition for query                                                                                                                                                                                   |
| groupBy              | \[String]                                                                                                                                                                                                                     |
| having               | \[String]                                                                                                                                                                                                                     |
| orderBy              | \[String]                                                                                                                                                                                                                     |
| dataModelId          | \[Long] data model id, used to compare the attribute value types                                                                                                                                                              |
| separatedTransaction | \[Boolean] boolean value; if true, the SQL instruction is executed on a separated transaction which is immediately committed (as for a REQUIRE\_NEW EJB directive)                                                            |
| interruptExecution   | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue                                                     |
| attributesMap        | \[String>]                                                                                                                                                                                                                    |
| totalCount           | \[Long]                                                                                                                                                                                                                       |
| fieldsToOmit         | \[String\[]]                                                                                                                                                                                                                  |
| pars                 | \[Object\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## getMimeType

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getMimeType(
	filename //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| filename | \[String]   |

***

## getMultipleValuesList

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument         | Description |
| ---------------- | ----------- |
| host             | \[String]   |
| port             | \[Integer]  |
| baseDN           | \[String]   |
| ldapUsername     | \[String]   |
| ldapPassword     | \[String]   |
| searchAttributes | \[String]   |
| attributeName    | \[String]   |

***

## getObjectTime

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Time type
var risp = utils.getObjectTime(
	hours, //int
	minutes, //int
	seconds //int
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| hours    | \[int]      |
| minutes  | \[int]      |
| seconds  | \[int]      |

***

## getPDFOrientation

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getPDFOrientation(
	uuid //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| uuid     | \[String]   |

***

## getPDFPageCount

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return int type
var risp = utils.getPDFPageCount(
	uuid //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| uuid     | \[String]   |

***

## getParameter

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getParameter(
	paramName //String
);
```
{% endcode %}

Details

| Argument                                                                                        | Description                                                                                                                                          |
| ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| paramName                                                                                       | \[String] paramName a string value representing a parameter named defined at installation level (CON44 table) or at application level (CON07 table). |
| If none of them are defined, the parameter is searched in the user application parameters list. |                                                                                                                                                      |

***

## getPartialResult

Execute the specified SQL query and enrich it by adding filtering/sorting conditions defined through ListCommand object.\
ListCommand class attribute can also contain pagination settings, read through the GetListResource class.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument             | Description                                                                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| sql                  | \[String] sql base SQL query                                                                                                               |
| dataStoreId          | \[Long] dataStoreId optional data source id                                                                                                |
| separatedTransaction | \[Boolean] separatedTransaction flag used to define if this query has to be perfomed in a separated transaction                            |
| interruptExecution   | \[Boolean] interruptExecution flag used to defined if the whole server side transation must be interruped and roolbacked in case of errors |
| attributesMap        | \[String>]                                                                                                                                 |
| pars                 | \[Object\[]] pars optional (can be expressed as \[] in js) list of parameters binded to ? variables in the SQL query                       |

***

## getPartialResult

Execute the specified SQL query and enrich it by adding filtering/sorting conditions defined through ListCommand object.\
ListCommand class attribute can also contain pagination settings, read through the GetListResource class.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument             | Description                                                                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| select               | \[String]                                                                                                                                  |
| from                 | \[String]                                                                                                                                  |
| where                | \[String] String: where condition for query                                                                                                |
| orderBy              | \[String]                                                                                                                                  |
| groupBy              | \[String]                                                                                                                                  |
| having               | \[String]                                                                                                                                  |
| dataStoreId          | \[Long] dataStoreId optional data source id                                                                                                |
| separatedTransaction | \[Boolean] separatedTransaction flag used to define if this query has to be perfomed in a separated transaction                            |
| interruptExecution   | \[Boolean] interruptExecution flag used to defined if the whole server side transation must be interruped and roolbacked in case of errors |
| pars                 | \[Object\[]] pars optional (can be expressed as \[] in js) list of parameters binded to ? variables in the SQL query                       |

***

## getPartialResult

Execute the specified SQL query and enrich it by adding filtering/sorting conditions defined through ListCommand object.\
ListCommand class attribute can also contain pagination settings, read through the GetListResource class.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getPartialResult(
	sql, //String
	dataStoreId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	pars //Object[]
);
```
{% endcode %}

Details

| Argument             | Description                                                                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| sql                  | \[String] sql base SQL query                                                                                                               |
| dataStoreId          | \[Long] dataStoreId optional data source id                                                                                                |
| separatedTransaction | \[Boolean] separatedTransaction flag used to define if this query has to be perfomed in a separated transaction                            |
| interruptExecution   | \[Boolean] interruptExecution flag used to defined if the whole server side transation must be interruped and roolbacked in case of errors |
| pars                 | \[Object\[]] pars optional (can be expressed as \[] in js) list of parameters binded to ? variables in the SQL query                       |

***

## getPartialResultNoCount

Execute the specified SQL query and enrich it by adding filtering/sorting conditions defined through ListCommand object.\
ListCommand class attribute can also contain pagination settings, read through the GetListResource class.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument             | Description                                                                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| select               | \[String]                                                                                                                                  |
| from                 | \[String]                                                                                                                                  |
| where                | \[String] String: where condition for query                                                                                                |
| orderBy              | \[String]                                                                                                                                  |
| groupBy              | \[String]                                                                                                                                  |
| having               | \[String]                                                                                                                                  |
| dataStoreId          | \[Long] dataStoreId optional data source id                                                                                                |
| separatedTransaction | \[Boolean] separatedTransaction flag used to define if this query has to be perfomed in a separated transaction                            |
| interruptExecution   | \[Boolean] interruptExecution flag used to defined if the whole server side transation must be interruped and roolbacked in case of errors |
| totalCount           | \[Long]                                                                                                                                    |
| pars                 | \[Object\[]] pars optional (can be expressed as \[] in js) list of parameters binded to ? variables in the SQL query                       |

***

## getPartialResultNoCount

Execute the specified SQL query and enrich it by adding filtering/sorting conditions defined through ListCommand object.\
ListCommand class attribute can also contain pagination settings, read through the GetListResource class.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument             | Description                                                                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| sql                  | \[String] sql base SQL query                                                                                                               |
| dataStoreId          | \[Long] dataStoreId optional data source id                                                                                                |
| separatedTransaction | \[Boolean] separatedTransaction flag used to define if this query has to be perfomed in a separated transaction                            |
| interruptExecution   | \[Boolean] interruptExecution flag used to defined if the whole server side transation must be interruped and roolbacked in case of errors |
| totalCount           | \[Long]                                                                                                                                    |
| pars                 | \[Object\[]] pars optional (can be expressed as \[] in js) list of parameters binded to ? variables in the SQL query                       |

***

## getPrintServices

Generate a report starting from a .jasper report template and print it directly to the specified printer.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String[] type
var risp = utils.getPrintServices();
```
{% endcode %}

***

## getProgressive

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Long type
var risp = utils.getProgressive(
	tableName, //String
	columnName, //String
	separatedTransaction, //Boolean
	interruptExecution //Boolean
);
```
{% endcode %}

Details

| Argument             | Description                                                                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tableName            | \[String] String: name of table                                                                                                                                           |
| columnName           | \[String] String: column name of field                                                                                                                                    |
| separatedTransaction | \[Boolean] boolean value; if true, the SQL instruction is executed on a separated transaction which is immediately committed (as for a REQUIRE\_NEW EJB directive)        |
| interruptExecution   | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |

***

## getProgressiveForApplicationId

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Long type
var risp = utils.getProgressiveForApplicationId(
	appId, //String
	tableName, //String
	columnName, //String
	separatedTransaction, //Boolean
	interruptExecution //Boolean
);
```
{% endcode %}

Details

| Argument             | Description                                                                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appId                | \[String]                                                                                                                                                                 |
| tableName            | \[String] String: name of table                                                                                                                                           |
| columnName           | \[String] String: column name of field                                                                                                                                    |
| separatedTransaction | \[Boolean] boolean value; if true, the SQL instruction is executed on a separated transaction which is immediately committed (as for a REQUIRE\_NEW EJB directive)        |
| interruptExecution   | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |

***

## getQueryColumns

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getQueryColumns(
	sql, //String
	dataStoreId, //Long
	separatedTransaction, //Boolean
	interruptExecution, //Boolean
	pars //Object[]
);
```
{% endcode %}

Details

| Argument             | Description                                                                                                                                                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sql                  | \[String] string value: sql to execute; it can contain ?                                                                                                                                                                      |
| dataStoreId          | \[Long] num value; it can be null and used to specify a different db to use with the sql statement                                                                                                                            |
| separatedTransaction | \[Boolean] boolean value; if true, the SQL instruction is executed on a separated transaction which is immediately committed (as for a REQUIRE\_NEW EJB directive)                                                            |
| interruptExecution   | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue                                                     |
| pars                 | \[Object\[]] this is optional: you can omit it at all, or you can specify a series of arguments separated by a comma (do not use \[]); these additional parameters represent values which replace ? symbols in the sql query. |

***

## getRelation

Get the list of fields from the FK table to the PK table; each element of the list contains an object:\
the fk field, the pk field and the fk name.\
The result is expressed as a JSON string containing:\
\[{ "fkColumnName": "...", "pkColumnName": "...", "fkName": "..." },...]

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getRelation(
	dataStoreId, //Long
	fkTable, //String
	pkTable //String
);
```
{% endcode %}

Details

| Argument    | Description                                                                                        |
| ----------- | -------------------------------------------------------------------------------------------------- |
| dataStoreId | \[Long] num value; it can be null and used to specify a different db to use with the sql statement |
| fkTable     | \[String]                                                                                          |
| pkTable     | \[String]                                                                                          |

***

## getResource

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getResource(
	entry //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| entry    | \[String]   |

***

## getResourceByLanguageId

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getResourceByLanguageId(
	entry, //String
	languageId //String
);
```
{% endcode %}

Details

| Argument   | Description                                |
| ---------- | ------------------------------------------ |
| entry      | \[String]                                  |
| languageId | \[String] language to use for translations |

***

## getSchedNextActivationTime

Return the nex activation time of scheduled process

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getSchedNextActivationTime(
	schedId //Long
);
```
{% endcode %}

Details

| Argument | Description                          |
| -------- | ------------------------------------ |
| schedId  | \[Long] schedId of scheduled process |

***

## getSheetListFromExcelFile

Open an already existing xls file and save an image within a cell, starting from an image from the file system.\
By and large, a list of images can be saved.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getSheetListFromExcelFile(
	dirId, //Long
	fileName //String
);
```
{% endcode %}

Details

| Argument | Description                             |
| -------- | --------------------------------------- |
| dirId    | \[Long] dirId path identifier           |
| fileName | \[String] fileName name of the xls file |

***

## getTablesInDataStore

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getTablesInDataStore(
	datastoreId //Long
);
```
{% endcode %}

Details

| Argument    | Description |
| ----------- | ----------- |
| datastoreId | \[Long]     |

***

## getTxtFileCharset

Get the charset for the specified text type file.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getTxtFileCharset(
	fileName //String
);
```
{% endcode %}

Details

| Argument | Description                                                               |
| -------- | ------------------------------------------------------------------------- |
| fileName | \[String] fileName file name to check out (including aboslute path to it) |

***

## getUserRoles

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return ArrayList type
var risp = utils.getUserRoles(
	companyId, //String
	siteId, //Long
	userCodeId //String
);
```
{% endcode %}

Details

| Argument   | Description |
| ---------- | ----------- |
| companyId  | \[String]   |
| siteId     | \[Long]     |
| userCodeId | \[String]   |

***

## getVariable

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Object type
var risp = utils.getVariable(
	varName //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| varName  | \[String]   |

***

## getWebContent

Execute an HTTP(s) connection and fetch the result, expresses as a String (e.g. a JSON or XML result content)

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getWebContent(
	uri, //String
	settings //Map
);
```
{% endcode %}

Details

| Argument | Description                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------ |
| uri      | \[String] uri URI, expressed as http:// or https:// with or without variables, expressed as :XXX |
| settings | \[Map]                                                                                           |

***

## getWebContent \[Deprecated]

Execute an HTTP(s) connection and fetch the result, expresses as a String (e.g. a JSON or XML result content)

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument         | Description                                                                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| uri              | \[String] uri URI, expressed as http:// or https:// with or without variables, expressed as :XXX                                             |
| replaceVariables | \[boolean] replaceVariables flag used to replace variables within the uri (variables are expressed as :XXX)                                  |
| httpMethod       | \[String] httpMethod (optional: can be null); if specified, it defines the HTTP method: GET, POST                                            |
| contentType      | \[String] contentType (optional: can be null); if specified, it defines the content type request (e.g. application/json)                     |
| requestBody      | \[String] requestBody (optional: can be null); if specified, it defines the request body, expressed as a String (e.g. a JSON or XML content) |
| user             | \[String] user (optional: can be null); if specified, it defines the username for a BASIC authentication                                     |
| pwd              | \[String] pwd (optional: can be null); if specified, it defines the password for a BASIC authentication                                      |

***

## getWebContentWithHeaders \[Deprecated]

Execute an HTTP(s) connection and fetch the result, expresses as a String (e.g. a JSON or XML result content)

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument         | Description                                                                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| uri              | \[String] uri URI, expressed as http:// or https:// with or without variables, expressed as :XXX                                             |
| replaceVariables | \[boolean] replaceVariables flag used to replace variables within the uri (variables are expressed as :XXX)                                  |
| httpMethod       | \[String] httpMethod (optional: can be null); if specified, it defines the HTTP method: GET, POST                                            |
| contentType      | \[String] contentType (optional: can be null); if specified, it defines the content type request (e.g. application/json)                     |
| requestBody      | \[String] requestBody (optional: can be null); if specified, it defines the request body, expressed as a String (e.g. a JSON or XML content) |
| user             | \[String] user (optional: can be null); if specified, it defines the username for a BASIC authentication                                     |
| pwd              | \[String] pwd (optional: can be null); if specified, it defines the password for a BASIC authentication                                      |
| charSet          | \[String]                                                                                                                                    |
| headers          | \[Map]                                                                                                                                       |

***

## getWebContentWithHeadersAndCookies

Execute an HTTP(s) connection and fetch the result, expresses as a String (e.g. a JSON or XML result content)

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument         | Description                                                                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| uri              | \[String] uri URI, expressed as http:// or https:// with or without variables, expressed as :XXX                                             |
| replaceVariables | \[boolean] replaceVariables flag used to replace variables within the uri (variables are expressed as :XXX)                                  |
| httpMethod       | \[String] httpMethod (optional: can be null); if specified, it defines the HTTP method: GET, POST                                            |
| contentType      | \[String] contentType (optional: can be null); if specified, it defines the content type request (e.g. application/json)                     |
| requestBody      | \[String] requestBody (optional: can be null); if specified, it defines the request body, expressed as a String (e.g. a JSON or XML content) |
| user             | \[String] user (optional: can be null); if specified, it defines the username for a BASIC authentication                                     |
| pwd              | \[String] pwd (optional: can be null); if specified, it defines the password for a BASIC authentication                                      |
| charSet          | \[String]                                                                                                                                    |
| headers          | \[Map]                                                                                                                                       |
| timeout          | \[Number]                                                                                                                                    |

***

## getWebContentWithHeadersAndCookies \[Deprecated]

Execute an HTTP(s) connection and fetch the result, expresses as a String (e.g. a JSON or XML result content)

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument         | Description                                                                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| uri              | \[String] uri URI, expressed as http:// or https:// with or without variables, expressed as :XXX                                             |
| replaceVariables | \[boolean] replaceVariables flag used to replace variables within the uri (variables are expressed as :XXX)                                  |
| httpMethod       | \[String] httpMethod (optional: can be null); if specified, it defines the HTTP method: GET, POST                                            |
| contentType      | \[String] contentType (optional: can be null); if specified, it defines the content type request (e.g. application/json)                     |
| requestBody      | \[Object] requestBody (optional: can be null); if specified, it defines the request body, expressed as a String (e.g. a JSON or XML content) |
| user             | \[String] user (optional: can be null); if specified, it defines the username for a BASIC authentication                                     |
| pwd              | \[String] pwd (optional: can be null); if specified, it defines the password for a BASIC authentication                                      |
| charSet          | \[String]                                                                                                                                    |
| headers          | \[Map]                                                                                                                                       |
| timeout          | \[Number]                                                                                                                                    |
| cookie           | \[boolean]                                                                                                                                   |
| dirId            | \[Long] dir id used to find or write or read files                                                                                           |
| sendFileName     | \[String]                                                                                                                                    |

***

## getWebContentWithSettings \[Deprecated]

Execute an HTTP(s) connection and fetch the result, expresses as a String (e.g. a JSON or XML result content)

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument           | Description                                                                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| uri                | \[String] uri URI, expressed as http:// or https:// with or without variables, expressed as :XXX                                             |
| replaceVariables   | \[boolean] replaceVariables flag used to replace variables within the uri (variables are expressed as :XXX)                                  |
| httpMethod         | \[String] httpMethod (optional: can be null); if specified, it defines the HTTP method: GET, POST                                            |
| contentType        | \[String] contentType (optional: can be null); if specified, it defines the content type request (e.g. application/json)                     |
| requestBody        | \[String] requestBody (optional: can be null); if specified, it defines the request body, expressed as a String (e.g. a JSON or XML content) |
| user               | \[String] user (optional: can be null); if specified, it defines the username for a BASIC authentication                                     |
| pwd                | \[String] pwd (optional: can be null); if specified, it defines the password for a BASIC authentication                                      |
| charSet            | \[String]                                                                                                                                    |
| headers            | \[Map]                                                                                                                                       |
| timeout            | \[Number]                                                                                                                                    |
| additionalSettings | \[Map]                                                                                                                                       |

***

## getWindowPanelsNavigateTree

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.getWindowPanelsNavigateTree(
	windowId, //Long
	treeTranslation, //String
	excludedProperties //String[]
);
```
{% endcode %}

Details

| Argument           | Description  |
| ------------------ | ------------ |
| windowId           | \[Long]      |
| treeTranslation    | \[String]    |
| excludedProperties | \[String\[]] |

***

## getXlsContent

Read up to 10000 rows x 1000 columns from the xls file stored in the specified path and get back the content of a specific folder.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Map[] type
var risp = utils.getXlsContent(
	dirId, //String
	fileName, //String
	sheetIndex, //int
	fromRow, //int
	attributeNames //String[]
);
```
{% endcode %}

Details

| Argument                                                                                                       | Description                                                                                               |
| -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| dirId                                                                                                          | \[String] dirId path identifier                                                                           |
| fileName                                                                                                       | \[String] fileName name of the xls file                                                                   |
| sheetIndex                                                                                                     | \[int] sheetIndex sheet index inside the spreadsheet, starting from 0                                     |
| fromRow                                                                                                        | \[int] fromRow the content will be read starting from the specified row index (the first row has index 0) |
| @parsm attributeNames, list of attributes, assigned to each column, starting from leftmost column to the right |                                                                                                           |
| attributeNames                                                                                                 | \[String\[]]                                                                                              |

***

## getXlsContentWithEncoding

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument       | Description                                          |
| -------------- | ---------------------------------------------------- |
| dirId          | \[String] dir id used to find or write or read files |
| fileName       | \[String] file name                                  |
| encoding       | \[String]                                            |
| sheetIndex     | \[int]                                               |
| fromRow        | \[int]                                               |
| attributeNames | \[String\[]]                                         |

***

## importCellsFromExcelFile

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument             | Description                                                                                                                                                        |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| directoryId          | \[Long] dir id used to find or write or read files                                                                                                                 |
| fileName             | \[String] file name                                                                                                                                                |
| valueImportId        | \[Long]                                                                                                                                                            |
| fieldsData           | \[Map]                                                                                                                                                             |
| inputData            | \[Map]                                                                                                                                                             |
| separatedTransaction | \[Boolean] boolean value; if true, the SQL instruction is executed on a separated transaction which is immediately committed (as for a REQUIRE\_NEW EJB directive) |

***

## importRowsFromFile

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument            | Description                                        |
| ------------------- | -------------------------------------------------- |
| dirId               | \[Long] dir id used to find or write or read files |
| fileName            | \[String] file name                                |
| importId            | \[Long]                                            |
| insert              | \[boolean]                                         |
| maxErrors           | \[Long]                                            |
| maxRowErrors        | \[Long]                                            |
| inputData           | \[Map]                                             |
| destErrorsFileDirId | \[Long]                                            |
| destErrorsFileName  | \[String]                                          |
| rollbackIfErrors    | \[boolean]                                         |
| async               | \[boolean]                                         |

***

## importRowsFromFile

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument            | Description                                        |
| ------------------- | -------------------------------------------------- |
| dirId               | \[Long] dir id used to find or write or read files |
| fileName            | \[String] file name                                |
| importId            | \[Long]                                            |
| insert              | \[boolean]                                         |
| maxErrors           | \[Long]                                            |
| maxRowErrors        | \[Long]                                            |
| inputData           | \[Map]                                             |
| destErrorsFileDirId | \[Long]                                            |
| destErrorsFileName  | \[String]                                          |
| rollbackIfErrors    | \[boolean]                                         |
| async               | \[boolean]                                         |
| sheetTitle          | \[String]                                          |

***

## importSubFolderInWebContext

Save in CON119 the content of the specified subfolder of the web context for the specified app id,\
then zip it, in order to use it later, when starting the Platform service on another node.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.importSubFolderInWebContext(
	appId, //String
	subfolderName //String
);
```
{% endcode %}

Details

| Argument      | Description |
| ------------- | ----------- |
| appId         | \[String]   |
| subfolderName | \[String]   |

***

## info

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.info(
	msg //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| msg      | \[String]   |

***

## insertMappedObject

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument             | Description                                                                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| neutralObject        | \[Map]                                                                                                                                                                    |
| tableName            | \[String] String: name of table                                                                                                                                           |
| dataModelId          | \[Long] data model id, used to compare the attribute value types                                                                                                          |
| additionalAttributes | \[Map]                                                                                                                                                                    |
| separatedTransaction | \[Boolean] boolean value; if true, the SQL instruction is executed on a separated transaction which is immediately committed (as for a REQUIRE\_NEW EJB directive)        |
| interruptExecution   | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |

***

## insertMappedObject

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.insertMappedObject(
	neutralObject, //Map
	dataModelId, //Long
	additionalAttributes, //Map
	separatedTransaction, //Boolean
	interruptExecution //Boolean
);
```
{% endcode %}

Details

| Argument             | Description                                                                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| neutralObject        | \[Map]                                                                                                                                                                    |
| dataModelId          | \[Long] data model id, used to compare the attribute value types                                                                                                          |
| additionalAttributes | \[Map]                                                                                                                                                                    |
| separatedTransaction | \[Boolean] boolean value; if true, the SQL instruction is executed on a separated transaction which is immediately committed (as for a REQUIRE\_NEW EJB directive)        |
| interruptExecution   | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |

***

## insertObject

Execute an INSERT SQL statement into the specified table, starting from the javascript object passed as argument.\
All object attributes will be converted to database fields (uncamel format); example: productCode -> PRODUCT\_CODE

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.insertObject(
	obj, //Map
	tableName, //String
	dataSourceId, //Long
	separatedTransaction, //Boolean
	interruptExecution //Boolean
);
```
{% endcode %}

Details

| Argument             | Description                                                                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| obj                  | \[Map] obj javascript object to insert into the specified table                                                                              |
| tableName            | \[String] tableName table name which must be defined as a writable object (it MUST have a data model defined for that table)                 |
| dataSourceId         | \[Long] dataSourceId optional data source id                                                                                                 |
| separatedTransaction | \[Boolean] separatedTransaction flag used to define if this query has to be performed in a separated transaction                             |
| interruptExecution   | \[Boolean] interruptExecution flag used to defined if the whole server side transaction must be interrupted and rollbacked in case of errors |

***

## isExceededRowsOfCSVFile

Check if the file exceeded the limit of number of rows

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.isExceededRowsOfCSVFile(
	filePath, //String
	limit //int
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| filePath | \[String]   |
| limit    | \[int]      |

***

## isExceededRowsOfTextFile

Check if the file exceeded the limit of number of rows

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.isExceededRowsOfTextFile(
	filePath, //String
	limit //int
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| filePath | \[String]   |
| limit    | \[int]      |

***

## isOffLine

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.isOffLine();
```
{% endcode %}

***

## lPad

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.lPad(
	value, //String
	fillChar, //char
	length //int
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| value    | \[String]   |
| fillChar | \[char]     |
| length   | \[int]      |

***

## lTrim

LTrim method used by Javascript actions

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.lTrim(
	text //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| text     | \[String]   |

***

## loadPDFFont

Load an external font and link it to the current PDF file

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.loadPDFFont(
	uuid, //String
	fontAlias, //String
	fontFileName //String
);
```
{% endcode %}

Details

| Argument     | Description                                                                                                                     |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| uuid         | \[String] uuid output stream identifier, related to a PDF file already opended; this id is returned by the "openPDFFile" method |
| fontAlias    | \[String]                                                                                                                       |
| fontFileName | \[String] fontFileName font file nane; it can include a path                                                                    |

***

## log

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.log(
	msg, //String
	logType //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| msg      | \[String]   |
| logType  | \[String]   |

***

## logInCon60

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.logInCon60(
	logType, //String
	msg, //String
	messageTag //String
);
```
{% endcode %}

Details

| Argument   | Description |
| ---------- | ----------- |
| logType    | \[String]   |
| msg        | \[String]   |
| messageTag | \[String]   |

***

## logServiceElaboration

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.logServiceElaboration(
	logType, //String
	logMessage, //String
	messageCode, //String
	fileName, //String
	sendNotification //Boolean
);
```
{% endcode %}

Details

| Argument         | Description         |
| ---------------- | ------------------- |
| logType          | \[String]           |
| logMessage       | \[String]           |
| messageCode      | \[String]           |
| fileName         | \[String] file name |
| sendNotification | \[Boolean]          |

***

## logServiceElaboration

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.logServiceElaboration(
	logType, //String
	logMessage, //String
	messageCode, //String
	fileName //String
);
```
{% endcode %}

Details

| Argument    | Description         |
| ----------- | ------------------- |
| logType     | \[String]           |
| logMessage  | \[String]           |
| messageCode | \[String]           |
| fileName    | \[String] file name |

***

## logServiceElaborationTag

Fill in the specified tag (1..5) with the specified value.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.logServiceElaborationTag(
	tagNumber, //Long
	tagValue //String
);
```
{% endcode %}

Details

| Argument  | Description                      |
| --------- | -------------------------------- |
| tagNumber | \[Long] tagNumber 1..5 tag index |
| tagValue  | \[String] tagValue tag value     |

***

## logServiceFileElaboration

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument          | Description                                        |
| ----------------- | -------------------------------------------------- |
| operation         | \[String]                                          |
| elaborated        | \[Boolean]                                         |
| fileName          | \[String] file name                                |
| directoryId       | \[Long] dir id used to find or write or read files |
| backupFilename    | \[String]                                          |
| backupDirectoryId | \[Long] dir id used to find or write or read files |
| note              | \[String]                                          |

***

## logServiceFileElaboration

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument          | Description                                        |
| ----------------- | -------------------------------------------------- |
| operation         | \[String]                                          |
| state             | \[String]                                          |
| fileName          | \[String] file name                                |
| directoryId       | \[Long] dir id used to find or write or read files |
| backupFilename    | \[String]                                          |
| backupDirectoryId | \[Long] dir id used to find or write or read files |
| note              | \[String]                                          |

***

## logServiceFileElaboration

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.logServiceFileElaboration(
	operation, //String
	elaborated, //Boolean
	fileName, //String
	directoryId, //Long
	backupFilename, //String
	backupDirectoryId //Long
);
```
{% endcode %}

Details

| Argument          | Description                                        |
| ----------------- | -------------------------------------------------- |
| operation         | \[String]                                          |
| elaborated        | \[Boolean]                                         |
| fileName          | \[String] file name                                |
| directoryId       | \[Long] dir id used to find or write or read files |
| backupFilename    | \[String]                                          |
| backupDirectoryId | \[Long] dir id used to find or write or read files |

***

## mapClobFieldToTable

Read a (filtered) table having all data stored in a CLOB field and\
load a second table, where

* copying as is some fields coming from the source table
* filling it some fields with default values
* distributing (mapping) the CLOB field content to some other fields\
  Moreover, execute some validations:
* mandatory
* field type (and format)
* field length\
  In case of invalid data, it saves the errors in the source table record\
  This method always clears up the border table before loading it, applying a filtered DELETE specified by deleteFilter

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.mapClobFieldToTable(
	settings //Map
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| settings | \[Map]      |

***

## markMessagesAsSeen

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument   | Description                                                                                                                                                                                                              |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| server     | \[String]                                                                                                                                                                                                                |
| port       | \[Integer]                                                                                                                                                                                                               |
| username   | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| password   | \[String]                                                                                                                                                                                                                |
| protocol   | \[String]                                                                                                                                                                                                                |
| useTLS     | \[Boolean] flag used to enabled the TLS mode                                                                                                                                                                             |
| messageIds | \[String\[]]                                                                                                                                                                                                             |
| folderName | \[String]                                                                                                                                                                                                                |
| setAsSeen  | \[Boolean]                                                                                                                                                                                                               |
| debug      | \[Boolean]                                                                                                                                                                                                               |

***

## md5

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.md5(
	text //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| text     | \[String]   |

***

## mergePdfs

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.mergePdfs(
	destinationFile, //String
	files //String[]
);
```
{% endcode %}

Details

| Argument        | Description  |
| --------------- | ------------ |
| destinationFile | \[String]    |
| files           | \[String\[]] |

***

## mkdir

Delete attachments uses to send email

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.mkdir(
	path //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| path     | \[String]   |

***

## moveMessages

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument     | Description                                                                                                                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| server       | \[String]                                                                                                                                                                                                                |
| port         | \[Integer]                                                                                                                                                                                                               |
| username     | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| password     | \[String]                                                                                                                                                                                                                |
| protocol     | \[String]                                                                                                                                                                                                                |
| useTLS       | \[Boolean] flag used to enabled the TLS mode                                                                                                                                                                             |
| messageIds   | \[String\[]]                                                                                                                                                                                                             |
| folderName   | \[String]                                                                                                                                                                                                                |
| moveToFolder | \[String]                                                                                                                                                                                                                |
| setAsSeen    | \[Boolean]                                                                                                                                                                                                               |
| debug        | \[Boolean]                                                                                                                                                                                                               |

***

## movePDFPage

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.movePDFPage(
	uuid, //String
	page //int
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| uuid     | \[String]   |
| page     | \[int]      |

***

## numberToText

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.numberToText(
	num, //Number
	decimals, //Number
	languageId, //String
	showDecimals, //Boolean
	sep //String
);
```
{% endcode %}

Details

| Argument     | Description                                |
| ------------ | ------------------------------------------ |
| num          | \[Number]                                  |
| decimals     | \[Number]                                  |
| languageId   | \[String] language to use for translations |
| showDecimals | \[Boolean]                                 |
| sep          | \[String]                                  |

***

## openCSVFile

Open a CSV file, in order to write rows into it, using the "writeToCSVFile" method.\
Finally, the CSV file must be closed, using "closeCSVFile" method.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument                                                                                                                                       | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| fileName                                                                                                                                       | \[String] fileName CSV filename                                                                                                          |
| overwrite                                                                                                                                      | \[Boolean] overwrite flag true                                                                                                           |
| directoryId                                                                                                                                    | \[Long] directoryId dir id, related to a path in the server file system                                                                  |
| sep                                                                                                                                            | \[String] sep CSV field separator; allowed values are: , or ;                                                                            |
| fileAppend                                                                                                                                     | \[Boolean] fileAppend flag true                                                                                                          |
| attributesToWrite                                                                                                                              | \[String\[]] attributesToWrite list of attributes to write in the row, coming from the json row                                          |
| formatters                                                                                                                                     | \[String\[]] formatters list of formatters to use for each attributes, in order to convert a number to a text (e.g. "0" or "0.00", etc.) |
| return file identifier, to pass forward to "writeToCSVFile" and "closeCSVFile" methods, in order to work with the already opened output stream |                                                                                                                                          |

***

## openPDFFile

Open a PDF file, in order to write rows into it, using the "addPageToPDFFile" or "addLineToPDFFile" methods.\
Finally, the PDF file must be closed, using "closePDFFile" method.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.openPDFFile(
	fileName, //String
	directoryId, //Long
	settings //Map
);
```
{% endcode %}

Details

| Argument                                                                                                                                                                                                                                                                   | Description                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| fileName                                                                                                                                                                                                                                                                   | \[String] fileName PDF filename                                                                                       |
| directoryId                                                                                                                                                                                                                                                                | \[Long] directoryId dir id, related to a path in the server file system                                               |
| settings                                                                                                                                                                                                                                                                   | \[Map] settings additional settings: "fontName", "fontSize", "size", "top", "left", "bottom", "height", "orientation" |
| Allowed values for "size": "A0"..."A6","LETTER"                                                                                                                                                                                                                            |                                                                                                                       |
| Allowed values for "fontName": "Courier-Bold", "Courier-BoldOblique", "Times-Roman", "Helvetica-Oblique", "Courier-Oblique", "Symbol", "Times-Italic", "Helvetica", "Helvetica-Bold", "Times-BoldItalic", "ZapfDingbats", "Times-Bold", "Helvetica-BoldOblique", "Courier" |                                                                                                                       |
| Allowed values for "orientation": "portrait", "landscape"; default: "portrait"                                                                                                                                                                                             |                                                                                                                       |
| return file identifier, to pass forward to "addPageToPDFFile" or "addLineToPDFFile" or "closePDFFile" methods, in order to work with the already opened output stream                                                                                                      |                                                                                                                       |

***

## openTextFile

Open a text file, in order to write rows into it, using the "writeToTextFile" method.\
Finally, the text file must be closed, using "closeTextFile" method.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.openTextFile(
	fileName, //String
	overwrite, //Boolean
	directoryId, //Long
	fileAppend, //Boolean
	charset //String
);
```
{% endcode %}

Details

| Argument                                                                                                                                         | Description                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| fileName                                                                                                                                         | \[String] fileName text filename                                        |
| overwrite                                                                                                                                        | \[Boolean] overwrite flag true                                          |
| directoryId                                                                                                                                      | \[Long] directoryId dir id, related to a path in the server file system |
| fileAppend                                                                                                                                       | \[Boolean] fileAppend flag true                                         |
| return file identifier, to pass forward to "writeToTextFile" and "closeTextFile" methods, in order to work with the already opened output stream |                                                                         |
| charset                                                                                                                                          | \[String]                                                               |

***

## openTextFile

Open a text file, in order to write rows into it, using the "writeToTextFile" method.\
Finally, the text file must be closed, using "closeTextFile" method.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.openTextFile(
	fileName, //String
	overwrite, //Boolean
	directoryId, //Long
	fileAppend //Boolean
);
```
{% endcode %}

Details

| Argument                                                                                                                                         | Description                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| fileName                                                                                                                                         | \[String] fileName text filename                                        |
| overwrite                                                                                                                                        | \[Boolean] overwrite flag true                                          |
| directoryId                                                                                                                                      | \[Long] directoryId dir id, related to a path in the server file system |
| fileAppend                                                                                                                                       | \[Boolean] fileAppend flag true                                         |
| return file identifier, to pass forward to "writeToTextFile" and "closeTextFile" methods, in order to work with the already opened output stream |                                                                         |

***

## parseJSON

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Object type
var risp = utils.parseJSON(
	json //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| json     | \[String]   |

***

## parseXML

Parse a simple XML document and generate a Javascript "compatible" representation,\
expressed using lists and js objects, where each js object has special attributes named:\
"tagName", "tagValue" and "subTags".\
The document (list of tags) is expressed as a list of js objects, where each js object\
can have a list of subtags and attributes, expressed object's attributes.\
The js object always contains special entries named "tagName", "subTags" and optionally "tagValue" if there is tag value.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Map[] type
var risp = utils.parseXML(
	xmlDocument //String
);
```
{% endcode %}

Details

| Argument    | Description |
| ----------- | ----------- |
| xmlDocument | \[String]   |

***

## printDocument

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument     | Description |
| ------------ | ----------- |
| printerName  | \[String]   |
| copies       | \[int]      |
| mediaSize    | \[Integer]  |
| printParams  | \[Object>]  |
| reportName   | \[String]   |
| dirReports   | \[String]   |
| datastoreId  | \[Long]     |
| reportFormat | \[String]   |
| reportParams | \[Object>]  |

***

## protectPdf

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.protectPdf(
	passwordRestriction, //String
	passwordOwner, //String
	fullPathSrc, //String
	fullPathDst //String
);
```
{% endcode %}

Details

| Argument            | Description |
| ------------------- | ----------- |
| passwordRestriction | \[String]   |
| passwordOwner       | \[String]   |
| fullPathSrc         | \[String]   |
| fullPathDst         | \[String]   |

***

## rPad

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.rPad(
	value, //String
	fillChar, //char
	length //int
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| value    | \[String]   |
| fillChar | \[char]     |
| length   | \[int]      |

***

## rTrim

RTrim method used by Javascript actions

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.rTrim(
	text //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| text     | \[String]   |

***

## readBase64File

Read a local file and convert it to BASE 64 text format.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.readBase64File(
	filePath //String
);
```
{% endcode %}

Details

| Argument | Description                                 |
| -------- | ------------------------------------------- |
| filePath | \[String] filePath path + file name to read |

***

## readCSVFile

Read a CSV file stored in the server file system and invoke the callback function" for each row.\
When invoking the callback function, a js object will be passed to it as an argument, containing the current row read from the CSV file.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
function callbackFunName(data) {
	
}

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
{% endcode %}

Details

| Argument            | Description                                                                                                                                                                          |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| fileName            | \[String] fileName CSV file name, stored in the specified directory                                                                                                                  |
| directoryId         | \[Long] directoryId directory identifier, related to a folder in the server file system                                                                                              |
| sep                 | \[String] sep CSV separator; allowed values are: , and ;                                                                                                                             |
| skipFirstRow        | \[Boolean] skipFirstRow flag true                                                                                                                                                    |
| callbackFunName     | \[String] callbackFunName callback function name to invoke for each row; such a function must have a single argument, which will have the js object related to a row in the CSV file |
| attributeNames      | \[String\[]] attributeNames list of attribute names, to use for each column in the CSV file                                                                                          |
| charSet             | \[String]                                                                                                                                                                            |
| limitRows           | \[int] limitRows maximum number of row to read (default -1 no limit)                                                                                                                 |
| throwIfExceededRows | \[boolean] throwIfExceededRows flag true                                                                                                                                             |

***

## readCSVFile

Read a CSV file stored in the server file system and invoke the callback function" for each row.\
When invoking the callback function, a js object will be passed to it as an argument, containing the current row read from the CSV file.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
function callbackFunName(data) {
	
}

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
{% endcode %}

Details

| Argument        | Description                                                                                                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| fileName        | \[String] fileName CSV file name, stored in the specified directory                                                                                                                  |
| directoryId     | \[Long] directoryId directory identifier, related to a folder in the server file system                                                                                              |
| sep             | \[String] sep CSV separator; allowed values are: , and ;                                                                                                                             |
| skipFirstRow    | \[Boolean] skipFirstRow flag true                                                                                                                                                    |
| callbackFunName | \[String] callbackFunName callback function name to invoke for each row; such a function must have a single argument, which will have the js object related to a row in the CSV file |
| attributeNames  | \[String\[]] attributeNames list of attribute names, to use for each column in the CSV file                                                                                          |
| charSet         | \[String]                                                                                                                                                                            |

***

## readCSVFile

Read a CSV file stored in the server file system and invoke the callback function" for each row.\
When invoking the callback function, a js object will be passed to it as an argument, containing the current row read from the CSV file.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
function callbackFunName(data) {
	
}

utils.readCSVFile(
	fileName, //String
	directoryId, //Long
	sep, //String
	skipFirstRow, //Boolean
	callbackFunName, //String
	attributeNames //String[]
);
```
{% endcode %}

Details

| Argument        | Description                                                                                                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| fileName        | \[String] fileName CSV file name, stored in the specified directory                                                                                                                  |
| directoryId     | \[Long] directoryId directory identifier, related to a folder in the server file system                                                                                              |
| sep             | \[String] sep CSV separator; allowed values are: , and ;                                                                                                                             |
| skipFirstRow    | \[Boolean] skipFirstRow flag true                                                                                                                                                    |
| callbackFunName | \[String] callbackFunName callback function name to invoke for each row; such a function must have a single argument, which will have the js object related to a row in the CSV file |
| attributeNames  | \[String\[]] attributeNames list of attribute names, to use for each column in the CSV file                                                                                          |

***

## readCSVFileAndWriteToTable

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument            | Description                                        |
| ------------------- | -------------------------------------------------- |
| fileName            | \[String] file name                                |
| directoryId         | \[Long] dir id used to find or write or read files |
| sep                 | \[String]                                          |
| skipFirstRow        | \[Boolean]                                         |
| datastoreId         | \[Long]                                            |
| tableName           | \[String] String: name of table                    |
| defaultFieldNames   | \[Map]                                             |
| csvFields           | \[Map\[]]                                          |
| limitRows           | \[Integer]                                         |
| throwIfExceededRows | \[Boolean]                                         |

***

## readCSVFileAndWriteToTable

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument          | Description                                        |
| ----------------- | -------------------------------------------------- |
| fileName          | \[String] file name                                |
| directoryId       | \[Long] dir id used to find or write or read files |
| sep               | \[String]                                          |
| skipFirstRow      | \[Boolean]                                         |
| datastoreId       | \[Long]                                            |
| tableName         | \[String] String: name of table                    |
| defaultFieldNames | \[Map]                                             |
| csvFields         | \[Map\[]]                                          |

***

## readCsvAndLoadTable

Read the specified csv file and load a table having a CLOB field for the whole row\
and also fill in:

* the row id (if enabled)
* additional fields\
  This method always clears up the border table before loading it, applying a filtered DELETE specified by deleteFilter

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.readCsvAndLoadTable(
	settings //Map
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| settings | \[Map]      |

***

## readTextFile

Read a local file having text format.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
function callbackFunName(data) {
	
}

utils.readTextFile(
	fileName, //String
	directoryId, //Long
	callbackFunName, //String
	charSet //String
);
```
{% endcode %}

Details

| Argument        | Description                                                                                                                                                                           |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fileName        | \[String] fileName text file name, stored in the specified directory                                                                                                                  |
| directoryId     | \[Long] directoryId directory identifier, related to a folder in the server file system                                                                                               |
| callbackFunName | \[String] callbackFunName callback function name to invoke for each row; such a function must have a single argument, which will have the content of the current line (a text string) |
| charSet         | \[String] charSet charset to use when reading a text file                                                                                                                             |

***

## readTextFile

Read a local file having text format.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
function callbackFunName(data) {
	
}

utils.readTextFile(
	fullPathName, //String
	callbackFunName, //String
	charSet, //String
	limitRows, //int
	throwIfExceededRows //boolean
);
```
{% endcode %}

Details

| Argument            | Description                                                                                                                                                                           |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fullPathName        | \[String] fullPathName path+filenae in the server file system                                                                                                                         |
| callbackFunName     | \[String] callbackFunName callback function name to invoke for each row; such a function must have a single argument, which will have the content of the current line (a text string) |
| charSet             | \[String] charSet charset to use when reading a text file                                                                                                                             |
| limitRows           | \[int] limitRows maximum number of row to read (default -1 no limit)                                                                                                                  |
| throwIfExceededRows | \[boolean] throwIfExceededRows flag true                                                                                                                                              |

***

## readTextFile

Read a local file having text format.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
function callbackFunName(data) {
	
}

utils.readTextFile(
	fileName, //String
	directoryId, //Long
	callbackFunName, //String
	charSet, //String
	limitRows, //int
	throwIfExceededRows //boolean
);
```
{% endcode %}

Details

| Argument            | Description                                                                                                                                                                           |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fileName            | \[String] fileName text file name, stored in the specified directory                                                                                                                  |
| directoryId         | \[Long] directoryId directory identifier, related to a folder in the server file system                                                                                               |
| callbackFunName     | \[String] callbackFunName callback function name to invoke for each row; such a function must have a single argument, which will have the content of the current line (a text string) |
| charSet             | \[String] charSet charset to use when reading a text file                                                                                                                             |
| limitRows           | \[int] limitRows maximum number of row to read (default -1 no limit)                                                                                                                  |
| throwIfExceededRows | \[boolean] throwIfExceededRows flag true                                                                                                                                              |

***

## readTextFile

Read a local file having text format.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.readTextFile(
	filePath //String
);
```
{% endcode %}

Details

| Argument | Description                                 |
| -------- | ------------------------------------------- |
| filePath | \[String] filePath path + file name to read |

***

## readTextFile

Read a local file having text format.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.readTextFile(
	filePath, //String
	charSet //String
);
```
{% endcode %}

Details

| Argument | Description                                               |
| -------- | --------------------------------------------------------- |
| filePath | \[String] filePath path + file name to read               |
| charSet  | \[String] charSet charset to use when reading a text file |

***

## readTextFile

Read a local file having text format.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
function callbackFunName(data) {
	
}

utils.readTextFile(
	fileName, //String
	directoryId, //Long
	callbackFunName //String
);
```
{% endcode %}

Details

| Argument        | Description                                                                                                                                                                           |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fileName        | \[String] fileName text file name, stored in the specified directory                                                                                                                  |
| directoryId     | \[Long] directoryId directory identifier, related to a folder in the server file system                                                                                               |
| callbackFunName | \[String] callbackFunName callback function name to invoke for each row; such a function must have a single argument, which will have the content of the current line (a text string) |

***

## readTextFile

Read a local file having text format.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
function callbackFunName(data) {
	
}

utils.readTextFile(
	fullPathName, //String
	callbackFunName, //String
	charSet //String
);
```
{% endcode %}

Details

| Argument        | Description                                                                                                                                                                           |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fullPathName    | \[String] fullPathName path+filenae in the server file system                                                                                                                         |
| callbackFunName | \[String] callbackFunName callback function name to invoke for each row; such a function must have a single argument, which will have the content of the current line (a text string) |
| charSet         | \[String] charSet charset to use when reading a text file                                                                                                                             |

***

## removeAttribute

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument               | Description |
| ---------------------- | ----------- |
| host                   | \[String]   |
| port                   | \[Integer]  |
| filterDN               | \[String]   |
| ldapUsername           | \[String]   |
| ldapPassword           | \[String]   |
| attributeNameToRemove  | \[String]   |
| attributeValueToRemove | \[String]   |

***

## removeCustomApplUserVars

Remove a custom parameter from the user session.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.removeCustomApplUserVars(
	code //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| code     | \[String]   |

***

## removeLinkedDevices

Remove current subdevice from Signal server.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.removeLinkedDevices();
```
{% endcode %}

***

## removeMembersFromChatGroup

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.removeMembersFromChatGroup(
	groupId, //String
	myPhoneNumber, //String
	contactPhoneNumbers //String>
);
```
{% endcode %}

Details

| Argument            | Description |
| ------------------- | ----------- |
| groupId             | \[String]   |
| myPhoneNumber       | \[String]   |
| contactPhoneNumbers | \[String>]  |

***

## removeSlashesForDatabaseField

Convert a javascript object as a JSON string, containing escape characters for each " symbol,\
soi that it can be saved in a database field and re-read later in a compatible format for JSON.parse();\
Example:\
stringifyForDatabaseField({ "text": "AB\\\C" }) -> "{ "text": "AB\C" }"

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.removeSlashesForDatabaseField(
	json //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| json     | \[String]   |

***

## removeSlashesForJSON

Convert a javascript object as a JSON string, containing escape characters for each " symbol,\
soi that it can be saved in a database field and re-read later in a compatible format for JSON.parse();\
Example:\
removeSlashesForJSON({ "text": "AB\\\C" }) -> "{ "text": "AB\C" }"

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.removeSlashesForJSON(
	json //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| json     | \[String]   |

***

## removeTime

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Date type
var risp = utils.removeTime(
	date //Date
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| date     | \[Date]     |

***

## renameFTPFile

Rename or move file of the FTP server

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument     | Description                                                                                                                           |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| protocol     | \[String]                                                                                                                             |
| host         | \[String] host FTP server host                                                                                                        |
| port         | \[Integer] port FTP server port                                                                                                       |
| useSSL       | \[Boolean] useSSL flag used to open a secure connection with the FTP server                                                           |
| username     | \[String] username username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| password     | \[String] password password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| fromFileName | \[String] fromFileName absolute path of old file                                                                                      |
| toFileName   | \[String] toFileName absolute path of new file                                                                                        |

***

## renameFTPFile \[Deprecated]

Rename or move file of the FTP server

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument     | Description                                                                                                                           |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| host         | \[String] host FTP server host                                                                                                        |
| port         | \[Integer] port FTP server port                                                                                                       |
| useSSL       | \[Boolean] useSSL flag used to open a secure connection with the FTP server                                                           |
| username     | \[String] username username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| password     | \[String] password password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| fromFileName | \[String] fromFileName absolute path of old file                                                                                      |
| toFileName   | \[String] toFileName absolute path of new file                                                                                        |

***

## renameFile

Rename the specified file, stored in the local file system.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.renameFile(
	directoryId, //Long
	oldFileName, //String
	newFileName //String
);
```
{% endcode %}

Details

| Argument                                                                                     | Description                                                                           |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| directoryId                                                                                  | \[Long] directoryId path on the local file system, where the original file is located |
| oldFileName                                                                                  | \[String] oldFileName old file name                                                   |
| newFileName                                                                                  | \[String] newFileName new file name                                                   |
| Fire an exception if the original file does not exist or the destination file already exists |                                                                                       |

***

## replaceAll

Replace all occurrences of the specified pattern within "text" with the new value.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.replaceAll(
	text, //String
	pattern, //String
	changedValue //String
);
```
{% endcode %}

Details

| Argument     | Description                                                               |
| ------------ | ------------------------------------------------------------------------- |
| text         | \[String] text text to analyze                                            |
| pattern      | \[String] pattern pattern to search for                                   |
| changedValue | \[String] changedValue value that replaces all occurrences of the pattern |

***

## resume

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.resume();
```
{% endcode %}

***

## round

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Number type
var risp = utils.round(
	num, //Number
	decimals //int
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| num      | \[Number]   |
| decimals | \[int]      |

***

## saveBlob

Load a binary file into a database field identified by "blobField" attribute in the table identified by "tableName"\
for an already existing record having the primary key identified by Array "pkNames" and values "pkValues".\
The file to load into the BLOB field is retrieved starting from the specified dirId + filename

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Integer type
var risp = utils.saveBlob(
	settings //Map
);
```
{% endcode %}

Details

| Argument               | Description                                                      |
| ---------------------- | ---------------------------------------------------------------- |
| settings               | \[Map] settings javascript object having the following structure |
| {                      |                                                                  |
| tableName: "...",      |                                                                  |
| blobField: "...",      |                                                                  |
| pkNames: \["..",...],  |                                                                  |
| pkValues: \["..",...], |                                                                  |
| datastoreId: xyz,      |                                                                  |
| dirId: xyz,            |                                                                  |
| blobFileName: "..."    |                                                                  |
| }                      |                                                                  |

***

## saveDocument

Generate a report starting from a .jasper report template and save it to the server file system, in the specified path.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument     | Description                                                                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| reportName   | \[String] reportName .jasper report name                                                                                                     |
| dirReports   | \[String] dirReports optional folder where the .jasper file is located; this relative path is always contained within the subolder /reports/ |
| datastoreId  | \[Long] datastoreId optional data source id used by the .jasper template to read data from the database                                      |
| compId       | \[Long] compId optional value: business component id to use to fill in the report                                                            |
| reportFormat | \[String] reportFormat report format to use when creating the report; e.g. PDF                                                               |
| reportParams | \[Object>] reportParams input parameters required by the report template                                                                     |
| savePath     | \[String] savePath path where the generated report will be saved; it must includes the file name                                             |

***

## saveEml

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument    | Description                                                                                                                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| server      | \[String]                                                                                                                                                                                                                |
| port        | \[Integer]                                                                                                                                                                                                               |
| username    | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| password    | \[String]                                                                                                                                                                                                                |
| protocol    | \[String]                                                                                                                                                                                                                |
| useTLS      | \[Boolean] flag used to enabled the TLS mode                                                                                                                                                                             |
| folderName  | \[String]                                                                                                                                                                                                                |
| messageIds  | \[String\[]]                                                                                                                                                                                                             |
| fileNames   | \[String\[]]                                                                                                                                                                                                             |
| directoryId | \[Long] dir id used to find or write or read files                                                                                                                                                                       |

***

## saveGridExportInCSV

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument        | Description                                                                                                                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| appId           | \[String]                                                                                                                                                                                                                |
| companyId       | \[String]                                                                                                                                                                                                                |
| siteId          | \[Long]                                                                                                                                                                                                                  |
| username        | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| password        | \[String]                                                                                                                                                                                                                |
| platformBaseUrl | \[String]                                                                                                                                                                                                                |
| functionId      | \[String]                                                                                                                                                                                                                |
| panelId         | \[Long]                                                                                                                                                                                                                  |
| filters         | \[List]                                                                                                                                                                                                                  |
| orders          | \[List]                                                                                                                                                                                                                  |
| attributes      | \[List]                                                                                                                                                                                                                  |
| titles          | \[List]                                                                                                                                                                                                                  |
| title           | \[String]                                                                                                                                                                                                                |
| toFile          | \[String]                                                                                                                                                                                                                |

***

## saveGridExportInExtendedCSV

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument        | Description                                                                                                                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| appId           | \[String]                                                                                                                                                                                                                |
| companyId       | \[String]                                                                                                                                                                                                                |
| siteId          | \[Long]                                                                                                                                                                                                                  |
| username        | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |
| password        | \[String]                                                                                                                                                                                                                |
| platformBaseUrl | \[String]                                                                                                                                                                                                                |
| functionId      | \[String]                                                                                                                                                                                                                |
| panelId         | \[Long]                                                                                                                                                                                                                  |
| filters         | \[List]                                                                                                                                                                                                                  |
| orders          | \[List]                                                                                                                                                                                                                  |
| attributes      | \[List]                                                                                                                                                                                                                  |
| titles          | \[List]                                                                                                                                                                                                                  |
| title           | \[String]                                                                                                                                                                                                                |
| toFile          | \[String]                                                                                                                                                                                                                |

***

## sendAlertEmail

Send an ALERT email to the specified destinations.\
Usernames are required for "from" and "destinations" arguments.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument        | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| from            | \[String]                                                    |
| subject         | \[String]                                                    |
| message         | \[String]                                                    |
| destinations    | \[String] destinations list of alert, chat or email          |
| carbonCopy      | \[String]                                                    |
| blindCarbonCopy | \[String]                                                    |
| priority        | \[String]                                                    |
| isHtmlContent   | \[boolean]                                                   |
| returnReceipt   | \[boolean]                                                   |
| filesToAttach   | \[String\[]] list of files, expressed with an absolute path. |

***

## sendAlertEmail

Send an ALERT email to the specified destinations.\
Usernames are required for "from" and "destinations" arguments.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument      | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| from          | \[String]                                                    |
| subject       | \[String]                                                    |
| message       | \[String]                                                    |
| destinations  | \[String] destinations list of alert, chat or email          |
| priority      | \[String]                                                    |
| isHtmlContent | \[boolean]                                                   |
| returnReceipt | \[boolean]                                                   |
| filesToAttach | \[String\[]] list of files, expressed with an absolute path. |

***

## sendAlertEmailFromTemplate

Send an ALERT email to the specified destinations, starting from the specified templateId.\
Usernames are required for "from" and "destinations" arguments, which are both optionals.\
This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email.\
When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument      | Description                                                                                                                                                          |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| from          | \[String]                                                                                                                                                            |
| templateId    | \[Number] id of the template previously defined, used to set subject and body; optionally, the template can be optionally used to set from, to, cc, receipt flag too |
| destinations  | \[String] destinations list of alert, chat or email                                                                                                                  |
| priority      | \[String]                                                                                                                                                            |
| isHtmlContent | \[boolean]                                                                                                                                                           |
| jsObj         | \[Map]                                                                                                                                                               |
| filesToAttach | \[String\[]] list of files, expressed with an absolute path.                                                                                                         |

***

## sendAlertEmailFromTemplate

Send an ALERT email to the specified destinations, starting from the specified templateId.\
Usernames are required for "from" and "destinations" arguments, which are both optionals.\
This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email.\
When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument        | Description                                                                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| from            | \[String]                                                                                                                                                            |
| templateId      | \[Number] id of the template previously defined, used to set subject and body; optionally, the template can be optionally used to set from, to, cc, receipt flag too |
| destinations    | \[String] destinations list of alert, chat or email                                                                                                                  |
| carbonCopy      | \[String]                                                                                                                                                            |
| blindCarbonCopy | \[String]                                                                                                                                                            |
| priority        | \[String]                                                                                                                                                            |
| isHtmlContent   | \[boolean]                                                                                                                                                           |
| jsObj           | \[Map]                                                                                                                                                               |
| dirId           | \[Long] dir id used to find or write or read files                                                                                                                   |
| fileName        | \[String] file name                                                                                                                                                  |
| filesToAttach   | \[String\[]] list of files, expressed with an absolute path.                                                                                                         |

***

## sendAlertEmailFromTemplate

Send an ALERT email to the specified destinations, starting from the specified templateId.\
Usernames are required for "from" and "destinations" arguments, which are both optionals.\
This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email.\
When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument        | Description                                                                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| from            | \[String]                                                                                                                                                            |
| templateId      | \[Number] id of the template previously defined, used to set subject and body; optionally, the template can be optionally used to set from, to, cc, receipt flag too |
| destinations    | \[String] destinations list of alert, chat or email                                                                                                                  |
| carbonCopy      | \[String]                                                                                                                                                            |
| blindCarbonCopy | \[String]                                                                                                                                                            |
| priority        | \[String]                                                                                                                                                            |
| isHtmlContent   | \[boolean]                                                                                                                                                           |
| jsObj           | \[Map]                                                                                                                                                               |
| filesToAttach   | \[String\[]] list of files, expressed with an absolute path.                                                                                                         |

***

## sendAlertEmailFromTemplateWithConversation

Send an ALERT email to the specified destinations, starting from the specified templateId.\
Usernames are required for "from" and "destinations" arguments, which are both optionals.\
This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email.\
When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument        | Description                                                                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| from            | \[String]                                                                                                                                                            |
| templateId      | \[Number] id of the template previously defined, used to set subject and body; optionally, the template can be optionally used to set from, to, cc, receipt flag too |
| destinations    | \[String] destinations list of alert, chat or email                                                                                                                  |
| carbonCopy      | \[String]                                                                                                                                                            |
| blindCarbonCopy | \[String]                                                                                                                                                            |
| priority        | \[String]                                                                                                                                                            |
| isHtmlContent   | \[boolean]                                                                                                                                                           |
| jsObj           | \[Map]                                                                                                                                                               |
| conversationId  | \[Long]                                                                                                                                                              |
| messageTag      | \[String]                                                                                                                                                            |
| dirId           | \[Long] dir id used to find or write or read files                                                                                                                   |
| fileName        | \[String] file name                                                                                                                                                  |
| filesToAttach   | \[String\[]] list of files, expressed with an absolute path.                                                                                                         |

***

## sendAlertEmailFromTemplateWithConversation

Send an ALERT email to the specified destinations, starting from the specified templateId.\
Usernames are required for "from" and "destinations" arguments, which are both optionals.\
This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email.\
When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument       | Description                                                                                                                                                          |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| from           | \[String]                                                                                                                                                            |
| templateId     | \[Number] id of the template previously defined, used to set subject and body; optionally, the template can be optionally used to set from, to, cc, receipt flag too |
| destinations   | \[String] destinations list of alert, chat or email                                                                                                                  |
| priority       | \[String]                                                                                                                                                            |
| isHtmlContent  | \[boolean]                                                                                                                                                           |
| jsObj          | \[Map]                                                                                                                                                               |
| conversationId | \[Long]                                                                                                                                                              |
| messageTag     | \[String]                                                                                                                                                            |
| filesToAttach  | \[String\[]] list of files, expressed with an absolute path.                                                                                                         |

***

## sendAlertEmailFromTemplateWithConversation

Send an ALERT email to the specified destinations, starting from the specified templateId.\
Usernames are required for "from" and "destinations" arguments, which are both optionals.\
This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email.\
When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument        | Description                                                                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| from            | \[String]                                                                                                                                                            |
| templateId      | \[Number] id of the template previously defined, used to set subject and body; optionally, the template can be optionally used to set from, to, cc, receipt flag too |
| destinations    | \[String] destinations list of alert, chat or email                                                                                                                  |
| carbonCopy      | \[String]                                                                                                                                                            |
| blindCarbonCopy | \[String]                                                                                                                                                            |
| priority        | \[String]                                                                                                                                                            |
| isHtmlContent   | \[boolean]                                                                                                                                                           |
| jsObj           | \[Map]                                                                                                                                                               |
| conversationId  | \[Long]                                                                                                                                                              |
| messageTag      | \[String]                                                                                                                                                            |
| filesToAttach   | \[String\[]] list of files, expressed with an absolute path.                                                                                                         |

***

## sendAlertEmailFromTemplateWithConversationAndSMTPSettings

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument        | Description                                                                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| from            | \[String]                                                                                                                                                            |
| templateId      | \[Number] id of the template previously defined, used to set subject and body; optionally, the template can be optionally used to set from, to, cc, receipt flag too |
| destinations    | \[String] destinations list of alert, chat or email                                                                                                                  |
| carbonCopy      | \[String]                                                                                                                                                            |
| blindCarbonCopy | \[String]                                                                                                                                                            |
| priority        | \[String]                                                                                                                                                            |
| isHtmlContent   | \[boolean]                                                                                                                                                           |
| jsObj           | \[Map]                                                                                                                                                               |
| conversationId  | \[Long]                                                                                                                                                              |
| messageTag      | \[String]                                                                                                                                                            |
| smtpHost        | \[String]                                                                                                                                                            |
| smtpPort        | \[String] port of SMTP server                                                                                                                                        |
| protocol        | \[String]                                                                                                                                                            |
| smtpUsername    | \[String] SMTP username for authentication                                                                                                                           |
| smtpPassword    | \[String]                                                                                                                                                            |
| useTLS          | \[String] flag used to enabled the TLS mode                                                                                                                          |
| dirId           | \[Long] dir id used to find or write or read files                                                                                                                   |
| fileName        | \[String] file name                                                                                                                                                  |
| filesToAttach   | \[String\[]] list of files, expressed with an absolute path.                                                                                                         |

***

## sendAlertEmailFromTemplateWithConversationAndSMTPSettings

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument        | Description                                                                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| from            | \[String]                                                                                                                                                            |
| templateId      | \[Number] id of the template previously defined, used to set subject and body; optionally, the template can be optionally used to set from, to, cc, receipt flag too |
| destinations    | \[String] destinations list of alert, chat or email                                                                                                                  |
| carbonCopy      | \[String]                                                                                                                                                            |
| blindCarbonCopy | \[String]                                                                                                                                                            |
| priority        | \[String]                                                                                                                                                            |
| isHtmlContent   | \[boolean]                                                                                                                                                           |
| jsObj           | \[Map]                                                                                                                                                               |
| conversationId  | \[Long]                                                                                                                                                              |
| messageTag      | \[String]                                                                                                                                                            |
| smtpHost        | \[String]                                                                                                                                                            |
| smtpPort        | \[String] port of SMTP server                                                                                                                                        |
| protocol        | \[String]                                                                                                                                                            |
| smtpUsername    | \[String] SMTP username for authentication                                                                                                                           |
| smtpPassword    | \[String]                                                                                                                                                            |
| useTLS          | \[String] flag used to enabled the TLS mode                                                                                                                          |
| filesToAttach   | \[String\[]] list of files, expressed with an absolute path.                                                                                                         |

***

## sendAlertEmailFromTemplateWithConversationAndSMTPSettings

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument       | Description                                                                                                                                                          |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| from           | \[String]                                                                                                                                                            |
| templateId     | \[Number] id of the template previously defined, used to set subject and body; optionally, the template can be optionally used to set from, to, cc, receipt flag too |
| destinations   | \[String] destinations list of alert, chat or email                                                                                                                  |
| priority       | \[String]                                                                                                                                                            |
| isHtmlContent  | \[boolean]                                                                                                                                                           |
| jsObj          | \[Map]                                                                                                                                                               |
| conversationId | \[Long]                                                                                                                                                              |
| messageTag     | \[String]                                                                                                                                                            |
| smtpHost       | \[String]                                                                                                                                                            |
| smtpPort       | \[String] port of SMTP server                                                                                                                                        |
| protocol       | \[String]                                                                                                                                                            |
| smtpUsername   | \[String] SMTP username for authentication                                                                                                                           |
| smtpPassword   | \[String]                                                                                                                                                            |
| useTLS         | \[String] flag used to enabled the TLS mode                                                                                                                          |
| filesToAttach  | \[String\[]] list of files, expressed with an absolute path.                                                                                                         |

***

## sendAlertEmailFromTemplateWithEmailAddresses

Send an ALERT email to the specified destinations, starting from the specified templateId.\
Email addresses are required for "from" and "destinations" arguments, which are both optionals.\
This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email.\
When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument          | Description                                                                                                                                                          |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fromEmail         | \[String]                                                                                                                                                            |
| templateId        | \[Number] id of the template previously defined, used to set subject and body; optionally, the template can be optionally used to set from, to, cc, receipt flag too |
| destinationsEmail | \[String]                                                                                                                                                            |
| priority          | \[String]                                                                                                                                                            |
| isHtmlContent     | \[boolean]                                                                                                                                                           |
| jsObj             | \[Map]                                                                                                                                                               |
| filesToAttach     | \[String\[]] list of files, expressed with an absolute path.                                                                                                         |

***

## sendAlertEmailFromTemplateWithEmailAddresses

Send an ALERT email to the specified destinations, starting from the specified templateId.\
Email addresses are required for "from" and "destinations" arguments, which are both optionals.\
This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email.\
When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument          | Description                                                                                                                                                          |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fromEmail         | \[String]                                                                                                                                                            |
| templateId        | \[Number] id of the template previously defined, used to set subject and body; optionally, the template can be optionally used to set from, to, cc, receipt flag too |
| destinationsEmail | \[String]                                                                                                                                                            |
| priority          | \[String]                                                                                                                                                            |
| isHtmlContent     | \[boolean]                                                                                                                                                           |
| jsObj             | \[Map]                                                                                                                                                               |
| dirId             | \[Long] dir id used to find or write or read files                                                                                                                   |
| fileName          | \[String] file name                                                                                                                                                  |
| filesToAttach     | \[String\[]] list of files, expressed with an absolute path.                                                                                                         |

***

## sendAlertEmailFromTemplateWithEmailAddressesWithConversation

Send an ALERT email to the specified destinations, starting from the specified templateId.\
Email addresses are required for "from" and "destinations" arguments, which are both optionals.\
This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email.\
When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument          | Description                                                                                                                                                          |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fromEmail         | \[String]                                                                                                                                                            |
| templateId        | \[Number] id of the template previously defined, used to set subject and body; optionally, the template can be optionally used to set from, to, cc, receipt flag too |
| destinationsEmail | \[String]                                                                                                                                                            |
| carbonCopy        | \[String]                                                                                                                                                            |
| blindCarbonCopy   | \[String]                                                                                                                                                            |
| priority          | \[String]                                                                                                                                                            |
| isHtmlContent     | \[boolean]                                                                                                                                                           |
| jsObj             | \[Map]                                                                                                                                                               |
| conversationId    | \[Long]                                                                                                                                                              |
| messageTag        | \[String]                                                                                                                                                            |
| dirId             | \[Long] dir id used to find or write or read files                                                                                                                   |
| fileName          | \[String] file name                                                                                                                                                  |
| filesToAttach     | \[String\[]] list of files, expressed with an absolute path.                                                                                                         |

***

## sendAlertEmailFromTemplateWithEmailAddressesWithConversation

Send an ALERT email to the specified destinations, starting from the specified templateId.\
Email addresses are required for "from" and "destinations" arguments, which are both optionals.\
This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email.\
When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument          | Description                                                                                                                                                          |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fromEmail         | \[String]                                                                                                                                                            |
| templateId        | \[Number] id of the template previously defined, used to set subject and body; optionally, the template can be optionally used to set from, to, cc, receipt flag too |
| destinationsEmail | \[String]                                                                                                                                                            |
| carbonCopy        | \[String]                                                                                                                                                            |
| blindCarbonCopy   | \[String]                                                                                                                                                            |
| priority          | \[String]                                                                                                                                                            |
| isHtmlContent     | \[boolean]                                                                                                                                                           |
| jsObj             | \[Map]                                                                                                                                                               |
| conversationId    | \[Long]                                                                                                                                                              |
| messageTag        | \[String]                                                                                                                                                            |
| filesToAttach     | \[String\[]] list of files, expressed with an absolute path.                                                                                                         |

***

## sendAlertEmailFromTemplateWithEmailAddressesWithConversation

Send an ALERT email to the specified destinations, starting from the specified templateId.\
Email addresses are required for "from" and "destinations" arguments, which are both optionals.\
This id is used to fetch from CON52 a template in terms of subject and body and use them to send an email.\
When using template's subject and form, if these contain variables :XXX, they will be replaced.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument          | Description                                                                                                                                                          |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fromEmail         | \[String]                                                                                                                                                            |
| templateId        | \[Number] id of the template previously defined, used to set subject and body; optionally, the template can be optionally used to set from, to, cc, receipt flag too |
| destinationsEmail | \[String]                                                                                                                                                            |
| priority          | \[String]                                                                                                                                                            |
| isHtmlContent     | \[boolean]                                                                                                                                                           |
| jsObj             | \[Map]                                                                                                                                                               |
| conversationId    | \[Long]                                                                                                                                                              |
| messageTag        | \[String]                                                                                                                                                            |
| filesToAttach     | \[String\[]] list of files, expressed with an absolute path.                                                                                                         |

***

## sendAlertEmailFromTemplateWithEmailAddressesWithConversationAndSMTPSettings

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument          | Description                                                                                                                                                          |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fromEmail         | \[String]                                                                                                                                                            |
| templateId        | \[Number] id of the template previously defined, used to set subject and body; optionally, the template can be optionally used to set from, to, cc, receipt flag too |
| destinationsEmail | \[String]                                                                                                                                                            |
| carbonCopy        | \[String]                                                                                                                                                            |
| blindCarbonCopy   | \[String]                                                                                                                                                            |
| priority          | \[String]                                                                                                                                                            |
| isHtmlContent     | \[boolean]                                                                                                                                                           |
| jsObj             | \[Map]                                                                                                                                                               |
| conversationId    | \[Long]                                                                                                                                                              |
| messageTag        | \[String]                                                                                                                                                            |
| smtpHost          | \[String]                                                                                                                                                            |
| smtpPort          | \[String] port of SMTP server                                                                                                                                        |
| protocol          | \[String]                                                                                                                                                            |
| smtpUsername      | \[String] SMTP username for authentication                                                                                                                           |
| smtpPassword      | \[String]                                                                                                                                                            |
| useTLS            | \[String] flag used to enabled the TLS mode                                                                                                                          |
| filesToAttach     | \[String\[]] list of files, expressed with an absolute path.                                                                                                         |

***

## sendAlertEmailFromTemplateWithEmailAddressesWithConversationAndSMTPSettings

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument          | Description                                                                                                                                                          |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fromEmail         | \[String]                                                                                                                                                            |
| templateId        | \[Number] id of the template previously defined, used to set subject and body; optionally, the template can be optionally used to set from, to, cc, receipt flag too |
| destinationsEmail | \[String]                                                                                                                                                            |
| priority          | \[String]                                                                                                                                                            |
| isHtmlContent     | \[boolean]                                                                                                                                                           |
| jsObj             | \[Map]                                                                                                                                                               |
| conversationId    | \[Long]                                                                                                                                                              |
| messageTag        | \[String]                                                                                                                                                            |
| smtpHost          | \[String]                                                                                                                                                            |
| smtpPort          | \[String] port of SMTP server                                                                                                                                        |
| protocol          | \[String]                                                                                                                                                            |
| smtpUsername      | \[String] SMTP username for authentication                                                                                                                           |
| smtpPassword      | \[String]                                                                                                                                                            |
| useTLS            | \[String] flag used to enabled the TLS mode                                                                                                                          |
| filesToAttach     | \[String\[]] list of files, expressed with an absolute path.                                                                                                         |

***

## sendAlertEmailFromTemplateWithEmailAddressesWithConversationAndSMTPSettings

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument          | Description                                                                                                                                                          |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fromEmail         | \[String]                                                                                                                                                            |
| templateId        | \[Number] id of the template previously defined, used to set subject and body; optionally, the template can be optionally used to set from, to, cc, receipt flag too |
| destinationsEmail | \[String]                                                                                                                                                            |
| carbonCopy        | \[String]                                                                                                                                                            |
| blindCarbonCopy   | \[String]                                                                                                                                                            |
| priority          | \[String]                                                                                                                                                            |
| isHtmlContent     | \[boolean]                                                                                                                                                           |
| jsObj             | \[Map]                                                                                                                                                               |
| conversationId    | \[Long]                                                                                                                                                              |
| messageTag        | \[String]                                                                                                                                                            |
| smtpHost          | \[String]                                                                                                                                                            |
| smtpPort          | \[String] port of SMTP server                                                                                                                                        |
| protocol          | \[String]                                                                                                                                                            |
| smtpUsername      | \[String] SMTP username for authentication                                                                                                                           |
| smtpPassword      | \[String]                                                                                                                                                            |
| useTLS            | \[String] flag used to enabled the TLS mode                                                                                                                          |
| dirId             | \[Long] dir id used to find or write or read files                                                                                                                   |
| fileName          | \[String] file name                                                                                                                                                  |
| filesToAttach     | \[String\[]] list of files, expressed with an absolute path.                                                                                                         |

***

## sendAlertEmailFromTemplateWithEmailAddressesWithSMTPSettings

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument          | Description                                                                                                                                                          |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fromEmail         | \[String]                                                                                                                                                            |
| templateId        | \[Number] id of the template previously defined, used to set subject and body; optionally, the template can be optionally used to set from, to, cc, receipt flag too |
| destinationsEmail | \[String]                                                                                                                                                            |
| priority          | \[String]                                                                                                                                                            |
| isHtmlContent     | \[boolean]                                                                                                                                                           |
| jsObj             | \[Map]                                                                                                                                                               |
| smtpHost          | \[String]                                                                                                                                                            |
| smtpPort          | \[String] port of SMTP server                                                                                                                                        |
| protocol          | \[String]                                                                                                                                                            |
| smtpUsername      | \[String] SMTP username for authentication                                                                                                                           |
| smtpPassword      | \[String]                                                                                                                                                            |
| useTLS            | \[String] flag used to enabled the TLS mode                                                                                                                          |
| dirId             | \[Long] dir id used to find or write or read files                                                                                                                   |
| fileName          | \[String] file name                                                                                                                                                  |
| filesToAttach     | \[String\[]] list of files, expressed with an absolute path.                                                                                                         |

***

## sendAlertEmailFromTemplateWithEmailAddressesWithSMTPSettings

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument          | Description                                                                                                                                                          |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fromEmail         | \[String]                                                                                                                                                            |
| templateId        | \[Number] id of the template previously defined, used to set subject and body; optionally, the template can be optionally used to set from, to, cc, receipt flag too |
| destinationsEmail | \[String]                                                                                                                                                            |
| priority          | \[String]                                                                                                                                                            |
| isHtmlContent     | \[boolean]                                                                                                                                                           |
| jsObj             | \[Map]                                                                                                                                                               |
| smtpHost          | \[String]                                                                                                                                                            |
| smtpPort          | \[String] port of SMTP server                                                                                                                                        |
| protocol          | \[String]                                                                                                                                                            |
| smtpUsername      | \[String] SMTP username for authentication                                                                                                                           |
| smtpPassword      | \[String]                                                                                                                                                            |
| useTLS            | \[String] flag used to enabled the TLS mode                                                                                                                          |
| filesToAttach     | \[String\[]] list of files, expressed with an absolute path.                                                                                                         |

***

## sendAlertEmailWithConversation

Send an ALERT email to the specified destinations.\
Usernames are required for "from" and "destinations" arguments.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument       | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| from           | \[String]                                                    |
| subject        | \[String]                                                    |
| message        | \[String]                                                    |
| destinations   | \[String] destinations list of alert, chat or email          |
| priority       | \[String]                                                    |
| isHtmlContent  | \[boolean]                                                   |
| returnReceipt  | \[boolean]                                                   |
| conversationId | \[Long]                                                      |
| messageTag     | \[String]                                                    |
| filesToAttach  | \[String\[]] list of files, expressed with an absolute path. |

***

## sendAlertEmailWithConversation

Send an ALERT email to the specified destinations.\
Usernames are required for "from" and "destinations" arguments.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument        | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| from            | \[String]                                                    |
| subject         | \[String]                                                    |
| message         | \[String]                                                    |
| destinations    | \[String] destinations list of alert, chat or email          |
| carbonCopy      | \[String]                                                    |
| blindCarbonCopy | \[String]                                                    |
| priority        | \[String]                                                    |
| isHtmlContent   | \[boolean]                                                   |
| returnReceipt   | \[boolean]                                                   |
| conversationId  | \[Long]                                                      |
| messageTag      | \[String]                                                    |
| filesToAttach   | \[String\[]] list of files, expressed with an absolute path. |

***

## sendAlertEmailWithConversation

Send an ALERT email to the specified destinations.\
Usernames are required for "from" and "destinations" arguments.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument        | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| from            | \[String]                                                    |
| subject         | \[String]                                                    |
| message         | \[String]                                                    |
| destinations    | \[String] destinations list of alert, chat or email          |
| carbonCopy      | \[String]                                                    |
| blindCarbonCopy | \[String]                                                    |
| priority        | \[String]                                                    |
| isHtmlContent   | \[boolean]                                                   |
| returnReceipt   | \[boolean]                                                   |
| conversationId  | \[Long]                                                      |
| messageTag      | \[String]                                                    |
| dirId           | \[Long] dir id used to find or write or read files           |
| fileName        | \[String] file name                                          |
| filesToAttach   | \[String\[]] list of files, expressed with an absolute path. |

***

## sendAlertEmailWithEmailAddresses

Send an ALERT email to the specified destinations.\
Email addresses are required for "from" and "destinations" arguments.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument          | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| fromEmail         | \[String]                                                    |
| subject           | \[String]                                                    |
| message           | \[String]                                                    |
| destinationsEmail | \[String]                                                    |
| priority          | \[String]                                                    |
| isHtmlContent     | \[boolean]                                                   |
| returnReceipt     | \[boolean]                                                   |
| filesToAttach     | \[String\[]] list of files, expressed with an absolute path. |

***

## sendAlertEmailWithEmailAddressesWithConversation

Send an ALERT email to the specified destinations.\
Email addresses are required for "from" and "destinations" arguments.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument          | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| fromEmail         | \[String]                                                    |
| subject           | \[String]                                                    |
| message           | \[String]                                                    |
| destinationsEmail | \[String]                                                    |
| priority          | \[String]                                                    |
| isHtmlContent     | \[boolean]                                                   |
| returnReceipt     | \[boolean]                                                   |
| conversationId    | \[Long]                                                      |
| messageTag        | \[String]                                                    |
| filesToAttach     | \[String\[]] list of files, expressed with an absolute path. |

***

## sendAlertEmailWithEmailAddressesWithConversation

Send an ALERT email to the specified destinations.\
Email addresses are required for "from" and "destinations" arguments.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument          | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| fromEmail         | \[String]                                                    |
| subject           | \[String]                                                    |
| message           | \[String]                                                    |
| destinationsEmail | \[String]                                                    |
| carbonCopy        | \[String]                                                    |
| blindCarbonCopy   | \[String]                                                    |
| priority          | \[String]                                                    |
| isHtmlContent     | \[boolean]                                                   |
| returnReceipt     | \[boolean]                                                   |
| conversationId    | \[Long]                                                      |
| messageTag        | \[String]                                                    |
| filesToAttach     | \[String\[]] list of files, expressed with an absolute path. |

***

## sendAlertMessage

Send an ALERT message to the specified destinations.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument       | Description |
| -------------- | ----------- |
| from           | \[String]   |
| message        | \[String]   |
| siteId         | \[Long]     |
| destination    | \[String]   |
| priority       | \[String]   |
| conversationId | \[Long]     |
| messageTag     | \[String]   |

***

## sendAlertMessage

Send an ALERT message to the specified destinations.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.sendAlertMessage(
	from, //String
	message, //String
	destinations, //String
	priority //String
);
```
{% endcode %}

Details

| Argument     | Description                                         |
| ------------ | --------------------------------------------------- |
| from         | \[String]                                           |
| message      | \[String]                                           |
| destinations | \[String] destinations list of alert, chat or email |
| priority     | \[String]                                           |

***

## sendAlertMessage

Send an ALERT message to the specified destinations.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument       | Description                                         |
| -------------- | --------------------------------------------------- |
| from           | \[String]                                           |
| message        | \[String]                                           |
| destinations   | \[String] destinations list of alert, chat or email |
| priority       | \[String]                                           |
| conversationId | \[Long]                                             |
| messageTag     | \[String]                                           |

***

## sendChatMessage

Send a CHAT message to the specified destinations.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument       | Description                                         |
| -------------- | --------------------------------------------------- |
| from           | \[String]                                           |
| message        | \[String]                                           |
| destinations   | \[String] destinations list of alert, chat or email |
| priority       | \[String]                                           |
| conversationId | \[Long]                                             |
| messageTag     | \[String]                                           |

***

## sendChatMessage

Send a CHAT message to the specified destinations.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.sendChatMessage(
	from, //String
	message, //String
	destinations, //String
	priority //String
);
```
{% endcode %}

Details

| Argument     | Description                                         |
| ------------ | --------------------------------------------------- |
| from         | \[String]                                           |
| message      | \[String]                                           |
| destinations | \[String] destinations list of alert, chat or email |
| priority     | \[String]                                           |

***

## sendEmail

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument                | Description                                                                                  |
| ----------------------- | -------------------------------------------------------------------------------------------- |
| from                    | \[String]                                                                                    |
| to                      | \[String]                                                                                    |
| cc                      | \[String]                                                                                    |
| bcc                     | \[String]                                                                                    |
| subject                 | \[String]                                                                                    |
| body                    | \[String]                                                                                    |
| isHtmlContent           | \[Boolean]                                                                                   |
| returnReceipt           | \[Boolean]                                                                                   |
| zipFiles                | \[Boolean]                                                                                   |
| deleteFilesAfterSending | \[Boolean] a boolean flag used to optionally delete files to attach, after sending the email |
| dirId                   | \[Long] dir id used to find or write or read files                                           |
| fileName                | \[String] file name                                                                          |
| filesToAttach           | \[String\[]] list of files, expressed with an absolute path.                                 |

***

## sendEmail

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument                | Description                                                                                  |
| ----------------------- | -------------------------------------------------------------------------------------------- |
| from                    | \[String]                                                                                    |
| to                      | \[String]                                                                                    |
| cc                      | \[String]                                                                                    |
| bcc                     | \[String]                                                                                    |
| subject                 | \[String]                                                                                    |
| body                    | \[String]                                                                                    |
| isHtmlContent           | \[Boolean]                                                                                   |
| returnReceipt           | \[Boolean]                                                                                   |
| zipFiles                | \[Boolean]                                                                                   |
| deleteFilesAfterSending | \[Boolean] a boolean flag used to optionally delete files to attach, after sending the email |
| filesToAttach           | \[String\[]] list of files, expressed with an absolute path.                                 |

***

## sendEmail

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument                | Description                                                                                  |
| ----------------------- | -------------------------------------------------------------------------------------------- |
| smtpHost                | \[String]                                                                                    |
| smtpPort                | \[String] port of SMTP server                                                                |
| useTLS                  | \[String] flag used to enabled the TLS mode                                                  |
| protocol                | \[String]                                                                                    |
| smtpUsername            | \[String] SMTP username for authentication                                                   |
| smtpPassword            | \[String]                                                                                    |
| from                    | \[String]                                                                                    |
| to                      | \[String]                                                                                    |
| cc                      | \[String]                                                                                    |
| bcc                     | \[String]                                                                                    |
| subject                 | \[String]                                                                                    |
| body                    | \[String]                                                                                    |
| isHtmlContent           | \[Boolean]                                                                                   |
| returnReceipt           | \[Boolean]                                                                                   |
| zipFiles                | \[Boolean]                                                                                   |
| deleteFilesAfterSending | \[Boolean] a boolean flag used to optionally delete files to attach, after sending the email |
| filesToAttach           | \[String\[]] list of files, expressed with an absolute path.                                 |

***

## sendEmailWithMessageTemplate

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument        | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| subject         | \[String]                                                    |
| messageTemplate | \[String]                                                    |
| jsObj           | \[Map]                                                       |
| from            | \[String]                                                    |
| to              | \[String]                                                    |
| cc              | \[String]                                                    |
| bcc             | \[String]                                                    |
| priority        | \[String]                                                    |
| isHtmlContent   | \[Boolean]                                                   |
| returnReceipt   | \[Boolean]                                                   |
| smtpHost        | \[String]                                                    |
| smtpPort        | \[String] port of SMTP server                                |
| protocol        | \[String]                                                    |
| smtpUsername    | \[String] SMTP username for authentication                   |
| smtpPassword    | \[String]                                                    |
| useTLS          | \[String] flag used to enabled the TLS mode                  |
| zipFiles        | \[Boolean]                                                   |
| dirId           | \[Long] dir id used to find or write or read files           |
| filesToAttach   | \[String\[]] list of files, expressed with an absolute path. |

***

## sendEmailWithMessageTemplateWithSettings

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument           | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| subject            | \[String]                                                    |
| messageTemplate    | \[String]                                                    |
| jsObj              | \[Map]                                                       |
| from               | \[String]                                                    |
| to                 | \[String]                                                    |
| cc                 | \[String]                                                    |
| bcc                | \[String]                                                    |
| priority           | \[String]                                                    |
| isHtmlContent      | \[Boolean]                                                   |
| returnReceipt      | \[Boolean]                                                   |
| smtpHost           | \[String]                                                    |
| smtpPort           | \[String] port of SMTP server                                |
| protocol           | \[String]                                                    |
| smtpUsername       | \[String] SMTP username for authentication                   |
| smtpPassword       | \[String]                                                    |
| useTLS             | \[String] flag used to enabled the TLS mode                  |
| zipFiles           | \[Boolean]                                                   |
| additionalSettings | \[Map]                                                       |
| dirId              | \[Long] dir id used to find or write or read files           |
| filesToAttach      | \[String\[]] list of files, expressed with an absolute path. |

***

## sendEmailWithSMTPSettings

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument                | Description                                                                                  |
| ----------------------- | -------------------------------------------------------------------------------------------- |
| from                    | \[String]                                                                                    |
| to                      | \[String]                                                                                    |
| cc                      | \[String]                                                                                    |
| bcc                     | \[String]                                                                                    |
| subject                 | \[String]                                                                                    |
| body                    | \[String]                                                                                    |
| isHtmlContent           | \[Boolean]                                                                                   |
| returnReceipt           | \[Boolean]                                                                                   |
| zipFiles                | \[Boolean]                                                                                   |
| deleteFilesAfterSending | \[Boolean] a boolean flag used to optionally delete files to attach, after sending the email |
| smtpHost                | \[String]                                                                                    |
| smtpPort                | \[String] port of SMTP server                                                                |
| protocol                | \[String]                                                                                    |
| smtpUsername            | \[String] SMTP username for authentication                                                   |
| smtpPassword            | \[String]                                                                                    |
| useTLS                  | \[String] flag used to enabled the TLS mode                                                  |
| dirId                   | \[Long] dir id used to find or write or read files                                           |
| fileName                | \[String] file name                                                                          |
| filesToAttach           | \[String\[]] list of files, expressed with an absolute path.                                 |

***

## sendEmailWithSMTPSettings

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument                | Description                                                                                  |
| ----------------------- | -------------------------------------------------------------------------------------------- |
| from                    | \[String]                                                                                    |
| to                      | \[String]                                                                                    |
| cc                      | \[String]                                                                                    |
| bcc                     | \[String]                                                                                    |
| subject                 | \[String]                                                                                    |
| body                    | \[String]                                                                                    |
| isHtmlContent           | \[Boolean]                                                                                   |
| returnReceipt           | \[Boolean]                                                                                   |
| zipFiles                | \[Boolean]                                                                                   |
| deleteFilesAfterSending | \[Boolean] a boolean flag used to optionally delete files to attach, after sending the email |
| smtpHost                | \[String]                                                                                    |
| smtpPort                | \[String] port of SMTP server                                                                |
| protocol                | \[String]                                                                                    |
| smtpUsername            | \[String] SMTP username for authentication                                                   |
| smtpPassword            | \[String]                                                                                    |
| useTLS                  | \[String] flag used to enabled the TLS mode                                                  |
| filesToAttach           | \[String\[]] list of files, expressed with an absolute path.                                 |

***

## sendEmailWithSettings

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument                | Description                                                                                  |
| ----------------------- | -------------------------------------------------------------------------------------------- |
| smtpHost                | \[String]                                                                                    |
| smtpPort                | \[String] port of SMTP server                                                                |
| useTLS                  | \[String] flag used to enabled the TLS mode                                                  |
| protocol                | \[String]                                                                                    |
| smtpUsername            | \[String] SMTP username for authentication                                                   |
| smtpPassword            | \[String]                                                                                    |
| from                    | \[String]                                                                                    |
| to                      | \[String]                                                                                    |
| cc                      | \[String]                                                                                    |
| bcc                     | \[String]                                                                                    |
| subject                 | \[String]                                                                                    |
| body                    | \[String]                                                                                    |
| isHtmlContent           | \[Boolean]                                                                                   |
| returnReceipt           | \[Boolean]                                                                                   |
| zipFiles                | \[Boolean]                                                                                   |
| deleteFilesAfterSending | \[Boolean] a boolean flag used to optionally delete files to attach, after sending the email |
| settings                | \[HashMap]                                                                                   |
| filesToAttach           | \[String\[]] list of files, expressed with an absolute path.                                 |

***

## sendEmailWithTemplate

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument      | Description                                                                                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| subject       | \[String]                                                                                                                                                          |
| templateId    | \[Long] id of the template previously defined, used to set subject and body; optionally, the template can be optionally used to set from, to, cc, receipt flag too |
| jsObj         | \[Map]                                                                                                                                                             |
| from          | \[String]                                                                                                                                                          |
| to            | \[String]                                                                                                                                                          |
| cc            | \[String]                                                                                                                                                          |
| bcc           | \[String]                                                                                                                                                          |
| priority      | \[String]                                                                                                                                                          |
| isHtmlContent | \[Boolean]                                                                                                                                                         |
| returnReceipt | \[Boolean]                                                                                                                                                         |
| zipFiles      | \[Boolean]                                                                                                                                                         |
| dirId         | \[Long] dir id used to find or write or read files                                                                                                                 |
| filesToAttach | \[String\[]] list of files, expressed with an absolute path.                                                                                                       |

***

## sendFile \[Deprecated]

Send a single file to the FTP server and store it in the specified folder with the specified name.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument    | Description                                                                                                                                                                                               |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| host        | \[String] host FTP server host                                                                                                                                                                            |
| port        | \[Integer] port FTP server port                                                                                                                                                                           |
| useSSL      | \[Boolean] useSSL flag used to open a secure connection with the FTP server                                                                                                                               |
| username    | \[String] username username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used)                                                                     |
| password    | \[String] password password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used)                                                                     |
| destFile    | \[String] destFile folder in the FTP server + destination file name where storing the file                                                                                                                |
| directoryId | \[Long] directoryId directory id directory identifier, used to define the absolute path, in the central server, where the file will be stored; if null, there must be one only entry for this application |
| fileName    | \[String] fileName file name; it can includes a subpath to append to the base path specified through directoryId                                                                                          |

***

## sendFile \[Deprecated]

Send a single file to the FTP server and store it in the specified folder with the specified name.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument   | Description                                                                                                                           |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| host       | \[String] host FTP server host                                                                                                        |
| port       | \[Integer] port FTP server port                                                                                                       |
| useSSL     | \[Boolean] useSSL flag used to open a secure connection with the FTP server                                                           |
| username   | \[String] username username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| password   | \[String] password password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| destFile   | \[String] destFile folder in the FTP server + destination file name where storing the file                                            |
| sourceFile | \[String] sourceFile absolute path in the server file system + file name, related to the file to read                                 |

***

## sendFile

Send a single file to the FTP server and store it in the specified folder with the specified name.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument       | Description                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| protocol       | \[String]                                                                                                                             |
| host           | \[String] host FTP server host                                                                                                        |
| port           | \[Integer] port FTP server port                                                                                                       |
| useSSL         | \[Boolean] useSSL flag used to open a secure connection with the FTP server                                                           |
| username       | \[String] username username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| password       | \[String] password password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| destFile       | \[String] destFile folder in the FTP server + destination file name where storing the file                                            |
| sourceFile     | \[String] sourceFile absolute path in the server file system + file name, related to the file to read                                 |
| sessionTimeout | \[Integer] sessionTimeout seconds of timeout session                                                                                  |

***

## sendFile

Send a single file to the FTP server and store it in the specified folder with the specified name.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument   | Description                                                                                                                           |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| protocol   | \[String]                                                                                                                             |
| host       | \[String] host FTP server host                                                                                                        |
| port       | \[Integer] port FTP server port                                                                                                       |
| useSSL     | \[Boolean] useSSL flag used to open a secure connection with the FTP server                                                           |
| username   | \[String] username username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| password   | \[String] password password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| destFile   | \[String] destFile folder in the FTP server + destination file name where storing the file                                            |
| sourceFile | \[String] sourceFile absolute path in the server file system + file name, related to the file to read                                 |

***

## sendFile

Send a single file to the FTP server and store it in the specified folder with the specified name.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument    | Description                                                                                                                                                                                               |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| protocol    | \[String]                                                                                                                                                                                                 |
| host        | \[String] host FTP server host                                                                                                                                                                            |
| port        | \[Integer] port FTP server port                                                                                                                                                                           |
| useSSL      | \[Boolean] useSSL flag used to open a secure connection with the FTP server                                                                                                                               |
| username    | \[String] username username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used)                                                                     |
| password    | \[String] password password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used)                                                                     |
| destFile    | \[String] destFile folder in the FTP server + destination file name where storing the file                                                                                                                |
| directoryId | \[Long] directoryId directory id directory identifier, used to define the absolute path, in the central server, where the file will be stored; if null, there must be one only entry for this application |
| fileName    | \[String] fileName file name; it can includes a subpath to append to the base path specified through directoryId                                                                                          |

***

## sendFile

Send a single file to the FTP server and store it in the specified folder with the specified name.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument       | Description                                                                                                                                                                                               |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| protocol       | \[String]                                                                                                                                                                                                 |
| host           | \[String] host FTP server host                                                                                                                                                                            |
| port           | \[Integer] port FTP server port                                                                                                                                                                           |
| useSSL         | \[Boolean] useSSL flag used to open a secure connection with the FTP server                                                                                                                               |
| username       | \[String] username username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used)                                                                     |
| password       | \[String] password password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used)                                                                     |
| destFile       | \[String] destFile folder in the FTP server + destination file name where storing the file                                                                                                                |
| directoryId    | \[Long] directoryId directory id directory identifier, used to define the absolute path, in the central server, where the file will be stored; if null, there must be one only entry for this application |
| fileName       | \[String] fileName file name; it can includes a subpath to append to the base path specified through directoryId                                                                                          |
| sessionTimeout | \[Integer] sessionTimeout seconds of timeout session                                                                                                                                                      |

***

## sendFiles

Send one or more files to the FTP server and store them in the specified folder.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument       | Description                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| protocol       | \[String]                                                                                                                             |
| host           | \[String] host FTP server host                                                                                                        |
| port           | \[Integer] port FTP server port                                                                                                       |
| useSSL         | \[Boolean] useSSL flag used to open a secure connection with the FTP server                                                           |
| username       | \[String] username username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| password       | \[String] password password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| toDir          | \[String] toDir folder in the FTP server where storing the file                                                                       |
| sessionTimeout | \[Integer] sessionTimeout seconds of timeout session                                                                                  |
| filePaths      | \[String\[]] filePaths list of absolute paths in the server file system + file names                                                  |

***

## sendFiles \[Deprecated]

Send one or more files to the FTP server and store them in the specified folder.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument  | Description                                                                                                                           |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| host      | \[String] host FTP server host                                                                                                        |
| port      | \[Integer] port FTP server port                                                                                                       |
| useSSL    | \[Boolean] useSSL flag used to open a secure connection with the FTP server                                                           |
| username  | \[String] username username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| password  | \[String] password password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| toDir     | \[String] toDir folder in the FTP server where storing the file                                                                       |
| filePaths | \[String\[]] filePaths list of absolute paths in the server file system + file names                                                  |

***

## sendFiles

Send one or more files to the FTP server and store them in the specified folder.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument  | Description                                                                                                                           |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| protocol  | \[String]                                                                                                                             |
| host      | \[String] host FTP server host                                                                                                        |
| port      | \[Integer] port FTP server port                                                                                                       |
| useSSL    | \[Boolean] useSSL flag used to open a secure connection with the FTP server                                                           |
| username  | \[String] username username to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| password  | \[String] password password to use when authenticating to the FTP server (optional: if not specified, an anonymous user will be used) |
| toDir     | \[String] toDir folder in the FTP server where storing the file                                                                       |
| filePaths | \[String\[]] filePaths list of absolute paths in the server file system + file names                                                  |

***

## sendGmail

Send an email using GMail APIs.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument                | Description                                                                                                                                        |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| from                    | \[String] from (optional, can be null) a string representing the email address to use as the "from address" to send the email                      |
| to                      | \[String] to a string composed of one or more email addresses, separated by a comma (,)                                                            |
| cc                      | \[String] cc (carbon copy addresses) a string composed of one or more email addresses, separated by a comma (,)                                    |
| bcc                     | \[String] bcc (hidden addresses) a string composed of one or more email addresses, separated by a comma (,)                                        |
| subject                 | \[String] subject a string representing the email title                                                                                            |
| body                    | \[String] body the email body content                                                                                                              |
| isHtmlContent           | \[Boolean] isHtmlContent a boolean flag used to define if the body content is in HTML format or not                                                |
| returnReceipt           | \[Boolean] returnReceipt a boolean flag used to request a return receipt to the destinators                                                        |
| zipFiles                | \[Boolean] zipFiles a boolean flag used to compress all files to attach in a unique zip file and send it, in order to reduce the email size        |
| deleteFilesAfterSending | \[Boolean] deleteFilesAfterSending a boolean flag used to optionally delete files to attach, after sending the email                               |
| filesToAttach           | \[String\[]] filesToAttach a list of files to attach, separated by a comma; use \[] to not include files; each file must include the absolute path |

***

## sendJavascriptMessage

Send a js message to the specified destinations, which will be passed forward to a js callback function

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.sendJavascriptMessage(
	from, //String
	obj, //Map
	siteId, //Long
	destination, //String
	functionName //String
);
```
{% endcode %}

Details

| Argument     | Description |
| ------------ | ----------- |
| from         | \[String]   |
| obj          | \[Map]      |
| siteId       | \[Long]     |
| destination  | \[String]   |
| functionName | \[String]   |

***

## sendJavascriptMessage

Send a js message to the specified destinations, which will be passed forward to a js callback function

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.sendJavascriptMessage(
	from, //String
	obj, //Map
	destinations, //String
	functionName //String
);
```
{% endcode %}

Details

| Argument     | Description                                         |
| ------------ | --------------------------------------------------- |
| from         | \[String]                                           |
| obj          | \[Map]                                              |
| destinations | \[String] destinations list of alert, chat or email |
| functionName | \[String]                                           |

***

## setApplicationId

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setApplicationId(
	appId //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| appId    | \[String]   |

***

## setAttributeValue

Set the value for the specified attribute name, related to the input object.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setAttributeValue(
	attributeName, //String
	value //Object
);
```
{% endcode %}

Details

| Argument      | Description                                                          |
| ------------- | -------------------------------------------------------------------- |
| attributeName | \[String] attributeName attribute name contained in the input object |
| value         | \[Object] value value to set                                         |

***

## setCompanyId

Set company id to use in UserInfo.\
The companyId setting is allowed ONLY IF the current companyId value is undefined, as in case of an action invoked by a queue.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setCompanyId(
	companyId //String
);
```
{% endcode %}

Details

| Argument  | Description |
| --------- | ----------- |
| companyId | \[String]   |

***

## setContentType

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setContentType(
	contentType //String
);
```
{% endcode %}

Details

| Argument    | Description |
| ----------- | ----------- |
| contentType | \[String]   |

***

## setContextValue

Set a variabile in the js context.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setContextValue(
	varName, //String
	varValue //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| varName  | \[String]   |
| varValue | \[String]   |

***

## setDecodeField

Set the corresponding table.field name for the specified attribute, coming from the grid, included in the filtering/sorting conditions.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setDecodeField(
	attributeName, //String
	fieldName //String
);
```
{% endcode %}

Details

| Argument      | Description                                                          |
| ------------- | -------------------------------------------------------------------- |
| attributeName | \[String] attributeName attribute name to decode                     |
| fieldName     | \[String] fieldName table.field name to use instead of the attribute |

***

## setDecodeOperator

Set the corresponding table.field name for the specified attribute, coming from the grid, included in the filtering/sorting conditions.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setDecodeOperator(
	attributeName, //String
	operator //String
);
```
{% endcode %}

Details

| Argument      | Description                                      |
| ------------- | ------------------------------------------------ |
| attributeName | \[String] attributeName attribute name to decode |
| operator      | \[String]                                        |

***

## setDecodeUpperCase

Set the corresponding table.field name for the specified attribute, coming from the grid, included in the filtering/sorting conditions.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setDecodeUpperCase(
	attributeName, //String
	uppercase //Boolean
);
```
{% endcode %}

Details

| Argument      | Description                                      |
| ------------- | ------------------------------------------------ |
| attributeName | \[String] attributeName attribute name to decode |
| uppercase     | \[Boolean]                                       |

***

## setElaborationState

Set the final elaboration state for the linked monitored service.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setElaborationState(
	elaborationState, //String
	result //String
);
```
{% endcode %}

Details

| Argument         | Description |
| ---------------- | ----------- |
| elaborationState | \[String]   |
| result           | \[String]   |

***

## setHttpResponseCode

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setHttpResponseCode(
	httpResponseCode //int
);
```
{% endcode %}

Details

| Argument         | Description |
| ---------------- | ----------- |
| httpResponseCode | \[int]      |

***

## setImagesInXls

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setImagesInXls(
	dirId, //Long
	srcFileName, //String
	destFileName, //String
	sheetName, //String
	images //Map>
);
```
{% endcode %}

Details

| Argument     | Description                                                     |
| ------------ | --------------------------------------------------------------- |
| dirId        | \[Long] dir id used to find or write or read files              |
| srcFileName  | \[String]                                                       |
| destFileName | \[String]                                                       |
| sheetName    | \[String] name of sheet in xls, xlsx or Google Spreadsheet file |
| images       | \[Map>]                                                         |

***

## setLineToPDFFile

Include a row to an already opened PDF file, in a specified position.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setLineToPDFFile(
	uuid, //String
	x, //int
	y, //int
	line, //String
	settings //Map
);
```
{% endcode %}

Details

| Argument | Description                                                                                                                     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| uuid     | \[String] uuid output stream identifier, related to a PDF file already opended; this id is returned by the "openPDFFile" method |
| x        | \[int] x X coordinate                                                                                                           |
| y        | \[int] y Y coordinate                                                                                                           |
| line     | \[String] line a row to add                                                                                                     |
| settings | \[Map]                                                                                                                          |

***

## setPassword

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setPassword(
	pwd //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| pwd      | \[String]   |

***

## setReturnValue

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setReturnValue(
	returnValue //Object
);
```
{% endcode %}

Details

| Argument    | Description |
| ----------- | ----------- |
| returnValue | \[Object]   |

***

## setSiteId

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setSiteId(
	siteId //Long
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| siteId   | \[Long]     |

***

## setUsername

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setUsername(
	username //String
);
```
{% endcode %}

Details

| Argument | Description                                                                                                                                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| username | \[String] username; if not specified, the userEmail value set as application property for Google service account will be used as owner for this folder. If this argument is defined, the folder owner will be this user. |

***

## setVariable

Set the value for the specified attribute name, related to the input object.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.setVariable(
	attributeName, //String
	value //Object
);
```
{% endcode %}

Details

| Argument      | Description                                                          |
| ------------- | -------------------------------------------------------------------- |
| attributeName | \[String] attributeName attribute name contained in the input object |
| value         | \[Object] value value to set                                         |

***

## sha256

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.sha256(
	text //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| text     | \[String]   |

***

## startThreadedAction

Enqueue an action within the current one.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.startThreadedAction(
	actionId, //Long
	waitTime, //Long
	args //Map
);
```
{% endcode %}

Details

| Argument | Description                                                       |
| -------- | ----------------------------------------------------------------- |
| actionId | \[Long]                                                           |
| waitTime | \[Long] waitTime milliseconds to wait before starting this action |
| args     | \[Map]                                                            |

***

## stringify

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.stringify(
	o //Object
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| o        | \[Object]   |

***

## stringifyForDatabaseField

Convert a javascript object as a JSON string, containing escape characters for each " symbol,\
soi that it can be saved in a database field and re-read later in a compatible format for JSON.parse();\
Example:\
stringifyForDatabaseField({ text: "ABC" }) -> "{ "text": "ABC" }"

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.stringifyForDatabaseField(
	obj //Object
);
```
{% endcode %}

Details

| Argument | Description                                |
| -------- | ------------------------------------------ |
| obj      | \[Object] obj javascript object to convert |

***

## suspend

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.suspend(
	suspendingId //String
);
```
{% endcode %}

Details

| Argument     | Description |
| ------------ | ----------- |
| suspendingId | \[String]   |

***

## suspend

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.suspend();
```
{% endcode %}

***

## terminateElaborationState

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.terminateElaborationState(
	elaborationState, //String
	result, //String
	logType, //String
	logMessage, //String
	messageCode //String
);
```
{% endcode %}

Details

| Argument         | Description |
| ---------------- | ----------- |
| elaborationState | \[String]   |
| result           | \[String]   |
| logType          | \[String]   |
| logMessage       | \[String]   |
| messageCode      | \[String]   |

***

## textToInt

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Long type
var risp = utils.textToInt(
	text //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| text     | \[String]   |

***

## trim

Trim method used by Javascript actions

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.trim(
	text //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| text     | \[String]   |

***

## uncamel

Convert an attribute name to a database field name representation. Example: fieldName -> FIELD\_NAME

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.uncamel(
	attributeName //String
);
```
{% endcode %}

Details

| Argument      | Description                             |
| ------------- | --------------------------------------- |
| attributeName | \[String] attributeName table.fieldname |

***

## unzip

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return String type
var risp = utils.unzip(
	directoryId, //Long
	zipFile, //String
	directoryIdOut, //Long
	deleteZipFile //Boolean
);
```
{% endcode %}

Details

| Argument       | Description                                        |
| -------------- | -------------------------------------------------- |
| directoryId    | \[Long] dir id used to find or write or read files |
| zipFile        | \[String]                                          |
| directoryIdOut | \[Long]                                            |
| deleteZipFile  | \[Boolean]                                         |

***

## updateApplUserParameter

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return ListResponse type
var risp = utils.updateApplUserParameter(
	companyId, //String
	siteId, //Long
	userCodeId, //String
	parameters //Map[]
);
```
{% endcode %}

Details

| Argument   | Description |
| ---------- | ----------- |
| companyId  | \[String]   |
| siteId     | \[Long]     |
| userCodeId | \[String]   |
| parameters | \[Map\[]]   |

***

## updateDbTableMetadata

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.updateDbTableMetadata(
	dbTableId //Long
);
```
{% endcode %}

Details

| Argument  | Description |
| --------- | ----------- |
| dbTableId | \[Long]     |

***

## updateMappedObject

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument              | Description                                                                                                                                                               |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| neutralObject         | \[Map]                                                                                                                                                                    |
| emptyAsNull           | \[Boolean]                                                                                                                                                                |
| forceAttributesToNull | \[Boolean]                                                                                                                                                                |
| tableName             | \[String] String: name of table                                                                                                                                           |
| dataModelId           | \[Long] data model id, used to compare the attribute value types                                                                                                          |
| additionalAttributes  | \[Map]                                                                                                                                                                    |
| separatedTransaction  | \[Boolean] boolean value; if true, the SQL instruction is executed on a separated transaction which is immediately committed (as for a REQUIRE\_NEW EJB directive)        |
| interruptExecution    | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |
| pks                   | \[String\[]]                                                                                                                                                              |

***

## updateMappedObject

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument              | Description                                                                                                                                                               |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| neutralObject         | \[Map]                                                                                                                                                                    |
| emptyAsNull           | \[Boolean]                                                                                                                                                                |
| forceAttributesToNull | \[Boolean]                                                                                                                                                                |
| dataModelId           | \[Long] data model id, used to compare the attribute value types                                                                                                          |
| additionalAttributes  | \[Map]                                                                                                                                                                    |
| separatedTransaction  | \[Boolean] boolean value; if true, the SQL instruction is executed on a separated transaction which is immediately committed (as for a REQUIRE\_NEW EJB directive)        |
| interruptExecution    | \[Boolean] boolean value; if true, an erroneous SQL instruction fires an exception that will interrupt the javascript execution; if false, the js execution will continue |
| pks                   | \[String\[]]                                                                                                                                                              |

***

## updateObject

Execute an UPDATE SQL statement into the specified table, starting from the javascript object passed as argument.\
All object attributes will be converted to database fields (uncamel format); example: productCode -> PRODUCT\_CODE\
It is possible to force a '' value to null\
It is possible to force all not specified attributes to null

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
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
{% endcode %}

Details

| Argument              | Description                                                                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| obj                   | \[Map] obj javascript object to update into the specified table                                                                            |
| emptyAsNull           | \[Boolean] emptyAsNull flag used to force an empty '' attribute value to a null value                                                      |
| forceAttributesToNull | \[Boolean] forceAttributesToNull flag uded to force all not specified attributes to null                                                   |
| tableName             | \[String] tableName table name which must be defined as a writable object (iut must have a data mode)                                      |
| dataSourceId          | \[Long] dataSourceId optional data source id                                                                                               |
| separatedTransaction  | \[Boolean] separatedTransaction flag used to define if this query has to be perfomed in a separated transaction                            |
| interruptExecution    | \[Boolean] interruptExecution flag used to defined if the whole server side transation must be interruped and rollbacked in case of errors |

***

## updatePeopleData

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Sub01People type
var risp = utils.updatePeopleData(
	companyId, //String
	siteId, //Long
	userCodeId, //String
	data //Map
);
```
{% endcode %}

Details

| Argument   | Description |
| ---------- | ----------- |
| companyId  | \[String]   |
| siteId     | \[Long]     |
| userCodeId | \[String]   |
| data       | \[Map]      |

***

## updateUser

values setter from Users.insertUser \*\*/

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Prm01User type
var risp = utils.updateUser(
	companyId, //String
	siteId, //Long
	userCodeId, //String
	languageId, //String
	user //Map
);
```
{% endcode %}

Details

| Argument   | Description                                |
| ---------- | ------------------------------------------ |
| companyId  | \[String]                                  |
| siteId     | \[Long]                                    |
| userCodeId | \[String]                                  |
| languageId | \[String] language to use for translations |
| user       | \[Map]                                     |

***

## updateUserRole

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return Prm01User type
var risp = utils.updateUserRole(
	companyId, //String
	siteId, //Long
	userCodeId, //String
	roles //Map[]
);
```
{% endcode %}

Details

| Argument   | Description |
| ---------- | ----------- |
| companyId  | \[String]   |
| siteId     | \[Long]     |
| userCodeId | \[String]   |
| roles      | \[Map\[]]   |

***

## userRoleActive

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.userRoleActive(
	companyId, //String
	siteId, //Long
	userCodeId, //String
	roleId, //String
	activeDate //Date
);
```
{% endcode %}

Details

| Argument   | Description |
| ---------- | ----------- |
| companyId  | \[String]   |
| siteId     | \[Long]     |
| userCodeId | \[String]   |
| roleId     | \[String]   |
| activeDate | \[Date]     |

***

## validateCode

Try to decode a field value from a table through another table where finding that value and a primary key, returned as return.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.validateCode(
	settings //Map
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| settings | \[Map]      |

***

## waitAllElements

Wait for termination of all elements enqueued and identified by the specified element ids.\
After that, execute the specified actionId in the specified queue.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.waitAllElements(
	queueName, //String
	actionId, //Long
	elementIds //Long[]
);
```
{% endcode %}

Details

| Argument   | Description |
| ---------- | ----------- |
| queueName  | \[String]   |
| actionId   | \[Long]     |
| elementIds | \[Long\[]]  |

***

## waitAnyElement

Wait for termination of at least one of the elements enqueued and identified by the specified element ids.\
After that, execute the specified actionId in the specified queue.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.waitAnyElement(
	queueName, //String
	actionId, //Long
	elementIds //Long[]
);
```
{% endcode %}

Details

| Argument   | Description |
| ---------- | ----------- |
| queueName  | \[String]   |
| actionId   | \[Long]     |
| elementIds | \[Long\[]]  |

***

## warn

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.warn(
	msg //String
);
```
{% endcode %}

Details

| Argument | Description |
| -------- | ----------- |
| msg      | \[String]   |

***

## writeBase64File

Write to the local file system the file content passed as argument.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.writeBase64File(
	filePath, //String
	base64Content //String
);
```
{% endcode %}

Details

| Argument      | Description                                                 |
| ------------- | ----------------------------------------------------------- |
| filePath      | \[String] filePath path + file name to create               |
| base64Content | \[String] base64Content file content, expressed in BASE 64. |

***

## writeToCSVFile

Add a row to an already opened CSV file.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.writeToCSVFile(
	uuid, //String
	obj, //Map
	rowSeparator //String
);
```
{% endcode %}

Details

| Argument     | Description                                                                                                                     |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| uuid         | \[String] uuid output stream identifier, related to a CSV file already opended; this id is returned by the "openCSVFile" method |
| obj          | \[Map] obj a record, containing data to save into the row to write                                                              |
| rowSeparator | \[String]                                                                                                                       |

***

## writeToCSVFile

Add a row to an already opened CSV file.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.writeToCSVFile(
	uuid, //String
	obj //Map
);
```
{% endcode %}

Details

| Argument | Description                                                                                                                     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| uuid     | \[String] uuid output stream identifier, related to a CSV file already opended; this id is returned by the "openCSVFile" method |
| obj      | \[Map] obj a record, containing data to save into the row to write                                                              |

***

## writeToTextFile

Add a row to an already opened text file. NO additional CR characters are automatically added to the row: it is up to the programmer to add them, if needed.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
utils.writeToTextFile(
	uuid, //String
	text //String
);
```
{% endcode %}

Details

| Argument | Description                                                                                                                     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| uuid     | \[String] uuid output stream identifier, related to a CSV file already opended; this id is returned by the "openCSVFile" method |
| text     | \[String]                                                                                                                       |

***

## zipFiles

Create a zip file containing the list of passed files.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.zipFiles(
	baseDir, //String
	files, //String[]
	zipFile, //String
	deleteFilesAfterZip //Boolean
);
```
{% endcode %}

Details

| Argument            | Description                                                                                           |
| ------------------- | ----------------------------------------------------------------------------------------------------- |
| baseDir             | \[String] baseDir base dir used to calculate the entry in the zip (i.e. a relative path + file name)  |
| files               | \[String\[]] files files to zip (each including an absolute path)                                     |
| zipFile             | \[String] zipFile zip file to create, including the absolute path                                     |
| deleteFilesAfterZip | \[Boolean] deleteFilesAfterZip flag used to decide if deleting all input files after the zip creation |

***

## zipFiles

Create a zip file containing the list of passed files.

Syntax

{% code overflow="wrap" lineNumbers="true" %}
```js
//return boolean type
var risp = utils.zipFiles(
	baseDirId, //Long
	zipFile, //String
	deleteFilesAfterZip //Boolean
);
```
{% endcode %}

Details

| Argument            | Description                                                                                           |
| ------------------- | ----------------------------------------------------------------------------------------------------- |
| baseDirId           | \[Long] dir id used to find or write or read files                                                    |
| zipFile             | \[String] zipFile zip file to create, including the absolute path                                     |
| deleteFilesAfterZip | \[Boolean] deleteFilesAfterZip flag used to decide if deleting all input files after the zip creation |

***
