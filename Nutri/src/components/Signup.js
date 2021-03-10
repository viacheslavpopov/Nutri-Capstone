import firebase from 'firebase/app';
import React from 'react';

function Signup() {

  function doSignUp(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
      console.log('Successfully signed up!');
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
              <h1>Sign Up</h1>
              <form onSubmit={doSignUp}>
                <input
                  type='text'
                  name='email'
                  placeholder='email' />
                <input
                  type='password'
                  name='password'
                  placeholder='password' />
                <button className='btn btn-info' type='submit'>Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup;