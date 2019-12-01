import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Label, Icon } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item>
          <Label size='huge' color='yellow'>
            <Icon name='fire'/>
            Super Warm
          </Label>
        </Menu.Item>
        <Menu.Item
          as={ Link }
          to='/'
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>
        <Menu.Item
          as={ Link }
          to='/advice'
          name='Advice'
          active={activeItem === 'Advice'}
          onClick={this.handleItemClick}
        >
          Forum
        </Menu.Item>
      </Menu>
    )
  }
}