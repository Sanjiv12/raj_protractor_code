Feature: GXP Onboarding Modal

Scenario: Onboarding Modal - User is on T1 non-SmartPath
    Given User is on T1 home page
    When User selects non-SmartPath zipcode
    Then Onboarding modal does not appear

Scenario: Onboarding Modal - User is on T1 SmartPath
    Given User is on T1 home page
    And User is on non-SmartPath zipcode
    When User selects SmartPath zipcode
    Then Onboarding modal appears

Scenario: Onboarding Modal - User is on T2 non-SmartPath
    Given User is on T2 home page
    When User selects non-SmartPath zipcode
    Then Onboarding modal does not appear

Scenario: Onboarding Modal - User is on T2 SmartPath
    Given User is on T2 home page
    And User is on non-SmartPath zipcode
    When User selects SmartPath zipcode
    Then Onboarding modal appears

Scenario: Onboarding Modal - User is on T3 non-SmartPath
    When User views a non-SmartPath T3 home page
    Then Onboarding modal does not appear

Scenario: Onboarding Modal - User is on T3 SmartPath
    When User views a SmartPath T3 home page
    Then Onboarding modal appears