import React, { Component } from "react";
import ListItems from "./ListItems";
import Input from "./Input";
import "./Todo.css";
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import TodoActions from '../store/TodoActions'
import { connect } from 'react-redux';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { taskInput: '',buttonName: "Add", buttonHandler: this.addHandler }
  }
  inputHandler = (ev) => {
    this.setState({ taskInput: ev.target.value })
  }
  addHandler = () => {
    this.props.add({ id: new Date().getTime(), task: this.state.taskInput })
    this.setState({ taskInput: '' })
  }
  updateHandler = key => {
    let index = this.props.taskArray.findIndex(element => element.id === key);
    this.setState({ buttonName: "Update", buttonHandler: () => { this.props.update(key, this.state.taskInput); this.afterUpdate() }, taskInput: this.props.taskArray[index].task })


  }
  afterUpdate = () => {
    this.setState({ buttonName: "Add", buttonHandler: this.addHandler, taskInput: "" })
  }

  render() {
    return (
      <div id="main-div" >
        <AppBar position="static" color="default" style={{ backgroundColor: "#EC407A" }}>
          <Toolbar>
            <Typography variant="title" color="inherit" style={{ color: "#FFF", fontWeight: "bold" }}>
              Todo-App
          </Typography>
          </Toolbar>
        </AppBar>

        <Input value={this.state.taskInput} onChange={this.inputHandler} buttonName={this.state.buttonName} buttonHandler={this.state.buttonHandler} />


        {/* <ul>
                    {this.state.taskArray.map((value) => {
                        return <li key={value.id}>{value.task} <button onClick={() => { this.updateHandler(value.id) }}>update</button> <button onClick={() => this.delHandler(value.id)}>delete</button></li>
                    })}
                </ul> */}

        <ul id="list">
          {this.props.taskArray.map(value => {
            return <ListItems id={value.id} task={value.task} updateEv={() => { this.updateHandler(value.id) }} deleteEv={() => { this.props.delete(value.id) }} />

          })}
        </ul>

      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    taskArray: state.todo
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    add: (value) => dispatch(TodoActions.add(value)),
    delete: (id) => dispatch(TodoActions.delete(id)),
    update: (id, inputValue) => dispatch(TodoActions.update(id, inputValue))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo)

