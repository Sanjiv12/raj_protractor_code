Feature: GXP Saves Page
A MST-C user opens their My Saves page.

# Page Structure Section
# ====================================================================================

Scenario: Saves - Shared Saves Lead from Saves Page

  Given User is in Vehicle Details page
  When User clicks on inventory save heart
  And User loads the Saves page
  And User clicks the Start Sharing Button
  And User fills out Modal
  And User submits form
  Then Modal success state should appear
  
