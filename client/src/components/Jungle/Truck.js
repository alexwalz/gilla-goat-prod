import React, { Component } from 'react';
import Truck from "../../img/truck-3.png";

class TruckLayer extends Component {
    render() {
        return (
            <img src={Truck} alt="" style={{ height: '690px', width: 'auto'}}/>
        )
    }
}

export default TruckLayer;