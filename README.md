# Google Sheets to Tinybird Integration

This project enables seamless integration between Google Sheets and Tinybird, allowing users to send data directly from Sheets to Tinybird's API. By automating data transfer, users can efficiently manage data workflows, analyze information, and create real-time data pipelines.
Why This Is Useful

* Automated Data Transfer: Eliminate manual data entry by automatically sending data from Google Sheets to Tinybird.
* Real-time Analysis: Enable real-time data analysis by connecting your Google Sheets with Tinybird's powerful analytics engine.
* Flexible Workflows: Customize data structures and create different triggers according to your needs.
* Ease of Use: Leverage Google Sheets as a familiar interface to manage and transfer your data.

## Prerequisites

* A Google Sheet containing the data you want to send to Tinybird.
* Tinybird Account: You need to have an account with Tinybird to obtain an API token.

## Instructions

### 1. Sign Up for Tinybird

Create a Tinybird account and follow their onboarding process to set up your environment.

### 2. Obtain Your Tinybird API Token

Go to your Tinybird dashboard to get your API token. This token will be used to authenticate your requests to Tinybird.

### 3. Open Your Google Sheet

Open the Google Sheet where you want to run the script.

## 4. Upload the sample data to your Google Sheet

In Google Sheets, import the [sample data set](https://github.com/JoeKarlsson/google_sheets_tinybird_demo/blob/main/data.csv) of [customer shopping trends](https://www.kaggle.com/datasets/iamsouravbanerjee/customer-shopping-trends-dataset?select=shopping_trends_updated.csv) by following these steps:

File > Import > Upload > Select a file from your device > Import data > Replace current sheet.

### 4. Access the Script Editor

Go to the menu bar at the top and click on Extensions > Apps Script. This will open the script editor in a new tab.

### 5. Write or Paste the Script

In the script editor, write or paste the script from [`code.gs`](https://github.com/JoeKarlsson/google_sheets_tinybird_demo/blob/main/Code.gs) and replace `YOUR_API_TOKEN` with the token you obtained from Tinybird.

### 6. Save the Script

Click the floppy disk icon or press Ctrl + S (or Cmd + S on a Mac) to save your script.

### 7. Run the Script

Click the play (triangle) button on the toolbar at the top. You might be prompted to grant permissions the first time you run the script.

### 8. Check for Errors or Logs

If there are any errors, they will appear in the "Execution log" tab at the bottom. You can also use Logger.log() statements in your code to log messages, viewable in the "Logs" tab (accessible from View > Logs).

## Contributing

If you find any issues or have suggestions for improvements, please submit an issue or a pull request.

## License

This code is available under the MIT license. See the LICENSE file for more details.
