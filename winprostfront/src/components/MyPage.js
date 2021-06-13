import React from 'react';
import styled from "styled-components";
import myPage from "../images/animal.jpg";

const img1 = "https://i.pinimg.com/originals/d6/24/97/d62497c09927ffb6fafe325ba4acbe8f.jpg"

const StyleContainer = styled.div`
  box-sizing: border-box;
  background-color: white;
  width: 100%;
  height: 100%;
  
`;

const StyleMypageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: 400px;
  height: 1000px;
  margin: auto;
  background-color: white;
`;

const StyleMypageImg = styled.div`
  width:100%;
  height:40%;
  border-radius: 50%;
  background-image: url(${img1});
  background-size: 100% 100%;
`;

const StyleMypageCt = styled.div`
  width: 40%;
  height: 60px;
  position: absolute;
  top:40%;
  left: 40%;
  background-color: #03C75A;
  margin-top:20px;
  border: none;
`;

const StyleMypageId = styled.div`
  flex: 1;
  width: 100%;
  margin-top:100px;
  background-color: blue;
  border: none;
`;

const StyleMypageName = styled.div`
  flex: 1;
  width: 100%;
  background-color: green;
  border: none;
`;

const StyleMypageGit = styled.div`
  flex: 1;
  width: 100%;
  background-color: pink;
  border: none;
`;

const StyleMypageTeam = styled.div`
  flex: 1;
  width: 100%;
  background-color: orange;
  border: none;
`;

const MyPage = () => {
  return (
    <StyleContainer>
      <StyleMypageContainer>
        <StyleMypageImg/>
        <StyleMypageCt/>
        <StyleMypageId/>
        <StyleMypageName/>
        <StyleMypageGit/>
        <StyleMypageTeam/>
      </StyleMypageContainer>
    </StyleContainer>
  )
}

export default MyPage