Feature: Digital Garage Inventory CPO Vehicles

    A user manages CPO vehicles in their inventory

    Background:
        Given User has a "CPO" vehicle saved
        And User is in Saves page

    Scenario: Inventory - CPO Vehicle Links to VDP
        When User clicks on a saved "CPO" vehicle image
        Then "Vehicle Details" page opens in "same" tab

    @keepCookies
    Scenario: Inventory - CPO Vehicle Details
        When User clicks on "Vehicle Details" on Vehicle Card
        Then The Vehicle Details Modal should be displayed

    @keepCookies
    Scenario: Inventory - Recently Viewed CPO Vehicle
        Given User is in Vehicle List page GXP
        When User views an unsaved "CPO" vehicle's VDP without saving it
        Then Recently Viewed "CPO" vehicle should appear in garage

    @keepCookies
    Scenario: Inventory - Remove CPO Vehicle from Inventory
        When User clicks on saved "CPO" vehicle save heart
        And User Clicks Remove
        Then Vehicle is removed from the Users inventory
