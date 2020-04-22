import Axios from "axios";
import { API_URL } from "../../constants/API";

export const usernameInputHandler = (text) => {
  return {
    type: "ON_CHANGE_USERNAME",
    payload: text,
  };
};

export const loginHandler = (userData) => {
  return (dispatch) => {
    const { username, password } = userData;

    Axios.get(`${API_URL}/users`, {
      params: {
        username,
        password,
      },
    })
      .then((res) => {
        if (res.data.length > 0) {
          dispatch({
            type: "ON_LOGIN_SUCCESS",
            payload: res.data[0],
            // {
            //   id,
            //   username,
            //   password,
            //   fullName,
            //   role
            // }
          });
        } else {
          alert("masuk");
          dispatch({
            type: "ON_LOGIN_FAIL",
            payload: "Username atau password salah",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
