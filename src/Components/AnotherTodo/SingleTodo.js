import React from "react";

import { BiEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";

const SingleTodo = ({
  focusIt,
  showAlert,
  changeIt,
  todoUpdate,
  index,
  each,
  todos,
}) => {
  const deleteIt = (index) => {
    const neww = todos.filter((word) => todos.indexOf(word) !== index);
    // console.log(neww);
    todoUpdate(neww);
    showAlert(true, "The Task is Deleted!", "danger");
    // setAlert({ show: true, message: "The task is deleted!", type: "danger" });
  };
  return (
    <>
      <div className="todo-article">
        <p>{each}</p>
        <div className="todo-button-div">
          <button
            onClick={() => {
              changeIt(index);
              focusIt();
            }}
          >
            <BiEdit color="green" />
          </button>
          <button onClick={() => deleteIt(index)}>
            <BsTrash color="red" />
          </button>
        </div>
      </div>
    </>
  );
};
export default SingleTodo;
