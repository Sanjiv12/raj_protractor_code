Feature: GXP Saves Page Sidebar
    Scenario: Sidebar - My Saves
        Given User is in Saves page
        And User is on desktop
        When User clicks "Saves" Linkout
        Then "Saves" page opens in "same" tab
        And Sidebar "Saves" Linkout should be in "Active" state
        And Sidebar "Vehicles" Linkout should be in "InActive" state

    Scenario: Sidebar - My Vehicles
        Given User is in Saves page
        And User is on desktop
        When User clicks "Vehicles" Linkout
        Then "Vehicles" page opens in "new" tab

    # Assumes another test (saves page) will test that the "My Vehicles" link shows up on the page
    Scenario: Sidebar - Hidden - Tablet
        Given User is in Saves page
        And User is on tablet
        When User views the Saves page
        Then Sidebar Component should not be visible

    Scenario: Sidebar - Hidden - Mobile
        Given User is in Saves page
        And User is on mobile
        When User views the Saves page
        Then Sidebar Component should not be visible

    Scenario Outline: Sidebar - Has Correct Structure
        Given User is in tier "<tier>" Saves page
        And User is on desktop
        And User is logged in to account
        Then Sidebar Component should be visible
        And Sidebar "Saves" Linkout should be in "Active" state
        And Sidebar header should display name "<account_name>"
        And Sidebar "Saves" Linkout display count "(<saves_count>)"

        Examples:
            | account  | tier | saves_count | account_name |
            | example1 | 1    | 2           | John         |
            # Builds do not appear on T3
            | example1 | 3    | 1           | John         |

Feature: GXP Saves Page Sidebar - Desktop, Not Logged In
    Background:
        Given User is in Saves page
        And User is on desktop
        And User is not logged in

    Scenario: Sidebar - Has Correct Structure
        Then Sidebar Component should be visible
        And Sidebar "Saves" Linkout should be in "Active" state
        And Sidebar header should be "My Profile"
        And Sidebar "Saves" Linkout display no count

    Scenario: Sidebar - Create Account
        When User clicks "Create Account" Linkout
        Then "Create Account" page opens in "same" tab

    Scenario: Sidebar - Login
        When User clicks "Log In" Linkout
        Then "Login" page opens in "same" tab

Feature: GXP Saves Page Sidebar - Desktop, Logged In
    Background:
        Given User is in Saves page
        And User is on desktop
        And User is logged in

    Scenario: Sidebar - Manage Account
        When User clicks "Manage Account" Linkout
        Then "Manage Account" page opens in "new" tab

    Scenario: Sidebar - Sign Out
        When User clicks "Sign Out" Linkout
        Then User is logged out


