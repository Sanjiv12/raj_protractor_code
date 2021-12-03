Feature: Digital Garage Share Saves
    A user shares their saved vehicles with their local dealer

    Background:
        Given User is not logged in to account


    @saveVehicle
    Scenario: Share Saves - Modal is Visible
        Given User is in Saves Page
        When User clicks on Start Sharing
        Then The Share Saves Modal should be visible
        And Display Send in disabled state

    not @clearCookies
    Scenario: Share Saves - Fields are Autofilled
        Given User is in Saves Page
        When User clicks on Start Sharing
        Then First Name, Last Name, Email, and Phone fields should be autofilled
        And Display Send in disabled state

    Scenario: Share Saves - Field Validation
        Given User is in Saves Page
        When User clicks on Start Sharing
        And Adds invalid characters to all fields
        Then Each field should be in an error state
        And Display Send in disabled state

    Scenario: Share Saves - Preferred Contact Method
        Given User is in Saves Page
        When User clicks on Start Sharing
        And The phone number field is empty
        Then The Preferred Contact Text and Call buttons are disabled

    Scenario: Share Saves - Submit Form
        Given User is in Saves Page
        When User Clicks on Start Sharing
        And Adds valid characters to all fields
        And User Clicks Send
        Then Success Modal should display

