import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos } from '../action/index';
import Todo from './Todo';

function TodosItem() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo)
    console.log(todos);
    useEffect(() => {
        dispatch(getAllTodos());
    }, [dispatch])
    return (
        <>
            <ul>
                {todos && todos.map((todo) => {
                    return <Todo key={todo._id} todo={todo} id={todo._id} />
                })}
            </ul>
        </>
    )
}

export default TodosItem