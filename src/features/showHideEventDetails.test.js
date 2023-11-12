import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { getEvents } from '../api.js';

const feature = loadFeature('./src/features/showHideEventDetails.feature');

defineFeature(feature, test => {

    test('Event elements are collapsed by default.', ({ given, when, then }) => {
        let AppComponent;
        let EventList;
        let EventListItems;

        given('the user has opened the app', () => {
            AppComponent = render(<App />)
        });

        when('the list of events are displayed', async () => {
            EventList = AppComponent.container.firstChild.querySelector('#event-list');

            await waitFor(() => {
                EventListItems = within(EventList).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });

        then('event details shouldn\'t show yet', () => {
            
            EventListItems.forEach((EventListItems) => {
                const details = EventListItems.querySelector('details');
                expect(details).not.toBeInTheDocument();
            })
        });
    });

    
    test('User can expand the event details.', ({ given, when, then }) => {
        let AppComponent;
        let EventList;
        given('the user has opened the app to the event list', () => {
            AppComponent = render(<App />);
            EventList = AppComponent.container.firstChild.querySelector('#event-list');
            expect(EventList).toBeInTheDocument();
        });

        when('the user clicks on an event\'s show details button', async () => {
            const button = AppComponent.queryAllByText('Show Details')[0];
            await userEvent.click(button);          
        });

        then('the event should expand to show the event\'s details', () => {
            const details = EventList.querySelector('details');
            expect(details).toBeInTheDocument;
        });
    });

    
    test('User can collapse event details.', ({ given, when, then }) => {
        let AppComponent;
        let details;
        
        given('user has clicked on an event\'s details from the event list', async () => {
            AppComponent = render(<App />);
            const showDetails = AppComponent.queryAllByText('Show Details')[0];
            await userEvent.click(showDetails);
            details = AppComponent.queryAllByText('details');
            expect(details).toBeInTheDocument;
        });

        when('the user clicks on hide details', async () => {
            const hideDetails = AppComponent.queryAllByText('Hide Details')[0];
            await userEvent.click(hideDetails);
        });

        then('the event details should disappear', () => {
            expect(details).not.toBeInTheDocument;
        });
    });


});
