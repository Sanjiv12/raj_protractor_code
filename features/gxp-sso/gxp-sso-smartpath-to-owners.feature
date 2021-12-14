Feature: GXP SSO - Smartpath to Owners
    Background: 
        Given User is in Saves page

    Scenario: User signs in on Smartpath and is Logged in on Owners
        Given User signs in on "Smartpath"
        When User Navigates to Owners page
        Then User is signed in on Owners

    Scenario: User signs out on SmartPath and is Logged in on Owners
        Given User signs in on "SmartPath"
        And User signs out on "SmartPath"
        When User Navigates to Owners page
        Then User is signed out on Owners

