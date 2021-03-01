import React from 'react';
import PropTypes from 'prop-types';

function Supplement(props) {
    return (
        <>
            <div onClick = {() => PropTypes.whenSuppClicked(props.id)}>
                <h2>{props.name} - {props.type}</h2>
                <h3>{props.dosing}</h3>
                <h3>{props.contraindications}</h3>
                <h3>{props.malodies}</h3> {/* Display other malodies other than one clicked.. these are clickable too? */}
            </div>
        </>
    );
}

Supplement.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    dosing: PropTypes.string,
    contraindications: PropTypes.string,
    malodies: PropTypes.string,
    whenSuppClicked: PropTypes.func
};

export default Supplement;