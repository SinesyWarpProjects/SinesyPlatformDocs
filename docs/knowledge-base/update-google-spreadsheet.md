# Update Google Spreadsheet

You can write data to a Google Spreadsheet with a single request by specifying the coordinates of cells or groups of cells and their values.

Example

```javascript
var values = [
    \{ coordinate: 'Foglio4!A1:A1', value: 'cell A1' \},
    \{ coordinate: 'Foglio4!B5:B5', value: 123.4 \},
    \{ coordinate: 'Foglio4!C3:C3', value: utils.getCurrentDateAndTime() \},
    \{ coordinate: 'Foglio4!C4:C4', value: '30-01-2024' \},
    \{ coordinate: 'Foglio4!C5:C5', value: '30/01/2025' \},
    \{ coordinate: 'Foglio4!D1:F1', value: ['A', 'B', 'C'] \},
    \{ coordinate: 'Foglio4!D11:D13', value: [['A'], ['B'], ['C']] \}
];

utils.updateSheets('user@user.it','spreadsheetId', values);
```
