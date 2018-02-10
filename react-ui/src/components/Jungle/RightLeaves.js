import React, { Component } from 'react';
import Leaves from "../../img/jungle_right_leaves.png";
import {Transition } from 'semantic-ui-react'


class LeavesLayer extends Component {

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
        }, 3500);
    }

    render() {
        const {visible } = this.state
        return (
            <Transition animation='shake' duration={900} visible={visible}>
                <img src={Leaves} alt="" style={{ width: '450px' }} />
            </Transition>

        )
    }
}

export default LeavesLayer;