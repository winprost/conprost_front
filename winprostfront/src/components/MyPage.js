import React from 'react';
import './myPage.css';

const MyPage = () => {
  return (
    <div className="mypage-container" >
      <div className="mypage-profile-box">
        <div className="profile-box">
          <div className="profile"></div>
        </div>
        <div className="function-container">
          <div className="contribution-box">
            <span className="title">기여도:</span><span className="contribution">4/5</span>
            <span className="like">♥ 3</span>
          </div>
        </div>
        <div className="box">
          <div class="flex-box"> 
            <div className="item">아이디:</div><div className="data">ewq123</div>
          </div>
        </div>
        <div className="box">
          <div class="flex-box"> 
            <div className="item">닉네임:</div><div className="data">닉네임</div>
          </div>
        </div>
        <div className="box">
          <div class="flex-box"> 
            <div className="item">깃허브:</div><div className="data">깃헙@주소</div>
          </div>
        </div>
        <div className="box">
          <div class="flex-box"> 
            <div className="item">팀 목록:</div><div className="data">1팀</div>
          </div>        
        </div>
      </div>
    </div>
  )
}

export default MyPage