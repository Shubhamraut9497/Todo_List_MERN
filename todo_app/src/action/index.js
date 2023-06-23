import axios from "axios";
import { ADDNEW_TODO,GETALL_TODOS, TOGGLE_TODO } from "./type";
const API_URL = "http://localhost:8000";

export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/todo`, { data });
    dispatch({ type: ADDNEW_TODO, payload: res.data });
  } catch (err) {
    console.log(`error in api is${err}`);
  }
};
export const getAllTodos = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todo`);
    dispatch({type:GETALL_TODOS,payload:res.data})
  } catch (err) {
    console.log(`get all todos error is ${err}`);
  }
};
export const toggleTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todo/${id}`);
    dispatch({type:TOGGLE_TODO,payload:res.data})
  } catch (err) {
    console.log(`get all todos error is ${err}`);
  }
};
