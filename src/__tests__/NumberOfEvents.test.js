import { render } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';
import userEvent from '@testing-library/user-event';

describe('<NumberOfEvents /> Component', () => {
    let NOEComponent;
    beforeEach(() => {
        NOEComponent = render(<NumberOfEvents setCurrentNOE={() => {}}/>)
    })

    test('Has the input textbox', () => {
        expect(NOEComponent.queryByRole('textbox')).toBeInTheDocument();
      });

    test('default value of textbox is 32', () => {
        expect(NOEComponent.queryByRole('textbox')).toHaveValue('32');
    })

    test('updates number of events when user types', async () => {
        const input = NOEComponent.queryByRole('textbox');
        await userEvent.type(input, '{backspace}{backspace}10');
        expect(input).toHaveValue('10');
      });

})