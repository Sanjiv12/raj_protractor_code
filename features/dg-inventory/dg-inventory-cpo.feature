Feature: Digital Garage Inventory CPO Vehicles

    A user manages CPO vehicles in their inventory

    Background:
        Given User is in Saves Page
        And User has a CPO vehicle saved

    Scenario: Inventory - CPO Vehicle Links to VDP
        When User clicks on a saved vehicle image
        Then The User should be navigated to the Vehicle Details Page

    @keepCookies
    Scenario: Inventory - CPO Vehicle Details
        When User clicks on "Vehicle Details"
        Then The Vehicle Details Modal should be displayed

    @keepCookies
    Scenario: Inventory - Signing In Brings Inventory
        Given User is not logged in to account
        And User views a CPO vehicle's VDP without saving it
        When User Signs In
        Then Saves and recently viewed from signed out garage are brought into signed in garage

    @keepCookies
    Scenario: Inventory - Remove Vehicle from Inventory
        When User clicks on saved vehicle save heart
        And User Clicks Remove
        Then Vehicle is removed from the Users Inventory
