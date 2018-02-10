import React, { Component } from 'react';
import Moon from "../../img/Moon.png";
import {Transition } from 'semantic-ui-react'


class Stars extends Component {
    state = { visible: false }


    componentDidMount() {
        setTimeout(() => {
            this.setState({ visible: true })
        }, 100);
    }

    render() {
        return (
            <Transition animation='fly up' duration={2000} visible={this.state.visible}>
                <img src={Moon} alt="" style={{ position: 'relative', left: '75px' }} />
            </Transition>
        )
    }
}

export default Stars;