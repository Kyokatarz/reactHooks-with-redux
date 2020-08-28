import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import * as actionTypes from "../../actions";

import "../../Css/InputBar.css";

const InputBar: React.FC = () => {
  const [inputField, setInputField] = useState<string>("");
  const dispatch = useDispatch();
  const submitHandler = useCallback(() => {
    if (!inputField) {
      return dispatch({
        type: actionTypes.SET_ALERT,
        payload: "Please don't leave the input field empty",
      });
    }

    dispatch({ type: actionTypes.SEND });
    fetch("https://react-hooks-9489b.firebaseio.com/toDoList.json", {
      method: "POST",
      body: JSON.stringify({ text: inputField }),
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({ type: actionTypes.RESPONSE });
        dispatch({
          type: actionTypes.ADD,
          thingToAdd: { id: data.name, text: inputField },
        });
        dispatch({ type: actionTypes.SET_ALERT, payload: "Note added!" });
        setInputField("");
      })
      .catch((err) => {
        console.error(err);
        dispatch({
          type: actionTypes.ERROR,
          errorMsg: `Cannot Add data to Database!`,
        });
      });
  }, [dispatch, inputField]);

  return (
    <div id="input-bar">
      <input
        type="input"
        value={inputField}
        placeholder="Enter note..."
        aria-label="Enter note here"
        onChange={(event) => {
          setInputField(event.target.value);
        }}
      />
      <button onClick={() => submitHandler()}>Submit</button>
    </div>
  );
};

export default React.memo(InputBar);
