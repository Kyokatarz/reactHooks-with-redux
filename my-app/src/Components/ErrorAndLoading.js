import React from "react";
import "./ErrorWindow.css";
import "./LoadingIcon.css";
import { connect } from "react-redux";
import * as actionTypes from "../actions";

const ErrorWindow = (props) => {
  const showError = props.errorMsg ? (
    <div id="error-window">
      <p>{props.errorMsg}</p>
      <button onClick={() => props.clearError()}>Okay</button>
    </div>
  ) : null;

  const showIcon = props.isLoading ? (
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

const mapStateToProps = (state) => {
  return {
    errorMsg: state.http.errorMsg,
    isLoading: state.http.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearError: () => dispatch({ type: actionTypes.CLEAR }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(ErrorWindow));
