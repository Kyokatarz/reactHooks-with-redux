import React, { useEffect } from 'react';
import InputBar from './UI/InputBar';
import ListContainer from './ListContainer';
import ErrorAndLoading from './ErrorAndLoading';


const ToDoList = props => {
    useEffect(()=>{
        console.log('Rendering ToDoList.js');
    })
    return (
        <div>
    
            <ErrorAndLoading/>
            <InputBar/>
            <ListContainer/>
        </div>
    )
};

export default ToDoList;