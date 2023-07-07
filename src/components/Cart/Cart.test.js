import Cart from './Cart';
import { render } from '../../utils/test';
import { screen } from '@testing-library/react';

describe('Cart', () => {

    it('Should render without crash', async () => {
        render(<Cart />)
    });

    it('Passing props picture', async () => {

        render(
            <Cart
                label="cart label"
                title="test composant"
                picture="/test.png"
            />
        )
        const cardImage = screen.getByRole('img');
        expect(cardImage.src).toBe('http://localhost/test.png');
    });

    it('Passing props title', async () => {

        render(
            <Cart
                label="cart label"
                title="test composant"
                picture="/test.png"
            />
        )
        const cardTitle = screen.getByTestId('title-element');
        expect(cardTitle.textContent).toBe('test composant');

    });

});