Feature: GXP Save heart tests
A MST-C user clicks GXP hearts.

Scenario: VLP - Save Heart

  Given User is in Vehicle List Page
  When User clicks on a vehicle save heart
  Then Heart should turn active
  And Tooltip should open