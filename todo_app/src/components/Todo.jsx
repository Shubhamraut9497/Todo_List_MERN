import React, { useState} from "react";
import { MdDelete } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleTodo, updateTodo, deleteTodo } from "../action/index";

function Todo({ todo, id }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo?.item);
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    setEditing((prevState) => !prevState);
    dispatch(updateTodo(todo._id, text));
  };
  return (
    <li
      className="task"
      onClick={() => dispatch(toggleTodo(todo._id))}
      style={{
        textDecoration: todo?.done ? "line-through" : "",
        color: todo?.done ? "#bdc3c7" : "#34495e",
      }}
      data-testid="todo-test"
    >
      <span style={{ display: editing ? "none" : "" }}>{todo?.item}</span>

      <form
        style={{ display: editing ? "inline" : "none" }}
        onSubmit={onFormSubmit}
      >
        <input
          type="text"
          value={text}
          className="edit-todo"
          onChange={(e) => setText(e.target.value)}
        />
      </form>

      <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
        <MdDelete />
      </span>
      <span
        className="icon"
        onClick={() => setEditing((prevState) => !prevState)}
      >
        <BsPencilSquare />
      </span>
    </li>
  );
}

export default Todo;
