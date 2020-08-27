import React from "react";
import InputBar from "./UI/InputBar";
import ListContainer from "./ListContainer";
import AlertContainer from "./AlertContainer";

import "../Css/ToDoList.css";

const ToDoList: React.FC = () => {
  return (
    <>
      <h1>To do list</h1>
      <AlertContainer />
      <InputBar />
      <ListContainer />
    </>
  );
};

export default ToDoList;
