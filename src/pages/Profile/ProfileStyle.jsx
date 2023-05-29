import colors from '../../utils/style/color';
import styled from 'styled-components';


export const ContainerProfile = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4%;
    min-height: calc(100vh - 200px);
    padding: 4%;
    background-color: ${({ theme }) => (theme === "light" ? colors.backgroundLight : colors.backgroundDark)};
    border-radius: 30px;
`;

export const FigureProfile = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ImgProfile = styled.img`
    border-radius: 50%;
    margin: 20px auto;
    height: 150px;
    width: 150px;
`;

export const DetailProfile = styled.div`
    margin-left: 3%;
`;

export const ContainerTitle = styled.div`
    display: flex;
    align-items: center;
`;

export const TitleProfile = styled.h2`
    color: ${({ theme }) => (theme === "light" ? colors.textTitle : colors.colorWhite)};
    font-size: 30px;
    font-weight: 800;
    margin: 0;
`;

export const LocationProfile = styled.p`
    color: ${({ theme }) => (theme === "light" ? colors.secondary : colors.colorWhite)};
    font-size: 20px;
    margin: 3px 0 0 50px;
    font-weight: 600;
`;


export const JobTitle = styled.h3`
    color: ${({ theme }) => (theme === "light" ? colors.textTitle : colors.colorWhite)};
    font-size: 25px;
    font-weight: 800;
    margin: 0;
    padding-top: 20px;
`;

export const ContainerSkills = styled.div`
    display: flex;
`;

export const SkillProfile = styled.p`
    color: ${({ theme }) => (theme === "light" ? colors.textTitle : colors.colorWhite)};
    margin-right: 10px;
    border: 2px solid ${({ theme }) => (theme === "light" ? colors.textTitle : colors.colorWhite)};;
    padding: 5px;
    border-radius: 5px;
`;

export const Availability = styled.p`
    &:before {
      position: absolute;
      left: 0;
      top: 4px;
      height: 10px;
      width: 10px;
      border-radius: 5px;
      background-color: ${({ available }) => (available ? 'green' : 'red')};
      content: '';
}
    color: ${({ theme }) => (theme === "light" ? colors.textTitle : colors.colorWhite)};
    padding-left: 20px;
    position: relative;
`;

export const PriceProfile = styled.p`
    color: ${({ theme }) => (theme === "light" ? colors.textTitle : colors.colorWhite)};
    font-size: 20px;
    font-weight: bold;
`;

export const FetchError = styled.p`
    color: ${({ theme }) => (theme === "light" ? colors.primary : colors.colorWhite)};
    font-size: 25px;
    text-align: center;
    padding: 4%;
    min-height: calc(100vh - 200px);
`;