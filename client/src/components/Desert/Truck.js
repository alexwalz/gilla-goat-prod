import React, { Component } from 'react';
import Truck from "../../img/truck-2.png";

class TruckLayer extends Component {
    render() {
        return (
            <img src={Truck} alt="" style={{ width: '740px', position: 'relative', left: '120px' }}/>
        )
    }
}

export default TruckLayer;