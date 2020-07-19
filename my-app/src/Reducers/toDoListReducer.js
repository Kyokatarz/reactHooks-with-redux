import * as actionTypes from '../actions.js';

const initialState = {
    toDoList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.SET:
            return {
                ...state,
                toDoList: action.fetchedList
            }
        case actionTypes.ADD:
            return {
                ...state,
                toDoList: [...state.toDoList].concat(action.thingToAdd)
            }
        case actionTypes.DELETE: {
            let tempArray = [...state.toDoList].filter(item => item.id !== action.thingToDelete)
            console.log(tempArray);
            return {
                ...state,
                toDoList: tempArray
            }
        }
        case actionTypes.MODIFY: {
            let tempArray = [...state.toDoList];
            for(let i = 0; i<tempArray.length; i++){
                if (tempArray[i].id === action.thingToModify){
                    tempArray.splice(i,1,{
                        text: action.newText,
                        id: action.thingToModify
                    });
                }
            }
            return {
                ...state,
                toDoList: tempArray
            };
        }
        default:
            return state;
    }
}

export default reducer;
