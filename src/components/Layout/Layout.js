import React from 'react';

//components
import Aux from '../../hoc/Auxilary/Auxilary';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import FormCake from '../FormCake/FormCake';
import Login from '../Auth/Login/Login';

//routing
import { Route } from 'react-router-dom';

const layout = () => {
  return (
    <Aux>
      <NavBar/>
      <Route exact path='/' component={FormCake}/>
      <Route path='/login' component={Login}/>
      <Footer/>
    </Aux>
  );
}

export default layout;
