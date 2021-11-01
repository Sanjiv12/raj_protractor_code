
Feature: GXP SSO and Account Management
    
    A user clicks the "Log In" button on the GXP Top Nav
    and uses the SSO options to log in. Then the user makes
    changes to the account using the account management feature.


Scenario: SSO - User signs in using Google SSO
    Given User is in Vehicle List page
    When User clicks the Top Nav Dropdown Menu icon
    # Use the data tables here as parameters for logging in
    And User signs in using the following parameters:
        | method    | username          | pass           |
        | google    | example@gmail.com | passphrase123  |
    And User loads the Saves page
    Then Correct User is logged in
    # Use After hook to sign out

Scenario: SSO - User signs in using Apple SSO
    Given User is in Vehicle List page
    When User clicks the Top Nav Dropdown Menu icon
    # Use the data tables here as parameters for logging in
    And User signs in using the following parameters:
        | method    | username          | pass           |
        | apple    | example@icloud.com | passphrase123  |
    And User loads the Saves page
    Then Correct User is logged in
    # Use After hook to sign out

Scenario: SSO - User signs in using Facebook SSO
    Given User is in Vehicle List page
    When User clicks the Top Nav Dropdown Menu icon
    # Use the data tables here as parameters for logging in
    And User signs in using the following parameters:
        | method    | username          | pass           |
        | facebook    | example@example.com | passphrase123  |
    And User loads the Saves page
    Then Correct User is logged in
    # Use After hook to sign out

Scenario: SSO - Signed In User Accesses Account Management Page
    Given User is in Vehicle List page
    When User clicks the Top Nav Dropdown Menu icon
    # Use the data tables here as parameters for logging in
    And User signs in using the following parameters:
        | method | username          | pass          |
        | google | example@gmail.com | passphrase123 |
    And Saves a vehicle
    And User loads the Account Management Page
    And User removes a vehicle using the Account Management Page
    Then No vehicles are present in the User's Garage
    # Use After hook to sign out