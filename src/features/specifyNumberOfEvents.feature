Feature: Specify number of events

    Scenario: Default number of events is 32
        Given the app is open
        When the user hasn't yet specified the number of events
        Then 32 events should be showing

    Scenario: User can change the number of events
        Given the app is open
        When the user specifies the number of events
        Then the user should be able to see that many events