# CES Assessment Completed By Arun

This Project contains the solution for the question asked in the CES assessment. Solution  is completed in JS, Cypress tech stack. Currently only page object model, reporting features are included for this assessment. Upon request, other features like multiple environment configuration, selective test runs can be included. Please follow the below steps to set up this solution in your local.

## Pre-Requisites

1. Install [Visual Studio Code](https://code.visualstudio.com/download) as the IDE

2. Install and set up [NodeJS](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) development environment

## Set up the project in your local machine
1. If you have the github public access please clone the project from [arun-ces-assesment](https://github.com/arunkm52/arun-ces-assessment)
2. Or, Download the zip file from the email and unzip to your local machine
3. Open the cloned/downloaded project folder in VS Code.
4. Navigate to the project root folder in VS Code Terminal and run the below command to install the dependencies ```npm i``` or ```npm install``` or ```npm install package.json```


## How to run the test cases
1. Open the terminal in VS code and be in the root folder of the project
2. Run the command ```npm test``` this will open the Cypress Test Config window.
3. **E2E Test** is already configured here and select that option.
4. Choose the browser and click **Start E2E Testing**
5. This will open up the Cypress test runner with available tests.
6. Click on the **forgotPassword.feature** will initiate the tests to run.
7. You can see the test results on the window.
8. Screenshots are available with Cypress time travel option.
9. If html report needs to be generated, please run the command ```node index.js```

