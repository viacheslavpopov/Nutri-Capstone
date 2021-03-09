import React from 'react';
import { useSelector } from 'react-redux';

function SupplementList(props) {
  // const { suppData } = props;
  const data = useSelector(state => state.suppData);
  // get suppData from the store. Use hook?
  return (
    <>
      <ul>
        {data.map((supplement, index) =>
            <li key={index}>
                <p>{supplement.name}</p>
            </li>
        )}
      </ul>
      <button>Back to Malady List</button>
    </>
  );

}

export default SupplementList;

// can get state from props because of redux?

// what does this mean? link for contraindications and maladies 
// display all supplement details on supplement list page, removing need for id
// one API call per category, returning only the supplements we need. Then those are stored in suppData. Then can access the id?