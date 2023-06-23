import React from 'react'
import { MdDelete } from 'react-icons/md';
import { BsPencilSquare } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../action/index';

function Todo({ todo, id }) {
    const dispatch = useDispatch();
    return (
        <li className='task' onClick={() => dispatch(toggleTodo(id))} style={{ textDecoration: todo.done ? "line-through" : "", color: todo.done ? "#bdc3c7" : "#34495e" }}>
            <span>{todo.item}</span>
            <span className="icon"><MdDelete /></span>
            <span className="icon"><BsPencilSquare /></span>
        </li>
    )
}

export default Todo