import React, { Component } from "react";
import { connect } from "react-redux";
import { deLeTaskAction } from "../redux/action/ToDoListAction";
import "./ToDoList.css";
class ToDoList extends Component {
  renderTaskList = () => {
    return this.props.taskList.map((task, index) => {
      return (
        <li className="task_item">
          <div>{task.name}</div>
          <div>
            <button
              className="btn btn-danger"
              onClick={(taskID) => {
                this.props.dispatch(deLeTaskAction(task.id));
              }}
            >
              X
            </button>
          </div>
        </li>
      );
    });
  };
  state = {
    taskName: " ",
  };
  render() {
    return (
      <div>
        <div className="container" style={{ marginTop: "50px" }}>
          <div id="todolist" classname="head">
            <h2>TO DO LIST</h2>
            <input
              onChange={(event) => {
                this.setState(
                  {
                    taskName: event.target.value,
                  },
                  () => {
                    console.log(this.state);
                  }
                );
              }}
              name="taskName"
              type="text"
              id="myInput"
              placeholder="Title..."
            />
            <span
              type="submit"
              classname="addBtn"
              onClick={() => {
                let { taskName } = this.state;

                let newtask = {
                  id: Date.now(),
                  name: taskName,
                  title: false,
                };
                console.log(newtask);
                this.props.dispatch({
                  type: "ADD_TASK",
                  newtask,
                });
              }}
            >
              Add
            </span>
          </div>
          <div classname="body">
            <ul id="myUL">{this.renderTaskList()}</ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    taskList: state.ToDoListReducer.taskList,
  };
};

export default connect(mapStateToProps)(ToDoList);
