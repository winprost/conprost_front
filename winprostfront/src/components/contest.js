import React, { useState } from 'react';
import bookmark from '../images/bookmark.png';
import poster from '../images/poster.jpeg';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

import './contest.scss';





const Contest = () => {
    

    return (

<div className="contestPage">

    <div className="contestPageList">
        
        <h2 className="contestPageTitle">공모전</h2>

        <div className="contestPageList">
            <div className="contestPageCell">

                <div className="topContest">
                    <div className="boxTitle">고양고양이 그리기 공모전</div>
                    <img  className="bookmark" src={bookmark} />
                </div>
                <div className="bottom bottomContest">
                    <span className="duedate"> 기한: ~7월 30일</span>
                    <div className="bottomRight">
                        <span className="id"> 승발자</span>
                        <span className="uploadDate"> 15시간 전</span>
                    </div>
                </div>
            </div>
            
            <div className="contestPageCell">

                <div className="topContest">
                    <div className="boxTitle">고양고양이 그리기 공모전</div>
                    <img  className="bookmark" src={bookmark} />
                </div>
                <div className="bottom bottomContest">
                    <span className="duedate"> 기한: ~7월 30일</span>
                    <div className="bottomRight">
                        <span className="id"> 승발자</span>
                        <span className="uploadDate"> 15시간 전</span>
                    </div>
                </div>
            </div>

            <div className="contestPageCell">

                <div className="topContest">
                    <div className="boxTitle">고양고양이 그리기 공모전</div>
                    <img  className="bookmark" src={bookmark} />
                </div>
                <div className="bottom bottomContest">
                    <span className="duedate"> 기한: ~7월 30일</span>
                    <div className="bottomRight">
                        <span className="id"> 승발자</span>
                        <span className="uploadDate"> 15시간 전</span>
                    </div>
                </div>
            </div>

        </div>
            
    </div>
</div>
)
}



export default Contest;
