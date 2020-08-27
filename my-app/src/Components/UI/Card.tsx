import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actionTypes from "../../actions";

import "../../Css/Card.css";

interface CardProps {
  text: string;
  id: string;
}

const Card: React.FC<CardProps> = (props) => {
  const [modifyingField, setModifyingField] = useState<string>(props.text);
  const isSaved: boolean = modifyingField === props.text ? true : false;
  const dispatch = useDispatch();

  const deleteHandler = (thingId: string) => {
    dispatch({ type: actionTypes.SEND });
    fetch(`https://react-hooks-9489b.firebaseio.com/toDoList/${thingId}.json`, {
      method: "DELETE",
    })
      .then((resp) => {
        dispatch({ type: actionTypes.RESPONSE });
        dispatch({ type: actionTypes.DELETE, thingToDelete: thingId });
      })
      .catch((err) =>
        dispatch({
          type: actionTypes.ERROR,
          errorMsg: `Cannot Delete Data from Database!`,
        })
      );
  };

  const modifyHandler = (thingId: string) => {
    if (!modifyingField) {
      return alert("Please don't leave the input field empty!");
    }

    dispatch({ type: actionTypes.SEND });
    fetch(`https://react-hooks-9489b.firebaseio.com/toDoList/${thingId}.json`, {
      method: "PATCH",
      body: JSON.stringify({ text: modifyingField }),
    })
      .then((resp) => {
        dispatch({ type: actionTypes.RESPONSE });
        dispatch({
          type: actionTypes.MODIFY,
          newText: modifyingField,
          thingToModify: thingId,
        });
      })
      .catch((err) =>
        dispatch({
          type: actionTypes.ERROR,
          errorMsg: `Cannot Modify data from database!`,
        })
      );
  };

  return (
    <li>
      <textarea
        value={modifyingField}
        onChange={(event) => setModifyingField(event.target.value)}
      />
      <div
        role="button"
        aria-label="Delete note"
        tabIndex={0}
        onClick={() => deleteHandler(props.id)}
      >
        <i id="delete-btn" className="fas fa-times fa-lg"></i>
      </div>

      {isSaved ? null : (
        <div className="changes-reminder" role="alert">
          <p>Changes not saved!!</p>
          <button onClick={() => modifyHandler(props.id)}>Save Changes!</button>
        </div>
      )}
    </li>
  );
};

export default React.memo(Card);
