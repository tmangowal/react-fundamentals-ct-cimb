const init_state = {
  id: 0,
  username: "Doraemon",
};

export default (state = init_state, action) => {
  return { ...state };
};
