import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'


class ContactForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form style={{color: "white"}}>
        <Form.Group widths='equal' style={{color: "white"}}>
          <Form.Input style={{color: "white"}} fluid label='First name' placeholder='First name' />
          <Form.Input style={{color: "white"}} fluid label='Last name' placeholder='Last name' />
          <Form.Input style={{color: "white"}} fluid label='Email' placeholder='johndoe@johndoe.com' />
          <Form.Input style={{color: "white"}} fluid label='Phone Number' placeholder='801-123-4567' />
        </Form.Group>
        <Form.TextArea label='About' placeholder='Tell us more about you...' />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default ContactForm