import React, { useState } from 'react';
import profile1 from '../images/profile.jpg';
import bookmark from '../images/bookmark.png';
import comment from '../images/comment.png';
import './teamBoard.scss';
import { Profiler } from 'react';





const TeamBoard = () => {
    let [downmenu,CHdownmenu] = useState(false); 

return (




<div className='teamBoard'>

    <h2> 팀 게시판 입니다.</h2>


    <div className="data">

        <div className="noticeList">
            <div className="notice">
                <a className="noticeTitle">승주야 보고있니?</a>
                <a className="noticeContent">퍼블은 이렇게 하는거야 보고배워라</a>
                <p className="noticeIcons">
                    <div className="noticeAlignLeft">
                        <img src={comment}  alt="comment-count" />
                        <span className="commentCount"> 3</span>
                    </div>
                    <div className="noticeAlignRight">
                        <span className="timeBefore">1시간 전 </span>
                        <img src={bookmark}  alt="bookmark" />
                    </div>
                </p>
            </div>

            <div className="notice">
                <a className="noticeTitle">승주야 보고있니?</a>
                <a className="noticeContent">퍼블은 이렇게 하는거야 보고배워라</a>
                <p className="noticeIcons">
                    <div className="noticeAlignLeft">
                        <img src={comment}  alt="comment-count" />
                        <span className="commentCount"> 3</span>
                    </div>
                    <div className="noticeAlignRight">
                        <span className="timeBefore">1시간 전 </span>
                        <img src={bookmark}  alt="bookmark" />
                    </div>
                </p>
            </div>

            <div className="notice">
                <a className="noticeTitle">승주야 보고있니?</a>
                <a className="noticeContent">퍼블은 이렇게 하는거야 보고배워라</a>
                <p className="noticeIcons">
                    <div className="noticeAlignLeft">
                        <img src={comment}  alt="comment-count" />
                        <span className="commentCount"> 3</span>
                    </div>
                    <div className="noticeAlignRight">
                        <span className="timeBefore">1시간 전 </span>
                        <img src={bookmark}  alt="bookmark" />
                    </div>
                </p>
            </div>
        </div>


        <article>
            <h4 className="teamTitle">팀원 </h4>
            <div className="teamMemberList">
                <div className="teamMember">
                    <div className="user-photo">
                    <img src={profile1}  alt="user-profile-photo" />
                    </div>   
                    <div className="user-data">
                        <h4 className="user-name">유승현</h4>
                        <p className="user-position">Front-end</p>
                    </div>
                </div>

                <div className="teamMember">
                    <div className="user-photo">
                    <img src={profile1}  alt="user-profile-photo" />
                    </div>   
                    <div className="user-data">
                        <h4 className="user-name">유승현</h4>
                        <p className="user-position">Front-end</p>
                    </div>
                </div>

                <div className="teamMember">
                    <div className="user-photo">
                    <img src={profile1}  alt="user-profile-photo" />
                    </div>   
                    <div className="user-data">
                        <h4 className="user-name">유승현</h4>
                        <p className="user-position">Front-end</p>
                    </div>
                </div>
            </div>
        </article>
            

    
          
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
