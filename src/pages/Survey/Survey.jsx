import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../../utils/hooks";
import { SurveyContext } from "../../utils/context";
import { Loader } from "../../utils/style/Loader";
import { ContainerQuestion, TittleQuestion, ContentQuestion, 
         ContainerArrow, ContentError, ContainerReply, ReplyBox } from './SurveyStyle'
import { useSelector } from "react-redux";
import { selectTheme } from "../../utils/selectors";

function Survey(){

    const { questionNumber } = useParams()
    const question = parseInt(questionNumber);
    const questionPrevious = question === 1 ? 1 : question - 1;
    const questionNext = question + 1;

    const { answers, saveAnswers } = useContext(SurveyContext);

    const { data, isLoading, error } = useFetch('http://localhost:8000/survey'); 
    const { surveyData } = data;

    const theme = useSelector(selectTheme);

    if(error) {
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