import React from 'react';
import {connect} from 'react-redux';

const Card = props => {
    return(
        <div>
            <li>
                <p>{props.text}</p>
                <p>{props.id}</p>
                <button onClick={() => props.deleteItem(props.id)}>Delete</button>
            </li>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        deleteItem: (thingId) => dispatch({type: 'DELETE', thingToDelete: thingId})
    }
}

export default connect(null, mapDispatchToProps)(Card);