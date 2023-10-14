import { render } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> Component', () => {
    let NOEComponent;
    beforeEach(() => {
        NOEComponent = render(<NumberOfEvents />)
    })

    test('Has the input textbox', () => {
        expect(NOEComponent.queryByRole('textbox')).toBeInTheDocument();
      });

    test('default value of textbox is 32', () => {
        expect(NOEComponent.queryByRole('textbox')).toHaveValue('32');
    })
})