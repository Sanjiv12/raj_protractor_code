Feature: GXP Saves Page Sidebar
    Background:
        Given User is in Saves page

    Scenario: Sidebar - My Saves
        Given User is on desktop
        When User clicks "Saves" Linkout
        Then "Saves" page opens in "same" tab
        And Sidebar "Saves" Linkout should be in "Active" state
        And Sidebar "Vehicles" Linkout should be in "InActive" state

    Scenario: Sidebar - My Vehicles
        Given User is on desktop
        When User clicks "Vehicles" Linkout
        Then "Vehicles" page opens in "new" tab

    # # Assumes another test (saves page) will test that the "My Vehicles" link shows up on the page
    Scenario: Sidebar - Hidden - Tablet
        Given User is on tablet
        When User views the Saves page
        Then Sidebar Component should not be visible

    Scenario: Sidebar - Hidden - Mobile
        Given User is on mobile
        When User views the Saves page
        Then Sidebar Component should not be visible

    Scenario Outline: Sidebar - Has Correct Structure
        Given User is in tier "<tier>" Saves page
        And User is on desktop
        And User Signs In "<account>" "<pwd>"
        Then Sidebar Component should be visible
        And Sidebar "Saves" Linkout should be in "Active" state
        And Sidebar header should display "<account_name>"
        And Sidebar "Saves" Linkout display count "(<saves_count>)"

        Examples:
            | account  | pwd | tier | saves_count | account_name |
            | maferap486@idrct.com | Bddtest1!  |   1   |   2   |   BDD |
            # Builds do not appear on T3
            | maferap486@idrct.com | Bddtest1!  |   3   |   1   |   BDD |
