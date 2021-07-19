import React, { useState } from 'react';
import styled from 'styled-components';
import menu from '../images/menu.svg';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import './Header.scss';




const Header = () => {
    let [downmenu,CHdownmenu] = useState(false); 

return (

<header classNameName="header">

    <div className="headerNav">
        <Link to="/#" className="navCell">문제신고</Link>
        <Link to="/regist" className="navCell">회원가입</Link>
    </div>
    
    <div className="headerTop" >
        <div className="TopLogo">
            <div className="dropdown" onClick={ ()=> {CHdownmenu(!downmenu)}}>
                <img src={menu} alt="dropdown-menu" width="30px" className="dropdowndtn"></img>
                {
                    downmenu === true
                    ?<Dropdown></Dropdown>
                    : null
                }
            </div>
            <a href="/" className="logo"> 
                <img src={logo} alt="logo" width="150px"/> 
            </a>
        </div>
        
        <form method="GET" action="/project" name="projectIdx" className="search__container">
            <input type="text" placeholder="search" className="search__input"  />
        </form>
        
        <div className="topLink">
            <Link to="/team" className="linksItem">Team</Link>
            <Link to="/login" className="linksItem" >Login</Link>
            <Link to="/mypage" className="linksItem" >Mypage</Link>
        </div>
    </div>
    
</header>
)
}

function Dropdown(){
    return (
        <dropdown className="dropdown-content">
            <h5>
            <Link className="intro" to="/login"><strong>로그인</strong>을 하세요</Link>
            {/* 로그인 됐으면 <strong>유승현</strong>님 안녕하세요! </a> */}
            </h5>
            <ul>
                <li>
                    <Link to="/#">찾아보기</Link>
                </li>
                <li>
                    <Link to="/contest">공모전</Link>
                </li>
                <li>
                    <Link to="/projectList">프로젝트</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/userlist">사용자</Link>
                </li>
                <li>
                    <Link to="/userlist">Front-end</Link>
                </li>
                <li>
                    <Link to="/userlist">Server</Link>
                </li>
                <li>
                    <Link to="/userlist">Android</Link>
                </li>
                <li>
                    <Link to="/userlist">IOS</Link>
                </li>
            </ul>

        </dropdown>
    )
}

export default Header
