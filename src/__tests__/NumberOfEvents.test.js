import { render } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> Component', () => {
    let NOEComponent;
    beforeEach(() => {
        NOEComponent = render(<NumberOfEvents />)
    })

    test('has the input textbox', () => {
        expect(NOEComponent.queryByRole('textbox')).toBeInTheDocument();
      });
})