import * as actionTypes from "../actions.js";
import stateModel from "../models/stateModel.model";

const initialState = {
  toDoList: [],
};

interface ActionTypes {
  [prop: string]: string | object;
  newText: string;
}

const reducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case actionTypes.SET:
      return {
        ...state,
        toDoList: action.fetchedList,
      };
    case actionTypes.ADD:
      return {
        ...state,
        toDoList: [...state.toDoList, action.thingToAdd],
      };
    case actionTypes.DELETE: {
      let tempArray = [...state.toDoList].filter(
        (item: stateModel) => item.id !== action.thingToDelete
      );
      console.log(tempArray);
      return {
        ...state,
        toDoList: tempArray,
      };
    }
    case actionTypes.MODIFY: {
      let tempArray: Array<stateModel> = [...state.toDoList];
      for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i].id === action.thingToModify) {
          tempArray.splice(i, 1, {
            text: action.newText,
            id: action.thingToModify,
          });
        }
      }
      return {
        ...state,
        toDoList: tempArray,
      };
    }
    default:
      return state;
  }
};

export default reducer;
