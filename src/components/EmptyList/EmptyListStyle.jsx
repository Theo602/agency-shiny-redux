import styled from 'styled-components';
import colors from '../../utils/style/color';
import devices from '../../utils/responsive/devices';

export const ContainerError = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4%;
    margin: 4%;
    background: ${({ theme }) => (theme === "light" ? colors.backgroundLight : colors.backgroundDark)};
`;

export const FirstTitle = styled.h2`
    color: ${({ theme }) => (theme === "light" ? colors.textTitle : colors.colorWhite)};
    font-size: 25px;
    text-align: center; 
`;

export const SecondeTitle = styled.h3`
    color: ${({ theme }) => (theme === "light" ? colors.textTitle : colors.colorWhite)};
    font-size: 20px;
    text-align: center; 
`;

export const FigureEmpty = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2% 0;
`;

export const ImgEmpty = styled.img`
    width: 60%;

    @media screen and ${devices.mobileL} {
        width: 80%;   
    }

    @media screen and ${devices.mobileL} {
        width: 100%;   
    }

`;