import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    todoData: [
      {
        id: "1",
        title: "공부",
        completed: false,
      },
    ],
    value: "",
  };

  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  getStyle = (id) => {
    return {
      padding: "10px",
      borderBottom: "1px dotted #ccc",
      textDecoration: "none",
    };
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    };

    this.setState({ todoData: [...this.state.todoData, newTodo], value: "" });
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id !== id);
    this.setState({ todoData: newTodoData });
  };

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>

          <form style={{ display: "flex" }} onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="value"
              placeholder="해야 할 일을 입력하세요."
              style={{ flex: "10", padding: "5px" }}
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              value="입력"
              className="btn"
              style={{ flext: "1" }}
            />
          </form>

          {this.state.todoData.map((data) => (
            <div style={this.getStyle()} key={data.id}>
              <input type="checkbox" defaultChecked={false} /> {data.title}
              <button
                onClick={() => this.handleClick(data.id)}
                style={this.btnStyle}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
