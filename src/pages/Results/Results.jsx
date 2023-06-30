import { useEffect } from "react";
import EmptyList from "../../components/EmptyList/EmptyList";
import { Loader } from "../../utils/style/Loader";
import { PageLink } from "../../utils/style/BtnLink";
import { ContainerResults, ContentResults, ContentInformation, ContentDescription, 
         TitleResults, SubTitleResults, TittleInformation, TextInformation, FetchError } from './ResultsStyle';
import { useDispatch, useSelector } from "react-redux";
import { selectAnswers, selectResults, selectTheme } from "../../utils/selectors";
import { fetchOrUpdateResults } from "../../features/results";

         
export function formatQueryParams(answers){
    
    const answersNumbers = Object.keys(answers);

    return answersNumbers.reduce((previousParams, answersNumbers, index) => {
        const isFirstParam = index === 0;
        const separator = isFirstParam ? '' : '&';
        return `${previousParams}${separator}a${answersNumbers}=${answers[answersNumbers]}`;
    }, '');
}

export const firstLetterCapitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatJobList(title, listLength, index){
    if(index === listLength - 1){
        return firstLetterCapitalize(title);
    }
    return `${firstLetterCapitalize(title)},`
}

function Results(){
    
    const theme = useSelector(selectTheme);
    const answers = useSelector(selectAnswers);
    const fetchParams = formatQueryParams(answers);
    
    const dispatch = useDispatch();

    // on utilise useEffect pour lancer la requête au chargement du composant
    useEffect(() => {
        dispatch(fetchOrUpdateResults(fetchParams));
    }, [dispatch, fetchParams]);

    const results = useSelector(selectResults);
 
    const resultsData = results.data?.resultsData;   
    const isLoading = results.status === 'void' || results.status === 'pending' || results.status === 'updating';

    if(results.status === 'rejected') {
        return <FetchError>Oups il ya un problème</FetchError>
    }

    return (

        <ContainerResults theme={theme}>

            { isLoading ?

                (<Loader data-testid="loader" />) 

                :

                (
                    <>
                    
                        {
                            (resultsData.length !== 0) ?  
 
                            (
                            
                                <ContentResults>

                                    <TitleResults theme={theme}>Les compétences dont vous avez besoin :
                                      
                                        {
                                            resultsData.map((title, index) => (
                                                <SubTitleResults 
                                                    theme={theme} 
                                                    key={`result-title-${title.title}-${index}` }>
                                                    {formatJobList(title.title, resultsData.length, index)}              
                                                </SubTitleResults>
                                            ))
                                        }
                                        
                                    </TitleResults>
                                    
                                    <PageLink to="/freelances" $theme={theme}>Découvrez nos profils</PageLink>

                                    <ContentInformation>
                                        {
                                                resultsData.map((title, index) => (
                                                    <ContentDescription key={`result-details-${title.title}-${index}`}>
                                                        <TittleInformation theme={theme} data-testid="title-info">
                                                            {firstLetterCapitalize(title.title)}
                                                        </TittleInformation>
                                                        <TextInformation theme={theme} data-testid="description-info" >
                                                            {firstLetterCapitalize(title.description)}
                                                        </TextInformation>
                                                    </ContentDescription>
                                                            
                                                )) 
                                        }  
                                    </ContentInformation>
                                    
                                </ContentResults>
                            )

                            :

                            (
                                <EmptyList />
                            )

                        }
                               
                    </>
                )
            }
            
        </ContainerResults>

    )
}

export default Results;