import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actionTypes from "../../actions";

import "./Card.css";

const Card = (props) => {
  const [modifyingField, setModifyingField] = useState(props.text);
  const isSaved = modifyingField === props.text ? true : false;
  const dispatch = useDispatch();

  const deleteHandler = (thingId) => {
    dispatch({ type: actionTypes.SEND });
    fetch(`https://react-hooks-9489b.firebaseio.com/toDoList/${thingId}.json`, {
      method: "DELETE",
    }).then((resp) => {
      dispatch({ type: actionTypes.RESPONSE });
      dispatch({ type: actionTypes.DELETE, thingToDelete: thingId });
    });
  };

  const modifyHandler = (thingId) => {
    if (!modifyingField) {
      return alert("Please don't leave the input field empty!");
    }

    dispatch({ type: actionTypes.SEND });
    fetch(`https://react-hooks-9489b.firebaseio.com/toDoList/${thingId}.json`, {
      method: "PATCH",
      body: JSON.stringify({ text: modifyingField }),
    }).then((resp) => {
      dispatch({ type: actionTypes.RESPONSE });
      dispatch({
        type: actionTypes.MODIFY,
        newText: modifyingField,
        thingToModify: thingId,
      });
    });
  };

  return (
    <div className="list-item">
      <li>
        <input
          type="text"
          value={modifyingField}
          onChange={(event) => setModifyingField(event.target.value)}
        />

        <button onClick={() => deleteHandler(props.id)}>Delete</button>
        {isSaved ? null : (
          <div>
            <p>Changes not saved!!</p>
            <button onClick={() => modifyHandler(props.id)}>
              Save Changes!
            </button>
          </div>
        )}
      </li>
    </div>
  );
};

export default React.memo(Card);
