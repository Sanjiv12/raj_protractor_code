
Feature: VLP - Filters
A MST-C user navigates the filters on VLP page.
 

Scenario: VLP - Model

  Given User is in Vehicle List Page
  When User selects one or more vehicle series from Model in Filters panel
  Then Vehicles List and count should be updated based on users selection

# Scenario: VLP - Trim

#   Given User is in Vehicle List Page
#   When User selects a trim from Filters panel
#   Then Only the applicable vehicles should be displayed in the page by trim
#   And Count of options under all filter categories should be updated
#   And Filter chip should be displayed for trim

# Scenario: VLP - Engine

#   Given User is in Vehicle List Page
#   When User selects an Engine option from Filters panel
#   Then Only the applicable vehicles should be displayed in the page by engine
#   And Count of options under all filter categories should be updated
#   And Filter chip should be displayed for engine

# Scenario: VLP - Year

#   Given User is in Vehicle List Page
#   When User selects a Year from Filters panel
#   Then Only the applicable vehicles should be displayed in the page
#   And Count of options under all filter categories should be updated
#   And Filter chip should be displayed for year


# Scenario: VLP - Advertised / Selling Price

#   Given User is in Vehicle List Page
#   When User selects Price range for Advertised / Selling Price from Filters panel
#   Then Only the applicable vehicles should be displayed in the page by price
#   And Count of options under all filter categories should be updated
#   And Filter chip should be displayed for price


## Scenarios for truck, no data available for test

#Scenario: VLP - Cab & Bed Length Display

  #Given User is in Model Selection page with all filter chips cleared
  #Given User is in Model Selection page
  #When User selects model as Truck
  #And User navigates to Vehicle List Page
  #Then Filter panel should include Filters for Cab and Bed Length


#Scenario: VLP - Cab

  #Given User is in Model Selection page
  #When User selects model as Truck
  #And User selects a cab option from Filters panel
  #Then Only the applicable vehicles should be displayed in the page by cab
  #And Count of options under all filter categories should be updated
  #And Filter chip should be displayed for cab

#Scenario: VLP - Bed Length

  #Given User is in Model Selection page
  #When User selects model as Truck
  #And User selects a Bed Length option from Filters panel
  #Then Only the applicable vehicles should be displayed in the page by Bed Length
  #And Count of options under all filter categories should be updated
  #And Filter chip should be displayed for Bed Length

## Filter related scenarios  
#Scenario: VLP - Clear Filter Chip 

  #Given User has applied one or more filters
  #Given User is in Vehicle List Page
  #When User clicks on a Filter Chip 
  #Then System should remove the Filter chip 
  #And Reload the page to display updated list of vehicles and Filters 

#Scenario: VLP - Clear all 

  #Given User has applied one or more filters
  #Given User is in Vehicle List Page
  #When User clicks on Clear All in Filter chip area 
  #Then System should remove all filters  
  #And Navigate to Model Selection page

#Scenario: VLP - Clear Filter selection 

  #Given User has filters set
  #When User unselects a Filter option 
  #Then System should remove the Filter chip 
  #And Clear the filter selection
  #And Reload the page to display updated list of vehicles and Filters

#Scenario: VLP - Clear Model 

  #Given User has filters set
  #When User clears model selection
  #Then System should remove all filters  
  #And Navigate to Model Selection page 

#Scenario: VLP - Sort by price

  #Given User is in Vehicle List Page
  #When User chooses to sort by Price Low to High
  #Then The Vehicle cards should be sorted by Price in ascending order