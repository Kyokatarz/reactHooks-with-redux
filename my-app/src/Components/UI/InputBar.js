import React, { useState } from 'react';
import { connect } from 'react-redux';


const InputBar = props => {

    const [inputField, setInputField] = useState('');
    return(
        <div>
            <input type='input' value={inputField} placeholder='Enter something...' onChange={(event) => {setInputField(event.target.value)}}/>
            <button onClick = {() => props.addNewThing({text: inputField, id: Math.random().toString()})}>Submit</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addNewThing: (newThing) => dispatch({type: 'ADD', thingToAdd: newThing})
    }
}
export default connect(null, mapDispatchToProps)(React.memo(InputBar));
