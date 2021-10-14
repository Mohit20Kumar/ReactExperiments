import React, { useEffect } from "react";

const TodoAlert = ({ removeAlert, type, message }) => {
  useEffect(() => {
    // console.log("FUCK USE EFFECT");
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  });

  return <p className={`todo-alert todo-alert-${type}`}>{message}</p>;
};

export default TodoAlert;
