import React, { Component } from 'react';
import Truck from "../../img/truck-4.png";

class TruckLayer extends Component {
    render() {
        return (
            <img src={Truck} alt="" style={{ height: '500px', width: 'auto'}}/>
        )
    }
}

export default TruckLayer;