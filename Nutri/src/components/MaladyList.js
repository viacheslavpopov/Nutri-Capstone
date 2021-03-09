import React from 'react';
import PropTypes from 'prop-types';

function MaladyList(props) {
  const { onSelectMalady } = props;

  return (
    <>
      <h2><button onClick={ () => onSelectMalady('sugar') }>Blood Sugar Support</button></h2>
      <h2><button onClick={ () => onSelectMalady('detox') }>Detox Support</button></h2>
      <h2><button onClick={ () => onSelectMalady('immune') }>Immune System Support</button></h2>
      <h2><button onClick={ () => onSelectMalady('liver') }>Liver Health</button></h2>
      <h2><button onClick={ () => onSelectMalady('skin') }>Skin Health</button></h2>
    </>
  )
}

MaladyList.propTypes = {
  onSelectMalady: PropTypes.func
}

export default MaladyList;

// click a malady.. an API call is made with that malady as a parameter?
// could put the API call function in the malady list component

//onSelectMalady toggles what is visible on page, and is triggered if a malady is clicked
// after a malady is clicked, an API call needs to be made with that malady as the argument
// should these both be in one function? 
// error could be displayed on main page as before if an API call fails using error prop and isLoading
// can I have a function doing 3 things from here? maybe.. dispatching 2+ actions with API call.