import React from 'react';
import './NavBar.scss';

//components
import Aux from '../../hoc/Auxilary/Auxilary';

//materialize
import { Navbar, Icon, NavItem } from 'react-materialize';

//image
import logoCake from '../../assets/images/cake.png';

//router
import {NavLink} from 'react-router-dom';

const navbar = () => {
  return (
    <Aux>
        <Navbar
          alignLinks="right"
          brand={<a className="brand-logo" href="/"><img style={{width:'15%', height:'auto'}} src={logoCake} alt={'logoCake'}/></a>}
          centerChildren
          id="mobile-nav"
          menuIcon={<Icon>menu</Icon>}
          style={{backgroundColor:'#430505'}}
          options={{
            draggable: true,
            edge: 'left',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
          }}
        >
          <NavLink to="/yourCake">
            Your cake
          </NavLink>
          <NavLink to='/login'>
            Login
          </NavLink>
        </Navbar>
    </Aux>
  );
}

export default navbar;