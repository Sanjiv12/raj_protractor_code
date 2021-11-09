Feature: GXP Create Account Banner

Scenario: Create Account Banner is displayed when user is not logged in
    Given User is in Saves page
    And User is not logged in
    When User takes no action
    Then Create Account banner is shown

Scenario: Create Account Banner is not displayed when user logs in
    Given User is in Saves page
    When User clicks the Sign In link
    And User signs in with a valid account
    Then User is redirected to Saves Page and Account Banner is not shown