Feature: DG Saved Estimates

    Background:
        Given User is in Saves page
        And has a saved estimate

    @keepCookies
    Scenario: Price Details Modal
        When User clicks the Price Details CTA on a saved estimate
        Then the price details modal appears
        
    @keepCookies
    Scenario: Estimate type CTA goes to pre-populated VDP
        When User clicks the estimate type CTA
        Then the user is redirected to a pre-populated VDP

    @keepCookies
    Scenario: Start Purchase from Saved Estimate
        When User clicks the Start Purchase CTA
        Then the User is redirected to the Review Deal page

    @keepCookies
    Scenario: Remove Estimate
        When User clicks the Remove Estimate CTA
        Then the estimate is removed
