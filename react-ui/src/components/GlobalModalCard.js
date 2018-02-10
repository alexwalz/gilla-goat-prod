import React, {Component} from 'react'
import { Card, Button, Divider } from 'semantic-ui-react'



class GlobalModalCard extends Component {
  
    render() {
        
      return (
        
        <Card style={{backgroundColor: this.props.color, height: "15rem"}}>
        <Card.Content header={this.props.name}/>
        <Card.Content description={this.props.description} />
        <Divider horizontal><Button color="blue" >{this.props.buttonText}</Button></Divider>
      </Card>

      );
    }
  }


export default GlobalModalCard