
Feature: MSP - Filters
A MST-C user navigates the filters on MSP page.
 

Scenario: MSP - Vehicle Type

  Given User is in Model Selection page
  When User selects one or more options under Vehicle Type in Filters panel
  Then Only the applicable Model cards should be displayed in the page

Scenario: MSP - Price Range

  Given User is in Model Selection page
  When User selects a Price Range for MSRP in Filters panel
  Then Only the applicable priced Model cards should be displayed in the page

Scenario: MSP - Sort by price

  Given User is in Model Selection page
  When User chooses to sort by Price Low to High 
  Then The Model cards for which Inventory is available should be sorted by Price in ascending order