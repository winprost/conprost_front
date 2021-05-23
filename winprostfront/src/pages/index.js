import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Layout from '../components/Layout';

import Main from '../components/Main';
import Regist from '../components/Regist';

const Pages = () =>{
  return (
    <Router>
      <Layout>
      <Route exact path="/" component={Main} />
      <Route exact path="/regist" component={Regist} />
      </Layout>
    </Router>
  );
};

export default Pages;
