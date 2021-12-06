Feature: Digital Garage Share Saves
    A user shares their saved vehicles with their local dealer

    @saveVehicle
    Scenario: Share Saves - Modal is Visible
        Given User is in Saves Page
        And User is not logged in to account
        When User clicks on Start Sharing
        Then The Share Saves Modal should be visible
        And Display Start Sharing in disabled state

    @keepCookies
    Scenario: Share Saves - Field Validation
        Given User is in Saves Page
        And User is not logged in to account
        When User clicks on Start Sharing
        And User adds invalid characters to all fields
        Then Each field should be in an error state
        And Display Start Sharing in disabled state

    @keepCookies
    Scenario: Share Saves - Preferred Contact Method
        Given User is in Saves Page
        And User is not logged in to account
        When User clicks on Start Sharing
        And The phone number field is empty
        Then The Preferred Contact Text and Call buttons are disabled

    @keepCookies
    Scenario: Share Saves - Submit Form
        Given User is in Saves Page
        And User is not logged in to account
        When User Clicks on Start Sharing
        And User adds valid characters to all fields
        And User Clicks Start Sharing
        Then Started Sharing Modal should display

    @keepCookies
    Scenario: Share Saves - Toggle Saves
        Given User is in Saves Page
        And User is not logged in to account
        When Saves are shared
        Then User can stop sharing saves
        And User can start sharing saves

    @saveVehicle
    Scenario: Share Saves - Fields are Autofilled
        Given User is in Saves Page
        And User Signs In
        When User clicks on Start Sharing
        Then First Name, Last Name, Email, and Phone fields should be autofilled
        And Display Start Sharing in disabled state

