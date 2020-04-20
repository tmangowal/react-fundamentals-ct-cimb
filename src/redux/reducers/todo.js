const init_state = {
  todoInput: "",
  todoList: [],
};

export default (state = init_state, action) => {
  if (action.type == "TODO_INPUT") {
    return { ...state, todoInput: action.payload };
  } else {
    return { ...state };
  }
};
