import React, { useState } from 'react';
import menu from '../images/menu.png';
import logo from '../images/logo.png';
import './contestDetail.scss';




const ContestDetail = () => {
    let [downmenu,CHdownmenu] = useState(false); 

return (




<header classNameName='contestDetail'>
    <div>
        <div className="row top">
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
            <div className="col-sm-1">
                <a href="/#">About</a>
            </div>
            <div className="col-sm-1">
                <a href="/#">Login</a>
            </div>
            <div className="col-sm-1">
                <a href="/#">Mypage</a>
            </div>
        </div>

    </div>
    <hr/>


    </div>
</header>
)
}

function Dropdown(){
    return (
        <dropdown className="dropdown-content">
           

        </dropdown>
    )
}

export default ContestDetail;
