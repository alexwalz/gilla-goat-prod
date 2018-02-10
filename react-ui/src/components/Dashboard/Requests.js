import React, {Component} from 'react'
import {Table, Container, Button} from 'semantic-ui-react'
import TableRow from './TableRow'

var axios = require('axios');

export const StatusButton = () => (
  <Button.Group size='large'>
    <Button color="green">Approve</Button>
    <Button.Or/>
    <Button color="red">Dismiss</Button>
  </Button.Group>
)

class InfoRequests extends Component {

  constructor(props) {

    super(props);
    this.state = {
      users: []
    }
    
  }



  

  componentDidMount() {
    let propsStatus = this.props.status
    let currentComponent = this;

    axios
      .get('/api/users')
      .then(function (response) {
        currentComponent.setState({users: response.data})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  

  render() {

    let propsStatus = this.props.status

    const renderUsers = this.state.users
      .map(function (user, i) {
        var name = user.first_name + " " + user.last_name
       if (user.status === propsStatus) {
          return <TableRow
            name={name}
            email={user.email}
            phone={user.phone}
            message={user.message}
            />
        }

      });


      const renderAllUsers = this.state.users
      .map(function (user, i) {
        var name = user.first_name + " " + user.last_name
        if (propsStatus === "All Users") {
          return <TableRow
            name={name}
            email={user.email}
            phone={user.phone}
            message={user.message}
            />
        }
      });

    return (

      <Container textAlign='center'>

        <h1 className="title">{propsStatus}</h1>

        <Table
          basic='very'
          celled
          collapsing
          
          style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "3%"
        }}>
          <Table.Header>
            <Table.Row >
              <Table.HeaderCell textAlign='center' style={{width: "15%", color: "#F8CC47"}}>Name</Table.HeaderCell>
              <Table.HeaderCell textAlign='center' style={{width: "15%", color: "#F8CC47"}}>Email</Table.HeaderCell>
              <Table.HeaderCell textAlign='center'style={{width: "15%", color: "#F8CC47"}}>Phone Number</Table.HeaderCell>
              <Table.HeaderCell textAlign='center' style={{width: "40%", color: "#F8CC47"}}>Message</Table.HeaderCell>
              <Table.HeaderCell textAlign='center' style={{width: "15%", color: "#F8CC47"}}>Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body >
            {renderUsers}
            {renderAllUsers}
          </Table.Body>

        </Table>

      </Container>

    );
  }
}

export default InfoRequests