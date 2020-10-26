import React from 'react';
import './App.scss';

//react materialize
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';

//components
import Aux from './hoc/Auxilary/Auxilary';
import Layout from '../src/components/Layout/Layout';

const app = () => {
  return (
    <Aux>
      <Layout/>
    </Aux>
  );
}

export default app;
