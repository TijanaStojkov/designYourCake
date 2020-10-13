import React from 'react';

//components
import Aux from '../../hoc/Auxilary/Auxilary';
import NavBar from '../NavBar/NavBar';
import Form from '../Form/From';
import Cake from '../Cake/Cake';
import Footer from '../Footer/Footer'

const layout = () => {
  return (
    <Aux>
      <NavBar/>
      <div className="row" style={{backgroundColor: '#EEEEEE'}}>
          <div className="col l7 m12">
            <Form/>
          </div>
          <div className="col l5 m12" >
            <Cake />
          </div>
        </div>
      <Footer/>
    </Aux>
  );
}

export default layout;
