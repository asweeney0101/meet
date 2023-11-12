Feature: Show/hide event details
    Scenario: Event elements are collapsed by default.
        Given the user has opened the app
        When the list of events are displayed
        Then event details shouldn't show yet

    Scenario: User can expand the event details.
        Given the user has opened the app to the event list
        When the user clicks on an event's show details button
        Then the event should expand to show the event's details

    Scenario: User can collapse event details.
        Given user has clicked on an event's details from the event list
        When the user clicks on hide details
        Then the event details should disappear
