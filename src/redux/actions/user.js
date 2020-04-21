export const usernameInputHandler = (text) => {
  return {
    type: "ON_CHANGE_USERNAME",
    payload: text,
  };
};
