Feature: Digital Garage Inventory New Vehicles

    A user manages new vehicles in their inventory

    Background:
        Given User has a "new" vehicle saved
        And User is in Saves page

    Scenario: Inventory - New Vehicle Links to VDP
        When User clicks on a saved "new" vehicle image
        Then "Vehicle Details" page opens in "same" tab

    @keepCookies
    Scenario: Inventory - New Vehicle Details
        When User clicks on "Vehicle Details" on Vehicle Card
        Then The Vehicle Details Modal should be displayed

    @keepCookies
    Scenario: Inventory - Recently Viewed New Vehicle
        Given User is in Vehicle List page GXP
        When User views an unsaved "new" vehicle's VDP without saving it
        Then Recently Viewed "new" vehicle should appear in garage

    @keepCookies
    Scenario: Inventory - Signing In Brings New Inventory
        Given User is not logged in to account
        And User wants their inventory to persist after this browser session
        When User Signs In
        Then All inventory from signed out garage are brought into signed in garage

    @keepCookies
    Scenario: Inventory - Remove New Vehicle from Inventory
        When User clicks on saved "new" vehicle save heart
        And User Clicks Remove
        Then Vehicle is removed from the Users inventory
