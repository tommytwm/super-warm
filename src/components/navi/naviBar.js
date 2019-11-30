import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DropdownSimple from '../../components/navi/dropDown'

const NaviBar = () => (
  <Grid columns='equal'>
    <Grid.Column>
      <Segment>
        <DropdownSimple/>    

      </Segment>
    </Grid.Column>
    <Grid.Column width={8}>
      <Segment>
      </Segment>
    </Grid.Column>
  </Grid>
)

export default NaviBar;
