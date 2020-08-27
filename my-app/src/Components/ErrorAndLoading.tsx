import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../actions";

import "../Css/ErrorWindow.css";
import "../Css/LoadingIcon.css";

interface ErrorWindowTypes {
  errorMsg: null | string;
  isLoading: boolean;
}

const ErrorWindow: React.FC = () => {
  const dispatch = useDispatch();
  const httpState = useSelector<any, ErrorWindowTypes>((state) => state.http);
  const clearError = () => {
    dispatch({ type: actionTypes.CLEAR });
  };

  const showError = httpState.errorMsg ? (
    <div id="error-window">
      <p>{httpState.errorMsg}</p>
      <button onClick={() => clearError()}>Okay</button>
    </div>
  ) : null;

  const showIcon = httpState.isLoading ? (
    <div className="loadingio-spinner-rolling-q4fibdzvved" id="loading-icon">
      <div className="ldio-pl86sw1k0i9">
        <div></div>
      </div>
    </div>
  ) : null;

  return (
    <div id="error-container">
      {showError}
      {showIcon}
    </div>
  );
};

export default React.memo(ErrorWindow);
