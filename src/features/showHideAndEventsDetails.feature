Feature: Show and hide event details
 Scenario: An event element is collapsed by default
  Given user opened app
  When the list of events are rendered
  Then event details will not show

 Scenario: User can expand the event details
  Given the event list is rendered
  When user clicks show details button
  Then more event details will be shown
  
 Scenario: User can hide details of event
  Given user clicked show details button
  When the user clicks hide details button
  Then the event details will be hidden
