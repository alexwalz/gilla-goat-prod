import React, { Component } from 'react';
import Truck from "../../img/truck-1.png";

class TruckLayer extends Component {
    render() {
        return (
            <img src={Truck} alt="" style={{ width: '700px' }}/>
        )
    }
}

export default TruckLayer;