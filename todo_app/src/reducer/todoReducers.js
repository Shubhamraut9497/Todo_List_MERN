import * as actionTypes from "../action/type";

export const todoReducers = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADDNEW_TODO:
      return [action.payload,...state];
    case actionTypes.GETALL_TODOS:
      return action.payload;
    case actionTypes.TOGGLE_TODO:
      return state.map((todo) =>
        todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
      );
    case actionTypes.UPDATE_TODO:
      return state.map((todo) =>
        todo._id === action.payload._id
          ? { ...todo, item: action.payload.item}
          : todo
      );
    case actionTypes.DELETE_TODO:
      return state.filter((todo) => todo._id !== action.payload._id);
    default:
      return state;
  }
};
