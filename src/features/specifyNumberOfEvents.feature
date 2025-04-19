Feature: Specify number of events
 Scenario: User doesn't specify a number of events to show
  Given the app is open
  When no number of events is specified
  Then the default number of events is shown

 Scenario: User does specify a number of events
  Given the main page is open
  When user specifies a number in number-of-events field
  Then the user should see that number of events
