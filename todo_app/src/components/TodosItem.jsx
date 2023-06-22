import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos } from '../action/index';

function TodosItem() {
    const dispatch = useDispatch();
    const todos=useSelector((state)=>state.todo)
    console.log(todos);
    useEffect(() => {
        dispatch(getAllTodos());
    },[dispatch])
    return (
        <>
        {todos && todos.map((todo)=>{
            return (
                <li>{todo.item}</li>
            )
        })}
        </>
    )
}

export default TodosItem