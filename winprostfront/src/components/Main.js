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
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <div>
                      <div id="carousel-example-generic" className="carousel slide" >
                        <ol className="carousel-indicators">
                          <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                          <div className="item active">
                            <img src={banner1} width="100%" alt="banner1"/>
                            <div className="carousel-caption" color= "black">
                          </div>
                        </div>
                          <div className="item">
                            <img src={banner2} width="100%" alt="banner2"/>
                            <div className="carousel-caption" color= "black">
                            </div>
                          </div>
                          <div className="item">
                            <img src={banner3} width="100%" alt="banner3"/>
                            <div className="carousel-caption" color= "black">
                            </div>
                          </div>
                        </div>
                        <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        </a>               
                        <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        </a>
                      </div>
                  </div>
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
            <Link to="/#" className="more">더보기</Link> 
          </div>
          <div className="projectList">
              
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

