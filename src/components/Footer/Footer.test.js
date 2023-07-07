import Footer from './Footer';
import { render } from '../../utils/test';
import { fireEvent, screen } from '@testing-library/react';


describe('Footer', () => {
    it('Should render without crash', async () => {
        render(<Footer />)
    });

    it('Change theme', async () => {
        render(<Footer />)

        const nightModeButton = screen.getByRole('button');
        expect(nightModeButton.textContent).toBe('Changer de mode : ☀️');
        fireEvent.click(nightModeButton);
        expect(nightModeButton.textContent).toBe('Changer de mode : 🌙');
    });

});