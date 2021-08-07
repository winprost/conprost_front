import React from 'react';
import './contest.scss'
import img from '../images/poster.jpeg'

const contest = () => {
  return (
    <div>
      <header>
        <div className="nav-flex">
          <div className="left"></div>
          <div className="nav-container">
            <div className="nav-line">
              <div className="item">기여도순</div>
              <div className="item">팔로워순</div>
              <div className="item">이름순</div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="main-container">
          <div className="main-flex">

            <div className="apadding-item">
                <div className="item-box">
                    <div className="thumb-nail">
                        <img src={img}></img>
                    </div>
                    <div className="contest-box">
                        <div className="contest-flex">
                            <div claaName="contest-title">공모전 제목</div>
                            <div className="contest-due">2021-08-09</div>    
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="apadding-item">
                <div className="item-box">
                    <div className="thumb-nail">
                        <img src={img}></img>
                    </div>
                    <div className="contest-box">
                        <div className="contest-flex">
                            <div claaName="contest-title">공모전 제목</div>
                            <div className="contest-due">2021-08-09</div>    
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}

export default contest