import React, { useState } from 'react';

const InputBar = props => {

    const [inputField, setInputField] = useState('');
    return(
        <div>
            <input type='input' value={inputField} placeholder='Enter something...' onChange={(event) => {setInputField(event.target.value)}}/>
            <button onClick = {() => props.submitHandler(inputField)}>Submit</button>
        </div>
    )
}

export default React.memo(InputBar);
