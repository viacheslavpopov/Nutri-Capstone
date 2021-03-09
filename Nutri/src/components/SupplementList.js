import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function SupplementList(props) {

  const data = useSelector(state => state.suppData);
  const { onSelectBackButton } = props;

  return (
    <>
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="card">
            <div className="card-body">
              <ul>
                {data.map((supplement, index) =>
                    <li key={index}>
                        <h2 id="supp">{supplement.name}</h2>
                        <hr />
                        <h4 id="supp">Supplement Type:</h4>
                        <p id="supp">{supplement.type}</p>
                        <h4 id="supp">Dosing:</h4>
                        <p id="supp">{supplement.dosing}</p>
                        <h4 id="supp">Contraindications:</h4>
                        <p id="supp">{supplement.contraindications}</p>
                    </li>
                )}
              </ul>
              <button className="btn btn-info" onClick={ () => onSelectBackButton() }>Back to Malady List</button>
            </div>
          </div>
        </div>
      </div>
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