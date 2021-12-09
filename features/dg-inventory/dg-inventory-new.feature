Feature: Digital Garage Inventory

    A user uses the save heart to add vehicles to
    their inventory.

    Background:
        Given User is in Saves Page
        And User has a new vehicle saved

    Scenario: Inventory - Search Inventory
        Given User is in Saves page
        And User has no saved inventory
        When User clicks on Search Inventory
        Then Then User should be navigated to the Vehicle List Page

    Scenario: Inventory - Save New Vehicle
        Given User is in Vehicle List Page
        And New Filter is selected
        When User clicks on a vehicles inventory save heart
        Then Save Page shows correct saved vehicle

    @keepCookies
    Scenario: Inventory - New Vehicle Links to VDP
        Given User is in Saves Page
        And User has saved inventory
        When User clicks on a saved vehicle image
        Then The User should be navigated to the Vehicle Details Page

    @keepCookies
    Scenario: Inventory - New Vehicle Vehicle Details
        Given User is in Saves Page
        And User has saved inventory
        When User clicks on "Vehicle Details"
        Then The Vehicle Details Modal should be displayed

    @keepCookies
    Scenario: Inventory - Save Used Vehicle
        Given User is in Vehicle List Page
        And Used Filter is selected
        When User clicks on a used vehicles inventory save heart
        Then Save Page shows correct saved vehicle

    @keepCookies
    Scenario: Inventory - Used Vehicle Links to VDP
        Given User is in Saves Page
        And User has saved inventory
        When User clicks on a saved vehicle image
        Then The User should be navigated to the Vehicle Details Page

    @keepCookies
    Scenario: Inventory - Used Vehicle Vehicle Details
        Given User is in Saves Page
        And User has saved inventory
        When User clicks on "Vehicle Details"
        Then The Vehicle Details Modal should be displayed

    @keepCookies
    Scenario: Inventory - Save CPO Vehicle
        Given User is in Vehicle List Page
        And Used Filter is selected
        When User clicks on a CPO vehicles inventory save heart
        Then Save Page shows correct saved vehicle

    @keepCookies
    Scenario: Inventory - CPO Vehicle Links to VDP
        Given User is in Saves Page
        And User has saved inventory
        When User clicks on a saved vehicle image
        Then The User should be navigated to the Vehicle Details Page

    @keepCookies
    Scenario: Inventory - CPO Vehicle Vehicle Details
        Given User is in Saves Page
        And User has saved inventory
        When User clicks on "Vehicle Details"
        Then The Vehicle Details Modal should be displayed

    @keepCookies
    Scenario: Inventory - Signing In Brings Inventory
        Given User is in Saves Page
        And User is not logged in to account
        And User has saved inventory
        When User Signs In
        Then Saves should be brought into garage

    @keepCookies
    Scenario: Inventory - Remove Vehicle from Inventory
        Given User is in Saves Page
        And User has saved inventory
        When User clicks on saved vehicle save heart
        Then Vehicle disappers





    In a logged out state

    search inventory CTA takes you to the correct page

    save a vehicle

    clicking on that saved vehicle image -> goes to correct tier

    disclaimers on vehicle can be opened

    logging in brings saved vehicle into inventory

    remove that vehicle

    repeat for used and CPO


