import Cart from '../../components/Cart/Cart';
import { Loader } from "../../utils/style/Loader";
import { ContentError, ContainerFreelance, TitleFreelance, TextFreelance, CardsContainer, LinkCart} from './FreelancesStyle'
import { useSelector } from "react-redux";
import { selectTheme } from "../../utils/selectors";
import { useQuery } from 'react-query';


function Freelances(){
    
    const theme = useSelector(selectTheme); 

    const { data, isLoading, error } = useQuery('freelances', async () => {
        const response = await fetch('http://localhost:8000/freelances');
        const data = await response.json();
        return data;
    })
    
    const freelancersList = data?.freelancersList;

    if(error) {
        return <ContentError theme={theme}>Oups il ya un problème</ContentError>
    }

    return(
        
        <ContainerFreelance>

            <TitleFreelance theme={theme}>Trouvez votre prestataire</TitleFreelance>
            <TextFreelance theme={theme}>Chez Shiny nous réunissons les meilleurs profils pour vous.</TextFreelance>

            { isLoading ?
            
                (<Loader data-testid="loader" />)
                
                :

                (
                    <CardsContainer theme={theme}>
                        
                        {  
                            freelancersList.map((profil) => (
                                <LinkCart key={`freelance-${profil.id}`} to={`/profile/${profil.id}`}>                          
                                <Cart 
                                    label={ profil.job }
                                    picture={ profil.picture }
                                    title={ profil.name }
                                    theme={ theme }
                                />
                                </LinkCart>
                            ))  
                        }

                    </CardsContainer>
                )
            }
 
        </ContainerFreelance>
    )
}

export default Freelances;