import React from 'react';
import Card from './UI/Card';
import {connect} from 'react-redux';

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

const mapStateToProps = state => {
    return {
        toDoList: state.toDoList
    }
}

export default connect(mapStateToProps)(React.memo(ListContainer));