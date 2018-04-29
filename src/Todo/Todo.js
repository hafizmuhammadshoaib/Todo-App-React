import React, { Component } from "react";
import ListItems from "./ListItems";
import Input from "./Input";
import "./Todo.css";
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { taskInput: { text: "" }, taskArray: [], buttonName: "Add", buttonHandler: this.addHandler };
  }
  inputHandler = event => {
    console.log(event.target.value)
    this.setState({ taskInput: { text: event.target.value } });
  };
  addHandler = () => {
    // this.taskArray.push({id:new Date().getTime(),task:this.state.taskInput});

    this.setState({
      taskInput: { text: "" },
      taskArray: [
        ...this.state.taskArray,
        { id: new Date().getTime(), task: this.state.taskInput.text }
      ]
    });


  };
  updateTheTask = (key) => {
    let { state } = this;
    console.log(this);
    let index = state.taskArray.findIndex(element => element.id == key);
    state.taskArray[index].task = this.state.taskInput.text;
    state.buttonName = "Add";
    state.buttonHandler = this.addHandler;
    state.taskInput = { text: "" }

    // this.setState({ taskArray:state.taskArray,buttonName:"Add",buttonHandler:this.addHandler,taskInput:{text:""} });
    this.setState(state);
  }

  updateHandler = key => {
    let index = this.state.taskArray.findIndex(element => element.id == key);
    this.setState({ buttonName: "Update", buttonHandler: () => this.updateTheTask(key), taskInput: { text: this.state.taskArray[index].task } })

    // let updatedTask = prompt(
    //   "Enter Updated Task",
    //   this.state.taskArray[index].task
    // );

  }

  delHandler = key => {
    this.setState({
      taskArray: this.state.taskArray.filter(value => {
        return value.id !== key;
      })
    });
  };

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
          {this.state.taskArray.map(value => {
            return <ListItems id={value.id} task={value.task} updateEv={() => { this.updateHandler(value.id) }} deleteEv={() => { this.delHandler(value.id) }} />

          })}
        </ul>

      </div>
    );
  }
}
