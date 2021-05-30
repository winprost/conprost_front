import React from 'react'
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {

return (
<header classNameName='header'>
    <div>
        <div className="row top">
        <div className="col-9"></div>
        <div className="col-1">회원가입</div>
        <div className="col-1">문제신고</div>
        <div className="col-1">알림</div>
    </div>
    <hr/>
    <div className="row">
        <div className="nav">
            <div className="col-3">
                <Link to ="/" className="logo"> 
                    <img src={logo} alt="logo" width="100%"/> 
                </Link>
            </div>
            <div className="col-6">
                <form method="GET" action="/project" name="projectIdx">
                    <input type="text" placeholder="search" className="search" />
                </form>
            </div>
            <div className="col-1">
                <Link to="/#">About</Link>
            </div>
            <div className="col-1">
                <Link to="/#">Login</Link>
            </div>
            <div className="col-1">
                <Link to="/mypage">Mypage</Link>
            </div>
        </div>
    </div>
    <hr/>
    </div>
</header>
)
}
export default Header
