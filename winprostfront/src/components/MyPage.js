import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import profile from '../images/animal.jpg';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const MyPage = () => {
  return (
<Container>
  <Row className="justify-content-md-center">
    <Col xs='auto'>
      <Image src={profile} roundedCircle 
      style = {{width:'200px'}}/>
    </Col>
  </Row>
  <Row className="justify-content-md-center">
    <Col xs='auto'>
    <li style={{ marginTop:'50px'}}>이름: 최승주</li>
    </Col>
  </Row>
</Container>
  )
}

export default MyPage