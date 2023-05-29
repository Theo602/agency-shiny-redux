import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/color';
import devices from '../../utils/responsive/devices';

export const ContainerFreelance = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4%;
    min-height: calc(100vh - 200px);
`;

export const TitleFreelance = styled.h2`
    font-size: 30px;
    text-align: center;
    color: ${({ theme }) => (theme === "light" ? colors.textTitle : colors.colorWhite)};
`;

export const TextFreelance = styled.p`
    font-size: 18px;
    text-align: center;
    color: ${({ theme }) => (theme === "light" ? colors.textSousTitle : colors.colorWhite)};
`;

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    padding: 2% 0;
    width: 50%;

    @media screen and ${devices.tabletL} {
        width: 80%;
    }

    @media screen and ${devices.tabletL} {
        grid-template-columns: repeat(1, 1fr);
        width: 50%;
    }

    @media screen and ${devices.mobileL} {
        width: 70%;
    }

    @media screen and ${devices.mobileM} {
        width: 80%;
    }

    @media screen and ${devices.mobileS} {
        width: 100%;
    }

`;

export const ContentError = styled.p`
    color: ${({ theme }) => (theme === "light" ? colors.primary : colors.colorWhite)};
    font-size: 25px;
    text-align: center;
    padding: 4%;
    min-height: calc(100vh - 200px);
`;

export const LinkCart = styled(Link)`
    text-decoration: none;
`;