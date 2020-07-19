import React, { useEffect } from 'react';
import Card from './UI/Card';
import {connect} from 'react-redux';
import * as actionTypes from '../actions';

const ListContainer = props => {
    const { setData, sendData, receiveData, getError } = props;
    useEffect(()=>{
        sendData(); // from props
        fetch('https://react-hooks-9489b.firebaseio.com/toDoList.json')
        .then(resp => resp.json())
        .then( data => {
            receiveData(); // from props
            let tempArray = [];
            for (const key in data){
                tempArray.push({
                    text: data[key].text,
                    id: key
                })
            }
            setData(tempArray)
        })
        .catch(err => getError('Can\'t fetch data from Database'))
        
    }, [setData, sendData, receiveData, getError]);

    const lists = props.toDoList.map(item => <Card text={item.text} 
                                                    key={item.id} 
                                                    id={item.id}
                                                />)
    return(
        <div>
            <ul>{lists}</ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        toDoList: state.tdl.toDoList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setData: (data) => dispatch({type: actionTypes.SET, fetchedList: data}),
        sendData: () => dispatch({type: actionTypes.SEND}),
        receiveData: () => dispatch({type: actionTypes.RESPONSE}),
        getError: (getErrorMsg) => dispatch({type: actionTypes.ERROR, errorMsg: getErrorMsg})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(ListContainer));