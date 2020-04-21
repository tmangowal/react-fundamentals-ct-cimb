const init_state = {
  todoInput: "Hello World!",
  todoList: [],
};

export default (state = init_state, action) => {
  if (action.type === "ON_CHANGE_TODO_INPUT") {
    return { ...state, todoInput: action.payload };
  }
  return { ...state };
};
