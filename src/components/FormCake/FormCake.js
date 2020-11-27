import React from 'react';
import Form from '../Form/From';
import Cake from '../Cake/Cake';

const formCake = () => {
    return (
        <div className="row" style={{backgroundColor: '#EEEEEE'}}>
        <div className="col l7 m12">
          <Form />
        </div>
        <div className="col l5 m12" >
          <Cake />
        </div>
      </div>
    )
}
export default formCake;