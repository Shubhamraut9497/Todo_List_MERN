import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../action/index';
function TodoForm() {
    const dispatch=useDispatch();
    const [text,setText]=useState("");
    const handleChange=(e)=>{
       setText(e.target.value);
    }
    const onSubmitForm=(e)=>{
        // e.preventDefault();
        dispatch(addNewTodo(text))
        setText("");
    }
  return (
    <div>
        <form className='form' onSubmit={onSubmitForm}>
            <input type="text" placeholder='Enter an item' className="input" value={text} onChange={handleChange}/>
        </form>
    </div>
  )
}

export default TodoForm