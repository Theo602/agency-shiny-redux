import PropTypes from 'prop-types';
import DefaultPicture from '../../assets/img/profile.png'
import { CardWrapper, CardLabel, CardImage, CardTitle } from './CartStyle';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../utils/selectors';


function Card({ label, title, picture }) {
    
    const theme = useSelector(selectTheme);
     
    return (
        <CardWrapper theme={theme} >
            <CardLabel theme={theme}>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <CardTitle data-testid="title-element" theme={theme}>{title}</CardTitle>
        </CardWrapper>
    )
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
};

Card.defaultProps = {
    label: '',
    title: '',
    picture: DefaultPicture
}

export default Card;