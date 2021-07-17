import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Layout from '../components/Layout';

import Main from '../components/Main';
import Regist from '../components/Regist';
import MyPage from '../components/MyPage';
import Login from '../components/login';
import userList from '../components/userList';

const Pages = () =>{
  return (
    <Router>
      <Layout>
      <Route exact path="/" component={Main} />
      <Route exact path="/regist" component={Regist} />
      <Route exact path="/mypage" component={MyPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/userlist" component={userList} />
      </Layout>
    </Router>
  );
};

export default Pages;
