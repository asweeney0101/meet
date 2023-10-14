import { render } from '@testing-library/react';
import Event from '../components/Event';
import mockData from '../mock-data';
import userEvent from '@testing-library/user-event';


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

    test('By Default, Event Details are Hidden', () => {
        expect(EventComponent.queryByText(mockEvent.description)).not.toBeInTheDocument();
    })

    test("When a user clicks 'Show Details', the details are shown", async () => {

        await userEvent.click(EventComponent.queryByText('Show Details'));
        expect(EventComponent.container.firstChild.querySelector('.details')).toBeInTheDocument();
    })

    test('hide details after user clicks button "hide details"', async () => {
        
        await userEvent.click(EventComponent.queryByText('Show Details'));
        await userEvent.click(EventComponent.queryByText('Hide Details'));
       
        expect(EventComponent.container.firstChild.querySelector('.details')).not.toBeInTheDocument();
      });

})