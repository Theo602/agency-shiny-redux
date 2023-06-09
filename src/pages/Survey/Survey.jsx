import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { SurveyContext } from "../../utils/context";
import { Loader } from "../../utils/style/Loader";
import { ContainerQuestion, TittleQuestion, ContentQuestion, 
         ContainerArrow, ContentError, ContainerReply, ReplyBox } from './SurveyStyle'
import { useSelector, useStore } from "react-redux";
import { selectSurvey, selectTheme } from "../../utils/selectors";
import { fetchOrUpdateSurvey } from "../../features/survey";

function Survey(){

    const { questionNumber } = useParams()
    const question = parseInt(questionNumber);
    const questionPrevious = question === 1 ? 1 : question - 1;
    const questionNext = question + 1;

    const { answers, saveAnswers } = useContext(SurveyContext);


    // on récupère le store grâce au hook useStore()
    const store = useStore();

    // on utilise useEffect pour lancer la requête au chargement du composant
    useEffect(() => {
        // on exécute notre action asynchrone avec le store en paramètre
        fetchOrUpdateSurvey(store);
    }, [store]);

    const survey = useSelector(selectSurvey);

    const surveyData = survey.data?.surveyData;   
    const isLoading = survey.status === 'void' || survey.status === 'pending';
    

    const theme = useSelector(selectTheme);

    if(survey.status === 'rejected') {
        return <ContentError theme={theme}>Oups il ya un problème</ContentError>
    }
    
    function saveReply(answers){
        
        saveAnswers({ [questionNumber]: answers })
    }
    
    return(

        <ContainerQuestion>

            <TittleQuestion theme={theme}>Question { questionNumber }</TittleQuestion>
            
                {isLoading ?
                
                    (<Loader />)
                    :
                    (<ContentQuestion theme={theme}>{surveyData && surveyData[questionNumber]} </ContentQuestion>)

                }

            <ContainerReply>
            
                <ReplyBox
                    onClick={() => saveReply(true)}
                    isSelected={answers[questionNumber] === true}
                    theme={theme}
                >
                    Oui
                </ReplyBox>

                <ReplyBox
                    onClick={() => saveReply(false)}
                    isSelected={answers[questionNumber] === false}
                    theme={theme}
                >
                    Non
                </ReplyBox>
      
            </ContainerReply>

            <ContainerArrow theme={theme}>

                <Link to={`/survey/${questionPrevious}`}>Précédent</Link>
                
                {surveyData && surveyData[question + 1] ? 
                    (<Link to={`/survey/${questionNext}`}>Suivant</Link>)
                    :
                    (<Link to="/results">Resultats</Link>)
                }

            </ContainerArrow>   

        </ContainerQuestion>
    )
}

export default Survey;