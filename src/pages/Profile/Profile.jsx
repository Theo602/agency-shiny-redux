import { useParams } from "react-router-dom";
import { Loader } from "../../utils/style/Loader";
import { FetchError, ContainerProfile, FigureProfile, ImgProfile, DetailProfile,
         ContainerTitle, TitleProfile, LocationProfile, JobTitle, ContainerSkills,
         SkillProfile, Availability, PriceProfile } from './ProfileStyle';
import { useDispatch, useSelector } from "react-redux";
import { selectProfile, selectTheme } from "../../utils/selectors";
import { useEffect } from "react";
import { fetchOrUpdateProfile } from "../../features/profile/profile";


function Profile(){

    const dispatch = useDispatch();
    const { id: freelanceId } = useParams();
    const theme = useSelector(selectTheme);
       
    useEffect(() => {
        dispatch(fetchOrUpdateProfile(freelanceId));
    }, [freelanceId, dispatch]);
    
    const profile = useSelector(selectProfile(freelanceId))
    const freelanceData = profile.data?.freelanceData ?? {};   
    const { picture, name, location, tjm, job, skills, available, id } = freelanceData
    console.log('st2', profile.status)
    const isLoading = profile.status === 'void' || profile.status === 'pending';
 
    if(profile.status === 'rejected') {
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
                                {skills && freelanceData.skills.map((skill) => (
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