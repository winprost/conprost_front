import React from 'react';
import './userList.scss'

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
            <div className="item">
              <div className="profile-box">
                <div className="left-box">
                  <div className="left-flex">
                    <div className="user-img">
                      <div className="img">1</div>
                    </div>
                    <div className="user-ct">1</div>
                  </div>
                </div>
                <div className="right-box">
                  <div className="right-flex">
                    <div className="item">1</div>
                    <div className="item">2</div>
                    <div className="item">3</div>
                  </div>
                </div>
              </div>
              <div className="msg-box">
                <div className="message"></div>
                <div className="follow"></div>
              </div>
            </div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
            <div className="item">5</div>
            <div className="item">6</div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default userList