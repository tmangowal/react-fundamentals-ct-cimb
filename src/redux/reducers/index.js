import { combineReducers } from "redux";
import todoReducer from "./todo";
import userReducer from "./user";

export default combineReducers(
  // Object ini diakses oleh parameter (state) di mapStateToProps
  {
    todo: todoReducer,
    user: userReducer,
  }
);
