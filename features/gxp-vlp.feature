Feature: GXP Vehicle List Page (VLP)
A MST-C user interacts with the VLP Page.

# Save Hearts Section
# ====================================================================================
Scenario: VLP - Save Heart

  Given User is in Vehicle List Page
  When User clicks on a vehicle save heart
  Then Heart should turn active
  And Tooltip should open

# ====================================================================================

# Top Nav Section
# ====================================================================================
Scenario: VLP - Top Nav Dropdown Desktop Signed Out

  Given User is in Vehicle List Page
  When User clicks the Top Nav Dropdown Menu icon
  Then The Top Nav Menu Dropdown should be visible
  And The Profile Icon should be in Selected state
  And Top Nav "Deals" Linkout should be present
  And Top Nav "Deals" Linkout Text should be "Buy Online"
  And Top Nav "Deals" Linkout should link to "/my-deals"
  And Top Nav "Saves" Linkout should be present
  And Top Nav "Saves" Linkout Text should be "My Saves"
  And Top Nav "Saves" Linkout should link to "/saves"
  And Top Nav "Owners" Linkout should not be present
  And Temporary Saved Items Message should be present
  And Create Account Button should be present
  And Sign In Button should be present

Scenario: VLP - Top Nav Dropdown Desktop Signed In

  Given User is in Vehicle List Page
  When User clicks the Top Nav Dropdown Menu icon and Signs In
  Then The Top Nav Menu Dropdown should be visible
  And The Profile Icon should be in Selected state
  And Top Nav "Deals" Linkout should be present
  And Top Nav "Deals" Linkout Text should be "Buy Online"
  And Top Nav "Deals" Linkout should link to "/my-deals"
  And Top Nav "Saves" Linkout should be present
  And Top Nav "Saves" Linkout Text should be "My Saves"
  And Top Nav "Saves" Linkout should link to "/saves"
  And Top Nav "Owners" Linkout should be present
  And Top Nav "Owners" Linkout Text should be "My Vehicles"
  And Top Nav "Owners" Linkout should link to "/owners"
  And Account Button should be present
  And Sign Out Button should be present

# ====================================================================================