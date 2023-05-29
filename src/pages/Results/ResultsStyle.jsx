import styled from 'styled-components';
import colors from '../../utils/style/color';
import devices from '../../utils/responsive/devices';


export const ContainerResults = styled.section`
    margin: 4%;
    background: ${({ theme }) => (theme === "light" ? colors.backgroundLight : colors.backgroundDark)};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4%;
    min-height: calc(100vh - 200px);
`;

export const ContentResults = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const ContentInformation = styled.div`
    width: 60%;
    padding: 40px 0;

    @media screen and ${devices.tabletM} {
        width: 80%;
    }

    @media screen and ${devices.mobileL} {
        width: 90%;
    }
 
`;

export const ContentDescription = styled.div`
    margin: 30px 0;
`;

export const TitleResults = styled.h2`
    font-size: 30px;
    color: ${({ theme }) => (theme === "light" ? colors.textTitle : colors.colorWhite)};
    font-size: 30px;
    word-break: break-all;
    width: 47%;
    line-height: 50px;
    text-align: center;
    padding-bottom: 20px;
    display: flex;
    flex-wrap: wrap; 
    justify-content: center;
    word-break: unset;
    @media screen and ${devices.tabletL} {
        width: 88%;
    }

    @media screen and ${devices.tabletM} {
        width: 94%;
    }

`;

export const SubTitleResults = styled.span`
    color: ${({ theme }) => (theme === "light" ? colors.primary : colors.colorWhite)};
    padding-left: 10px;
`;

export const TittleInformation = styled.h3`
    font-size: 25px;
    color: ${({ theme }) => (theme === "light" ? colors.primary : colors.colorWhite)};
    margin: 10px 0px;
`;

export const TextInformation = styled.p`
    color: ${({ theme }) => (theme === "light" ? colors.colorBlack : colors.colorWhite)};
    font-size: 20px;
    margin: 0px;
    line-height: 25px;
`;

export const FetchError = styled.p`
    color: ${({ theme }) => (theme === "light" ? colors.primary : colors.colorWhite)};
    font-size: 25px;
    text-align: center;
    padding: 4%;
    min-height: calc(100vh - 200px);
`;