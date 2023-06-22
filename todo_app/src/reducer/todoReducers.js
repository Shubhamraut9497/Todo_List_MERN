import * as actionTypes from "../action/type";

export const todoReducers = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADDNEW_TODO:
      return [...state, action.payload];
    case actionTypes.GETALL_TODOS:
      return action.payload;
    default:
      return state;
  }
};
