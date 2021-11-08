Feature: GXP Onboarding Modal

Scenario: Onboarding Modal - User is on T1 SmartPath for the first time
    Given User is on the T1 home page
    And User is on a SmartPath dealer
    When User views the T1 home page
    Then Onboarding modal appears

Scenario: Onboarding Modal - User is on T1 SmartPath for the second time
    Given User is on the T1 home page
    And User is on a SmartPath dealer
    When User refreshes the page
    Then Onboarding modal does not appear

Scenario: Onboarding Modal - User is on T2 MST-C
    Given User is on the T2 home page
    When User selects a SmartPath dealer
    Then T2 MST-C page loads
    And Onboarding modal does not appear

Scenario: Onboarding Modal - User is on T3 SmartPath for the first time
    Given User is on a T3 SmartPath home page
    When User views the T3 home page
    Then Onboarding modal appears

Scenario: Onboarding Modal - User is on T3 SmartPath for the second time
    Given User is on a T3 SmartPath home page
    When User refreshes the page
    Then Onboarding modal does not appear