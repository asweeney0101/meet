import { render } from '@testing-library/react';
import CitySearch from '../components/CitySearch';

describe('<CitySearch /> component', () => {
    test('renders test input', () => {
        const CitySearchComponent = render(<CitySearch />);
        const cityTextbox = CitySearchComponent.queryByRole('textbox');
        expect(cityTextbox).toBeInTheDocument();
        expect(cityTextbox).toHaveClass('city');
    });
});
