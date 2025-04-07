Meet app

About the project
Meet is an app that allows user to search for upcoming events in their city. Users can search by event, or by city. When users click on an event, they will be able to see more information about that event, including in chart form.

User stories and test scenarios:

Feature 1: filter events by city
As a user,
I should be able to filter events by city
So that I can see a list of events taking place in that city.

Given user hasn’t searched for any city;
When the user opens the app;
Then the user should see a list of upcoming events.

Feature 2: Show/Hide event details
As a user, I should be able to show the details of an event I’ve selected so that I can see more information about the given event.
As a user, I should be able to hide details of an event I’ve selected so that I don’t see that information anymore.

Given the user hasn’t yet clicked on a chosen city,
When the user clicks on a city of their choice,
Then the user should see more information about the city of their choice.

Given the user has clicked on a chosen city,
When the user clicks on the hide/close button,
Then the additional information is hidden and the user is returned to the full list.

Feature 3: Specify number of events
As a user, I should be able to specify the number of events I see so that I can refine my search.

Given the user has opened the main page,
When the user specifies how many events they wish to see.
Then only that number of events should be displayed for the user.

Feature 4: Use the app offline
As a user, I should be able to use the app offline so I can view the web app even without being connected to the internet.

Given the user didn’t have internet connection and the main page is opened,
When the user tries to use the app,
Then the user will still be able to view the event list.

Feature 5: Add an app shortcut to the Home Screen
As a user I should be able to add a shortcut to the app on my home screen so that I can access the app quicker.

Given the user used a mobile device,
When they wish to add a shortcut to the home screen
Then there should be a shortcut displayed on their homescreen.

Feature 6: Display charts visualising event details
As a user I should be able to view charts visualising event details so that the information is presented in an alternative clear way.

Given the user viewed the main page,
When they click on the chosen event for more information,
Then this information will also be available in chart form.
