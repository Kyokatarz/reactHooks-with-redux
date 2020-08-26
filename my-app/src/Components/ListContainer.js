import React, { useEffect } from "react";
import Card from "./UI/Card";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../actions";

import "./ListContainer.css";

const ListContainer = (props) => {
  const toDoList = useSelector((state) => state.tdl.toDoList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: actionTypes.SEND });
    fetch("https://react-hooks-9489b.firebaseio.com/toDoList.json")
      .then((resp) => resp.json())
      .then((data) => {
        let tempArray = [];
        for (const key in data) {
          tempArray.push({
            text: data[key].text,
            id: key,
          });
        }
        dispatch({ type: actionTypes.SET, fetchedList: tempArray });
        dispatch({ type: actionTypes.RESPONSE });
      });
  }, [dispatch]);

  const lists = toDoList.map((item) => (
    <Card text={item.text} key={item.id} id={item.id} />
  ));
  return (
    <div id="list-container">
      <ul>{lists}</ul>
    </div>
  );
};

export default React.memo(ListContainer);
