import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Regist = () => {
  return (
    <Container>
      <Form style={{ width:'400px', margin:'auto'}} className="align-items-center">
        <Form.Group controlId="formBasicId">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="string" placeholder="아이디를 입력해주세요." />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="비밀번호는 8자리이상 입력해주세요." />
        </Form.Group>

        <Form.Group controlId="formBasicString">
          <Form.Label>닉네임</Form.Label>
          <Form.Control type="string" placeholder="닉네임을 입력해주세요." />
        </Form.Group>

          <Button variant="warning" type="submit" height="2.25rem" 
          style={{margin:'0px 0px 0px 50px', width:"300px"}}>
            Submit
          </Button>
      </Form>
    </Container>
  )
}

export default Regist