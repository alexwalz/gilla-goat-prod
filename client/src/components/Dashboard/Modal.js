import React, {Component} from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import UserRequests from './Requests'
var axios = require('axios');



class NavigationModal extends Component {

        state = { 
            userNumber: 0
         }


    componentDidMount() {
        let newUserNumber = 0
        let currentComponent = this;
        let currentStatus = this.props.status
        axios
          .get('/api/users')
          .then(function (response) {
            if(currentStatus === "All Users"){

                for (let i=0; i< response.data.length; i++){
                    newUserNumber++
                }

            }else{
            for (let i=0; i< response.data.length; i++){
                if (response.data[i].status === currentStatus){
                newUserNumber++
                }
            }
        }
    
            currentComponent.setState({userNumber: newUserNumber})
    
          })
          .catch(function (error) {
            console.log(error);
          });
      }

    render() { 
        return ( 
            <Modal trigger={<Button
                color='red'
                content={this.props.status}
                icon='user'
                label={{ basic: true, color: 'red', pointing: 'left', content: this.state.userNumber }}
                >
                </Button>} 
                basic>
            <Header icon='address book outline' content='User Information' />
            <Modal.Content>
              <UserRequests status={this.props.status} allUsers={true}/>
            </Modal.Content>
          </Modal>
         )
    }
}
 
export default NavigationModal ;

