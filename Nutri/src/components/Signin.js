import firebase from 'firebase/app';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as a from './../actions';

function Signin() {

  const history = useHistory();
  const dispatch = useDispatch();

  function doSignIn(e) {
    e.preventDefault();
    const email = e.target.signinEmail.value;
    const password = e.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log('Successfully signed in!');
    }).catch(function(error) {
      console.log(error.messsage);
    });
    dispatch(a.toggleLogin());
    history.push('/');
  }

  function navigateToSignUp() {
    history.push('/signup');
  }

  return (
    <>
    <div className="row">
        <div className="col-4 mx-auto">
          <div className="card border-0">
            <div className="card-body">
              <h1>Sign In</h1>
              <form onSubmit={doSignIn}>
                <input
                  type='text'
                  name='signinEmail'
                  placeholder='email' />
                <input
                  type='password'
                  name='signinPassword'
                  placeholder='Password' />
                  <hr />
                <button className='btn btn-info' type='submit'>Sign in</button>
              </form>
              <br />
              <p>Don't have an account? Click the 'Sign Up' Button!</p>
              <button className='btn btn-info' onClick={navigateToSignUp}>Sign Up</button>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Signin;