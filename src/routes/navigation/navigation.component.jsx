import { Fragment } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { selectCurrentUser, selectAdminUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { setAdminUser } from '../../store/user/user.action';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  Title,
  ListMenu,
} from './navigation.styles';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const adminUser = useSelector(selectAdminUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOutHandler = () => {
    signOutUser();
    dispatch(setAdminUser(false));
    navigate('/');
  }
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
          <Title>sweat hu$tle</Title>
        </LogoContainer>
        
        <NavLinks>
            <ListMenu>
              <ul >
                <li><NavLink to='/shop'>SHOP</NavLink></li>
                {currentUser ? (
                  <li><NavLink as='span'>ACOUNT</NavLink>
                    <ul>
                      {adminUser ? (<li><NavLink to='/admin'>ADMIN</NavLink></li>): (<span />)}
                      {adminUser ? (<span />):(<li><NavLink to='/orders'>ORDERS</NavLink></li>)}
                      <li><NavLink as='span' onClick={signOutHandler}>SIGN OUT</NavLink></li>
                    </ul>
                  </li>
                ) : (
                  <li><NavLink to='/auth'>SIGN IN</NavLink></li>
                )}
              </ul>
            </ListMenu>
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;