Feature: GXP VDP Save heart tests
A MST-C user clicks GXP hearts on the VDP page.

Scenario: VDP - Save Heart

  Given User is in Vehicle Details page
  When User clicks on an inventory save heart
  Then Inventory heart should turn active
  And Inventory heart tooltip should open