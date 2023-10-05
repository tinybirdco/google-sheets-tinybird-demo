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

### 0. Clone this repository

```bash
git clone https://github.com/tinybirdco/google-sheets-tinybird-demo.git
cd google-sheets-tinybird-demo
```

### 1. Sign Up for Tinybird

Create a [Tinybird](https://www.tinybird.co) account and follow their onboarding process to set up your environment.

### 2. Obtain Your Tinybird API Token

Go to Auth Tokens on your [Tinybird dashboard](https://ui.tinybird.co/) to get your API token. This token will be used to authenticate your requests to Tinybird and send your Google Sheets data to Tinybird.

### 3. Open Your Google Sheet

Open the Google Sheet where you want to run the script.

### 4. Upload the sample data to your Google Sheet

In Google Sheets, import the [sample data set](https://github.com/tinybirdco/google-sheets-tinybird-demo/blob/main/data.csv) of [customer shopping trends](https://www.kaggle.com/datasets/iamsouravbanerjee/customer-shopping-trends-dataset?select=shopping_trends_updated.csv) by following these steps:

File > Import > Upload > Select a file from your device > Import data > Replace current sheet.

### 5. Access the Script Editor

Go to the menu bar at the top and click on Extensions > Apps Script. This will open the script editor in a new tab.

### 6. Write or Paste the Script

In the script editor, write or paste the script from [`code.gs`](https://github.com/tinybirdco/google-sheets-tinybird-demo/blob/main/Code.gs) and replace `YOUR_API_TOKEN` with the token you obtained from Tinybird.

### 7. Save the Script

Click the floppy disk icon or press Ctrl + S (or Cmd + S on a Mac) to save your script.

### 8. Run the Script

Click the play (triangle) button on the toolbar at the top. You might be prompted to grant permissions the first time you run the script.

### 9. Check for Errors or Logs

If there are any errors, they will appear in the "Execution log" tab at the bottom. You can also use Logger.log() statements in your code to log messages, viewable in the "Logs" tab (accessible from View > Logs).

## Next steps

If you are looking to take this demo further, you can follow along with deploying a Tinybird pipeline and API endpoint.

### 1. Set up the Tinybird CLI

Install the [Tinybird CLI](https://www.tinybird.co/docs/cli.html). This will be needed for local authentication to send mock data to your Tinybird Data Source (or if you'd like to use the CLI to work on your Tinybird resources locally):

```bash
python -mvenv .e
. .e/bin/activate
pip install tinybird-cli
tb auth --interactive
```

Copy your User Admin token from your workspace (you can find it here) and paste it into the prompt.

Authenticating will create a .tinyb file in your project directory.

⚠️Warning! The .tinyb contains your User Admin token. Don't share it or publish it in your application. For more detailed information on Token management in Tinybird, read the docs.

### 2. Pushing the data project to your Tinybird workspace

Push the data project —datasources, pipes and fixtures— to your workspace

```bash
tb push --fixtures
```

### 3. Deploying the API endpoint

Head to your Tinybird workspace and go to any of your new Tinybird Pipes, like `most_expensive_purchases_made_by_gender`, and click "Create API Endpoint" to deploy the API endpoint.

---

## Contributing

If you find any issues or have suggestions for improvements, please submit an issue or a [pull request](https://github.com/tinybirdco/google-sheets-tinybird-demo/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc).

## License

This code is available under the MIT license. See the [LICENSE](https://github.com/tinybirdco/google-sheets-tinybird-demo/blob/main/LICENSE) file for more details.

## Need help?

&bull; [Community Slack](https://www.tinybird.co/join-our-slack-community) &bull; [Tinybird Docs](https://docs.tinybird.co/) &bull;

## Authors

* [Joe Karlsson](https://github.com/joekarlsson)
