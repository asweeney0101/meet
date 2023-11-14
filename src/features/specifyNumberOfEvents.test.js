import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('Default number of events is 32', ({ given, when, then }) => {
        let AppComponent;
        let EventList;
        let EventListItems;
        given('the app is open', () => {
            AppComponent = render(<App />);
        });

        when('the user hasn\'t yet specified the number of events', () => {});

        then(/^(\d+) events should be showing$/, async (arg0) => {
            EventList = AppComponent.container.querySelector('#event-list');
            
            await waitFor(() => {
                EventListItems = within(EventList).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });

    test('User can change the number of events', ({ given, when, then }) => {
        let AppComponent;
        given('the app is open', () => {
            AppComponent = render(<App />);
        });
    
        when('the user specifies the number of events', async () => {
            
            await waitFor(() => {
                const input = AppComponent.container.querySelector('#number-of-events-input');
                userEvent.type(input, '{backspace}{backspace}16')
            });
            

            });
    
        then('the user should be able to see that many events', async () => {
            const EventList = AppComponent.container.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventList).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(16);
            })
            
        });
    });

});


})