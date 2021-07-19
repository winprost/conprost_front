import React from 'react'
import banner1 from '../images/banner1.png';
import banner2 from '../images/banner2.png';
import banner3 from '../images/banner3.png';
import bookmark from '../images/bookmark.png';
import { Link } from 'react-router-dom';
import './main.scss';

const Main = ()=>{

  return (
    <div className="mainPage">
      <div className="slide-box">
          <div className="slide-container" >
            <div className="item">
              <img src={banner1} />
            </div>
            <div className="item">
              <img src={banner2} />
            </div>
            <div className="item">
              <img src={banner3} />
            </div>
          </div>
      </div>
      <div className="pageList">
        <div className="contestList">
          <div className="header">
            <h2 className="contestTitle">공모전</h2>
            <Link to="/contest" className="more">더보기</Link>
          </div>
          <div className="contestList">
              
              <div className="contestCell">
                <div className="boxTitle">고양고양이 그리기 공모전</div>
                <div className="bottom contest">
                    <span className="duedate"> 기한: ~7월 30일</span>
                    <span className="id"> 승발자</span>
                    <span className="uploadDate"> 15시간 전</span>
                    <img  className="bookmark" src={bookmark} />
                </div>
              </div>

              <div className="contestCell">
                <div className="boxTitle">고양고양이 그리기 공모전</div>
                <div className="bottom contest">
                    <span className="duedate"> 기한: ~7월 30일</span>
                    <span className="id"> 승발자</span>
                    <span className="uploadDate"> 15시간 전</span>
                    <img  className="bookmark" src={bookmark} />
                </div>
              </div>

              <div className="contestCell">
                <div className="boxTitle">고양고양이 그리기 공모전</div>
                <div className="bottom contest">
                    <span className="duedate"> 기한: ~7월 30일</span>
                    <span className="id"> 승발자</span>
                    <span className="uploadDate"> 15시간 전</span>
                    <img  className="bookmark" src={bookmark} />
                </div>
              </div>
              
          </div>

        </div>
        <div className="projectList">
          
          <div className="header">
            <h2 className="projectTitle"> 프로젝트 </h2>
            <Link to="/projectList" className="more">더보기</Link> 
          </div>
          <div className="projectList">
              
              <div to="/projectDetail" className="projectCell">
                <div className="boxTitle">고양고양이 그리기 공모전</div>
                <p className="boxContent">진짜 잘해볼 사람 구해요 우리팀 짱짱맨 들어올테면 들어와봐라</p>
                <div className="bottom contest">
                      <span className="members"> 모집인원  1/2 </span>
                    <span className="id"> 승발자</span>
                    <span className="uploadDate"> 15시간 전</span>
                    <img  className="bookmark" src={bookmark} />
                </div>
              </div>

              <div className="projectCell">
                <div className="boxTitle">고양고양이 그리기 공모전</div>
                <p className="boxContent">진짜 잘해볼 사람 구해요 우리팀 짱짱맨 들어올테면 들어와봐라</p>
                <div className="bottom contest">
                      <span className="members"> 모집인원  1/2 </span>
                    <span className="id"> 승발자</span>
                    <span className="uploadDate"> 15시간 전</span>
                    <img  className="bookmark" src={bookmark} />
                </div>
              </div>

              <div className="projectCell">
                <div className="boxTitle">고양고양이 그리기 공모전</div>
                <p className="boxContent">진짜 잘해볼 사람 구해요 우리팀 짱짱맨 들어올테면 들어와봐라</p>
                <div className="bottom contest">
                      <span className="members"> 모집인원  1/2 </span>
                    <span className="id"> 승발자</span>
                    <span className="uploadDate"> 15시간 전</span>
                    <img  className="bookmark" src={bookmark} />
                </div>
              </div>
              
              
          </div>

        </div>

        </div>
    </div>
  )
}

export default Main

