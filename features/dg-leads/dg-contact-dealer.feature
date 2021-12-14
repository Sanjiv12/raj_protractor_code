Feature: Digital Garage Contact Dealer
    A user contacts their local dealer for a submitted purchase

    Background:
        Given User is in Saves Page
        And User Signs In
        And User has a purchase with status Pending Dealer Review

    Scenario: Contact Dealer - Modal is Visible
        When User clicks on Contact Dealer
        Then The Contact Dealer Modal should be visible
        And Display Send in disabled state

    @keepCookies
    Scenario: Contact Dealer - Fields are Autofilled
        When User clicks on Contact Dealer
        Then First Name, Last Name, Email, and Phone fields should be autofilled
        And Display Send in disabled state

    @keepCookies
    Scenario: Contact Dealer - Field Validation
        When User clicks on Contact Dealer
        And User adds invalid characters to all text fields
        Then All text fields should be in an error state
        And Display Send in disabled state

    @keepCookies
    Scenario: Contact Dealer - Preferred Contact Method
        When User clicks on Contact Dealer
        And The phone number field is empty
        Then The Preferred Contact Text and Call buttons are disabled

    @keepCookies
    Scenario: Contact Dealer - Submit Form
        When User Clicks on Contact Dealer
        And User adds valid characters to all fields
        And User Clicks Send
        Then Success Modal should display
