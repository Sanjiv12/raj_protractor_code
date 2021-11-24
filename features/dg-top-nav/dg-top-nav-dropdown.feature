Feature: Digital Garage Top Nav Dropdown Menu

    A user clicks the top nav profile icon and views the dropdown menu,
    then proceeds to navigate to the available links via the dropdown.

    Scenario: Top Nav Dropdown - Menu is Visible
        Given User is in Vehicle List Page
        And User is on desktop
        When User clicks the Top Nav Dropdown Menu icon
        Then The Top Nav Menu Dropdown should be visible

    Scenario: Top Nav Dropdown - Profile Icon State Changes
        Given User is in Vehicle List Page
        And User is on desktop
        When User clicks the Top Nav Dropdown Menu icon
        Then The Profile Icon should be in Selected state

    Scenario: Top Nav Dropdown - Logged Out View Saves Linkout In Expected State
        Given User is in Vehicle List Page
        And User is on desktop
        And User is not logged in to account
        When User clicks the Top Nav Dropdown Menu icon
        Then Top Nav "Saves" Linkout should be present
        And Top Nav "Saves" Linkout Text should be "View Saves"
        And Top Nav "Saves" Linkout should link to "/saves"

    Scenario Outline: Top Nav Dropdown - Logged In View Saves Linkout In Expected State
        Given User is in Vehicle List Page
        And User is on desktop
        And User Signs In "<email>" "<password>"
        When User clicks the Top Nav Dropdown Menu icon
        Then Top Nav "Saves" Linkout should be present
        And Top Nav "Saves" Linkout Text should be "View Saves (<number_of_saves>)"
        And Top Nav "Saves" Linkout should link to "/saves"

        Examples:
            | email                  | password        | number_of_saves |
            | maferap486@idrct.com   | Bddtest1!       |       2         |
            # | gxp.bdd.test@gmail.com | B3havi0rDrIV3n! |       2         |

    Scenario: Top Nav Dropdown - Manage Vehicles Linkout is Present
        Given User is in Vehicle List Page
        And User is on desktop
        When User clicks the Top Nav Dropdown Menu icon
        Then Top Nav "Owners" Linkout should be present
        And Top Nav "Owners" Linkout Text should be "Manage Vehicles"
        And Top Nav "Owners" Linkout should link to "/owners"

    Scenario Outline: Top Nav Dropdown - Continue Purchase Linkout in Correct State
        # The continue purchase link only shows in the top nav if the following conditions hold true:
        # - The user is logged in
        # - The user has an active deal
        # - The shopping cart is not displayed in the top nav

        Given User is in Vehicle List Page
        And User is on desktop
        And User Signs In "<email>" "<password>"
        And An active deal is "<purchase_available>"
        When User clicks the Top Nav Dropdown Menu icon
        Then Top Nav Continue Purchase Linkout is "<outcome>"

        Examples:
            | email                  | password        | purchase_available | outcome |
            | maferap486@idrct.com   | Bddtest1!       | available          | shown |
    #       | gxp.bdd.test@gmail.com | B3havi0rDrIV3n! |       2         | hidden |



