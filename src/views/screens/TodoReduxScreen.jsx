import React from "react";
import { connect } from "react-redux";
import {
  todoInputHandler,
  usernameInputHandler,
  addTodoHandler,
} from "../../redux/actions";

class TodoReduxScreen extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Todo Screen</h1>
        <input
          type="text"
          className="form-control"
          placeholder="Input Todo Item"
          onChange={(e) => this.props.onChangeTodo(e.target.value)}
        />
        <input
          className="btn btn-primary"
          type="button"
          value="Add Todo"
          onClick={() => this.props.onAddTodo(this.props.todo.todoInput)}
        />
        {this.props.todo.todoList.map((val) => {
          return <p>{val}</p>;
        })}
      </div>
    );
  }
}

// Supaya reducer bisa diakses component lewat props
const mapStateToProps = (state) => {
  return {
    todo: state.haha,
    user: state.user,
  };
};

// Supaya action bisa diakses component lewat props
// dan action bisa berhubungan dengan reducer
const mapDispatchToProps = {
  onChangeTodo: todoInputHandler,
  onChangeUsername: usernameInputHandler,
  onAddTodo: addTodoHandler,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoReduxScreen);
