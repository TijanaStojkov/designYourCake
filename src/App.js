import React from 'react';
import './App.scss';

//react materialize
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';

//components
import Layout from '../src/components/Layout/Layout';

//routing
import { BrowserRouter } from 'react-router-dom';

const app = () => {
  return (
    <BrowserRouter basename='/designYourCake/'>
      <Layout/>
    </BrowserRouter >
  );
}

export default app;
