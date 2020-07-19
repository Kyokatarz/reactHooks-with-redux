import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import *  as actionTypes from '../../actions';

const InputBar = props => {
    const {addNewThing, setData, sendData, receiveData, getError} = props;
    const [inputField, setInputField] = useState('');
    const submitHandler = () => {
        sendData();
        fetch('https://react-hooks-9489b.firebaseio.com/toDoList.json', {
            method: 'POST',
            body: JSON.stringify({text: inputField}),
            headers: {'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(data=>{
            receiveData();
            console.log(data);
            addNewThing({
                id: data.name,
                text: inputField
            })
        })
        .catch(err => getError('Can\'t submit new item!'))

    }


    return(
        <div>
            <input type='input' value={inputField} placeholder='Enter something...' onChange={(event) => {setInputField(event.target.value)}}/>
            <button onClick = {() => submitHandler()}>Submit</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addNewThing: (newThing) => dispatch({type: actionTypes.ADD, thingToAdd: newThing}),
        setData: (data) => dispatch({type: actionTypes.SET, fetchedList: data}),
        sendData: () => dispatch({type: actionTypes.SEND}),
        receiveData: () => dispatch({type: actionTypes.RESPONSE}),
        getError: (getErrorMsg) => dispatch({type: actionTypes.ERROR, errorMsg: getErrorMsg})
    }
}
export default connect(null, mapDispatchToProps)(React.memo(InputBar));
