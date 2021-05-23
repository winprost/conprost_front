import React from 'react';
import Header from './Header';
import Footer from './Footer';

// 공통 컴포넌트 적용(Header, Footer)
const Layout = ({children}) =>{
  return (
    <React.Fragment>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </React.Fragment>
  );
};

export default Layout;
