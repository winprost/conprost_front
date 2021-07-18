import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Layout from '../components/Layout';

import Main from '../components/Main';
import Regist from '../components/Regist';
import MyPage from '../components/MyPage';
import Login from '../components/login';
import userList from '../components/userList';
import TeamBoard from '../components/teamBoard';
import ContestDetail from '../components/contestDetail';
import Contest from '../components/contest';
import projectDetail from '../components/projectDetail'
import projectList from '../components/projectList'

const Pages = () =>{
  return (
    <Router>
      <Layout>
      <Route exact path="/" component={Main} />
      <Route exact path="/regist" component={Regist} />
      <Route exact path="/mypage" component={MyPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/team" component={TeamBoard} />
      <Route exact path="/contestDe" component={ContestDetail} />
      <Route exact path="/contest" component={Contest} />
      <Route exact path="/userlist" component={userList} />
      <Route exact path="/projectDetail" component={projectDetail} />
      <Route exact path="/projectList" component={projectList} />
      </Layout>
    </Router>
  );
};

export default Pages;
