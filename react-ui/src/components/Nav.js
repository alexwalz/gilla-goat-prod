import React, { Component } from 'react';
import NavLogo from '../img/nav-logo.png'
import { Sidebar, Menu, Dimmer } from 'semantic-ui-react'


class Nav extends Component {
    state = { visible: false }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    handleShow = () => this.setState({ visible: true })
    handleHide = () => this.setState({ visible: false })
    render() {
        const { visible } = this.state
        return (
            <Sidebar.Pushable style={{ width: '100%' }}>
                <Sidebar
                    as={Menu}
                    animation='push'
                    width='thin'
                    direction='right'
                    visible={visible}
                    icon='labeled'
                    vertical
                    inverted
                >
                    {/* nav links will go here */}
                </Sidebar>
                <Sidebar.Pusher>

                    <Dimmer.Dimmable dimmed={visible} style={{ height: '100vh', zIndex: '-1' }}>
                        <Dimmer active={visible} onClickOutside={this.handleHide} style={{ zIndex: '-1' }}/>
                        <div className="nav-icon">

                            <img src={NavLogo} alt="" className='nav-icon-img' onClick={this.toggleVisibility} style={{ float: 'right' }} />

                        </div>
                    </Dimmer.Dimmable>
                </Sidebar.Pusher>

            </Sidebar.Pushable>
        )
    }
}

export default Nav;