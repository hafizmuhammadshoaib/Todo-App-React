import React, { Component } from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import "./Input.css";
export default class Input extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="parent-div">
                <Grid container >
                    <Grid item xs={8} sm={8}>
                        <TextField className="textField"
                            label="Enter Task" multiline value={this.props.value} onChange={this.props.onChange} />
                    </Grid>
                    <Grid item xs={4} sm={4}>
                        <Button className="taskBtn" style={{ backgroundColor: "#D500F9", fontWeight: "bold" }} variant="raised" color="primary" onClick={this.props.buttonHandler}>{this.props.buttonName}</Button>
                    </Grid>
                </Grid>
            </div>
        )
    }

}