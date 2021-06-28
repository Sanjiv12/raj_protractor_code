Feature: GXP Saves Page
A MST-C user opens their My Saves page.

# Page Structure Section
# ====================================================================================
Scenario: Saves - Profile Icon is visible

  Given User is in Vehicle List page
  When User loads the Saves page
  Then The Profile Icon should be visible

Scenario: Saves - Sidebar Has Correct Structure

  Given User is in Saves page
  When User views the Saves page
  Then Sidebar Component should be visible
  And Sidebar "Deals" Linkout should be present
  And Sidebar "Deals" Linkout should be "My Deals"
  And Sidebar "Deals" Linkout should be in "InActive" state
  And Sidebar "Deals" Linkout should link to "/my-deals"
  And Sidebar "Saves" Linkout should be present
  And Sidebar "Saves" Linkout should be in "Active" state
  And Sidebar "Saves" Linkout should be "My Saves (0)"
  And Sidebar "Owners" Linkout should be present
  And Sidebar "Owners" Linkout should be "Owners"
  And Sidebar "Owners" Linkout should be in "InActive" state
  And Sidebar "Owners" Linkout should link to "/owners"
  And Sidebar "Financial" Linkout should be present
  And Sidebar "Financial" Linkout should be "Toyota Financial"
  And Sidebar "Financial" Linkout should be in "InActive" state
  And Sidebar "Financial" Linkout should link to "www.toyotafinancial.com"

Scenario: Saves - SmartPath Header has correct structure

  Given User is in Saves page
  When User views the Saves page
  Then SmartPath Header is "My Saves"
  And SmartPath progress bar is visible

Scenario: Saves - Sticky Header has correct structure

  Given User is in Saves page
  When User views the Saves page
  Then Sticky Header is visible
  And Name of dealership is present

Scenario: Saves - Temporary Saves Banner is present

  Given User is in Saves page
  When User views the Saves page
  Then Temporary Saves banner is visible

Scenario: Saves - Empty Saved Inventory Section has correct structure

  Given User is in Saves page
  When User views the Saves page
  Then Saved "Inventory" Header is "Saved Inventory"
  And Saved "Inventory" SubHeader is "Save vehicles you're interested in and track their availablility."
  And Saved "Inventory" section is empty
  And Saved "Inventory" Button is visible
  And Saved "Inventory" Button links to "/inventory"

Scenario: Saves - Empty Saved Offers Section has correct structure

  Given User is in Saves page
  When User views the Saves page
  Then Saved "Offer" Header is "Saved Offers"
  And Saved "Offer" SubHeader is "Save offers so you won't miss out on a deal."
  And Saved "Offer" section is empty
  And Saved "Offer" Button is visible
  And Saved "Offer" Button links to "/deals-incentives"

Scenario: Saves - Empty Saved Searches Section has correct structure

  Given User is in Saves page
  When User views the Saves page
  Then Saved "Search" Header is "Saved Searches"
  And Saved "Search" SubHeader is "Save searches to easily look for new matching inventory."
  And Saved "Search" section is empty
  And Saved "Search" Button is visible
  And Saved "Search" Button links to "/inventory"

Scenario: Saves - Empty Saved Builds Section has correct structure

  Given User is in Saves page
  When User views the Saves page
  Then Saved "Build" Header is "Saved Builds"
  And Saved "Build" SubHeader is "Save builds to find inventory that matches your ideal vehicle."
  And Saved "Build" section is empty
  And Saved "Build" Button is visible
  And Saved "Build" Button links to "/configurator"

Scenario: Saves - Saved Inventory Section shows saved vehicle
  
  Given User is in Vehicle List Page GXP
  When User clicks on a vehicle save heart
  Then Saved Vehicle is visible in Saves Page

Scenario: Saves - Division Line Count is Correct
  
  Given User is in Saves page
  When User views the Saves page
  Then "3" Dividers are present

# ====================================================================================

# Saved Estimates Section
# ====================================================================================

Scenario: Saves - Saved Inventory Section shows saved estimates

  Given User is in Vehicle Details page
  When User clicks on estimate save heart for all estimates
  Then Saved Estimates are visible in Saves Page
  And Saved Estimates match estimate details from VDP