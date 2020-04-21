import React from "react";
import { connect } from "react-redux";
import { todoInputHandler } from "../../redux/actions";

class TodoReduxScreen extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Todo Screen</h1>
        <h2>{this.props.todo.todoInput}</h2>
        <input
          type="text"
          className="form-control"
          placeholder="Input Todo Item"
          onChange={(e) => this.props.onChangeTodo(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Input Username"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.haha,
  };
};

const mapDispatchToProps = {
  onChangeTodo: todoInputHandler,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoReduxScreen);
