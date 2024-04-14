var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',
        jsonFile: 'cypress/cucumber_report/',
        output: 'cypress/cucumber_report/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"1.0.0",
            "Test Environment": "TEST",
            "Browser": "Chrome ",
            "Platform": "MacOS",
            "Parallel": "Scenarios",
            "Executed": "Local"
        },
        failedSummaryReport: true,
        storeScreenshots:true
    };

    reporter.generate(options);