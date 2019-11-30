import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
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
          to='/forum'
          name='Forum'
          active={activeItem === 'Forum'}
          onClick={this.handleItemClick}
        >
          Forum
        </Menu.Item>
      </Menu>
    )
  }
}