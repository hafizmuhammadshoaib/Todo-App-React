import React, { Component } from "react";
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import List, { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import "./ListItems.css";

export default class ListItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("List");
    return (


      <li key={this.props.id}>
        <List>
          <ListItem>
            <Grid container>

              <Grid item xs={4}>
                <span id="taskSpan" > {this.props.task}</span>
              </Grid>
              <Grid item xs={4}>
                <Button variant="raised" color="primary" onClick={this.props.updateEv}>Update</Button>
              </Grid>
              <Grid item xs={4}>
                <Button variant="raised" color="secondary" onClick={this.props.deleteEv}>Delete</Button>
              </Grid>
            </Grid>
          </ListItem>
          <Divider />
        </List>
      </li>


    );
  }
}
