const init_state = {
  todoInput: "",
  todoList: [],
};

export default (state = init_state, action) => {
  return { ...state };
};
