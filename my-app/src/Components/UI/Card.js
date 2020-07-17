import React from 'react';

const Card = props => {
    return(
        <div>
            <li>
                <p>{props.text}</p>
                <button onClick={()=> props.deleteHandler(props.id)}>Delete</button>
            </li>
        </div>
    )
}

export default Card;