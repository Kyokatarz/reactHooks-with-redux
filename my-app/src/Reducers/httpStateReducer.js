import * as actionTypes from '../actions';

const initialState = {
    errorMsg: null,
    isLoading: false
}

const httpStateReducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.SEND:
            return {
                ...state,
                errorMsg: null,
                isLoading: true
            }

        case actionTypes.RESPONSE:
            return {
                ...state,
                errorMsg: null,
                isLoading: false
            }
        case actionTypes.ERROR:
            return {
                ...state,
                errorMsg: action.errorMsg,
                isLoading: false
            }
        case actionTypes.CLEAR:
            return {
                ...state,
                errorMsg: null,
                isLoading: false
            }
        default:
           return state;
    }
}

export default httpStateReducer;