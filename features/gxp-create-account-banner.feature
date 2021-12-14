Feature: GXP Create Account Banner
    Background: 
        Given User is in Saves page

    Scenario: Create Account Banner is displayed when user is not logged in
        Given User is not logged in
        Then Create Account Banner is shown

    Scenario: Close Banner CTA
        Given User is not logged in
        When User clicks the X on the Create Account Banner
        Then Create Account Banner is not shown

    Scenario: Create Account CTA
        When User clicks "Create An Account" within Create Account Banner
        Then User is redirected to "Create Account" Page

    Scenario: Sign In CTA
        When User clicks "Sign In" within Create Account Banner
        Then User is redirected to "Login" Page

    Scenario: Create Account Banner is not displayed when user logs in
        When User Signs In
        Then User is redirected to "Saves" Page
        And Create Account Banner is not shown
