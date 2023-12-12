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
