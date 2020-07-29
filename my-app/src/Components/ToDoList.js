import React, { useEffect } from 'react';
import InputBar from './UI/InputBar';
import ListContainer from './ListContainer';
import ErrorAndLoading from './ErrorAndLoading';

import './ToDoList.css';


const ToDoList = props => {
    useEffect(()=>{
        console.log('Rendering ToDoList.js');
    })
    return (
        <div>
            <h1>To do list</h1>
            <ErrorAndLoading/>
            <InputBar/>
            <ListContainer/>
        </div>
    )
};

export default ToDoList;