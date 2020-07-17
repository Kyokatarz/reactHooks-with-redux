import React, { useState, useCallback, useEffect } from 'react';
import InputBar from './UI/InputBar';
import ListContainer from './ListContainer';
const ToDoList = props => {


    const [toDoList, setToDoList] = useState([]);

    const submitHandler = useCallback((newThing) => {
        setToDoList(prevState => [...prevState, {
            text: newThing, 
            id: Math.random().toString()}
        ])
    }, [setToDoList]);

    const deleteHandler = (idToDelete) => {3
        setToDoList(prevState => prevState.filter(item=> item.id !== idToDelete))
    }

    useEffect(()=>{
        console.log('Rendering ToDoList.js');
    })
    return (
        <div>
            <h1>Hello</h1>
            <InputBar submitHandler = {submitHandler}/>
            <ListContainer toDoList = {toDoList} deleteHandler={deleteHandler}/>
        </div>
    )
}

export default ToDoList;