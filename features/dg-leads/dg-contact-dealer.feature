Feature: Digital Garage Contact Dealer
    A user contacts their local dealer for an existing purchase

    Scenario: Contact Dealer - Modal is Visible
        Given User is in Saves Page
        And User Signs In <email> <password>
        When User clicks on Contact Dealer
        Then The Contact Dealer Modal should be visible
        And Display Send in disabled state

    @keepCookies
    Scenario: Contact Dealer - Fields are Autofilled
        Given User is in Saves Page
        When User clicks on Contact Dealer
        Then First Name, Last Name, Email, and Phone fields should be autofilled
        And Display Send in disabled state

    @keepCookies
    Scenario: Share Saves - Field Validation
        Given User is in Saves Page
        When User clicks on Contact Dealer
        And User adds invalid characters to all fields
        Then Each field should be in an error state
        And Display Send in disabled state

    @keepCookies
    Scenario: Share Saves - Preferred Contact Method
        Given User is in Saves Page
        When User clicks on Contact Dealer
        And The phone number field is empty
        Then The Preferred Contact Text and Call buttons are disabled

    @keepCookies
    Scenario: Share Saves - Submit Form
        Given User is in Saves Page
        When User Clicks on Contact Dealer
        And User adds valid characters to all fields
        And User Clicks Send
        Then Success Modal should display
