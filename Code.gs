function sendDataToTinybird() {
  // Get the active sheet in your Google Spreadsheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Use your Tinybird authorization token
  var tinybirdToken = "YOUR_TOKEN_HERE";

  // Rename the sheet, turning spaces into underscores and making it all lowercase
  var sheetName = SpreadsheetApp.getActiveSpreadsheet()
    .getName()
    .toLowerCase()
    .replace(/ /g, "_");

  // Get column names. Remove empty ones.
  var lastColumn = sheet.getLastColumn();
  var columnNames = sheet
    .getRange(1, 1, 1, lastColumn)
    .getValues()[0]
    .filter(function (name) {
      return name;
    });

  // Set up the header for our web request
  var headers = {
    Authorization: "Bearer " + tinybirdToken,
  };

  // Get all the data from the sheet
  var lastRow = sheet.getLastRow();
  var range = sheet.getRange(2, 1, lastRow - 1, lastColumn);
  var rows = range.getValues();

  // We'll send data in chunks of 500 rows at a time
  var batchSize = 500;
  for (var start = 0; start < rows.length; start += batchSize) {
    // Find the last row in this batch
    var end = Math.min(start + batchSize, rows.length);

    // Get the rows for this batch
    var batchRows = rows.slice(start, end);

    // Convert the batch of rows to the needed JSON format
    var payload = batchRows
      .map(function (row) {
        var obj = {};
        for (var i = 0; i < columnNames.length; i++) {
          obj[columnNames[i]] = row[i];
        }
        return JSON.stringify(obj);
      })
      .join("\n");

    // Set up the web request
    var options = {
      method: "post",
      contentType: "application/json",
      headers: headers,
      payload: payload,
      muteHttpExceptions: true, // To get full response even if there's an error
    };

    // Send the data
    var response = UrlFetchApp.fetch(
      "https://api.tinybird.co/v0/events?name=" + sheetName,
      options
    );

    // Show the result of our request
    Logger.log(response.getContentText());
  }
}

// Creates a new menu in Google Sheets when you open the spreadsheet
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("Tinybird")
    .addItem("Send Data to Tinybird", "sendDataToTinybird")
    .addToUi();
}
