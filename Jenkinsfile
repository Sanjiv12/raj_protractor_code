#!/usr/bin/env groovy

// This file defines the build pipeline for your project. Other than a few
// constants below, it should remain largely static.
// Jenkins runs the scripts found in the build-env/ directory, so most changes
// will belong there.

env.ARTIFACT_LOCATION = "/output/${env.BUILD_TAG}"
env.ENV_ROLE_ARN = "arn:aws:iam::030361293591:role/iam-disjen-cross-acct"
env.ENV_REGION = 'us-east-1'
env.ENVIRONMENT = "${params.env}"
env.OPERATION = "${params.op}"
env.ENVPARAMETER = "${env.BuildEnv}"
def ENVPARAMETER = "${env.BuildEnv}"
def ENV_MAP = [dev:'dev', test:'test', qa:'qa', stage:'stage', prod:'prod']
env.CROSS_ENV = ENV_MAP.get(env.ENVIRONMENT)
def S3STACKNAME = "//mstc-dev-bdd-reports"

env.SLACK_CHANNEL = 'toyota-builds-mst-console-d'
def RED = '#FF0000'
def GREEN = '#008000'
env.APP_NAME = 'MST CONSOLE TEST'
env.APP_TEAM = 'MSTM'

try {

    currentBuild.result = 'SUCCESS'
    if (ENVPARAMETER == "dev") {
        S3STACKNAME = "//mstc-dev-bdd-reports"
    }
    else if (ENVPARAMETER == "test") {
        S3STACKNAME = "//mstc-dev-bdd-reports"
    }
    else if (ENVPARAMETER == "qa") {
        S3STACKNAME = "//mstc-dev-bdd-reports"
    }
    else if (ENVPARAMETER == "prod") {
        S3STACKNAME = "//mstc-dev-bdd-reports"
    }
    else if (ENVPARAMETER == "e2e") {
        S3STACKNAME = "//mstc-dev-bdd-reports"
        CROSS_ENV = "test"
    }
    else if (ENVPARAMETER == "stage") {
        S3STACKNAME = "//mstc-dev-bdd-reports"
        
    }

    node ('jenkins-ecs-mvn') {
		checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'de1a79c6-f738-4892-8191-c35ee2574708', url: 'https://bitbucket.sdlc.toyota.com/scm/mstm/mst-console-bdd-framework.git']]])
		//checkout scm
		// sh "mvn clean test -Dcucumber.options=\"--tags @rtiTest --tags ~@ignore --plugin pretty:target/json-report-rti-events.json --plugin html:target/html-report-rti-events\""
		//sh "mvn clean test  -Dcucumber.options=\"--tags @rtiTest, --plugin html:target/cucumber-html-report\""		
		sh "mvn clean test -Dcucumber.options=\"--tags @rtiTest \" -DsendMail=true -DcheckEnv=true"
		cucumber fileIncludePattern: '**/*.json', sortingMethod: 'ALPHABETICAL'
	}     

    //   node ('debian_chromium') {
    //     stage ('Tests') {
    //         checkout scm
    //             sh "sudo chmod -R 755 ./build-env/* && ./build-env/jenkins-compile.sh $S3STACKNAME"
    //         }
    // }
    
    //  node ('jenkins-ecs-nodejs') {
    //     stage ('Tests') {
    //         checkout scm
    //             sh "sudo chmod -R 755 ./build-env/* && ./build-env/jenkins-compile.sh $S3STACKNAME"
    //         }
		      
    // }

    // node ('jenkins-ecs-mvn') {
    //     stage ('Tests') {
	// 	checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'de1a79c6-f738-4892-8191-c35ee2574708', url: 'https://bitbucket.sdlc.toyota.com/scm/mstm/mst-console-bdd-framework.git']]])
	// 	//checkout scm
	// 	// sh "mvn clean test -Dcucumber.options=\"--tags @rtiTest --tags ~@ignore --plugin pretty:target/json-report-rti-events.json --plugin html:target/html-report-rti-events\""
	// 	//sh "mvn clean test  -Dcucumber.options=\"--tags @rtiTest, --plugin html:target/cucumber-html-report\""		
	// 	sh "mvn clean test -Dcucumber.options=\"--tags @rtiTest \" -DsendMail=true -DcheckEnv=true"
	// 	cucumber fileIncludePattern: '**/*.json', sortingMethod: 'ALPHABETICAL'
    //     }
	// }
}
catch (err) {
    currentBuild.result = 'FAILURE'
    sendSlackMessage(RED, "Build Failed:")
    throw err
}
def sendSlackMessage(color, message) {
    //re-enabling slack to check for error messages after updating slack channel.
    //def slackMessage = "*APP: ${APP_NAME}*\n*Build: ${BUILD_TAG}*\n ${message} ${BUILD_URL}\" \"${color}\" \"${SLACK_CHANNEL}\""
    //echo "sendSlackMessage :: ${slackMessage}"
   echo "sendSlackMessage :: ${message} to channel ${'toyota-builds-mst-console-bdd-framework-d'}"
   node {
        configFileProvider([configFile(fileId: 'PostToToyotaSlack', variable: 'postContent')]) {
        //original RT message format
        //sh "sh $postContent \"*$APP_NAME*\n${message} ${BUILD_URL}\" \"${color}\" \"${'toyota-builds-rti-d'}\""
        sh "sh $postContent \"*APP:${APP_NAME}*\n*Build:${BUILD_TAG}*\n ${message} ${BUILD_URL}\" \"${color}\" \"${'toyota-builds-mst-console-bdd-framework-d'}\""
        }
    }
}