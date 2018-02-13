import React, { Component } from 'react';
import Navbar from './Admin/Navbar'


class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Navbar/>
         )
    }
}
 
export default AdminPage;