import Results, { formatJobList, formatQueryParams } from "./Results";
import { rest } from "msw";
import { setupServer } from 'msw/node'
import { screen, waitForElementToBeRemoved } from '@testing-library/react'
import { render } from "../../utils/test";
import '@testing-library/jest-dom/extend-expect'


const server = setupServer(

    //On précise ici l'url qu'il faudra "intercepter"

    rest.get('http://localhost:8000/results', (req, res, ctx) => {

        // Là on va pouvoir passer les datas mockées dans ce qui est retourné en json
        return res(ctx.json({ resultsData: ResultsMockedData }));
    })
)

// Active la simulation d'API avant les tests depuis server
beforeAll(() => server.listen());

// Réinitialise tout ce qu'on aurait pu ajouter en termes de durée pour nos tests avant chaque test
afterEach(() => server.restoreHandlers());

// Ferme la simulation d'API une fois que les tests sont finis
afterAll(() => server.close());

const ResultsMockedData = [
    {
        title: 'backend',
        description: "Le backend consiste en la partie émergée de l'iceberg : ce qui permet de faire tourner une application mais qui n'est pas visible par l'utilisateur"

    },
    {
        title: 'frontend',
        description: "Le développeur ou la développeuse frontend se charge de l'interface : interactions avec l'utilisateur, style, etc.",

    },
]


it('Should display results after loader is removed', async () => {
    render(<Results />)

    await waitForElementToBeRemoved(() => screen.queryByTestId('loader'));
    const titleInformation = screen.getAllByTestId('title-info');
    const descriptionInformation = screen.getAllByTestId('description-info');
    expect(titleInformation[0].textContent).toBe('Backend');
    expect(titleInformation[1].textContent).toBe('Frontend');
    expect(titleInformation.length).toBe(2);
    expect(descriptionInformation[0].textContent).toBe(ResultsMockedData[0].description);
    expect(descriptionInformation[1].textContent).toBe(ResultsMockedData[1].description);
    expect(descriptionInformation.length).toBe(2);
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument()

});


describe('La fonction formatJobList', () => {

    it('should add a comma to a word', () => {
        const expectedState = "Items2,"
        expect(formatJobList('Items2', 3, 1)).toEqual(expectedState);
    });

    it('should not add a comma to the last element of the list', () => {
        const expectedState = "Items3"
        expect(formatJobList('Items3', 3, 2)).toEqual(expectedState);
    });

});

describe('La fonction formatQueryParams', () => {

    it('should use the right format for param', () => {
        const expectedState = "a1=1"
        expect(formatQueryParams({ 1: 1 })).toEqual(expectedState);
    });

    it('should concatenate params with an &', () => {
        const expectedState = 'a1=1&a2=1';
        expect(formatQueryParams({ 1: 1, 2: 1 })).toEqual(expectedState);
    });
});








