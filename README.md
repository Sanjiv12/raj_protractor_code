# MSTC BDD repository contains the frmaework and some scenarios to test the MSTC UI

# Pre Requisites
NodeJS
Browser (Chrome, Firefox ..)
Node IDE (VSCode, Sublime ..)

# Steps to run the application locally

1. Clone the repo
2. Open terminal / command prompt, navigate to the project root 
3. Run 'npm install' - this will install all dependencies
4. Run 'npm run webdriver-manager' - this will install the chrome and gecko webfrivers
5. Run 'npm run webdriver-start' - this will start the selenium webserver
6. Run 'npm run 'clean-build' - this will clean the old compiled files and build them again
7. Run 'npm run test -- --suite=<> --params.url=<> --params.dealerCd=<> --params.source=t1  --params.fname=<> --params.lname=<> --params.caemailreg=<> --params.capwdreg=<> --params.caemailnew=<> --params.capwdnew=<> --params.caphonenew=<> --params.zipcode=<> --params.usemail=<> --params.seemail=<> --params.cdemail=<>'
    suite : comma separated list of suites, refer to the config file for values
    params.url : Base URL path of the MSTC application (without query parameters)
    params.dealerCd : Dealer Code to be used for the run
    params.source : Source to be used for the run
    Other parameters are scenario specific
    e.g. npm run test  -- --suite=checkout --params.url=https://tcom_user:@1L!gaT0r@qa.smartpath.tldealersystems.com/inventory --params.dealerCd=44016 --params.source=t1
8. Run 'npm run report' to generate the cucumber html report. The report will be generated at /dist/newReport_1




