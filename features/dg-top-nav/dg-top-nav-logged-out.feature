Feature: Digital Garage Top Nav Dropdown Menu - Desktop, Not Logged In

    Background:
        Given User is not logged in to account

    Scenario: Top Nav Dropdown - Temporary Saves Message is Present
        Given User is in Vehicle List Page
        And User is on desktop
        When User clicks the Top Nav Dropdown Menu icon
        Then Temporary Saved Items Message should be present

    Scenario: Top Nav Dropdown - Create Account Button is Present
        Given User is in Vehicle List Page
        And User is on desktop
        When User clicks the Top Nav Dropdown Menu icon
        Then Create Account Button should be present

    Scenario: Top Nav Dropdown - Sign In Button is Present
        Given User is in Vehicle List Page
        And User is on desktop
        When User clicks the Top Nav Dropdown Menu icon
        Then Sign In Button should be present