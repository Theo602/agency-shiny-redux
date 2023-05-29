import Cart from './Cart'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'

describe('Cart', () => {

    test('Should render without crash', async () => {
        render(
            <ThemeProvider>
                <Cart />
            </ThemeProvider>
        )
    })

    test('Passing props picture', async () => {
        
        render(
            <ThemeProvider>
                <Cart                         
                    label="cart label"
                    title="test composant"
                    picture="/test.png" 
                />
            </ThemeProvider>
        )
        const cardImage = screen.getByRole('img');
        expect(cardImage.src).toBe('http://localhost/test.png');
    })

    test('Passing props title', async () => {
        
        render(
            <ThemeProvider>
                <Cart 
                    label="cart label"
                    title="test composant"
                    picture="/test.png" 
                />
            </ThemeProvider>
        )
        const cardTitle = screen.getByTestId('title-element');
        expect(cardTitle.textContent).toBe('test composant');
        
    })

})