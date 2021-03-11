import React from 'react';
import PropTypes from 'prop-types';

function MaladyList(props) {
  const { onSelectMalady } = props;

  return (
    <>
      <div className="row">
        <div className="col-5 mx-auto">
          <div className="card border-0">
            <div className="card-body">
              <h4><strong>Welcome to the Nutri supplement database!</strong></h4>
              <h5>Click the links below to view supplement suggestions.</h5>
              <hr />
              <h2><button className="btn btn-info" onClick={ () => onSelectMalady('sugar', 'Blood Sugar Support') }>Blood Sugar Support</button></h2>
              <h2><button className="btn btn-info" onClick={ () => onSelectMalady('detox', 'Detox Support') }>Detox Support</button></h2>
              <h2><button className="btn btn-info" onClick={ () => onSelectMalady('immune', 'Immune System Support') }>Immune System Support</button></h2>
              <h2><button className="btn btn-info" onClick={ () => onSelectMalady('liver', 'Liver Health') }>Liver Health</button></h2>
              <h2><button className="btn btn-info" onClick={ () => onSelectMalady('skin', 'Skin Health') }>Skin Health</button></h2>
              <h2><button className="btn btn-info" onClick={ () => onSelectMalady('digestive', 'Digestive Health') }>Digestive Health</button></h2>
              <h2><button className="btn btn-info" onClick={ () => onSelectMalady('athletic', 'Athletic Performance') }>Athletic Performance</button></h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

MaladyList.propTypes = {
  onSelectMalady: PropTypes.func
}

export default MaladyList;