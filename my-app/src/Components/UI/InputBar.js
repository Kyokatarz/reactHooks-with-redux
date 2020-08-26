import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import * as actionTypes from "../../actions";

import "./InputBar.css";
const InputBar = (props) => {
  const [inputField, setInputField] = useState("");
  const dispatch = useDispatch();
  const submitHandler = useCallback(() => {
    if (!inputField) {
      return alert("Please don't leave the input field empty!");
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
        console.log(data);
      });
  }, [dispatch, inputField]);

  return (
    <div id="input-bar">
      <input
        type="input"
        value={inputField}
        placeholder="Enter something..."
        onChange={(event) => {
          setInputField(event.target.value);
        }}
      />
      <button onClick={() => submitHandler()}>Submit</button>
    </div>
  );
};

export default React.memo(InputBar);
