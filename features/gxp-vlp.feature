Feature: GXP Vehicle List Page (VLP) Tests
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
Scenario: VLP - Top Nav Loaded

  Given User is in Vehicle List Page
  When User loads the page
  Then The Top Nav Menu icon should be present

Scenario: VLP - Top Nav Dropdown Desktop Signed Out

  Given User is in Vehicle List Page and Signed Out
  When User clicks the Top Nav Dropdown Menu icon
  Then The Top Nav Menu Dropdown should be visible
  And The Profile Icon should be in Selected state
  And Saves Linkout should be present
  And Saves Linkout should read View Saves
  And Saves Linkout should link to Saves Page
  And Owners Linkout should be present
  And Owners Linkout should read Manage Vehicles
  And Owners Linkout should link to Owners Page
  And Temporary Saved Items Message should be present
  And Create Account Button should be present
  # And Create Account Button should link out to Login Page
  And Sign In Button should be present
  # And Sign In Button should link out to Login Page

# ====================================================================================