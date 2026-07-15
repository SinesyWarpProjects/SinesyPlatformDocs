# XML

## Parse a simple XML document and generate a Javascript "compatible" representation

_Javascript "compatible" representation is expressed using lists and js objects, where each js object has special attributes named: "tagName", "tagValue" and "subTags"._

The document (list of tags) is expressed as a list of js objects, where each js object can have a list of subtags and attributes, expressed object's attributes. The js object always contains special entries named "tagName", "subTags" and optionally "tagValue" if there is tag value.

**Syntax**

```javascript
var jsObjectsList = utils.parseXML(xmlDocument);
```

**Details**

| Argument    | Description                 |
| ----------- | --------------------------- |
| xmlDocument | an XML document as a String |

Returns an XML representation, expressed as a list of Javascript objects, where each of them has three special attributes: "tagName", "tagValue" and "subTags". You can then navigate through this js object and extract any data.

**Example**

```markup
<?xml version="1.0"?>

<resultset statement="SELECT * FROM dual" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

    <row>
        <field name="COD_COMPANY">0</field>
        <field name="TIPO">1</field>
        <field name="DES_DESCRIZIONE">Description 1</field>
        <field name="LOGO" xsi:nil="true" />
        <field name="ATTIVA">T</field>
        <field name="UTENTE_CREAZIONE" xsi:nil="true" />
        <field name="DATA_CREAZIONE">2021-01-15 09:15:56</field>
        <field name="UTENTE_MODIFICA" xsi:nil="true" />
        <field name="DATA_MODIFICA" xsi:nil="true" />
        <field name="VERSIONE">0</field>
    </row>
    
    <row>
        <field name="COD_COMPANY">0</field>
        <field name="TIPO">2</field>
        <field name="DES_DESCRIZIONE">Description 2</field>
        <field name="LOGO" xsi:nil="true" />
        <field name="ATTIVA">T</field>
        <field name="UTENTE_CREAZIONE" xsi:nil="true" />
        <field name="DATA_CREAZIONE">2021-01-15 13:42:35</field>
        <field name="UTENTE_MODIFICA" xsi:nil="true" />
        <field name="DATA_MODIFICA" xsi:nil="true" />
        <field name="VERSIONE">0</field>
    </row>
    
    <row>
        <field name="COD_COMPANY">0</field>
        <field name="TIPO">3</field>
        <field name="DES_DESCRIZIONE">Description 3</field>
        <field name="LOGO" xsi:nil="true" />
        <field name="ATTIVA">T</field>
        <field name="UTENTE_CREAZIONE" xsi:nil="true" />
        <field name="DATA_CREAZIONE">2021-01-15 13:42:35</field>
        <field name="UTENTE_MODIFICA" xsi:nil="true" />
        <field name="DATA_MODIFICA" xsi:nil="true" />
        <field name="VERSIONE">0</field>
    </row>

</resultset>
```

```javascript
var textFile = utils.readTextFile("/path/test.xml");
var xmlDocNodes = utils.parseXML(textFile);
var rows = xmlDocNodes[0].get('subTags');
for (var i=0; i<rows.length;i++) {
    var row = rows[i];
    var fields = row.get('subTags');
    for(var f=0; f<fields.length; f++) {
        var field = fields[f];
        var name = field.get('name');
        var tagValue = field.get('tagValue');
        utils.log('Row ' + i + ', ' + name + " = " + tagValue, 'DEBUG');
    }
}
```

## Search for the specified path within the XML document parse result

_(i.e. after invoking parseXML method)_

**Syntax**

```javascript
var jsObjectsList = utils.findTagsByPath(xmlDocNodes, path);
```

**Details**

| Argument    | Description                                 |
| ----------- | ------------------------------------------- |
| xmlDocNodes | XML document parsed through parseXML method |
| path        | a tags path, expressed as tag1/tag2/tag3... |

```
 Return all occurrences matching the specified path.
```

**Example**

JohnDoe...

JaneRoe...

```javascript
var xml = utils.getWebContent("[http://...",false,"GET](http://...",false,"GET)", null,null,null,null);
var xmlDocNodes = utils.parseXML(xml); // list of companies
var staffList = utils.findTagsByPath(xmlDocNodes, "company/staff");
```

## Scroll all input nodes and for each create a js object whose attributes are the subtags having the specified tagNames

_(i.e. after invoking parseXML and findTagNames methods)_

For each selected node, a new js object will be created and it will have as many attributes as the ones specified through tagNames argument, whose values will be retrieved by as sub tags values.

**Syntax**

```javascript
var jsObjects = utils.findTagsByNames(selectedNodes, tagNames);
```

**Details**

| Argument      | Description                                                          |
| ------------- | -------------------------------------------------------------------- |
| selectedNodes | nodes to analyze                                                     |
| tagNames      | list of tag names to compare with each subtag of each selected node. |

**Example**

JohnDoe...

JaneRoe...

```javascript
var xml = utils.getWebContent("[http://...",false,"GET](http://...",false,"GET)", null,null,null,null);
var xmlDocNodes = utils.parseXML(xml); // list of companies
var staffList = utils.findTagsByPath(xmlDocNodes, "company/staff");
var jsObjects = utils.findTagsByNames(staffList,["firstname","lastname"]);
```

will return a list of js objects having this structure:

`[{ "firstname": "John", "lastname": ... }, { "firstname": "Jane", ...}]`

## Convert XML to HTML through a stylesheet (XSL file)

Platform embeds the Java standard XSLT transformer, through which you can convert data contained in an XML file to an HTML document, using an XSL file describing the layout of the HTML document and how to show data coming from the XML.

Basically, this feature uses XML + XSL to produce HTML

**Syntax**

```javascript
var ok = utils.convertXMLToHTML(
   xmlDirId, xmlFileName, xslDirId, xslFileName, htmlDirId, htmlFileName,
   namespaceAware,Boolean validating
);
```

**Details**

| Argument       | Description                                                                                                       |
| -------------- | ----------------------------------------------------------------------------------------------------------------- |
| xmlDirId       | directory id where the XML data file is located                                                                   |
| xmlFileName    | XML data file name, stored in the xmlDirId                                                                        |
| xlsDirId       | directory id where the stylesheet XSL file is located                                                             |
| xlsFileName    | XLS file, used to define ther layout for the HTML file to generate                                                |
| htmlDirId      | directory id where the HTML will be generated                                                                     |
| htmlFileName   | HTML file name to generate                                                                                        |
| namespaceAware | true or false; defines whether the namespace must be checkd; if in dubt, set it to true                           |
| validating     | true or false; defines whether the XML must be validated with respect to the XSL file; if in dubt, set it to true |

Note: if the resulting HTML file seems empty (contains only CSS content but not data), it is likely that the XSL definition requires a strong validation; in such a scenario, set both "namespaceAware" and "validating" to true.

## Generate an XML document from JSON

Platform provides a server-side javascript method you can use to convert a JSON content to an XML document. This method does not support attributes generation within an XML tag. The mapping between the input javascript object and the final XML document follows these rules:

|  Input data                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | XML element                                                                                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "header" argument                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | optional header tag, something like \<?xml version='1.0' encoding='UTF-8'?>                                                                                                                                                                                                 |
| "rootNode" argument                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | the root XML node, something like \<maintag> ... \</maintag>                                                                                                                                                                                                                |
| <p>"jsonObj" argument: represents the javascript object to convert to XML, composed of attributes, which can be filled with "primitive" values, like numbers or text; e.g. </p><p>{ orderNum: 1 }</p>                                                                                                                                                                                                                                                                                                                        | each attribute in jsonObj is converted to a tag, whose value is the tag value; e.g. \<orderNum>1\</orderNum>                                                                                                                                                                |
| <p>"jsonObj" argument: represents the javascript object to convert to XML, composed of attributes, which can contain inner objects; e.g.</p><p> { customer: { name: "John", surname: "Smith"  } }</p>                                                                                                                                                                                                                                                                                                                        | <p>&#x3C;customer></p><p>  &#x3C;name>John&#x3C;/name></p><p>  &#x3C;surname>Smith&#x3C;/surname></p><p>&#x3C;/customer></p>                                                                                                                                                |
| <p>"jsonObj" argument: represents the javascript object to convert to XML, composed of attributes, which can be contain a list of objects ; e.g.</p><p> { rows: [</p><p>  { description: "Article1", price: 123  },</p><p>  { description: "Article2", price: 456  }</p><p>]} </p><p>A JSON notation is not able alone to define how to manage a list of subtags: an additional tag is needed for each element in list and can be defined through the "listMapping" argument; e.g. </p><p>listMapping: { rows: "row" }  </p> | <p>&#x3C;rows></p><p>  &#x3C;row>      &#x3C;description>Article1&#x3C;/description>&#x3C;price>123&#x3C;/price></p><p>  &#x3C;/row></p><p>  &#x3C;row>&#x3C;description>Article2&#x3C;/description>&#x3C;price>456&#x3C;/price></p><p>  &#x3C;/row></p><p>&#x3C;/rows></p> |
| in a javascript object the attributes order is not important, but the corresponding tags order is important in an XML document. Tags order is defined through the "settings.tagSequence" or "settings.xsd" properties                                                                                                                                                                                                                                                                                                        | sub-tags order is defined starting from the attribute order specified either in the tagSequence property or through the xsd content                                                                                                                                         |

**Syntax**

```javascript
utils.generateXML(
  Map jsonObj,
  String header,
  String rootNode,
  Long dirId,
  String fileName,
  Map attrMapping,
  Map listMapping,
  Map settings
);
```

**Details**

| Argument    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| jsonObj     | javascript object to convert; see examples below                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| header      | string representing the XML header; can be null                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| rootNode    | string representing the root XML node, expressed as \<tagname>                                                                                                                                                                                                                                                                                                                                                                                                                           |
| dirId       | directory id where saving the XML document                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| fileName    | file name to use for the XML document to save                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| attrMapping | <p>mapping between attribute names and tags, expressed as a javascript object; can be null; if not specified or if an attribute has not been found in the mapping, the corresponding tag is converted as it is; e.g. </p><p>{ tag1: "value1" }  --->  &#x3C;tag1>value1&#x3C;/tag1></p><p>If a mapping is specified for tag1, then it is used for naming the tag; e.g. </p><p>attrMapping: { tag1: "TAG_ONE"}   </p><p>{ tag1: "value1" }  --->  &#x3C;TAG_ONE>value1&#x3C;/TAG_ONE></p> |
| listMapping | mapping between an attribute having a list of values and the tag name to use to identify each element of the list; can be null                                                                                                                                                                                                                                                                                                                                                           |
| settings    | additional settings; CANNOT be null; see below for more details                                                                                                                                                                                                                                                                                                                                                                                                                          |

The argument "**settings**" can contain a variety of different attributes, according to the specific scenario:

* **toUpperCase**: optional flag having values true|false convert the attribute names in upper case when creating XML tags
* **xsd**: optional string representing the relative path, within the web context, where finding the .xsd file for the XMKL document to generate; tags order is defined starting from the sequence defined in the xsd file
* **xsdValidation**: optional true|false; ignored if "xsd" has not been specified; default value: false
* **tabSpaces**: optional int number of spaces to add for each nested tag; if not specified, it is set to 2
* **dateFormat**: optional string representing the date format for a Date object; if not specified, its default value is "yyyy-MM-dd"&#x20;
* **decimalFormat**: optional string representing the numeric format for a number; if not specified, its default value is "#.00"
* **attributesToConvertToDate**: javascript Array of attribute names to convert to dates; each of them must be expressed as "yyyy-MM-dd HH:mm:ss" or "yyyy-MM-dd" (i.e. JSON standard Platform dates) and will be converted in strings having "dateFormat" format &#x20;
* **tagSequence**: optional map representing for each tag, the ordered list of subtags; e.g. { TAG1: \["TAG2","TAG3"], ... }

**Note**: either "settings.tagSequence" or "**settings.xsd**" must be specified, in order to get the right order for the tags. If an XSD file is specified, it can be used to automatically retrieve the sequence of sub-tags for each tag, since the order is part of the XSD definition. Otherwise, it must be specified ,manually, through the tagSequence attribute.

**Example**

In this example there is a direct mapping between a simple javascript object and tags of the generated XML document, except for the input attribute named "**ragSoc**", converted to the "**rag**" tag name:

```javascript
var jsonObj = {
  cli: { ragSoc: "valore" },
  ri: [
    { art: "A1", prz: 1 },
    { art: "A2", prz: 2 }
  ]
};


utils.generateXML(
    jsonObj,
    null,
    "<fa>",
    49, // dir id
    "example.xml",
    { // attrMapping
        ragSoc: "rag"
    },
    { // listMapping
        ri: { tagName: "r", omit: false }
    }, 
    { // settings
        tagSequence: {
            fa: ["cli","ri"],
            r: ["art","prz"],
            cli: [ "rag" ]
        }
    } 
);

```

The resulting XML document would be:

```javascript
<fa>
  <cli>
    <rag>valore</rag>
  </cli>
  <ri>
    <r>
      <art>A1</art>
      <prz>1</art>
    </r>
    <r>
      <art>A2</art>
      <prz>2</art>
    </r>
  </ri>
</fa>
```

The settings's attribute "**tagSequence**" is needed to provide the right sequence for \<r> tag's sub-tags.

**Example**

This is a more complex example, where there is a list of sub-tags combined with another sub-tag, all children of the same tag. The sub-tags sequence is defined, starting from the XSD definition.

```javascript
var jsonObj = {
  FatturaElettronicaHeader: {
      DatiTrasmissione: {
          IdTrasmittente: {
              IdPaese: "IT",
              IdCodice: "01234567890"
          },
          ProgressivoInvio: "00001"
      }
  },
  FatturaElettronicaBody: {
      DatiBeniServizi: {
          linee: [
              {
                  NumeroLinea: 1,
                  Descrizione: "abc",
                  Quantita: 5,
                  PrezzoUnitario: 1,
                  PrezzoTotale: 5,
                  AliquotaIVA: 22
              },
              {
                  NumeroLinea: 2,
                  Descrizione: "def",
                  Quantita: 1,
                  PrezzoUnitario: 2,
                  PrezzoTotale: 2,
                  AliquotaIVA: 22
              }
          ],
          DatiRiepilogo: {
              AliquotaIVA: 22,
              ImponibileImporto: 5,
              Imposta: 2,
              EsigibilitaIVA: "D"
          }
      },
      DatiPagamento: {
          CondizioniPagamento: "TP01",
          DettaglioPagamento: {
              ModalitaPagamento: "MP01",
              DataScadenzaPagamento: "2015-01-30 00:00:00",
              ImportoPagamento: "7"
          }
      }
  }
};


utils.generateXML(
    jsonObj,
    null, // header
    '<p:FatturaElettronica xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:p="http://ivaservizi.agenziaentrate.gov.it/docs/xsd/fatture/v1.2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" versione="FPR12" xsi:schemaLocation="http://ivaservizi.agenziaentrate.gov.it/docs/xsd/fatture/v1.2 http://www.fatturapa.gov.it/export/fatturazione/sdi/fatturapa/v1.2/Schema_del_file_xml_FatturaPA_versione_1.2.xsd">',
    49, // dir id
    "fattura.xml",
    { // attrMapping
    },
    { // listMapping
      linee: { tagName: "DettaglioLinee", omit: true }
    },
    { // settings
      xsd: utils.getDirectoryPath(49)+"/fattura.xsd",
      dateFormat: "yyyy-MM-dd",
      attributesToConvertToDate: ["DataScadenzaPagamento"]
    } 
);
```

Please note the Date management: in case the javascript object provided in input does NOT contain Javascript Date objects, it is needed to correctly (i) parse them in input and (ii) format them in output, within the XML document. Both operations can be carried out through the optional setting "**attributesToConvertToDate**", which contain a list of input attributes expressed as String and always in the format "yyyy-MM-dd" or "yyyy-MM-dd HH:mm:ss". This is the string format managed internally by Platform (e.g. executeQuery, etc.) and can be used as the starting point. Once this string values have been converted to Date objects, they can be converted to the final String format, using the "**dateFormat**" attribute.
