import { render } from '@testing-library/react';
import Event from '../components/Event';
import mockData from '../mock-data';


const mockEvent = mockData[2];

describe('<Event /> Component', () => {
    let EventComponent;
    beforeEach(() => {
        EventComponent = render(<Event event={mockEvent} />);
    })
     
    test('Has Event Title', () => {
        expect(EventComponent.queryByText(mockEvent.summary)).toBeInTheDocument();
    })

    test('Has Event Start Time', () => {
        expect(EventComponent.queryByText(mockEvent.start.dateTime)).toBeInTheDocument();
    })

    test('Has Event Location', () => {
        expect(EventComponent.queryByText(mockEvent.location)).toBeInTheDocument();
    })

})