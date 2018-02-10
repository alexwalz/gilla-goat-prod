import React, { Component } from 'react'
import { Sidebar,Menu, Icon } from 'semantic-ui-react'
import NavigationModal from './Modal'
import FormModal from './FormModal'

class SidebarLeftPush extends Component {
  state = { visible: true }


  render() {
    return (
      <div>
          <Sidebar as={Menu} visible={true} icon='labeled' vertical inverted>
            <Menu.Item name='Pending'>
              <Icon name='circle thin' />
              <NavigationModal status="Pending"/>
            </Menu.Item>
            <Menu.Item name='Dismissed'>
              <Icon name='alarm mute outline' />
              <NavigationModal status="Dismissed"/>
            </Menu.Item>
            <Menu.Item name='All Users'>
              <Icon name='users' />
              <NavigationModal status="All Users"/>
            </Menu.Item>

            <Menu.Item name='Add Users'>
              <Icon name='address card outline' />
              <FormModal status="Users" />
            </Menu.Item>


          </Sidebar>

      </div>
    )
  }
}

export default SidebarLeftPush