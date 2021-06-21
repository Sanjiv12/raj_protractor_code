Feature: GXP Vehicle List Page (VLP)
A MST-C user interacts with the VLP Page.

# Save Hearts Section
# ====================================================================================
Scenario: VLP - Save Heart

  Given User is in Vehicle List Page GXP
  And Cookies are cleared
  When User clicks on a vehicle save heart
  Then Heart should turn active
  And Tooltip should open

# ====================================================================================

# Top Nav Section
# ====================================================================================
Scenario: VLP - Top Nav Dropdown Desktop Signed Out

  Given User is in Vehicle List Page GXP
  And Cookies are cleared
  When User clicks the Top Nav Dropdown Menu icon
  Then The Top Nav Menu Dropdown should be visible
  And The Profile Icon should be in Selected state
  And Deals Linkout should be present
  And Deals Linkout should have Correct Text
  And Deals Linkout should link to Deals Page
  And Saves Linkout should be present
  And Saves Linkout should have Correct Text
  And Saves Linkout should link to Saves Page
  And Owners Linkout should not be present
  And Temporary Saved Items Message should be present
  And Create Account Button should be present
  And Sign In Button should be present

Scenario: VLP - Top Nav Dropdown Desktop Signed In

  Given User is in Vehicle List Page GXP
  When User clicks the Top Nav Dropdown Menu icon and Signs In
  Then The Top Nav Menu Dropdown should be visible
  And The Profile Icon should be in Selected state
  And Deals Linkout should be present
  And Deals Linkout should have Correct Text
  And Deals Linkout should link to Deals Page
  And Saves Linkout should be present
  And Saves Linkout should have Correct Text
  And Saves Linkout should link to Saves Page
  And Owners Linkout should be present
  And Owners Linkout should have Correct Text
  And Owners Linkout should link to Owners Page
  And Account Button should be present
  And Sign Out Button should be present

# ====================================================================================