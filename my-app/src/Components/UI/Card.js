import React, {useState} from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../actions';

const Card = props => {
    const [modifyingField, setModifyingField] = useState(props.text);
    const { sendData, receiveData, getError } = props; 
    const isSaved = (modifyingField === props.text) ? true : false;
    const deleteHandler = thingId => {
        sendData();
        fetch(`https://react-hooks-9489b.firebaseio.com/toDoList/${thingId}.json`, {method: 'DELETE'})
        .then(resp => {
            receiveData();
            props.deleteItem(props.id);
        })
        .catch(err => getError("Can't delete item!"))
    }

    const modifyHandler = thingId => {
        sendData();
        fetch(`https://react-hooks-9489b.firebaseio.com/toDoList/${thingId}.json`, {method: 'PATCH', body: JSON.stringify({text: modifyingField})})
        .then(resp=>{
            receiveData();
            props.modifyItem(props.id, modifyingField);
        })
        .catch(err => getError("'Can't save changes!"))
    }
    return(
        <div>
            <li>
                <input type='text' value = {modifyingField} onChange = {(event)=>setModifyingField(event.target.value)}/>
                {isSaved ? null : 
                <div>
                    <button onClick={()=>modifyHandler(props.id)}>Save Changes!</button>
                    <p>Changes not saved!!</p>
                </div>}
                <button onClick={() => deleteHandler(props.id)}>Delete</button>
            </li>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        modifyItem: (thingId, newText) => dispatch(
        {
            type: actionTypes.MODIFY, 
            thingToModify: thingId, 
            newText: newText
        }),
        deleteItem: (thingId) => dispatch({type: 'DELETE', thingToDelete: thingId}),
        sendData: () => dispatch({type: actionTypes.SEND}),
        receiveData: () => dispatch({type: actionTypes.RESPONSE}),
        getError: (getErrorMsg) => dispatch({type: actionTypes.ERROR, errorMsg: getErrorMsg})
    }
}

export default connect(null, mapDispatchToProps)(Card);