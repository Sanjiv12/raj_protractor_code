Feature: GXP Saves Page Sidebar - Desktop, Logged In
    Background:
        Given User is in Saves page
        And User is on desktop
        And User Signs In

    Scenario: Sidebar - Manage Account
        When User clicks "Manage Account" Linkout
        Then "Manage Account" page opens in "new" tab

    Scenario: Sidebar - Sign Out
        When User clicks "Sign Out" Linkout
        Then User is logged out