import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function SupplementList(props) {

  const data = useSelector(state => state.suppData);
  const { onSelectBackButton } = props;

  return (
    <>
      <ul>
        {data.map((supplement, index) =>
            <li key={index}>
                <p>{supplement.name}</p>
            </li>
        )}
      </ul>
      <button onClick={ () => onSelectBackButton() }>Back to Malady List</button>
    </>
  );

}

SupplementList.propTypes = {
  onSelectBackButton: PropTypes.func
}

export default SupplementList;

// what does this mean? link for contraindications and maladies 
// display all supplement details on supplement list page, removing need for id
// one API call per category, returning only the supplements we need. Then those are stored in suppData. Then can access the id?