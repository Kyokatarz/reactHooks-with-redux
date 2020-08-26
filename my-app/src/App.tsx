import React from "react";
import ToDoList from "./Components/ToDoList";
import "./App.css";

const App: React.FC = () => {
  return (
    <div id="app-container">
      <ToDoList />
    </div>
  );
};

export default App;
