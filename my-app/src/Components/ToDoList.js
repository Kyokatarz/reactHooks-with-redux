import React, { useEffect } from 'react';
import InputBar from './UI/InputBar';
import ListContainer from './ListContainer';

const ToDoList = props => {
    useEffect(()=>{
        console.log('Rendering ToDoList.js');
    })
    return (
        <div>
            <h1>Hello</h1>
            <InputBar/>
            <ListContainer/>
        </div>
    )
};

export default ToDoList;