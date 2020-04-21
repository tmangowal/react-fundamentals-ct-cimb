export const todoInputHandler = (text) => {
  return {
    type: "ON_CHANGE_TODO_INPUT",
    payload: text,
  };
};

export const addTodoHandler = (todoItem) => {
  return {
    type: "ADD_TODO",
    payload: todoItem,
  };
};
