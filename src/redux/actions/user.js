import Axios from "axios";
import { API_URL } from "../../constants/API";
import Cookie from "universal-cookie";

const cookieObj = new Cookie();

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

export const userKeepLogin = (userData) => {
  return (dispatch) => {
    Axios.get(`${API_URL}/users`, {
      params: {
        id: userData.id,
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

export const logoutHandler = () => {
  cookieObj.remove("authData");
  return {
    type: "ON_LOGOUT_SUCCESS",
  };
};
