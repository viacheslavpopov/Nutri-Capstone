import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import firebase from 'firebase/app';
import * as a from './../actions';

function Signout() {

  const history = useHistory();
  const dispatch = useDispatch();

  function doSignOut() {
    firebase.auth().signOut().then(function() {
      console.log('Successfully signed out!');
    }).catch(function(error) {
      console.log(error.message);
    });
    dispatch(a.toggleLogin());
    history.push('/');
  }

  function navigateToHome() {
    history.push('/');
  }

  // function navigateToSignin() {
  //   history.push('/signin');
  // }

  return (
    <>
      <button className='btn btn-info' onClick={doSignOut}>Sign Out</button>
      <button className='btn btn-info' onClick={navigateToHome}>Back to Home</button>
    </>
  );
}

export default Signout;