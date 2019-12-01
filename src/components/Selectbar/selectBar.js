import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DropdownSimple from './dropDown'
import Search from './search'

const SelectBar = () => (
  <Grid columns='equal'>
    <Grid.Column>
      <Segment>
        <DropdownSimple/>    
      </Segment>
    </Grid.Column>
    <Grid.Column width={8}>
      <Segment>
        <Search/>
      </Segment>
    </Grid.Column>
  </Grid>
)

export default SelectBar
