import Cart from '../../components/Cart/Cart';
import { Loader } from "../../utils/style/Loader";
import { ContentError, ContainerFreelance, TitleFreelance, TextFreelance, CardsContainer, LinkCart} from './FreelancesStyle'
import { useDispatch, useSelector } from "react-redux";
import { selectFreelances, selectTheme } from "../../utils/selectors";
import { useEffect } from "react";
import { fetchOrUpdateFreelances } from "../../features/freelances/freelances";


function Freelances(){
    
    const dispatch = useDispatch();

    // on utilise useEffect pour lancer la requête au chargement du composant
    useEffect(() => {
        dispatch(fetchOrUpdateFreelances)
    }, [dispatch]);

    const theme = useSelector(selectTheme);
    const freelances = useSelector(selectFreelances);
    
    const freelancersList = freelances.data?.freelancersList;   
    const isLoading = freelances.status === 'void' || freelances.status === 'pending';
    
    if(freelances.status === 'rejected') {
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
                            freelancersList.map((profil, index ) => (
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