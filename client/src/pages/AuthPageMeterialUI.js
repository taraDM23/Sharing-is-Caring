import React, { useState, useRef, useContext } from 'react';
import './Auth.css';
import AuthContext from '../context/auth-context';
import { Input, TextArea, FormBtn, } from "../components/Form";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AuthPage() {

  const classes = useStyles();

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

      console.log(url, result)

      if (result.status !== 200 && result.status !== 201) {
        throw new Error('Failed!')
      }
      const resultJSON = await result.json();
      console.log(resultJSON)
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

    /*      <>
        <h1 style={{"margin": "auto"}}>{state.isLogin ?  'Login' : 'Signup'}</h1>
        <form className="auth-form" onSubmit={submitHandler}>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" ref={emailEl}></input>
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" ref={passwordEL}></input>
            </div>
            <div className="form-actions">
                <button type="submit" >Submit</button>
                <button type="button" onClick={shitchModHandler}>Switch to {state.isLogin ? 'Signup': 'Login'}</button>
            </div>
        </form>  
        </> */


    /// meterial ui 

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          <h1 style={{ "margin": "auto" }}>{state.isLogin ? 'Login' : 'Signup'}</h1>
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            ref={emailEl}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            ref={passwordEL}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="form-actions"

          >
            Sign In
          </Button>


          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={shitchModHandler}
            {...state.isLogin ? 'Signup': 'Login'}

          >
            Switch to
          </Button>

        </form>
      </div>

    </Container>











    //end of function
  )

}