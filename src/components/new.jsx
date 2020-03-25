import React from "react";

function ToDoItem(props) {
  return (
    <li
      key={props.listItem.id}
      className={
        props.listItem.done ? "list-group-item list-group-item-danger" : "list-group-item"
      }
    >
      <span>{props.listItem.title}</span>
      <div
      style = {{
        position:"absolute",
        right:30,
        top:5}}>
      <button
      
      type="button"
      className="btn btn-danger"
      onClick={() => props.handleDelete(props.listItem)}
    >
      DELETE
    </button>

    <button
        type="button"
        className={props.listItem.completed ? "btn btn-info" : "btn btn-secondary"} //{`btn btn-${listitem.done?"info":"primary"}
        onClick={() => props.handleDone(props.listItem)}
      >
        {props.listItem.completed ? "CHECK" : "UNCHECK"}
      </button>

      </div>
      
     
      
    </li>
  );
}
export default ToDoItem;
