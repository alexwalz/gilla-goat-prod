import React, {Component} from 'react'
import {Table, Button} from 'semantic-ui-react'


export const StatusButton = () => (
    <Button.Group size='large'>
      <Button inverted color="green">Email</Button>
      <Button.Or />
      <Button inverted color="red">Dismiss</Button>
    </Button.Group>
  )
  

class TableRow extends Component {

    
    render(response) {
    

      return (
        

      <Table.Row  style={{color:"white"}}>
        <Table.Cell textAlign='center'>{this.props.name}</Table.Cell>
        <Table.Cell textAlign='center'>{this.props.email}</Table.Cell>
        <Table.Cell textAlign='center'>{this.props.phone}</Table.Cell>
        <Table.Cell textAlign='center'>{this.props.message}</Table.Cell>
        <Table.Cell textAlign='center'><StatusButton/></Table.Cell>
      </Table.Row>


      );
    }
  }


export default TableRow