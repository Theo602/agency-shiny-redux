import { useDispatch, useSelector } from 'react-redux';
import { StyledBurger } from './BurgerStyle';
import { selectNavBar, selectTheme } from '../../utils/selectors';
import { toogleNavBar } from '../../features/navBar';

const Burger = () => {

  const theme = useSelector(selectTheme);
  const navBar = useSelector(selectNavBar);
  const dispatch = useDispatch();

  return (
    
    <StyledBurger theme={theme} navBar={navBar} onClick={() => dispatch(toogleNavBar())}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger;