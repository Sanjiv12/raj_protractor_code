Feature: DG No Saved Estimates

    Background:
        Given User is in Saves Page
        And User has a new vehicle saved
        And User has no estimate saved

    @keepCookies
    Scenario: Inventory Card Personalize my Payment CTA
        When User clicks Personalize my Payment on a saved inventory item
        And saved inventory item has no estimates
        Then the User is redirected to the VDP
    