Feature: GXP VDP Save heart tests
A MST-C user clicks GXP hearts on the VDP page.

Scenario: VDP - Save Hearts

  Given User is in Vehicle Details page
  When User clicks on inventory save heart
  Then Save heart should turn active
  And Save heart tooltip should open

# Scenario: VDP - Lease Estimate Save Heart

#   Given User is in Vehicle Details page
#   When User clicks on lease estimate tab
#   And User clicks on estimate save heart
#   Then Save heart should turn active
#   And Save heart tooltip should open
