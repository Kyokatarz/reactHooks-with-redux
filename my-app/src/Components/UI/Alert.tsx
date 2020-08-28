import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../Css/Alert.css";
import * as actionTypes from "../../actions";

const Alert: React.FC = () => {
  const alertState = useSelector<any, string>((state) => state.alert);
  const dispatch = useDispatch();

  const clearAlert = useCallback(() => {
    dispatch({ type: actionTypes.CLR_ALERT });
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      clearAlert();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [clearAlert]);
  return (
    <div id="alert-container">
      <p>{alertState}</p>
    </div>
  );
};

export default Alert;
