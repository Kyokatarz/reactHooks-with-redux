import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../actions";
import "../../Css/ErrorWindow.css";

interface ErrorWindowTypes {
  errorMsg: null | string;
  isLoading: boolean;
}

const Error: React.FC = () => {
  const httpState = useSelector<any, ErrorWindowTypes>((state) => state.http);
  const dispatch = useDispatch();

  const clearError = () => {
    dispatch({ type: actionTypes.CLR_ERROR });
  };
  return (
    <div id="error-window">
      <p>{httpState.errorMsg}</p>
      <button onClick={() => clearError()}>Okay</button>
    </div>
  );
};

export default Error;
