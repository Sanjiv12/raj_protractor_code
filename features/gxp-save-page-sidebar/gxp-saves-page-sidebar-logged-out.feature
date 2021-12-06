Feature: GXP Saves Page Sidebar - Desktop, Not Logged In
    Background:
        Given User is in Saves page
        And User is on desktop
        And User is not logged in

    Scenario: Sidebar - Has Correct Structure
        Then Sidebar Component should be visible
        And Sidebar "Saves" Linkout should be in "Active" state
        And Sidebar header should display "My Profile"
        And Sidebar "Saves" Linkout display no count

    Scenario: Sidebar - Create Account
        When User clicks "Create Account" Linkout
        Then "Create Account" page opens in "same" tab

    Scenario: Sidebar - Login
        When User clicks "Sign In" Linkout
        Then "Login" page opens in "same" tab