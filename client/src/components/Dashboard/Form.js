import React, {Component} from 'react'
import { Form, Input, Button, Grid } from 'semantic-ui-react'
var axios = require('axios');



class DistributorForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            fist_name: '',
            last_name: '',
            email: '',
            phone: '',
            message: '',
            business: ''
         }
    }
    

    
    render() { 

        const submit = () =>{
             let formData = this.state

             axios({
                url: '/api/users',
                method: 'post',
                data: formData
              }).then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
            }

        const firstNameChange = (e) =>{
                this.setState({first_name: e.target.value});
        }

        const lastNameChange = (e) =>{
            this.setState({last_name: e.target.value});
        }

        const emailChange = (e) =>{
            this.setState({email: e.target.value});
        }

         const phoneChange = (e) =>{
             this.setState({phone: e.target.value});
         }

        const messageChange = (e) =>{
             this.setState({message: e.target.value});
        }

        return ( 
            <Form>
            <Form.Group>
            <Grid divided='vertically'>
                <Grid.Row columns={1}>
                <Grid.Column>
                    <Form.Field style={{color: "white"}} control={Input} label='First Name' placeholder='First Name' onChange={firstNameChange} />
                </Grid.Column>
                <Grid.Column>
                <Form.Field style={{color: "white"}} control={Input} label='Last Name' placeholder='Last Name' onChange={lastNameChange}  />
                </Grid.Column>
                <Grid.Column>
                <Form.Field style={{color: "white"}} control={Input} label='Email' placeholder='Email' onChange={emailChange}   />
                </Grid.Column>
                <Grid.Column>
                <Form.Field style={{color: "white"}} control={Input} label='Phone' placeholder='Phone Number' onChange={phoneChange}   />
                </Grid.Column>
                <Grid.Column>
                <Form.Field style={{color: "white"}} control={Input} label='Message' placeholder='Message' onChange={messageChange} />
                </Grid.Column>
                <Grid.Column>
                <Form.Field color="green" control={Button} content='Submit' onClick={submit}/>
                </Grid.Column>
                </Grid.Row>
            </Grid>
            </Form.Group>
          </Form>
         )
    }
}
 
export default DistributorForm;