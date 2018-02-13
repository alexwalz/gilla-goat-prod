import React, { Component } from 'react';
import Cactus from "../../img/cactus.png";

class CactusLayer extends Component {
    render() {
        return (
            <img src={Cactus} alt="" style={{width: '100%', position: 'relative', bottom: '160px'}}/>
        )
    }
}

export default CactusLayer;