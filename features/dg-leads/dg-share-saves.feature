Feature: Digital Garage Share Saves
    A user shares their saved vehicles with their local dealer

    Background:
        Given User is in Saves Page
        And User has at least one saved vehicle

    @saveVehicle
    Scenario: Share Saves - Modal is Visible
        And User is not logged in to account
        When User clicks on Start Sharing
        Then The Share Saves Modal should be visible
        And Display Start Sharing in disabled state

    @keepCookies
    Scenario: Share Saves - Field Validation
        And User is not logged in to account
        When User clicks on Start Sharing
        And User adds invalid characters to all text fields
        Then All text fields should be in an error state
        And Display Start Sharing in disabled state

    @keepCookies
    Scenario: Share Saves - Preferred Contact Method
        And User is not logged in to account
        When User clicks on Start Sharing
        And The phone number field is empty
        Then The Preferred Contact Text and Call buttons are disabled

    @keepCookies
    Scenario: Share Saves - Submit Form
        And User is not logged in to account
        When User Clicks on Start Sharing
        And User adds valid characters to all text fields
        And User Clicks Start Sharing submission button
        Then Started Sharing Modal should display

    @keepCookies
    Scenario: Share Saves - Toggle Saves
        And User is not logged in to account
        When Saves are shared
        Then User can stop sharing saves
        And User can start sharing saves

    Scenario: Share Saves - Fields are Autofilled
        And User Signs In
        When User clicks on Start Sharing
        Then First Name, Last Name, Email, and Phone fields should be autofilled
        And Display Start Sharing in disabled state

