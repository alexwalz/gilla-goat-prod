import React, {Component} from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import DistributorForm from './Form'



class FormModal extends Component {


    render() { 
        return ( 
            <Modal trigger={<Button
                color='blue'
                content={this.props.status}
                icon='user'
                label={{ basic: true, color: 'blue', pointing: 'left', content: "New" }}
                >
                </Button>} 
                basic>
            <Header icon='address book outline' content='New User Creation' />
            <Modal.Content>
              <DistributorForm />
            </Modal.Content>
          </Modal>
         )
    }
}
 
export default FormModal ;