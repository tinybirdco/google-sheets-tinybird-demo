function sendDataToTinybird() {
  // Get Data from the Sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

// Modify or replace these values as needed
  var eventName = 'google_sheets'; // change this to your specific event name
  var columnNames = sheet.getRange("A1:Q1").getValues()[0]; // Assuming columns are from A to R

  // Define the options common to all requests
  var headers = {
	Authorization: 'Bearer YOUR_TINYBIRD_AUTH_TOKEN'
  };

  // Dynamically get the range of data in your spreadsheet
  var lastRow = sheet.getLastRow();
  var lastColumn = sheet.getLastColumn();
  var range = sheet.getRange(2, 1, lastRow - 1, lastColumn);
  var rows = range.getValues();

  rows.forEach(function (row) {
	var payload = {};

	// Dynamically Create the payload
	for (var i = 0; i < columnNames.length; i++) {
  		payload[columnNames[i]] = row[i];
	}

	// Define the options for this request
	var options = {
  	method: "post",
  	contentType: "application/json",
  	headers: headers,
  	payload: JSON.stringify(payload),
  	muteHttpExceptions: true, // To get full response on error
	};

	// Make the request
	var response = UrlFetchApp.fetch(
  	"https://api.tinybird.co/v0/events?name=" + eventName,
  	options
	);

	// Log the response
	Logger.log(response.getContentText());
  });
}

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Tinybird')
  	.addItem('Send Data to Tinybird', 'sendDataToTinybird')
  	.addToUi();
}