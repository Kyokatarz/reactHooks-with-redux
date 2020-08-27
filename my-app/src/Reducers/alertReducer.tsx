import * as actionTypes from "../actions";

const initialState = null;

interface typesOfAction {
  type: string;
  payload: string;
}

const alertReducer = (
  state: string | null = initialState,
  action: typesOfAction
) => {
  switch (action.type) {
    case actionTypes.SET_ALERT:
      return action.payload;

    case actionTypes.CLR_ALERT:
      return null;
    default:
      return state;
  }
};

export default alertReducer;
