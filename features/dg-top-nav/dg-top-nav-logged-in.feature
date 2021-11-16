Feature: Digital Garage Top Nav Dropdown Menu - Desktop, Logged In

    Background:
        Given User is logged in to account

    Scenario: Top Nav Dropdown - Manage Account Button is Present
        Given User is in Vehicle List Page
        And User is on desktop
        When User clicks the Top Nav Dropdown Menu icon
        Then Manage Account Button should be present

    Scenario: Top Nav Dropdown - Sign Out Button is Present
        Given User is in Vehicle List Page
        And User is on desktop
        When User clicks the Top Nav Dropdown Menu icon
        Then Sign Out Button should be present