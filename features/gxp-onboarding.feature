Feature: GXP Onboarding Modal

Scenario: Onboarding Modal - User is on T1 SmartPath for the first time
    Given User is on the T1 home page
    And User is on a SmartPath dealer
    When User takes no action
    Then Onboarding modal is visible

Scenario: Onboarding Modal - User is on T1 SmartPath for the second time
    Given User is on the T1 home page
    And User is on a SmartPath dealer
    When User refreshes the page
    Then Onboarding modal is not visible

Scenario: Onboarding Modal - User is on T2 MST-C
    Given User is on the T2 home page
    When User selects a SmartPath dealer
    Then T2 MST-C page loads
    And Onboarding modal is not visible

Scenario: Onboarding Modal - User is on T3 SmartPath for the first time
    Given User is on a T3 SmartPath home page
    When User takes no action
    Then Onboarding modal is visible

Scenario: Onboarding Modal - User is on T3 SmartPath for the second time
    Given User is on a T3 SmartPath home page
    When User refreshes the page
    Then Onboarding modal is not visible