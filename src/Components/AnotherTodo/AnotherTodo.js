import React, { useState, useEffect, useRef } from "react";
import "./AnotherTodo.css";
import SingleTodo from "./SingleTodo";
import TodoAlert from "./TodoAlert";

const AnotherTodo = () => {
  const refFocus = useRef(null);
  const getLocalStorage = () => {
    let ll = localStorage.getItem("Todos");
    if (ll) {
      // console.log(ll);
      return JSON.parse(localStorage.getItem("Todos"));
    } else {
      return [];
    }
  };

  const focusIt = () => {
    refFocus.current.focus();
  };
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "",
  });
  const [editId, setEditId] = useState(null);
  const [isEditting, setIsEditting] = useState(false);
  const [task, setTask] = useState("");

  const [todos, setTodos] = useState(getLocalStorage());
  // console.log(todos);
  // console.log(JSON.stringify(todos));
  const showAlert = (show = false, message = "", type = "") => {
    setAlert({ show, message, type });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      // alert("DONT PUT EMPTY VALUES MANN");
      setAlert({
        show: true,
        message: "Don't put empty values mann..plz!",
        type: "danger",
      });
    } else if (isEditting && task) {
      setTodos(
        todos.map((each) => {
          let ind = todos.indexOf(each);
          if (ind === editId) {
            return task;
          }
          return each;
        })
      );
      setTask("");
      setEditId(null);
      setIsEditting(false);
      showAlert(true, "Task Edited Successfully", "success");
    } else {
      const strr = task;
      setTodos([...todos, strr]);
      const x = "";
      setTask(x);
      // console.log(todos);
      showAlert(true, "The Task has been Added!", "success");
    }
  };

  const changeIt = (index) => {
    const temp = todos[index];
    setIsEditting(true);
    setEditId(index);
    setTask(temp);
  };

  useEffect(() => {
    focusIt();
    // console.log("focused");
  });

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo-container">
      {alert.show ? <TodoAlert removeAlert={showAlert} {...alert} /> : null}
      <div className="todo-header">
        <h1>Lamest ToDo</h1>
        <form onSubmit={handleSubmit}>
          <input
            ref={refFocus}
            onChange={(e) => setTask(e.target.value)}
            placeholder="eg: Go Die XD"
            type="text"
            value={task}
          />
          <button className="todo-header-btn" type="submit">
            {isEditting ? "Edit" : "Submit"}
            {/* {console.log(isEditting)} */}
          </button>
        </form>
      </div>
      <div className="todo-main-container">
        {todos.map((each, index) => {
          // console.log(index);
          return (
            <SingleTodo
              focusIt={focusIt}
              changeIt={changeIt}
              showAlert={showAlert}
              updateTask={setTask}
              task={task}
              key={index}
              todoUpdate={setTodos}
              todos={todos}
              index={index}
              each={each}
            />
          );
        })}
        {todos.length >= 1 ? (
          <button
            onClick={() => {
              setTodos([]);
              showAlert(true, "All Tasks were Deleted!", "danger");
            }}
            className="todo-clear-btn"
          >
            Clear All
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default AnotherTodo;
