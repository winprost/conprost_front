import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styles from './login.module.scss';
import github from '../images/github.svg';
import google from '../images/google.svg';

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

        <div className={styles.iconBox}>
          <div className={styles.icon}>
            <div className={styles.iconImg}><img src={github}></img></div>
            <div className={styles.iconImg}><img src={google}></img></div>
          </div>
        </div>

        <Container style={{textAlign:'center',marginTop:'20px'}}>
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