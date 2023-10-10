import { render } from '@testing-library/react';
import { getEvents } from '../api';
import EventList from '../components/EventList';

describe('<EventList /> component', () => {

    let EventListComponent;
    beforeEach(() => {
      EventListComponent = render(<EventList events={[{ id: 1 },{ id: 2 },{ id: 3 },{ id: 4 }]}/>);
    })

    test('has an element with "list" role', () => {
      expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
    });

    test('has an element with "list" role', () => {
      expect (EventListComponent.getAllByRole("listitem").length).toBe(4);
    })
    
    test('renders correct number of events', async () => {
      const allEvents = await getEvents(); 
      EventListComponent.rerender(<EventList events={allEvents} />);
  expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
    });

  });

