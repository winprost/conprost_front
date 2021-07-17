import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Regist = () => {
  return (
    <Container style={{padding:'100px 0px'}}>
      <Form style={{ width:'400px', margin:'auto'}} className="align-items-center">
        <Form.Group controlId="formBasicId">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="string" placeholder="아이디를 입력해주세요." />
        </Form.Group>

        <Form.Group style={{marginTop:'30px'}} controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="비밀번호는 8자리이상 입력해주세요." />
        </Form.Group>

        <Container style={{textAlign:'center',marginTop:'50px'}}>
          <Button variant="warning" type="submit" height="2.25rem" 
          style={{width:"300px"}}>
            Submit
          </Button>
        </Container>

      </Form>
    </Container>
  )
}

export default Regist