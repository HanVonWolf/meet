import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor, fireEvent } from '@testing-library/react';
import App from '../App';
import NumberOfEvents from '../components/NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('User does not type in the number-of-events field', ({ given, when, then }) => {
        let AppComponent;
        given('the app is open', () => {
            AppComponent = render(<App />);
        });

        when('tno number of events is specified', () => {

        });

        then('the default number of events is shown', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32); 
            });
        });
    });

    test('User types in the number-of-events field', ({ given, when, then }) => {
        let AppComponent;
        given('the main page is open', () => {
            AppComponent = render(<App />);
        });

        when('user specifies a number in number-of-events field', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const numberOfEventsInput = within(AppDOM).getByLabelText('Number of Events');
            fireEvent.change(numberOfEventsInput, { target: { value: 3 } });
        });

        then('the user should see that number of events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(3);
            });
        });
    });
});