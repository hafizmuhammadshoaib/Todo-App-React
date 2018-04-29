import React, {Component} from 'react';
import Button from 'material-ui/Button';


export default class Button extends Component{
    render(){
        return(
    <Button variant="raised" color="primary">
      {this.props.name}
    </Button>
        )
    }
}