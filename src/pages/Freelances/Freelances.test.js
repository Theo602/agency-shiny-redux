import { rest } from "msw";
import { setupServer } from 'msw/node'
import { screen, waitForElementToBeRemoved } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Freelances from './Freelances';
import { render } from "../../utils/test";

const server = setupServer(
    
    //On précise ici l'url qu'il faudra "intercepter"

    rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
       
        // Là on va pouvoir passer les datas mockées dans ce qui est retourné en json
        return res(ctx.json({ freelancersList: freelancesMockedData }));
    })
)

// Active la simulation d'API avant les tests depuis server
beforeAll(() => server.listen());

// Réinitialise tout ce qu'on aurait pu ajouter en termes de durée pour nos tests avant chaque test
afterEach(() => server.restoreHandlers());

// Ferme la simulation d'API une fois que les tests sont finis
afterAll(() => server.close());

const freelancesMockedData = [
    {
        id: 1,
        name: 'Aragorn',
        job: 'Roi frontend',
        picture: ''

    },
    {
        id: 2,
        name: 'Gandalf',
        job: 'Magicien backend',
        picture: ''
    },
    {
        id: 3,
        name: 'Arwen',
        job: 'Magicienne fullstack',
        picture: ''
    },
    {
        id: 4,
        name: 'Legolas',
        job: 'Magicien webdesigner',
        picture: ''
    },
]

it('Should display freelancers names after loader is removed', async () => {
    render(<Freelances />)
     
    await waitForElementToBeRemoved(() => screen.queryByTestId('loader'))
          expect(screen.getByText('Aragorn')).toBeInTheDocument()
          expect(screen.getByText('Gandalf')).toBeInTheDocument()
          expect(screen.getByText('Arwen')).toBeInTheDocument()
          expect(screen.getByText('Legolas')).toBeInTheDocument()
          expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
})