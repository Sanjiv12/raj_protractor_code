Feature: Digital Garage Inventory Used Vehicles

    A user manages used vehicles in their inventory

    Background:
        Given User is in Saves Page
        And User has a used vehicle saved

    Scenario: Inventory - Used Vehicle Links to VDP
        When User clicks on a saved vehicle image
        Then The User should be navigated to the Vehicle Details Page

    @keepCookies
    Scenario: Inventory - Used Vehicle Details
        When User clicks on "Vehicle Details"
        Then The Vehicle Details Modal should be displayed

    @keepCookies
    Scenario: Inventory - Recently Viewed Used Vehicle
        Given User is in Vehicle Details Page
        And User is not logged in to account
        When User views a used vehicle's VDP without saving it
        Then Recently Viewed new vehcile should appear in garage

    @keepCookies
    Scenario: Inventory - Signing In Brings Used Inventory
        Given User is not logged in to account
        And User wants their inventory to persist after this browser session
        When User Signs In
        Then All inventory from signed out garage are brought into signed in garage

    @keepCookies
    Scenario: Inventory - Remove Used Vehicle from Inventory
        When User clicks on saved vehicle save heart
        And User Clicks Remove
        Then Vehicle is removed from the Users Inventory
