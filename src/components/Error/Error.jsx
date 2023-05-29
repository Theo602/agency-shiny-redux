import imageError from '../../assets/img/404.svg';
import {ContainerFreelance, FirstTitle, FigureError, ImgNotFound, SecondeTitle } from './ErrorStyle';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../utils/selectors';

function Error(){

    const theme = useSelector(selectTheme);

    return(

        <ContainerFreelance theme={theme}>

            <FirstTitle theme={theme}>Oups...</FirstTitle>

            <FigureError>
                <ImgNotFound src={imageError} alt="Page not found" />
            </FigureError>
            
            <SecondeTitle theme={theme}>Il semblerait que la page que vous cherchez n’existe pas</SecondeTitle>

        </ContainerFreelance>
    )
}

export default Error;