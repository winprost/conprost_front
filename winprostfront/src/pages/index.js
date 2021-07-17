import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Layout from '../components/Layout';

import Main from '../components/Main';
import Regist from '../components/Regist';
import MyPage from '../components/MyPage';
import TeamBoard from '../components/teamBoard';
import ContestDetail from '../components/contestDetail';
import Contest from '../components/contest';


const Pages = () =>{
  return (
    <Router>
      <Layout>
      <Route exact path="/" component={Main} />
      <Route exact path="/regist" component={Regist} />
      <Route exact path="/mypage" component={MyPage} />
      <Route exact path="/team" component={TeamBoard} />
      <Route exact path="/contestDe" component={ContestDetail} />
      <Route exact path="/contest" component={Contest} />
    
      </Layout>
    </Router>
  );
};

export default Pages;
