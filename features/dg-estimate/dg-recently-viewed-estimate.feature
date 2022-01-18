Feature: DG Recently Viewed Estimates

    Background:
        Given User is in Saves Page
        And has a recently viewed estimate

    @keepCookies
    Scenario: Recently Viewed Estimate Personalize my Payment CTA
        When User clicks Personalize my Payment on a recently viewed estimate
        Then the User is redirected to the VDP

    @keepCookies
    Scenario: Save Estimate 
        When User clicks Save Estimate CTA
        Then the estimate is promoted to a save
        And the button displays Start Purchase