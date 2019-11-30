import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DropdownSimple from '../../components/navi/dropDown'
import SearchStandard from '../../components/navi/search'

const GridExampleEqualWidthColumn = () => (
  <Grid columns='equal'>
    <Grid.Column>
      <Segment>
        <DropdownSimple/>    

      </Segment>
    </Grid.Column>
    <Grid.Column width={8}>
      <Segment>
        <SearchStandard/>

      </Segment>
    </Grid.Column>
  </Grid>
)

export default GridExampleEqualWidthColumn
