import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../Css/Alert.css";
import * as actionTypes from "../../actions";
const Alert = () => {
  const alertState = useSelector<any, string>((state) => state.alert);
  const dispatch = useDispatch();

  const clearAlert = () => {
    dispatch({ type: actionTypes.CLR_ALERT });
  };

  return (
    <div id="alert-container">
      <p>{alertState}</p>
      <button onClick={() => clearAlert()}>Okay</button>
    </div>
  );
};

export default Alert;
