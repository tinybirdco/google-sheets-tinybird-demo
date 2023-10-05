function sendDataToTinybird() {
  // Get Data from the Sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Modify or replace these values as needed
  var rows = sheet.getRange("A2:R15603").getValues(); // Modify this range as needed
  var eventName = "google_sheets"; // change this to your specific event name

  // Define the options common to all requests
  var headers = {
    Authorization: "Bearer YOUR_TINYBIRD_AUTH_TOKEN",
  };
  rows.forEach(function (row) {
    // Create the payload for this row
    var payload = JSON.stringify({
      Age: row[0],
      Gender: row[1],
      ItemPurchased: row[2],
      Category: row[3],
      PurchaseAmountUSD: row[4],
      Location: row[5],
      Size: row[6],
      Color: row[7],
      Season: row[8],
      ReviewRating: row[9],
      SubscriptionStatus: row[10],
      ShippingType: row[11],
      DiscountApplied: row[12],
      PromoCodeUsed: row[13],
      PreviousPurchases: row[14],
      PaymentMethod: row[15],
      FrequencyOfPurchases: row[16],
    });

    // Define the options for this request
    var options = {
      method: "post",
      contentType: "application/json",
      headers: headers,
      payload: payload,
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
  ui.createMenu("Tinybird")
    .addItem("Send Data to Tinybird", "sendDataToTinybird")
    .addToUi();
}
