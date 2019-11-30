import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Stress', value: 1 },
  { key: 2, text: 'Anxiety', value: 2 },
  { key: 3, text: 'Sadness', value: 3 },
  { key: 4, text: 'Overwhelm', value: 4 },
]

const DropdownSimple = () => (
  <Menu compact>
    <Dropdown text='Dropdown' options={options} simple item />
  </Menu>
)

export default DropdownSimple