import React from 'react'; 
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor, fireEvent } from '@testing-library/react';
import App from '../App';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';

const feature = loadFeature('./src/features/showHideAndEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        let AppComponent;
        given('user opened app', () => {
          AppComponent = render(<App />);
        });

        when('the list of events are rendered', async () => {
          const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
      
            await waitFor(() => {
              const EventListItems = within(EventListDOM).queryAllByRole('listitem');
              expect(EventListItems.length).toBe(32);
            });
      
        });

        then('event details will not show', async () => {
          const AppDOM = AppComponent.container.firstChild;
          const eventDetails = AppDOM.querySelector('.details');
          expect(eventDetails).not.toBeInTheDocument();
          });
    });

    test('User can expand an event to see details.', ({ given, when, then }) => {
      let AppComponent;
      given('the event list is rendered', async () => {
        AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
      
            await waitFor(() => {
              const EventListItems = within(EventListDOM).queryAllByRole('listitem');
              expect(EventListItems.length).toBe(32);
            });

      });

      when('user clicks show details button', async () => {
        const AppDOM = AppComponent.container.firstChild;
        const showDetailsButtons = within(AppDOM).queryAllByText('Show Details');
        fireEvent.click(showDetailsButtons[0]); 
      });

      then('more event details will be shown', async () => {
          const AppDOM = AppComponent.container.firstChild;
          const eventDetails = AppDOM.querySelector('.details');
          expect(eventDetails).toBeInTheDocument();
        });
    });

    test('User can collapse an event to hide details.', ({ given, when, then }) => {
      let EventComponent;
      let allEvents;
      given('user clicked show details button', async () => {
        const user = userEvent.setup();
        const allEvents = await getEvents();
        const EventComponent = render(<Event event={allEvents[0]} />)
        const showDetails = EventComponent.queryByText('Show details');
        await user.click(showDetails);
      });

      when('the user clicks hide details button', async () => {
        const user = userEvent.setup();
        const allEvents = await getEvents();
        const EventComponent = render(<Event event={allEvents[0]} />)
        const hideDetails = EventComponent.queryByText('Hide details');
        await user.click(hideDetails);
      });

      then('the event details will be hidden',async () => {
        let AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
          const eventDetails = AppDOM.querySelector('.details');
          expect(eventDetails).not.toBeInTheDocument();
      });
    });

});