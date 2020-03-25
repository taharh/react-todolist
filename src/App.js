import React from "react";
import "./App.css";
import ToDoList from "./components/toDoList";

function App() {

  return (
    <div className="Container">
      <h1
      style = {{
        position:"relative",
        left:100,
        top:5}}>TO DO LIST</h1>
      <ToDoList/>
    </div>
  );
}

export default App;
