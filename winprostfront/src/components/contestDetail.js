import React, { useState } from 'react';
import bookmark from '../images/bookmark.png';
import poster from '../images/poster.jpeg';
import logo from '../images/logo.png';
import './contestDetail.scss';




const ContestDetail = () => {

return (

<div className="contest">
    <div className='contestDetail'>
        <span className="dDay"> D-69</span>
        <h2 className="contestName">고양고양이 캐릭터 리뉴얼 공모전</h2>
    
        <div className="contestContent">
            <div className="contestPoster">
                <img src={poster}/>
            </div>
            <div className="contestData">
                <h4 className="host">삼성리서치</h4>
                <div className="data">
                    <p className="dataSub"> <span className="dataTitle">참여대상 </span> 대학생 </p>
                    <p className="dataSub"> <span className="dataTitle">기관형태 </span>  대기업 </p>
                    <p className="dataSub"> <span className="dataTitle">시상규모 </span> 1000만원 </p>
                    <p className="dataSub"> <span className="dataTitle">우대역량 </span> 모두 지원가능 </p>
                    <p className="dataSub"> <span className="dataTitle">홈페이지 </span> <a/> </p>
                    <p className="dataSub"> <span className="dataTitle">활동혜택 </span>  </p>
                    <p className="dataSub"> <span className="dataTitle">카테고리 </span>IT </p>
                </div>
                <button>
                <a href="#"> 홈페이지 지원 </a>
                </button>
                <button>
                    <a href="#"> 팀원모집 글쓰기 </a>
                </button>
                <p className="tags">
                    <span className="bookmark"> </span>
                    <span className="share"> </span>
                </p>
                
            </div>
            
        </div>
    </div>
    <div>
        <div className="teamRecruit">

            <h2 className="recruitTitle">팀원 모집 </h2>
            <div className="recruitBox">
                <h3 className="boxTitle">승주 구합니다</h3>
                <p className="boxContent">진짜 잘해볼 사람 구해요 우리팀 짱짱맨 들어올테면 들어와봐라</p>
                <span className="members"> 1/2 </span>
                <img  src={bookmark} />
            </div>

        </div>
    </div>



</div>
)
}



export default ContestDetail;
