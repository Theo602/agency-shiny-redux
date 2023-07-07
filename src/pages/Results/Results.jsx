import EmptyList from "../../components/EmptyList/EmptyList";
import { Loader } from "../../utils/style/Loader";
import { PageLink } from "../../utils/style/BtnLink";
import { ContainerResults, ContentResults, ContentInformation, ContentDescription, 
         TitleResults, SubTitleResults, TittleInformation, TextInformation, FetchError } from './ResultsStyle';
import { useSelector } from "react-redux";
import { selectAnswers, selectTheme } from "../../utils/selectors";
import { useQuery } from "react-query";

         
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
    const params = formatQueryParams(answers);

    const { data, isLoading, error } = useQuery(['results', params], async () => {
        const response = await fetch(`http://localhost:8000/results?${params}`);
        const data = await response.json();
        return data;
    })

    const resultsData = data?.resultsData

    if(error) {
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
                            (data.resultsData.length !== 0) ?  
 
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