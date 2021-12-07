Feature: GXP SSO - Owners to Smartpath
    Background: 
        Given User is in Owners page

    Scenario: User signs in on Owners and is Logged in on SmartPath
        Given User signs in on "Owners"
        When User Navigates to SmartPath page from Owners
        Then User is signed in on SmartPath

    Scenario: User signs out on SmartPath and is Logged in on Owners
        Given User signs in on "Owners"
        And User signs out on "Owners"
        When User Navigates to SmartPath page from Owners
        Then User is signed out on SmartPath