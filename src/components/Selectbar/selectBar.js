import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DropdownSimple from './dropDown'
import Search from './search'

const SelectBar = () => (
  <Segment>
    <Grid>
    <Grid.Row columns={2}> 
      <Grid.Column width={4}>
        <DropdownSimple/>    
      </Grid.Column>
      <Grid.Column width={12}>
        <Search/>
      </Grid.Column>
    </Grid.Row>
    </Grid>
  </Segment>
)

export default SelectBar
