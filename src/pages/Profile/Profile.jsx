import { useFetch } from "../../utils/hooks";
import { useParams } from "react-router-dom";
import { Loader } from "../../utils/style/Loader";
import { FetchError, ContainerProfile, FigureProfile, ImgProfile, DetailProfile,
         ContainerTitle, TitleProfile, LocationProfile, JobTitle, ContainerSkills,
         SkillProfile, Availability, PriceProfile } from './ProfileStyle';
import { useSelector } from "react-redux";
import { selectTheme } from "../../utils/selectors";


function Profile(){
  
    const { id } = useParams();
    const { data, isLoading, error } = useFetch(`http://localhost:8000/freelance?id=${id}`); 
    const { freelanceData } = data; 
    const theme = useSelector(selectTheme);
  

    if(error) {
        return <FetchError>Oups il ya un problème</FetchError>
    }

    return(

        <ContainerProfile theme={theme}>

            { isLoading ?

                (<Loader />)

                :

                (
                    <>

                        <FigureProfile>
                            <ImgProfile src={freelanceData.picture}  alt={freelanceData.name}/> 
                        </FigureProfile>

                        <DetailProfile>

                            <ContainerTitle>
                                <TitleProfile theme={theme}>{freelanceData.name}</TitleProfile>
                                <LocationProfile theme={theme}>{freelanceData.location}</LocationProfile>
                            </ContainerTitle>

                            <JobTitle theme={theme}>{freelanceData.job}</JobTitle>

                            <ContainerSkills>
                                {freelanceData.skills && freelanceData.skills.map((skill) => (
                                    <SkillProfile key={`skill-${skill}-${id}`} theme={theme}>
                                        {skill}
                                    </SkillProfile>
                                ))}
                            </ContainerSkills>

                            <Availability theme={theme} available={freelanceData.available}>
                                    {freelanceData.available ? 'Disponible maintenant' : 'Indisponible'}
                            </Availability>

                            <PriceProfile theme={theme}>{freelanceData.tjm} € / jour</PriceProfile>

                        </DetailProfile>

                    </>

                )

            }

        </ContainerProfile>    

    )

}

export default Profile;