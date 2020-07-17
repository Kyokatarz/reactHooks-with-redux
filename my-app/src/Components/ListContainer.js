import React from 'react';
import Card from './UI/Card';
const ListContainer = props => {


    const lists = props.toDoList.map(item => <Card text={item.text} 
                                                    key={item.id} 
                                                    id={item.id}
                                                    deleteHandler={props.deleteHandler} />)
    return(
        <div>
            <ul>{lists}</ul>
        </div>
    )
}

export default ListContainer;