import { render, within, waitFor } from '@testing-library/react';
import { getEvents } from '../api';
import EventList from '../components/EventList';
import App from "../App";

describe('<EventList /> component', () => {

    let EventListComponent;
    beforeEach(() => {
      EventListComponent = render(<EventList />);
    })

    test('has an element with "list" role', () => {
      expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
    });

       
    test('renders correct number of events', async () => {
      const allEvents = await getEvents(); 
      EventListComponent.rerender(<EventList events={allEvents} />);
      expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
    });

  });

  describe('<EventList /> Integration', () => {
    test('renders a list of 32 events', async () => {
      const AppComponent = render(<App />);
      const EventListDom = AppComponent.container.firstChild.querySelector('#event-list');
      await waitFor(() => {
        const EventListItems = within(EventListDom).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      })
    })
  })

