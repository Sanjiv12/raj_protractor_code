Feature: Digital Garage Inventory Used Vehicles

    A user manages used vehicles in their inventory

    Background:
        Given User is in Saves Page
        And User has a used vehicle saved

    Scenario: Inventory - Used Vehicle Links to VDP
        When User clicks on a saved vehicle image
        Then The User should be navigated to the Vehicle Details Page

    @keepCookies
    Scenario: Inventory - Used Vehicle Vehicle Details
        When User clicks on "Vehicle Details"
        Then The Vehicle Details Modal should be displayed

    @keepCookies
    Scenario: Inventory - Signing In Brings Inventory
        Given User is not logged in to account
        When User Signs In
        Then Saves from signed out garage are brought into signed in garage

    @keepCookies
    Scenario: Inventory - Remove Vehicle from Inventory
        When User clicks on saved vehicle save heart
        And User Clicks Remove
        Then Vehicle disappers
