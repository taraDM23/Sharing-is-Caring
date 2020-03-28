import React, { useState, useRef, useContext } from 'react';
import './Auth.css';
import AuthContext from '../context/auth-context';
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";

export default function AuthPage() {

  const emailEl = useRef();
  const passwordEL = useRef();
  const [state, setState] = useState({
    isLogin: true,
  })

  const { login } = useContext(AuthContext);
  const submitHandler = async (event) => {
    event.preventDefault();

    const email = emailEl.current.value;
    const password = passwordEL.current.value;
    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }
    const data = {
      email,
      password
    }
    const url = state.isLogin ? "/login" : "/signup"
    try {

      const result = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });



      if (result.status !== 200 && result.status !== 201) {
        throw new Error('Failed!')
      }
      const resultJSON = await result.json();
      /*  console.log(resultJSON) */
      if (resultJSON.errors) {
        console.log(resultJSON.errors[0].message)
      }
      else {
        if (resultJSON.token) {
          login(resultJSON.token, resultJSON.userId, resultJSON.tokenExpiration);
        }

      }

    }
    catch (err) {
      console.log(err);
    }
  };
  const shitchModHandler = () => {
    setState({ isLogin: !state.isLogin })
  }

  return (
    <Container fluid>
      <Row>
        <Jumbotron >
          <h1 style={{ "margin": "auto" }}>{state.isLogin ? 'Login' : 'Signup'}</h1>
        </Jumbotron>
      </Row>
      <h4 style={{ "margin": "auto" }}>Please {state.isLogin ? 'Login' : 'Signup'} Below</h4>

      <form className="auth-form" onSubmit={submitHandler}>
        <Row>
         
            <label htmlFor="email" id="email" >Email</label>
            
            <input type="email" id="email" ref={emailEl}></input>
          

          <label htmlFor="password" id="password">Password</label>
          <input type="password" id="password" ref={passwordEL}></input>

          <div className="form-actions">
            <button type="submit" >Submit</button>
            <button type="button" onClick={shitchModHandler}>Switch to {state.isLogin ? 'Signup' : 'Login'}</button>
          </div>
        </Row>
      </form>
    </Container>
  )

}