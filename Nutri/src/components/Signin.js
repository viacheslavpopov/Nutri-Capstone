import firebase from 'firebase/app';
import React from 'react';

function Signin() {

  function doSignIn(e) {
    e.preventDefault();
    const email = e.target.signinEmail.value;
    const password = e.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log('Successfully signed in!');
    }).catch(function(error) {
      console.log(error.messsage);
    });
  }

  function doSignOut() {
    firebase.auth().signOut().then(function() {
      console.log('Successfully signed out!');
    }).catch(function(error) {
      console.log(error.message);
    });
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
                  <br />
                <button className='btn btn-info' type='submit'>Sign in</button>
              </form>
              <br />
              <p>Don't have an account? Click the 'Sign Up' Button!</p>
              <button className='btn btn-info'>Sign Up</button>
              <hr />
              <button className='btn btn-info' onClick={doSignOut}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Signin;

// if user is logged in, display only log out
// if user doesn't have an account, have a separate component for sign up
