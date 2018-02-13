import React, { Component } from 'react';
import OuterLayer from "../../img/jungle_underground.png";

class JungleOuterLayer extends Component {
    render() {
        return (
            <img src={OuterLayer} alt="" style={{width: '100%', position: 'relative', height: '150vh'}}/>
        )
    }
}

export default JungleOuterLayer;