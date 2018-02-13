import React, { Component } from 'react'
import SidebarLeftPush from './Dashboard/Sidebar'

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <SidebarLeftPush/>
      </div>
     )
  }
}
 
export default DashboardPage;
