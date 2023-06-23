import * as actionTypes from "../action/type";

export const todoReducers = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADDNEW_TODO:
      return [...state, action.payload];
    case actionTypes.GETALL_TODOS:
      return action.payload;
    case actionTypes.TOGGLE_TODO:
      return state.map((todo) =>
        todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
};
