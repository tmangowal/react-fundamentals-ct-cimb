export const todoInputHandler = (text) => {
  return {
    type: "ON_CHANGE_TODO_INPUT",
    payload: text,
  };
};
