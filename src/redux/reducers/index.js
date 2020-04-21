import { combineReducers } from "redux";
import todo from "./todo";
import user from "./user";

export default combineReducers(
  // Object ini diakses oleh parameter (state) di mapStateToProps
  {
    haha: todo,
    user,
  }
);
