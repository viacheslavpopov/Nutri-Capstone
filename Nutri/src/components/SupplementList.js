import React from 'react';

function SupplementList(props) {
  const { suppData } = props;
  return (
    <>
      <ul>
        {suppData.map((supplement, index) =>
            <li key = {index}>
                <p>{supplement.name}</p>
            </li>
        )}
      </ul>
    </>
  );

}

export default SupplementList;

// can get state from props because of redux?

// what does this mean? link for contraindications and maladies 
// display all supplement details on supplement list page, removing need for id
// one API call per category, returning only the supplements we need. Then those are stored in suppData. Then can access the id?