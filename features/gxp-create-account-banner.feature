Feature: GXP Create Account Banner

Scenario: Create Account Banner is displayed when user is not logged in
    Given User is in Saves page
    And User is not logged in
    Then Create Account banner is shown

Scenario: Create Account Banner is not displayed when user logs in
    Given User is in Saves page
    When User signs in with a valid account
    Then User is redirected back to the Saves Page and Create Account Banner is not shown

Scenario: Close Banner CTA
    Given User is in Saves page
    When User clicks the X
    Then the banner disappears

Scenario: Create Account CTA
    Given User is in Saves page
    When User clicks Create Account
    Then User is redirected to the create account page

Scenario: Sign In CTA
    Given User is in Saves page
    When User clicks Sign In
    Then User is redirected to the login page
