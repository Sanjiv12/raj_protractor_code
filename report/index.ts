//var reporter = require('cucumber-html-reporter');
import * as reporter from "multiple-cucumber-html-reporter";
import * as path from "path";
const jsonPath = path.join(process.cwd(), "/dist");

 
const options = {
        theme: 'bootstrap',
        jsonDir: jsonPath,
        //output: '../../dist/newReport/cucumber_report.html',
        reportPath : jsonPath + '/newReport_1',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: false,
        metadata: {
            app:{
                name: 'MST-C',
                version: '1.0.0'
            },
            browser: {
                name: "chrome",
                version: "87.0.4044.122"
            },
            device: 'N/A',
            platform: {
                name: 'Windows',
                version: '10'
            }
        }
    };
 
    reporter.generate(options);