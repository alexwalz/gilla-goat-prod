import React, { Component } from 'react';
import Leaves from "../../img/jungle_left_leaves.png";
import {Transition } from 'semantic-ui-react'


class LeavesLayer extends Component {
    state = {
        visible: false
    }


    componentDidMount() {
        setTimeout(() => {
            this.setState({ visible: true })        
        }, 1000);
        this.shake();
    }

    shake = () => {
        this.setState({ visible: !this.state.visible })
        setTimeout(() => {
            this.shake();
        }, 4500);
    }

    render() {
        const {visible } = this.state
        return (
            <Transition animation='shake' duration={1000} visible={visible}>
                <img src={Leaves} alt="" style={{ width: '325px' }} />
            </Transition>

        )
    }
}

export default LeavesLayer;