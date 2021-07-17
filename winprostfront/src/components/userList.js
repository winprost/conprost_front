import React from 'react';
import './userList.scss'
import img from '../images/profile.jpg'

const userList = () => {
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
            <div className="item">
                <div className="user-profile-box">
                  <div className="left-box">
                    <div className="left-flex">
                      <div className="user-img">
                        <img src={img}/>
                      </div>
                      <div className="user-ct">4 기여도</div>
                    </div>
                  </div>
                  <div className="right-box">
                    <div className="right-flex">
                      <div className="item">이름: 유승현</div>
                      <div className="item">기술: 프론트엔드</div>
                      <div className="item">깃헙: 깃헙@깃헙</div>
                    </div>
                  </div>
                </div>
                <div className="msg-box">
                  <div className="follow">♥3</div>
                  <button className="message">쪽지</button>
                </div>
            </div>
            </div>
            <div className="apadding-item">
              <div className="item">2</div>
            </div>
            <div className="apadding-item">
              <div className="item">3</div>
            </div>
            <div className="apadding-item">
              <div className="item">4</div>
            </div>
            <div className="apadding-item">
              <div className="item">5</div>
            </div>
            <div className="apadding-item">
              <div className="item">6</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default userList