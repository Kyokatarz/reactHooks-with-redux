import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../actions";

import Alert from "./UI/Alert";
import Error from "./UI/Error";
import Loading from "./UI/Loading";

interface httpStateTypes {
  errorMsg: null | string;
  isLoading: boolean;
}

const AlertContainer: React.FC = () => {
  const httpState = useSelector<any, httpStateTypes>((state) => state.http);
  const alertState = useSelector<any, string>((state) => state.alert);
  let renderElement = null;
  if (httpState.errorMsg) {
    renderElement = <Error />;
  } else if (httpState.isLoading) {
    renderElement = <Loading />;
  } else if (alertState) {
    renderElement = <Alert />;
  }
  return <div>{renderElement}</div>;
};

export default React.memo(AlertContainer);
