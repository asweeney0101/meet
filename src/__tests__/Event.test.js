import { render } from '@testing-library/react';
import Event from '../components/Event';
import mockData from '../mock-data';


const mockEvent = mockData[0]

describe('<Event /> Component', () => {
    let EventComponent;
    beforeEach(() => {
        EventComponent = render(<Event event={mockEvent} />);
    })
     
    test('Show Event Title', () => {
        const title = EventComponent.queryByText(mockEvent.summary);
        expect(title).toBeInTheDocument();
    })

})