import React from 'react';
import bookmark from '../images/bookmark.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import Ripples from 'react-ripples';
import './projectDetail.scss';
import user from '../images/profile.jpg';

const projectDetail = () => {

    return (
<div>
    <div className="detail-project">
        <div className='detail-projectDetail'>
            <h2 className="detail-projectName">프로젝트 소개</h2>
            <div className="detail-conData">
                <p className="dataSub"> <span className="dataTitle">모집인원 </span> 2명 </p>
                <p className="dataSub"> <span className="dataTitle">모집분야 </span>  프론트엔드, 서버 </p>
                <p className="dataSub"> <span className="dataTitle"> </span>  </p>
                <p className="dataSub"> <span className="dataTitle">카테고리 </span>IT </p>
            </div>
            <h3>제목</h3>
            <div className="task-header-box">
                <div className="item">닉네임: </div>
                <div className="item">생성날짜: </div>
            </div>
            <div className="detail-projectPoster">
                <div className="content">
                </div>
            </div>
        </div>
    </div>

    <div className="team-leader-container">
        <div className="team-lader-box">
            <div className="leader-box">
                
                <div className="leader-title">
                    <div><FontAwesomeIcon icon={faCrown} className="crown"/></div>
                    <span>팀장</span>
                </div>
                <div className="leader-img">
                    <img src={user}></img>
                </div>
                <div className="leader-spec">
                    <div className="leader-spec-box">
                        <div className="leader-item">닉네임: 공컴공컴공컴공</div>
                        <div className="leader-item">스킬: 프론트엔드,퍼블리싱</div>
                        <div className="leader-item">기여도: 4/5</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="teamRecruit">
        <div className="team-recruitBox">
            <div className="team-recruit">
                <h3 className="boxTitle">팀원 구합니다</h3>
                <p className="boxContent">진짜 잘해볼 사람 구해요 우리팀 짱짱맨 들어올테면 들어와봐라</p>
                <div className="bottom">
                    <span className="members"> 모집인원  1/2 </span>
                    <div><img  className="bookmark" src={bookmark} /></div>
                    <div className="left"></div>
                    <Ripples className="ripple">
                        <button className="join-team-btn">팀 신청</button>
                    </Ripples>
                </div>
            </div>
        </div>
    </div>

</div>

)
}



export default projectDetail;
