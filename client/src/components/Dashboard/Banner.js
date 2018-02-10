import React, {Component} from 'react'
import { Divider, Segment } from 'semantic-ui-react'


class DashboardBanner extends Component {
  
    render() {
        
      return (

        <Segment inverted style={{marginTop: ""}}>
    <Divider inverted />
    <Divider horizontal inverted>Welcome, {this.props.name}</Divider>
  </Segment>

      );
    }
  }


export default DashboardBanner