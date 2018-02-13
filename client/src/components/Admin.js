import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react'
import Layout from './Admin/Navbar'
import API from '../utils/API'
import Navbar from '../components/Admin/Navbar'

export default class AdminPage extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            users:[]
         }
    }
    
      componentDidMount() {
        this.loadUsers();
      }
    
      loadUsers = () => {
        console.log("Loading Users")
        API.getusers()
          .then(res =>
            this.setState({ users: res.data })
          ).then(() =>
            console.log(this.state.users)
          )
          .catch(err => console.log(err));
      };

      

    render() { 

        return ( 
        
            
              <Grid columns={2} divided>
                <Grid.Row stretched>
                  <Grid.Column>
                    <Segment> <Navbar  data={this.props.state}/> </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>1</Segment>
                    <Segment>2</Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>1</Segment>
                    <Segment>2</Segment>
                    <Segment>3</Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            

         )
    }
}

 
