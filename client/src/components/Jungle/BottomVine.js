import React, { Component } from 'react';
import Vine from "../../img/jungle_bottom_vine.png";
import {Transition } from 'semantic-ui-react'


class VineLayer extends Component {
    state = {
        visible: false
    }


    componentDidMount() {
        setTimeout(() => {
            this.setState({ visible: true })        
        }, 2000);
        this.shake();
    }

    shake = () => {
        this.setState({ visible: !this.state.visible })
        setTimeout(() => {
            this.shake();
        }, 3000);
    }

    render() {
        const {visible } = this.state
        return (
            <Transition animation='bounce' duration={1000} visible={visible}>
                <img src={Vine} alt="" style={{ height: '380px', position: 'relative', bottom: '100px' }} />
            </Transition>

        )
    }
}

export default VineLayer;