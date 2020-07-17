const initialState = {
    toDoList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD':
            console.log('ADD action is called!');
            return {
                ...state,
                toDoList: [...state.toDoList].concat(action.thingToAdd)
            }
        case 'DELETE':
            console.log('DELETE action is called!');
            console.log('thingId:', action.thingToDelete);
            const tempArray = [...state.toDoList].filter(item => item.id !== action.thingToDelete)
            console.log(tempArray);
            return {
                ...state,
                toDoList: tempArray
            }
            
        default:
            return state;
    }
}

export default reducer;
