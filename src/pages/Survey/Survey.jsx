import { useParams, Link } from "react-router-dom";
import { Loader } from "../../utils/style/Loader";
import { ContainerQuestion, TittleQuestion, ContentQuestion, 
         ContainerArrow, ContentError, ContainerReply, ReplyBox } from './SurveyStyle'
import { useDispatch, useSelector } from "react-redux";
import { selectAnswers, selectTheme } from "../../utils/selectors";
import { setAnswer } from "../../features/answers/answers";
import { useQuery } from "react-query";


function Survey(){

    const { questionNumber } = useParams();
    const question = parseInt(questionNumber);
    const questionPrevious = question === 1 ? 1 : question - 1;
    const questionNext = question + 1;
  
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);
    const answers = useSelector(selectAnswers);

    const { data, isLoading, error } = useQuery('survey', async () => {
        const response = await fetch('http://localhost:8000/survey');
        const data = await response.json();
        return data;
    })
    
    const surveyData = data?.surveyData

    if(error) {
        return <ContentError theme={theme}>Oups il ya un problème</ContentError>
    }
    
    function saveReply(answer){
        dispatch(setAnswer({ questionNumber, answer }));
    }

    return(

        <ContainerQuestion>

            <TittleQuestion theme={theme}>Question { questionNumber }</TittleQuestion>
            
                {isLoading ?
                
                    (<Loader />)
                    :
                    (<ContentQuestion theme={theme}>{ surveyData && surveyData[questionNumber]} </ContentQuestion>)

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
                
                { surveyData && surveyData[question + 1] ? 
                    (<Link to={`/survey/${questionNext}`}>Suivant</Link>)
                    :
                    (<Link to="/results">Resultats</Link>)
                }

            </ContainerArrow>   

        </ContainerQuestion>
    )
}

export default Survey;