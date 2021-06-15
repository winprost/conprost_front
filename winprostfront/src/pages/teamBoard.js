import React, { useState } from 'react';
import profile1 from '../images/profile.jpg';
import logo from '../images/logo.png';
import './teamBoard.scss';
import { Profiler } from 'react';





const TeamBoard = () => {
    let [downmenu,CHdownmenu] = useState(false); 

return (




<div className='teamBoard'>

    <h2> 팀 게시판 입니다.</h2>
    <div className="notice">

    </div>
    <div className="teamMemberList">
       <ul>
           <li>
               <div className="user-photo">
                <img src={profile1}  alt="user-profile-photo" />
               </div>   
               <h4 className="user-name">유승현</h4>
               <p className="user-position">Front-end</p>
           </li>
       </ul>
    </div>
    <div className="rating">

    </div>
</div>



)
}

function Dropdown(){
    return (
        <dropdown className="dropdown-content">

        </dropdown>
    )
}

export default TeamBoard;
