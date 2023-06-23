import axios from "axios";
import { ADDNEW_TODO, GETALL_TODOS, TOGGLE_TODO, UPDATE_TODO ,DELETE_TODO,TOGGLE_TAB} from "./type";

export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/todo`, { data });
    dispatch({ type: ADDNEW_TODO, payload: res.data });
  } catch (err) {
    console.log(`error in api is${err}`);
  }
};
export const getAllTodos = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/todo`);
    dispatch({ type: GETALL_TODOS, payload: res.data });
  } catch (err) {
    console.log(`get all todos error is ${err}`);
  }
};
export const toggleTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/todo/${id}`);
    dispatch({ type: TOGGLE_TODO, payload: res.data });
  } catch (err) {
    console.log(`get all todos error is ${err}`);
  }
};
export const updateTodo = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`${process.env.REACT_APP_API_URL}/todo/${id}`, { data });

    dispatch({ type: UPDATE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling updateTodo API ", error.message);
  }
};
export const deleteTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${process.env.REACT_APP_API_URL}/todo/${id}`);
    dispatch({ type: DELETE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling updateTodo API ", error.message);
  }
};
export const toggleTab = (tab) => async (dispatch) => {
  dispatch({ type: TOGGLE_TAB, selected: tab })
}

