Feature: Digital Garage Inventory New Vehicles

    A user wants to search for a new vehicle to add to their inventory

    Scenario: Inventory - Search Inventory
        Given User is in Saves Page
        And User has no saved inventory
        When User clicks on Search Inventory
        Then Then User should be navigated to the Vehicle List Page

