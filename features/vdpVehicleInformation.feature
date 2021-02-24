
Feature: VDP - Vehicle Infromation
A MST-C user selects a vehicle
 
Scenario: Navigating to VDP (Price not unlocked)

  Given User is in Vehicle Details page
  Then Vehicle Information should be displayed with VIN
  Then Vehicle Information should be displayed with Model Name
  Then Vehicle Information should be displayed with DG Save Icon
  Then Vehicle Information should be displayed with Advertised Price
  Then Vehicle Information should be displayed with Unlock Savings
  Then Vehicle Information should be displayed with Exterior Color
  Then Vehicle Information should be displayed with Interior Color
  Then Vehicle Information should be displayed with Engine
  Then Vehicle Information should be displayed with Estimated MPG
  Then Vehicle Information should be displayed with Package & Accessories
  Then Vehicle Information should be displayed with View All Vehicle Details CTA
  Then Vehicle Information should be displayed with Toyota Care Image
  Then Vehicle Information should be displayed with Toyota Safety Sense Logo
  Then Vehicle Information should be displayed with Image Carousal

