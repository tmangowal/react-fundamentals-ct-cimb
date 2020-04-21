const init_state = {
  id: 0,
  username: "Doraemon",
};

export default (state = init_state, action) => {
  if (action.type === "ON_CHANGE_USERNAME") {
    return { ...state, username: action.payload };
  }
  return { ...state };
};
