Feature: Account Management
    Background:
        Given User is in Vehicle List Page
        And User Signs In

    Scenario: Signed In User Accesses Account Management Page
        When User clicks on Manage Account in Top Nav
        Then "Manage Account" page opens in "new" tab

    Scenario: User Changes Password via Account Management Page
        When User clicks on Manage Account in Top Nav
        And The Account Management Page loads in a new tab
        And User Changes Password
        Then Password is updated