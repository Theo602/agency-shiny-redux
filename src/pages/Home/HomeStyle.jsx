import styled from 'styled-components';
import colors from '../../utils/style/color';
import devices from '../../utils/responsive/devices';
import { PageLink } from '../../utils/style/BtnLink';


export const ContainerHome = styled.section`
    margin: 4%;
    background: ${({ theme }) => (theme === "light" ? colors.backgroundLight : colors.backgroundDark)};
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 4%;
    min-height: calc(100vh - 200px);

    @media screen and ${devices.tabletL} {
        flex-direction: column;
    }

`;

export const ContainerLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;

    @media screen and ${devices.tabletL} {
        align-items: center;
    }

    ${PageLink}{
        padding: 10px 50px;
        width: 20%;
        margin-left: 20px;

        @media screen and ${devices.tabletM} {
            align-items: center;
            width: 25%;     
        }

        @media screen and ${devices.mobileL} {
            width: 50%;
        }

        @media screen and ${devices.mobileS} {
            font-size: 18px;
            padding: 10px 30px;
        }

    }
`;

export const TitleHome = styled.h1`
    color: ${({ theme }) => (theme === "light" ? colors.textTitle : colors.colorWhite)};
    font-size: 40px;
    line-height: 60px;
    padding: 20px;
    width: 79%;

    @media screen and ${devices.tabletL} {
        font-size: 30px;
        line-height: 40px;
        text-align: center; 
        width: 90%;     
    }

    @media screen and ${devices.tabletM} {
         
        width: 100%; 
    }

    @media screen and ${devices.mobileL} {
        font-size: 25px;
    }

    @media screen and ${devices.mobileS} {
        font-size: 20px;
    }


`;

export const FigureRight = styled.figure`
    flex: 1;
    display: flex;
    flex-direction: column;

    @media screen and ${devices.tabletL} {
        align-items: center;
    }
`;

export const ImageHome = styled.img`
    width: 80%;

    @media screen and ${devices.tabletL} {
        padding: 20px 0;   
        width: 70%;  
    }
 
    @media screen and ${devices.mobileL} {
        width: 100%;
    }

`;