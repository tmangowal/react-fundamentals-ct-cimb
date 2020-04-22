const init_state = {
  id: 0,
  username: "Doraemon",
  fullName: "",
  role: "",
  testing: "",
  testing2: "",
  errMsg: "",
};

// ON_LOGIN_SUCCESS
// state = {
//   id: 2,
//   username: "seto",
//   fullName: "seto 123",
//   role: "user",
//   testing: "",
//   testing2: "",
//   errMsg: "",
// };

// GANTI_ERROR_MSG
// state = {
//   id: 2,
//   username: "seto",
//   fullName: "seto 123",
//   role: "user",
//   testing: "",
//   testing2: "",
//   errMsg: "Ini error message",
// };

export default (state = init_state, action) => {
  if (action.type === "ON_CHANGE_USERNAME") {
    return { ...state, username: action.payload };
  } else if (action.type === "ON_LOGIN_SUCCESS") {
    const { username, fullName, role, id } = action.payload;
    return {
      ...state,
      username,
      fullName,
      role,
      id,
    };
  } else if (action.type === "ON_LOGIN_FAIL") {
    return { ...state, errMsg: action.payload };
  } else if (action.type === "GANTI_ERROR_MSG") {
    return { ...state, errMsg: action.payload };
  }
  return { ...state };
};
