import React, { useState } from 'react';
import styled from 'styled-components';
import menu from '../images/menu.png';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import './Header.scss';


let mn = styled.div`
    margin-left: 10px;
    
`;


const Header = () => {
    let [downmenu,CHdownmenu] = useState(false); 

return (

<header classNameName='header'>
    <div>
        <div className="row top"></div>
        <div className="col-sm-9"></div>
        <div className="col-sm-1">회원가입</div>
        <div className="col-sm-1">문제신고</div>
        <div className="col-sm-1">알림</div>
    </div>
    <hr/>
    <div className="row" >
        <div className="nav">
            <div className="col-sm-1" className="dropdown" onClick={ ()=> {CHdownmenu(!downmenu)}}>
                <mn><img src={menu} alt="dropdown-menu" width="30px" className="dropdowndtn"></img></mn>
                {
                    downmenu === true
                    ?<Dropdown></Dropdown>
                    : null
                }
            </div>

            <div className="col-sm-3">
                <a href="/#" className="logo"> 
                    <img src={logo} alt="logo" width="150px"/> 
                </a>

            </div>
            <div className="col-sm-5">
                <form method="GET" action="/project" name="projectIdx" className="search__container">
                    <input type="text" placeholder="search" className="search__input"  />
                </form>
            </div>
            <div className="col-1">
                <Link to="/#">About</Link>
            </div>
            <div className="col-1">
                <Link to="/login">Login</Link>
                <Link to="/team">Team</Link>
            </div>
            <div className="col-1">
                <Link to="/mypage">Mypage</Link>
            </div>
            <div className="col-1">
                <Link to="/userlist">UserList</Link>
                <Link to="/#">Login</Link>
            </div>
        </div>
    </div>
    <hr/>
</header>
)
}

function Dropdown(){
    return (
        <dropdown className="dropdown-content">
            <h5>
            <a href="#"> <strong>유승현</strong>님 안녕하세요! </a>
            </h5>
            <ul>
            <li>
                contents
            </li>
            <li>
                <a href="#">공모전</a>
            </li>
            <li>
                <a href="#">프로젝트</a>
            </li>
            </ul>
            <ul>
            <li>
                Users
            </li>
            <li>
                <a href="#">Front-end</a>
            </li>
            <li>
                <a href="#">Server</a>
            </li>
            <li>
                <a href="#">Android</a>
            </li>
            <li>
                <a href="#">Ios</a>
            </li>
            </ul>

        </dropdown>
    )
}

export default Header
