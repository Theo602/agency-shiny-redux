import { useParams } from "react-router-dom";
import { Loader } from "../../utils/style/Loader";
import { FetchError, ContainerProfile, FigureProfile, ImgProfile, DetailProfile,
         ContainerTitle, TitleProfile, LocationProfile, JobTitle, ContainerSkills,
         SkillProfile, Availability, PriceProfile } from './ProfileStyle';
import { useSelector } from "react-redux";
import { selectTheme } from "../../utils/selectors";
import { useQuery } from "react-query";


function Profile(){

    const { id: freelanceId } = useParams();
    
    const theme = useSelector(selectTheme);
       
    const { data, isLoading, error } = useQuery(['profile', freelanceId], async () => {
        const response = await fetch(`http://localhost:8000/freelance?id=${freelanceId}`);
        const data = await response.json();
        return data;
    })

    const profileData = data?.freelanceData ?? {}
    const { picture, name, location, tjm, job, skills, available, id } = profileData;
     
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
                            <ImgProfile src={picture}  alt={name}/> 
                        </FigureProfile>

                        <DetailProfile>

                            <ContainerTitle>
                                <TitleProfile theme={theme}>{name}</TitleProfile>
                                <LocationProfile theme={theme}>{location}</LocationProfile>
                            </ContainerTitle>

                            <JobTitle theme={theme}>{job}</JobTitle>

                            <ContainerSkills>
                                {skills && skills.map((skill) => (
                                    <SkillProfile key={`skill-${skill}-${id}`} theme={theme}>
                                        {skill}
                                    </SkillProfile>
                                ))}
                            </ContainerSkills>

                            <Availability theme={theme} available={available}>
                                    {available ? 'Disponible maintenant' : 'Indisponible'}
                            </Availability>

                            <PriceProfile theme={theme}>{tjm} € / jour</PriceProfile>

                        </DetailProfile>

                    </>

                )

            }

        </ContainerProfile>    

    )

}

export default Profile;