import React, { Component } from 'react';
import Trees from "../../img/trees_lake.png";

class TreeLayer extends Component {
    render() {
        return (
            <img src={Trees} alt="" style={{width: '100%', position: 'relative', bottom: '160px'}}/>
        )
    }
}

export default TreeLayer;